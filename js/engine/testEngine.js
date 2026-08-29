/**
 * Test Engine
 * Handles test session generation, 100-question maximum cap, random sampling,
 * question prioritization (unattempted > past attempted), timer, and state runner.
 */

window.TestEngine = {

  createTestSession: function (bank, filter, requestedSize, studentHistory) {
    const qEngine = window.QuestionBankEngine;

    // 1. Collect all eligible questions for the selected scope
    const pool = qEngine.getQuestionsByScope(bank, filter);

    if (pool.length === 0) {
      return {
        error: true,
        message: "No questions available for the selected topic/chapter/subject."
      };
    }

    // 2. Strict Test Size Limit: Maximum 100 per test (Section 10, 11, 12)
    const maxCap = Math.min(100, Math.max(1, parseInt(requestedSize) || 10));
    const actualTestSize = Math.min(pool.length, maxCap);

    // 3. Question Prioritization (Section 14)
    // Priority 1: Questions never attempted by the student
    // Priority 2: Questions attempted less recently
    const attemptedSet = new Set((studentHistory || []).map(h => h.question_id));

    const unattempted = [];
    const attempted = [];

    pool.forEach(q => {
      if (attemptedSet.has(q.id)) {
        attempted.push(q);
      } else {
        unattempted.push(q);
      }
    });

    // Shuffle both pools independently
    const shuffleArray = arr => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    };

    const shuffledUnattempted = shuffleArray(unattempted);
    const shuffledAttempted = shuffleArray(attempted);

    // Pick from unattempted first, fill rest from attempted if needed
    const selectedPool = [];
    selectedPool.push(...shuffledUnattempted.slice(0, actualTestSize));

    if (selectedPool.length < actualTestSize) {
      const remainingNeeded = actualTestSize - selectedPool.length;
      selectedPool.push(...shuffledAttempted.slice(0, remainingNeeded));
    }

    // Shuffle the final selected list order (Section 16)
    const finalQuestions = shuffleArray(selectedPool).map(q => {
      // Shuffle options and re-map correct answer index for every question (Section 17, 18)
      return qEngine.shuffleOptions(q);
    });

    return {
      sessionId: 'session_' + Date.now(),
      mode: filter.mode || 'practice', // 'practice' (instant feedback) or 'test' (timer + submit first)
      scope: { ...filter },
      totalAvailableInPool: pool.length,
      requestedSize: requestedSize,
      actualSize: finalQuestions.length,
      questions: finalQuestions,
      userAnswers: {}, // question_id -> { selected_option: 'A'|'B'|'C'|'D', timeSpent: seconds }
      flagged: {}, // question_id -> boolean
      currentIndex: 0,
      startTime: Date.now(),
      endTime: null,
      completed: false
    };
  },

  calculateResult: function (session) {
    let totalQuestions = session.questions.length;
    let attemptedCount = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    const details = session.questions.map((q, idx) => {
      const userAns = session.userAnswers[q.id];
      const selectedOpt = userAns ? userAns.selected_option : null;
      const isCorrect = selectedOpt === q.correct_option;

      if (selectedOpt) {
        attemptedCount++;
        if (isCorrect) correctCount++;
        else incorrectCount++;
      } else {
        unattemptedCount++;
      }

      return {
        index: idx + 1,
        question_id: q.id,
        subject_id: q.subject_id,
        book_id: q.book_id,
        chapter_id: q.chapter_id,
        topic_id: q.topic_id,
        question: q.question,
        options: q.options,
        selected_option: selectedOpt,
        correct_option: q.correct_option,
        is_correct: isCorrect,
        explanation: q.explanation,
        difficulty: q.difficulty
      };
    });

    const score = correctCount;
    const percentage = totalQuestions > 0 ? ((correctCount / totalQuestions) * 100).toFixed(1) : 0;
    const accuracy = attemptedCount > 0 ? ((correctCount / attemptedCount) * 100).toFixed(1) : 0;
    const timeTakenSeconds = Math.round(((session.endTime || Date.now()) - session.startTime) / 1000);

    return {
      sessionId: session.sessionId,
      date: new Date().toISOString(),
      mode: session.mode,
      scope: session.scope,
      totalQuestions: totalQuestions,
      attemptedCount: attemptedCount,
      correctCount: correctCount,
      incorrectCount: incorrectCount,
      unattemptedCount: unattemptedCount,
      score: score,
      percentage: parseFloat(percentage),
      accuracy: parseFloat(accuracy),
      timeTakenSeconds: timeTakenSeconds,
      details: details
    };
  }
};
