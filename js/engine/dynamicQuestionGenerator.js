/**
 * Dynamic Algorithmic Question Generator Engine
 * Capable of generating thousands of parameterized, mathematically rigorous,
 * and syllabus-verified MCQs on-the-fly for Class 10 Bihar Board.
 */

window.DynamicQuestionGenerator = {

  /**
   * Generates a batch of dynamic verified questions for a specific chapter/topic
   */
  generateBatch: function (chapterId, count = 100) {
    const generated = [];
    const genFunc = this.generators[chapterId];
    if (!genFunc) return [];

    for (let i = 0; i < count; i++) {
      const q = genFunc(i);
      if (q) generated.push(q);
    }
    return generated;
  },

  generators: {
    // MATHS CH01: Real Numbers (HCF, LCM, Euclid, Rational/Irrational)
    "math_c1": function (index) {
      const a = (index + 2) * 3 + 7;
      const b = (index + 1) * 2 + 5;
      
      const gcd = (x, y) => (!y ? x : gcd(y, x % y));
      const h = gcd(a, b);
      const l = (a * b) / h;
      
      const type = index % 3;
      if (type === 0) {
        // HCF calculation
        const correct = String(h);
        const distractors = [String(h + 1), String(Math.max(1, h - 1)), String(h * 2)];
        return window.DynamicQuestionGenerator._buildQuestion(
          `dyn_math_c1_hcf_${index}`, "maths", "maths_b1", "math_c1", "math_c1_t1", "Medium",
          `यूक्लिड विभाजन एल्गोरिदम का प्रयोग करके ${a} और ${b} का महत्तम समापवर्तक (HCF) क्या होगा?`,
          `Using Euclid's Division Algorithm, what is the HCF of ${a} and ${b}?`,
          correct, distractors,
          `यूक्लिड प्रमेय a = bq + r का प्रयोग करने पर ${a} और ${b} का म.स. (HCF) = ${h} प्राप्त होता है।`,
          `Applying Euclid's Lemma gives HCF(${a}, ${b}) = ${h}.`
        );
      } else if (type === 1) {
        // LCM given HCF & product
        const prod = a * b;
        const correct = String(l);
        const distractors = [String(l + 10), String(Math.max(1, l - 10)), String(l * 2)];
        return window.DynamicQuestionGenerator._buildQuestion(
          `dyn_math_c1_lcm_${index}`, "maths", "maths_b1", "math_c1", "math_c1_t2", "Medium",
          `यदि दो संख्याओं का गुणनफल ${prod} और उनका म.स. (HCF) ${h} है, तो उनका ल.स. (LCM) क्या होगा?`,
          `If product of two numbers is ${prod} and their HCF is ${h}, find their LCM:`,
          correct, distractors,
          `LCM = (दोनों संख्याओं का गुणनफल) / HCF = ${prod} / ${h} = ${l}.`,
          `LCM = Product / HCF = ${prod} / ${h} = ${l}.`
        );
      } else {
        // Decimal expansion
        const denomPowers = [2, 4, 8, 16, 5, 25, 125, 10, 20, 50, 100];
        const denom = denomPowers[index % denomPowers.length];
        const num = (index * 3) + 7;
        const correct = "सांत (Terminating)";
        const distractors = ["असांत आवर्ती (Non-terminating)", "असांत अनावर्ती", "अपरिमेय संख्या"];
        return window.DynamicQuestionGenerator._buildQuestion(
          `dyn_math_c1_dec_${index}`, "maths", "maths_b1", "math_c1", "math_c1_t4", "Easy",
          `परिमेय संख्या ${num}/${denom} का दशमलव प्रसार कैसा होगा?`,
          `What is the nature of the decimal expansion of rational number ${num}/${denom}?`,
          correct, distractors,
          `क्योंकि हर ${denom} के अभाज्य गुणनखंड 2ᵐ × 5ⁿ रूप के हैं, अतः दशमलव प्रसार सांत होगा।`,
          `Since denominator ${denom} = 2ᵐ × 5ⁿ, the decimal expansion is terminating.`
        );
      }
    },

    // MATHS CH02: Polynomials (Zeros, α+β, αβ)
    "math_c2": function (index) {
      const a = (index % 4) + 1;
      const r1 = (index % 5) + 1;
      const r2 = ((index + 2) % 5) + 1;
      
      const sum = r1 + r2;
      const prod = r1 * r2;
      
      const b_coeff = -(a * sum);
      const c_coeff = a * prod;
      
      const signB = b_coeff >= 0 ? `+ ${b_coeff}` : `- ${Math.abs(b_coeff)}`;
      const signC = c_coeff >= 0 ? `+ ${c_coeff}` : `- ${Math.abs(c_coeff)}`;
      const polyStr = a === 1 ? `x² ${signB}x ${signC}` : `${a}x² ${signB}x ${signC}`;
      
      const type = index % 2;
      if (type === 0) {
        // Sum of zeros
        const correct = String(sum);
        const distractors = [String(-sum), String(prod), String(-prod)];
        return window.DynamicQuestionGenerator._buildQuestion(
          `dyn_math_c2_sum_${index}`, "maths", "maths_b1", "math_c2", "math_c2_t2", "Easy",
          `द्विघात बहुपद ${polyStr} के शून्यांकों का योग (α + β) क्या होगा?`,
          `What is the sum of zeros (α + β) of the quadratic polynomial ${polyStr}?`,
          correct, distractors,
          `शून्यांकों का योग α + β = -b/a = -(${b_coeff})/${a} = ${sum}.`,
          `Sum of zeros α + β = -b/a = ${sum}.`
        );
      } else {
        // Product of zeros
        const correct = String(prod);
        const distractors = [String(-prod), String(sum), String(-sum)];
        return window.DynamicQuestionGenerator._buildQuestion(
          `dyn_math_c2_prod_${index}`, "maths", "maths_b1", "math_c2", "math_c2_t2", "Easy",
          `द्विघात बहुपद ${polyStr} के शून्यांकों का गुणनफल (αβ) क्या होगा?`,
          `What is the product of zeros (αβ) of the quadratic polynomial ${polyStr}?`,
          correct, distractors,
          `शून्यांकों का गुणनफल αβ = c/a = ${c_coeff}/${a} = ${prod}.`,
          `Product of zeros αβ = c/a = ${prod}.`
        );
      }
    },

    // MATHS CH04: Quadratic Equations (Discriminant D)
    "math_c4": function (index) {
      const a = (index % 3) + 1;
      const b = (index % 6) + 2;
      const c = (index % 4) + 1;
      const D = (b * b) - (4 * a * c);
      
      const correct = String(D);
      const distractors = [String(D + 4), String(D - 4), String(-D)];
      return window.DynamicQuestionGenerator._buildQuestion(
        `dyn_math_c4_disc_${index}`, "maths", "maths_b1", "math_c4", "math_c4_t3", "Medium",
        `द्विघात समीकरण ${a}x² + ${b}x + ${c} = 0 का विविक्तकर (D) क्या होगा?`,
        `Find the discriminant (D) of the quadratic equation ${a}x² + ${b}x + ${c} = 0:`,
        correct, distractors,
        `विविक्तकर D = b² - 4ac = (${b})² - 4(${a})(${c}) = ${b*b} - ${4*a*c} = ${D}.`,
        `Discriminant D = b² - 4ac = ${b*b} - ${4*a*c} = ${D}.`
      );
    },

    // MATHS CH05: AP (nth term & Sum)
    "math_c5": function (index) {
      const a = (index % 5) + 1;
      const d = (index % 4) + 2;
      const n = (index % 10) + 6;
      const an = a + (n - 1) * d;
      
      const apStr = `${a}, ${a + d}, ${a + 2*d}, ${a + 3*d}, ...`;
      const correct = String(an);
      const distractors = [String(an + d), String(an - d), String(an + 2*d)];
      return window.DynamicQuestionGenerator._buildQuestion(
        `dyn_math_c5_nth_${index}`, "maths", "maths_b1", "math_c5", "math_c5_t2", "Medium",
        `समांतर श्रेढ़ी ${apStr} का ${n}वाँ पद क्या होगा?`,
        `What is the ${n}th term of the AP ${apStr}?`,
        correct, distractors,
        `aₙ = a + (n - 1)d = ${a} + (${n} - 1) × ${d} = ${a} + ${(n-1)*d} = ${an}.`,
        `aₙ = a + (n - 1)d = ${a} + ${(n-1)*d} = ${an}.`
      );
    },

    // MATHS CH07: Coordinate Geometry (Distance formula)
    "math_c7": function (index) {
      const x1 = (index % 5);
      const y1 = (index % 4);
      const dx = ((index + 1) % 4) + 3; // e.g. 3 or 4
      const dy = ((index + 2) % 4) + 3;
      
      const x2 = x1 + dx;
      const y2 = y1 + dy;
      const distSq = (dx * dx) + (dy * dy);
      const isPerfect = Math.sqrt(distSq) % 1 === 0;
      const distStr = isPerfect ? String(Math.sqrt(distSq)) : `√${distSq}`;
      
      const correct = distStr + " मात्रक";
      const distractors = [`${distSq} मात्रक`, `√${distSq + 5} मात्रक`, `√${Math.max(1, distSq - 4)} मात्रक`];
      return window.DynamicQuestionGenerator._buildQuestion(
        `dyn_math_c7_dist_${index}`, "maths", "maths_b1", "math_c7", "math_c7_t1", "Medium",
        `बिंदुओं A(${x1}, ${y1}) और B(${x2}, ${y2}) के बीच की दूरी क्या होगी?`,
        `What is the distance between points A(${x1}, ${y1}) and B(${x2}, ${y2})?`,
        correct, distractors,
        `दूरी सूत्र: d = √((x₂ - x₁)² + (y₂ - y₁)²) = √(${dx}² + ${dy}²) = √(${dx*dx} + ${dy*dy}) = ${distStr}.`,
        `Distance formula d = √((x₂ - x₁)² + (y₂ - y₁)²) = ${distStr}.`
      );
    },

    // SCIENCE CH12: Electricity (Ohm's Law & Resistance)
    "sci_c12": function (index) {
      const I = (index % 5) + 1; // Ampere
      const R = ((index + 2) % 6) + 2; // Ohm
      const V = I * R; // Volt
      
      const type = index % 2;
      if (type === 0) {
        const correct = `${V} V`;
        const distractors = [`${V + 4} V`, `${Math.max(1, V - 3)} V`, `${V * 2} V`];
        return window.DynamicQuestionGenerator._buildQuestion(
          `dyn_sci_c12_ohm_v_${index}`, "science", "sci_b1", "sci_c12", "sci_c12_t1", "Easy",
          `यदि किसी चालक तार का प्रतिरोध ${R} Ω है और उसमें ${I} A की धारा प्रवाहित हो रही है, तो उसके सिरों के बीच विभवांतर कितना होगा?`,
          `If a wire has resistance ${R} Ω and carries current ${I} A, what is the potential difference across its ends?`,
          correct, distractors,
          `ओम के नियम अनुसार V = I × R = ${I} A × ${R} Ω = ${V} V (वोल्ट)।`,
          `By Ohm's Law V = I × R = ${I} × ${R} = ${V} Volts.`
        );
      } else {
        const correct = `${R} Ω`;
        const distractors = [`${R + 2} Ω`, `${Math.max(1, R - 1)} Ω`, `${R * 2} Ω`];
        return window.DynamicQuestionGenerator._buildQuestion(
          `dyn_sci_c12_ohm_r_${index}`, "science", "sci_b1", "sci_c12", "sci_c12_t1", "Easy",
          `यदि किसी परिपथ में ${V} V विभवांतर पर ${I} A धारा प्रवाहित हो रही है, तो चालक का प्रतिरोध क्या होगा?`,
          `If a circuit operates at ${V} V with current ${I} A, what is the resistance?`,
          correct, distractors,
          `प्रतिरोध R = V / I = ${V} V / ${I} A = ${R} Ω (ओम)।`,
          `Resistance R = V / I = ${V} / ${I} = ${R} Ohms.`
        );
      }
    }
  },

  _buildQuestion: function (id, subId, bookId, chId, tId, diff, qHi, qEn, correctText, distractors, expHi, expEn) {
    const keys = ['A', 'B', 'C', 'D'];
    const pairs = [
      { text: correctText, isCorrect: true },
      { text: distractors[0], isCorrect: false },
      { text: distractors[1], isCorrect: false },
      { text: distractors[2], isCorrect: false }
    ];
    
    // Fisher Yates shuffle
    for (let i = pairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }
    
    const optsHi = {};
    const optsEn = {};
    let correctKey = 'A';
    
    pairs.forEach((p, idx) => {
      const k = keys[idx];
      optsHi[k] = p.text;
      optsEn[k] = p.text;
      if (p.isCorrect) correctKey = k;
    });
    
    return {
      id: id,
      board: "BSEB",
      class: "10",
      subject_id: subId,
      book_id: bookId,
      chapter_id: chId,
      topic_id: tId,
      difficulty: diff,
      question: { hi: qHi, en: qEn },
      options: { hi: optsHi, en: optsEn },
      correct_option: correctKey,
      explanation: { hi: expHi, en: expEn }
    };
  }
};
