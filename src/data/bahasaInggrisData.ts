import { Topic } from '../types';

export const bahasaInggrisTopics: Topic[] = [
  {
    id: 'eng-1',
    title: 'Reading Comprehension & Main Idea Strategies',
    subheader: 'Mengidentifikasi gagasan pokok, tujuan penulis, dan struktur paragraf secara cepat',
    estimatedReadTime: '8 menit',
    summary: 'TKA Bahasa Inggris menuntut kemampuan menyaring ide sentral dari teks akademik panjang, menentukan main idea, author\'s tone (sikap/nada penulis), serta tujuan komunikatif (purpose) teks dalam waktu singkat.',
    keyConcepts: [
      {
        title: 'Skimming & Topik Sentral',
        explanation: 'Topik adalah subjek payung (1-3 kata), sedangkan Main Idea adalah kalimat lengkap yang merangkum pesan utama penulis tentang topik tersebut. Sering ditemukan di kalimat pertama/terakhir paragraf (deduktif/induktif).',
        formulaOrKey: 'Main Idea = Topic + Author\'s Controlling Idea / Point'
      },
      {
        title: 'Author\'s Tone & Attitude',
        explanation: 'Karakter nada teks akademik: Objektif/Netral (critical, informative, analytical), Positif (optimistic, approving), Negatif (skeptical, cynical, concerned, disapproving). Hindari opsi ekstrem seperti "furious" pada artikel ilmiah.',
        formulaOrKey: 'Tone Indicators: Adjective choices & hedging words (may, suggests, however)'
      },
      {
        title: 'Author\'s Purpose / Objective',
        explanation: 'Kata kerja tujuan: to elucidate/explain (menjelaskan), to argue/advocate (berargumen), to contrast (membandingkan), to warn (memperingatkan), to evaluate (mengevaluasi dampak).',
        formulaOrKey: 'Purpose = Verb (to clarify/argue) + Target Issue'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Menjawab Soal "What is the primary purpose of the passage?"',
        problem: 'Sebuah teks membahas bahaya mikroplastik di lautan, memaparkan data riset terbaru, dan diakhiri dengan desakan regulasi internasional.',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Cari kata kunci tesis pada kalimat pembuka dan paragraf penutup',
            calculationOrDetail: 'Paragraf 1 memperkenalkan akumulasi mikroplastik. Paragraf terakhir menyatakan perlunya intervensi kebijakan global.'
          },
          {
            stepNumber: 2,
            instruction: 'Eliminasi pilihan jawaban yang terlalu spesifik atau terlalu luas',
            calculationOrDetail: 'Opsi yang hanya menyebut "metode filtrasi laboratorium" terlalu sempit; opsi "menyelamatkan seluruh planet bumi" terlalu luas.'
          },
          {
            stepNumber: 3,
            instruction: 'Pilih opsi yang mencakup masalah + ajakan bertindak',
            calculationOrDetail: 'Pilihan tepat: "To highlight the ecological risks of microplastics and advocate for regulatory action".'
          }
        ],
        solution: 'Jawaban yang benar merangkum esensi masalah beserta kesimpulan penulis.',
        tip: 'Jangan memilih jawaban yang hanya merupakan detail pendukung dari satu paragraf saja!'
      }
    ],
    practicalExamples: [
      {
        title: 'Analisis Paragraf Teks Ilmiah Iklim',
        context: '"While renewable energy subsidies have surged, grid infrastructure bottlenecks continue to stall transition efforts..."',
        solution: 'Kata transisi "While" menandakan konsesi. Gagasan pokoknya bukan sekadar lonjakan subsidi, melainkan hambatan infrastruktur jaringan listrik.',
        takeaway: 'Perhatikan kata transisi kontras (However, Although, While, Yet) karena gagasan utama sering berada setelah kata kontras tersebut.'
      }
    ],
    quickTips: [
      'Gunakan metode Skim (baca cepat ide pokok) dan Scan (cari kata kunci spesifik angka/nama).',
      'Jika ditanya paragraf pendahulu (preceding paragraph), baca 1-2 kalimat awal teks.',
      'Jika ditanya paragraf berikutnya (following paragraph), baca 1-2 kalimat terakhir teks.'
    ],
    quickCheck: [
      {
        id: 'qc-e1',
        question: 'Which word best describes the tone of an author who presents both advantages and drawbacks of AI with balanced statistical evidence?',
        options: ['Biased', 'Objective', 'Hostile', 'Indifferent'],
        correctIndex: 1,
        explanation: '"Objective" berarti tidak memihak dan menyajikan fakta seimbang berdasarkan bukti nyata.'
      }
    ]
  },
  {
    id: 'eng-2',
    title: 'Contextual Vocabulary, Synonyms & Collocations',
    subheader: 'Memahami makna kata berdasarkan konteks kalimat dan pasangan kata alami',
    estimatedReadTime: '7 menit',
    summary: 'Soal kosakata TKA tidak menguji hafalan kamus semata, melainkan kemampuan menebak arti kata sulit (unfamiliar words) melalui petunjuk konteks (clues), sinonim terdekat, antonim, dan kolokasi frasa akademik.',
    keyConcepts: [
      {
        title: 'Context Clues (Petunjuk Konteks)',
        explanation: 'Gunakan 4 jenis petunjuk dalam kalimat: Definition/Restatement (that is, in other words), Contrast (unlike, in contrast to), Example (such as, for instance), dan Cause-Effect (consequently, due to).',
        formulaOrKey: 'Clue Markers: Punctuation (dashes, commas), Transitions (unlike, namely)'
      },
      {
        title: 'Academic Collocations (Pasangan Kata)',
        explanation: 'Kata dalam bahasa Inggris berpasangan secara natural: conduct an experiment (bukan make an experiment), pose a threat, raise awareness, exert influence, draw a conclusion.',
        formulaOrKey: 'Verb + Noun: pose a threat | Adjective + Noun: striking resemblance'
      },
      {
        title: 'Prefix & Root Words (Morfologi Kata)',
        explanation: 'Pahami imbuhan: un-/in-/dis- (negasi), over- (berlebih), sub- (di bawah), inter- (antar), -able (dapat), -ify (menjadikan), -ous (bersifat).',
        formulaOrKey: 'Root + Affixes = Unprecedented (belum pernah ada sebelumnya)'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Menebak Arti Kata Asing "Pernicious"',
        problem: 'Dalam kalimat: "The pervasive smog posed a pernicious threat to public health, causing irreversible lung damage across the metropolitan area."',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Identifikasi efek atau konsekuensi di kalimat lanjutan',
            calculationOrDetail: 'Frasa "causing irreversible lung damage" (kerusakan paru-paru permanen) menunjukkan dampak yang sangat berbahaya/merusak.'
          },
          {
            stepNumber: 2,
            instruction: 'Evaluasi pilihan sinonim yang tersedia',
            calculationOrDetail: 'A. Beneficial (salah), B. Temporary (salah), C. Harmful / Destructive (benar), D. Minor (salah).'
          },
          {
            stepNumber: 3,
            instruction: 'Verifikasi kecocokan makna pada kalimat',
            calculationOrDetail: 'Pernicious berarti "having a harmful effect, especially in a gradual or subtle way".'
          }
        ],
        solution: 'Sinonim terdekat adalah "harmful" atau "destructive".',
        tip: 'Lihat kata keterangan atau kata sifat yang mengelilingi kata target untuk mendeteksi konotasi positif atau negatif.'
      }
    ],
    practicalExamples: [
      {
        title: 'Memilih Kolokasi Formal yang Tepat',
        context: 'Para ilmuwan ingin "melakukan penelitian" komprehensif.',
        solution: 'Bentuk formal akademik: "conduct research" atau "carry out an investigation", bukan "do research" dalam konteks teks resmi TKA.',
        takeaway: 'Kolokasi formal meningkatkan akurasi dalam soal fill-in-the-blank teks bacaan.'
      }
    ],
    quickTips: [
      'Sinonim kata "mitigate" yang sering keluar: alleviate, reduce, lessen, ease.',
      'Sinonim kata "ubiquitous": omnipresent, widespread, prevalent.',
      'Sinonim kata "lucid": clear, coherent, easily understood.'
    ],
    quickCheck: [
      {
        id: 'qc-e2',
        question: 'The word "ubiquitous" in the sentence "Smartphones have become ubiquitous in modern society" is closest in meaning to...',
        options: ['Rare', 'Omnipresent', 'Expensive', 'Outdated'],
        correctIndex: 1,
        explanation: '"Ubiquitous" berarti ada di mana-mana (omnipresent/widespread).'
      }
    ]
  },
  {
    id: 'eng-3',
    title: 'Advanced Grammar in Context & Sentence Patterns',
    subheader: 'Penguasaan struktur kalimat kompleks, inversi, klausa partisipial, dan pengandaian',
    estimatedReadTime: '9 menit',
    summary: 'Membahas tata bahasa tingkat tinggi yang menjadi pembeda skor di TKA: Inversion (kondisi pembalikan subjek-predikat), Reduced Relative Clauses (participial phrases), Conditional Sentences Type 1-3 & Inverted Conditionals, serta Subjunctive mood.',
    keyConcepts: [
      {
        title: 'Inversion (Pembalikan Kalimat)',
        explanation: 'Bila kalimat diawali adverbia negatif/restriktif (Seldom, Rarely, Scarcely, Not only, Under no circumstances, Hardly), susunan kata dibalik seperti kalimat tanya: Negative Word + Auxiliary + Subject + Verb.',
        formulaOrKey: 'Seldom + did + he + realize ... | Not only + was + she + talented ...'
      },
      {
        title: 'Inverted Conditionals (Pengandaian Tanpa If)',
        explanation: 'Type 1: Should you need assistance (If you should need). Type 2: Were I in your position (If I were). Type 3: Had we known the schedule (If we had known).',
        formulaOrKey: 'Type 3 Inverted: Had + Subject + V3, Subject + would have + V3'
      },
      {
        title: 'Participial Phrases (Reduksi Klausa)',
        explanation: 'Aktif menggunakan V-ing: "Having finished the report, she submitted it". Pasif menggunakan V3: "Written in plain English, the manual is easy to follow".',
        formulaOrKey: 'Active: V-ing ... | Passive: V3 / Being + V3 ...'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Menganalisis Kalimat Inversi Tipe 3',
        problem: 'Pilihlah bentuk yang benar: "_____ the weather forecast earlier, the expedition team would not have been stranded on the mountain."',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Perhatikan klausa hasil (main clause)',
            calculationOrDetail: '"would not have been stranded" adalah pola Conditional Type 3 (past unreal condition).'
          },
          {
            stepNumber: 2,
            instruction: 'Kenali bentuk inversi tanpa kata "If"',
            calculationOrDetail: 'Bentuk normal: "If they had checked...". Bentuk inversi menghilangkan "If" dan memajukan "Had": "Had they checked...".'
          },
          {
            stepNumber: 3,
            instruction: 'Pilih opsi yang memiliki susunan Had + Subject + V3',
            calculationOrDetail: 'Opsi yang benar adalah: "Had they checked".'
          }
        ],
        solution: 'Bentuk kalimat lengkap: "Had they checked the weather forecast earlier..."',
        tip: 'Jangan pernah menggunakan "If had they..." secara bersamaan; pilih salah satu: pakai "If" biasa atau "Had" inversi.'
      }
    ],
    practicalExamples: [
      {
        title: 'Subjunctive Mood setelah Kata Kerja Saran/Perintah',
        context: 'The director insisted that all project milestones _____ (meet) on schedule.',
        solution: 'Gunakan bare infinitive (be met) setelah kata kerja insist/recommend/suggest/require: "insisted that all project milestones be met on schedule".',
        takeaway: 'Subjunctive mood pada that-clause selalu menggunakan kata kerja dasar (bare infinitive / be), terlepas dari bentuk waktu masa lalu.'
      }
    ],
    quickTips: [
      'Neither ... nor mengikuti subjek kedua (yang paling dekat dengan kata kerja).',
      'A number of + plural noun + plural verb (A number of students ARE).',
      'The number of + plural noun + singular verb (The number of students IS).'
    ],
    quickCheck: [
      {
        id: 'qc-e3',
        question: '"Rarely _____ such dedication to environmental preservation in modern corporate culture."',
        options: ['we see', 'do we see', 'we did see', 'we are seeing'],
        correctIndex: 1,
        explanation: 'Kalimat diawali kata keterangan negatif "Rarely", sehingga subjek dan auxiliary harus dibalik (inversi): "Rarely do we see".'
      }
    ]
  },
  {
    id: 'eng-4',
    title: 'Text Organization, Cohesion & Logical Transition Signals',
    subheader: 'Konektor logika antar paragraf, urutan ide, dan kohesi wacana ilmiah',
    estimatedReadTime: '8 menit',
    summary: 'Mempelajari hubungan logis antar kalimat dan paragraf (Addition, Contrast, Cause-Effect, Exemplification, Concession), penyusunan ulang kalimat acak (reordering), serta penentuan kalimat yang tidak relevan (sentence insertion / removal).',
    keyConcepts: [
      {
        title: 'Kategori Kata Transisi Logis',
        explanation: 'Kontras: However, Nevertheless, On the contrary, Conversely. Penambahan: Furthermore, Moreover, In addition. Sebab-Akibat: Consequently, Hence, Therefore, As a result. Konsesi: Although, Albeit, In spite of.',
        formulaOrKey: 'Cause-Effect: Therefore, Thus | Contrast: However, Nonetheless'
      },
      {
        title: 'Kohesi Referensial (Pronoun & Determiner Clues)',
        explanation: 'Cari rujukan kata ganti (this phenomenon, such approaches, these findings). Kalimat yang mengandung "these findings" pasti diletakkan SETELAH kalimat yang pertama kali menyebutkan hasil temuan/penelitian.',
        formulaOrKey: 'Noun introduced → Later referenced by "This/These + Noun"'
      },
      {
        title: 'Pola Organisasi Teks Akademik',
        explanation: 'Struktur umum: Problem - Solution, Cause - Effect, Chronological Process, Claim - Evidence - Counterargument.',
        formulaOrKey: 'Structure: Claim → Empirical Data → Implication'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Menentukan Kalimat yang Hilang (Sentence Insertion)',
        problem: 'Di manakah kalimat "Consequently, researchers shifted their focus toward alternative battery chemistries" paling tepat disisipkan?',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Analisis kata transisi penghubung kalimat target',
            calculationOrDetail: '"Consequently" menandakan kalimat ini adalah akibat atau respons terhadap suatu masalah atau kegagalan sebelumnya.'
          },
          {
            stepNumber: 2,
            instruction: 'Cari kalimat yang memaparkan keterbatasan metode lama',
            calculationOrDetail: 'Temukan kalimat yang membahas "The scarcity and high extraction costs of lithium created severe bottlenecks...".'
          },
          {
            stepNumber: 3,
            instruction: 'Letakkan kalimat target tepat setelah pemaparan masalah',
            calculationOrDetail: 'Masalah biaya lithium → Akibatnya periset beralih ke kimia baterai alternatif.'
          }
        ],
        solution: 'Kalimat target disisipkan tepat setelah kalimat yang memaparkan hambatan ekstraksi lithium.',
        tip: 'Selalu periksa kalimat sebelum dan sesudah titik sisipan untuk memastikan aliran ide tidak terputus.'
      }
    ],
    practicalExamples: [
      {
        title: 'Membedakan "In spite of" vs "Although"',
        context: '_____ the torrential rain, the marathon proceeded without delay.',
        solution: 'Gunakan "In spite of" atau "Despite" karena diikuti oleh frasa nomina ("the torrential rain"), bukan klausa utuh (subjek + predikat).',
        takeaway: 'In spite of / Despite + Noun Phrase ; Although / Even though + Subject + Verb.'
      }
    ],
    quickTips: [
      '"Furthermore" digunakan untuk menambah argumen yang sejalan, bukan untuk mengubah arah topik.',
      '"On the other hand" harus didahului atau berpasangan dengan sudut pandang "On the one hand".',
      'Kata "Namely" dan "Specifically" digunakan untuk merinci pernyataan umum sebelumnya.'
    ],
    quickCheck: [
      {
        id: 'qc-e4',
        question: 'Which transition word best fills the blank? "Electric vehicles produce zero direct tailpipe emissions; _____, their overall environmental impact depends heavily on the electrical grid\'s power source."',
        options: ['Therefore', 'However', 'Furthermore', 'Similarly'],
        correctIndex: 1,
        explanation: '"However" adalah pilihan tepat karena menunjukkan kontras antara keunggulan emisi knalpot nol dengan ketergantungan pada sumber pembangkit listrik.'
      }
    ]
  }
];

