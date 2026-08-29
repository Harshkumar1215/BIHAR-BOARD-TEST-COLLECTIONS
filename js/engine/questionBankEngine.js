/**
 * Question Bank Engine
 * Handles strict MCQ validation, duplicate detection, option shuffling,
 * correct answer re-indexing, dynamic scope querying, and count rollups.
 */

window.QuestionBankEngine = {

  /**
   * Strict MCQ Validation Pipeline (Section 22)
   */
  validateMCQ: function (q) {
    if (!q || typeof q !== 'object') return { valid: false, reason: "Invalid question object structure" };

    // Required fields check
    if (!q.id || !q.subject_id || !q.book_id || !q.chapter_id || !q.topic_id) {
      return { valid: false, reason: "Missing required syllabus tags (subject, book, chapter, topic)" };
    }

    // Language text check
    if (!q.question || (!q.question.hi && !q.question.en)) {
      return { valid: false, reason: "Question text must be provided in Hindi or English" };
    }

    // Options check
    if (!q.options || !q.options.hi || !q.options.en) {
      return { valid: false, reason: "Options A, B, C, D must be present in both Hindi and English" };
    }

    const requiredKeys = ['A', 'B', 'C', 'D'];
    for (let k of requiredKeys) {
      if (!q.options.hi[k] || !q.options.en[k]) {
        return { valid: false, reason: `Option ${k} is missing or empty` };
      }
    }

    // Single correct answer check
    if (!q.correct_option || !['A', 'B', 'C', 'D'].includes(q.correct_option.toUpperCase())) {
      return { valid: false, reason: "Invalid correct option index. Must be one of A, B, C, or D" };
    }

    // Explanation check
    if (!q.explanation || (!q.explanation.hi && !q.explanation.en)) {
      return { valid: false, reason: "Explanation must be present" };
    }

    return { valid: true };
  },

  /**
   * Duplicate Detection (Section 21)
   */
  isDuplicate: function (newQ, bank) {
    const normalize = str => (str || '').toLowerCase().replace(/[^a-z0-9अ-ह0-9]/g, '');

    const normHiNew = normalize(newQ.question ? newQ.question.hi : '');
    const normEnNew = normalize(newQ.question ? newQ.question.en : '');

    for (let item of bank) {
      if (item.id === newQ.id) continue;

      const normHiExist = normalize(item.question ? item.question.hi : '');
      const normEnExist = normalize(item.question ? item.question.en : '');

      if ((normHiNew && normHiNew === normHiExist) || (normEnNew && normEnNew === normEnExist)) {
        return { duplicate: true, matchedId: item.id, reason: "Exact or normalized text match" };
      }
    }
    return { duplicate: false };
  },

  /**
   * Shuffle Option Order & Update Correct Answer Index (Section 17 & 18)
   */
  shuffleOptions: function (q, lang) {
    // Clone original question
    const cloned = JSON.parse(JSON.stringify(q));
    const currentCorrect = cloned.correct_option.toUpperCase();

    // Map original keys A, B, C, D to their text values
    const optObjHi = cloned.options.hi;
    const optObjEn = cloned.options.en;

    const originalArray = [
      { key: 'A', textHi: optObjHi.A, textEn: optObjEn.A },
      { key: 'B', textHi: optObjHi.B, textEn: optObjEn.B },
      { key: 'C', textHi: optObjHi.C, textEn: optObjEn.C },
      { key: 'D', textHi: optObjHi.D, textEn: optObjEn.D }
    ];

    // Fisher-Yates shuffle
    for (let i = originalArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [originalArray[i], originalArray[j]] = [originalArray[j], originalArray[i]];
    }

    // Reassign keys A, B, C, D
    const keys = ['A', 'B', 'C', 'D'];
    const newOptionsHi = {};
    const newOptionsEn = {};
    let newCorrectKey = 'A';

    originalArray.forEach((item, index) => {
      const newKey = keys[index];
      newOptionsHi[newKey] = item.textHi;
      newOptionsEn[newKey] = item.textEn;

      if (item.key === currentCorrect) {
        newCorrectKey = newKey;
      }
    });

    cloned.options.hi = newOptionsHi;
    cloned.options.en = newOptionsEn;
    cloned.correct_option = newCorrectKey;

    return cloned;
  },

  /**
   * Centralized Query Engine: Collect Eligible Questions by Scope
   */
  getQuestionsByScope: function (bank, filter) {
    if (!bank || !Array.isArray(bank)) return [];

    return bank.filter(q => {
      if (filter.subject_id && q.subject_id !== filter.subject_id) return false;
      if (filter.book_id && q.book_id !== filter.book_id) return false;
      if (filter.chapter_id && q.chapter_id !== filter.chapter_id) return false;
      if (filter.topic_id && q.topic_id !== filter.topic_id) return false;
      if (filter.difficulty && filter.difficulty !== 'All' && q.difficulty !== filter.difficulty) return false;
      return true;
    });
  },

  /**
   * Calculate Dynamic Question Counts Rollup for Hierarchy
   */
  getDynamicCounts: function (bank) {
    const counts = {
      subjects: {},
      books: {},
      chapters: {},
      topics: {},
      total: bank.length
    };

    bank.forEach(q => {
      counts.subjects[q.subject_id] = (counts.subjects[q.subject_id] || 0) + 1;
      counts.books[q.book_id] = (counts.books[q.book_id] || 0) + 1;
      counts.chapters[q.chapter_id] = (counts.chapters[q.chapter_id] || 0) + 1;
      counts.topics[q.topic_id] = (counts.topics[q.topic_id] || 0) + 1;
    });

    return counts;
  }
};
