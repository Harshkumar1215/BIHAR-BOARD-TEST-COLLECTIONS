# Class 10 Bihar Board (BSEB) MCQ Practice Platform

A fully functional, production-quality MCQ Practice Web Application for Class 10 Bihar Board (BSEB) students.

## 🚀 How to Run Locally

Since Node.js is not installed, use Python's built-in HTTP server:

```bash
cd "c:\Users\harsh\Desktop\test app"
python -m http.server 8080
```

Then open: **http://localhost:8080**

## 📚 Subjects Covered (BSEB Class 10 Only)
1. Mathematics (गणित) — 15 Chapters
2. Science (विज्ञान) — Physics, Chemistry, Biology
3. Social Science (सामाजिक विज्ञान) — History, Geography, Disaster Mgmt, Political Science, Economics
4. Hindi (हिंदी) — Godhuli + Varnika
5. English — Panorama + Supplementary Reader
6. Sanskrit (संस्कृत) — Piyusham Part 2

## 🏗 Architecture

```
js/
  data/
    syllabus.js          ← Full BSEB Class 10 hierarchy
    questionBank.js      ← Core verified MCQ bank
    questionBankExtra.js ← Additional verified MCQs (auto-merged)
  engine/
    questionBankEngine.js ← Validation, shuffle, duplicate detection
    testEngine.js         ← Session creation, 100Q cap, prioritization
    analyticsEngine.js    ← LocalStorage analytics, weak-topic detection
  ui/
    components.js         ← All view renderers
  app.js                  ← SPA router + state manager
css/
  styles.css              ← Dark theme + glassmorphism design
index.html                ← SPA shell
```

## ✅ Features
- **Centralized Question Bank** — One bank, multiple views (Topic/Chapter/Book/Subject)
- **Max 100 questions per test** — Random selection from full pool
- **Option Shuffling** — Correct answer index auto-updated after every shuffle
- **Practice Mode** — Instant feedback + explanation after each answer
- **Test Mode** — No peeking until submit
- **Dashboard** — Stats, streak, accuracy, best score
- **Analytics** — Strong/Moderate/Weak topic classification
- **Recommendations** — Based on actual performance data
- **Session History** — Review every past test
- **Search & Filter** — By subject, difficulty, question text
- **Hindi + English** — Full bilingual support
- **Responsive** — Mobile, tablet, desktop

## 📝 Adding More Questions
Add new question objects to `js/data/questionBankExtra.js` following the schema:

```json
{
  "id": "q_unique_id",
  "board": "BSEB",
  "class": "10",
  "subject_id": "maths",
  "book_id": "maths_b1",
  "chapter_id": "math_c1",
  "topic_id": "math_c1_t1",
  "difficulty": "Easy|Medium|Hard",
  "question": { "hi": "...", "en": "..." },
  "options": {
    "hi": { "A": "...", "B": "...", "C": "...", "D": "..." },
    "en": { "A": "...", "B": "...", "C": "...", "D": "..." }
  },
  "correct_option": "A",
  "explanation": { "hi": "...", "en": "..." }
}
```

Questions are automatically available in all related views (Topic/Chapter/Book/Subject practice).