export const bahasaInggrisCheatSheet = [
  {
    category: 'Grammar Inversi & Pola Khusus',
    items: [
      { label: 'Negative Inversion', formula: 'Negative Word (Seldom/Never/Rarely) + Aux + Subj + Verb', note: 'Contoh: Never have I witnessed such phenomena' },
      { label: 'Inverted Conditionals (Type 3)', formula: 'Had + S + V3, S + would have + V3', note: 'Menghilangkan "If", memajukan "Had"' },
      { label: 'Subjunctive Mood', formula: 'Demand/Suggest/Insist that + S + (be / bare infinitive)', note: 'Bentuk kata kerja tanpa akhiran -s atau bentuk masa lalu' }
    ]
  },
  {
    category: 'Hubungan Transisi Logis',
    items: [
      { label: 'Kontras & Oposisi', formula: 'However, Nevertheless, Conversely, In contrast', note: 'Menghubungkan dua ide yang bertentangan' },
      { label: 'Sebab Akibat', formula: 'Consequently, Hence, Therefore, As a result', note: 'Kalimat kedua merupakan konsekuensi dari yang pertama' },
      { label: 'Konsesi (Meskipun)', formula: 'Despite / In spite of + Noun ; Although + S + V', note: 'Perhatikan apakah diikuti frasa benda atau klausa' }
    ]
  },
  {
    category: 'Kosakata Akademik Sering Keluar',
    items: [
      { label: 'Mitigate', formula: 'Alleviate, lessen, attenuate', note: 'Meringankan atau mengurangi dampak buruk' },
      { label: 'Pervasive', formula: 'Widespread, ubiquitous, prevalent', note: 'Merata atau tersebar luas' },
      { label: 'Plausible', formula: 'Credible, reasonable, feasible', note: 'Masuk akal atau dapat diterima secara logis' }
    ]
  }
];
