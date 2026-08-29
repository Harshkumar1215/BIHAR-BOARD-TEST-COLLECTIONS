/**
 * UI Components — Dynamic Renderers for all views
 * Renders subjects, chapters, MCQ runner, results, dashboard, analytics, history
 */

window.UI = {

  lang: 'hi', // default medium

  t: function (obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[this.lang] || obj.en || obj.hi || '';
  },

  formatTime: function (seconds) {
    if (!seconds || seconds <= 0) return '0s';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    if (m === 0) return s + 's';
    return m + 'm ' + s + 's';
  },

  // ====== HOME / SUBJECT SELECTOR ======
  renderHome: function (syllabus, counts) {
    const subjects = syllabus.subjects;
    const colors = {
      maths: { bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.4)', icon: '#3b82f6' },
      science: { bg: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.4)', icon: '#10b981' },
      social: { bg: 'rgba(245,158,11,0.15)', border: 'rgba(245,158,11,0.4)', icon: '#f59e0b' },
      hindi: { bg: 'rgba(225,29,72,0.15)', border: 'rgba(225,29,72,0.4)', icon: '#e11d48' },
      english: { bg: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.4)', icon: '#8b5cf6' },
      sanskrit: { bg: 'rgba(6,182,212,0.15)', border: 'rgba(6,182,212,0.4)', icon: '#06b6d4' }
    };
    const icons = { maths: '📐', science: '🔬', social: '🌍', hindi: '📕', english: '🇬🇧', sanskrit: '📜' };

    let html = `
      <div class="animate-fade" style="padding:1.5rem;max-width:1200px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:2rem;">
          <h1 style="font-size:1.75rem;font-weight:800;margin-bottom:0.5rem;">
            ${this.lang === 'hi' ? 'कक्षा 10 — बिहार बोर्ड (BSEB)' : 'Class 10 — Bihar Board (BSEB)'}
          </h1>
          <p style="color:var(--text-secondary);font-size:1rem;">
            ${this.lang === 'hi' ? 'MCQ अभ्यास मंच — विषय चुनें' : 'MCQ Practice Platform — Select a Subject'}
          </p>
          <div style="display:inline-flex;align-items:center;gap:0.5rem;margin-top:0.75rem;padding:0.35rem 0.85rem;border-radius:20px;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);font-size:0.85rem;color:#818cf8;">
            📊 ${this.lang === 'hi' ? 'कुल प्रश्न' : 'Total Questions'}: <strong>${counts.total}</strong>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.25rem;">`;

    subjects.forEach(sub => {
      const c = colors[sub.id] || colors.maths;
      const count = counts.subjects[sub.id] || 0;
      html += `
        <div class="subject-card" style="--card-accent:${c.icon};" onclick="App.selectSubject('${sub.id}')">
          <div class="icon-box" style="background:${c.bg};color:${c.icon};font-size:2rem;">${icons[sub.id] || '📖'}</div>
          <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:0.25rem;">${this.t(sub.name)}</h3>
          <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:0.75rem;">
            ${sub.books.length} ${this.lang === 'hi' ? 'पुस्तकें' : 'Books'} ・ ${count} ${this.lang === 'hi' ? 'प्रश्न' : 'Questions'}
          </p>
          <div style="display:flex;align-items:center;gap:0.5rem;color:${c.icon};font-size:0.85rem;font-weight:600;">
            ${this.lang === 'hi' ? 'अभ्यास शुरू करें' : 'Start Practice'} →
          </div>
        </div>`;
    });

    html += `</div></div>`;
    return html;
  },

  // ====== BOOK / CHAPTER SELECTOR ======
  renderSubjectDetail: function (subject, counts) {
    const colors = {
      maths: '#3b82f6', science: '#10b981', social: '#f59e0b',
      hindi: '#e11d48', english: '#8b5cf6', sanskrit: '#06b6d4'
    };
    const accent = colors[subject.id] || '#6366f1';

    let html = `
    <div class="animate-fade" style="padding:1.5rem;max-width:1200px;margin:0 auto;">
      <button onclick="App.goHome()" style="background:none;border:none;color:var(--text-secondary);cursor:pointer;font-size:0.9rem;margin-bottom:1rem;display:flex;align-items:center;gap:0.4rem;">
        ← ${this.lang === 'hi' ? 'वापस' : 'Back'}
      </button>
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:0.25rem;">${this.t(subject.name)}</h2>
      <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:1.5rem;">
        ${this.lang === 'hi' ? 'पुस्तक और अध्याय चुनें या विषय-स्तरीय अभ्यास करें' : 'Select a Book & Chapter or practice at Subject level'}
      </p>
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:1.5rem;">
        <button class="mode-card" onclick="App.startPracticeSetup('subject','${subject.id}',null,null,null)" style="border-color:${accent};">
          <span style="font-weight:700;color:${accent};">${this.lang === 'hi' ? '📝 पूरे विषय का अभ्यास' : '📝 Full Subject Practice'}</span>
          <span style="display:block;color:var(--text-muted);font-size:0.8rem;">${counts.subjects[subject.id] || 0} ${this.lang === 'hi' ? 'प्रश्न उपलब्ध' : 'questions available'}</span>
        </button>
      </div>`;

    subject.books.forEach(book => {
      const bookCount = counts.books[book.id] || 0;
      html += `
      <div style="margin-bottom:1.5rem;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;">
          <h3 style="font-size:1.1rem;font-weight:600;">📖 ${this.t(book.name)}</h3>
          <button class="mode-card" style="padding:0.5rem 1rem;font-size:0.8rem;" onclick="App.startPracticeSetup('book','${subject.id}','${book.id}',null,null)">
            ${this.lang === 'hi' ? 'पुस्तक अभ्यास' : 'Book Practice'} (${bookCount})
          </button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:0.75rem;">`;

      book.chapters.forEach(ch => {
        const chCount = counts.chapters[ch.id] || 0;
        html += `
          <div class="mode-card" onclick="App.selectChapter('${subject.id}','${book.id}','${ch.id}')" style="display:flex;flex-direction:column;gap:0.35rem;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;">
              <span style="font-weight:600;font-size:0.95rem;flex:1;">${this.t(ch.title)}</span>
              <span class="badge" style="background:rgba(255,255,255,0.08);color:var(--text-secondary);font-size:0.75rem;flex-shrink:0;">${chCount} Q</span>
            </div>
            <span style="color:var(--text-muted);font-size:0.78rem;">${ch.topics.length} ${this.lang === 'hi' ? 'विषय' : 'Topics'}</span>
          </div>`;
      });

      html += `</div></div>`;
    });

    html += `</div>`;
    return html;
  },

  // ====== CHAPTER DETAIL WITH TOPICS ======
  renderChapterDetail: function (subject, book, chapter, counts) {
    const chCount = counts.chapters[chapter.id] || 0;

    let html = `
    <div class="animate-fade" style="padding:1.5rem;max-width:900px;margin:0 auto;">
      <button onclick="App.selectSubject('${subject.id}')" style="background:none;border:none;color:var(--text-secondary);cursor:pointer;font-size:0.9rem;margin-bottom:1rem;display:flex;align-items:center;gap:0.4rem;">
        ← ${this.t(subject.name)}
      </button>
      <h2 style="font-size:1.35rem;font-weight:700;margin-bottom:0.25rem;">${this.t(chapter.title)}</h2>
      <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:1.25rem;">${this.t(book.name)} — ${chCount} ${this.lang === 'hi' ? 'प्रश्न' : 'Questions'}</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:1.5rem;">
        <button class="mode-card" onclick="App.startPracticeSetup('chapter','${subject.id}','${book.id}','${chapter.id}',null)" style="border-color:var(--accent-primary);">
          <span style="font-weight:700;color:var(--accent-primary);">📝 ${this.lang === 'hi' ? 'पूरे अध्याय का अभ्यास' : 'Full Chapter Practice'} (${chCount})</span>
        </button>
      </div>
      <h3 style="font-size:1rem;font-weight:600;margin-bottom:0.75rem;">${this.lang === 'hi' ? 'विषय (Topics)' : 'Topics'}</h3>
      <div style="display:grid;gap:0.6rem;">`;

    chapter.topics.forEach(topic => {
      const tCount = counts.topics[topic.id] || 0;
      html += `
        <div class="mode-card" onclick="App.startPracticeSetup('topic','${subject.id}','${book.id}','${chapter.id}','${topic.id}')" style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-weight:500;">${this.t(topic.title)}</span>
          <span class="badge" style="background:rgba(99,102,241,0.15);color:#818cf8;border:1px solid rgba(99,102,241,0.3);">${tCount} Q</span>
        </div>`;
    });

    html += `</div></div>`;
    return html;
  },

  // ====== PRACTICE / TEST SETUP MODAL ======
  renderPracticeSetup: function (scopeType, scopeLabel, availableCount) {
    const qOptions = [10, 20, 30, 50, 75, 100];
    const maxAvail = availableCount;

    let html = `
    <div class="modal-overlay" id="practice-setup-modal">
      <div class="glass animate-fade" style="border-radius:var(--radius-lg);padding:2rem;max-width:480px;width:100%;">
        <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem;">
          ${this.lang === 'hi' ? 'अभ्यास सेटिंग' : 'Practice Setup'}
        </h3>
        <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:1.25rem;">
          ${scopeLabel} — <strong>${maxAvail}</strong> ${this.lang === 'hi' ? 'प्रश्न उपलब्ध' : 'questions available'}
        </p>

        <label style="display:block;font-weight:600;font-size:0.9rem;margin-bottom:0.5rem;">
          ${this.lang === 'hi' ? 'प्रश्नों की संख्या चुनें:' : 'Select number of questions:'}
        </label>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.25rem;" id="q-count-options">`;

    qOptions.forEach((n, i) => {
      const disabled = n > maxAvail;
      const isDefault = (!disabled && i === 0) || n === Math.min(10, maxAvail);
      html += `
          <button class="medium-btn ${isDefault ? 'active' : ''}" ${disabled ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}
            onclick="UI._selectQCount(this, ${Math.min(n, maxAvail)})" data-count="${Math.min(n, maxAvail)}">${n > maxAvail ? maxAvail : n}</button>`;
    });

    html += `
        </div>

        <label style="display:block;font-weight:600;font-size:0.9rem;margin-bottom:0.5rem;">
          ${this.lang === 'hi' ? 'मोड चुनें:' : 'Select Mode:'}
        </label>
        <div style="display:flex;gap:0.75rem;margin-bottom:1.25rem;">
          <button class="medium-btn active" id="mode-practice" onclick="UI._selectMode('practice')">
            ${this.lang === 'hi' ? '📖 अभ्यास (तुरंत उत्तर)' : '📖 Practice (Instant)'}
          </button>
          <button class="medium-btn" id="mode-test" onclick="UI._selectMode('test')">
            ${this.lang === 'hi' ? '📝 परीक्षा (सबमिट बाद)' : '📝 Test (Submit First)'}
          </button>
        </div>

        <label style="display:block;font-weight:600;font-size:0.9rem;margin-bottom:0.5rem;">
          ${this.lang === 'hi' ? 'कठिनाई स्तर:' : 'Difficulty:'}
        </label>
        <div style="display:flex;gap:0.5rem;margin-bottom:1.5rem;">
          <button class="medium-btn active" id="diff-all" onclick="UI._selectDiff('All')">All</button>
          <button class="medium-btn" id="diff-easy" onclick="UI._selectDiff('Easy')">Easy</button>
          <button class="medium-btn" id="diff-medium" onclick="UI._selectDiff('Medium')">Medium</button>
          <button class="medium-btn" id="diff-hard" onclick="UI._selectDiff('Hard')">Hard</button>
        </div>

        <div style="display:flex;gap:0.75rem;">
          <button onclick="App.launchTest()" style="flex:1;padding:0.75rem;border-radius:var(--radius-md);background:var(--accent-primary);color:white;border:none;font-weight:700;font-size:1rem;cursor:pointer;">
            ${this.lang === 'hi' ? '🚀 शुरू करें' : '🚀 Start'}
          </button>
          <button onclick="App.closeModal()" style="padding:0.75rem 1.25rem;border-radius:var(--radius-md);background:rgba(255,255,255,0.1);color:var(--text-secondary);border:1px solid var(--border-color);cursor:pointer;font-weight:600;">
            ${this.lang === 'hi' ? 'रद्द' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>`;

    return html;
  },

  _selectedQCount: 10,
  _selectedMode: 'practice',
  _selectedDiff: 'All',

  _selectQCount: function (btn, count) {
    document.querySelectorAll('#q-count-options .medium-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this._selectedQCount = count;
  },

  _selectMode: function (mode) {
    this._selectedMode = mode;
    document.getElementById('mode-practice').classList.toggle('active', mode === 'practice');
    document.getElementById('mode-test').classList.toggle('active', mode === 'test');
  },

  _selectDiff: function (diff) {
    this._selectedDiff = diff;
    ['all', 'easy', 'medium', 'hard'].forEach(d => {
      const el = document.getElementById('diff-' + d);
      if (el) el.classList.toggle('active', d === diff.toLowerCase());
    });
  },

  // ====== MCQ TEST RUNNER ======
  renderTestRunner: function (session) {
    if (!session || !session.questions || session.questions.length === 0) {
      return '<div style="padding:2rem;text-align:center;color:var(--text-secondary);">No questions available.</div>';
    }

    const q = session.questions[session.currentIndex];
    const idx = session.currentIndex;
    const total = session.questions.length;
    const progress = ((idx + 1) / total * 100).toFixed(1);
    const userAns = session.userAnswers[q.id];
    const selectedOpt = userAns ? userAns.selected_option : null;
    const isPractice = session.mode === 'practice';
    const hasAnswered = !!selectedOpt;
    const showFeedback = isPractice && hasAnswered;

    let html = `
    <div class="animate-fade" style="padding:1rem;max-width:900px;margin:0 auto;">
      <!-- Top bar -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <span style="font-weight:700;font-size:1.1rem;">Q ${idx + 1} / ${total}</span>
          <span class="badge" style="background:rgba(${q.difficulty === 'Easy' ? '16,185,129' : q.difficulty === 'Hard' ? '239,68,68' : '245,158,11'},0.2);color:${q.difficulty === 'Easy' ? '#10b981' : q.difficulty === 'Hard' ? '#ef4444' : '#f59e0b'};border:1px solid rgba(${q.difficulty === 'Easy' ? '16,185,129' : q.difficulty === 'Hard' ? '239,68,68' : '245,158,11'},0.3);">${q.difficulty}</span>
          <span class="badge" style="background:rgba(99,102,241,0.15);color:#818cf8;border:1px solid rgba(99,102,241,0.3);">${session.mode === 'test' ? (this.lang === 'hi' ? 'परीक्षा' : 'Test') : (this.lang === 'hi' ? 'अभ्यास' : 'Practice')}</span>
        </div>
        <div id="test-timer" style="font-weight:600;color:var(--text-secondary);font-size:0.9rem;">⏱ 00:00</div>
      </div>

      <!-- Progress bar -->
      <div class="progress-bar-bg" style="margin-bottom:1.5rem;">
        <div class="progress-bar-fill" style="width:${progress}%"></div>
      </div>

      <!-- Question -->
      <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:1.5rem;margin-bottom:1.25rem;">
        <p style="font-size:1.1rem;font-weight:600;line-height:1.7;">${this.t(q.question)}</p>
      </div>

      <!-- Options -->
      <div style="display:grid;gap:0.65rem;margin-bottom:1.5rem;">`;

    const optKeys = ['A', 'B', 'C', 'D'];
    optKeys.forEach(key => {
      const optText = q.options[this.lang] ? q.options[this.lang][key] : (q.options.en ? q.options.en[key] : '');
      let extraClass = '';
      let disabled = '';

      if (showFeedback) {
        if (key === q.correct_option) extraClass = 'correct';
        else if (key === selectedOpt && key !== q.correct_option) extraClass = 'incorrect';
        disabled = 'disabled';
      } else if (key === selectedOpt) {
        extraClass = 'selected';
      }

      html += `
        <button class="option-btn ${extraClass}" ${disabled} onclick="App.selectAnswer('${q.id}','${key}')">
          <span class="option-badge">${key}</span>
          <span style="flex:1;">${optText}</span>
        </button>`;
    });

    html += `</div>`;

    // Practice mode instant feedback explanation
    if (showFeedback) {
      const isCorrect = selectedOpt === q.correct_option;
      html += `
      <div style="background:${isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'};border:1px solid ${isCorrect ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'};border-radius:var(--radius-md);padding:1rem;margin-bottom:1.25rem;">
        <p style="font-weight:700;margin-bottom:0.35rem;color:${isCorrect ? '#10b981' : '#ef4444'};">
          ${isCorrect ? (this.lang === 'hi' ? '✅ सही उत्तर!' : '✅ Correct!') : (this.lang === 'hi' ? '❌ गलत उत्तर' : '❌ Incorrect')}
        </p>
        <p style="color:var(--text-secondary);font-size:0.9rem;">${this.t(q.explanation)}</p>
      </div>`;
    }

    // Navigation buttons
    html += `
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
        <button onclick="App.prevQuestion()" ${idx === 0 ? 'disabled style="opacity:0.4;"' : ''} style="padding:0.65rem 1.25rem;border-radius:var(--radius-md);background:rgba(255,255,255,0.08);border:1px solid var(--border-color);color:var(--text-primary);cursor:pointer;font-weight:600;">
          ← ${this.lang === 'hi' ? 'पिछला' : 'Previous'}
        </button>`;

    if (idx < total - 1) {
      html += `
        <button onclick="App.nextQuestion()" style="padding:0.65rem 1.25rem;border-radius:var(--radius-md);background:var(--accent-primary);border:none;color:white;cursor:pointer;font-weight:600;">
          ${this.lang === 'hi' ? 'अगला' : 'Next'} →
        </button>`;
    }

    if (session.mode === 'test') {
      html += `
        <button onclick="App.submitTest()" style="margin-left:auto;padding:0.65rem 1.25rem;border-radius:var(--radius-md);background:var(--accent-success);border:none;color:white;cursor:pointer;font-weight:700;">
          ${this.lang === 'hi' ? '✅ सबमिट करें' : '✅ Submit Test'}
        </button>`;
    } else if (idx === total - 1) {
      html += `
        <button onclick="App.submitTest()" style="margin-left:auto;padding:0.65rem 1.25rem;border-radius:var(--radius-md);background:var(--accent-success);border:none;color:white;cursor:pointer;font-weight:700;">
          ${this.lang === 'hi' ? '📊 परिणाम देखें' : '📊 View Results'}
        </button>`;
    }

    html += `</div>`;

    // Question palette
    html += `
      <div style="margin-top:1.5rem;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1rem;">
        <p style="font-weight:600;font-size:0.85rem;margin-bottom:0.5rem;">${this.lang === 'hi' ? 'प्रश्न पटल' : 'Question Palette'}</p>
        <div class="palette-grid">`;

    session.questions.forEach((pq, pi) => {
      let cls = 'unanswered';
      if (pi === idx) cls += ' current';
      if (session.userAnswers[pq.id]) cls = 'answered';
      if (session.flagged[pq.id]) cls = 'flagged';
      if (pi === idx) cls += ' current';

      html += `<button class="palette-btn ${cls}" onclick="App.goToQuestion(${pi})">${pi + 1}</button>`;
    });

    html += `</div></div></div>`;
    return html;
  },

  // ====== RESULT PAGE ======
  renderResult: function (result) {
    const pct = result.percentage;
    const gradColor = pct >= 75 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444';

    let html = `
    <div class="animate-fade" style="padding:1.5rem;max-width:900px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:2rem;">
        <div style="width:120px;height:120px;border-radius:50%;background:conic-gradient(${gradColor} ${pct * 3.6}deg, rgba(255,255,255,0.1) 0deg);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">
          <div style="width:96px;height:96px;border-radius:50%;background:var(--bg-main);display:flex;align-items:center;justify-content:center;flex-direction:column;">
            <span style="font-size:1.5rem;font-weight:800;color:${gradColor};">${pct}%</span>
            <span style="font-size:0.7rem;color:var(--text-muted);">${this.lang === 'hi' ? 'स्कोर' : 'Score'}</span>
          </div>
        </div>
        <h2 style="font-size:1.4rem;font-weight:700;">
          ${pct >= 75 ? '🏆' : pct >= 50 ? '👍' : '📚'} ${this.lang === 'hi' ? 'परिणाम' : 'Result'}
        </h2>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:0.75rem;margin-bottom:2rem;">
        ${this._statBox(this.lang === 'hi' ? 'कुल प्रश्न' : 'Total', result.totalQuestions, '#6366f1')}
        ${this._statBox(this.lang === 'hi' ? 'प्रयास किए' : 'Attempted', result.attemptedCount, '#8b5cf6')}
        ${this._statBox(this.lang === 'hi' ? 'सही' : 'Correct', result.correctCount, '#10b981')}
        ${this._statBox(this.lang === 'hi' ? 'गलत' : 'Incorrect', result.incorrectCount, '#ef4444')}
        ${this._statBox(this.lang === 'hi' ? 'अनुत्तरित' : 'Unanswered', result.unattemptedCount, '#64748b')}
        ${this._statBox(this.lang === 'hi' ? 'सटीकता' : 'Accuracy', result.accuracy + '%', '#06b6d4')}
        ${this._statBox(this.lang === 'hi' ? 'समय' : 'Time', this.formatTime(result.timeTakenSeconds), '#f59e0b')}
        ${this._statBox(this.lang === 'hi' ? 'मोड' : 'Mode', result.mode === 'test' ? 'Test' : 'Practice', '#e11d48')}
      </div>

      <div style="display:flex;gap:0.75rem;margin-bottom:2rem;flex-wrap:wrap;">
        <button onclick="App.goHome()" style="padding:0.65rem 1.25rem;border-radius:var(--radius-md);background:var(--accent-primary);border:none;color:white;cursor:pointer;font-weight:600;">
          ${this.lang === 'hi' ? '🏠 होम पर जाएं' : '🏠 Go Home'}
        </button>
        <button onclick="App.showView('dashboard')" style="padding:0.65rem 1.25rem;border-radius:var(--radius-md);background:rgba(255,255,255,0.08);border:1px solid var(--border-color);color:var(--text-primary);cursor:pointer;font-weight:600;">
          ${this.lang === 'hi' ? '📊 डैशबोर्ड' : '📊 Dashboard'}
        </button>
      </div>

      <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:1rem;">${this.lang === 'hi' ? 'प्रश्नवार समीक्षा' : 'Question-by-Question Review'}</h3>
      <div style="display:grid;gap:0.75rem;">`;

    result.details.forEach(d => {
      const iconStatus = d.selected_option ? (d.is_correct ? '✅' : '❌') : '⏭';
      html += `
        <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1rem;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.5rem;">
            <span style="font-weight:600;">Q${d.index}. ${this.t(d.question)}</span>
            <span style="flex-shrink:0;font-size:1.25rem;">${iconStatus}</span>
          </div>
          <div style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:0.35rem;">
            ${this.lang === 'hi' ? 'आपका उत्तर' : 'Your Answer'}: <strong style="color:${d.is_correct ? '#10b981' : d.selected_option ? '#ef4444' : '#64748b'};">${d.selected_option || (this.lang === 'hi' ? 'कोई नहीं' : 'None')}</strong>
            ・ ${this.lang === 'hi' ? 'सही उत्तर' : 'Correct'}: <strong style="color:#10b981;">${d.correct_option}</strong>
          </div>
          <p style="font-size:0.85rem;color:var(--text-muted);border-top:1px solid var(--border-color);padding-top:0.5rem;margin-top:0.35rem;">${this.t(d.explanation)}</p>
        </div>`;
    });

    html += `</div></div>`;
    return html;
  },

  _statBox: function (label, value, color) {
    return `<div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:0.85rem;text-align:center;">
      <div style="font-size:1.25rem;font-weight:800;color:${color};">${value}</div>
      <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.2rem;">${label}</div>
    </div>`;
  },

  // ====== DASHBOARD ======
  renderDashboard: function (stats, topicPerf) {
    let html = `
    <div class="animate-fade" style="padding:1.5rem;max-width:1000px;margin:0 auto;">
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.25rem;">📊 ${this.lang === 'hi' ? 'डैशबोर्ड' : 'Dashboard'}</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:0.75rem;margin-bottom:2rem;">
        ${this._statBox(this.lang === 'hi' ? 'कुल टेस्ट' : 'Total Tests', stats.totalTests, '#6366f1')}
        ${this._statBox(this.lang === 'hi' ? 'प्रयास किए' : 'Attempted', stats.totalAttempted, '#8b5cf6')}
        ${this._statBox(this.lang === 'hi' ? 'सही' : 'Correct', stats.totalCorrect, '#10b981')}
        ${this._statBox(this.lang === 'hi' ? 'गलत' : 'Incorrect', stats.totalIncorrect, '#ef4444')}
        ${this._statBox(this.lang === 'hi' ? 'सटीकता' : 'Accuracy', stats.accuracy + '%', '#06b6d4')}
        ${this._statBox(this.lang === 'hi' ? 'सर्वश्रेष्ठ' : 'Best Score', stats.bestScorePercent + '%', '#f59e0b')}
        ${this._statBox(this.lang === 'hi' ? 'कुल समय' : 'Total Time', this.formatTime(stats.totalTimeSeconds), '#e11d48')}
        ${this._statBox(this.lang === 'hi' ? 'स्ट्रीक' : 'Streak', stats.currentStreak + ' 🔥', '#fb923c')}
      </div>`;

    if (stats.totalTests === 0) {
      html += `<div style="text-align:center;padding:2rem;color:var(--text-muted);">
        ${this.lang === 'hi' ? 'अभी तक कोई टेस्ट नहीं दिया। अभ्यास शुरू करें!' : 'No tests taken yet. Start practicing!'}
        <br><button onclick="App.goHome()" style="margin-top:1rem;padding:0.65rem 1.25rem;border-radius:var(--radius-md);background:var(--accent-primary);border:none;color:white;cursor:pointer;font-weight:600;">
          ${this.lang === 'hi' ? '🚀 अभ्यास शुरू करें' : '🚀 Start Practice'}
        </button>
      </div>`;
    } else {
      // Topic performance breakdown
      html += `<h3 style="font-size:1.1rem;font-weight:600;margin-bottom:0.75rem;">${this.lang === 'hi' ? 'विषय-स्तरीय प्रदर्शन' : 'Topic-Level Performance'}</h3>`;

      if (topicPerf.all.length > 0) {
        html += `<div style="display:grid;gap:0.5rem;">`;
        topicPerf.all.forEach(tp => {
          const topicName = App.getTopicName(tp.topic_id);
          const barWidth = tp.accuracy;
          const barColor = tp.accuracy >= 75 ? '#10b981' : tp.accuracy >= 50 ? '#f59e0b' : '#ef4444';
          html += `
          <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-sm);padding:0.75rem 1rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.35rem;">
              <span style="font-size:0.9rem;font-weight:500;">${topicName}</span>
              <span style="font-size:0.8rem;font-weight:700;color:${barColor};">${tp.accuracy}% (${tp.correct}/${tp.total})</span>
            </div>
            <div class="progress-bar-bg" style="height:6px;">
              <div style="height:100%;width:${barWidth}%;background:${barColor};border-radius:3px;transition:width 0.3s;"></div>
            </div>
          </div>`;
        });
        html += `</div>`;
      }
    }

    html += `</div>`;
    return html;
  },

  // ====== ANALYTICS ======
  renderAnalytics: function (topicPerf) {
    let html = `
    <div class="animate-fade" style="padding:1.5rem;max-width:1000px;margin:0 auto;">
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.25rem;">📈 ${this.lang === 'hi' ? 'विश्लेषण' : 'Analytics'}</h2>`;

    if (topicPerf.all.length === 0) {
      html += `<div style="text-align:center;padding:2rem;color:var(--text-muted);">
        ${this.lang === 'hi' ? 'डेटा उपलब्ध नहीं है। पहले कुछ टेस्ट दें।' : 'No data available. Take some tests first.'}
      </div>`;
    } else {
      // Strong
      if (topicPerf.strong.length > 0) {
        html += `<h3 style="font-size:1rem;font-weight:600;margin:1rem 0 0.5rem;color:#10b981;">💪 ${this.lang === 'hi' ? 'मजबूत क्षेत्र (≥75%)' : 'Strong Areas (≥75%)'}</h3>`;
        html += this._renderTopicList(topicPerf.strong, '#10b981');
      }
      // Moderate
      if (topicPerf.moderate.length > 0) {
        html += `<h3 style="font-size:1rem;font-weight:600;margin:1rem 0 0.5rem;color:#f59e0b;">⚡ ${this.lang === 'hi' ? 'और अभ्यास करें (50-75%)' : 'Practice More (50-75%)'}</h3>`;
        html += this._renderTopicList(topicPerf.moderate, '#f59e0b');
      }
      // Weak
      if (topicPerf.weak.length > 0) {
        html += `<h3 style="font-size:1rem;font-weight:600;margin:1rem 0 0.5rem;color:#ef4444;">🔴 ${this.lang === 'hi' ? 'कमजोर क्षेत्र (<50%)' : 'Weak Areas (<50%)'}</h3>`;
        html += this._renderTopicList(topicPerf.weak, '#ef4444');
      }
    }

    html += `</div>`;
    return html;
  },

  _renderTopicList: function (topics, color) {
    let html = '<div style="display:grid;gap:0.5rem;">';
    topics.forEach(tp => {
      const name = App.getTopicName(tp.topic_id);
      html += `
        <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-sm);padding:0.75rem 1rem;display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9rem;">${name}</span>
          <span style="font-weight:700;color:${color};font-size:0.85rem;">${tp.accuracy}% (${tp.correct}/${tp.total})</span>
        </div>`;
    });
    html += '</div>';
    return html;
  },

  // ====== RECOMMENDATIONS ======
  renderRecommendations: function (recommendations) {
    let html = `
    <div class="animate-fade" style="padding:1.5rem;max-width:900px;margin:0 auto;">
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.25rem;">🎯 ${this.lang === 'hi' ? 'आपके लिए सुझाव' : 'Recommended for You'}</h2>`;

    if (recommendations.length === 0) {
      html += `<div style="text-align:center;padding:2rem;color:var(--text-muted);">
        ${this.lang === 'hi' ? 'कोई सुझाव उपलब्ध नहीं।' : 'No recommendations yet.'}
      </div>`;
    } else {
      html += '<div style="display:grid;gap:0.75rem;">';
      recommendations.forEach(rec => {
        html += `
          <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.25rem;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.5rem;">
              <h4 style="font-weight:600;">${this.t(rec.title)}</h4>
              <span class="badge" style="${rec.badgeColor ? 'background:' + (rec.badgeColor.includes('bg-') ? 'rgba(99,102,241,0.15)' : rec.badgeColor) : ''};font-size:0.7rem;">${rec.badgeText}</span>
            </div>
            <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:0.75rem;">${this.t(rec.reason)}</p>
            <button onclick="App.startPracticeSetup('${rec.topic_id ? 'topic' : 'subject'}','${rec.subject_id}',null,'${rec.chapter_id || ''}','${rec.topic_id || ''}')"
              style="padding:0.5rem 1rem;border-radius:var(--radius-sm);background:var(--accent-primary);border:none;color:white;cursor:pointer;font-weight:600;font-size:0.85rem;">
              ${this.lang === 'hi' ? '▶ अभ्यास करें' : '▶ Practice Now'}
            </button>
          </div>`;
      });
      html += '</div>';
    }

    html += `</div>`;
    return html;
  },

  // ====== SESSION HISTORY ======
  renderHistory: function (sessions) {
    let html = `
    <div class="animate-fade" style="padding:1.5rem;max-width:1000px;margin:0 auto;">
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.25rem;">📋 ${this.lang === 'hi' ? 'सत्र इतिहास' : 'Session History'}</h2>`;

    if (sessions.length === 0) {
      html += `<div style="text-align:center;padding:2rem;color:var(--text-muted);">
        ${this.lang === 'hi' ? 'अभी तक कोई सत्र नहीं है।' : 'No sessions yet.'}
      </div>`;
    } else {
      html += '<div style="display:grid;gap:0.75rem;">';
      sessions.forEach((s, i) => {
        const dt = new Date(s.date);
        const dateStr = dt.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        const timeStr = dt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
        const pctColor = s.percentage >= 75 ? '#10b981' : s.percentage >= 50 ? '#f59e0b' : '#ef4444';

        html += `
          <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1rem;cursor:pointer;" onclick="App.reviewSession(${i})">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
              <div>
                <span style="font-weight:600;">${s.scope ? (App.getSubjectName(s.scope.subject_id)) : 'Test'}</span>
                <span style="color:var(--text-muted);font-size:0.8rem;margin-left:0.5rem;">${dateStr} ${timeStr}</span>
              </div>
              <div style="display:flex;align-items:center;gap:0.75rem;">
                <span style="font-size:0.85rem;color:var(--text-secondary);">${s.correctCount}/${s.totalQuestions}</span>
                <span style="font-weight:800;color:${pctColor};font-size:1.1rem;">${s.percentage}%</span>
                <span class="badge" style="background:rgba(255,255,255,0.08);color:var(--text-secondary);">${s.mode}</span>
              </div>
            </div>
          </div>`;
      });
      html += '</div>';
    }

    html += `</div>`;
    return html;
  },

  // ====== SEARCH ======
  renderSearch: function (bank, counts) {
    let html = `
    <div class="animate-fade" style="padding:1.5rem;max-width:1000px;margin:0 auto;">
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1rem;">🔍 ${this.lang === 'hi' ? 'खोजें और फ़िल्टर करें' : 'Search & Filter'}</h2>
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:1.25rem;">
        <input id="search-input" type="text" placeholder="${this.lang === 'hi' ? 'प्रश्न खोजें...' : 'Search questions...'}"
          style="flex:1;min-width:200px;padding:0.65rem 1rem;border-radius:var(--radius-md);background:var(--bg-card);border:1px solid var(--border-color);color:var(--text-primary);font-size:0.95rem;"
          oninput="App.searchQuestions()">
        <select id="search-subject" onchange="App.searchQuestions()" style="padding:0.65rem;border-radius:var(--radius-md);background:var(--bg-card);border:1px solid var(--border-color);color:var(--text-primary);font-size:0.85rem;">
          <option value="">${this.lang === 'hi' ? 'सभी विषय' : 'All Subjects'}</option>`;

    window.BSEB_SYLLABUS.subjects.forEach(s => {
      html += `<option value="${s.id}">${this.t(s.name)}</option>`;
    });

    html += `</select>
        <select id="search-difficulty" onchange="App.searchQuestions()" style="padding:0.65rem;border-radius:var(--radius-md);background:var(--bg-card);border:1px solid var(--border-color);color:var(--text-primary);font-size:0.85rem;">
          <option value="">${this.lang === 'hi' ? 'सभी कठिनाई' : 'All Difficulty'}</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div id="search-results" style="color:var(--text-muted);text-align:center;padding:1rem;">
        ${this.lang === 'hi' ? 'खोज शुरू करने के लिए टाइप करें' : 'Start typing to search'}
      </div>
    </div>`;
    return html;
  }
};
