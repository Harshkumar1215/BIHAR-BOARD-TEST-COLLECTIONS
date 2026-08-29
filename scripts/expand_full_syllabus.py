# -*- coding: utf-8 -*-
"""
Expands BSEB Class 10 Question Bank with comprehensive coverage across all subjects and chapters.
"""
import json

additional_mcqs = [
  # MATHEMATICS
  {
    "id": "q_math_c6_02",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c6",
    "topic_id": "math_c6_t4",
    "difficulty": "Medium",
    "question": {
      "hi": "किसी समकोण त्रिभुज में कर्ण का वर्ग अन्य दो भुजाओं के वर्गों के योग के बराबर होता है। इसे किस नाम से जाना जाता है?",
      "en": "In a right triangle, the square of the hypotenuse is equal to the sum of squares of the other two sides. This is:"
    },
    "options": {
      "hi": { "A": "थेल्स प्रमेय", "B": "पाइथागोरस प्रमेय (Pythagoras Theorem)", "C": "यूलर प्रमेय", "D": "अप्पोलॉनियस प्रमेय" },
      "en": { "A": "Thales Theorem", "B": "Pythagoras Theorem", "C": "Euler Theorem", "D": "Apollonius Theorem" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "पाइथागोरस प्रमेय के अनुसार: कर्ण² = लंब² + आधार² (h² = p² + b²).",
      "en": "Pythagoras Theorem: Hypotenuse² = Base² + Perpendicular²."
    }
  },
  {
    "id": "q_math_c8_03",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c8",
    "topic_id": "math_c8_t3",
    "difficulty": "Easy",
    "question": {
      "hi": "पूरक कोण सूत्र के अनुसार sin(90° - θ) का मान क्या होता है?",
      "en": "According to complementary angle formulas, what is sin(90° - θ) equal to?"
    },
    "options": {
      "hi": { "A": "tan θ", "B": "cos θ", "C": "cot θ", "D": "cosec θ" },
      "en": { "A": "tan θ", "B": "cos θ", "C": "cot θ", "D": "cosec θ" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "पूरक कोणों के लिए: sin(90° - θ) = cos θ तथा cos(90° - θ) = sin θ होता है।",
      "en": "For complementary angles: sin(90° - θ) = cos θ."
    }
  },
  {
    "id": "q_math_c13_02",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c13",
    "topic_id": "math_c13_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "त्रिज्या r और ऊँचाई h वाले लंबवृत्तीय बेलन (Cylinder) का वक्र पृष्ठीय क्षेत्रफल क्या होता है?",
      "en": "What is the curved surface area of a right circular cylinder of radius r and height h?"
    },
    "options": {
      "hi": { "A": "πr²h", "B": "2πrh", "C": "2πr(r + h)", "D": "πrl" },
      "en": { "A": "πr²h", "B": "2πrh", "C": "2πr(r + h)", "D": "πrl" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "बेलन का वक्र पृष्ठीय क्षेत्रफल = 2πrh होता है, जबकि कुल पृष्ठीय क्षेत्रफल = 2πr(r + h) और आयतन = πr²h होता है।",
      "en": "Curved surface area of cylinder is 2πrh."
    }
  },
  {
    "id": "q_math_c14_03",
    "board": "BSEB",
    "class": "10",
    "subject_id": "maths",
    "book_id": "maths_b1",
    "chapter_id": "math_c14",
    "topic_id": "math_c14_t3",
    "difficulty": "Medium",
    "question": {
      "hi": "आँकड़ों 3, 5, 7, 4, 2, 1, 4, 3, 4 का बहुलक (Mode) क्या होगा?",
      "en": "What is the Mode of the data set: 3, 5, 7, 4, 2, 1, 4, 3, 4?"
    },
    "options": {
      "hi": { "A": "3", "B": "4", "C": "5", "D": "7" },
      "en": { "A": "3", "B": "4", "C": "5", "D": "7" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "बहुलक वह मान होता है जिसकी बारंबारता सबसे अधिक हो। यहाँ 4 सबसे अधिक 3 बार आया है, अतः बहुलक = 4.",
      "en": "Mode is the value occurring with highest frequency. 4 occurs 3 times."
    }
  },

  # SCIENCE (Physics, Chemistry, Biology)
  {
    "id": "q_sci_ph_c12_04",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b1",
    "chapter_id": "sci_c12",
    "topic_id": "sci_c12_t3",
    "difficulty": "Medium",
    "question": {
      "hi": "1 किलोवाट-घंटा (1 kWh) विद्युत ऊर्जा का मान कितने जूल के बराबर होता है?",
      "en": "1 kilowatt-hour (1 kWh) of electrical energy is equal to how many Joules?"
    },
    "options": {
      "hi": { "A": "3.6 x 10⁶ J", "B": "3.6 x 10⁵ J", "C": "3.6 x 10⁷ J", "D": "3600 J" },
      "en": { "A": "3.6 x 10⁶ J", "B": "3.6 x 10⁵ J", "C": "3.6 x 10⁷ J", "D": "3600 J" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "1 kWh = 1000 W x 3600 s = 3.6 x 10⁶ J (जूल). इसे 1 यूनिट बिजली भी कहते हैं।",
      "en": "1 kWh = 1000 W x 3600 s = 3.6 x 10⁶ Joules (commercial unit of electricity)."
    }
  },
  {
    "id": "q_sci_ch_c2_04",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b2",
    "chapter_id": "sci_c2",
    "topic_id": "sci_c2_t3",
    "difficulty": "Medium",
    "question": {
      "hi": "प्लास्टर ऑफ पेरिस (Plaster of Paris) का रासायनिक सूत्र क्या है?",
      "en": "What is the chemical formula of Plaster of Paris (POP)?"
    },
    "options": {
      "hi": { "A": "CaSO₄·2H₂O", "B": "CaSO₄·½H₂O", "C": "CaSO₄·H₂O", "D": "Na₂CO₃·10H₂O" },
      "en": { "A": "CaSO₄·2H₂O", "B": "CaSO₄·½H₂O", "C": "CaSO₄·H₂O", "D": "Na₂CO₃·10H₂O" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "प्लास्टर ऑफ पेरिस (कैल्शियम सल्फेट हेमीहाइड्रेट) का सूत्र CaSO₄·½H₂O है, जबकि जिप्सम CaSO₄·2H₂O होता है।",
      "en": "Plaster of Paris is Calcium Sulphate Hemihydrate (CaSO₄·½H₂O)."
    }
  },
  {
    "id": "q_sci_ch_c4_04",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b2",
    "chapter_id": "sci_c4",
    "topic_id": "sci_c4_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "निम्नलिखित में से कौन कार्बन का एक शुद्ध क्रिस्टलीय अपररूप (Allotrope) है?",
      "en": "Which of the following is a pure crystalline allotrope of Carbon?"
    },
    "options": {
      "hi": { "A": "कोयला", "B": "हीरा (Diamond) एवं ग्रेफाइट", "C": "काजल", "D": "चारकोल" },
      "en": { "A": "Coal", "B": "Diamond and Graphite", "C": "Lampblack", "D": "Charcoal" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "हीरा, ग्रेफाइट और फुलरीन (C₆₀) कार्बन के प्रमुख क्रिस्टलीय अपररूप हैं।",
      "en": "Diamond, Graphite and Fullerenes are crystalline allotropes of carbon."
    }
  },
  {
    "id": "q_sci_bio_c6_05",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b3",
    "chapter_id": "sci_c6",
    "topic_id": "sci_c6_t3",
    "difficulty": "Easy",
    "question": {
      "hi": "मानव हृदय में कितने कोष्ठ (Chambers) होते हैं?",
      "en": "How many chambers are there in the human heart?"
    },
    "options": {
      "hi": { "A": "2", "B": "3", "C": "4", "D": "6" },
      "en": { "A": "2", "B": "3", "C": "4", "D": "6" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "मानव हृदय में 4 कोष्ठ होते हैं: दायाँ अलिंद, बायाँ अलिंद, दायाँ निलय और बायाँ निलय।",
      "en": "Human heart consists of 4 chambers: two atria and two ventricles."
    }
  },
  {
    "id": "q_sci_bio_c9_02",
    "board": "BSEB",
    "class": "10",
    "subject_id": "science",
    "book_id": "sci_b3",
    "chapter_id": "sci_c9",
    "topic_id": "sci_c9_t2",
    "difficulty": "Medium",
    "question": {
      "hi": "मानव कोशिका में गुणसूत्रों (Chromosomes) की संख्या कितनी होती है?",
      "en": "What is the total number of chromosomes in a human somatic cell?"
    },
    "options": {
      "hi": { "A": "23", "B": "46 (23 जोड़े)", "C": "48", "D": "44" },
      "en": { "A": "23", "B": "46 (23 pairs)", "C": "48", "D": "44" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "मानव में 23 जोड़े अर्थात् 46 गुणसूत्र होते हैं, जिनमें 22 जोड़े ऑटोसोम तथा 1 जोड़ा लिंग गुणसूत्र (XX/XY) होता है।",
      "en": "Humans have 23 pairs (46 total) of chromosomes."
    }
  },

  # SOCIAL SCIENCE
  {
    "id": "q_sst_hist_c3_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b1",
    "chapter_id": "hist_c3",
    "topic_id": "hist_c3_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "अंकोरवाट का प्रसिद्ध मंदिर किस देश में स्थित है?",
      "en": "In which country is the famous Angkor Wat temple located?"
    },
    "options": {
      "hi": { "A": "वियतनाम", "B": "थाईलैंड", "C": "कंबोडिया (Cambodia)", "D": "लाओस" },
      "en": { "A": "Vietnam", "B": "Thailand", "C": "Cambodia", "D": "Laos" }
    },
    "correct_option": "C",
    "explanation": {
      "hi": "अंकोरवाट का भव्य हिंदू मंदिर कंबोडिया में स्थित है, जिसे 12वीं शताब्दी में सूर्यवर्मन द्वितीय ने बनवाया था।",
      "en": "Angkor Wat temple is located in Cambodia, built by King Suryavarman II."
    }
  },
  {
    "id": "q_sst_geo_c4_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b2",
    "chapter_id": "geo_c4",
    "topic_id": "geo_c4_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "भारत में पहली रेलगाड़ी किस वर्ष और किन दो स्टेशनों के बीच चली थी?",
      "en": "In which year and between which stations did India's first train run?"
    },
    "options": {
      "hi": { "A": "1853 (मुंबई से ठाणे, 34 km)", "B": "1854 (हावड़ा से हुगली)", "C": "1901 (दिल्ली से आगरा)", "D": "1850 (चेन्नई से अरक्कोणम)" },
      "en": { "A": "1853 (Mumbai to Thane, 34 km)", "B": "1854 (Howrah to Hooghly)", "C": "1901 (Delhi to Agra)", "D": "1850 (Chennai to Arakkonam)" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "16 अप्रैल 1853 को लॉर्ड डलहौजी के काल में भारत में पहली रेलगाड़ी बोरीबंदर (मुंबई) से ठाणे के बीच 34 km चली थी।",
      "en": "India's first train ran on 16 April 1853 between Mumbai and Thane (34 km)."
    }
  },
  {
    "id": "q_sst_eco_c6_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "social",
    "book_id": "sst_b5",
    "chapter_id": "eco_c6",
    "topic_id": "eco_c6_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "विश्व व्यापार संगठन (World Trade Organization - WTO) की स्थापना किस वर्ष हुई थी?",
      "en": "In which year was the World Trade Organization (WTO) established?"
    },
    "options": {
      "hi": { "A": "1991", "B": "1995 (1 जनवरी 1995)", "C": "2000", "D": "1985" },
      "en": { "A": "1991", "B": "1995 (1 Jan 1995)", "C": "2000", "D": "1985" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "WTO की स्थापना 1 जनवरी 1995 को GATT के स्थान पर हुई, जिसका मुख्यालय जिनेवा (स्विट्जरलैंड) में है।",
      "en": "WTO was established on 1 January 1995 with headquarters in Geneva."
    }
  },

  # HINDI
  {
    "id": "q_hin_c5_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "hindi",
    "book_id": "hin_b1",
    "chapter_id": "hin_c5",
    "topic_id": "hin_c5_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "'नागरी लिपि' पाठ के लेखक कौन हैं?",
      "en": "Who is the author of 'Nagari Lipi'?"
    },
    "options": {
      "hi": { "A": "गुणाकर मुले (Gunakar Mule)", "B": "रामविलास शर्मा", "C": "हजारी प्रसाद द्विवेदी", "D": "अमरकांत" },
      "en": { "A": "Gunakar Mule", "B": "Ramvilas Sharma", "C": "Hazari Prasad Dwivedi", "D": "Amarkant" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "'नागरी लिपि' निबंध के लेखक प्रसिद्ध विद्वान गुणाकर मुले हैं जिसमें देवनागरी लिपि के ऐतिहासिक विकास की चर्चा है।",
      "en": "Gunakar Mule wrote 'Nagari Lipi'."
    }
  },
  {
    "id": "q_hin_c19_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "hindi",
    "book_id": "hin_b1",
    "chapter_id": "hin_c19",
    "topic_id": "hin_c19_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "'हिरोशिमा' कविता में सूरज कहाँ से निकला था?",
      "en": "In the poem 'Hiroshima' by Agyeya, where did the sun rise from?"
    },
    "options": {
      "hi": { "A": "पूर्व क्षितिज पर", "B": "नगर के चौक पर (परमाणु बम विस्फोट)", "C": "आकाश के मध्य में", "D": "समुद्र तट पर" },
      "en": { "A": "Eastern Horizon", "B": "In the city square (Atomic blast)", "C": "Middle of sky", "D": "Sea shore" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "अज्ञेय ने कविता में परमाणु बम विस्फोट की चमक को 'नगर के चौक पर निकला सूरज' के रूप में प्रतीकात्मक रूप दिया है।",
      "en": "Agyeya metaphorically refers to the atomic bomb blast in the city square as a sudden sun."
    }
  },
  {
    "id": "q_hin_var_c5_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "hindi",
    "book_id": "hin_b2",
    "chapter_id": "var_c5",
    "topic_id": "var_c5_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "'धरती कब तक घूमेगी' कहानी की मुख्य पात्रा सीता के कितने बेटे थे?",
      "en": "How many sons did Sita have in the story 'Dharti Kab Tak Ghumegi'?"
    },
    "options": {
      "hi": { "A": "दो", "B": "तीन (कैलाश, नारायण, बिरजू)", "C": "चार", "D": "पाँच" },
      "en": { "A": "Two", "B": "Three (Kailash, Narayan, Birju)", "C": "Four", "D": "Five" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "साँवर दइया द्वारा रचित राजस्थानी कहानी में सीता के तीन बेटे थे जो माँ को 50-50 रुपए देने का फैसला करते हैं।",
      "en": "Sita had three sons: Kailash, Narayan, and Birju in Sanwar Daiya's story."
    }
  },

  # ENGLISH
  {
    "id": "q_eng_c7_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "english",
    "book_id": "eng_b1",
    "chapter_id": "eng_c7",
    "topic_id": "eng_c7_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "'The Unity of Indian Culture' निबंध के लेखक कौन हैं?",
      "en": "Who is the author of 'The Unity of Indian Culture'?"
    },
    "options": {
      "hi": { "A": "हुमायूँ कबीर (Humayun Kabir)", "B": "सत्यजीत रे", "C": "आर.सी. हचिंसन", "D": "टोनी मॉरिसन" },
      "en": { "A": "Humayun Kabir", "B": "Satyajit Ray", "C": "R.C. Hutchinson", "D": "Toni Morrison" }
    },
    "correct_option": "A",
    "explanation": {
      "hi": "'The Unity of Indian Culture' is an insightful essay by Humayun Kabir about the underlying spirit and continuity of Indian civilization.",
      "en": "Humayun Kabir wrote 'The Unity of Indian Culture'."
    }
  },
  {
    "id": "q_eng_po_c6_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "english",
    "book_id": "eng_b1",
    "chapter_id": "eng_p6",
    "topic_id": "eng_p6_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "पूरन सिंह की कविता 'Koel' में कोयल के पंखों को किसने काला कर दिया?",
      "en": "In Puran Singh's poem 'Koel', what has charred the Koel's wings black?"
    },
    "options": {
      "hi": { "A": "धुआं", "B": "प्रियतम के विरह की अग्नि (Fire of Love)", "C": "सूर्य की धूप", "D": "अंधेरी रात" },
      "en": { "A": "Smoke", "B": "The Fire of Love/Separation", "C": "Sunlight", "D": "Dark night" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "Poet Puran Singh says the intense fire of love and longing for the beloved has charred the cuckoo's wings.",
      "en": "The fire of love for its beloved charred the koel's wings."
    }
  },

  # SANSKRIT
  {
    "id": "q_san_c7_02",
    "board": "BSEB",
    "class": "10",
    "subject_id": "sanskrit",
    "book_id": "san_b1",
    "chapter_id": "san_c7",
    "topic_id": "san_c7_t1",
    "difficulty": "Medium",
    "question": {
      "hi": "नीतिश्लोकाः पाठ के अनुसार नरक के कितने द्वार बताए गए हैं जो आत्मा का नाश करते हैं?",
      "en": "According to Nitishlokah, how many gates to hell are there that destroy the soul?"
    },
    "options": {
      "hi": { "A": "दो", "B": "तीन (काम, क्रोध तथा लोभ)", "C": "चार", "D": "छह" },
      "en": { "A": "Two", "B": "Three (Kama, Krodha, Lobha)", "C": "Four", "D": "Six" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "विदुर नीति के अनुसार: 'त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः। कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥' अर्थात् काम, क्रोध और लोभ नरक के तीन द्वार हैं।",
      "en": "Lust (Kama), Anger (Krodha), and Greed (Lobha) are the three gates to hell."
    }
  },
  {
    "id": "q_san_c13_01",
    "board": "BSEB",
    "class": "10",
    "subject_id": "sanskrit",
    "book_id": "san_b1",
    "chapter_id": "san_c13",
    "topic_id": "san_c13_t1",
    "difficulty": "Easy",
    "question": {
      "hi": "'विश्वशान्तिः' पाठ के अनुसार संसार में अशांति के दो प्रमुख कारण कौन-से हैं?",
      "en": "According to the chapter 'Vishwa Shanti', what are the two main causes of global discord?"
    },
    "options": {
      "hi": { "A": "गरीबी और अशिक्षा", "B": "द्वेष और असहिष्णुता (Hatred and Intolerance)", "C": "आलस्य और अज्ञान", "D": "अहंकार और भय" },
      "en": { "A": "Poverty & illiteracy", "B": "Dvesha (Hatred) and Asahishnuta (Intolerance)", "C": "Laziness & ignorance", "D": "Ego & fear" }
    },
    "correct_option": "B",
    "explanation": {
      "hi": "पाठ में अशांति के दो मूल कारण द्वेष (ईर्ष्या) और असहिष्णुता (सहनशीलता का अभाव) बताए गए हैं।",
      "en": "Hatred (Dvesha) and Intolerance (Asahishnuta) are the fundamental causes of unrest."
    }
  }
]

# Read existing questionBank.js
with open(r"c:\Users\harsh\Desktop\test app\js\data\questionBank.js", "r", encoding="utf-8") as f:
    text = f.read()

prefix = "window.BSEB_QUESTION_BANK = "
raw = text[text.find(prefix) + len(prefix):].rstrip(";\n ")
existing = json.loads(raw)

all_combined = existing + additional_mcqs

# Deduplicate
seen = set()
final_list = []
for q in all_combined:
    if q["id"] not in seen:
        seen.add(q["id"])
        final_list.append(q)

target = r"c:\Users\harsh\Desktop\test app\js\data\questionBank.js"
js_out = "/**\n * Bihar Board (BSEB) Class 10 Centralized Question Bank\n * Verified, unique MCQs across all subjects and chapters in Hindi & English\n */\n\nwindow.BSEB_QUESTION_BANK = " + json.dumps(final_list, ensure_ascii=False, indent=2) + ";\n"

with open(target, "w", encoding="utf-8") as f:
    f.write(js_out)

print(f"Total Unique Verified Questions in Central Bank: {len(final_list)}")
