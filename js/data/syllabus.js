/**
 * Bihar Board (BSEB) Class 10 Academic Hierarchy & Syllabus Data
 * Strictly Bihar Board Class 10 Syllabus (Hindi + English Medium)
 */

window.BSEB_SYLLABUS = {
  board: "BSEB",
  boardName: "Bihar School Examination Board (बिहार विद्यालय परीक्षा समिति)",
  class: "10",
  className: "Class 10 (कक्षा 10)",
  mediums: [
    { code: "hi", name: "हिंदी (Hindi)" },
    { code: "en", name: "English (अंग्रेज़ी)" }
  ],
  subjects: [
    {
      id: "maths",
      code: "MATH",
      name: { hi: "गणित", en: "Mathematics" },
      icon: "fa-calculator",
      color: "from-blue-600 to-indigo-600",
      accent: "#3b82f6",
      books: [
        {
          id: "maths_b1",
          name: { hi: "गणित (कक्षा 10)", en: "Mathematics (Class 10)" },
          chapters: [
            {
              id: "math_c1",
              code: "CH01",
              title: { hi: "वास्तविक संख्याएं", en: "Real Numbers" },
              topics: [
                { id: "math_c1_t1", title: { hi: "यूक्लिड विभाजन प्रमेयिका एवं एल्गोरिदम", en: "Euclid's Division Lemma & Algorithm" } },
                { id: "math_c1_t2", title: { hi: "अंकगणित की आधारभूत प्रमेय", en: "Fundamental Theorem of Arithmetic" } },
                { id: "math_c1_t3", title: { hi: "अपरिमेय संख्याओं का पुनर्भ्रमण", en: "Revisiting Irrational Numbers" } },
                { id: "math_c1_t4", title: { hi: "परिमेय संख्याओं और उनके दशमलव प्रसारों का पुनर्भ्रमण", en: "Revisiting Rational Numbers & Decimal Expansions" } }
              ]
            },
            {
              id: "math_c2",
              code: "CH02",
              title: { hi: "बहुपद", en: "Polynomials" },
              topics: [
                { id: "math_c2_t1", title: { hi: "बहुपद के शून्यांकों का ज्यामितीय अर्थ", en: "Geometrical Meaning of Zeros of Polynomial" } },
                { id: "math_c2_t2", title: { hi: "बहुपद के शून्यांकों और गुणांकों में संबंध", en: "Relationship between Zeros and Coefficients" } },
                { id: "math_c2_t3", title: { hi: "बहुपदों के लिए विभाजन एल्गोरिदम", en: "Division Algorithm for Polynomials" } }
              ]
            },
            {
              id: "math_c3",
              code: "CH03",
              title: { hi: "दो चर वाले रैखिक समीकरण युग्म", en: "Pair of Linear Equations in Two Variables" },
              topics: [
                { id: "math_c3_t1", title: { hi: "रैखिक समीकरण युग्म का ग्राफीय निरूपण", en: "Graphical Method of Solution of Pair of Linear Equations" } },
                { id: "math_c3_t2", title: { hi: "प्रतिस्थापन विधि", en: "Substitution Method" } },
                { id: "math_c3_t3", title: { hi: "विलोपन विधि", en: "Elimination Method" } },
                { id: "math_c3_t4", title: { hi: "वज्र-गुणन विधि", en: "Cross-Multiplication Method" } }
              ]
            },
            {
              id: "math_c4",
              code: "CH04",
              title: { hi: "द्विघात समीकरण", en: "Quadratic Equations" },
              topics: [
                { id: "math_c4_t1", title: { hi: "द्विघात समीकरण का मानक रूप", en: "Standard Form of Quadratic Equation" } },
                { id: "math_c4_t2", title: { hi: "गुणनखंडन द्वारा द्विघात समीकरण का हल", en: "Solution by Factorisation" } },
                { id: "math_c4_t3", title: { hi: "द्विघाती सूत्र एवं विविक्तकर (Discriminant)", en: "Quadratic Formula and Discriminant" } }
              ]
            },
            {
              id: "math_c5",
              code: "CH05",
              title: { hi: "समांतर श्रेढ़ियाँ", en: "Arithmetic Progressions" },
              topics: [
                { id: "math_c5_t1", title: { hi: "समांतर श्रेढ़ी का प्रथम पद और सार्व अंतर", en: "First Term and Common Difference of AP" } },
                { id: "math_c5_t2", title: { hi: "AP का n-वाँ पद", en: "nth Term of an AP" } },
                { id: "math_c5_t3", title: { hi: "AP के प्रथम n पदों का योग", en: "Sum of First n Terms of an AP" } }
              ]
            },
            {
              id: "math_c6",
              code: "CH06",
              title: { hi: "त्रिभुज", en: "Triangles" },
              topics: [
                { id: "math_c6_t1", title: { hi: "समरूप आकृतियाँ एवं थेल्स प्रमेय", en: "Similar Figures and Thales Theorem" } },
                { id: "math_c6_t2", title: { hi: "त्रिभुजों की समरूपता के लिए कसौटियाँ (AAA, SAS, SSS)", en: "Criteria for Similarity of Triangles" } },
                { id: "math_c6_t3", title: { hi: "समरूप त्रिभुजों के क्षेत्रफल", en: "Areas of Similar Triangles" } },
                { id: "math_c6_t4", title: { hi: "पाइथागोरस प्रमेय एवं इसका विलोम", en: "Pythagoras Theorem and its Converse" } }
              ]
            },
            {
              id: "math_c7",
              code: "CH07",
              title: { hi: "निर्देशांक ज्यामिति", en: "Coordinate Geometry" },
              topics: [
                { id: "math_c7_t1", title: { hi: "दूरी सूत्र (Distance Formula)", en: "Distance Formula" } },
                { id: "math_c7_t2", title: { hi: "विभाजन सूत्र (Section Formula)", en: "Section Formula" } },
                { id: "math_c7_t3", title: { hi: "त्रिभुज का क्षेत्रफल", en: "Area of a Triangle" } }
              ]
            },
            {
              id: "math_c8",
              code: "CH08",
              title: { hi: "त्रिकोणमिति का परिचय", en: "Introduction to Trigonometry" },
              topics: [
                { id: "math_c8_t1", title: { hi: "त्रिकोणमितीय अनुपात (sin, cos, tan, cosec, sec, cot)", en: "Trigonometric Ratios" } },
                { id: "math_c8_t2", title: { hi: "कुछ विशिष्ट कोणों के त्रिकोणमितीय अनुपात (0°, 30°, 45°, 60°, 90°)", en: "Trigonometric Ratios of Specific Angles" } },
                { id: "math_c8_t3", title: { hi: "पूरक कोणों के त्रिकोणमितीय अनुपात", en: "Trigonometric Ratios of Complementary Angles" } },
                { id: "math_c8_t4", title: { hi: "त्रिकोणमितीय सर्वसमिकाएँ", en: "Trigonometric Identities" } }
              ]
            },
            {
              id: "math_c9",
              code: "CH09",
              title: { hi: "त्रिकोणमिति के कुछ अनुप्रयोग", en: "Some Applications of Trigonometry" },
              topics: [
                { id: "math_c9_t1", title: { hi: "उन्नयन कोण और अवनमन कोण", en: "Angles of Elevation and Depression" } },
                { id: "math_c9_t2", title: { hi: "ऊँचाई और दूरी संबंधी समस्याएँ", en: "Heights and Distances Problems" } }
              ]
            },
            {
              id: "math_c10",
              code: "CH10",
              title: { hi: "वृत्त", en: "Circles" },
              topics: [
                { id: "math_c10_t1", title: { hi: "वृत्त की स्पर्श रेखा", en: "Tangent to a Circle" } },
                { id: "math_c10_t2", title: { hi: "एक बिंदु से वृत्त पर स्पर्श रेखाओं की संख्या", en: "Number of Tangents from a Point on a Circle" } }
              ]
            },
            {
              id: "math_c11",
              code: "CH11",
              title: { hi: "रचनाएँ", en: "Constructions" },
              topics: [
                { id: "math_c11_t1", title: { hi: "रेखाखंड का विभाजन", en: "Division of a Line Segment" } },
                { id: "math_c11_t2", title: { hi: "वृत्त पर स्पर्श रेखाओं की रचना", en: "Construction of Tangents to a Circle" } }
              ]
            },
            {
              id: "math_c12",
              code: "CH12",
              title: { hi: "वृत्तों से संबंधित क्षेत्रफल", en: "Areas Related to Circles" },
              topics: [
                { id: "math_c12_t1", title: { hi: "वृत्त का परिमाप और क्षेत्रफल", en: "Perimeter and Area of a Circle" } },
                { id: "math_c12_t2", title: { hi: "त्रिज्यखंड और वृत्तखंड के क्षेत्रफल", en: "Areas of Sector and Segment of a Circle" } }
              ]
            },
            {
              id: "math_c13",
              code: "CH13",
              title: { hi: "पृष्ठीय क्षेत्रफल और आयतन", en: "Surface Areas and Volumes" },
              topics: [
                { id: "math_c13_t1", title: { hi: "ठोसों के संयोजन का पृष्ठीय क्षेत्रफल", en: "Surface Area of a Combination of Solids" } },
                { id: "math_c13_t2", title: { hi: "ठोसों के संयोजन का आयतन", en: "Volume of a Combination of Solids" } },
                { id: "math_c13_t3", title: { hi: "एक आकार से दूसरे आकार में रूपांतरण", en: "Conversion of Solid from One Shape to Another" } },
                { id: "math_c13_t4", title: { hi: "शंकु का छिन्नक (Frustum of a Cone)", en: "Frustum of a Cone" } }
              ]
            },
            {
              id: "math_c14",
              code: "CH14",
              title: { hi: "सांख्यिकी", en: "Statistics" },
              topics: [
                { id: "math_c14_t1", title: { hi: "वर्गीकृत आंकड़ों का माध्य (Mean)", en: "Mean of Grouped Data" } },
                { id: "math_c14_t2", title: { hi: "वर्गीकृत आंकड़ों का बहुलक (Mode)", en: "Mode of Grouped Data" } },
                { id: "math_c14_t3", title: { hi: "वर्गीकृत आंकड़ों का माध्यक (Median)", en: "Median of Grouped Data" } }
              ]
            },
            {
              id: "math_c15",
              code: "CH15",
              title: { hi: "प्रायिकता", en: "Probability" },
              topics: [
                { id: "math_c15_t1", title: { hi: "सैद्धांतिक प्रायिकता और घटनाएँ", en: "Theoretical Approach to Probability" } },
                { id: "math_c15_t2", title: { hi: "निश्चित, असंभव एवं पूरक घटनाएँ", en: "Sure, Impossible & Complementary Events" } }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "science",
      code: "SCI",
      name: { hi: "विज्ञान", en: "Science" },
      icon: "fa-flask",
      color: "from-emerald-600 to-teal-600",
      accent: "#10b981",
      books: [
        {
          id: "sci_b1",
          name: { hi: "भौतिक विज्ञान (Physics)", en: "Physics" },
          chapters: [
            {
              id: "sci_c10",
              code: "CH10",
              title: { hi: "प्रकाश – परावर्तन तथा अपवर्तन", en: "Light: Reflection and Refraction" },
              topics: [
                { id: "sci_c10_t1", title: { hi: "प्रकाश का परावर्तन एवं दर्पण सूत्र", en: "Reflection of Light & Mirror Formula" } },
                { id: "sci_c10_t2", title: { hi: "प्रकाश का अपवर्तन एवं स्नेल का नियम", en: "Refraction of Light & Snell's Law" } },
                { id: "sci_c10_t3", title: { hi: "लेंस द्वारा प्रतिबिंब निर्माण एवं लेंस की क्षमता", en: "Image Formation by Lenses & Power of Lens" } }
              ]
            },
            {
              id: "sci_c11",
              code: "CH11",
              title: { hi: "मानव नेत्र तथा रंगबिरंगा संसार", en: "Human Eye and Colorful World" },
              topics: [
                { id: "sci_c11_t1", title: { hi: "मानव नेत्र की संरचना एवं समंजन क्षमता", en: "Structure of Human Eye & Accommodation" } },
                { id: "sci_c11_t2", title: { hi: "दृष्टि दोष एवं उनका संशोधन (निकट, दीर्घ, जरा)", en: "Defects of Vision & Correction" } },
                { id: "sci_c11_t3", title: { hi: "प्रिज्म से अपवर्तन, वर्ण विक्षेपण एवं वायुमंडलीय अपवर्तन", en: "Prism Dispersion & Atmospheric Refraction" } }
              ]
            },
            {
              id: "sci_c12",
              code: "CH12",
              title: { hi: "विद्युत", en: "Electricity" },
              topics: [
                { id: "sci_c12_t1", title: { hi: "विद्युत धारा, विभवांतर एवं ओम का नियम", en: "Electric Current, Potential Difference & Ohm's Law" } },
                { id: "sci_c12_t2", title: { hi: "प्रतिरोध एवं श्रेणीक्रम/समानांतर क्रम संयोजन", en: "Resistance & Series/Parallel Combination" } },
                { id: "sci_c12_t3", title: { hi: "विद्युत धारा का तापीय प्रभाव एवं जूल का नियम", en: "Heating Effect of Current & Joule's Law" } }
              ]
            },
            {
              id: "sci_c13",
              code: "CH13",
              title: { hi: "विद्युत धारा के चुंबकीय प्रभाव", en: "Magnetic Effects of Electric Current" },
              topics: [
                { id: "sci_c13_t1", title: { hi: "चुंबकीय क्षेत्र रेखाएँ एवं ओर्स्टेड का प्रयोग", en: "Magnetic Field Lines & Oersted's Experiment" } },
                { id: "sci_c13_t2", title: { hi: "फ्लेमिंग का वामहस्त एवं दक्षिणहस्त नियम", en: "Fleming's Left & Right Hand Rules" } },
                { id: "sci_c13_t3", title: { hi: "विद्युत मोटर एवं विद्युत चुंबकीय प्रेरण", en: "Electric Motor & Electromagnetic Induction" } }
              ]
            },
            {
              id: "sci_c14",
              code: "CH14",
              title: { hi: "ऊर्जा के स्रोत", en: "Sources of Energy" },
              topics: [
                { id: "sci_c14_t1", title: { hi: "पारंपरिक ऊर्जा स्रोत (कोयला, पेट्रोलियम, तापीय)", en: "Conventional Sources of Energy" } },
                { id: "sci_c14_t2", title: { hi: "गैर-पारंपरिक स्रोत (सौर, पवन, नाभिकीय, जैव मात्रा)", en: "Non-Conventional Energy Sources" } }
              ]
            }
          ]
        },
        {
          id: "sci_b2",
          name: { hi: "रसायन विज्ञान (Chemistry)", en: "Chemistry" },
          chapters: [
            {
              id: "sci_c1",
              code: "CH01",
              title: { hi: "रासायनिक अभिक्रियाएं एवं समीकरण", en: "Chemical Reactions and Equations" },
              topics: [
                { id: "sci_c1_t1", title: { hi: "संतुलित रासायनिक समीकरण", en: "Balanced Chemical Equations" } },
                { id: "sci_c1_t2", title: { hi: "अभिक्रियाओं के प्रकार (संयोजन, वियोजन, विस्थापन, रेडॉक्स)", en: "Types of Chemical Reactions" } },
                { id: "sci_c1_t3", title: { hi: "संक्षारण एवं विकृतगंधिता", en: "Corrosion & Rancidity" } }
              ]
            },
            {
              id: "sci_c2",
              code: "CH02",
              title: { hi: "अम्ल, क्षारक एवं लवण", en: "Acids, Bases and Salts" },
              topics: [
                { id: "sci_c2_t1", title: { hi: "अम्ल एवं क्षारक के रासायनिक गुण व सूचक", en: "Chemical Properties of Acids & Bases, Indicators" } },
                { id: "sci_c2_t2", title: { hi: "pH स्केल एवं दैनिक जीवन में pH का महत्व", en: "pH Scale and Significance in Daily Life" } },
                { id: "sci_c2_t3", title: { hi: "महत्वपूर्ण लवण (बेकिंग सोडा, धावन सोडा, प्लास्टर ऑफ पेरिस)", en: "Important Salts & Preparation" } }
              ]
            },
            {
              id: "sci_c3",
              code: "CH03",
              title: { hi: "धातु एवं अधातु", en: "Metals and Non-metals" },
              topics: [
                { id: "sci_c3_t1", title: { hi: "भौतिक एवं रासायनिक गुणधर्म", en: "Physical & Chemical Properties" } },
                { id: "sci_c3_t2", title: { hi: "धातुओं की सक्रियता श्रेणी एवं आयनिक यौगिक", en: "Reactivity Series & Ionic Compounds" } },
                { id: "sci_c3_t3", title: { hi: "धातुकर्म (Extraction of Metals)", en: "Metallurgy & Extraction Process" } }
              ]
            },
            {
              id: "sci_c4",
              code: "CH04",
              title: { hi: "कार्बन एवं उसके यौगिक", en: "Carbon and its Compounds" },
              topics: [
                { id: "sci_c4_t1", title: { hi: "सहसंयोजी आबंध एवं कार्बन की सर्वतोमुखी प्रकृति", en: "Covalent Bonding & Versatile Nature of Carbon" } },
                { id: "sci_c4_t2", title: { hi: "समजातीय श्रेणी एवं IUPAC नामकरण", en: "Homologous Series & Nomenclature" } },
                { id: "sci_c4_t3", title: { hi: "एथेनॉल, एथेनॉइक अम्ल, साबुन एवं अपमार्जक", en: "Ethanol, Ethanoic Acid, Soaps & Detergents" } }
              ]
            },
            {
              id: "sci_c5",
              code: "CH05",
              title: { hi: "तत्वों का आवर्त वर्गीकरण", en: "Periodic Classification of Elements" },
              topics: [
                { id: "sci_c5_t1", title: { hi: "डोबेराइनर त्रिक, न्यूलैंड्स अष्टक एवं मेंडेलीव आवर्त सारणी", en: "Early Attempts & Mendeleev's Periodic Table" } },
                { id: "sci_c5_t2", title: { hi: "आधुनिक आवर्त सारणी एवं प्रवृत्तियाँ (संयोजकता, त्रिज्या)", en: "Modern Periodic Table & Trends" } }
              ]
            }
          ]
        },
        {
          id: "sci_b3",
          name: { hi: "जीव विज्ञान एवं पर्यावरण (Biology & Environment)", en: "Biology & Environment" },
          chapters: [
            {
              id: "sci_c6",
              code: "CH06",
              title: { hi: "जैव प्रक्रम", en: "Life Processes" },
              topics: [
                { id: "sci_c6_t1", title: { hi: "पोषण (Nutrition in Plants & Animals)", en: "Nutrition" } },
                { id: "sci_c6_t2", title: { hi: "श्वसन (Respiration)", en: "Respiration" } },
                { id: "sci_c6_t3", title: { hi: "वहन/परिवहन (Transportation in Humans & Plants)", en: "Transportation" } },
                { id: "sci_c6_t4", title: { hi: "उत्सर्जन (Excretion & Nephron)", en: "Excretion" } }
              ]
            },
            {
              id: "sci_c7",
              code: "CH07",
              title: { hi: "नियंत्रण एवं समन्वय", en: "Control and Coordination" },
              topics: [
                { id: "sci_c7_t1", title: { hi: "तंत्रिका तंत्र, न्यूरॉन एवं प्रतिवर्ती चाप", en: "Nervous System, Neuron & Reflex Arc" } },
                { id: "sci_c7_t2", title: { hi: "पादप हार्मोन (Auxin, Gibberellin, Cytokinin)", en: "Plant Hormones" } },
                { id: "sci_c7_t3", title: { hi: "मानव अंतःस्रावी ग्रंथियां एवं हार्मोन", en: "Human Endocrine Glands & Hormones" } }
              ]
            },
            {
              id: "sci_c8",
              code: "CH08",
              title: { hi: "जीव जनन कैसे करते हैं?", en: "How do Organisms Reproduce?" },
              topics: [
                { id: "sci_c8_t1", title: { hi: "अलैंगिक जनन (मुकुलन, विखंडन, पुनर्जनन)", en: "Asexual Reproduction" } },
                { id: "sci_c8_t2", title: { hi: "पुष्पी पौधों में लैंगिक जनन", en: "Sexual Reproduction in Flowering Plants" } },
                { id: "sci_c8_t3", title: { hi: "मानव जनन तंत्र एवं जनन स्वास्थ्य", en: "Human Reproductive System & Reproductive Health" } }
              ]
            },
            {
              id: "sci_c9",
              code: "CH09",
              title: { hi: "आनुवंशिकता एवं जैव विकास", en: "Heredity and Evolution" },
              topics: [
                { id: "sci_c9_t1", title: { hi: "मेंडल के आनुवंशिकता के नियम (मटर का प्रयोग)", en: "Mendel's Laws of Inheritance" } },
                { id: "sci_c9_t2", title: { hi: "मानव में लिंग निर्धारण (Sex Determination)", en: "Sex Determination in Humans" } },
                { id: "sci_c9_t3", title: { hi: "डार्विन का विकास सिद्धांत एवं समजात/समरूप अंग", en: "Evolution & Homologous/Analogous Organs" } }
              ]
            },
            {
              id: "sci_c15",
              code: "CH15",
              title: { hi: "हमारा पर्यावरण", en: "Our Environment" },
              topics: [
                { id: "sci_c15_t1", title: { hi: "पारितंत्र, आहार श्रृंखला एवं आहार जाल", en: "Ecosystem, Food Chain & Food Web" } },
                { id: "sci_c15_t2", title: { hi: "ओजोन परत का क्षय एवं अपशिष्ट प्रबंधन", en: "Ozone Depletion & Waste Management" } }
              ]
            },
            {
              id: "sci_c16",
              code: "CH16",
              title: { hi: "प्राकृतिक संसाधनों का संपोषित प्रबंधन", en: "Sustainable Management of Natural Resources" },
              topics: [
                { id: "sci_c16_t1", title: { hi: "3R सिद्धांत, वन एवं वन्यजीव संरक्षण", en: "3Rs Principle, Forest & Wildlife Conservation" } },
                { id: "sci_c16_t2", title: { hi: "जल संग्रहण एवं बांध (Water Harvesting & Dams)", en: "Water Harvesting & Management" } }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "social",
      code: "SST",
      name: { hi: "सामाजिक विज्ञान", en: "Social Science" },
      icon: "fa-globe-americas",
      color: "from-amber-600 to-orange-600",
      accent: "#f59e0b",
      books: [
        {
          id: "sst_b1",
          name: { hi: "इतिहास (इतिहास की दुनिया - भाग 2)", en: "History (World of History Part 2)" },
          chapters: [
            {
              id: "hist_c1",
              code: "CH01",
              title: { hi: "यूरोप में राष्ट्रवाद", en: "Nationalism in Europe" },
              topics: [
                { id: "hist_c1_t1", title: { hi: "फ्रांसीसी क्रांति एवं मेजिनी, काबूर, गैरीबाल्डी", en: "French Revolution & Italian Unification" } },
                { id: "hist_c1_t2", title: { hi: "जर्मनी का एकीकरण एवं बिस्मार्क की भूमिका", en: "Unification of Germany & Bismarck" } }
              ]
            },
            {
              id: "hist_c2",
              code: "CH02",
              title: { hi: "समाजवाद एवं साम्यवाद", en: "Socialism and Communism" },
              topics: [
                { id: "hist_c2_t1", title: { hi: "कार्ल मार्क्स, दास कैपिटल एवं 1917 की रूसी क्रांति", en: "Karl Marx & Russian Revolution 1917" } }
              ]
            },
            {
              id: "hist_c3",
              code: "CH03",
              title: { hi: "हिंद-चीन में राष्ट्रवादी आंदोलन", en: "Nationalist Movement in Indo-China" },
              topics: [
                { id: "hist_c3_t1", title: { hi: "वियतनाम का स्वतंत्रता संग्राम एवं हो ची मिन्ह", en: "Vietnam Struggle & Ho Chi Minh" } }
              ]
            },
            {
              id: "hist_c4",
              code: "CH04",
              title: { hi: "भारत में राष्ट्रवाद", en: "Nationalism in India" },
              topics: [
                { id: "hist_c4_t1", title: { hi: "सत्याग्रह, जलियांवाला बाग एवं असहयोग आंदोलन", en: "Satyagraha, Jallianwala Bagh & Non-Cooperation" } },
                { id: "hist_c4_t2", title: { hi: "सविनय अवज्ञा आंदोलन, दांडी यात्रा एवं भारत छोड़ो", en: "Civil Disobedience, Dandi March & Quit India" } }
              ]
            },
            {
              id: "hist_c5",
              code: "CH05",
              title: { hi: "अर्थव्यवस्था और आजीविका", en: "Economy and Livelihood" },
              topics: [
                { id: "hist_c5_t1", title: { hi: "औद्योगीकरण का युग एवं ब्रिटेन व भारत", en: "Industrialization Era in Britain & India" } }
              ]
            },
            {
              id: "hist_c6",
              code: "CH06",
              title: { hi: "शहरीकरण एवं शहरी जीवन", en: "Urbanization and Urban Life" },
              topics: [
                { id: "hist_c6_t1", title: { hi: "लंदन और पाटलिपुत्र/पटना का विकास", en: "Development of London & Patna" } }
              ]
            },
            {
              id: "hist_c7",
              code: "CH07",
              title: { hi: "व्यापार और भूमंडलीकरण", en: "Trade and Globalization" },
              topics: [
                { id: "hist_c7_t1", title: { hi: "रेशम मार्ग, 1929 की आर्थिक महामंदी एवं वैश्विक संस्थाएं", en: "Silk Route, Great Depression 1929 & Bretton Woods" } }
              ]
            },
            {
              id: "hist_c8",
              code: "CH08",
              title: { hi: "प्रेस-संस्कृति और राष्ट्रवाद", en: "Press Culture and Nationalism" },
              topics: [
                { id: "hist_c8_t1", title: { hi: "मुद्रण क्रांति, गुटेनबर्ग एवं भारत में प्रेस का विकास", en: "Printing Revolution, Gutenberg & Indian Press" } }
              ]
            }
          ]
        },
        {
          id: "sst_b2",
          name: { hi: "भूगोल (भारत: संसाधन एवं उपयोग)", en: "Geography (India: Resources & Utilization)" },
          chapters: [
            {
              id: "geo_c1",
              code: "CH01",
              title: { hi: "भारत: संसाधन एवं उपयोग", en: "India: Resources and Utilization" },
              topics: [
                { id: "geo_c1_t1", title: { hi: "प्राकृतिक संसाधन (मृदा प्रकार व अपरदन)", en: "Natural Resources & Soils" } },
                { id: "geo_c1_t2", title: { hi: "जल संसाधन (बहुउद्देशीय परियोजनाएँ)", en: "Water Resources & Multipurpose Projects" } },
                { id: "geo_c1_t3", title: { hi: "वन एवं वन्य जीव संसाधन", en: "Forest and Wildlife Resources" } },
                { id: "geo_c1_t4", title: { hi: "खनिज संसाधन (धात्विक व अधात्विक)", en: "Mineral Resources" } },
                { id: "geo_c1_t5", title: { hi: "शक्ति/ऊर्जा संसाधन (पारंपरिक व गैर-पारंपरिक)", en: "Power and Energy Resources" } }
              ]
            },
            {
              id: "geo_c2",
              code: "CH02",
              title: { hi: "कृषि", en: "Agriculture" },
              topics: [
                { id: "geo_c2_t1", title: { hi: "रबी, खरीफ व जायद फसलें एवं हरित क्रांति", en: "Crop Seasons & Green Revolution" } }
              ]
            },
            {
              id: "geo_c3",
              code: "CH03",
              title: { hi: "निर्माण उद्योग", en: "Manufacturing Industries" },
              topics: [
                { id: "geo_c3_t1", title: { hi: "सूती वस्त्र, लोह-इस्पात एवं सीमेंट उद्योग", en: "Textile, Iron-Steel & Cement Industry" } }
              ]
            },
            {
              id: "geo_c4",
              code: "CH04",
              title: { hi: "परिवहन, संचार एवं व्यापार", en: "Transport, Communication and Trade" },
              topics: [
                { id: "geo_c4_t1", title: { hi: "सड़क, रेल, जल परिवहन एवं अंतर्राष्ट्रीय व्यापार", en: "Road, Rail, Waterways & International Trade" } }
              ]
            },
            {
              id: "geo_c5",
              code: "CH05",
              title: { hi: "बिहार: कृषि एवं वन संसाधन", en: "Bihar: Agriculture and Forest Resources" },
              topics: [
                { id: "geo_c5_t1", title: { hi: "बिहार की मुख्य फसलें, सिंचाई व खनिज", en: "Bihar Crops, Irrigation & Mineral Resources" } }
              ]
            },
            {
              id: "geo_c6",
              code: "CH06",
              title: { hi: "मानचित्र अध्ययन - उच्चावच प्रदर्शन", en: "Map Reading & Relief Representation" },
              topics: [
                { id: "geo_c6_t1", title: { hi: "समुच्च रेखाएँ एवं हैश्यूर विधि", en: "Contour Lines & Hachure Method" } }
              ]
            }
          ]
        },
        {
          id: "sst_b3",
          name: { hi: "आपदा प्रबंधन (Disaster Management)", en: "Disaster Management" },
          chapters: [
            {
              id: "dm_c1",
              code: "CH01",
              title: { hi: "प्राकृतिक आपदा: एक परिचय", en: "Natural Disasters: An Introduction" },
              topics: [
                { id: "dm_c1_t1", title: { hi: "प्राकृतिक एवं मानव जनित आपदाएँ", en: "Natural & Man-Made Disasters" } }
              ]
            },
            {
              id: "dm_c2",
              code: "CH02",
              title: { hi: "प्राकृतिक आपदा एवं प्रबंधन: बाढ़ और सुखाड़", en: "Flood and Drought Management" },
              topics: [
                { id: "dm_c2_t1", title: { hi: "बिहार में बाढ़ (उत्तरी बिहार) एवं सूखा प्रबंधन", en: "Floods in Bihar & Drought Preparedness" } }
              ]
            },
            {
              id: "dm_c3",
              code: "CH03",
              title: { hi: "प्राकृतिक आपदा एवं प्रबंधन: भूकंप एवं सुनामी", en: "Earthquake and Tsunami" },
              topics: [
                { id: "dm_c3_t1", title: { hi: "भूकंप तरंगे (P, S, L) एवं सुनामी से बचाव", en: "Seismic Waves & Tsunami Safety" } }
              ]
            },
            {
              id: "dm_c4",
              code: "CH04",
              title: { hi: "जीवन रक्षक आकस्मिक प्रबंधन", en: "Life-Saving Emergency Management" },
              topics: [
                { id: "dm_c4_t1", title: { hi: "प्राथमिक उपचार व खोज-बचाव दल", en: "First Aid & Search-Rescue Operations" } }
              ]
            },
            {
              id: "dm_c5",
              code: "CH05",
              title: { hi: "आपदा काल में वैकल्पिक संचार व्यवस्था", en: "Alternative Communication Systems" },
              topics: [
                { id: "dm_c5_t1", title: { hi: "हेम रेडियो, उपग्रह फोन व वायरलेस", en: "Ham Radio, Satellite Phone & Wireless" } }
              ]
            },
            {
              id: "dm_c6",
              code: "CH06",
              title: { hi: "आपदा और सह-अस्तित्व", en: "Disaster and Co-existence" },
              topics: [
                { id: "dm_c6_t1", title: { hi: "आपदा रोधी मकान निर्माण एवं सामुदायिक जागरूकता", en: "Disaster-Resistant Construction & Awareness" } }
              ]
            }
          ]
        },
        {
          id: "sst_b4",
          name: { hi: "राजनीति विज्ञान (लोकतांत्रिक राजनीति - भाग 2)", en: "Political Science (Democratic Politics Part 2)" },
          chapters: [
            {
              id: "pol_c1",
              code: "CH01",
              title: { hi: "लोकतंत्र में सत्ता की साझेदारी", en: "Power Sharing in Democracy" },
              topics: [
                { id: "pol_c1_t1", title: { hi: "बेल्जियम व श्रीलंका के उदाहरण एवं विविधता में एकता", en: "Belgium & Sri Lanka Models" } }
              ]
            },
            {
              id: "pol_c2",
              code: "CH02",
              title: { hi: "सत्ता में साझेदारी की कार्यप्रणाली", en: "Working of Power Sharing" },
              topics: [
                { id: "pol_c2_t1", title: { hi: "संघवाद, पंचायती राज व 73वाँ/74वाँ संशोधन", en: "Federalism & Panchayati Raj in Bihar" } }
              ]
            },
            {
              id: "pol_c3",
              code: "CH03",
              title: { hi: "लोकतंत्र में प्रतिस्पर्धा एवं संघर्ष", en: "Competition and Conflict in Democracy" },
              topics: [
                { id: "pol_c3_t1", title: { hi: "राजनीतिक दल, राष्ट्रीय व क्षेत्रीय दल एवं जन आंदोलन", en: "Political Parties & People's Movements" } }
              ]
            },
            {
              id: "pol_c4",
              code: "CH04",
              title: { hi: "लोकतंत्र की उपलब्धियाँ", en: "Outcomes of Democracy" },
              topics: [
                { id: "pol_c4_t1", title: { hi: "उत्तरदायी सरकार, आर्थिक विकास व असमानता में कमी", en: "Accountable Government & Social Equality" } }
              ]
            },
            {
              id: "pol_c5",
              code: "CH05",
              title: { hi: "लोकतंत्र की चुनौतियाँ", en: "Challenges to Democracy" },
              topics: [
                { id: "pol_c5_t1", title: { hi: "जातिवाद, परिवारवाद, भ्रष्टाचार एवं चुनावी सुधार", en: "Casteism, Corruption & Electoral Reforms" } }
              ]
            }
          ]
        },
        {
          id: "sst_b5",
          name: { hi: "अर्थशास्त्र (हमारी अर्थव्यवस्था - भाग 2)", en: "Economics (Our Economy Part 2)" },
          chapters: [
            {
              id: "eco_c1",
              code: "CH01",
              title: { hi: "अर्थव्यवस्था एवं इसके विकास का इतिहास", en: "Economy and History of its Development" },
              topics: [
                { id: "eco_c1_t1", title: { hi: "प्राथमिक, द्वितीयक, तृतीयक क्षेत्र एवं सतत विकास", en: "Sectors of Economy & Sustainable Growth" } }
              ]
            },
            {
              id: "eco_c2",
              code: "CH02",
              title: { hi: "राज्य एवं राष्ट्र की आय", en: "State and National Income" },
              topics: [
                { id: "eco_c2_t1", title: { hi: "सकल घरेलू उत्पाद (GDP), प्रति व्यक्ति आय (PCI) व दादाभाई नौरोजी", en: "GDP, Per Capita Income & PCI Measurement" } }
              ]
            },
            {
              id: "eco_c3",
              code: "CH03",
              title: { hi: "मुद्रा, बचत एवं साख", en: "Money, Savings and Credit" },
              topics: [
                { id: "eco_c3_t1", title: { hi: "वस्तु विनिमय प्रणाली, मुद्रा के कार्य एवं साख पत्र", en: "Barter System, Functions of Money & Credit" } }
              ]
            },
            {
              id: "eco_c4",
              code: "CH04",
              title: { hi: "हमारी वित्तीय संस्थाएँ", en: "Our Financial Institutions" },
              topics: [
                { id: "eco_c4_t1", title: { hi: "व्यावसायिक बैंक, RBI, स्वयं सहायता समूह (SHG) व नाबार्ड", en: "Commercial Banks, RBI & SHGs in Bihar" } }
              ]
            },
            {
              id: "eco_c5",
              code: "CH05",
              title: { hi: "रोजगार एवं सेवाएँ", en: "Employment and Services" },
              topics: [
                { id: "eco_c5_t1", title: { hi: "सरकारी व गैर-सरकारी सेवा क्षेत्र तथा आउटसोर्सिंग", en: "Service Sector & Outsourcing" } }
              ]
            },
            {
              id: "eco_c6",
              code: "CH06",
              title: { hi: "वैश्वीकरण", en: "Globalization" },
              topics: [
                { id: "eco_c6_t1", title: { hi: "बहुराष्ट्रीय कंपनियां (MNCs), WTO एवं उदारीकरण", en: "MNCs, WTO, Liberalization & Privatization" } }
              ]
            },
            {
              id: "eco_c7",
              code: "CH07",
              title: { hi: "उपभोक्ता जागरण एवं संरक्षण", en: "Consumer Awareness and Protection" },
              topics: [
                { id: "eco_c7_t1", title: { hi: "उपभोक्ता अधिकार, जागो ग्राहक जागो, ISI/COPRA/FSSAI", en: "Consumer Rights & COPRA 1986" } }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "hindi",
      code: "HIN",
      name: { hi: "हिंदी", en: "Hindi" },
      icon: "fa-book-open",
      color: "from-rose-600 to-pink-600",
      accent: "#e11d48",
      books: [
        {
          id: "hin_b1",
          name: { hi: "गोधूलि (भाग 2) - गद्य एवं काव्य खंड", en: "Godhuli (Part 2)" },
          chapters: [
            { id: "hin_c1", code: "CH01", title: { hi: "श्रम विभाजन और जाति प्रथा — भीमराव अंबेडकर", en: "Shram Vibhajan aur Jati Pratha" }, topics: [{ id: "hin_c1_t1", title: { hi: "पाठ सार, विचार एवं लेखक परिचय", en: "Summary & Author Intro" } }] },
            { id: "hin_c2", code: "CH02", title: { hi: "विष के दाँत — नलिन विलोचन शर्मा", en: "Vish Ke Dant" }, topics: [{ id: "hin_c2_t1", title: { hi: "कासू, मदन एवं सेन साहब चरित्र चित्रण", en: "Character Analysis & Story" } }] },
            { id: "hin_c3", code: "CH03", title: { hi: "भारत से हम क्या सीखें — मैक्समूलर", en: "Bharat Se Hum Kya Sikhen" }, topics: [{ id: "hin_c3_t1", title: { hi: "भाषण का मूल भाव एवं भारतीय संस्कृति", en: "Speech Essence" } }] },
            { id: "hin_c4", code: "CH04", title: { hi: "नाखून क्यों बढ़ते हैं — हजारी प्रसाद द्विवेदी", en: "Nakhun Kyon Barhte Hain" }, topics: [{ id: "hin_c4_t1", title: { hi: "ललित निबंध का मर्म व मनुष्यता", en: "Essay Analysis" } }] },
            { id: "hin_c5", code: "CH05", title: { hi: "नागरी लिपि — गुणाकर मुले", en: "Nagari Lipi" }, topics: [{ id: "hin_c5_t1", title: { hi: "देवनागरी लिपि का इतिहास व विकास", en: "Script Origin & History" } }] },
            { id: "hin_c6", code: "CH06", title: { hi: "बहादुर — अमरकांत", en: "Bahadur" }, topics: [{ id: "hin_c6_t1", title: { hi: "बहादुर की कहानी एवं मध्यमवर्गीय सोच", en: "Story & Social Analysis" } }] },
            { id: "hin_c7", code: "CH07", title: { hi: "परंपरा का मूल्यांकन — रामविलास शर्मा", en: "Parampara Ka Mulyankan" }, topics: [{ id: "hin_c7_t1", title: { hi: "साहित्यिक परंपरा एवं संस्कृति", en: "Literary Tradition" } }] },
            { id: "hin_c8", code: "CH08", title: { hi: "जित-जित मैं निरखत हूँ — पंडित बिरजू महाराज", en: "Jit-Jit Main Nirkhat Hun" }, topics: [{ id: "hin_c8_t1", title: { hi: "कत्थक नृत्य एवं साक्षात्कार", en: "Birju Maharaj Interview" } }] },
            { id: "hin_c9", code: "CH09", title: { hi: "आविन्यों — अशोक वाजपेयी", en: "Avignon" }, topics: [{ id: "hin_c9_t1", title: { hi: "दक्षिण फ्रांस का कला केंद्र", en: "French Art Center Visit" } }] },
            { id: "hin_c10", code: "CH10", title: { hi: "मछली — विनोद कुमार शुक्ल", en: "Machhli" }, topics: [{ id: "hin_c10_t1", title: { hi: "संतू, भग्गू और मछली की कहानी", en: "Story Analysis" } }] },
            { id: "hin_c11", code: "CH11", title: { hi: "नौबतखाने में इबादत — यतीन्द्र मिश्र", en: "Naubatkhane Mein Ibadat" }, topics: [{ id: "hin_c11_t1", title: { hi: "उस्ताद बिस्मिल्ला खाँ का जीवन व शहनाई", en: "Bismillah Khan Biography" } }] },
            { id: "hin_c12", code: "CH12", title: { hi: "शिक्षा और संस्कृति — महात्मा गांधी", en: "Shiksha Aur Sanskriti" }, topics: [{ id: "hin_c12_t1", title: { hi: "गांधीजी के शैक्षणिक विचार", en: "Gandhi's Educational Views" } }] },
            { id: "hin_c13", code: "CH13", title: { hi: "राम बिनु बिरथे जगि जनमा — गुरु नानक", en: "Ram Binu Birthe Jagi Janma" }, topics: [{ id: "hin_c13_t1", title: { hi: "निर्गुण भक्ति एवं गुरु नानक पद", en: "Poem Meaning & Bhakti" } }] },
            { id: "hin_c14", code: "CH14", title: { hi: "प्रेम अयनि श्री राधिका — रसखान", en: "Prem Ayani Shri Radhika" }, topics: [{ id: "hin_c14_t1", title: { hi: "रसखान के सवैये व राधा-कृष्ण भक्ति", en: "Radha Krishna Devotional Verses" } }] },
            { id: "hin_c15", code: "CH15", title: { hi: "अति सूधो सनेह को मारग है — घनानंद", en: "Ati Sudho Saneh Ko Marag Hai" }, topics: [{ id: "hin_c15_t1", title: { hi: "रीतिकाल एवं घनानंद का प्रेम मार्ग", en: "Love & Poetry Analysis" } }] },
            { id: "hin_c16", code: "CH16", title: { hi: "स्वदेशी — प्रेमघन", en: "Swadeshi" }, topics: [{ id: "hin_c16_t1", title: { hi: "स्वदेशी चेतना एवं देशप्रेम", en: "Patriotic Poetry" } }] },
            { id: "hin_c17", code: "CH17", title: { hi: "भारतमाता — सुमित्रानंदन पंत", en: "Bharatmata" }, topics: [{ id: "hin_c17_t1", title: { hi: "ग्रामवासिनी भारतमाता का वर्णन", en: "Bharatmata Poem Analysis" } }] },
            { id: "hin_c18", code: "CH18", title: { hi: "जनतंत्र का जन्म — रामधारी सिंह दिनकर", en: "Jantantra Ka Janm" }, topics: [{ id: "hin_c18_t1", title: { hi: "सिंहासन खाली करो कि जनता आती है", en: "Democratic Revolution Poem" } }] },
            { id: "hin_c19", code: "CH19", title: { hi: "हिरोशिमा — अज्ञेय", en: "Hiroshima" }, topics: [{ id: "hin_c19_t1", title: { hi: "परमाणु त्रासदी एवं मानवीय वेदना", en: "Hiroshima Tragedy Poem" } }] },
            { id: "hin_c20", code: "CH20", title: { hi: "एक वृक्ष की हत्या — कुँवर नारायण", en: "Ek Vriksh Ki Hatya" }, topics: [{ id: "hin_c20_t1", title: { hi: "पर्यावरण संरक्षण एवं वृक्ष मित्र", en: "Environmental Protection Poem" } }] },
            { id: "hin_c21", code: "CH21", title: { hi: "हमारी नींद — वीरेन डंगवाल", en: "Hamari Nind" }, topics: [{ id: "hin_c21_t1", title: { hi: "जीवन संघर्ष एवं नींद कविता", en: "Life Struggle Verse" } }] },
            { id: "hin_c22", code: "CH22", title: { hi: "अक्षर-ज्ञान — अनामिका", en: "Akshar-Gyan" }, topics: [{ id: "hin_c22_t1", title: { hi: "बाल मनोविज्ञान व क, ख, ग, घ शिक्षा", en: "Child Psychology & Learning" } }] },
            { id: "hin_c23", code: "CH23", title: { hi: "लौटकर आऊँगा फिर — जीवनानंद दास", en: "Lautkar Aunga Phir" }, topics: [{ id: "hin_c23_t1", title: { hi: "बंगाल की प्रकृति एवं प्रेम", en: "Nature & Homeland Love" } }] },
            { id: "hin_c24", code: "CH24", title: { hi: "मेरे बिना तुम प्रभु — रेनर मारिया रिल्के", en: "Mere Bina Tum Prabhu" }, topics: [{ id: "hin_c24_t1", title: { hi: "भक्त और भगवान का संबंध", en: "Devotee & God Connection" } }] }
          ]
        },
        {
          id: "hin_b2",
          name: { hi: "वर्णिका (भाग 2) - पूरक पुस्तक", en: "Varnika (Part 2)" },
          chapters: [
            { id: "var_c1", code: "CH01", title: { hi: "दही वाली मंगम्मा — श्रीनिवास", en: "Dahi Wali Magamma" }, topics: [{ id: "var_c1_t1", title: { hi: "मंगम्मा, नजम्मा एवं सास-बहू विवाद", en: "Magamma Story" } }] },
            { id: "var_c2", code: "CH02", title: { hi: "ढहते विश्वास — सातकोड़ी होता", en: "Dhahte Vishwas" }, topics: [{ id: "var_c2_t1", title: { hi: "लक्ष्मी की कहानी एवं बाढ़ की त्रासदी", en: "Flood Crisis Story" } }] },
            { id: "var_c3", code: "CH03", title: { hi: "माँ — ईश्वर पेटलीकर", en: "Maa" }, topics: [{ id: "var_c3_t1", title: { hi: "मंगु और उसकी मां का निश्चल प्रेम", en: "Mangu Mother Love" } }] },
            { id: "var_c4", code: "CH04", title: { hi: "नगर — सुजाता", en: "Nagar" }, topics: [{ id: "var_c4_t1", title: { hi: "पाप्पाति एवं मदुरै अस्पताल की व्यवस्था", en: "Pappati Hospital Story" } }] },
            { id: "var_c5", code: "CH05", title: { hi: "धरती कब तक घूमेगी — साँवर दइया", en: "Dharti Kab Tak Ghumegi" }, topics: [{ id: "var_c5_t1", title: { hi: "सीता और उसके बेटों की कहानी", en: "Sita & Sons Family Dilemma" } }] }
          ]
        }
      ]
    },
    {
      id: "english",
      code: "ENG",
      name: { hi: "अंग्रेज़ी", en: "English" },
      icon: "fa-language",
      color: "from-purple-600 to-indigo-600",
      accent: "#8b5cf6",
      books: [
        {
          id: "eng_b1",
          name: { hi: "पैनोरामा (भाग 2)", en: "Panorama (Part 2)" },
          chapters: [
            { id: "eng_c1", code: "CH01", title: { hi: "The Pace for Living — R.C. Hutchinson", en: "The Pace for Living — R.C. Hutchinson" }, topics: [{ id: "eng_c1_t1", title: { hi: "Fast Life & Elderly Corn Merchant", en: "Fast Life & Elderly Corn Merchant" } }] },
            { id: "eng_c2", code: "CH02", title: { hi: "Me and the Ecology Bit — Joan Lexau", en: "Me and the Ecology Bit — Joan Lexau" }, topics: [{ id: "eng_c2_t1", title: { hi: "Environment Awareness & Jim's Route", en: "Environment Awareness & Jim's Route" } }] },
            { id: "eng_c3", code: "CH03", title: { hi: "Gillu — Mahadevi Verma", en: "Gillu — Mahadevi Verma" }, topics: [{ id: "eng_c3_t1", title: { hi: "Squirrel Gillu & Author's Bond", en: "Squirrel Gillu & Author's Bond" } }] },
            { id: "eng_c4", code: "CH04", title: { hi: "What is Wrong with Indian Films — Satyajit Ray", en: "What is Wrong with Indian Films — Satyajit Ray" }, topics: [{ id: "eng_c4_t1", title: { hi: "Indian Cinema Analysis & Quality", en: "Indian Cinema Analysis & Quality" } }] },
            { id: "eng_c5", code: "CH05", title: { hi: "Acceptance Speech — Aung San Suu Kyi", en: "Acceptance Speech — Aung San Suu Kyi" }, topics: [{ id: "eng_c5_t1", title: { hi: "Nobel Peace Prize & Democracy", en: "Nobel Peace Prize & Democracy" } }] },
            { id: "eng_c6", code: "CH06", title: { hi: "Once Upon a Time — Toni Morrison", en: "Once Upon a Time — Toni Morrison" }, topics: [{ id: "eng_c6_t1", title: { hi: "Old Wise Blind Woman & Language", en: "Old Wise Blind Woman & Language" } }] },
            { id: "eng_c7", code: "CH07", title: { hi: "The Unity of Indian Culture — Humayun Kabir", en: "The Unity of Indian Culture — Humayun Kabir" }, topics: [{ id: "eng_c7_t1", title: { hi: "Indian Civilization & Tolerant Spirit", en: "Indian Civilization & Tolerant Spirit" } }] },
            { id: "eng_c8", code: "CH08", title: { hi: "Little Girls Wiser Than Men — Leo Tolstoy", en: "Little Girls Wiser Than Men — Leo Tolstoy" }, topics: [{ id: "eng_c8_t1", title: { hi: "Akoulya and Malasha Story", en: "Akoulya and Malasha Story" } }] },
            { id: "eng_p1", code: "PO01", title: { hi: "God Made the Country — William Cowper", en: "God Made the Country — William Cowper" }, topics: [{ id: "eng_p1_t1", title: { hi: "Village vs Town Life", en: "Village vs Town Life" } }] },
            { id: "eng_p2", code: "PO02", title: { hi: "Ode on Solitude — Alexander Pope", en: "Ode on Solitude — Alexander Pope" }, topics: [{ id: "eng_p2_t1", title: { hi: "Happy Man & Peaceful Life", en: "Happy Man & Peaceful Life" } }] },
            { id: "eng_p3", code: "PO03", title: { hi: "Polythene Bag — Durga Prasad Panda", en: "Polythene Bag — Durga Prasad Panda" }, topics: [{ id: "eng_p3_t1", title: { hi: "Environmental Hazard & Pain Symbol", en: "Environmental Hazard & Pain Symbol" } }] },
            { id: "eng_p4", code: "PO04", title: { hi: "Thinner Than a Crescent — Vidyapati", en: "Thinner Than a Crescent — Vidyapati" }, topics: [{ id: "eng_p4_t1", title: { hi: "Radha's Grief for Lord Krishna", en: "Radha's Grief for Lord Krishna" } }] },
            { id: "eng_p5", code: "PO05", title: { hi: "The Empty Heart — Periasamy Thooran", en: "The Empty Heart — Periasamy Thooran" }, topics: [{ id: "eng_p5_t1", title: { hi: "Greed & Seven Gold Pitchers", en: "Greed & Seven Gold Pitchers" } }] },
            { id: "eng_p6", code: "PO06", title: { hi: "Koel — Puran Singh", en: "Koel — Puran Singh" }, topics: [{ id: "eng_p6_t1", title: { hi: "Black Bird Cuckoo & Love Fire", en: "Black Bird Cuckoo & Love Fire" } }] },
            { id: "eng_p7", code: "PO07", title: { hi: "The Sleeping Porter — Laxmi Prasad Devkota", en: "The Sleeping Porter — Laxmi Prasad Devkota" }, topics: [{ id: "eng_p7_t1", title: { hi: "Himalayan Porter Hardship", en: "Himalayan Porter Hardship" } }] },
            { id: "eng_p8", code: "PO08", title: { hi: "Martha — Walter de la Mare", en: "Martha — Walter de la Mare" }, topics: [{ id: "eng_p8_t1", title: { hi: "Storyteller Martha & Fairyland", en: "Storyteller Martha & Fairyland" } }] }
          ]
        },
        {
          id: "eng_b2",
          name: { hi: "पैनोरामा रीडर (पूरक)", en: "Panorama Reader (Supplementary)" },
          chapters: [
            { id: "eng_s1", code: "CH01", title: { hi: "January Night — Premchand", en: "January Night — Premchand" }, topics: [{ id: "eng_s1_t1", title: { hi: "Halku, Munni & Dog Jabra", en: "Halku, Munni & Dog Jabra" } }] },
            { id: "eng_s2", code: "CH02", title: { hi: "Allergy — Dr. Rana S.P. Singh", en: "Allergy — Dr. Rana S.P. Singh" }, topics: [{ id: "eng_s2_t1", title: { hi: "Medical Condition & Allergy Awareness", en: "Medical Condition & Allergy Awareness" } }] },
            { id: "eng_s3", code: "CH03", title: { hi: "The Bet — Anton Chekhov", en: "The Bet — Anton Chekhov" }, topics: [{ id: "eng_s3_t1", title: { hi: "Banker & Young Lawyer 15-Year Bet", en: "Banker & Young Lawyer 15-Year Bet" } }] },
            { id: "eng_s4", code: "CH04", title: { hi: "Quality — John Galsworthy", en: "Quality — John Galsworthy" }, topics: [{ id: "eng_s4_t1", title: { hi: "Mr. Gessler Shoemaker Dedication", en: "Mr. Gessler Shoemaker Dedication" } }] },
            { id: "eng_s5", code: "CH05", title: { hi: "Sun and Moon — Katherine Mansfield", en: "Sun and Moon — Katherine Mansfield" }, topics: [{ id: "eng_s5_t1", title: { hi: "Children Perspective at Party", en: "Children Perspective at Party" } }] },
            { id: "eng_s6", code: "CH06", title: { hi: "Two Horizons — Binapani Mohanty", en: "Two Horizons — Binapani Mohanty" }, topics: [{ id: "eng_s6_t1", title: { hi: "Mother and Daughter Letter Exchange", en: "Mother and Daughter Letter Exchange" } }] },
            { id: "eng_s7", code: "CH07", title: { hi: "Love Defiled — Giridhar Jha", en: "Love Defiled — Giridhar Jha" }, topics: [{ id: "eng_s7_t1", title: { hi: "Narrator & Girlfriend Reluctance", en: "Narrator & Girlfriend Reluctance" } }] }
          ]
        }
      ]
    },
    {
      id: "sanskrit",
      code: "SAN",
      name: { hi: "संस्कृत", en: "Sanskrit" },
      icon: "fa-scroll",
      color: "from-cyan-600 to-blue-600",
      accent: "#06b6d4",
      books: [
        {
          id: "san_b1",
          name: { hi: "पीयूषम् (भाग 2)", en: "Piyusham (Part 2)" },
          chapters: [
            { id: "san_c1", code: "CH01", title: { hi: "मङ्गलम् (Mangalam)", en: "Mangalam" }, topics: [{ id: "san_c1_t1", title: { hi: "उपनिषद् श्लोक एवं सत्य-धर्म विचार", en: "Upanishad Verses & Truth" } }] },
            { id: "san_c2", code: "CH02", title: { hi: "पाटलिपुत्रवैभवम् (Glory of Patliputra)", en: "Glory of Patliputra" }, topics: [{ id: "san_c2_t1", title: { hi: "पटना का ऐतिहासिक वैभव व मेगास्थनीज", en: "History of Patna & Foreign Travelers" } }] },
            { id: "san_c3", code: "CH03", title: { hi: "अलसकथा (The Story of Lazy Men)", en: "The Story of Lazy Men" }, topics: [{ id: "san_c3_t1", title: { hi: "मंत्री बीरेश्वर एवं आलसियों की परीक्षा", en: "Minister Bireswar & Four Lazy Men" } }] },
            { id: "san_c4", code: "CH04", title: { hi: "संस्कृतसाहित्ये लेखिकाः (Women Writers in Sanskrit)", en: "Women Writers in Sanskrit Literature" }, topics: [{ id: "san_c4_t1", title: { hi: "याज्ञवल्क्य पत्नी मैत्रेयी, गार्गी व विजयाङ्का", en: "Sanskrit Female Scholars" } }] },
            { id: "san_c5", code: "CH05", title: { hi: "भारतमहिमा (The Glory of India)", en: "The Glory of India" }, topics: [{ id: "san_c5_t1", title: { hi: "विष्णुपुराण एवं भागवतपुराण श्लोक", en: "Puranic Verses Praising India" } }] },
            { id: "san_c6", code: "CH06", title: { hi: "भारतीयसंस्काराः (Indian Sacraments / Rituals)", en: "Indian Sacraments / Rituals" }, topics: [{ id: "san_c6_t1", title: { hi: "16 संस्कार (जन्मपूर्व, शैशव, शैक्षणिक, विवाह, अंत्येष्टि)", en: "16 Sanskaras in Life" } }] },
            { id: "san_c7", code: "CH07", title: { hi: "नीतिश्लोकाः (Moral Verses)", en: "Moral Verses" }, topics: [{ id: "san_c7_t1", title: { hi: "विदुर नीति एवं पंडित लक्षण", en: "Vidura Niti & Wisdom Verses" } }] },
            { id: "san_c8", code: "CH08", title: { hi: "कर्मवीर कथा (The Story of a Karmaveer)", en: "The Story of a Karmaveer" }, topics: [{ id: "san_c8_t1", title: { hi: "रामप्रवेश राम का संघर्ष व सफलता", en: "Rampravesh Ram Success Story" } }] },
            { id: "san_c9", code: "CH09", title: { hi: "स्वामी दयानन्दः (Swami Dayanand)", en: "Swami Dayanand" }, topics: [{ id: "san_c9_t1", title: { hi: "आर्य समाज स्थापना व समाज सुधार", en: "Arya Samaj & Social Reforms" } }] },
            { id: "san_c10", code: "CH10", title: { hi: "मन्दाकिनीवर्णनम् (Description of Mandakini River)", en: "Description of Mandakini River" }, topics: [{ id: "san_c10_t1", title: { hi: "वाल्मीकि रामायण - श्रीराम द्वारा सीता को वर्णन", en: "Ramayana Mandakini River Description" } }] },
            { id: "san_c11", code: "CH11", title: { hi: "व्याघ्रपथिककथा (Story of Tiger & Traveler)", en: "Story of Tiger & Traveler" }, topics: [{ id: "san_c11_t1", title: { hi: "हितोपदेश - लोभ के दुष्परिणाम", en: "Hitopadesha Greed Caution Story" } }] },
            { id: "san_c12", code: "CH12", title: { hi: "कर्णस्य दानवीरता (Generosity of Karna)", en: "Generosity of Karna" }, topics: [{ id: "san_c12_t1", title: { hi: "भासरचित - दानवीर कर्ण एवं इन्द्र कवच-कुण्डल दान", en: "Karna Armor Donation to Indra" } }] },
            { id: "san_c13", code: "CH13", title: { hi: "विश्वशान्तिः (World Peace)", en: "World Peace" }, topics: [{ id: "san_c13_t1", title: { hi: "अशांति के कारण (द्वेष, असहिष्णुता) व समाधान", en: "Causes of Global Discord & Harmony" } }] },
            { id: "san_c14", code: "CH14", title: { hi: "शास्त्रकाराः (The Authors of Scriptures)", en: "The Authors of Scriptures" }, topics: [{ id: "san_c14_t1", title: { hi: "वेदांग, व्याकरण (पाणिनि), न्याय (गौतम), सांख्य (कपिल)", en: "Ancient Indian Scriptures & Authors" } }] }
          ]
        }
      ]
    }
  ]
};
