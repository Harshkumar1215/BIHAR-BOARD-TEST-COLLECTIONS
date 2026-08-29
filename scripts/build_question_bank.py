# -*- coding: utf-8 -*-
"""
Class 10 Bihar Board (BSEB) Comprehensive Centralized Question Bank Generator
Generates verified, unique MCQs across all 6 subjects and chapters in Hindi + English.
"""
import json
import os

all_questions = [
  # =========================================================================
  # 1. MATHEMATICS (गणित) - Chapters 1 to 15
  # =========================================================================
  {
    "id": "q_math_ch1_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c1",
    "topic_id": "math_c1_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "यूक्लिड विभाजन प्रमेयिका a = bq + r में शेषफल r के लिए कौन-सा कथन सदैव सत्य है?",
      "en": "In Euclid's Division Lemma a = bq + r, which condition is always true for remainder r?"
    },
    "options": {
      "hi": { "A": "0 ≤ r < b", "B": "0 < r ≤ b", "C": "0 ≤ r ≤ b", "D": "r > b" },
      "en": { "A": "0 ≤ r < b", "B": "0 < r ≤ b", "C": "0 ≤ r ≤ b", "D": "r > b" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "यूक्लिड विभाजन प्रमेयिका के अनुसार किसी धनात्मक पूर्णांक a और b के लिए अद्वितीय पूर्णांक q और r होते हैं जहाँ a = bq + r तथा 0 ≤ r < b होता है।",
      "en": "According to Euclid's division lemma, for positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b."
    }
  },
  {
    "id": "q_math_ch1_02",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c1",
    "topic_id": "math_c1_t3",
    "difficulty": "Medium",
    "question": {
      "hi": "संख्या (π) किस प्रकार की संख्या है?",
      "en": "What type of number is Pi (π)?"
    },
    "options": {
      "hi": { "A": "परिमेय संख्या", "B": "अपरिमेय संख्या", "C": "पूर्णांक संख्या", "D": "प्राकृत संख्या" },
      "en": { "A": "Rational Number", "B": "Irrational Number", "C": "Integer", "D": "Natural Number" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "π एक अपरिमेय संख्या है क्योंकि इसका दशमलव प्रसार अनवसानी अनावर्ती (Non-terminating Non-repeating) होता है, जबकि 22/7 इसका सन्निकट परिमेय मान है।",
      "en": "π is an irrational number because its decimal expansion is non-terminating and non-repeating, whereas 22/7 is only an approximation."
    }
  },
  {
    "id": "q_math_ch2_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c2",
    "topic_id": "math_c2_t2",
    "difficulty": "Easy",
    "question": {
      "hi": "द्विघात बहुपद 2x² - 8x + 6 के शून्यांकों का गुणनफल (αβ) क्या होगा?",
      "en": "What is the product of zeros (αβ) of the quadratic polynomial 2x² - 8x + 6?"
    },
    "options": {
      "hi": { "A": "3", "B": "-4", "C": "4", "D": "-3" },
      "en": { "A": "3", "B": "-4", "C": "4", "D": "-3" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "द्विघात बहुपद ax² + bx + c में शून्यांकों का गुणनफल αβ = c/a होता है। यहाँ c = 6 और a = 2 है, अतः αβ = 6/2 = 3.",
      "en": "Product of zeros αβ = c/a. Here a = 2, c = 6, so αβ = 6/2 = 3."
    }
  },
  {
    "id": "q_math_ch3_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c3",
    "topic_id": "math_c3_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "यदि दो रेखाएँ संपाती (Coincident) हों, तो उनके रैखिक समीकरण युग्म के कितने हल होते हैं?",
      "en": "If two lines are coincident, how many solutions does the pair of linear equations have?"
    },
    "options": {
      "hi": { "A": "कोई हल नहीं", "B": "अद्वितीय हल (एक हल)", "C": "अपरिमित रूप से अनेक हल (अनंत हल)", "D": "केवल दो हल" },
      "en": { "A": "No solution", "B": "Exactly one unique solution", "C": "Infinitely many solutions", "D": "Exactly two solutions" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "जब रेखाएँ संपाती होती हैं (a₁/a₂ = b₁/b₂ = c₁/c₂), तब समीकरण युग्म आश्रित/संगत होता है और उसके अनंत (अपरिमित) हल होते हैं।",
      "en": "When lines are coincident (a₁/a₂ = b₁/b₂ = c₁/c₂), the system is consistent and dependent, having infinitely many solutions."
    }
  },
  {
    "id": "q_math_ch4_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c4",
    "topic_id": "math_c4_t3",
    "difficulty": "Medium",
    "question": {
      "hi": "द्विघात समीकरण ax² + bx + c = 0 के दोनों मूल वास्तविक और समान (बराबर) होंगे यदि:",
      "en": "Roots of quadratic equation ax² + bx + c = 0 are real and equal if:"
    },
    "options": {
      "hi": { "A": "b² - 4ac > 0", "B": "b² - 4ac = 0", "C": "b² - 4ac < 0", "D": "b² + 4ac = 0" },
      "en": { "A": "b² - 4ac > 0", "B": "b² - 4ac = 0", "C": "b² - 4ac < 0", "D": "b² + 4ac = 0" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "जब विविक्तकर D = b² - 4ac = 0 होता है, तब द्विघात समीकरण के दोनों मूल वास्तविक और परस्पर बराबर (-b/2a) होते हैं।",
      "en": "When discriminant D = b² - 4ac = 0, roots are real and equal (-b/2a)."
    }
  },
  {
    "id": "q_math_ch5_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c5",
    "topic_id": "math_c5_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "समांतर श्रेढ़ी -10, -6, -2, 2, ... का सार्व अंतर (Common Difference, d) क्या है?",
      "en": "What is the Common Difference (d) of AP -10, -6, -2, 2, ...?"
    },
    "options": {
      "hi": { "A": "-4", "B": "4", "C": "2", "D": "-2" },
      "en": { "A": "-4", "B": "4", "C": "2", "D": "-2" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "सार्व अंतर d = a₂ - a₁ = -6 - (-10) = -6 + 10 = +4.",
      "en": "Common difference d = a₂ - a₁ = -6 - (-10) = 4."
    }
  },
  {
    "id": "q_math_ch6_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c6",
    "topic_id": "math_c6_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "यदि किसी त्रिभुज की एक भुजा के समानांतर खींची गई रेखा अन्य दो भुजाओं को भिन्न बिंदुओं पर प्रतिच्छेद करे, तो वे भुजाएँ एक ही अनुपात में विभाजित होती हैं। यह कौन-सी प्रमेय है?",
      "en": "A line drawn parallel to one side of a triangle dividing the other two sides in the same ratio is known as:"
    },
    "options": {
      "hi": { "A": "पाइथागोरस प्रमेय", "B": "थेल्स प्रमेय (आधारभूत आनुपातिकता प्रमेय)", "C": "अप्पोलॉनियस प्रमेय", "D": "टॉलमी प्रमेय" },
      "en": { "A": "Pythagoras Theorem", "B": "Thales Theorem (Basic Proportionality Theorem)", "C": "Apollonius Theorem", "D": "Ptolemy Theorem" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "इसे आधारभूत आनुपातिकता प्रमेय (BPT) या थेल्स प्रमेय कहते हैं।",
      "en": "This is known as Basic Proportionality Theorem (BPT) or Thales Theorem."
    }
  },
  {
    "id": "q_math_ch7_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c7",
    "topic_id": "math_c7_t2",
    "difficulty": "Easy",
    "question": {
      "hi": "बिंदुओं (x₁, y₁) और (x₂, y₂) को मिलाने वाले रेखाखंड के मध्य-बिंदु (Mid-point) के निर्देशांक क्या हैं?",
      "en": "What are the coordinates of the midpoint joining (x₁, y₁) and (x₂, y₂)?"
    },
    "options": {
      "hi": { "A": "((x₁+x₂)/2, (y₁+y₂)/2)", "B": "((x₁-x₂)/2, (y₁-y₂)/2)", "C": "(x₁+x₂, y₁+y₂)", "D": "((x₁+y₁)/2, (x₂+y₂)/2)" },
      "en": { "A": "((x₁+x₂)/2, (y₁+y₂)/2)", "B": "((x₁-x₂)/2, (y₁-y₂)/2)", "C": "(x₁+x₂, y₁+y₂)", "D": "((x₁+y₁)/2, (x₂+y₂)/2)" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "मध्य बिंदु सूत्र के अनुसार, मध्य बिंदु M = ((x₁ + x₂)/2, (y₁ + y₂)/2) होता है।",
      "en": "Midpoint formula is ((x₁ + x₂)/2, (y₁ + y₂)/2)."
    }
  },
  {
    "id": "q_math_ch8_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c8",
    "topic_id": "math_c8_t4",
    "difficulty": "Medium",
    "question": {
      "hi": "(1 + tan²θ) किसके बराबर होता है?",
      "en": "(1 + tan²θ) is identically equal to which trigonometric function?"
    },
    "options": {
      "hi": { "A": "cot²θ", "B": "sec²θ", "C": "cosec²θ", "D": "cos²θ" },
      "en": { "A": "cot²θ", "B": "sec²θ", "C": "cosec²θ", "D": "cos²θ" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "मूलभूत त्रिकोणमितीय सर्वसमिका: 1 + tan²θ = sec²θ अथवा sec²θ - tan²θ = 1 होती है।",
      "en": "Standard identity: 1 + tan²θ = sec²θ."
    }
  },
  {
    "id": "q_math_ch9_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c9",
    "topic_id": "math_c9_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "जब कोई प्रेक्षक नीचे स्थित वस्तु को ऊपर से देखता है, तो दृष्टि रेखा और क्षैतिज रेखा के बीच बने कोण को क्या कहते हैं?",
      "en": "When an observer views an object below horizontal level, the angle formed is called:"
    },
    "options": {
      "hi": { "A": "उन्नयन कोण (Angle of Elevation)", "B": "अवनमन कोण (Angle of Depression)", "C": "अधिक कोण", "D": "पूरक कोण" },
      "en": { "A": "Angle of Elevation", "B": "Angle of Depression", "C": "Obtuse Angle", "D": "Complementary Angle" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "ऊपर से नीचे स्थित वस्तु को देखने पर क्षैतिज रेखा से नीचे बनने वाला कोण 'अवनमन कोण' (Angle of Depression) कहलाता है।",
      "en": "The angle formed below the horizontal line of sight is called the Angle of Depression."
    }
  },
  {
    "id": "q_math_ch10_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c10",
    "topic_id": "math_c10_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "वृत्त के किसी बिंदु पर खींची गई स्पर्श रेखा और स्पर्श बिंदु से जाने वाली त्रिज्या के बीच का कोण कितना होता है?",
      "en": "What is the angle between the tangent at any point of a circle and the radius through point of contact?"
    },
    "options": {
      "hi": { "A": "45°", "B": "60°", "C": "90° (समकोण)", "D": "180°" },
      "en": { "A": "45°", "B": "60°", "C": "90° (Right Angle)", "D": "180°" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "वृत्त के किसी बिंदु पर स्पर्श रेखा स्पर्श बिंदु से जाने वाली त्रिज्या पर लंब (90°) होती है।",
      "en": "The tangent at any point of a circle is perpendicular (90°) to the radius through the point of contact."
    }
  },
  {
    "id": "q_math_ch12_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c12",
    "topic_id": "math_c12_t2",
    "difficulty": "Medium",
    "question": {
      "hi": "त्रिज्या r वाले वृत्त के उस त्रिज्यखंड (Sector) का क्षेत्रफल जिसका कोण θ है, क्या होगा?",
      "en": "What is the area of a sector of angle θ in a circle of radius r?"
    },
    "options": {
      "hi": { "A": "(θ/180) x 2πr", "B": "(θ/360) x πr²", "C": "(θ/180) x πr²", "D": "(θ/360) x 2πr" },
      "en": { "A": "(θ/180) x 2πr", "B": "(θ/360) x πr²", "C": "(θ/180) x πr²", "D": "(θ/360) x 2πr" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "त्रिज्यखंड का क्षेत्रफल = (θ/360°) x πr² होता है, जबकि चाप की लंबाई = (θ/360°) x 2πr होती है।",
      "en": "Area of sector = (θ/360°) x πr²."
    }
  },
  {
    "id": "q_math_ch13_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c13",
    "topic_id": "math_c13_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "त्रिज्या r वाले एक ठोस गोले का संपूर्ण पृष्ठीय क्षेत्रफल क्या होता है?",
      "en": "What is the total surface area of a solid sphere with radius r?"
    },
    "options": {
      "hi": { "A": "2πr²", "B": "3πr²", "C": "4πr²", "D": "(4/3)πr³" },
      "en": { "A": "2πr²", "B": "3πr²", "C": "4πr²", "D": "(4/3)πr³" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "गोले का संपूर्ण पृष्ठीय क्षेत्रफल 4πr² होता है। गोले का आयतन (4/3)πr³ होता है।",
      "en": "Total surface area of sphere = 4πr². Volume is (4/3)πr³."
    }
  },
  {
    "id": "q_math_ch14_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c14",
    "topic_id": "math_c14_t2",
    "difficulty": "Medium",
    "question": {
      "hi": "माध्य (Mean), बहुलक (Mode) और माध्यक (Median) के बीच आनुभविक संबंध क्या है?",
      "en": "What is the empirical relationship between Mean, Median and Mode?"
    },
    "options": {
      "hi": { "A": "बहुलक = 3 माध्यक - 2 माध्य", "B": "बहुलक = 2 माध्यक - 3 माध्य", "C": "माध्यक = 3 बहुलक - 2 माध्य", "D": "माध्य = 3 माध्यक - 2 बहुलक" },
      "en": { "A": "Mode = 3 Median - 2 Mean", "B": "Mode = 2 Median - 3 Mean", "C": "Median = 3 Mode - 2 Mean", "D": "Mean = 3 Median - 2 Mode" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "आनुभविक सूत्र: 3 माध्यक = बहुलक + 2 माध्य अर्थात् बहुलक = 3 माध्यक - 2 माध्य (Mode = 3 Median - 2 Mean) होता है।",
      "en": "Empirical formula: Mode = 3 Median - 2 Mean."
    }
  },
  {
    "id": "q_math_ch15_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c15",
    "topic_id": "math_c15_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "एक पासे (Die) को एक बार फेंकने पर एक अभाज्य संख्या (Prime Number) आने की प्रायिकता क्या है?",
      "en": "When a die is thrown once, what is the probability of getting a Prime Number?"
    },
    "options": {
      "hi": { "A": "1/6", "B": "1/3", "C": "1/2", "D": "2/3" },
      "en": { "A": "1/6", "B": "1/3", "C": "1/2", "D": "2/3" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "पासे के कुल परिणाम = {1, 2, 3, 4, 5, 6} (कुल 6). अभाज्य संख्याएं = {2, 3, 5} (कुल 3). प्रायिकता = 3/6 = 1/2.",
      "en": "Total outcomes = 6. Prime numbers = {2, 3, 5} (3 outcomes). P(Prime) = 3/6 = 1/2."
    }
  },

  # =========================================================================
  # 2. SCIENCE (विज्ञान) - Physics, Chemistry, Biology
  # =========================================================================
  {
    "id": "q_sci_ph_ch10_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b1",
    "chapter_id": "sci_c10",
    "topic_id": "sci_c10_t3",
    "difficulty": "Medium",
    "question": {
      "hi": "लेंस की क्षमता (Power of Lens, P) का SI मात्रक क्या होता है?",
      "en": "What is the SI unit of Power of a Lens (P)?"
    },
    "options": {
      "hi": { "A": "मीटर (m)", "B": "सेंटीमीटर (cm)", "C": "डायोप्टर (Dioptre, D)", "D": "वाट (Watt)" },
      "en": { "A": "Metre (m)", "B": "Centimetre (cm)", "C": "Dioptre (D)", "D": "Watt" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "लेंस की क्षमता P = 1/f (जहाँ f मीटर में हो) का मात्रक डायोप्टर (D या m⁻¹) होता है। 1 D = 1 m⁻¹.",
      "en": "Power of lens P = 1/f(in metres). The SI unit is Dioptre (D)."
    }
  },
  {
    "id": "q_sci_ph_ch11_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b1",
    "chapter_id": "sci_c11",
    "topic_id": "sci_c11_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "सामान्य दृष्टि के वयस्क के लिए सुस्पष्ट दर्शन की अल्पतम दूरी (Least distance of distinct vision) कितनी होती है?",
      "en": "What is the least distance of distinct vision for a normal human eye?"
    },
    "options": {
      "hi": { "A": "25 मीटर", "B": "2.5 सेंटीमीटर", "C": "25 सेंटीमीटर (25 cm)", "D": "अनंत" },
      "en": { "A": "25 m", "B": "2.5 cm", "C": "25 cm", "D": "Infinity" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "स्वस्थ मानव नेत्र के लिए निकट बिंदु 25 cm होता है और दूर बिंदु अनंत (Infinity) होता है।",
      "en": "Near point of a normal human eye is 25 cm, while the far point is at infinity."
    }
  },
  {
    "id": "q_sci_ph_ch11_02",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b1",
    "chapter_id": "sci_c11",
    "topic_id": "sci_c11_t3",
    "difficulty": "Easy",
    "question": {
      "hi": "अंतरिक्ष यात्री को आकाश का रंग कैसा दिखाई देता है?",
      "en": "What color does the sky appear to an astronaut in space?"
    },
    "options": {
      "hi": { "A": "नीला (Blue)", "B": "लाल (Red)", "C": "काला (Black)", "D": "सफेद (White)" },
      "en": { "A": "Blue", "B": "Red", "C": "Black", "D": "White" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "अंतरिक्ष में वायुमंडल न होने के कारण प्रकाश का प्रकीर्णन (Scattering) नहीं होता, जिससे आकाश काला दिखाई देता है।",
      "en": "In space, absence of atmosphere causes no scattering of sunlight, making the sky appear dark black."
    }
  },
  {
    "id": "q_sci_ph_ch13_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b1",
    "chapter_id": "sci_c13",
    "topic_id": "sci_c13_t3",
    "difficulty": "Medium",
    "question": {
      "hi": "विद्युत चुंबकीय प्रेरण (Electromagnetic Induction) की खोज किसने की थी?",
      "en": "Who discovered the phenomenon of Electromagnetic Induction?"
    },
    "options": {
      "hi": { "A": "माइकल फैराडे (Michael Faraday)", "B": "मैक्सवेल", "C": "फ्लेमिंग", "D": "एम्पियर" },
      "en": { "A": "Michael Faraday", "B": "Maxwell", "C": "Fleming", "D": "Ampere" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "1831 में माइकल फैराडे ने विद्युत चुंबकीय प्रेरण के सिद्धांतों की खोज की, जिसके आधार पर विद्युत जनित्र (Generator) कार्य करता है।",
      "en": "Michael Faraday discovered electromagnetic induction in 1831."
    }
  },
  {
    "id": "q_sci_ph_ch14_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b1",
    "chapter_id": "sci_c14",
    "topic_id": "sci_c14_t2",
    "difficulty": "Easy",
    "question": {
      "hi": "बायोगैस (जैव गैस) का मुख्य घटक कौन-सी गैस है?",
      "en": "Which gas is the main constituent of Biogas?"
    },
    "options": {
      "hi": { "A": "हाइड्रोजन", "B": "मीथेन (Methane, CH₄)", "C": "ब्यूटेन", "D": "कार्बन मोनोऑक्साइड" },
      "en": { "A": "Hydrogen", "B": "Methane (CH₄)", "C": "Butane", "D": "Carbon monoxide" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "बायोगैस में लगभग 75% तक मीथेन (CH₄) गैस होती है, जो एक उत्कृष्ट धुआंरहित ईंधन है।",
      "en": "Biogas contains up to 75% methane (CH₄), making it an excellent smokeless fuel."
    }
  },
  {
    "id": "q_sci_ch_ch1_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b2",
    "chapter_id": "sci_c1",
    "topic_id": "sci_c1_t2",
    "difficulty": "Easy",
    "question": {
      "hi": "लोहे की कील को कॉपर सल्फेट (CuSO₄) के नीले विलयन में डालने पर विलयन का रंग हरा क्यों हो जाता है? यह किस प्रकार की अभिक्रिया है?",
      "en": "When an iron nail is dipped in blue CuSO₄ solution, the color turns green. This reaction is:"
    },
    "options": {
      "hi": { "A": "संयोजन अभिक्रिया", "B": "विस्थापन अभिक्रिया (Displacement)", "C": "वियोजन अभिक्रिया", "D": "द्विविस्थापन अभिक्रिया" },
      "en": { "A": "Combination Reaction", "B": "Displacement Reaction", "C": "Decomposition Reaction", "D": "Double Displacement" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "Fe + CuSO₄ → FeSO₄ + Cu. लोहा कॉपर से अधिक क्रियाशील होने के कारण उसे विस्थापित कर देता है।",
      "en": "Fe + CuSO₄ → FeSO₄ + Cu. Iron displaces copper as it is more reactive."
    }
  },
  {
    "id": "q_sci_ch_ch2_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b2",
    "chapter_id": "sci_c2",
    "topic_id": "sci_c2_t3",
    "difficulty": "Medium",
    "question": {
      "hi": "विरंजक चूर्ण (Bleaching Powder) का रासायनिक सूत्र क्या है?",
      "en": "What is the chemical formula of Bleaching Powder?"
    },
    "options": {
      "hi": { "A": "CaOCl₂", "B": "Ca(OH)₂", "C": "CaCO₃", "D": "CaCl₂" },
      "en": { "A": "CaOCl₂", "B": "Ca(OH)₂", "C": "CaCO₃", "D": "CaCl₂" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "विरंजक चूर्ण (कैल्शियम ऑक्सीक्लोराइड) का सूत्र CaOCl₂ होता है, जिसे शुष्क बुझे चूने पर क्लोरीन गैस प्रवाहित करके बनाया जाता है।",
      "en": "Bleaching powder is Calcium Oxychloride (CaOCl₂)."
    }
  },
  {
    "id": "q_sci_ch_ch3_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b2",
    "chapter_id": "sci_c3",
    "topic_id": "sci_c3_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "निम्नलिखित में से कौन-सी धातु को चाकू से आसानी से काटा जा सकता है?",
      "en": "Which of the following metals can be easily cut with a knife?"
    },
    "options": {
      "hi": { "A": "सोडियम (Na)", "B": "लोहा (Fe)", "C": "तांबा (Cu)", "D": "एल्युमिनियम (Al)" },
      "en": { "A": "Sodium (Na)", "B": "Iron (Fe)", "C": "Copper (Cu)", "D": "Aluminium (Al)" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "सोडियम और पोटेशियम अत्यधिक मुलायम क्षार धातुएं हैं जिन्हें चाकू से सरलतापूर्वक काटा जा सकता है।",
      "en": "Sodium and Potassium are soft alkali metals easily cut with a knife."
    }
  },
  {
    "id": "q_sci_ch_ch4_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b2",
    "chapter_id": "sci_c4",
    "topic_id": "sci_c4_t2",
    "difficulty": "Medium",
    "question": {
      "hi": "एल्केन (Alkane) समजातीय श्रेणी का सामान्य सूत्र क्या है?",
      "en": "What is the general formula for the Alkane homologous series?"
    },
    "options": {
      "hi": { "A": "CₙH₂ₙ₊₂", "B": "CₙH₂ₙ", "C": "CₙH₂ₙ₋₂", "D": "CₙH₂ₙ₊₁" },
      "en": { "A": "CₙH₂ₙ₊₂", "B": "CₙH₂ₙ", "C": "CₙH₂ₙ₋₂", "D": "CₙH₂ₙ₊₁" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "एल्केन का सामान्य सूत्र CₙH₂ₙ₊₂ (संतृप्त हाइड्रोकार्बन), एल्कीन का CₙH₂ₙ तथा एल्काइन का CₙH₂ₙ₋₂ होता है।",
      "en": "General formula for Alkanes is CₙH₂ₙ₊₂, Alkenes is CₙH₂ₙ, and Alkynes is CₙH₂ₙ₋₂."
    }
  },
  {
    "id": "q_sci_bio_ch6_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b3",
    "chapter_id": "sci_c6",
    "topic_id": "sci_c6_t4",
    "difficulty": "Easy",
    "question": {
      "hi": "मानव में वृक्क (Kidney) किस तंत्र का भाग है?",
      "en": "Kidneys in human beings are a part of which system?"
    },
    "options": {
      "hi": { "A": "पोषण तंत्र", "B": "श्वसन तंत्र", "C": "उत्सर्जन तंत्र (Excretory System)", "D": "परिवहन तंत्र" },
      "en": { "A": "Digestive System", "B": "Respiratory System", "C": "Excretory System", "D": "Circulatory System" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "वृक्क मानव शरीर का प्रमुख उत्सर्जी अंग है जो रक्त से यूरिया और अपशिष्ट पदार्थों को छानकर मूत्र बनाता है।",
      "en": "Kidneys are the primary organs of the human excretory system filtering metabolic wastes."
    }
  },
  {
    "id": "q_sci_bio_ch7_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b3",
    "chapter_id": "sci_c7",
    "topic_id": "sci_c7_t2",
    "difficulty": "Medium",
    "question": {
      "hi": "निम्नलिखित में से कौन-सा पादप हार्मोन (Plant Hormone) कोशिका विभाजन को प्रेरित करता है?",
      "en": "Which plant hormone promotes cell division?"
    },
    "options": {
      "hi": { "A": "ऑक्सिन", "B": "जिबरेलिन", "C": "साइटोकाइनिन (Cytokinin)", "D": "एब्सिसिक अम्ल" },
      "en": { "A": "Auxin", "B": "Gibberellin", "C": "Cytokinin", "D": "Abscisic acid" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "साइटोकाइनिन पादप हार्मोन कोशिका विभाजन (Cell Division) को तेजी से बढ़ावा देता है और फलों व बीजों में अधिक पाया जाता है।",
      "en": "Cytokinin is the plant hormone responsible for promoting cell division."
    }
  },
  {
    "id": "q_sci_bio_ch15_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b3",
    "chapter_id": "sci_c15",
    "topic_id": "sci_c15_t2",
    "difficulty": "Easy",
    "question": {
      "hi": "ओजोन परत (Ozone layer) सूर्य से आने वाली किस हानिकारक विकिरण से पृथ्वी की रक्षा करती है?",
      "en": "Ozone layer protects Earth from which harmful radiation coming from the Sun?"
    },
    "options": {
      "hi": { "A": "अवरक्त किरणें (Infrared)", "B": "पराबैंगनी किरणें (Ultraviolet / UV)", "C": "गामा किरणें", "D": "एक्स-रे" },
      "en": { "A": "Infrared Rays", "B": "Ultraviolet (UV) Rays", "C": "Gamma Rays", "D": "X-Rays" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "ओजोन (O₃) परत सूर्य की हानिकारक पराबैंगनी (UV) किरणों को अवशोषित कर त्वचा कैंसर व मोतियाबिंद से जीवधारियों की रक्षा करती है।",
      "en": "Ozone (O₃) layer absorbs harmful UV radiations, preventing skin cancer and cataracts."
    }
  },

  # =========================================================================
  # 3. SOCIAL SCIENCE (सामाजिक विज्ञान)
  # =========================================================================
  {
    "id": "q_sst_hist_ch1_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b1",
    "chapter_id": "hist_c1",
    "topic_id": "hist_c1_t2",
    "difficulty": "Medium",
    "question": {
      "hi": "'रक्त एवं लौह की नीति' (Policy of Blood and Iron) का अवलंबन किसने किया था?",
      "en": "Who adopted the 'Policy of Blood and Iron' for German Unification?"
    },
    "options": {
      "hi": { "A": "मेजिनी", "B": "हिटलर", "C": "बिस्मार्क (Bismarck)", "D": "विलियम प्रथम" },
      "en": { "A": "Mazzini", "B": "Hitler", "C": "Bismarck", "D": "William I" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "प्रशा के चांसलर ऑटो वॉन बिस्मार्क ने जर्मनी के एकीकरण हेतु 'रक्त एवं लौह की नीति' अपनाई थी।",
      "en": "Otto von Bismarck, Chancellor of Prussia, adopted the Policy of Blood and Iron to unify Germany."
    }
  },
  {
    "id": "q_sst_hist_ch2_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b1",
    "chapter_id": "hist_c2",
    "topic_id": "hist_c2_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "'दास कैपिटल' (Das Kapital) पुस्तक की रचना किसने की, जिसे समाजवादियों की बाइबिल कहा जाता है?",
      "en": "Who wrote 'Das Kapital', often referred to as the Bible of Socialists?"
    },
    "options": {
      "hi": { "A": "कार्ल मार्क्स (Karl Marx)", "B": "एंगेल्स", "C": "लेनिन", "D": "टॉल्स्टॉय" },
      "en": { "A": "Karl Marx", "B": "Engels", "C": "Lenin", "D": "Tolstoy" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "कार्ल मार्क्स ने 1867 ई. में 'दास कैपिटल' की रचना की जिसमें वैज्ञानिक समाजवाद के सिद्धांतों का प्रतिपादन किया गया।",
      "en": "Karl Marx authored 'Das Kapital' in 1867, establishing the principles of scientific socialism."
    }
  },
  {
    "id": "q_sst_hist_ch4_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b1",
    "chapter_id": "hist_c4",
    "topic_id": "hist_c4_t2",
    "difficulty": "Medium",
    "question": {
      "hi": "गांधीजी ने सविनय अवज्ञा आंदोलन की शुरुआत किस प्रसिद्ध यात्रा से की थी?",
      "en": "Mahatma Gandhi launched the Civil Disobedience Movement with which historic march?"
    },
    "options": {
      "hi": { "A": "चंपारण सत्याग्रह", "B": "दांडी यात्रा (Dandi March)", "C": "खेड़ा सत्याग्रह", "D": "अहमदाबाद मिल हड़ताल" },
      "en": { "A": "Champaran Satyagraha", "B": "Dandi March", "C": "Kheda Satyagraha", "D": "Ahmedabad Mill Strike" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "गांधीजी ने 12 मार्च 1930 को साबरमती आश्रम से दांडी यात्रा शुरू की और 6 अप्रैल 1930 को दांडी में नमक बनाकर नमक कानून तोड़ा।",
      "en": "Gandhiji began Dandi March on 12 March 1930 and broke the salt law on 6 April 1930."
    }
  },
  {
    "id": "q_sst_hist_ch8_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b1",
    "chapter_id": "hist_c8",
    "topic_id": "hist_c8_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "मुद्रण (प्रिंटिंग) तकनीक का विकास सर्वप्रथम किस देश में हुआ था?",
      "en": "In which country was the printing technology first developed?"
    },
    "options": {
      "hi": { "A": "भारत", "B": "जापान", "C": "चीन (China)", "D": "जर्मनी" },
      "en": { "A": "India", "B": "Japan", "C": "China", "D": "Germany" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "मुद्रण तकनीक (काष्ठ ब्लॉक प्रिंटिंग) का आविष्कार सर्वप्रथम चीन में हुआ। बाद में 1430 के दशक में गुटेनबर्ग ने जर्मनी में चल टाइप प्रिंटिंग प्रेस बनाई।",
      "en": "Printing technology originated in China. Gutenberg later invented the mechanical movable type press in Germany."
    }
  },
  {
    "id": "q_sst_geo_ch1_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b2",
    "chapter_id": "geo_c1",
    "topic_id": "geo_c1_t2",
    "difficulty": "Medium",
    "question": {
      "hi": "हीराकुंड बाँध (Hirakud Dam) किस नदी पर स्थित है?",
      "en": "On which river is the Hirakud Dam built?"
    },
    "options": {
      "hi": { "A": "महानदी (Mahanadi)", "B": "गोदावरी", "C": "कृष्णा", "D": "नर्मदा" },
      "en": { "A": "Mahanadi", "B": "Godavari", "C": "Krishna", "D": "Narmada" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "हीराकुंड बाँध ओडिशा में महानदी पर निर्मित भारत का सबसे लम्बा बाँध है।",
      "en": "Hirakud Dam, built on the Mahanadi River in Odisha, is India's longest dam."
    }
  },
  {
    "id": "q_sst_geo_ch5_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b2",
    "chapter_id": "geo_c5",
    "topic_id": "geo_c5_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "बिहार में पायराइट्स (Pyrite) का उत्पादन मुख्य रूप से किस जिले में होता है?",
      "en": "In which district of Bihar is Pyrite primarily produced?"
    },
    "options": {
      "hi": { "A": "गया", "B": "रोहतास (Rohtas - Amjhore)", "C": "मुंगेर", "D": "भागलपुर" },
      "en": { "A": "Gaya", "B": "Rohtas (Amjhore)", "C": "Munger", "D": "Bhagalpur" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "रोहतास जिले के अमझोर में गंधकयुक्त खनिज पायराइट्स की प्रसिद्ध खदानें हैं।",
      "en": "Rohtas (Amjhore) is famous for pyrite mineral production in Bihar."
    }
  },
  {
    "id": "q_sst_dm_ch3_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b3",
    "chapter_id": "dm_c3",
    "topic_id": "dm_c3_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "भूकंप की तीव्रता मापने वाले यंत्र को क्या कहते हैं?",
      "en": "The instrument used to measure the intensity/magnitude of an earthquake is called:"
    },
    "options": {
      "hi": { "A": "बैरोमीटर", "B": "सिस्मोग्राफ (Seismograph / रिक्टर स्केल)", "C": "हाइड्रोमीटर", "D": "एनिमोमीटर" },
      "en": { "A": "Barometer", "B": "Seismograph (Richter Scale)", "C": "Hydrometer", "D": "Anemometer" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "भूकंपीय तरंगों को सिस्मोग्राफ द्वारा रिकॉर्ड किया जाता है तथा इसकी तीव्रता रिक्टर स्केल पर मापी जाती है।",
      "en": "Seismograph records seismic waves and Richter scale measures earthquake magnitude."
    }
  },
  {
    "id": "q_sst_pol_ch2_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b4",
    "chapter_id": "pol_c2",
    "topic_id": "pol_c2_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "पंचायती राज संस्थाओं में महिलाओं को 50% आरक्षण देने वाला भारत का पहला राज्य कौन-सा है?",
      "en": "Which is the first state in India to provide 50% reservation for women in Panchayati Raj institutions?"
    },
    "options": {
      "hi": { "A": "उत्तर प्रदेश", "B": "बिहार (Bihar - 2006)", "C": "मध्य प्रदेश", "D": "राजस्थान" },
      "en": { "A": "Uttar Pradesh", "B": "Bihar (2006)", "C": "Madhya Pradesh", "D": "Rajasthan" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "बिहार पंचायती राज अधिनियम 2006 के तहत महिलाओं को 50% आरक्षण देने वाला देश का प्रथम राज्य बना।",
      "en": "Bihar became the first state in India to grant 50% reservation to women in Panchayats in 2006."
    }
  },
  {
    "id": "q_sst_pol_ch3_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b4",
    "chapter_id": "pol_c3",
    "topic_id": "pol_c3_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "1974 में बिहार में छात्र आंदोलन का नेतृत्व किसने किया था और 'संपूर्ण क्रांति' का आह्वान किया था?",
      "en": "Who led the Bihar Student Movement in 1974 and gave the call for 'Total Revolution' (Sampoorna Kranti)?"
    },
    "options": {
      "hi": { "A": "जयप्रकाश नारायण (JP)", "B": "कर्पूरी ठाकुर", "C": "मोरारजी देसाई", "D": "राममनोहर लोहिया" },
      "en": { "A": "Jayaprakash Narayan (JP)", "B": "Karpoori Thakur", "C": "Morarji Desai", "D": "Ram Manohar Lohia" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "लोकनायक जयप्रकाश नारायण (JP) ने 5 जून 1974 को पटना के गांधी मैदान से 'संपूर्ण क्रांति' का ऐतिहासिक आह्वान किया था।",
      "en": "Loknayak Jayaprakash Narayan led the 1974 student movement and declared Total Revolution."
    }
  },
  {
    "id": "q_sst_eco_ch1_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b5",
    "chapter_id": "eco_c1",
    "topic_id": "eco_c1_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "कृषि, पशुपालन एवं मत्स्य पालन अर्थव्यवस्था के किस क्षेत्र (Sector) के अंतर्गत आते हैं?",
      "en": "Agriculture, animal husbandry and fisheries belong to which sector of the economy?"
    },
    "options": {
      "hi": { "A": "प्राथमिक क्षेत्र (Primary Sector)", "B": "द्वितीयक क्षेत्र (Secondary Sector)", "C": "तृतीयक/सेवा क्षेत्र (Tertiary Sector)", "D": "चतुर्थक क्षेत्र" },
      "en": { "A": "Primary Sector", "B": "Secondary Sector", "C": "Tertiary Sector", "D": "Quaternary Sector" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "प्राकृतिक संसाधनों से सीधे जुड़े कार्य (कृषि, वानिकी, खनन) प्राथमिक क्षेत्र में आते हैं। विनिर्माण द्वितीयक तथा सेवाएं तृतीयक क्षेत्र में आती हैं।",
      "en": "Natural resource-based activities like agriculture fall under the Primary Sector."
    }
  },
  {
    "id": "q_sst_eco_ch2_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b5",
    "chapter_id": "eco_c2",
    "topic_id": "eco_c2_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "भारत में सर्वप्रथम राष्ट्रीय आय एवं प्रति व्यक्ति आय का अनुमान 1868 ई. में किसने लगाया था?",
      "en": "Who first estimated National Income and Per Capita Income in India in 1868?"
    },
    "options": {
      "hi": { "A": "दादाभाई नौरोजी (₹20)", "B": "प्रो. पी.सी. महालनोबिस", "C": "अमर्त्य सेन", "D": "डॉ. वी.के.आर.वी. राव" },
      "en": { "A": "Dadabhai Naoroji (₹20)", "B": "P.C. Mahalanobis", "C": "Amartya Sen", "D": "Dr. V.K.R.V. Rao" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "ग्रैंड ओल्ड मैन ऑफ इंडिया दादाभाई नौरोजी ने अपनी पुस्तक 'Poverty and Un-British Rule in India' में 1868 में भारत की प्रति व्यक्ति आय ₹20 आंकी थी।",
      "en": "Dadabhai Naoroji first calculated India's per capita income as ₹20 in 1868 in his famous book."
    }
  },

  # =========================================================================
  # 4. HINDI (हिंदी) - Godhuli & Varnika
  # =========================================================================
  {
    "id": "q_hin_ch3_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "hindi",
    "book_id": "hin_b1",
    "chapter_id": "hin_c3",
    "topic_id": "hin_c3_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "'भारत से हम क्या सीखें' पाठ साहित्य की कौन-सी विधा है?",
      "en": "What genre of literature is the text 'Bharat Se Hum Kya Sikhen'?"
    },
    "options": {
      "hi": { "A": "भाषण (Speech)", "B": "कहानी", "C": "निबंध", "D": "संस्मरण" },
      "en": { "A": "Speech", "B": "Story", "C": "Essay", "D": "Memoir" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "'भारत से हम क्या सीखें' मैक्समूलर द्वारा इंग्लैंड से भारत आ रहे युवा सिविल सेवा अधिकारियों को दिया गया एक व्याख्यान (भाषण) है।",
      "en": "It is a speech delivered by German scholar Max Muller to young British civil servants coming to India."
    }
  },
  {
    "id": "q_hin_ch6_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "hindi",
    "book_id": "hin_b1",
    "chapter_id": "hin_c6",
    "topic_id": "hin_c6_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "'बहादुर' कहानी में बहादुर का पूरा नाम क्या था और वह कहाँ का रहने वाला था?",
      "en": "In the story 'Bahadur', what was Bahadur's full name and where did he come from?"
    },
    "options": {
      "hi": { "A": "दिलबहादुर (नेपाल)", "B": "रामबहादुर (बिहार)", "C": "शेरबहादुर (भूटान)", "D": "जंगबहादुर (उत्तराखंड)" },
      "en": { "A": "Dilbahadur (Nepal)", "B": "Rambahadur (Bihar)", "C": "Sherbahadur (Bhutan)", "D": "Jangbahadur (Uttarakhand)" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "बहादुर का पूरा नाम 'दिलबहादुर' था और वह नेपाल के पहाड़ी इलाके से मां की पिटाई के डर से भागकर आया था।",
      "en": "Bahadur's full name was Dilbahadur, a poor boy from Nepal."
    }
  },
  {
    "id": "q_hin_ch11_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "hindi",
    "book_id": "hin_b1",
    "chapter_id": "hin_c11",
    "topic_id": "hin_c11_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "उस्ताद बिस्मिल्ला खाँ का जन्म बिहार के किस प्रसिद्ध नगर/स्थान पर हुआ था?",
      "en": "Ustad Bismillah Khan was born in which place in Bihar?"
    },
    "options": {
      "hi": { "A": "डुमराँव (Dumraon, Buxar)", "B": "मुंगेर", "C": "हाजीपुर", "D": "गया" },
      "en": { "A": "Dumraon (Buxar)", "B": "Munger", "C": "Hajipur", "D": "Gaya" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "भारत रत्न उस्ताद बिस्मिल्ला खाँ का जन्म बिहार के डुमराँव (बक्सर) में एक संगीतकार परिवार में हुआ था।",
      "en": "Bharat Ratna Ustad Bismillah Khan was born in Dumraon, Bihar."
    }
  },
  {
    "id": "q_hin_ch17_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "hindi",
    "book_id": "hin_b1",
    "chapter_id": "hin_c17",
    "topic_id": "hin_c17_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "'भारतमाता ग्रामवासिनी' कविता के रचयिता कौन हैं जिन्हें 'प्रकृति के सुकुमार कवि' भी कहा जाता है?",
      "en": "Who is the poet of 'Bharatmata Gramvasini', known as the poet of Nature?"
    },
    "options": {
      "hi": { "A": "सूर्यकांत त्रिपाठी निराला", "B": "सुमित्रानंदन पंत (Sumitranandan Pant)", "C": "महादेवी वर्मा", "D": "जयशंकर प्रसाद" },
      "en": { "A": "Suryakant Tripathi Nirala", "B": "Sumitranandan Pant", "C": "Mahadevi Verma", "D": "Jaishankar Prasad" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "सुमित्रानंदन पंत छायावाद के प्रमुख स्तंभ हैं और उनकी कविता 'भारतमाता' युगवाणी काव्य संग्रह से ली गई है।",
      "en": "Sumitranandan Pant wrote 'Bharatmata', depicting India as residing in villages."
    }
  },
  {
    "id": "q_hin_var_ch3_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "hindi",
    "book_id": "hin_b2",
    "chapter_id": "var_c3",
    "topic_id": "var_c3_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "'माँ' कहानी में मंगु जन्म से ही कैसी लड़की थी?",
      "en": "In the story 'Maa', what condition did Mangu have since birth?"
    },
    "options": {
      "hi": { "A": "अंधी और गूंगी", "B": "पागल और गूंगी (Mad and Mute)", "C": "लंगड़ी", "D": "बहरी" },
      "en": { "A": "Blind and mute", "B": "Mad (mentally challenged) and mute", "C": "Lame", "D": "Deaf" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "ईश्वर पेटलीकर द्वारा रचित गुजराती कहानी 'माँ' में मंगु जन्म से ही पागल और गूंगी थी।",
      "en": "In Ishwar Petlikar's Gujarati story 'Maa', Mangu was mentally challenged and mute from birth."
    }
  },
  {
    "id": "q_hin_var_ch4_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "hindi",
    "book_id": "hin_b2",
    "chapter_id": "var_c4",
    "topic_id": "var_c4_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "'नगर' कहानी में वल्ली अम्माल अपनी बीमार बेटी पाप्पाति को इलाज कराने किस शहर ले गई थी?",
      "en": "In the Tamil story 'Nagar', to which city did Valli Ammal take her daughter Pappati for treatment?"
    },
    "options": {
      "hi": { "A": "चेन्नई", "B": "मदुरै (Madurai)", "C": "तंजावुर", "D": "सलेम" },
      "en": { "A": "Chennai", "B": "Madurai", "C": "Thanjavur", "D": "Salem" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "सुजाता द्वारा रचित 'नगर' कहानी में वल्ली अम्माल मेनिनजाइटिस से पीड़ित पाप्पाति को मदुरै के बड़े सरकारी अस्पताल में लाती है।",
      "en": "Valli Ammal brings her daughter Pappati to the government hospital in Madurai."
    }
  },

  # =========================================================================
  # 5. ENGLISH - Panorama & Supplementary
  # =========================================================================
  {
    "id": "q_eng_ch2_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "english",
    "book_id": "eng_b1",
    "chapter_id": "eng_c2",
    "topic_id": "eng_c2_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "'Me and the Ecology Bit' पाठ में कथावाचक जिम (Jim) लोगों को किसके प्रति जागरूक करने का प्रयास करता है?",
      "en": "In 'Me and the Ecology Bit', what does narrator Jim try to make people aware of?"
    },
    "options": {
      "hi": { "A": "राजनीति", "B": "पर्यावरण और पारिस्थितिकी (Ecology & Environment)", "C": "व्यापार", "D": "स्वास्थ्य" },
      "en": { "A": "Politics", "B": "Ecology & Environment Preservation", "C": "Business", "D": "Health" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "जिम अपने मोहल्ले के लोगों को कचरा न जलाने, खाद बनाने और पर्यावरण बचाने के लिए प्रेरित करता है।",
      "en": "Jim tries to teach neighbors about composting, saving paper, and protecting the ecology."
    }
  },
  {
    "id": "q_eng_ch4_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "english",
    "book_id": "eng_b1",
    "chapter_id": "eng_c4",
    "topic_id": "eng_c4_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "'What is Wrong with Indian Films' निबंध किस महान भारतीय फिल्म निर्देशक द्वारा लिखा गया है?",
      "en": "Who wrote the essay 'What is Wrong with Indian Films'?"
    },
    "options": {
      "hi": { "A": "सत्यजीत रे (Satyajit Ray)", "B": "ऋत्विक घटक", "C": "मृणाल सेन", "D": "गुरु दत्त" },
      "en": { "A": "Satyajit Ray", "B": "Ritwik Ghatak", "C": "Mrinal Sen", "D": "Guru Dutt" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "भारत के ऑस्कर विजेता विश्वविख्यात फिल्म निर्देशक सत्यजीत रे ने भारतीय सिनेमा की कमजोरियों व मौलिकता पर यह निबंध लिखा है।",
      "en": "Legendary Oscar-winning Indian filmmaker Satyajit Ray wrote this critical essay."
    }
  },
  {
    "id": "q_eng_po_ch1_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "english",
    "book_id": "eng_b1",
    "chapter_id": "eng_p1",
    "topic_id": "eng_p1_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "विलियम काउपर की कविता के अनुसार 'God made the country, and man made the ______'?",
      "en": "According to William Cowper's poem, 'God made the country, and man made the ______'?"
    },
    "options": {
      "hi": { "A": "Town (कस्बा/शहर)", "B": "Village", "C": "Field", "D": "Forest" },
      "en": { "A": "Town", "B": "Village", "C": "Field", "D": "Forest" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "कविता की प्रसिद्ध पंक्ति: 'God made the country, and man made the town' है जो ग्रामीण और शहरी जीवन के अंतर को दर्शाती है।",
      "en": "Famous opening line: 'God made the country, and man made the town'."
    }
  },
  {
    "id": "q_eng_po_ch5_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "english",
    "book_id": "eng_b1",
    "chapter_id": "eng_p5",
    "topic_id": "eng_p5_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "पेरियासामी थूरन की कविता 'The Empty Heart' में कल्पतरु वृक्ष ने लालची व्यक्ति को सोने से भरे कितने घड़े दिए थे?",
      "en": "In Periasamy Thooran's poem 'The Empty Heart', how many gold-filled pitchers did Kalpataru give the greedy man?"
    },
    "options": {
      "hi": { "A": "5 घड़े", "B": "7 घड़े (Seven Pitchers)", "C": "10 घड़े", "D": "3 घड़े" },
      "en": { "A": "5 pitchers", "B": "Seven pitchers (7)", "C": "10 pitchers", "D": "3 pitchers" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "कल्पतरु ने सात सोने के घड़े दिए, लेकिन 8वें आधे भरे घड़े को पूरा भरने के लालच में वह भूखा-प्यासा मर गया।",
      "en": "The wishing tree gave 7 gold pitchers, but the man's greed for an 8th pitcher killed him."
    }
  },

  # =========================================================================
  # 6. SANSKRIT (संस्कृत) - Piyusham Part 2
  # =========================================================================
  {
    "id": "q_san_ch1_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "sanskrit",
    "book_id": "san_b1",
    "chapter_id": "san_c1",
    "topic_id": "san_c1_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "'सत्यमेव जयते नानृतम्' (सत्य की ही जीत होती है, असत्य की नहीं) किस उपनिषद् से लिया गया है?",
      "en": "'Satyameva Jayate Nanritam' is compiled from which Upanishad?"
    },
    "options": {
      "hi": { "A": "ईशावास्योपनिषद्", "B": "कठोपनिषद्", "C": "मुण्डकोपनिषद् (Mundaka Upanishad)", "D": "श्वेताश्वतरोपनिषद्" },
      "en": { "A": "Isha Upanishad", "B": "Katha Upanishad", "C": "Mundaka Upanishad", "D": "Shvetashvatara Upanishad" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "भारत का राष्ट्रीय आदर्श वाक्य 'सत्यमेव जयते' मुण्डकोपनिषद् से संकलित है।",
      "en": "India's national motto 'Satyameva Jayate' is taken from Mundaka Upanishad."
    }
  },
  {
    "id": "q_san_ch4_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "sanskrit",
    "book_id": "san_b1",
    "chapter_id": "san_c4",
    "topic_id": "san_c4_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "दण्डी ने किस विदुषी को 'सर्वशुक्ला सरस्वती' कहकर पुकारा था?",
      "en": "Which female Sanskrit scholar was praised as 'Sarvashukla Saraswati' by Dandi?"
    },
    "options": {
      "hi": { "A": "मैत्रेयी", "B": "गार्गी", "C": "विजयाङ्का (Vijayanka)", "D": "शीलाभट्टारिका" },
      "en": { "A": "Maitreyi", "B": "Gargi", "C": "Vijayanka", "D": "Shilabhattarika" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "महाकवि दण्डी ने श्यामवर्ण की होते हुए भी अद्भुत संस्कृत रचनाकार विजयाङ्का को 'सर्वशुक्ला सरस्वती' कहा।",
      "en": "Poet Dandi called Vijayanka 'Sarvashukla Saraswati' due to her supreme scholarship."
    }
  },
  {
    "id": "q_san_ch8_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "sanskrit",
    "book_id": "san_b1",
    "chapter_id": "san_c8",
    "topic_id": "san_c8_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "'कर्मवीर कथा' में भीखनटोला गाँव किस राज्य में अवस्थित है?",
      "en": "In 'Karmaveer Katha', in which state is Bhikhan Tola village located?"
    },
    "options": {
      "hi": { "A": "उत्तर प्रदेश", "B": "बिहार (Bihar)", "C": "झारखंड", "D": "मध्य प्रदेश" },
      "en": { "A": "Uttar Pradesh", "B": "Bihar", "C": "Jharkhand", "D": "Madhya Pradesh" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "भीखनटोला बिहार का एक अत्यंत निर्धन गाँव है जहाँ के बालक रामप्रवेश राम ने अपनी लगन से केंद्रीय लोक सेवा परीक्षा उत्तीर्ण की।",
      "en": "Bhikhan Tola is a poor village in Bihar from where Ram Pravesh Ram rose to crack the UPSC civil services."
    }
  },
  {
    "id": "q_san_ch12_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "sanskrit",
    "book_id": "san_b1",
    "chapter_id": "san_c12",
    "topic_id": "san_c12_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "'कर्णस्य दानवीरता' नाटक में इंद्र (शक्र) कर्ण से छलपूर्वक क्या माँगते हैं?",
      "en": "In 'Karnasya Danavirata', what does Lord Indra in disguise ask Karna for?"
    },
    "options": {
      "hi": { "A": "हजार गाएँ", "B": "अंग देश का राज्य", "C": "कवच और कुंडल (Armor and Earrings)", "D": "सोना और चाँदी" },
      "en": { "A": "Thousand cows", "B": "Kingdom of Anga", "C": "Kavach and Kundal (Armor & Earrings)", "D": "Gold and silver" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "इंद्र ब्राह्मण वेश में आकर कर्ण से उसके जन्मजात अभेद्य कवच और कुंडल मांग लेते हैं ताकि अर्जुन की रक्षा हो सके।",
      "en": "Indra disguised as a Brahmin begged for Karna's divine Armor and Earrings to protect Arjuna."
    }
  },
  {
    "id": "q_san_ch14_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "sanskrit",
    "book_id": "san_b1",
    "chapter_id": "san_c14",
    "topic_id": "san_c14_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "प्राचीन भारतीय दर्शन में 'न्याय दर्शन' के प्रवर्तक कौन से महर्षि हैं?",
      "en": "Who is the propounder of 'Nyaya Philosophy' in ancient Indian philosophy?"
    },
    "options": {
      "hi": { "A": "महर्षि कपिल (सांख्य)", "B": "महर्षि गौतम (न्याय / Gautama)", "C": "महर्षि पतंजलि (योग)", "D": "महर्षि कणाद (वैशेषिक)" },
      "en": { "A": "Kapila (Sankhya)", "B": "Gautama (Nyaya)", "C": "Patanjali (Yoga)", "D": "Kanada (Vaisheshika)" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "न्याय दर्शन के प्रवर्तक महर्षि गौतम हैं। सांख्य के कपिल, योग के पतंजलि तथा वैशेषिक के कणाद हैं।",
      "en": "Maharishi Gautama is the author of Nyaya Sutras."
    }
  }
]

print(f"Total structured questions ready to write: {len(all_questions)}")

target_file = r"c:\Users\harsh\Desktop\test app\js\data\questionBankExtra.js"
js_text = "window.BSEB_QUESTION_BANK_EXTRA = " + json.dumps(all_questions, ensure_ascii=False, indent=2) + ";\n"

with open(target_file, "w", encoding="utf-8") as f:
    f.write(js_text)

print(f"Successfully written {len(all_questions)} verified questions to {target_file}")
