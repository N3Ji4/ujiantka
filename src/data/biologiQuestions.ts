import { Question } from '../types';

export const biologiQuestions: Question[] = [
  {
    id: 'bq-1',
    subjectId: 'biologi',
    topicTag: 'Biologi Sel',
    difficulty: 'Mudah',
    question: 'Organel sel yang dijuluki sebagai "pembangkit tenaga" (powerhouse) sel karena menghasilkan energi ATP adalah...',
    options: [
      { id: 'A', text: 'Ribosom' },
      { id: 'B', text: 'Mitokondria' },
      { id: 'C', text: 'Retikulum Endoplasma' },
      { id: 'D', text: 'Badan Golgi' }
    ],
    correctAnswer: 'B',
    explanation: 'Mitokondria menghasilkan ATP melalui respirasi seluler.'
  },
  {
    id: 'bq-2',
    subjectId: 'biologi',
    topicTag: 'Biologi Sel',
    difficulty: 'Sedang',
    question: 'Perbedaan utama antara sel tumbuhan dan sel hewan adalah keberadaan...',
    options: [
      { id: 'A', text: 'Membran plasma pada sel hewan' },
      { id: 'B', text: 'Dinding sel dan kloroplas pada sel tumbuhan' },
      { id: 'C', text: 'Mitokondria pada sel tumbuhan' },
      { id: 'D', text: 'Nukleus pada sel hewan' }
    ],
    correctAnswer: 'B',
    explanation: 'Sel tumbuhan memiliki dinding sel dari selulosa dan plastida/kloroplas, sedangkan sel hewan tidak memilikinya.'
  },
  {
    id: 'bq-3',
    subjectId: 'biologi',
    topicTag: 'Metabolisme Sel',
    difficulty: 'Sedang',
    question: 'Enzim bekerja dengan cara menurunkan energi aktivasi dalam suatu reaksi kimia. Sifat enzim yang spesifik berarti...',
    options: [
      { id: 'A', text: 'Dapat digunakan berkali-kali' },
      { id: 'B', text: 'Hanya bekerja pada satu jenis substrat tertentu' },
      { id: 'C', text: 'Rusak pada suhu tinggi' },
      { id: 'D', text: 'Dipengaruhi oleh pH' }
    ],
    correctAnswer: 'B',
    explanation: 'Sifat spesifik enzim berarti satu jenis enzim hanya mengkatalisis satu reaksi atau substrat tertentu (seperti kunci dan gembok).'
  },
  {
    id: 'bq-4',
    subjectId: 'biologi',
    topicTag: 'Fotosintesis',
    difficulty: 'Sedang',
    question: 'Reaksi terang pada proses fotosintesis yang berlangsung di tilakoid menghasilkan...',
    options: [
      { id: 'A', text: 'Glukosa dan oksigen' },
      { id: 'B', text: 'ATP, NADPH, dan Oksigen (O2)' },
      { id: 'C', text: 'CO2 dan air' },
      { id: 'D', text: 'Amilum dan air' }
    ],
    correctAnswer: 'B',
    explanation: 'Reaksi terang menghasilkan energi ATP, NADPH, dan memecah air (fotolisis) menghasilkan oksigen.'
  },
  {
    id: 'bq-5',
    subjectId: 'biologi',
    topicTag: 'Genetika',
    difficulty: 'Sedang',
    question: 'Pasangan basa nitrogen yang tepat pada rantai ganda DNA adalah...',
    options: [
      { id: 'A', text: 'Adenin berpasangan dengan Sitosin' },
      { id: 'B', text: 'Adenin berpasangan dengan Timin, Guanin dengan Sitosin' },
      { id: 'C', text: 'Guanin berpasangan dengan Timin' },
      { id: 'D', text: 'Urasil berpasangan dengan Timin' }
    ],
    correctAnswer: 'B',
    explanation: 'Aturan Chargaff: A selalu berpasangan dengan T (dua ikatan hidrogen), dan G dengan C (tiga ikatan hidrogen).'
  },
  {
    id: 'bq-6',
    subjectId: 'biologi',
    topicTag: 'Pembelahan Sel',
    difficulty: 'Sedang',
    question: 'Pembelahan sel yang menghasilkan dua sel anak yang bersifat identik dengan sel induk (diploid) adalah...',
    options: [
      { id: 'A', text: 'Mitosis' },
      { id: 'B', text: 'Meiosis' },
      { id: 'C', text: 'Amitosis' },
      { id: 'D', text: 'Fertilisasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Mitosis terjadi pada sel somatik untuk pertumbuhan dan regenerasi, menghasilkan 2 sel anak diploid identik.'
  },
  {
    id: 'bq-7',
    subjectId: 'biologi',
    topicTag: 'Hukum Mendel',
    difficulty: 'Sedang',
    question: 'Persilangan monohibrid antara kacang ercis berbatang tinggi (TT) dengan berbatang pendek (tt) menghasilkan F1 seluruhnya tinggi (Tt). Jika sesama F1 disilangkan, perbandingan fenotip F2 adalah...',
    options: [
      { id: 'A', text: '1 Tinggi : 1 Pendek' },
      { id: 'B', text: '3 Tinggi : 1 Pendek' },
      { id: 'C', text: '9 : 3 : 3 : 1' },
      { id: 'D', text: 'Semua tinggi' }
    ],
    correctAnswer: 'B',
    explanation: 'Persilangan Tt x Tt menghasilkan keturunan TT, Tt, Tt, tt. Perbandingan fenotip 3 Tinggi : 1 Pendek.'
  },
  {
    id: 'bq-8',
    subjectId: 'biologi',
    topicTag: 'Sistem Pernapasan',
    difficulty: 'Mudah',
    question: 'Pertukaran gas oksigen dan karbon dioksida di dalam paru-paru manusia terjadi secara difusi pada bagian...',
    options: [
      { id: 'A', text: 'Bronkus' },
      { id: 'B', text: 'Trakea' },
      { id: 'C', text: 'Alveolus' },
      { id: 'D', text: 'Laring' }
    ],
    correctAnswer: 'C',
    explanation: 'Alveolus adalah kantung udara kecil di paru-paru yang dikelilingi kapiler darah tempat terjadinya difusi gas.'
  },
  {
    id: 'bq-9',
    subjectId: 'biologi',
    topicTag: 'Sistem Peredaran Darah',
    difficulty: 'Sedang',
    question: 'Pembuluh darah yang membawa darah kaya oksigen dari paru-paru menuju serambi kiri jantung adalah...',
    options: [
      { id: 'A', text: 'Vena kava' },
      { id: 'B', text: 'Arteri pulmonalis' },
      { id: 'C', text: 'Vena pulmonalis' },
      { id: 'D', text: 'Aorta' }
    ],
    correctAnswer: 'C',
    explanation: 'Vena pulmonalis adalah satu-satunya vena yang kaya oksigen, mengalirkan darah dari paru-paru ke serambi kiri jantung.'
  },
  {
    id: 'bq-10',
    subjectId: 'biologi',
    topicTag: 'Sistem Ekskresi',
    difficulty: 'Sedang',
    question: 'Proses penyaringan darah (filtrasi) di dalam ginjal terjadi pada bagian...',
    options: [
      { id: 'A', text: 'Tubulus kontortus proksimal' },
      { id: 'B', text: 'Glomerulus dan kapsul Bowman' },
      { id: 'C', text: 'Lengkung Henle' },
      { id: 'D', text: 'Tubulus kolektivus' }
    ],
    correctAnswer: 'B',
    explanation: 'Filtrasi darah terjadi di badan Malpighi yang terdiri atas glomerulus dan kapsul Bowman, menghasilkan urine primer.'
  },
  {
    id: 'bq-11',
    subjectId: 'biologi',
    topicTag: 'Sistem Saraf',
    difficulty: 'Sedang',
    question: 'Bagian sel saraf (neuron) yang berfungsi menghantarkan impuls menjauhi badan sel ke neuron lain adalah...',
    options: [
      { id: 'A', text: 'Dendrit' },
      { id: 'B', text: 'Akson (Neurit)' },
      { id: 'C', text: 'Nodus Ranvier' },
      { id: 'D', text: 'Sel Schwann' }
    ],
    correctAnswer: 'B',
    explanation: 'Akson menghantarkan impuls listrik keluar dari badan sel saraf.'
  },
  {
    id: 'bq-12',
    subjectId: 'biologi',
    topicTag: 'Sistem Imun',
    difficulty: 'Sedang',
    question: 'Protein khusus yang dihasilkan oleh sistem kekebalan tubuh untuk mengenali dan mengikat antigen asing disebut...',
    options: [
      { id: 'A', text: 'Antibodi' },
      { id: 'B', text: 'Hormon' },
      { id: 'C', text: 'Hemoglobin' },
      { id: 'D', text: 'Enzim' }
    ],
    correctAnswer: 'A',
    explanation: 'Antibodi (imunoglobulin) diproduksi oleh limfosit B untuk menetralkan antigen (patogen, bakteri, virus).'
  },
  {
    id: 'bq-13',
    subjectId: 'biologi',
    topicTag: 'Ekologi',
    difficulty: 'Mudah',
    question: 'Hubungan timbal balik antara makhluk hidup dengan lingkungan tempat tinggalnya dipelajari dalam cabang ilmu...',
    options: [
      { id: 'A', text: 'Anatomi' },
      { id: 'B', text: 'Ekologi' },
      { id: 'C', text: 'Taksonomi' },
      { id: 'D', text: 'Fisiologi' }
    ],
    correctAnswer: 'B',
    explanation: 'Ekologi adalah ilmu yang mempelajari interaksi antarorganisme dan lingkungannya.'
  },
  {
    id: 'bq-14',
    subjectId: 'biologi',
    topicTag: 'Evolusi',
    difficulty: 'Sedang',
    question: 'Teori evolusi yang menyatakan bahwa jerapah berleher panjang berasal dari nenek moyang berleher pendek yang meregangkan lehernya dikemukakan oleh...',
    options: [
      { id: 'A', text: 'Charles Darwin' },
      { id: 'B', text: 'Jean Baptiste de Lamarck' },
      { id: 'C', text: 'Alfred Russel Wallace' },
      { id: 'D', text: 'Gregor Mendel' }
    ],
    correctAnswer: 'B',
    explanation: 'Lamarck terkenal dengan teori pewarisan sifat karakteristik yang diperoleh (acquired characters), seperti jerapah berleher panjang karena sering diregangkan.'
  },
  {
    id: 'bq-15',
    subjectId: 'biologi',
    topicTag: 'Bioteknologi',
    difficulty: 'Sedang',
    question: 'Mikroorganisme yang berperan dalam pembuatan yogurt dari susu melalui fermentasi asam laktat adalah...',
    options: [
      { id: 'A', text: 'Saccharomyces cerevisiae' },
      { id: 'B', text: 'Lactobacillus bulgaricus' },
      { id: 'C', text: 'Rhizopus oryzae' },
      { id: 'D', text: 'Acetobacter xylinum' }
    ],
    correctAnswer: 'B',
    explanation: 'Lactobacillus bulgaricus dan Streptococcus thermophilus memfermentasi laktosa susu menjadi asam laktat pada pembuatan yogurt.'
  },
  {
    id: 'bq-16',
    subjectId: 'biologi',
    topicTag: 'Anatomi Tumbuhan',
    difficulty: 'Sedang',
    question: 'Jaringan pada tumbuhan yang berfungsi mengangkut air dan mineral dari akar ke daun adalah...',
    options: [
      { id: 'A', text: 'Floem' },
      { id: 'B', text: 'Xilem' },
      { id: 'C', text: 'Kambium' },
      { id: 'D', text: 'Kolenkim' }
    ],
    correctAnswer: 'B',
    explanation: 'Xilem (pembuluh kayu) mengangkut air dan mineral dari akar ke seluruh bagian tumbuhan.'
  },
  {
    id: 'bq-17',
    subjectId: 'biologi',
    topicTag: 'Hormon Tumbuhan',
    difficulty: 'Sedang',
    question: 'Hormon tumbuhan (fitohormon) yang berperan merangsang pemanjangan sel, pembentukan buah, dan dominansi apikal adalah...',
    options: [
      { id: 'A', text: 'Auksin' },
      { id: 'B', text: 'Etilena' },
      { id: 'C', text: 'Giberelin' },
      { id: 'D', text: 'Asam absisat' }
    ],
    correctAnswer: 'A',
    explanation: 'Auksin adalah hormon utama pengatur pertumbuhan ujung batang dan pemanjangan sel.'
  },
  {
    id: 'bq-18',
    subjectId: 'biologi',
    topicTag: 'Sistem Endokrin',
    difficulty: 'Sedang',
    question: 'Kelenjar endokrin yang dijuluki sebagai "master gland" karena mengontrol aktivitas kelenjar endokrin lainnya adalah...',
    options: [
      { id: 'A', text: 'Kelenjar tiroid' },
      { id: 'B', text: 'Kelenjar hipofisis (pituitari)' },
      { id: 'C', text: 'Kelenjar adrenal' },
      { id: 'D', text: 'Pankreas' }
    ],
    correctAnswer: 'B',
    explanation: 'Kelenjar hipofisis menghasilkan hormon yang merangsang kelenjar tiroid, adrenal, dan reproduksi.'
  },
  {
    id: 'bq-19',
    subjectId: 'biologi',
    topicTag: 'Sistem Gerak',
    difficulty: 'Mudah',
    question: 'Hubungan antar tulang yang tidak memungkinkan terjadinya gerakan sama sekali (seperti pada tulang tengkorak) disebut sendi...',
    options: [
      { id: 'A', text: 'Diartrosis' },
      { id: 'B', text: 'Amfiartrosis' },
      { id: 'C', text: 'Sinartrosis (Sutura)' },
      { id: 'D', text: 'Sendi peluru' }
    ],
    correctAnswer: 'C',
    explanation: 'Sinartrosis adalah sendi mati yang tidak memungkinkan gerakan antar tulang tengkorak.'
  },
  {
    id: 'bq-20',
    subjectId: 'biologi',
    topicTag: 'Genetika Molekuler',
    difficulty: 'Sulit',
    question: 'Proses pencetakan atau pembentukan molekul RNA duta (mRNA) dari cetakan DNA di dalam nukleus disebut...',
    options: [
      { id: 'A', text: 'Translasi' },
      { id: 'B', text: 'Transkripsi' },
      { id: 'C', text: 'Replikasi' },
      { id: 'D', text: 'Mutasi' }
    ],
    correctAnswer: 'B',
    explanation: 'Transkripsi adalah sintesis mRNA dari DNA template di nukleus, sedangkan translasi penerjemahan mRNA menjadi protein di ribosom.'
  },
  {
    id: 'bq-21',
    subjectId: 'biologi',
    topicTag: 'Bioteknologi Modern',
    difficulty: 'Sulit',
    question: 'Teknik kloning yang menghasilkan domba Dolly melibatkan transfer nukleus sel somatik ke dalam...',
    options: [
      { id: 'A', text: 'Sel sperma' },
      { id: 'B', text: 'Sel telur (ovum) yang telah dienyahkan nukleusnya' },
      { id: 'C', text: 'Zigot' },
      { id: 'D', text: 'Sel punca sumsum' }
    ],
    correctAnswer: 'B',
    explanation: 'Kloning domba Dolly dilakukan dengan memasukkan inti sel somatik kelenjar mamae ke dalam ovum tanpa inti.'
  },
  {
    id: 'bq-22',
    subjectId: 'biologi',
    topicTag: 'Mikrobiologi',
    difficulty: 'Sedang',
    question: 'Virus tidak dapat dikategorikan sebagai makhluk hidup seutuhnya karena...',
    options: [
      { id: 'A', text: 'Tidak memiliki materi genetik' },
      { id: 'B', text: 'Tidak memiliki sel dan hanya dapat bereproduksi di dalam sel inang' },
      { id: 'C', text: 'Ukurannya sangat besar' },
      { id: 'D', text: 'Bersifat multiseluler' }
    ],
    correctAnswer: 'B',
    explanation: 'Virus bersifat aseluler (tidak bermembran sel) dan memerlukan sel inang hidup untuk memperbanyak diri.'
  },
  {
    id: 'bq-23',
    subjectId: 'biologi',
    topicTag: 'Ekosistem',
    difficulty: 'Sedang',
    question: 'Organisme yang menduduki tingkat trofik pertama (produsen) dalam rantai makanan ekosistem darat adalah...',
    options: [
      { id: 'A', text: 'Herbivora' },
      { id: 'B', text: 'Karnivora puncak' },
      { id: 'C', text: 'Tumbuhan hijau' },
      { id: 'D', text: 'Bakteri pengurai' }
    ],
    correctAnswer: 'C',
    explanation: 'Tumbuhan hijau adalah produsen autotrof yang menghasilkan makanan sendiri melalui fotosintesis.'
  },
  {
    id: 'bq-24',
    subjectId: 'biologi',
    topicTag: 'Evolusi',
    difficulty: 'Sulit',
    question: 'Contoh organ homolog yang menunjukkan kesamaan struktur asal meskipun fungsi berbeda adalah...',
    options: [
      { id: 'A', text: 'Sayap burung dan sayap serangga' },
      { id: 'B', text: 'Sayap kelelawar dan tangan manusia' },
      { id: 'C', text: 'Kaki depan kuda dan sirip ikan' },
      { id: 'D', text: 'Mata manusia dan mata gurita' }
    ],
    correctAnswer: 'B',
    explanation: 'Organ homolog memiliki struktur dasar embriologis yang sama (seperti lengan manusia dan sayap kelelawar) meskipun fungsinya berbeda.'
  },
  {
    id: 'bq-25',
    subjectId: 'biologi',
    topicTag: 'Metabolisme',
    difficulty: 'Sulit',
    question: 'Hasil akhir dari proses glikolisis 1 molekul glukosa pada respirasi aerob adalah...',
    options: [
      { id: 'A', text: '2 Asam piruvat, 2 ATP, dan 2 NADH' },
      { id: 'B', text: '6 CO2 dan 6 H2O' },
      { id: 'C', text: 'Etanol dan CO2' },
      { id: 'D', text: 'Asam laktat dan 38 ATP' }
    ],
    correctAnswer: 'A',
    explanation: 'Glikolisis mengubah 1 glukosa menjadi 2 asam piruvat, 2 ATP, dan 2 NADH di sitoplasma.'
  },
  {
    id: 'bq-26',
    subjectId: 'biologi',
    topicTag: 'Genetika Populasi',
    difficulty: 'Sulit',
    question: 'Dalam hukum Hardy-Weinberg, jika frekuensi alel dominan p = 0.7, frekuensi individu heterozigot (2pq) dalam populasi adalah...',
    options: [
      { id: 'A', text: '0.09' },
      { id: 'B', text: '0.21' },
      { id: 'C', text: '0.42' },
      { id: 'D', text: '0.49' }
    ],
    correctAnswer: 'C',
    explanation: 'p + q = 1 => q = 1 - 0.7 = 0.3. Heterozigot = 2pq = 2 * 0.7 * 0.3 = 0.42.'
  },
  {
    id: 'bq-27',
    subjectId: 'biologi',
    topicTag: 'Imunologi',
    difficulty: 'Sedang',
    question: 'Pemberian vaksin kepada seseorang bertujuan untuk memperoleh kekebalan tubuh...',
    options: [
      { id: 'A', text: 'Pasif alami' },
      { id: 'B', text: 'Aktif buatan' },
      { id: 'C', text: 'Pasif buatan' },
      { id: 'D', text: 'Bawaan lahir' }
    ],
    correctAnswer: 'B',
    explanation: 'Vaksin berisi patogen yang dilemahkan untuk merangsang tubuh membentuk antibodi sendiri secara aktif (aktif buatan).'
  },
  {
    id: 'bq-28',
    subjectId: 'biologi',
    topicTag: 'Fisiologi Tumbuhan',
    difficulty: 'Sedang',
    question: 'Naiknya air dari akar ke daun tumbuhan tinggi didorong oleh daya isap daun yang disebabkan oleh proses...',
    options: [
      { id: 'A', text: 'Transpirasi' },
      { id: 'B', text: 'Gutasi' },
      { id: 'C', text: 'Fotosintesis' },
      { id: 'D', text: 'Respirasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Transpirasi (penguapan air melalui stomata daun) menciptakan tekanan negatif yang menarik air ke atas melalui xilem.'
  },
  {
    id: 'bq-29',
    subjectId: 'biologi',
    topicTag: 'Anatomi Hewan',
    difficulty: 'Sedang',
    question: 'Lambung ruminansia (hewan memamah biak seperti sapi) yang berfungsi sebagai tempat pencernaan makanan secara enzimatis oleh getah lambung (perut sejati) adalah...',
    options: [
      { id: 'A', text: 'Rumen' },
      { id: 'B', text: 'Retikulum' },
      { id: 'C', text: 'Omasum' },
      { id: 'D', text: 'Abomasum' }
    ],
    correctAnswer: 'D',
    explanation: 'Abomasum adalah perut sejati tempat pencernaan makanan oleh enzim pencernaan mirip lambung monogastrik.'
  },
  {
    id: 'bq-30',
    subjectId: 'biologi',
    topicTag: 'Sistem Reproduksi',
    difficulty: 'Sedang',
    question: 'Hormon yang memicu ovulasi (pelepasan sel telur dari ovarium) pada siklus menstruasi wanita adalah...',
    options: [
      { id: 'A', text: 'FSH (Follicle Stimulating Hormone)' },
      { id: 'B', text: 'LH (Luteinizing Hormone)' },
      { id: 'C', text: 'Estrogen' },
      { id: 'D', text: 'Progesteron' }
    ],
    correctAnswer: 'B',
    explanation: 'Lonjakan kadar LH (LH surge) di pertengahan siklus memicu pecahnya folikel dan ovulasi.'
  }
];
