# -*- coding: utf-8 -*-
"""
Class 10 Bihar Board (BSEB) - Comprehensive Validation Pipeline
Verifies the integrity of every question in the centralized question bank.
"""
import json

with open(r"c:\Users\harsh\Desktop\test app\js\data\questionBank.js", "r", encoding="utf-8") as f:
    text = f.read()

prefix = "window.BSEB_QUESTION_BANK = "
raw = text[text.find(prefix) + len(prefix):].rstrip(";\n ")
bank = json.loads(raw)

total_count = len(bank)
print(f"=== FULL VALIDATION PIPELINE RUN: {total_count} MCQs ===")

errors = []
ids = set()
norm_texts = set()
option_distribution = {"A": 0, "B": 0, "C": 0, "D": 0}
subject_counts = {}
chapter_counts = {}
difficulty_counts = {"Easy": 0, "Medium": 0, "Hard": 0}

def normalize(text):
    return "".join(c.lower() for c in (text or "") if c.isalnum())

for idx, q in enumerate(bank):
    qid = q.get("id", f"INDEX_{idx}")
    
    # 1. Unique ID
    if qid in ids:
        errors.append(f"{qid}: Duplicate ID found")
    ids.add(qid)
    
    # 2. Scope checks
    if q.get("board") != "BSEB" or q.get("class") != "10":
        errors.append(f"{qid}: Invalid board/class scope ({q.get('board')}/{q.get('class')})")
        
    sub = q.get("subject_id")
    subject_counts[sub] = subject_counts.get(sub, 0) + 1
    
    ch = q.get("chapter_id")
    chapter_counts[ch] = chapter_counts.get(ch, 0) + 1
    
    diff = q.get("difficulty", "Medium")
    difficulty_counts[diff] = difficulty_counts.get(diff, 0) + 1
    
    # 3. Question text
    q_hi = q.get("question", {}).get("hi", "").strip()
    q_en = q.get("question", {}).get("en", "").strip()
    if not q_hi or not q_en:
        errors.append(f"{qid}: Missing question text in Hindi or English")
        
    # Duplicate check
    norm_hi = normalize(q_hi)
    if norm_hi:
        if norm_hi in norm_texts:
            errors.append(f"{qid}: Duplicate question text detected ({q_hi[:30]}...)")
        norm_texts.add(norm_hi)
        
    # 4. Options
    opts = q.get("options", {})
    opts_hi = opts.get("hi", {})
    opts_en = opts.get("en", {})
    
    for k in ["A", "B", "C", "D"]:
        if not opts_hi.get(k) or not opts_en.get(k):
            errors.append(f"{qid}: Option {k} missing in Hindi or English")
            
    # Check distractor distinctness
    if len(set(opts_hi.values())) < 4 or len(set(opts_en.values())) < 4:
        errors.append(f"{qid}: Non-distinct options in choices")
        
    # 5. Correct Option
    corr = q.get("correct_option")
    if corr not in ["A", "B", "C", "D"]:
        errors.append(f"{qid}: Invalid correct option key: {corr}")
    else:
        option_distribution[corr] += 1
        
    # 6. Explanation
    exp_hi = q.get("explanation", {}).get("hi", "").strip()
    exp_en = q.get("explanation", {}).get("en", "").strip()
    if not exp_hi or not exp_en:
        errors.append(f"{qid}: Missing explanation")

print("\n--- RESULTS ---")
print(f"Total Questions Evaluated: {total_count}")
print(f"Total Errors Found: {len(errors)}")

if errors:
    for e in errors[:15]:
        print(f"[ERROR] {e}")
else:
    print("[SUCCESS] 100% PASSED: All questions are verified, valid, unique and complete!")

print("\n--- SUBJECT BREAKDOWN ---")
for s, c in sorted(subject_counts.items()):
    print(f" - {s.upper():<10}: {c:>3} questions")

print("\n--- DIFFICULTY BREAKDOWN ---")
for d, c in difficulty_counts.items():
    print(f" - {d:<8}: {c:>3} questions ({c*100//total_count}%)")

print("\n--- ANSWER KEY DISTRIBUTION ---")
for k, c in option_distribution.items():
    print(f" - Option {k}: {c:>3} ({c*100//total_count}%)")
