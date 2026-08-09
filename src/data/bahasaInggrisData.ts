import { Topic } from '../types';

export const bahasaInggrisTopics: Topic[] = [
  {
    id: 'bi1',
    title: 'Mastering English Tenses & Timeline Formulas',
    categoryTag: 'Grammar & Tenses',
    summary: 'Memahami 16 pola tenses esensial dalam bahasa Inggris, kata keterangan waktu (time signals), fungsi spesifik, serta cara cepat menentukan tense yang tepat dalam soal ujian.',
    conceptExplanation: 'Tenses adalah perubahan bentuk kata kerja (verb) yang menunjukkan waktu terjadinya peristiwa. Tenses dibangun dari 4 aspek waktu (Present, Past, Future, Past Future) dan 4 bentuk aktivitas (Simple, Continuous, Perfect, Perfect Continuous).',
    keyPoints: [
      'Simple Present: Fakta umum, kebiasaan (habitual action), jadwal pasti. S + V1(-s/-es) / do/does.',
      'Present Continuous: Sedang berlangsung saat ini. S + am/is/are + V-ing. (Time signal: right now, at the moment).',
      'Present Perfect: Peristiwa yang telah selesai di masa lampau namun dampaknya masih terasa sekarang, atau pengalaman hidup. S + have/has + V3. (Time signal: already, yet, just, since, for, ever).',
      'Simple Past: Peristiwa yang terjadi dan selesai di masa lampau pada waktu spesifik. S + V2 / did. (Time signal: yesterday, last week, ago, in 1995).',
      'Past Continuous: Sedang berlangsung di masa lampau ketika peristiwa lain menyela (When + Simple Past, While + Past Continuous). S + was/were + V-ing.',
      'Past Perfect: Terjadi LEBIH DULU sebelum peristiwa masa lampau lainnya (Before/After). S + had + V3.',
      'Future Tense: Prediksi atau rencana mendatang. S + will + V1 atau S + is/am/are going to + V1.'
    ],
    stepByStepGuides: [
      {
        title: 'Trik Cepat Menentukan Tense dalam Soal Pilihan Ganda',
        description: '3 langkah praktis menganalisis kalimat soal bahasa Inggris.',
        steps: [
          'Langkah 1: Cari Kata Keterangan Waktu (Time Signal) seperti "yesterday", "since 2020", "right now", atau "tomorrow".',
          'Langkah 2: Jika tidak ada time signal jelas, perhatikan klausa penghubung (conjunction) seperti "when", "while", "after", atau "before".',
          'Langkah 3: Periksa keselarasan subjek (Subject-Verb Agreement): subjek tunggal (He/She/It) menggunakan V1+s/es, is, was, has; subjek jamak (They/We/You) menggunakan V1, are, were, have.'
        ],
        tips: 'Ingat pola When/While: "While I was studying (Past Continuous), the phone rang (Simple Past)".'
      },
      {
        title: 'Perbedaan "Since" vs "For" pada Present Perfect',
        description: 'Menghindari kesalahan umum penggunaan kata penunjuk waktu.',
        steps: [
          'Gunakan "SINCE" untuk titik awal mula waktu (starting point), contoh: since 2018, since Monday, since 8 AM, since he arrived.',
          'Gunakan "FOR" untuk durasi atau rentang waktu (period of time), contoh: for 3 years, for 2 hours, for a long time, for 5 days.'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Present Perfect Tense Formula',
        formula: 'S + \\text{have/has} + V_3 + O',
        explanation: 'Digunakan untuk aksi yang sudah selesai atau pengalaman hidup tanpa menyebut waktu lampau spesifik.',
        variables: [
          { symbol: 'Have', meaning: 'Digunakan untuk subjek I, You, We, They, dan Plural Noun' },
          { symbol: 'Has', meaning: 'Digunakan untuk subjek He, She, It, dan Singular Noun' },
          { symbol: 'V3', meaning: 'Past Participle form of verb (e.g. eaten, written, visited)' }
        ]
      },
      {
        title: 'Past Perfect Before / After Pattern',
        formula: '\\text{Past Perfect (had + } V_3\\text{) } + \\text{before} + \\text{Simple Past (} V_2 \\text{)}',
        explanation: 'Aksi yang memakai had + V3 terjadi paling pertama (kronologi lebih tua).',
        variables: [
          { symbol: 'had + V3', meaning: 'Aksi ke-1 (First event in the past)' },
          { symbol: 'V2', meaning: 'Aksi ke-2 (Second event in the past)' }
        ],
        quickTip: 'Ingat rumus jitu: "Had + V3 selalu terjadi DULUAN sebelum V2"!'
      }
    ],
    formulas: [
      '\\text{Simple Present: } S + V_1(s/es) + O',
      '\\text{Present Continuous: } S + \\text{am/is/are} + V_{\\text{ing}}',
      '\\text{Present Perfect: } S + \\text{have/has} + V_3',
      '\\text{Simple Past: } S + V_2 + O',
      '\\text{Past Continuous: } S + \\text{was/were} + V_{\\text{ing}}',
      '\\text{Past Perfect: } S + \\text{had} + V_3'
    ],
    examples: [
      {
        problem: 'By the time the police arrived at the bank, the robbers ______ with the vault cash.',
        given: 'Klausa 1: "the police arrived" (Simple Past / V2), time signal: "By the time" (menandakan aksi lain selesai sebelumnya)',
        questionTarget: 'Bentuk kata kerja yang tepat (escaped / had escaped / have escaped / was escaping)',
        steps: [
          'Identifikasi urutan peristiwa: Perampok kabur LEBIH DULU sebelum polisi tiba.',
          'Aksi yang terjadi lebih dulu di masa lampau wajib menggunakan Past Perfect (had + V3).',
          'Maka bentuk yang benar adalah: had escaped.'
        ],
        solution: 'had escaped (By the time the police arrived, the robbers had escaped with the vault cash).'
      }
    ],
    quickTips: [
      'Stative verbs (seperti love, know, understand, believe, want) TIDAK boleh digunakan dalam continuous (-ing) tense!',
      'Jika ada kata "every day / always / usually", hampir pasti jawabannya adalah Simple Present.'
    ]
  },
  {
    id: 'bi2',
    title: 'Passive Voice Across All Tenses & Modals',
    categoryTag: 'Grammar & Structure',
    summary: 'Aturan mengubah kalimat aktif menjadi kalimat pasif (Passive Voice), penyesuaian auxiliary "to be" di setiap tense, penggunaan by-phrase, dan bentuk pasif dengan kata kerja modal.',
    conceptExplanation: 'Kalimat pasif menekankan objek atau tindakan yang diterima subjek, bukan siapa yang melakukan tindakan tersebut. Ciri mutlak kalimat pasif adalah selalu mengandung rumus dasar: BE + V3 (Past Participle).',
    keyPoints: [
      'Rumus Universal Pasif: S + BE (sesuai tense & subjek baru) + V3 + (by Agent).',
      'Simple Present Passive: is / am / are + V3. (e.g., "The car is washed every day").',
      'Simple Past Passive: was / were + V3. (e.g., "The novel was written in 1920").',
      'Continuous Passive: is/am/are/was/were + BEING + V3. (e.g., "A new bridge is being built").',
      'Perfect Passive: have / has / had + BEEN + V3. (e.g., "The report has been submitted").',
      'Modal Passive: modal + BE + V3. (can be done, must be submitted, should be checked).'
    ],
    stepByStepGuides: [
      {
        title: '3 Langkah Mengubah Kalimat Aktif Menjadi Pasif',
        description: 'Metode sistematis mengubah active sentence ke passive sentence.',
        steps: [
          'Langkah 1: Pindahkan Objek dari kalimat aktif menjadi Subjek di kalimat pasif.',
          'Langkah 2: Tentukan tense dari kalimat aktif dan pasang bentuk "To Be" yang sesuai dengan Subjek Baru tersebut.',
          'Langkah 3: Ubah kata kerja utama menjadi kata kerja bentuk ketiga (V3 / Past Participle).',
          'Langkah 4 (Opsional): Tambahkan "by + Pelaku" di akhir kalimat jika pelakunya penting diketahui.'
        ],
        tips: 'Hanya kalimat dengan kata kerja transitif (yang memiliki objek langsung) yang bisa dipasifkan!'
      }
    ],
    formulaDetails: [
      {
        title: 'Bentuk Umum Passive Voice',
        formula: '\\text{Subject (Former Object)} + \\mathbf{BE} + \\mathbf{V_3} + (\\text{by Agent})',
        explanation: 'Bentuk To Be berubah sesuai waktu dan jumlah subjek baru.',
        variables: [
          { symbol: 'BE', meaning: 'is, am, are, was, were, been, being, be' },
          { symbol: 'V3', meaning: 'Past participle form of the main verb' }
        ]
      },
      {
        title: 'Modal Passive Formula',
        formula: 'S + \\text{Modal (can/must/should/will)} + \\mathbf{be} + V_3',
        explanation: 'Setelah modal auxiliary, gunakan kata "be" murni lalu diikuti V3.',
        variables: [
          { symbol: 'Modal', meaning: 'can, could, may, might, must, should, will, would' }
        ]
      }
    ],
    formulas: [
      '\\text{Simple Present: } S + \\text{is/am/are} + V_3',
      '\\text{Simple Past: } S + \\text{was/were} + V_3',
      '\\text{Present Continuous: } S + \\text{is/am/are} + \\mathbf{being} + V_3',
      '\\text{Present Perfect: } S + \\text{have/has} + \\mathbf{been} + V_3',
      '\\text{Modal Passive: } S + \\text{Modal} + \\mathbf{be} + V_3'
    ],
    examples: [
      {
        problem: 'Ubahlah kalimat aktif berikut ke pasif: "The committee is reviewing the scholarship applications right now."',
        given: 'Kalimat aktif dalam Present Continuous (is reviewing), Subjek = The committee, Objek = the scholarship applications (jamak)',
        questionTarget: 'Bentuk kalimat pasif',
        steps: [
          'Objek "the scholarship applications" menjadi subjek baru (plural/jamak).',
          'Karena tenses Present Continuous dan subjeknya jamak, to be yang digunakan adalah "are being".',
          'Ubah verb "review" ke bentuk V3 yaitu "reviewed".',
          'Gabungkan: "The scholarship applications are being reviewed by the committee right now."'
        ],
        solution: 'The scholarship applications are being reviewed by the committee right now.'
      }
    ],
    quickTips: [
      'Jika ada kata "being + V3", itu pasti bentuk pasif dari Continuous Tense!',
      'Jika ada kata "been + V3", itu pasti bentuk pasif dari Perfect Tense!'
    ]
  },
  {
    id: 'bi3',
    title: 'Conditional Sentences (Type 0, 1, 2, 3 & Inversion)',
    categoryTag: 'Grammar & Structure',
    summary: 'Kondisional tipe 0 (kebenaran umum), tipe 1 (kemungkinan masa depan), tipe 2 (pengandaian masa kini/unreal present), tipe 3 (penyesalan masa lampau/unreal past), serta inversi tanpa kata if.',
    conceptExplanation: 'Conditional sentence (kalimat pengandaian) terdiri dari If-Clause (klausa syarat) dan Main Clause (klausa hasil). Setiap tipe memiliki makna fakta tersendiri (real fact) yang berlawanan dengan klausanya pada Type 2 dan Type 3.',
    keyPoints: [
      'Type 0 (General Truth): If + Simple Present, Simple Present. (e.g., If you heat ice, it melts).',
      'Type 1 (Real Future Possibility): If + Simple Present, S + will + V1. (e.g., If it rains tomorrow, we will stay home).',
      'Type 2 (Unreal Present): If + Simple Past (V2 / were), S + would + V1. Faktanya: Simple Present bertanda sebaliknya! (e.g., If I were rich, I would travel = Fact: I am not rich).',
      'Type 3 (Unreal Past / Regret): If + Past Perfect (had + V3), S + would have + V3. Faktanya: Simple Past bertanda sebaliknya! (e.g., If he had studied, he would have passed = Fact: He didn\'t study, so he didn\'t pass).',
      'Inversi Tanpa "If": Type 1 (Should you need help...), Type 2 (Were I you...), Type 3 (Had he known...).'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Cepat Menemukan Fakta (Fact) dari Conditional Type 2 & 3',
        description: 'Trik menjawab soal "What is the fact of the sentence?" dalam ujian.',
        steps: [
          'Jika kalimat soal Conditional Type 2 (memuat If + V2/were, would + V1) → Faktanya PASTI berbentuk SIMPLE PRESENT (V1 / is / am / are) dengan makna berlawanan (positif jadi negatif, negatif jadi positif).',
          'Jika kalimat soal Conditional Type 3 (memuat If + had + V3, would have + V3) → Faktanya PASTI berbentuk SIMPLE PAST (V2 / did not / was / were) dengan makna berlawanan.'
        ],
        tips: 'Ingat pada Type 2 formal, SEMUA subjek (termasuk I, he, she, it) menggunakan "were", bukan "was"!'
      }
    ],
    formulaDetails: [
      {
        title: 'Conditional Type 2 (Unreal Present)',
        formula: '\\text{If} + S + V_2 / \\text{were}, \\quad S + \\text{would / could} + V_1',
        explanation: 'Mengandaikan situasi saat ini yang berlawanan dengan kenyataan aktual.',
        variables: [
          { symbol: 'were', meaning: 'Digunakan untuk semua subjek dalam bahasa Inggris formal (If I were you)' },
          { symbol: 'would + V1', meaning: 'Hasil yang akan terjadi seandainya kondisi terpenuhi' }
        ]
      },
      {
        title: 'Conditional Type 3 (Unreal Past)',
        formula: '\\text{If} + S + \\text{had} + V_3, \\quad S + \\text{would have} + V_3',
        explanation: 'Mengandaikan peristiwa masa lalu yang sudah tidak bisa diubah (penyesalan).',
        variables: [
          { symbol: 'had + V3', meaning: 'Syarat di masa lampau' },
          { symbol: 'would have + V3', meaning: 'Hasil yang seharusnya terjadi di masa lampau' }
        ],
        quickTip: 'Inversi Type 3: Hapus kata "If" dan tukar posisi "Had" ke depan: "Had I known the truth..."'
      }
    ],
    formulas: [
      '\\text{Type 0: } \\text{If} + S + V_1, \\quad S + V_1',
      '\\text{Type 1: } \\text{If} + S + V_1, \\quad S + \\text{will} + V_1',
      '\\text{Type 2: } \\text{If} + S + V_2/\\text{were}, \\quad S + \\text{would} + V_1',
      '\\text{Type 3: } \\text{If} + S + \\text{had} + V_3, \\quad S + \\text{would have} + V_3',
      '\\text{Inversion Type 3: } \\text{Had} + S + V_3, \\quad S + \\text{would have} + V_3'
    ],
    examples: [
      {
        problem: 'What is the real fact of the sentence: "If Sarah had left earlier, she wouldn\'t have missed her flight"?',
        given: 'Kalimat Conditional Type 3: "If Sarah had left (had + V3), she wouldn\'t have missed (would have + V3)"',
        questionTarget: 'Fakta sebenarnya dari kalimat tersebut',
        steps: [
          'Kalimat adalah Conditional Type 3, sehingga faktanya adalah peristiwa lampau (Simple Past / V2).',
          'Klausa "If Sarah had left earlier" (positif) artinya faktanya negatif: Sarah did NOT leave earlier.',
          'Klausa "she wouldn\'t have missed" (negatif) artinya faktanya positif: She MISSED her flight.',
          'Gabungkan: Sarah did not leave earlier, so she missed her flight.'
        ],
        solution: 'Sarah was late / did not leave earlier, so she missed her flight.'
      }
    ],
    quickTips: [
      'Jika melihat pola "Had he...", itu adalah bentuk singkatan dari "If he had..." (Inversi).',
      'Jangan pernah memasukkan kata "would" di dalam klausa yang ada kata "If"-nya!'
    ]
  },
  {
    id: 'bi4',
    title: 'Participles & Reduced Relative Clauses',
    categoryTag: 'Advanced Grammar',
    summary: 'Penggunaan Present Participle (Active -ing) vs Past Participle (Passive -ed/V3), pemendekan anak kalimat (Reduced Relative Clauses), dan adverbial participial phrases.',
    conceptExplanation: 'Participle adalah bentuk kata kerja yang difungsikan sebagai kata sifat (adjective) atau pemendek klausa untuk membuat kalimat lebih ringkas dan elegan dalam teks akademik.',
    keyPoints: [
      'Present Participle (V-ing): Memiliki makna AKTIF (melakukan tindakan). Contoh: "The man standing near the door is my teacher" (asal: the man who is standing).',
      'Past Participle (V3 / -ed): Memiliki makna PASIF (dikenai tindakan). Contoh: "The book published in 2024 became a bestseller" (asal: the book which was published).',
      'Reduced Adverbial Clause: "Having finished the report, he went to sleep" = After he had finished the report.',
      'Dangling Modifier Trap: Subjek dari participial phrase di awal kalimat HARUS SAMA dengan subjek klausa utama setelah tanda koma!'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Cepat Memilih Verb-ing vs Verb-3 pada Modifying Clause',
        description: 'Trik membedakan apakah kata sifat membutuhkan -ing atau V3.',
        steps: [
          'Periksa kata benda (noun) yang dijelaskan oleh participle tersebut.',
          'Tanyakan: "Apakah benda tersebut MELAKUKAN tindakan (Aktif) atau MENGALAMI tindakan (Pasif)?"',
          'Jika MELAKUKAN (Aktif) → Pilih bentuk V-ing (Present Participle). Contoh: The boy (running) in the park.',
          'Jika MENGALAMI (Pasif) → Pilih bentuk V3 (Past Participle). Contoh: The car (damaged) in the accident.'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Reduced Relative Clause Formula',
        formula: '\\text{Noun} + \\text{who/which is} + V_{\\text{ing}} \\implies \\text{Noun} + V_{\\text{ing}} \\quad (\\text{Active})',
        explanation: 'Hapus relative pronoun (who/which) dan to be, sisakan V-ing.',
        variables: [
          { symbol: 'V-ing', meaning: 'Active modifier describing the noun' }
        ]
      }
    ],
    formulas: [
      '\\text{Active: } \\text{Noun} + V_{\\text{ing}} \\quad (\\text{e.g., the crying baby})',
      '\\text{Passive: } \\text{Noun} + V_3 \\quad (\\text{e.g., the broken glass})',
      '\\text{Perfect Participle: } \\text{Having} + V_3, \\quad S + V_2'
    ],
    examples: [
      {
        problem: 'The scientific research ______ by the international university yielded surprising discoveries in clean energy.',
        given: 'Subjek = The scientific research (penelitian ilmiah), Tindakan = conduct (melakukan)',
        questionTarget: 'Bentuk yang tepat (conducting / conducted / is conducted / conducts)',
        steps: [
          'Subjek "research" tidak melakukan tindakan sendiri melainkan dilakukan/diteliti oleh universitas (makna pasif).',
          'Kalimat sudah memiliki kata kerja utama yaitu "yielded".',
          'Maka yang dibutuhkan adalah reduced adjective clause bermakna pasif (Past Participle / V3) yaitu "conducted" (asal kalimat: which was conducted).',
        ],
        solution: 'conducted (The scientific research conducted by the international university yielded...)'
      }
    ],
    quickTips: [
      'Waspada: Jika kalimat sudah ada verb utama (seperti yielded, resulted, is), jangan pilih verb penuh lagi agar tidak terjadi double-verb error!'
    ]
  },
  {
    id: 'bi5',
    title: 'Reading Comprehension & Critical Strategy',
    categoryTag: 'Reading & Analysis',
    summary: 'Strategi Skimming & Scanning, menentukan ide pokok (Main Idea), sikap penulis (Author’s Tone), kesimpulan tersirat (Inference), dan makna kata berdasarkan konteks (Contextual Meaning).',
    conceptExplanation: 'Membaca kritis untuk ujian tidak memerlukan penerjemahan kata demi kata, melainkan memahami struktur paragraf, kalimat topik (Topic Sentence), kata transisi, dan inti argumen yang disampaikan penulis.',
    keyPoints: [
      'Main Idea / Topic: Biasanya terletak di awal paragraf (deduktif) atau di akhir paragraf (induktif).',
      'Skimming: Membaca cepat untuk menangkap garis besar dan ide pokok dalam 30-60 detik.',
      'Scanning: Mencari informasi spesifik (angka, nama orang, tahun, istilah teknis) dengan menggerakkan mata secara cepat ke kata kunci.',
      'Transitional Words: Kontras (However, Although, On the contrary), Sebab-Akibat (Therefore, Consequently, Due to), Tambahan (Furthermore, In addition).',
      'Author\'s Tone: Objektif (informative, neutral), Kritis (critical, skeptical), Mendukung (supportive, optimistic).'
    ],
    stepByStepGuides: [
      {
        title: 'Langkah Taktis Menemukan Ide Pokok (Main Idea) Teks Panjang',
        description: 'Cara menjawab soal "What is the main idea of the passage?" tanpa membaca seluruh teks berulang kali.',
        steps: [
          'Baca 1-2 kalimat pertama dan kalimat terakhir pada Paragraf 1 untuk menemukan topik umum.',
          'Baca kalimat pertama pada setiap paragraf berikutnya untuk melihat perkembangan argumen.',
          'Cari kata atau sinonim yang paling sering diulang di seluruh bacaan (Keyword repetition).',
          'Eliminasi pilihan jawaban yang: (1) Terlalu sempit/hanya membahas 1 detail kecil (Too narrow), (2) Terlalu luas melampaui isi teks (Too broad), atau (3) Bertentangan dengan teks.'
        ],
        tips: 'Jawaban yang tepat untuk Main Idea harus merangkum SELURUH isi bacaan, bukan hanya paragraf tertentu.'
      }
    ],
    formulaDetails: [
      {
        title: 'Struktur Analisis Teks Akademik',
        formula: '\\text{Thesis Statement (Intro)} + \\text{Supporting Arguments (Body)} + \\text{Reiteration / Conclusion}',
        explanation: 'Pola baku Analytical & Hortatory Exposition yang sering diujikan.',
        variables: [
          { symbol: 'Thesis', meaning: 'Gagasan atau posisi utama penulis terhadap isu' },
          { symbol: 'Arguments', meaning: 'Bukti, data, dan alasan pendukung di paragraf isi' }
        ]
      }
    ],
    formulas: [
      '\\text{Main Idea} = \\text{Topic (Subject)} + \\text{Author\'s Point of View}',
      '\\text{Inference} = \\text{Text Clues} + \\text{Logical Reasoning}'
    ],
    examples: [
      {
        problem: 'Bagaimana cara menentukan arti kata sulit dalam kalimat: "The doctor prescribed a potent medicine that completely cured the stubborn infection within hours"?',
        given: 'Kata "potent", konteks: "completely cured the stubborn infection within hours"',
        questionTarget: 'Makna kata "potent"',
        steps: [
          'Lihat petunjuk konteks (context clues): obat tersebut berhasil menyembuhkan infeksi membandel hanya dalam hitungan beberapa jam.',
          'Secara logika, obat yang bekerja sangat cepat dan menyembuhkan penyakit membandel pasti memiliki khasiat yang sangat kuat / ampuh.',
          'Maka arti dari "potent" adalah powerful / effective (sangat kuat/berdaya guna).'
        ],
        solution: 'Potent = powerful / highly effective.'
      }
    ],
    quickTips: [
      'Soal "According to the passage, which of the following is NOT TRUE?" → Gunakan teknik Scanning kata kunci di setiap pilihan jawaban langsung ke dalam teks!',
      'Kata ekstrem seperti "always", "never", "only", "completely" di pilihan jawaban sering kali merupakan pilihan yang salah/jebakan.'
    ]
  }
];
