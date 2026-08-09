import { Topic } from '../types';

export const bahasaInggrisTopics: Topic[] = [
  {
    id: 'bi1',
    title: 'Basic Parts of Speech & Pronouns',
    categoryTag: 'Grammar Dasar',
    summary: 'Mengenal jenis kata dasar (Noun, Pronoun, Verb, Adjective) dan penggunaan kata ganti orang (Subject, Object, Possessive Pronouns).',
    conceptExplanation: 'Dalam bahasa Inggris, setiap kata memiliki peran (Part of Speech). Pronoun (kata ganti) digunakan untuk menggantikan kata benda (noun) agar tidak terjadi pengulangan kata yang berlebihan dalam suatu kalimat.',
    keyPoints: [
      'Subject Pronouns (Pelaku): I, You, They, We, He, She, It (diletakkan di awal kalimat/sebelum kata kerja).',
      'Object Pronouns (Penerima): Me, You, Them, Us, Him, Her, It (diletakkan setelah kata kerja atau preposisi).',
      'Possessive Adjectives (Kepemilikan): My, Your, Their, Our, His, Her, Its (diikuti kata benda, contoh: my book, his car).',
      'Noun (Kata Benda): Orang, tempat, atau benda (contoh: teacher, school, book).',
      'Adjective (Kata Sifat): Menerangkan kata benda (contoh: big, smart, beautiful, red).'
    ],
    stepByStepGuides: [
      {
        title: 'Tabel Perubahan Pronoun (Kata Ganti)',
        description: 'Panduan menghafal dan membedakan posisi pronoun dalam kalimat.',
        steps: [
          'Subject: I -> Object: Me -> Possessive: My (My bag).',
          'Subject: You -> Object: You -> Possessive: Your (Your phone).',
          'Subject: They -> Object: Them -> Possessive: Their (Their house).',
          'Subject: We -> Object: Us -> Possessive: Our (Our classroom).',
          'Subject: He -> Object: Him -> Possessive: His (His bicycle).',
          'Subject: She -> Object: Her -> Possessive: Her (Her dress).',
          'Subject: It -> Object: It -> Possessive: Its (Its tail).'
        ],
        tips: 'Contoh: "She (Subject) loves him (Object), and this is her (Possessive) house."'
      }
    ],
    formulaDetails: [
      {
        title: 'Susunan Kalimat Dasar (SPO)',
        formula: '\\text{Subject} + \\text{Verb} + \\text{Object}',
        explanation: 'Pola kalimat dasar bahasa Inggris menempatkan subjek di awal, diikuti kata kerja, lalu objek sasaran.',
        variables: [
          { symbol: 'Subject', meaning: 'Pelaku aksi (I, You, He, She, dsb.)' },
          { symbol: 'Verb', meaning: 'Kata kerja tindakan (read, write, eat, dsb.)' },
          { symbol: 'Object', meaning: 'Objek yang dikenai tindakan' }
        ]
      }
    ],
    formulas: [
      '\\text{Subject Pronoun} + \\text{Verb} + \\text{Object Pronoun}',
      '\\text{Possessive Adjective} + \\text{Noun}'
    ],
    examples: [
      {
        problem: 'Lengkapi kalimat: "Budi and Andi are brothers. ____ mother is very kind to ____."',
        given: 'Dua nama laki-laki jamak (Budi and Andi).',
        questionTarget: 'Possessive Adjective dan Object Pronoun yang tepat',
        steps: [
          'Budi and Andi adalah orang ketiga jamak ("They").',
          'Kata kepemilikan untuk "They" sebelum kata "mother" adalah "Their".',
          'Kata ganti objek setelah preposisi "to" untuk "They" adalah "them".'
        ],
        solution: '"Their mother is very kind to them."'
      }
    ],
    quickTips: [
      'Gunakan Subject Pronoun di depan Verb, dan Object Pronoun di belakang Verb!',
      'Bedakan "It\'s" (singkatan dari It is) dengan "Its" (kata ganti kepemilikan tanpa tanda petik)!'
    ]
  },
  {
    id: 'bi2',
    title: 'To Be (Am, Is, Are) & Simple Present Tense',
    categoryTag: 'Tenses Dasar',
    summary: 'Penggunaan to be pada kalimat nominal serta pola kalimat Simple Present Tense untuk kebiasaan dan fakta umum sehari-hari.',
    conceptExplanation: 'Simple Present Tense digunakan untuk menyatakan fakta umum (general facts), kebiasaan (daily habits), dan rutinitas. Untuk kalimat tanpa kata kerja aksi, gunakan To Be (Am / Is / Are).',
    keyPoints: [
      'Penggunaan To Be: I am; He/She/It is; You/We/They are.',
      'Kalimat Nominal (+): Subject + To Be (am/is/are) + Adjective/Noun/Adverb.',
      'Kalimat Verbal (+): Subject + Verb 1 (-s/-es untuk He/She/It) + Object.',
      'Kalimat Negatif (-): Subject + do not / does not + Verb 1 asli.',
      'Time Signals: always, usually, often, sometimes, everyday, every morning.'
    ],
    stepByStepGuides: [
      {
        title: 'Aturan Penambahan -s/-es pada Kata Kerja',
        description: 'Khusus untuk Subjek Tunggal (He, She, It) pada kalimat positif.',
        steps: [
          'Umumnya kata kerja langsung ditambah "-s" (play → plays, read → reads, write → writes).',
          'Kata kerja berakhiran -ch, -sh, -s, -x, -o ditambah "-es" (watch → watches, wash → washes, go → goes, fix → fixes).',
          'Kata kerja berakhiran huruf konsonan + y: ubah "y" menjadi "i" lalu tambah "-es" (study → studies, fly → flies).',
          'Jika berakhiran huruf vokal + y: cukup tambah "-s" (play → plays, buy → buys).'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus Simple Present Verbal',
        formula: '(+) \\ S + V_1(s/es) + O \\quad | \\quad (-) \\ S + \\text{do/does not} + V_1 + O \\quad | \\quad (?) \\ \\text{Do/Does} + S + V_1 + O?',
        explanation: 'Gunakan "does" untuk subjek He/She/It dan "do" untuk I/You/We/They.',
        variables: [
          { symbol: 'V1', meaning: 'Infinitive / Kata kerja bentuk pertama' },
          { symbol: 'Does', meaning: 'Auxiliary verb untuk He, She, It' },
          { symbol: 'Do', meaning: 'Auxiliary verb untuk I, You, We, They' }
        ]
      }
    ],
    formulas: [
      '\\text{Nominal: } S + \\text{am/is/are} + \\text{Noun/Adj}',
      '\\text{Verbal (+): } S + V_1(s/es) + O',
      '\\text{Verbal (-): } S + \\text{do/does not} + V_1 + O'
    ],
    examples: [
      {
        problem: 'Ubah kalimat berikut menjadi bentuk negatif dan tanya: "Rina drinks milk every morning."',
        given: 'Kalimat positif dengan subjek Rina (She) dan verb "drinks".',
        questionTarget: 'Bentuk negatif (-) dan bentuk interogatif (?)',
        steps: [
          'Subjek "Rina" (She) menggunakan kata bantu "does".',
          'Pada kalimat negatif, tambahkan "does not" dan kata kerja kembali ke bentuk dasar "drink": "Rina does not drink milk every morning."',
          'Pada kalimat tanya, letakkan "Does" di awal: "Does Rina drink milk every morning?"'
        ],
        solution: 'Negatif: "Rina does not drink milk every morning." | Tanya: "Does Rina drink milk every morning?"'
      }
    ],
    quickTips: [
      'Jika sudah ada kata "does" atau "doesn\'t", akhiran -s/-es pada kata kerja harus HILANG (kembali ke V1 murni)!',
      'I am, He is, She is, It is, You are, We are, They are.'
    ]
  },
  {
    id: 'bi3',
    title: 'Present Continuous & Simple Past Tense',
    categoryTag: 'Tenses',
    summary: 'Membedakan peristiwa yang sedang berlangsung sekarang (Present Continuous) dengan peristiwa yang sudah selesai di masa lalu (Simple Past).',
    conceptExplanation: 'Present Continuous (am/is/are + V-ing) menyatakan hal yang sedang terjadi sekarang (now, at the moment). Simple Past Tense (V2 / did) menyatakan aktivitas yang telah terjadi dan selesai di masa lampau (yesterday, last night, two days ago).',
    keyPoints: [
      'Present Continuous: Subject + am/is/are + Verb-ing. Contoh: "I am studying English right now."',
      'Simple Past: Subject + Verb 2 + Object. Contoh: "I studied English yesterday."',
      'Regular Verbs (Beraturan): Cukup ditambah -ed/-d (play → played, watch → watched, clean → cleaned).',
      'Irregular Verbs (Tidak Beraturan): Mengalami perubahan bentuk (go → went, eat → ate, buy → bought, see → saw).',
      'Simple Past Negative: Subject + did not + Verb 1 (kembali ke bentuk awal).'
    ],
    stepByStepGuides: [
      {
        title: 'Daftar Kata Kerja Tidak Beraturan (Irregular Verbs) Populer',
        description: 'Bentuk perubahan Verb 1 menjadi Verb 2 yang sering keluar di ujian dasar.',
        steps: [
          'Go → Went (Pergi)',
          'Eat → Ate (Makan)',
          'Drink → Drank (Minum)',
          'Buy → Bought (Membeli)',
          'See → Saw (Melihat)',
          'Write → Wrote (Menulis)',
          'Make → Made (Membuat)'
        ],
        tips: 'Pada kalimat negatif lampau: "He didn\'t went" SALAH! Yang benar: "He didn\'t go".'
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus Present Continuous vs Simple Past',
        formula: '\\text{Continuous: } S + \\text{am/is/are} + V_{\\text{ing}} \\quad ; \\quad \\text{Past: } S + V_2',
        explanation: 'Continuous memakai be + ing untuk aksi sekarang; Past memakai bentuk lampau V2.',
        variables: [
          { symbol: 'V-ing', meaning: 'Verb + ing (sedang dilakukan)' },
          { symbol: 'V2', meaning: 'Bentuk lampau kata kerja' }
        ]
      }
    ],
    formulas: [
      '\\text{Present Continuous: } S + \\text{am/is/are} + V_{\\text{ing}} + O',
      '\\text{Simple Past (+): } S + V_2 + O',
      '\\text{Simple Past (-): } S + \\text{did not} + V_1 + O'
    ],
    examples: [
      {
        problem: 'Lengkapi kalimat: "Look! The baby ____ (sleep) in the cradle right now."',
        given: 'Tanda waktu "right now" dan kata seru "Look!" menandakan aksi sedang berlangsung.',
        questionTarget: 'Bentuk kata kerja yang tepat',
        steps: [
          'Subjek "The baby" adalah tunggal (singular), sehingga memakai to be "is".',
          'Kata kerja "sleep" diubah menjadi bentuk V-ing: "sleeping".'
        ],
        solution: '"Look! The baby is sleeping in the cradle right now."'
      }
    ],
    quickTips: [
      'Kata kunci Present Continuous: now, right now, look!, listen!, at present.',
      'Kata kunci Simple Past: yesterday, last week, last month, ago (misal: 2 days ago), in 2020.'
    ]
  },
  {
    id: 'bi4',
    title: 'Essential Vocabulary & Everyday Expressions',
    categoryTag: 'Kosakata & Ungkapan',
    summary: 'Kumpulan kosakata esensial: sapaan (greetings), anggota keluarga, angka, waktu/jam, warna, serta ungkapan terima kasih dan meminta maaf.',
    conceptExplanation: 'Menguasai kosakata dasar dan ungkapan situasional sehari-hari sangat penting untuk membangun fondasi komunikasi bahasa Inggris yang lancar dan percaya diri.',
    keyPoints: [
      'Greetings: Good morning (pagi), Good afternoon (siang/sore), Good evening (malam), Good night (selamat tidur/perpisahan malam).',
      'Gratitude & Apology: Thank you (Terima kasih) → You\'re welcome (Sama-sama); I am sorry (Maaf) → That\'s alright / No problem (Tidak apa-apa).',
      'Family Members: Father (Ayah), Mother (Ibu), Brother (Saudara laki-laki), Sister (Saudara perempuan), Grandfather (Kakek), Grandmother (Nenek), Uncle (Paman), Aunt (Bibi).',
      'Telling Time: O\'clock (tepat), Past (lewat), To (kurang), Half (setengah/30 menit), Quarter (seperempat/15 menit).'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Membaca Jam (Telling the Time)',
        description: 'Dua cara mudah membaca jam dalam bahasa Inggris.',
        steps: [
          'Cara 1 (Sederhana): Sebutkan jam lalu menitnya. Contoh: 07:15 = "Seven fifteen", 08:30 = "Eight thirty".',
          'Cara 2 (Tradisional): Sebutkan menit dulu lalu jamnya menggunakan Past atau To.',
          '07:15 = "A quarter past seven" (lewat 15 menit).',
          '07:30 = "Half past seven" (lewat 30 menit).',
          '07:45 = "A quarter to eight" (15 menit menuju jam delapan).'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Format Menyatakan Waktu',
        formula: '\\text{It is} + \\text{minute} + \\text{past/to} + \\text{hour}',
        explanation: 'Pola tradisional membaca jam dalam percakapan formal bahasa Inggris.',
        variables: [
          { symbol: 'past', meaning: 'Lewat (menit 01-30)' },
          { symbol: 'to', meaning: 'Kurang menuju jam berikutnya (menit 31-59)' }
        ]
      }
    ],
    formulas: [
      '\\text{It is } [\\text{Hour}] : [\\text{Minute}]',
      '\\text{It is } [\\text{Minute}] + \\text{past/to} + [\\text{Hour}]'
    ],
    examples: [
      {
        problem: 'Bagaimana cara menyebut jam "09:45" dalam bahasa Inggris tradisional?',
        given: 'Jam 09:45 (kurang 15 menit menuju jam 10).',
        questionTarget: 'Penyebutan waktu',
        steps: [
          '15 menit disebut "a quarter".',
          'Karena sudah melewati menit 30, kita gunakan "to" menuju jam berikutnya (jam 10).',
          'Sehingga tersusun: "A quarter to ten".'
        ],
        solution: '"It is a quarter to ten."'
      }
    ],
    quickTips: [
      'AM = Pukul 00.00 malam s.d. 11.59 siang ; PM = Pukul 12.00 siang s.d. 23.59 malam.',
      'Antara "Brother" dan "Sister", gunakan "Older" untuk kakak dan "Younger" untuk adik.'
    ]
  },
  {
    id: 'bi5',
    title: 'Basic Reading & WH-Questions',
    categoryTag: 'Reading & Tanya Jawab',
    summary: 'Memahami cara membuat pertanyaan 5W1H (What, Where, When, Who, Why, How) dan teknik memahami teks deskriptif pendek.',
    conceptExplanation: 'WH-Questions digunakan untuk mencari informasi spesifik. Mengidentifikasi kata tanya adalah kunci tercepat untuk menemukan jawaban pada soal bacaan (Reading Comprehension).',
    keyPoints: [
      'What (Apa): Menanyakan benda, tindakan, atau aktivitas.',
      'Where (Di mana): Menanyakan tempat atau lokasi.',
      'When (Kapan): Menanyakan waktu kejadian.',
      'Who (Siapa): Menanyakan orang atau pelaku.',
      'Why (Mengapa): Menanyakan alasan atau sebab (biasanya dijawab dengan "Because...").',
      'How (Bagaimana / Berapa): Menanyakan cara, keadaan, atau kuantitas (How many / How much).'
    ],
    stepByStepGuides: [
      {
        title: 'Teknik Scanning untuk Menjawab Soal Bacaan',
        description: 'Cara cepat menemukan jawaban tanpa membaca seluruh teks berulang kali.',
        steps: [
          'Baca soal terlebih dahulu dan tandai kata tanya (What/Where/When/Who/Why) serta kata kunci.',
          'Lakukan scanning (gerakkan mata cepat melintasi teks) untuk mencari kata kunci tersebut.',
          'Baca 1 kalimat sebelum dan 1 kalimat sesudah kata kunci untuk mendapatkan jawaban lengkap.'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Pola Pertanyaan WH-Question',
        formula: '\\text{WH-Word} + \\text{Auxiliary (do/does/is/are/did)} + \\text{Subject} + \\text{Verb}?',
        explanation: 'Kata tanya selalu diletakkan di posisi paling awal kalimat tanya.',
        variables: [
          { symbol: 'WH-Word', meaning: 'What, Where, When, Who, Why, How' },
          { symbol: 'Auxiliary', meaning: 'Kata bantu kerja sesuai tenses' }
        ]
      }
    ],
    formulas: [
      '\\text{WH-Word} + \\text{is/am/are} + \\text{Subject} + \\dots ?',
      '\\text{WH-Word} + \\text{do/does/did} + \\text{Subject} + V_1 + \\dots ?'
    ],
    examples: [
      {
        problem: 'Baca teks singkat berikut: "Budi goes to school by bicycle every morning because his house is close to the school."\\nPertanyaan: Why does Budi go to school by bicycle?',
        given: 'Teks deskripsi alasan Budi naik sepeda.',
        questionTarget: 'Alasan tindakan ("Why")',
        steps: [
          'Kata tanya "Why" menanyakan alasan (reason).',
          'Cari kata hubung "because" pada teks.',
          'Pada teks tertulis: "because his house is close to the school".'
        ],
        solution: 'Because his house is close to the school.'
      }
    ],
    quickTips: [
      'Pertanyaan "How many" untuk benda yang bisa dihitung (countable), sedangkan "How much" untuk benda tak bisa dihitung (uncountable) atau harga!',
      'Pertanyaan "Who" menanyakan subjek pelaku orang, "Where" menanyakan tempat.'
    ]
  }
];
