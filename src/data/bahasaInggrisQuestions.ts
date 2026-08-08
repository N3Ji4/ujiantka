import { Question } from '../types';

export const bahasaInggrisQuestions: Question[] = [
  {
    id: 'eng-q1',
    number: 1,
    subjectId: 'bahasa-inggris',
    topicTag: 'Reading Comprehension',
    difficulty: 'Sedang',
    question: 'Read the excerpt:\n"Recent advances in quantum computing have triggered both excitement and skepticism. While enthusiasts highlight the unprecedented processing speed for cryptography, critics emphasize the high error rates and cryogenic cooling requirements."\n\nWhat is the primary topic of the passage?',
    options: [
      { id: 'A', text: 'The complete obsolescence of classical computer hardware' },
      { id: 'B', text: 'The dual perspectives on emerging quantum computing capabilities' },
      { id: 'C', text: 'The precise refrigeration methods used in modern data centers' },
      { id: 'D', text: 'The history of mathematical cryptography algorithms' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraf tersebut membahas dua sisi: kegembiraan para pendukung (unprecedented processing speed) dan skeptisisme dari para pengkritik (error rates & cooling requirements). Pilihan B secara akurat merangkum kedua perspektif tersebut.',
    keyConcept: 'Identifying the Main Topic & Duality of Perspectives',
    tkaExamTip: 'Carilah opsi yang merangkum keseluruhan sudut pandang, bukan yang hanya mewakili satu kubu saja.'
  },
  {
    id: 'eng-q2',
    number: 2,
    subjectId: 'bahasa-inggris',
    topicTag: 'Contextual Vocabulary',
    difficulty: 'Mudah',
    question: 'In the sentence: "To mitigate the devastating effects of the drought, the local agricultural agency distributed drought-resistant seeds to smallholder farmers," the word "mitigate" is closest in meaning to...',
    options: [
      { id: 'A', text: 'Exacerbate' },
      { id: 'B', text: 'Alleviate' },
      { id: 'C', text: 'Ignore' },
      { id: 'D', text: 'Accelerate' },
    ],
    correctAnswer: 'B',
    explanation: '"Mitigate" berarti mengurangi keparahan atau dampak buruk dari sesuatu (to lessen or make less severe). Sinonim yang tepat adalah "Alleviate" (meringankan). "Exacerbate" adalah antonimnya (memperparah).',
    keyConcept: 'Academic Vocabulary & Context Clues',
    tkaExamTip: 'Kata "mitigate" sangat sering muncul pada teks bertema lingkungan, mitigasi bencana, dan ekonomi.'
  },
  {
    id: 'eng-q3',
    number: 3,
    subjectId: 'bahasa-inggris',
    topicTag: 'Grammar in Context',
    difficulty: 'Tinggi',
    question: 'Choose the correct inverted sentence structure:\n"_____ so many technological breakthroughs in such a concise span of human history."',
    options: [
      { id: 'A', text: 'Never before we have witnessed' },
      { id: 'B', text: 'Never before have we witnessed' },
      { id: 'C', text: 'We have never before witnessed have' },
      { id: 'D', text: 'Before never did we witnessed' }
    ],
    correctAnswer: 'B',
    explanation: 'Ketika kalimat diawali dengan frasa adverbia negatif/pembatas seperti "Never before", terjadi pembalikan (inversion) antara auxiliary verb ("have") dan subjek ("we"): Negative Adverb + Auxiliary + Subject + Main Verb (have we witnessed).',
    keyConcept: 'Negative Inversion in Formal English',
    tkaExamTip: 'Susunan kalimat inversi menyerupai susunan kalimat tanya, namun diakhiri tanda titik.'
  },
  {
    id: 'eng-q4',
    number: 4,
    subjectId: 'bahasa-inggris',
    topicTag: 'Grammar in Context',
    difficulty: 'Sedang',
    question: 'Complete the sentence:\n"_____ the urgent memo yesterday, the logistics team would have redirected the cargo shipments immediately."',
    options: [
      { id: 'A', text: 'If they received' },
      { id: 'B', text: 'Had they received' },
      { id: 'C', text: 'Should they receive' },
      { id: 'D', text: 'Were they receiving' }
    ],
    correctAnswer: 'B',
    explanation: 'Klausa hasil menggunakan "would have redirected" (Conditional Type 3 - situasi lampau yang tidak terjadi). Bentuk inversi tanpa "if" untuk Type 3 adalah: "Had + Subject + V3" (Had they received), yang ekuivalen dengan "If they had received".',
    keyConcept: 'Inverted Third Conditional (Past Unreal)',
    tkaExamTip: 'Gunakan "Had + S + V3" untuk menyatakan pengandaian masa lampau tanpa kata "if".'
  },
  {
    id: 'eng-q5',
    number: 5,
    subjectId: 'bahasa-inggris',
    topicTag: 'Text Organization',
    difficulty: 'Sedang',
    question: 'Select the most appropriate transition word:\n"Urban vertical farming maximizes limited metropolitan real estate; _____, high energy costs for artificial illumination remain a significant obstacle to long-term profitability."',
    options: [
      { id: 'A', text: 'Furthermore' },
      { id: 'B', text: 'Consequently' },
      { id: 'C', text: 'Nevertheless' },
      { id: 'D', text: 'Likewise' }
    ],
    correctAnswer: 'C',
    explanation: 'Kalimat pertama menyampaikan keuntungan (memaksimalkan lahan sempit), sedangkan kalimat kedua menyampaikan tantangan finansial (biaya energi tinggi untuk lampu buatan). Hubungan ini adalah kontras konsesi, sehingga "Nevertheless" (namun demikian) adalah transisi yang paling tepat.',
    keyConcept: 'Concessive & Contrast Transition Signals',
    tkaExamTip: '"Furthermore" menambah argumen sejalan, sedangkan "Nevertheless" memperkenalkan tantangan/kontras.'
  },
  {
    id: 'eng-q6',
    number: 6,
    subjectId: 'bahasa-inggris',
    topicTag: 'Inference & Author\'s Tone',
    difficulty: 'Sedang',
    question: 'Read the short excerpt:\n"Although proponents argue that deep-sea mining will secure vital battery minerals, the irreversible destruction of hydrothermal ecosystems suggests that rushing into commercial extraction is reckless and shortsighted."\n\nThe author\'s attitude toward deep-sea mining can best be described as...',
    options: [
      { id: 'A', text: 'Enthusiastic and celebratory' },
      { id: 'B', text: 'Critical and cautionary' },
      { id: 'C', text: 'Completely indifferent' },
      { id: 'D', text: 'Unconditionally supportive' }
    ],
    correctAnswer: 'B',
    explanation: 'Penggunaan kata-kata bermuatan evaluatif seperti "irreversible destruction", "reckless" (ceroboh), dan "shortsighted" (berpandangan sempit) dengan jelas menunjukkan nada kritis dan memberi peringatan (critical and cautionary).',
    keyConcept: 'Determining Author\'s Tone through Diction',
    tkaExamTip: 'Perhatikan kata sifat bermuatan nilai (evaluative adjectives) untuk mendeteksi sikap penulis.'
  },
  {
    id: 'eng-q7',
    number: 7,
    subjectId: 'bahasa-inggris',
    topicTag: 'Grammar in Context',
    difficulty: 'Sedang',
    question: 'Identify the grammatically correct completion:\n"The advisory board recommended that the senior analyst _____ the economic forecasting model prior to the quarterly summit."',
    options: [
      { id: 'A', text: 'revises' },
      { id: 'B', text: 'revised' },
      { id: 'C', text: 'revise' },
      { id: 'D', text: 'will revise' }
    ],
    correctAnswer: 'C',
    explanation: 'Setelah kata kerja rekomendasi/permintaan seperti "recommended that", digunakan pola Subjunctive Mood dalam bahasa Inggris standar formal. Pola ini mensyaratkan kata kerja dasar (bare infinitive) "revise", bukan bentuk orang ketiga tunggal "revises" atau past tense "revised".',
    keyConcept: 'Subjunctive Mood with Mandative Verbs',
    tkaExamTip: 'Kata kerja suggest/recommend/insist/demand yang diikuti "that" selalu menggunakan bentuk kata kerja dasar (V1 tanpa -s).'
  },
  {
    id: 'eng-q8',
    number: 8,
    subjectId: 'bahasa-inggris',
    topicTag: 'Contextual Vocabulary',
    difficulty: 'Sedang',
    question: 'In academic writing, which of the following is the most natural collocation?',
    options: [
      { id: 'A', text: 'To perform an error' },
      { id: 'B', text: 'To commit a conclusion' },
      { id: 'C', text: 'To draw a conclusion' },
      { id: 'D', text: 'To produce an investigation' }
    ],
    correctAnswer: 'C',
    explanation: 'Dalam bahasa Inggris standar akademik, pasangan kata (collocation) yang tepat untuk menarik kesimpulan adalah "to draw a conclusion" atau "to reach a conclusion".',
    keyConcept: 'Academic Verb-Noun Collocations',
    tkaExamTip: 'Hafalkan pasangan umum: draw a conclusion, conduct research, pose a risk, raise awareness.'
  },
  {
    id: 'eng-q9',
    number: 9,
    subjectId: 'bahasa-inggris',
    topicTag: 'Reading Comprehension',
    difficulty: 'Sedang',
    question: 'Read the sentence:\n"The widespread integration of automated translation tools has facilitated cross-border e-commerce; however, nuanced colloquialisms still evade algorithmic accuracy."\n\nWhat can be inferred from the statement?',
    options: [
      { id: 'A', text: 'Automated translation is completely useless for business transactions.' },
      { id: 'B', text: 'Informal cultural idioms remain challenging for computer translation algorithms.' },
      { id: 'C', text: 'Cross-border commerce has declined due to software limitations.' },
      { id: 'D', text: 'Human translators are no longer employed in international trade.' }
    ],
    correctAnswer: 'B',
    explanation: '"Nuanced colloquialisms" merujuk pada ungkapan percakapan/idiom informal yang kaya nuansa budaya. Frasa "evade algorithmic accuracy" menunjukkan bahwa hal-hal tersebut masih sulit diterjemahkan secara akurat oleh algoritma otomatis.',
    keyConcept: 'Making Inferences from Academic Excerpts',
    tkaExamTip: 'Jangan memilih opsi ekstrem yang menggunakan kata "completely", "never", atau "always" jika teks aslinya lebih bernuansa.'
  },
  {
    id: 'eng-q10',
    number: 10,
    subjectId: 'bahasa-inggris',
    topicTag: 'Grammar in Context',
    difficulty: 'Sedang',
    question: 'Choose the correct participial phrase completion:\n"_____ by centuries of volcanic activity, the soil in the central valley boasts remarkable agricultural fertility."',
    options: [
      { id: 'A', text: 'Enriching' },
      { id: 'B', text: 'Enriched' },
      { id: 'C', text: 'Having enriched' },
      { id: 'D', text: 'To enrich' }
    ],
    correctAnswer: 'B',
    explanation: 'Tanah (the soil) menerima perlakuan pasif dari aktivitas vulkanik (tanah diperkaya oleh abu/mineral vulkanik). Oleh karena itu, digunakan klausa partisipial pasif bentuk Past Participle (V3): "Enriched by centuries of volcanic activity...".',
    keyConcept: 'Passive Participial Phrase Modifiers',
    tkaExamTip: 'Tentukan apakah subjek utama melakukan aksi (aktif: V-ing) atau menerima aksi (pasif: V3).'
  },
  {
    id: 'eng-q11',
    number: 11,
    subjectId: 'bahasa-inggris',
    topicTag: 'Error Identification',
    difficulty: 'Sedang',
    question: 'Identify the part of the sentence that contains an error:\n"(A) The number of renewable energy projects (B) have increased significantly (C) across developing nations (D) over the past decade."',
    options: [
      { id: 'A', text: '(A) The number of' },
      { id: 'B', text: '(B) have increased' },
      { id: 'C', text: '(C) across developing' },
      { id: 'D', text: '(D) over the past' }
    ],
    correctAnswer: 'B',
    explanation: 'Frasa "The number of..." merupakan subjek tunggal (singular subject) yang merujuk pada kuantitas total, sehingga harus menggunakan kata kerja tunggal "has increased", bukan "have increased". Berbeda dengan "A number of..." yang bermakna "sejumlah/banyak" dan menggunakan kata kerja jamak.',
    keyConcept: 'Subject-Verb Agreement: "The Number of" vs "A Number of"',
    tkaExamTip: 'The number of + plural noun = Singular Verb (has/is). A number of + plural noun = Plural Verb (have/are).'
  },
  {
    id: 'eng-q12',
    number: 12,
    subjectId: 'bahasa-inggris',
    topicTag: 'Contextual Vocabulary',
    difficulty: 'Sedang',
    question: 'The word "lucid" in "The professor provided a lucid explanation of complex thermodynamic principles" means...',
    options: [
      { id: 'A', text: 'Ambiguous and vague' },
      { id: 'B', text: 'Clear and easy to understand' },
      { id: 'C', text: 'Excessively lengthy' },
      { id: 'D', text: 'Unrelated to the syllabus' }
    ],
    correctAnswer: 'B',
    explanation: '"Lucid" berarti jelas, gamblang, dan mudah dipahami (expressed clearly; easy to understand).',
    keyConcept: 'Academic Adjective Precision',
    tkaExamTip: 'Kata kunci lawan kata: lucid ≠ ambiguous / obscure.'
  },
  {
    id: 'eng-q13',
    number: 13,
    subjectId: 'bahasa-inggris',
    topicTag: 'Text Organization',
    difficulty: 'Sedang',
    question: 'Which sentence would be the most effective concluding statement for a paragraph advocating for digital privacy education in secondary schools?',
    options: [
      { id: 'A', text: 'Furthermore, laptop batteries have improved substantially in recent years.' },
      { id: 'B', text: 'Equipping adolescents with data literacy is therefore not merely a technical skill, but a vital civic safeguard in the modern era.' },
      { id: 'C', text: 'Many teachers prefer paper textbooks because they do not require internet access.' },
      { id: 'D', text: 'Social media platforms were initially developed for university students in North America.' }
    ],
    correctAnswer: 'B',
    explanation: 'Pilihan B memberikan sintesis argumen yang kuat, mengikat konsep literasi data/privasi dengan perlindungan sipil yang esensial, serta menggunakan kata transisi konklusif "therefore". Opsi lainnya keluar dari fokus argumen.',
    keyConcept: 'Evaluating Effective Concluding Sentences',
    tkaExamTip: 'Kalimat kesimpulan harus menegaskan kembali tesis utama tanpa memperkenalkan topik baru yang menyimpang.'
  },
  {
    id: 'eng-q14',
    number: 14,
    subjectId: 'bahasa-inggris',
    topicTag: 'Grammar in Context',
    difficulty: 'Sedang',
    question: 'Fill in the blank:\n"Neither the chief executive officer nor the branch managers _____ satisfied with the preliminary audit results."',
    options: [
      { id: 'A', text: 'was' },
      { id: 'B', text: 'were' },
      { id: 'C', text: 'is' },
      { id: 'D', text: 'has been' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada susunan korelasi "Neither ... nor ...", kata kerja harus menyesuaikan dengan subjek yang posisinya paling dekat dengan kata kerja (Rule of Proximity). Di sini subjek terdekat adalah "the branch managers" (jamak), sehingga kata kerja yang tepat dalam konteks lampau adalah "were".',
    keyConcept: 'Correlative Conjunction Agreement (Rule of Proximity)',
    tkaExamTip: 'Pada Either...or dan Neither...nor, sesuaikan kata kerja dengan subjek setelah "nor/or".'
  },
  {
    id: 'eng-q15',
    number: 15,
    subjectId: 'bahasa-inggris',
    topicTag: 'Reading Comprehension',
    difficulty: 'Sedang',
    question: 'What is the purpose of the author in using the phrase "a double-edged sword" when describing social media algorithms?',
    options: [
      { id: 'A', text: 'To emphasize that the technology is exclusively dangerous and must be banned' },
      { id: 'B', text: 'To indicate that the technology provides valuable benefits while also carrying substantial drawbacks' },
      { id: 'C', text: 'To praise the hardware manufacturers for their sharpness and precision' },
      { id: 'D', text: 'To claim that users are completely powerless against online advertising' }
    ],
    correctAnswer: 'B',
    explanation: 'Idiom "a double-edged sword" (pedang bermata dua) digunakan secara luas dalam bahasa Inggris untuk menggambarkan situasi atau teknologi yang memiliki manfaat sekaligus risiko/kerugian dalam waktu bersamaan.',
    keyConcept: 'Idiomatic Expressions in Academic Contexts',
    tkaExamTip: 'Pedang bermata dua = dual nature (keuntungan sekaligus kerugian).'
  },
  {
    id: 'eng-q16',
    number: 16,
    subjectId: 'bahasa-inggris',
    topicTag: 'Contextual Vocabulary',
    difficulty: 'Tinggi',
    question: 'Choose the synonym of the underlined word:\n"The archaeological findings provided `compelling` evidence that sophisticated irrigation networks existed two millennia ago."',
    options: [
      { id: 'A', text: 'Flimsy' },
      { id: 'B', text: 'Persuasive' },
      { id: 'C', text: 'Questionable' },
      { id: 'D', text: 'Repetitive' }
    ],
    correctAnswer: 'B',
    explanation: '"Compelling" dalam konteks bukti ilmiah berarti sangat meyakinkan, kuat, dan tak terbantahkan (evoking interest or conviction in a powerfully irresistible way). Sinonimnya adalah "Persuasive" atau "Convincing".',
    keyConcept: 'Academic Word Choice & Collocations',
    tkaExamTip: '"Compelling evidence" adalah frasa kolokasi paten dalam teks ilmiah.'
  },
  {
    id: 'eng-q17',
    number: 17,
    subjectId: 'bahasa-inggris',
    topicTag: 'Grammar in Context',
    difficulty: 'Sedang',
    question: 'Choose the correct form to complete the sentence:\n"Had the laboratory secured sufficient funding last quarter, the clinical trial _____ completed ahead of schedule."',
    options: [
      { id: 'A', text: 'would be' },
      { id: 'B', text: 'would have been' },
      { id: 'C', text: 'will have been' },
      { id: 'D', text: 'had been' }
    ],
    correctAnswer: 'B',
    explanation: 'Struktur "Had the laboratory secured..." adalah Inverted Conditional Type 3. Klausa utamanya harus menggunakan format pasif lampau: "would have been + V3" (would have been completed).',
    keyConcept: 'Passive Third Conditional Main Clause',
    tkaExamTip: 'Pastikan pola pasangan: Had + S + V3 pasangannya adalah S + would have been + V3.'
  },
  {
    id: 'eng-q18',
    number: 18,
    subjectId: 'bahasa-inggris',
    topicTag: 'Error Identification',
    difficulty: 'Sedang',
    question: 'Find the grammatical error:\n"(A) Despite of (B) the heavy turbulence during the flight, (C) the experienced pilot landed (D) the aircraft smoothly."',
    options: [
      { id: 'A', text: '(A) Despite of' },
      { id: 'B', text: '(B) the heavy turbulence' },
      { id: 'C', text: '(C) the experienced pilot' },
      { id: 'D', text: '(D) the aircraft smoothly' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "Despite" tidak pernah diikuti oleh preposisi "of". Bentuk yang benar adalah "Despite the heavy turbulence" ATAU "In spite of the heavy turbulence".',
    keyConcept: 'Prepositional Phrases: Despite vs In Spite Of',
    tkaExamTip: 'Ingat: Despite TIDAK boleh pakai "of", sedangkan In spite HARUS pakai "of".'
  },
  {
    id: 'eng-q19',
    number: 19,
    subjectId: 'bahasa-inggris',
    topicTag: 'Text Organization',
    difficulty: 'Sedang',
    question: 'Which transition best completes the excerpt?\n"Microalgae cultivation requires significantly less arable land than conventional terrestrial crops. _____, it can utilize brackish or wastewater, preserving scarce freshwater resources."',
    options: [
      { id: 'A', text: 'In contrast' },
      { id: 'B', text: 'Moreover' },
      { id: 'C', text: 'On the contrary' },
      { id: 'D', text: 'Nonetheless' }
    ],
    correctAnswer: 'B',
    explanation: 'Kalimat pertama menyampaikan keuntungan (hemat lahan tanah). Kalimat kedua menambahkan keuntungan lain yang sejalan (bisa menggunakan air limbah). Kata transisi penambahan yang tepat adalah "Moreover" (terlebih lagi / selain itu).',
    keyConcept: 'Additive Transitions in Scientific Argumentation',
    tkaExamTip: '"Moreover" dan "Furthermore" digunakan saat menambahkan argumen penguat positif ke arah yang sama.'
  },
  {
    id: 'eng-q20',
    number: 20,
    subjectId: 'bahasa-inggris',
    topicTag: 'Reading Comprehension',
    difficulty: 'Sedang',
    question: 'Read the sentence:\n"The researchers acknowledged that their sample size was confined to urban demographics; consequently, generalizing the behavioral conclusions to rural communities would be premature."\n\nWhat is the main point of this sentence?',
    options: [
      { id: 'A', text: 'Rural populations behave identically to urban populations.' },
      { id: 'B', text: 'The study\'s findings cannot yet be automatically applied to rural settings.' },
      { id: 'C', text: 'Urban research is inherently invalid and unscientific.' },
      { id: 'D', text: 'Demographic data collection should be discontinued.' }
    ],
    correctAnswer: 'B',
    explanation: 'Frasa "generalizing ... would be premature" berarti menyimpulkan hasil tersebut ke masyarakat pedesaan masih terlalu dini / belum dapat digeneralisasi karena sampel hanya berasal dari masyarakat perkotaan.',
    keyConcept: 'Interpreting Limitations in Research Passages',
    tkaExamTip: 'Kata "premature" sering mengindikasikan bahwa suatu kesimpulan belum cukup bukti untuk digeneralisasi.'
  },
  {
    id: 'eng-q21',
    number: 21,
    subjectId: 'bahasa-inggris',
    topicTag: 'Grammar in Context',
    difficulty: 'Sedang',
    question: 'Choose the correct form:\n"The committee requested that every delegate _____ their voting credentials prior to entering the convention hall."',
    options: [
      { id: 'A', text: 'presents' },
      { id: 'B', text: 'present' },
      { id: 'C', text: 'presented' },
      { id: 'D', text: 'is presenting' }
    ],
    correctAnswer: 'B',
    explanation: 'Setelah kata kerja "requested that", klausa nomina menggunakan Subjunctive Mood (bare infinitive: "present"), tanpa tambahan akhiran "-s" meskipun subjeknya "every delegate".',
    keyConcept: 'Subjunctive Mood with "Request That"',
    tkaExamTip: 'Semua kata kerja perintah/permintaan (ask, require, demand, request) menggunakan bare infinitive.'
  },
  {
    id: 'eng-q22',
    number: 22,
    subjectId: 'bahasa-inggris',
    topicTag: 'Contextual Vocabulary',
    difficulty: 'Sedang',
    question: 'The term "plausible" in "The astrophysicist proposed a plausible explanation for the unusual gamma-ray bursts" is closest in meaning to...',
    options: [
      { id: 'A', text: 'Implausible' },
      { id: 'B', text: 'Credible' },
      { id: 'C', text: 'Absurd' },
      { id: 'D', text: 'Defective' }
    ],
    correctAnswer: 'B',
    explanation: '"Plausible" berarti masuk akal, beralasan, dan dapat dipercaya (reasonable, believable, credible).',
    keyConcept: 'Academic Vocabulary Synonyms',
    tkaExamTip: 'Plausible = Credible / Feasible / Reasonable.'
  },
  {
    id: 'eng-q23',
    number: 23,
    subjectId: 'bahasa-inggris',
    topicTag: 'Grammar in Context',
    difficulty: 'Sedang',
    question: 'Complete the sentence:\n"Scarcely had the keynote speaker stepped off the podium _____ the audience erupted into a standing ovation."',
    options: [
      { id: 'A', text: 'than' },
      { id: 'B', text: 'when' },
      { id: 'C', text: 'that' },
      { id: 'D', text: 'then' }
    ],
    correctAnswer: 'B',
    explanation: 'Pasangan frasa inversi waktu:\n- "Scarcely had ... WHEN ..."\n- "Hardly had ... WHEN ..."\n- "No sooner had ... THAN ..."\nKarena di awal kalimat menggunakan "Scarcely", penghubung yang benar adalah "when".',
    keyConcept: 'Correlative Inversion Pairs: Scarcely/Hardly ... When',
    tkaExamTip: 'Ingat: No sooner berpasangan dengan THAN; Hardly dan Scarcely berpasangan dengan WHEN.'
  },
  {
    id: 'eng-q24',
    number: 24,
    subjectId: 'bahasa-inggris',
    topicTag: 'Reading Comprehension',
    difficulty: 'Sedang',
    question: 'An article comparing autonomous electric vehicles and high-speed rail networks opens by discussing congestion, compares lifecycle emissions, and finishes by recommending integrated transit hubs.\n\nHow is the passage primarily organized?',
    options: [
      { id: 'A', text: 'Chronological narrative from ancient to modern transport' },
      { id: 'B', text: 'Problem, comparative evaluation, and proposed integration' },
      { id: 'C', text: 'Biographical tribute to transportation engineers' },
      { id: 'D', text: 'Fictional dialogue between commuters' }
    ],
    correctAnswer: 'B',
    explanation: 'Struktur teks mengikuti alur: memaparkan masalah kemacetan (problem), mengevaluasi perbandingan emisi kedua moda (comparative evaluation), dan diakhiri usulan solusi integrasi transit (proposed integration).',
    keyConcept: 'Analyzing Rhetorical Text Patterns',
    tkaExamTip: 'Identifikasi alur berpikir penulis dari paragraf awal (masalah), tengah (analisis), hingga akhir (solusi).'
  },
  {
    id: 'eng-q25',
    number: 25,
    subjectId: 'bahasa-inggris',
    topicTag: 'Error Identification',
    difficulty: 'Sedang',
    question: 'Choose the underlined segment that contains a grammatical error:\n"(A) Not only the architectural blueprints (B) were inspected by the city engineers, (C) but also the structural foundation (D) was evaluated thoroughly."',
    options: [
      { id: 'A', text: '(A) Not only the architectural blueprints were' },
      { id: 'B', text: '(B) were inspected' },
      { id: 'C', text: '(C) but also the structural' },
      { id: 'D', text: '(D) was evaluated' }
    ],
    correctAnswer: 'A',
    explanation: 'Ketika frasa "Not only" diletakkan di awal kalimat penuh sebelum klausa, harus terjadi pembalikan (inversion): "Not only were the architectural blueprints inspected...", bukan "Not only the blueprints were...".',
    keyConcept: 'Inversion with Fronted "Not Only"',
    tkaExamTip: 'Jika "Not only" berada di depan kalimat, kata kerja bantu (were/did/is) harus mendahului subjek.'
  },
  {
    id: 'eng-q26',
    number: 26,
    subjectId: 'bahasa-inggris',
    topicTag: 'Contextual Vocabulary',
    difficulty: 'Sedang',
    question: 'In the sentence: "The candidate presented a pragmatic framework that prioritized immediate job creation over ideological debates," the word "pragmatic" means...',
    options: [
      { id: 'A', text: 'Theoretical and abstract' },
      { id: 'B', text: 'Practical and results-oriented' },
      { id: 'C', text: 'Rigid and dogmatic' },
      { id: 'D', text: 'Impulsive and reckless' }
    ],
    correctAnswer: 'B',
    explanation: '"Pragmatic" berarti praktis, realistis, dan berorientasi pada hasil nyata yang dapat diterapkan (dealing with things sensibly and realistically based on practical rather than theoretical considerations).',
    keyConcept: 'Contextual Meaning of Academic Traits',
    tkaExamTip: 'Pragmatic = Practical / Realistic / Feasible.'
  },
  {
    id: 'eng-q27',
    number: 27,
    subjectId: 'bahasa-inggris',
    topicTag: 'Grammar in Context',
    difficulty: 'Sedang',
    question: 'Complete the sentence:\n"The newly formulated polymer is superior _____ conventional plastics in terms of tensile strength and recyclability."',
    options: [
      { id: 'A', text: 'than' },
      { id: 'B', text: 'to' },
      { id: 'C', text: 'from' },
      { id: 'D', text: 'as' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata sifat serapan Latin yang berakhiran "-ior" seperti superior, inferior, senior, junior, dan prior selalu dipasangkan dengan preposisi "to", bukan "than" (e.g., superior to, inferior to).',
    keyConcept: 'Latin Comparative Adjectives with Preposition "To"',
    tkaExamTip: 'Ingat: Superior TO, Inferior TO, Prior TO, Senior TO (jangan pernah gunakan "than" setelah kata-kata ini).'
  },
  {
    id: 'eng-q28',
    number: 28,
    subjectId: 'bahasa-inggris',
    topicTag: 'Inference & Synthesis',
    difficulty: 'Sedang',
    question: 'Read the statement:\n"While artificial intelligence accelerates genomic data analysis, human pathologists remain indispensable for interpreting ambiguous biopsies and contextualizing patient history."\n\nWhat is the underlying assumption?',
    options: [
      { id: 'A', text: 'Machine algorithms can independently perform all medical diagnoses without error.' },
      { id: 'B', text: 'Human clinical judgment possesses nuanced interpretation skills that current AI lacks.' },
      { id: 'C', text: 'Pathologists will be completely replaced by technology in the next decade.' },
      { id: 'D', text: 'Genomic data analysis is too slow when assisted by computational algorithms.' }
    ],
    correctAnswer: 'B',
    explanation: 'Pernyataan tersebut menyoroti bahwa patologis manusia tetap "indispensable" (tidak dapat digantikan) untuk kasus ambigu dan riwayat pasien, yang mengasumsikan bahwa penilaian klinis manusia memiliki kemampuan interpretasi bernuansa yang belum dimiliki AI.',
    keyConcept: 'Identifying Implicit Assumptions',
    tkaExamTip: 'Cari asumsi yang menjadi fondasi logis mengapa manusia tetap dibutuhkan.'
  },
  {
    id: 'eng-q29',
    number: 29,
    subjectId: 'bahasa-inggris',
    topicTag: 'Grammar in Context',
    difficulty: 'Sedang',
    question: 'Choose the correct reduced relative clause:\n"Articles _____ in peer-reviewed scientific journals undergo rigorous methodological scrutiny."',
    options: [
      { id: 'A', text: 'publishing' },
      { id: 'B', text: 'published' },
      { id: 'C', text: 'which published' },
      { id: 'D', text: 'were published' }
    ],
    correctAnswer: 'B',
    explanation: 'Kalimat asal: "Articles which are published in peer-reviewed journals...". Ketika klausa relatif pasif direduksi (reduced relative clause), kata ganti penghubung dan to be dihilangkan, menyisakan Past Participle (V3): "Articles published in...".',
    keyConcept: 'Reduced Relative Clauses (Passive)',
    tkaExamTip: 'Reduksi klausa relatif pasif (which are published → published).'
  },
  {
    id: 'eng-q30',
    number: 30,
    subjectId: 'bahasa-inggris',
    topicTag: 'Text Organization',
    difficulty: 'Sedang',
    question: 'Which of the following phrases is most suitable for introducing an empirical example in academic writing?',
    options: [
      { id: 'A', text: 'To exemplify this phenomenon' },
      { id: 'B', text: 'By the way' },
      { id: 'C', text: 'As a random thought' },
      { id: 'D', text: 'In another story' }
    ],
    correctAnswer: 'A',
    explanation: '"To exemplify this phenomenon" adalah frasa transisi formal akademik yang tepat untuk memperkenalkan contoh empiris yang mendukung argumen. Opsi lainnya terlalu santai atau kolokuial untuk penulisan ilmiah.',
    keyConcept: 'Academic Exemplification Signals',
    tkaExamTip: 'Gunakan frasa formal seperti "To illustrate", "To exemplify", "For instance" dalam wacana akademik.'
  }
];
