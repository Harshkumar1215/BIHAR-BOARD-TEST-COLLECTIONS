/**
 * Analytics Engine
 * Calculates student statistics, topic-wise accuracy, weak area detection,
 * recommended practice items, and session history in LocalStorage.
 */

window.AnalyticsEngine = {

  STORAGE_KEY_SESSIONS: "bseb_10_sessions_v1",
  STORAGE_KEY_ATTEMPTS: "bseb_10_attempts_v1",

  getSessions: function () {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY_SESSIONS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveSession: function (result) {
    const sessions = this.getSessions();
    sessions.unshift(result); // latest first
    localStorage.setItem(this.STORAGE_KEY_SESSIONS, JSON.stringify(sessions));

    // Also update question attempts log
    this._recordQuestionAttempts(result);
  },

  _recordQuestionAttempts: function (result) {
    let attempts = [];
    try {
      const data = localStorage.getItem(this.STORAGE_KEY_ATTEMPTS);
      attempts = data ? JSON.parse(data) : [];
    } catch (e) { attempts = []; }

    result.details.forEach(detail => {
      attempts.push({
        question_id: detail.question_id,
        subject_id: detail.subject_id,
        book_id: detail.book_id,
        chapter_id: detail.chapter_id,
        topic_id: detail.topic_id,
        selected_option: detail.selected_option,
        is_correct: detail.is_correct,
        timestamp: Date.now()
      });
    });

    localStorage.setItem(this.STORAGE_KEY_ATTEMPTS, JSON.stringify(attempts));
  },

  getQuestionAttempts: function () {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY_ATTEMPTS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  /**
   * Overall Student Dashboard Summary Statistics
   */
  getOverallStats: function () {
    const sessions = this.getSessions();
    if (sessions.length === 0) {
      return {
        totalTests: 0,
        totalAttempted: 0,
        totalCorrect: 0,
        totalIncorrect: 0,
        accuracy: 0,
        bestScorePercent: 0,
        totalTimeSeconds: 0,
        currentStreak: 0
      };
    }

    let totalAttempted = 0;
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalTime = 0;
    let maxPercent = 0;

    sessions.forEach(s => {
      totalAttempted += (s.attemptedCount || 0);
      totalCorrect += (s.correctCount || 0);
      totalIncorrect += (s.incorrectCount || 0);
      totalTime += (s.timeTakenSeconds || 0);
      if (s.percentage > maxPercent) maxPercent = s.percentage;
    });

    const accuracy = totalAttempted > 0 ? ((totalCorrect / totalAttempted) * 100).toFixed(1) : 0;

    return {
      totalTests: sessions.length,
      totalAttempted: totalAttempted,
      totalCorrect: totalCorrect,
      totalIncorrect: totalIncorrect,
      accuracy: parseFloat(accuracy),
      bestScorePercent: maxPercent,
      totalTimeSeconds: totalTime,
      currentStreak: sessions.length > 0 ? Math.min(sessions.length, 7) : 0
    };
  },

  /**
   * Weak-Topic & Strong-Topic Performance Breakdown (Section 31 & 32)
   */
  getTopicPerformance: function () {
    const attempts = this.getQuestionAttempts();
    const topicStats = {};

    attempts.forEach(a => {
      if (!a.topic_id) return;
      if (!topicStats[a.topic_id]) {
        topicStats[a.topic_id] = {
          topic_id: a.topic_id,
          chapter_id: a.chapter_id,
          subject_id: a.subject_id,
          total: 0,
          correct: 0,
          incorrect: 0
        };
      }

      if (a.selected_option) {
        topicStats[a.topic_id].total++;
        if (a.is_correct) topicStats[a.topic_id].correct++;
        else topicStats[a.topic_id].incorrect++;
      }
    });

    const strongTopics = [];
    const moderateTopics = [];
    const weakTopics = [];

    Object.values(topicStats).forEach(st => {
      if (st.total === 0) return;
      const acc = (st.correct / st.total) * 100;
      st.accuracy = parseFloat(acc.toFixed(1));

      if (st.accuracy >= 75) {
        st.status = "Strong (मजबूत)";
        st.statusBadge = "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
        strongTopics.push(st);
      } else if (st.accuracy >= 50) {
        st.status = "Practice More (और अभ्यास करें)";
        st.statusBadge = "bg-amber-500/20 text-amber-400 border-amber-500/30";
        moderateTopics.push(st);
      } else {
        st.status = "Needs Improvement (कमजोर क्षेत्र)";
        st.statusBadge = "bg-rose-500/20 text-rose-400 border-rose-500/30";
        weakTopics.push(st);
      }
    });

    return {
      all: Object.values(topicStats),
      strong: strongTopics,
      moderate: moderateTopics,
      weak: weakTopics
    };
  },

  /**
   * Adaptive Recommended Practice Items (Section 33)
   */
  getRecommendations: function (syllabus) {
    const topicPerf = this.getTopicPerformance();
    const recommendations = [];

    // Recommendation 1: Weak Topics (<50%)
    topicPerf.weak.forEach(t => {
      recommendations.push({
        id: 'rec_weak_' + t.topic_id,
        type: 'weak_topic',
        title: { hi: "कमजोर विषय अभ्यास", en: "Weak Topic Revision" },
        reason: { hi: `आपकी सटीकता ${t.accuracy}% है। इसमें और सुधार की आवश्यकता है।`, en: `Your accuracy is ${t.accuracy}%. Needs improvement!` },
        subject_id: t.subject_id,
        chapter_id: t.chapter_id,
        topic_id: t.topic_id,
        badgeText: "High Priority",
        badgeColor: "bg-rose-500/20 text-rose-400"
      });
    });

    // Recommendation 2: Moderate Topics (50-75%)
    topicPerf.moderate.forEach(t => {
      recommendations.push({
        id: 'rec_mod_' + t.topic_id,
        type: 'moderate_topic',
        title: { hi: "माध्यम विषय अभ्यास", en: "Topic Booster" },
        reason: { hi: `आपकी सटीकता ${t.accuracy}% है। 75%+ तक पहुँचने के लिए टेस्ट दें।`, en: `Current accuracy ${t.accuracy}%. Push it to 75%+!` },
        subject_id: t.subject_id,
        chapter_id: t.chapter_id,
        topic_id: t.topic_id,
        badgeText: "Recommended",
        badgeColor: "bg-amber-500/20 text-amber-400"
      });
    });

    // Recommendation 3: Default exploration for subjects
    if (recommendations.length === 0 && syllabus && syllabus.subjects) {
      syllabus.subjects.forEach(sub => {
        recommendations.push({
          id: 'rec_sub_' + sub.id,
          type: 'subject_starter',
          title: { hi: `${sub.name.hi} अभ्यास`, en: `${sub.name.en} Practice` },
          reason: { hi: `अपने ${sub.name.hi} ज्ञान का परीक्षण करें और MCQs हल करें।`, en: `Start exploring ${sub.name.en} practice MCQs.` },
          subject_id: sub.id,
          badgeText: "Get Started",
          badgeColor: "bg-blue-500/20 text-blue-400"
        });
      });
    }

    return recommendations;
  }
};
