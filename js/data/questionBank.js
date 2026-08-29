/**
 * Bihar Board (BSEB) Class 10 Centralized Question Bank
 * Verified, unique MCQs for Hindi & English Mediums
 */

window.BSEB_QUESTION_BANK = [
  // ==========================================
  // MATHEMATICS (गणित)
  // ==========================================
  {
    id: "q_math_001",
    board: "BSEB",
    class: "10",
    subject_id: "maths",
    book_id: "maths_b1",
    chapter_id: "math_c1",
    topic_id: "math_c1_t1",
    difficulty: "Easy",
    question: {
      hi: "यूक्लिड विभाजन एल्गोरिदम दो धनात्मक पूर्णांकों के निम्नलिखित में से किसे परिकलित करने की तकनीक है?",
      en: "Euclid's Division Algorithm is a technique for computing which of the following for two positive integers?"
    },
    options: {
      hi: { A: "लघुत्तम समापवर्त्य (LCM)", B: "महत्तम समापवर्तक (HCF)", C: "भागफल (Quotient)", D: "शेषफल (Remainder)" },
      en: { A: "Least Common Multiple (LCM)", B: "Highest Common Factor (HCF)", C: "Quotient", D: "Remainder" }
    },
    correct_option: "B",
    explanation: {
      hi: "यूक्लिड विभाजन एल्गोरिदम का प्रयोग मुख्य रूप से दो धनात्मक पूर्णांकों का महत्तम समापवर्तक (HCF) ज्ञात करने के लिए किया जाता है।",
      en: "Euclid's division algorithm is used to compute the Highest Common Factor (HCF) of two positive integers."
    }
  },
  {
    id: "q_math_002",
    board: "BSEB",
    class: "10",
    subject_id: "maths",
    book_id: "maths_b1",
    chapter_id: "math_c1",
    topic_id: "math_c1_t3",
    difficulty: "Medium",
    question: {
      hi: "निम्नलिखित में से कौन-सी संख्या अपरिमेय (Irrational) है?",
      en: "Which of the following numbers is Irrational?"
    },
    options: {
      hi: { A: "√9", B: "√100", C: "√7", D: "4/5" },
      en: { A: "√9", B: "√100", C: "√7", D: "4/5" }
    },
    correct_option: "C",
    explanation: {
      hi: "√7 एक अपरिमेय संख्या है क्योंकि 7 एक पूर्ण वर्ग संख्या नहीं है। जबकि √9 = 3 और √100 = 10 परिमेय हैं।",
      en: "√7 is an irrational number as 7 is not a perfect square, whereas √9 = 3 and √100 = 10 are rational."
    }
  },
  {
    id: "q_math_003",
    board: "BSEB",
    class: "10",
    subject_id: "maths",
    book_id: "maths_b1",
    chapter_id: "math_c2",
    topic_id: "math_c2_t2",
    difficulty: "Medium",
    question: {
      hi: "यदि द्विघात बहुपद ax² + bx + c के शून्यांक α और β हों, तो (α + β) का मान क्या होगा?",
      en: "If α and β are zeros of the quadratic polynomial ax² + bx + c, what is the value of (α + β)?"
    },
    options: {
      hi: { A: "c/a", B: "-b/a", C: "b/a", D: "-c/a" },
      en: { A: "c/a", B: "-b/a", C: "b/a", D: "-c/a" }
    },
    correct_option: "B",
    explanation: {
      hi: "द्विघात बहुपद ax² + bx + c में शून्यांकों का योग α + β = -b/a होता है और शून्यांकों का गुणनफल αβ = c/a होता है।",
      en: "For polynomial ax² + bx + c, the sum of zeros α + β = -b/a and product of zeros αβ = c/a."
    }
  },
  {
    id: "q_math_004",
    board: "BSEB",
    class: "10",
    subject_id: "maths",
    book_id: "maths_b1",
    chapter_id: "math_c3",
    topic_id: "math_c3_t1",
    difficulty: "Hard",
    question: {
      hi: "यदि समीकरण युग्म a₁x + b₁y + c₁ = 0 और a₂x + b₂y + c₂ = 0 में a₁/a₂ = b₁/b₂ ≠ c₁/c₂ हो, तो समीकरणों के कितने हल होंगे?",
      en: "If in a pair of linear equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, a₁/a₂ = b₁/b₂ ≠ c₁/c₂, how many solutions exist?"
    },
    options: {
      hi: { A: "अद्वितीय हल (One Unique Solution)", B: "अनंत हल (Infinitely Many)", C: "कोई हल नहीं (No Solution)", D: "दो हल (Two Solutions)" },
      en: { A: "One Unique Solution", B: "Infinitely Many Solutions", C: "No Solution", D: "Two Solutions" }
    },
    correct_option: "C",
    explanation: {
      hi: "जब a₁/a₂ = b₁/b₂ ≠ c₁/c₂ होता है, तब रेखाएँ समानांतर (Parallel) होती हैं और प्रणाली का कोई हल नहीं होता।",
      en: "When a₁/a₂ = b₁/b₂ ≠ c₁/c₂, lines are parallel and there is no solution."
    }
  },
  {
    id: "q_math_005",
    board: "BSEB",
    class: "10",
    subject_id: "maths",
    book_id: "maths_b1",
    chapter_id: "math_c4",
    topic_id: "math_c4_t3",
    difficulty: "Medium",
    question: {
      hi: "द्विघात समीकरण ax² + bx + c = 0 का विविक्तकर (Discriminant, D) क्या होता है?",
      en: "What is the Discriminant (D) of quadratic equation ax² + bx + c = 0?"
    },
    options: {
      hi: { A: "b² - 4ac", B: "b² + 4ac", C: "4ac - b²", D: "√(b² - 4ac)" },
      en: { A: "b² - 4ac", B: "b² + 4ac", C: "4ac - b²", D: "√(b² - 4ac)" }
    },
    correct_option: "A",
    explanation: {
      hi: "द्विघात समीकरण के लिए विविक्तकर (Discriminant) D = b² - 4ac होता है। यदि D > 0 तो दो वास्तविक व भिन्न मूल होते हैं।",
      en: "Discriminant D = b² - 4ac. If D > 0, roots are real and distinct."
    }
  },
  {
    id: "q_math_006",
    board: "BSEB",
    class: "10",
    subject_id: "maths",
    book_id: "maths_b1",
    chapter_id: "math_c5",
    topic_id: "math_c5_t2",
    difficulty: "Medium",
    question: {
      hi: "समांतर श्रेढ़ी (AP) 2, 7, 12, ... का 10वाँ पद क्या होगा?",
      en: "What is the 10th term of the Arithmetic Progression (AP) 2, 7, 12, ...?"
    },
    options: {
      hi: { A: "47", B: "50", C: "45", D: "52" },
      en: { A: "47", B: "50", C: "45", D: "52" }
    },
    correct_option: "A",
    explanation: {
      hi: "a = 2, d = 7 - 2 = 5. 10वाँ पद a₁₀ = a + (10 - 1)d = 2 + 9(5) = 2 + 45 = 47.",
      en: "a = 2, d = 5. a₁₀ = a + 9d = 2 + 9(5) = 47."
    }
  },
  {
    id: "q_math_007",
    board: "BSEB",
    class: "10",
    subject_id: "maths",
    book_id: "maths_b1",
    chapter_id: "math_c7",
    topic_id: "math_c7_t1",
    difficulty: "Easy",
    question: {
      hi: "बिंदु P(x, y) की मूल बिंदु (Origin, (0,0)) से दूरी क्या होगी?",
      en: "What is the distance of point P(x, y) from the Origin (0,0)?"
    },
    options: {
      hi: { A: "x² + y²", B: "√(x² + y²)", C: "√(x² - y²)", D: "x + y" },
      en: { A: "x² + y²", B: "√(x² + y²)", C: "√(x² - y²)", D: "x + y" }
    },
    correct_option: "B",
    explanation: {
      hi: "दूरी सूत्र के अनुसार, मूल बिंदु (0,0) से बिंदु (x,y) की दूरी d = √((x-0)² + (y-0)²) = √(x² + y²) होती है।",
      en: "Using distance formula from origin (0,0), d = √(x² + y²)."
    }
  },
  {
    id: "q_math_008",
    board: "BSEB",
    class: "10",
    subject_id: "maths",
    book_id: "maths_b1",
    chapter_id: "math_c8",
    topic_id: "math_c8_t4",
    difficulty: "Medium",
    question: {
      hi: "sin²θ + cos²θ का मान किसके बराबर होता है?",
      en: "What is the value of sin²θ + cos²θ equal to?"
    },
    options: {
      hi: { A: "0", B: "1", C: "2", D: "-1" },
      en: { A: "0", B: "1", C: "2", D: "-1" }
    },
    correct_option: "B",
    explanation: {
      hi: "त्रिकोणमितीय मूलभूत सर्वसमिका: sin²θ + cos²θ = 1 होती है किसी भी कोण θ के लिए।",
      en: "Fundamental Trigonometric Identity: sin²θ + cos²θ = 1 for any angle θ."
    }
  },
  {
    id: "q_math_009",
    board: "BSEB",
    class: "10",
    subject_id: "maths",
    book_id: "maths_b1",
    chapter_id: "math_c15",
    topic_id: "math_c15_t2",
    difficulty: "Easy",
    question: {
      hi: "किसी निश्चित (Sure) घटना की प्रायिकता (Probability) कितनी होती है?",
      en: "What is the probability of a Sure (Certain) event?"
    },
    options: {
      hi: { A: "0", B: "0.5", C: "1", D: "अनंत (Infinite)" },
      en: { A: "0", B: "0.5", C: "1", D: "Infinite" }
    },
    correct_option: "C",
    explanation: {
      hi: "निश्चित घटना की प्रायिकता सदैव 1 होती है तथा असंभव घटना की प्रायिकता 0 होती है।",
      en: "Probability of a sure event is always 1, while that of an impossible event is 0."
    }
  },

  // ==========================================
  // SCIENCE (विज्ञान)
  // ==========================================
  {
    id: "q_sci_001",
    board: "BSEB",
    class: "10",
    subject_id: "science",
    book_id: "sci_b1",
    chapter_id: "sci_c10",
    topic_id: "sci_c10_t1",
    difficulty: "Easy",
    question: {
      hi: "अवतल दर्पण की फोकस दूरी (f) और उसकी वक्रता त्रिज्या (R) में क्या संबंध है?",
      en: "What is the relation between focal length (f) and radius of curvature (R) of a concave mirror?"
    },
    options: {
      hi: { A: "f = R", B: "f = R/2", C: "f = 2R", D: "f = R/4" },
      en: { A: "f = R", B: "f = R/2", C: "f = 2R", D: "f = R/4" }
    },
    correct_option: "B",
    explanation: {
      hi: "गोलीय दर्पण की फोकस दूरी उसकी वक्रता त्रिज्या की आधी होती है, अर्थात् f = R/2 या R = 2f.",
      en: "Focal length of a spherical mirror is half of its radius of curvature, i.e., f = R/2."
    }
  },
  {
    id: "q_sci_002",
    board: "BSEB",
    class: "10",
    subject_id: "science",
    book_id: "sci_b1",
    chapter_id: "sci_c11",
    topic_id: "sci_c11_t2",
    difficulty: "Medium",
    question: {
      hi: "निकट दृष्टि दोष (Myopia) को दूर करने के लिए किस लेंस का उपयोग किया जाता है?",
      en: "Which lens is used to correct Myopia (Short-sightedness)?"
    },
    options: {
      hi: { A: "उत्तल लेंस (Convex Lens)", B: "अवतल लेंस (Concave Lens)", C: "बेलनाकार लेंस (Cylindrical Lens)", D: "द्विफोकसी लेंस (Bifocal Lens)" },
      en: { A: "Convex Lens", B: "Concave Lens", C: "Cylindrical Lens", D: "Bifocal Lens" }
    },
    correct_option: "B",
    explanation: {
      hi: "निकट दृष्टि दोष (मायोपिया) के निवारण हेतु अपसारी (अवतल) लेंस के चश्मे का प्रयोग किया जाता है।",
      en: "Concave lens (diverging lens) is used to correct myopia."
    }
  },
  {
    id: "q_sci_003",
    board: "BSEB",
    class: "10",
    subject_id: "science",
    book_id: "sci_b1",
    chapter_id: "sci_c12",
    topic_id: "sci_c12_t1",
    difficulty: "Easy",
    question: {
      hi: "विद्युत धारा का SI मात्रक क्या है?",
      en: "What is the SI unit of Electric Current?"
    },
    options: {
      hi: { A: "वोल्ट (Volt)", B: "ओम (Ohm)", C: "एम्पियर (Ampere)", D: "जूल (Joule)" },
      en: { A: "Volt", B: "Ohm", C: "Ampere", D: "Joule" }
    },
    correct_option: "C",
    explanation: {
      hi: "विद्युत धारा (Electric Current) का SI मात्रक एम्पियर (A) होता है। विभवांतर का वोल्ट और प्रतिरोध का ओम होता है।",
      en: "SI unit of electric current is Ampere (A). Potential difference is Volt and resistance is Ohm."
    }
  },
  {
    id: "q_sci_004",
    board: "BSEB",
    class: "10",
    subject_id: "science",
    book_id: "sci_b2",
    chapter_id: "sci_c2",
    topic_id: "sci_c2_t2",
    difficulty: "Easy",
    question: {
      hi: "शुद्ध जल (Pure Water) का pH मान कितना होता है?",
      en: "What is the pH value of Pure Water at 25°C?"
    },
    options: {
      hi: { A: "0", B: "7", C: "14", D: "6" },
      en: { A: "0", B: "7", C: "14", D: "6" }
    },
    correct_option: "B",
    explanation: {
      hi: "शुद्ध जल उदासीन होता है, इसलिए इसका pH मान 7 होता है। pH < 7 अम्लीय तथा pH > 7 क्षारीय होता है।",
      en: "Pure water is neutral, hence its pH value is 7."
    }
  },
  {
    id: "q_sci_005",
    board: "BSEB",
    class: "10",
    subject_id: "science",
    book_id: "sci_b2",
    chapter_id: "sci_c3",
    topic_id: "sci_c3_t1",
    difficulty: "Medium",
    question: {
      hi: "कमरे के ताप पर द्रव अवस्था में रहने वाली एकमात्र अधातु (Non-metal) कौन-सी है?",
      en: "Which is the only Non-metal that exists as a Liquid at room temperature?"
    },
    options: {
      hi: { A: "पारा (Mercury)", B: "ब्रोमीन (Bromine)", C: "आयोडीन (Iodine)", D: "क्लोरीन (Chlorine)" },
      en: { A: "Mercury", B: "Bromine", C: "Iodine", D: "Chlorine" }
    },
    correct_option: "B",
    explanation: {
      hi: "ब्रोमीन (Br) कमरे के तापमान पर द्रव अवस्था में पाई जाने वाली अधातु है। पारा (Hg) द्रव धातु है।",
      en: "Bromine (Br) is the non-metal liquid at room temperature, while Mercury (Hg) is the liquid metal."
    }
  },
  {
    id: "q_sci_006",
    board: "BSEB",
    class: "10",
    subject_id: "science",
    book_id: "sci_b3",
    chapter_id: "sci_c6",
    topic_id: "sci_c6_t1",
    difficulty: "Medium",
    question: {
      hi: "पौधों में पत्तियों द्वारा बने भोजन का वहन (स्थानांतरण) पौधों के अन्य भागों में किसके द्वारा होता है?",
      en: "Translocation of prepared food from leaves to other parts of the plant occurs through which tissue?"
    },
    options: {
      hi: { A: "जाइलम (Xylem)", B: "फ्लोएम (Phloem)", C: "रंध्र (Stomata)", D: "मूल रोम (Root Hairs)" },
      en: { A: "Xylem", B: "Phloem", C: "Stomata", D: "Root Hairs" }
    },
    correct_option: "B",
    explanation: {
      hi: "पौधों में भोजन (सुक्रोज/पोषक तत्वों) का परिवहन फ्लोएम ऊतक द्वारा होता है, जबकि जल का संवहन जाइलम द्वारा होता है।",
      en: "Phloem transports food materials from leaves, whereas Xylem transports water and minerals."
    }
  },
  {
    id: "q_sci_007",
    board: "BSEB",
    class: "10",
    subject_id: "science",
    book_id: "sci_b3",
    chapter_id: "sci_c7",
    topic_id: "sci_c7_t1",
    difficulty: "Easy",
    question: {
      hi: "तंत्रिका ऊतक की रचनात्मक एवं कार्यात्मक इकाई को क्या कहते हैं?",
      en: "What is the structural and functional unit of the Nervous System called?"
    },
    options: {
      hi: { A: "नेफ्रॉन (Nephron)", B: "न्यूरॉन (Neuron / तंत्रिका कोशिका)", C: "साइटॉन (Cyton)", D: "एक्सॉन (Axon)" },
      en: { A: "Nephron", B: "Neuron", C: "Cyton", D: "Axon" }
    },
    correct_option: "B",
    explanation: {
      hi: "तंत्रिका तंत्र की इकाई न्यूरॉन (Neuron) है, जबकि वृक्क (Kidney) की उत्सर्जी इकाई नेफ्रॉन (Nephron) है।",
      en: "Neuron is the functional unit of the nervous system. Nephron is the unit of kidney."
    }
  },

  // ==========================================
  // SOCIAL SCIENCE (सामाजिक विज्ञान)
  // ==========================================
  {
    id: "q_sst_001",
    board: "BSEB",
    class: "10",
    subject_id: "social",
    book_id: "sst_b1",
    chapter_id: "hist_c4",
    topic_id: "hist_c4_t1",
    difficulty: "Medium",
    question: {
      hi: "जलियांवाला बाग हत्याकांड किस तिथि को हुआ था?",
      en: "On which date did the Jallianwala Bagh Massacre take place?"
    },
    options: {
      hi: { A: "13 अप्रैल 1919", B: "14 अप्रैल 1919", C: "15 अप्रैल 1919", D: "16 अप्रैल 1919" },
      en: { A: "13 April 1919", B: "14 April 1919", C: "15 April 1919", D: "16 April 1919" }
    },
    correct_option: "A",
    explanation: {
      hi: "पंजाब के अमृतसर में वैशाखी के दिन 13 अप्रैल 1919 को जनरल डायर के आदेश पर अंधाधुंध गोलियां चलाई गई थीं।",
      en: "Jallianwala Bagh massacre occurred on Baisakhi day, 13 April 1919, under General Dyer's orders in Amritsar."
    }
  },
  {
    id: "q_sst_002",
    board: "BSEB",
    class: "10",
    subject_id: "social",
    book_id: "sst_b1",
    chapter_id: "hist_c1",
    topic_id: "hist_c1_t1",
    difficulty: "Easy",
    question: {
      hi: "'यंग इटली' (Young Italy) संस्था की स्थापना किसने की थी?",
      en: "Who founded the 'Young Italy' organization?"
    },
    options: {
      hi: { A: "कावूर (Cavour)", B: "मेजिनी (Mazzini)", C: "गैरीबाल्डी (Garibaldi)", D: "बिस्मार्क (Bismarck)" },
      en: { A: "Cavour", B: "Mazzini", C: "Garibaldi", D: "Bismarck" }
    },
    correct_option: "B",
    explanation: {
      hi: "जोसेफ मेजिनी ने 1831 ई. में मार्सेई में 'यंग इटली' संस्था की स्थापना की थी।",
      en: "Giuseppe Mazzini founded Young Italy in 1831 to unify Italy."
    }
  },
  {
    id: "q_sst_003",
    board: "BSEB",
    class: "10",
    subject_id: "social",
    book_id: "sst_b2",
    chapter_id: "geo_c1",
    topic_id: "geo_c1_t1",
    difficulty: "Easy",
    question: {
      hi: "काली मिट्टी (Black Soil) का दूसरा नाम क्या है?",
      en: "What is the another name for Black Soil in India?"
    },
    options: {
      hi: { A: "बलुई मिट्टी", B: "रेगुर मिट्टी (Regur Soil)", C: "लाल मिट्टी", D: "लैटेराइट मिट्टी" },
      en: { A: "Sandy Soil", B: "Regur Soil", C: "Red Soil", D: "Laterite Soil" }
    },
    correct_option: "B",
    explanation: {
      hi: "काली मिट्टी को 'रेगुर मिट्टी' भी कहा जाता है। यह कपास की खेती के लिए अत्यंत उपजाऊ होती है।",
      en: "Black soil is popularly known as Regur soil and is ideal for cotton cultivation."
    }
  },
  {
    id: "q_sst_004",
    board: "BSEB",
    class: "10",
    subject_id: "social",
    book_id: "sst_b3",
    chapter_id: "dm_c2",
    topic_id: "dm_c2_t1",
    difficulty: "Easy",
    question: {
      hi: "बिहार का कौन-सा क्षेत्र सबसे अधिक बाढ़ प्रभावित (Flood Prone) रहता है?",
      en: "Which region of Bihar is most severely flood-affected?"
    },
    options: {
      hi: { A: "पूर्वी बिहार", B: "दक्षिणी बिहार", C: "पश्चिमी बिहार", D: "उत्तरी बिहार (North Bihar)" },
      en: { A: "East Bihar", B: "South Bihar", C: "West Bihar", D: "North Bihar" }
    },
    correct_option: "D",
    explanation: {
      hi: "उत्तरी बिहार (North Bihar) कोसी, गंडक एवं बागमती जैसी नदियों के कारण अत्यधिक बाढ़ प्रभावित रहता है।",
      en: "North Bihar is extremely flood-prone due to rivers originating in Nepal like Kosi."
    }
  },
  {
    id: "q_sst_005",
    board: "BSEB",
    class: "10",
    subject_id: "social",
    book_id: "sst_b4",
    chapter_id: "pol_c2",
    topic_id: "pol_c2_t1",
    difficulty: "Medium",
    question: {
      hi: "भारतीय संविधान की किस अनुसूची या संशोधन द्वारा पंचायती राज संस्थाओं को संवैधानिक दर्जा मिला?",
      en: "Which Constitutional Amendment Act granted constitutional status to Panchayati Raj Institutions?"
    },
    options: {
      hi: { A: "71वाँ संशोधन", B: "73वाँ संशोधन", C: "74वाँ संशोधन", D: "42वाँ संशोधन" },
      en: { A: "71st Amendment", B: "73rd Amendment", C: "74th Amendment", D: "42nd Amendment" }
    },
    correct_option: "B",
    explanation: {
      hi: "73वें संविधान संशोधन (1992) के द्वारा ग्रामीण स्थानीय स्वशासन (पंचायती राज) को संवैधानिक मान्यता मिली। 74वाँ शहरी निकायों हेतु था।",
      en: "The 73rd Constitutional Amendment Act 1992 established 3-tier Panchayati Raj System."
    }
  },
  {
    id: "q_sst_006",
    board: "BSEB",
    class: "10",
    subject_id: "social",
    book_id: "sst_b5",
    chapter_id: "eco_c4",
    topic_id: "eco_c4_t1",
    difficulty: "Medium",
    question: {
      hi: "भारत का केंद्रीय बैंक (Central Bank of India) कौन-सा है?",
      en: "Which is the Central Bank of India?"
    },
    options: {
      hi: { A: "भारतीय स्टेट बैंक (SBI)", B: "भारतीय रिजर्व बैंक (RBI)", C: "पंजाब नेशनल बैंक (PNB)", D: "नाबार्ड (NABARD)" },
      en: { A: "State Bank of India", B: "Reserve Bank of India (RBI)", C: "Punjab National Bank", D: "NABARD" }
    },
    correct_option: "B",
    explanation: {
      hi: "भारतीय रिजर्व बैंक (RBI) भारत का केंद्रीय बैंक है, जिसकी स्थापना 1 अप्रैल 1935 को हुई थी। यह नोट जारी करने एवं बैंकों का नियंत्रण करता है।",
      en: "Reserve Bank of India (RBI) established on 1 April 1935 is the apex central banking institution."
    }
  },

  // ==========================================
  // HINDI (हिंदी)
  // ==========================================
  {
    id: "q_hin_001",
    board: "BSEB",
    class: "10",
    subject_id: "hindi",
    book_id: "hin_b1",
    chapter_id: "hin_c1",
    topic_id: "hin_c1_t1",
    difficulty: "Easy",
    question: {
      hi: "'श्रम विभाजन और जाति प्रथा' पाठ के लेखक कौन हैं?",
      en: "Who is the author of 'Shram Vibhajan aur Jati Pratha'?"
    },
    options: {
      hi: { A: "डॉ. भीमराव अंबेडकर", B: "हजारी प्रसाद द्विवेदी", C: "रामविलास शर्मा", D: "गुणाकर मुले" },
      en: { A: "Dr. B.R. Ambedkar", B: "Hazari Prasad Dwivedi", C: "Ramvilas Sharma", D: "Gunakar Mule" }
    },
    correct_option: "A",
    explanation: {
      hi: "'श्रम विभाजन और जाति प्रथा' निबंध के लेखक संविधान निर्माता डॉ. भीमराव अंबेडकर हैं।",
      en: "Dr. B.R. Ambedkar is the author of 'Shram Vibhajan aur Jati Pratha'."
    }
  },
  {
    id: "q_hin_002",
    board: "BSEB",
    class: "10",
    subject_id: "hindi",
    book_id: "hin_b1",
    chapter_id: "hin_c2",
    topic_id: "hin_c2_t1",
    difficulty: "Medium",
    question: {
      hi: "'विष के दाँत' कहानी में मदन किसका बेटा था?",
      en: "In the story 'Vish Ke Dant', whose son was Madan?"
    },
    options: {
      hi: { A: "सेन साहब का", B: "गिरधर लाल का (किरानी)", C: "सोफर का", D: "मुखर्जी साहब का" },
      en: { A: "Sen Sahib", B: "Girdhar Lal (Clerk)", C: "Driver", D: "Mukherjee Sahib" }
    },
    correct_option: "B",
    explanation: {
      hi: "मदन सेन साहब की फैक्टरी के स्वाभिमानी किरानी गिरधर लाल का बेटा था, जिसने कासू के दो दाँत तोड़ दिए थे।",
      en: "Madan was the son of Girdhar Lal, a clerk working in Sen Sahib's factory."
    }
  },
  {
    id: "q_hin_003",
    board: "BSEB",
    class: "10",
    subject_id: "hindi",
    book_id: "hin_b2",
    chapter_id: "var_c1",
    topic_id: "var_c1_t1",
    difficulty: "Easy",
    question: {
      hi: "'दही वाली मंगम्मा' कहानी किस भाषा से अनूदित (अनुवादित) है?",
      en: "From which language is 'Dahi Wali Magamma' translated into Hindi?"
    },
    options: {
      hi: { A: "तमिल", B: "कन्नड़ (Kannada)", C: "तेलुगु", D: "मलयालम" },
      en: { A: "Tamil", B: "Kannada", C: "Telugu", D: "Malayalam" }
    },
    correct_option: "B",
    explanation: {
      hi: "'दही वाली मंगम्मा' प्रसिद्ध कन्नड़ साहित्यकार श्रीनिवास द्वारा रचित कहानी है।",
      en: "'Dahi Wali Magamma' is a famous Kannada short story written by Srinivas."
    }
  },

  // ==========================================
  // ENGLISH (अंग्रेज़ी)
  // ==========================================
  {
    id: "q_eng_001",
    board: "BSEB",
    class: "10",
    subject_id: "english",
    book_id: "eng_b1",
    chapter_id: "eng_c1",
    topic_id: "eng_c1_t1",
    difficulty: "Easy",
    question: {
      hi: "'The Pace for Living' निबंध के लेखक कौन हैं?",
      en: "Who has written the essay 'The Pace for Living'?"
    },
    options: {
      hi: { A: "R.C. Hutchinson", B: "Joan Lexau", C: "Satyajit Ray", D: "Toni Morrison" },
      en: { A: "R.C. Hutchinson", B: "Joan Lexau", C: "Satyajit Ray", D: "Toni Morrison" }
    },
    correct_option: "A",
    explanation: {
      hi: "'The Pace for Living' is written by British novelist R.C. Hutchinson.",
      en: "'The Pace for Living' is written by British novelist R.C. Hutchinson."
    }
  },
  {
    id: "q_eng_002",
    board: "BSEB",
    class: "10",
    subject_id: "english",
    book_id: "eng_b1",
    chapter_id: "eng_c3",
    topic_id: "eng_c3_t1",
    difficulty: "Easy",
    question: {
      hi: "महादेवी वर्मा की रचना 'Gillu' में गिल्लू किस जीव (प्राणी) का नाम है?",
      en: "In Mahadevi Verma's 'Gillu', Gillu is the name of which creature?"
    },
    options: {
      hi: { A: "बिल्ली (Cat)", B: "गिलहरी (Squirrel)", C: "तोता (Parrot)", D: "कुत्ता (Dog)" },
      en: { A: "Cat", B: "Squirrel", C: "Parrot", D: "Dog" }
    },
    correct_option: "B",
    explanation: {
      hi: "Gillu is a tiny injured baby squirrel saved and nurtured by Mahadevi Verma.",
      en: "Gillu is a baby squirrel rescued and cared for by Mahadevi Verma."
    }
  },
  {
    id: "q_eng_003",
    board: "BSEB",
    class: "10",
    subject_id: "english",
    book_id: "eng_b2",
    chapter_id: "eng_s1",
    topic_id: "eng_s1_t1",
    difficulty: "Medium",
    question: {
      hi: "प्रेमचंद की प्रसिद्ध कहानी 'January Night' (पूस की रात) में हल्कू के पालतू कुत्ते का नाम क्या था?",
      en: "In Premchand's story 'January Night', what was the name of Halku's pet dog?"
    },
    options: {
      hi: { A: "मोती (Moti)", B: "जबरा (Jabra)", C: "टाइगर (Tiger)", D: "शेरू (Sheru)" },
      en: { A: "Moti", B: "Jabra", C: "Tiger", D: "Sheru" }
    },
    correct_option: "B",
    explanation: {
      hi: "In Premchand's story 'January Night', Jabra was Halku's loyal dog who accompanied him to guard the farm.",
      en: "In Premchand's 'January Night', Jabra is the faithful dog of the poor farmer Halku."
    }
  },

  // ==========================================
  // SANSKRIT (संस्कृत)
  // ==========================================
  {
    id: "q_san_001",
    board: "BSEB",
    class: "10",
    subject_id: "sanskrit",
    book_id: "san_b1",
    chapter_id: "san_c1",
    topic_id: "san_c1_t1",
    difficulty: "Easy",
    question: {
      hi: "'मङ्गलम्' (Mangalam) पाठ कहाँ से संकलित है?",
      en: "From where is the chapter 'Mangalam' compiled?"
    },
    options: {
      hi: { A: "पुराण से", B: "उपनिषद् से (Upanishad)", C: "वेदांग से", D: "रामायण से" },
      en: { A: "Puranas", B: "Upanishad", C: "Vedanga", D: "Ramayana" }
    },
    correct_option: "B",
    explanation: {
      hi: "'मङ्गलम्' पाठ उपनिषदों के पद्यात्मक श्लोकों से संकलित है (ईशावास्य, कठ, मुण्डक, श्वेताश्वतर)।",
      en: "The Mangalam chapter contains 5 poetic mantras compiled from 4 classical Upanishads."
    }
  },
  {
    id: "q_san_002",
    board: "BSEB",
    class: "10",
    subject_id: "sanskrit",
    book_id: "san_b1",
    chapter_id: "san_c2",
    topic_id: "san_c2_t1",
    difficulty: "Easy",
    question: {
      hi: "पाटलिपुत्र (पटना) किस नदी के तट पर स्थित है?",
      en: "On the bank of which river is Patliputra (Patna) situated?"
    },
    options: {
      hi: { A: "पुनपुन नदी", B: "गंगा नदी (Ganga)", C: "सोण नदी", D: "गंडक नदी" },
      en: { A: "Punpun", B: "Ganga River", C: "Son", D: "Gandak" }
    },
    correct_option: "B",
    explanation: {
      hi: "पाटलिपुत्र नगर गंगा नदी के पवित्र उत्तर तट पर अवस्थित है।",
      en: "Patliputra (modern Patna) is situated on the northern bank of the River Ganga."
    }
  },
  {
    id: "q_san_003",
    board: "BSEB",
    class: "10",
    subject_id: "sanskrit",
    book_id: "san_b1",
    chapter_id: "san_c3",
    topic_id: "san_c3_t1",
    difficulty: "Medium",
    question: {
      hi: "'अलसकथा' पाठ में मिथिला के मंत्री कौन थे?",
      en: "Who was the minister of Mithila in the story 'Alas Katha'?"
    },
    options: {
      hi: { A: "कर्मवीर", B: "बीरेश्वर (Bireswar)", C: "विद्यापति", D: "सुरेश्वर" },
      en: { A: "Karmaveer", B: "Bireswar", C: "Vidyapati", D: "Sureswar" }
    },
    correct_option: "B",
    explanation: {
      hi: "'अलसकथा' में मिथिला के दानशील मंत्री बीरेश्वर थे, जो निर्धनों व आलसियों को अन्न व वस्त्र देते थे।",
      en: "Bireswar was the generous minister of Mithila in the story Alas Katha written by Vidyapati."
    }
  }
];
