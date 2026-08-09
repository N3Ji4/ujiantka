import { Question } from '../types';

export const pkwuQuestions: Question[] = [
  {
    id: 'pq-1',
    subjectId: 'pkwu',
    topicTag: 'Analisis SWOT',
    difficulty: 'Mudah',
    question: 'Dalam analisis SWOT, faktor yang berasal dari dalam organisasi atau perusahaan (seperti sumber daya dan kapabilitas) dikategorikan sebagai...',
    options: [
      { id: 'A', text: 'Strengths & Weaknesses (Kekuatan & Kelemahan)' },
      { id: 'B', text: 'Opportunities & Threats (Peluang & Ancaman)' },
      { id: 'C', text: 'Internal & Eksternal Pasar' },
      { id: 'D', text: 'Capital & Liabilities' }
    ],
    correctAnswer: 'A',
    explanation: 'Strengths (Kekuatan) dan Weaknesses (Kelemahan) adalah faktor internal perusahaan, sedangkan Opportunities & Threats adalah faktor eksternal.'
  },
  {
    id: 'pq-2',
    subjectId: 'pkwu',
    topicTag: 'Break Even Point',
    difficulty: 'Sedang',
    question: 'Sebuah usaha kerajinan memiliki Biaya Tetap (Fixed Cost) Rp 10.000.000, Biaya Variabel per unit Rp 20.000, dan Harga Jual per unit Rp 50.000. Berapa unit BEP yang harus dicapai?',
    mathFormula: 'BEP = \\frac{FC}{P - VC}',
    options: [
      { id: 'A', text: '200 unit' },
      { id: 'B', text: '333 unit' },
      { id: 'C', text: '500 unit' },
      { id: 'D', text: '400 unit' }
    ],
    correctAnswer: 'B',
    explanation: 'BEP (unit) = 10.000.000 / (50.000 - 20.000) = 10.000.000 / 30.000 = 333.33 unit (dibulatkan 333 unit).'
  },
  {
    id: 'pq-3',
    subjectId: 'pkwu',
    topicTag: 'Marketing Mix',
    difficulty: 'Mudah',
    question: 'Unsur 4P dalam bauran pemasaran (Marketing Mix) terdiri dari...',
    options: [
      { id: 'A', text: 'Product, Price, Place, Promotion' },
      { id: 'B', text: 'People, Process, Physical Evidence, Product' },
      { id: 'C', text: 'Planning, Production, Price, Profit' },
      { id: 'D', text: 'Public, Partner, Price, Place' }
    ],
    correctAnswer: 'A',
    explanation: '4P klasik dalam bauran pemasaran adalah Product (Produk), Price (Harga), Place (Tempat/Distribusi), dan Promotion (Promosi).'
  },
  {
    id: 'pq-4',
    subjectId: 'pkwu',
    topicTag: 'Kewirausahaan',
    difficulty: 'Sedang',
    question: 'Sikap seorang wirausahawan yang selalu ingin mencari cara baru dan berbeda dalam menghasilkan produk atau layanan disebut...',
    options: [
      { id: 'A', text: 'Konvensional' },
      { id: 'B', text: 'Inovatif' },
      { id: 'C', text: 'Imitatif' },
      { id: 'D', text: 'Statis' }
    ],
    correctAnswer: 'B',
    explanation: 'Inovatif adalah kemampuan menerapkan kreativitas dalam memecahkan masalah dan menciptakan peluang baru.'
  },
  {
    id: 'pq-5',
    subjectId: 'pkwu',
    topicTag: 'Break Even Point',
    difficulty: 'Sedang',
    question: 'Jika suatu usaha memiliki Biaya Tetap Rp 15.000.000 dan Margin Kontribusi per unit Rp 30.000, berapa nilai BEP dalam Rupiah jika harga jual per unit adalah Rp 75.000?',
    mathFormula: 'BEP (Rupiah) = \\frac{FC}{1 - (VC / P)}',
    options: [
      { id: 'A', text: 'Rp 25.000.000' },
      { id: 'B', text: 'Rp 37.500.000' },
      { id: 'C', text: 'Rp 45.000.000' },
      { id: 'D', text: 'Rp 50.000.000' }
    ],
    correctAnswer: 'B',
    explanation: 'BEP (Rupiah) = 15.000.000 / (1 - (45.000/75.000)) = 15.000.000 / (1 - 0.6) = 15.000.000 / 0.4 = Rp 37.500.000.'
  },
  {
    id: 'pq-6',
    subjectId: 'pkwu',
    topicTag: 'Analisis SWOT',
    difficulty: 'Sedang',
    question: 'Dalam matriks SWOT, strategi yang menggunakan kekuatan internal untuk memanfaatkan peluang eksternal disebut strategi...',
    options: [
      { id: 'A', text: 'SO (Strengths-Opportunities)' },
      { id: 'B', text: 'ST (Strengths-Threats)' },
      { id: 'C', text: 'WO (Weaknesses-Opportunities)' },
      { id: 'D', text: 'WT (Weaknesses-Threats)' }
    ],
    correctAnswer: 'A',
    explanation: 'Strategi SO memaksimalkan kekuatan internal untuk meraih peluang eksternal yang ada di pasar.'
  },
  {
    id: 'pq-7',
    subjectId: 'pkwu',
    topicTag: 'Produksi',
    difficulty: 'Mudah',
    question: 'Harga Pokok Produksi (HPP) per unit dihitung dengan membagi total biaya produksi dengan...',
    options: [
      { id: 'A', text: 'Jumlah unit yang diproduksi' },
      { id: 'B', text: 'Harga jual produk' },
      { id: 'C', text: 'Laba bersih yang diinginkan' },
      { id: 'D', text: 'Biaya tetap perusahaan' }
    ],
    correctAnswer: 'A',
    explanation: 'HPP per unit = Total Biaya Produksi / Total Unit yang dihasilkan.'
  },
  {
    id: 'pq-8',
    subjectId: 'pkwu',
    topicTag: 'Pemasaran',
    difficulty: 'Sedang',
    question: 'Strategi penetapan harga di mana produk baru diluncurkan dengan harga sangat tinggi untuk mendapatkan keuntungan maksimal dari segmen early adopter disebut...',
    options: [
      { id: 'A', text: 'Penetration Pricing' },
      { id: 'B', text: 'Price Skimming' },
      { id: 'C', text: 'Psychological Pricing' },
      { id: 'D', text: 'Bundle Pricing' }
    ],
    correctAnswer: 'B',
    explanation: 'Price skimming menetapkan harga awal tinggi untuk produk inovatif sebelum menurunkannya seiring masuknya pesaing.'
  },
  {
    id: 'pq-9',
    subjectId: 'pkwu',
    topicTag: 'Manajemen',
    difficulty: 'Mudah',
    question: 'Unsur manajemen yang berkaitan dengan sumber daya manusia dalam organisasi wirausaha dikenal sebagai...',
    options: [
      { id: 'A', text: 'Money' },
      { id: 'B', text: 'Methods' },
      { id: 'C', text: 'People / Man' },
      { id: 'D', text: 'Materials' }
    ],
    correctAnswer: 'C',
    explanation: 'Dalam 6M manajemen (Man, Money, Material, Machine, Method, Market), unsur "Man" atau "People" merujuk pada sumber daya manusia.'
  },
  {
    id: 'pq-10',
    subjectId: 'pkwu',
    topicTag: 'Legalitas Usaha',
    difficulty: 'Sedang',
    question: 'Dokumen perizinan dasar yang wajib dimiliki oleh pelaku usaha mikro dan kecil di Indonesia secara elektronik melalui sistem OSS adalah...',
    options: [
      { id: 'A', text: 'SIUP dan TDP' },
      { id: 'B', text: 'NIB (Nomor Induk Berusaha)' },
      { id: 'C', text: 'AMDAL' },
      { id: 'D', text: 'Akta Pendirian PT' }
    ],
    correctAnswer: 'B',
    explanation: 'NIB (Nomor Induk Berusaha) diterbitkan melalui Online Single Submission (OSS) sebagai identitas resmi pelaku usaha.'
  },
  {
    id: 'pq-11',
    subjectId: 'pkwu',
    topicTag: 'Kewirausahaan',
    difficulty: 'Mudah',
    question: 'Keberanian seorang wirausahawan dalam mengambil risiko yang terukur (calculated risk) didasari oleh...',
    options: [
      { id: 'A', text: 'Spekulasi tanpa perhitungan' },
      { id: 'B', text: 'Analisis peluang dan perencanaan matang' },
      { id: 'C', text: 'Keberuntungan semata' },
      { id: 'D', text: 'Mengikuti tren pasar tanpa riset' }
    ],
    correctAnswer: 'B',
    explanation: 'Wirausahawan sukses mengambil risiko terukur melalui analisis data dan perhitungan matang, bukan spekulasi buta.'
  },
  {
    id: 'pq-12',
    subjectId: 'pkwu',
    topicTag: 'Marketing Mix',
    difficulty: 'Sedang',
    question: 'Perluasan bauran pemasaran (Marketing Mix) untuk industri jasa (services) menjadi 7P mencakup tambahan unsur...',
    options: [
      { id: 'A', text: 'Product, Price, Place, Promotion' },
      { id: 'B', text: 'People, Process, Physical Evidence' },
      { id: 'C', text: 'Packaging, Position, Profit' },
      { id: 'D', text: 'Public Relations, Partnership' }
    ],
    correctAnswer: 'B',
    explanation: '7P untuk jasa menambahkan People (SDM), Process (Proses pelayanan), dan Physical Evidence (Bukti fisik).'
  },
  {
    id: 'pq-13',
    subjectId: 'pkwu',
    topicTag: 'Break Even Point',
    difficulty: 'Sedang',
    question: 'Jika harga jual per unit Rp 100.000, biaya variabel per unit Rp 60.000, dan biaya tetap total Rp 20.000.000, berapa unit produk yang harus terjual agar memperoleh laba bersih Rp 10.000.000?',
    mathFormula: 'Q = \\frac{FC + Laba}{P - VC}',
    options: [
      { id: 'A', text: '500 unit' },
      { id: 'B', text: '600 unit' },
      { id: 'C', text: '750 unit' },
      { id: 'D', text: '1.000 unit' }
    ],
    correctAnswer: 'C',
    explanation: 'Q = (20.000.000 + 10.000.000) / (100.000 - 60.000) = 30.000.000 / 40.000 = 750 unit.'
  },
  {
    id: 'pq-14',
    subjectId: 'pkwu',
    topicTag: 'Analisis Usaha',
    difficulty: 'Mudah',
    question: 'Analisis kelayakan finansial yang menghitung perbandingan antara nilai arus kas masuk masa depan dengan nilai investasi awal dikenal sebagai...',
    options: [
      { id: 'A', text: 'BEP (Break Even Point)' },
      { id: 'B', text: 'ROI (Return on Investment)' },
      { id: 'C', text: 'SWOT Analysis' },
      { id: 'D', text: 'AIDA Model' }
    ],
    correctAnswer: 'B',
    explanation: 'ROI mengukur persentase tingkat pengembalian keuntungan dari modal atau investasi yang ditanamkan.'
  },
  {
    id: 'pq-15',
    subjectId: 'pkwu',
    topicTag: 'Pemasaran',
    difficulty: 'Sedang',
    question: 'Model tahapan komunikasi pemasaran yang mencakup Attention, Interest, Desire, dan Action disingkat sebagai...',
    options: [
      { id: 'A', text: 'SMART Model' },
      { id: 'B', text: 'AIDA Model' },
      { id: 'C', text: 'BCG Matrix' },
      { id: 'D', text: 'SWOT Analysis' }
    ],
    correctAnswer: 'B',
    explanation: 'AIDA adalah kerangka kerja klasik dalam periklanan dan penjualan untuk memandu konsumen dari perhatian hingga pembelian.'
  },
  {
    id: 'pq-16',
    subjectId: 'pkwu',
    topicTag: 'Produksi',
    difficulty: 'Sedang',
    question: 'Suatu usaha kerajinan menghabiskan biaya bahan baku Rp 5.000.000, biaya tenaga kerja langsung Rp 3.000.000, dan biaya overhead pabrik Rp 2.000.000 untuk memproduksi 500 unit. HPP per unit adalah...',
    options: [
      { id: 'A', text: 'Rp 10.000' },
      { id: 'B', text: 'Rp 16.000' },
      { id: 'C', text: 'Rp 20.000' },
      { id: 'D', text: 'Rp 25.000' }
    ],
    correctAnswer: 'C',
    explanation: 'Total Biaya = 5.000.000 + 3.000.000 + 2.000.000 = Rp 10.000.000. HPP per unit = 10.000.000 / 500 = Rp 20.000.'
  },
  {
    id: 'pq-17',
    subjectId: 'pkwu',
    topicTag: 'Kewirausahaan',
    difficulty: 'Mudah',
    question: 'Karakteristik utama seorang wirausahawan yang memiliki orientasi masa depan adalah...',
    options: [
      { id: 'A', text: 'Bertindak impulsif tanpa perencanaan' },
      { id: 'B', text: 'Memiliki visi jangka panjang dan proaktif mengantisipasi tren' },
      { id: 'C', text: 'Hanya fokus pada keuntungan harian' },
      { id: 'D', text: 'Menghindari segala bentuk teknologi baru' }
    ],
    correctAnswer: 'B',
    explanation: 'Wirausahawan visioner selalu melihat jauh ke depan, merencanakan strategi, dan beradaptasi dengan tren masa depan.'
  },
  {
    id: 'pq-18',
    subjectId: 'pkwu',
    topicTag: 'Pemasaran',
    difficulty: 'Sedang',
    question: 'Strategi penetapan harga produk di bawah harga pasar untuk merebut pangsa pasar secara cepat disebut...',
    options: [
      { id: 'A', text: 'Price Skimming' },
      { id: 'B', text: 'Penetration Pricing' },
      { id: 'C', text: 'Premium Pricing' },
      { id: 'D', text: 'Cost-Plus Pricing' }
    ],
    correctAnswer: 'B',
    explanation: 'Penetration pricing menggunakan harga rendah untuk menarik banyak pelanggan baru dan mendominasi pasar dengan cepat.'
  },
  {
    id: 'pq-19',
    subjectId: 'pkwu',
    topicTag: 'Manajemen',
    difficulty: 'Sedang',
    question: 'Fungsi manajemen yang berkaitan dengan pengawasan dan evaluasi apakah pelaksanaan kegiatan sesuai dengan rencana awal adalah...',
    options: [
      { id: 'A', text: 'Planning' },
      { id: 'B', text: 'Organizing' },
      { id: 'C', text: 'Actuating' },
      { id: 'D', text: 'Controlling' }
    ],
    correctAnswer: 'D',
    explanation: 'Controlling (pengendalian) adalah fungsi memantau kinerja dan mengambil tindakan korektif jika terjadi penyimpangan.'
  },
  {
    id: 'pq-20',
    subjectId: 'pkwu',
    topicTag: 'Analisis SWOT',
    difficulty: 'Sedang',
    question: 'Dalam analisis SWOT, ancaman dari pesaing baru atau regulasi pemerintah yang merugikan dikategorikan sebagai...',
    options: [
      { id: 'A', text: 'Strengths' },
      { id: 'B', text: 'Weaknesses' },
      { id: 'C', text: 'Opportunities' },
      { id: 'D', text: 'Threats' }
    ],
    correctAnswer: 'D',
    explanation: 'Threats (Ancaman) adalah faktor eksternal negatif yang dapat menghambat pertumbuhan atau kelangsungan usaha.'
  },
  {
    id: 'pq-21',
    subjectId: 'pkwu',
    topicTag: 'Hak Kekayaan Intelektual',
    difficulty: 'Sedang',
    question: 'Perlindungan hukum atas penemuan di bidang teknologi atau proses industri baru dalam bentuk Hak Kekayaan Intelektual disebut...',
    options: [
      { id: 'A', text: 'Hak Cipta (Copyright)' },
      { id: 'B', text: 'Paten (Patent)' },
      { id: 'C', text: 'Merek Dagang (Trademark)' },
      { id: 'D', text: 'Rahasia Dagang' }
    ],
    correctAnswer: 'B',
    explanation: 'Paten adalah hak eksklusif yang diberikan untuk invensi di bidang teknologi (produk atau proses).'
  },
  {
    id: 'pq-22',
    subjectId: 'pkwu',
    topicTag: 'Produksi',
    difficulty: 'Mudah',
    question: 'Metode produksi massal bercirikan...',
    options: [
      { id: 'A', text: 'Jumlah produksi sedikit sesuai pesanan khusus' },
      { id: 'B', text: 'Produksi standar dalam jumlah besar menggunakan jalur perakitan (assembly line)' },
      { id: 'C', text: 'Bergantung sepenuhnya pada keahlian tangan perajin individual' },
      { id: 'D', text: 'Tidak menggunakan mesin sama sekali' }
    ],
    correctAnswer: 'B',
    explanation: 'Produksi massal menghasilkan produk standar dalam volume besar secara efisien melalui lini perakitan mekanis/otomatis.'
  },
  {
    id: 'pq-23',
    subjectId: 'pkwu',
    topicTag: 'Pemasaran',
    difficulty: 'Sedang',
    question: 'Media promosi digital yang memanfaatkan platform media sosial secara organik maupun berbayar untuk membangun brand awareness disebut...',
    options: [
      { id: 'A', text: 'Digital Marketing / Social Media Marketing' },
      { id: 'B', text: 'Traditional Billboard' },
      { id: 'C', text: 'Door-to-door sales' },
      { id: 'D', text: 'Print Catalog' }
    ],
    correctAnswer: 'A',
    explanation: 'Social Media Marketing adalah strategi pemasaran digital yang memanfaatkan platform sosial untuk menjangkau target audiens.'
  },
  {
    id: 'pq-24',
    subjectId: 'pkwu',
    topicTag: 'Kewirausahaan',
    difficulty: 'Mudah',
    question: 'Keuntungan utama dari memiliki usaha sendiri (wirausaha) dibandingkan menjadi karyawan adalah...',
    options: [
      { id: 'A', text: 'Pendapatan yang pasti setiap bulan tanpa risiko' },
      { id: 'B', text: 'Kebebasan finansial, kemandirian, dan potensi penghasilan tak terbatas' },
      { id: 'C', text: 'Bebas dari segala tanggung jawab hukum' },
      { id: 'D', text: 'Jam kerja yang jauh lebih singkat' }
    ],
    correctAnswer: 'B',
    explanation: 'Wirausaha menawarkan kebebasan mengatur waktu, kemandirian, serta potensi keuntungan finansial yang tidak terbatas.'
  },
  {
    id: 'pq-25',
    subjectId: 'pkwu',
    topicTag: 'Break Even Point',
    difficulty: 'Sedang',
    question: 'Titik Impas (Break Even Point) tercapai ketika...',
    options: [
      { id: 'A', text: 'Total Pendapatan sama dengan Total Biaya (TR = TC)' },
      { id: 'B', text: 'Total Pendapatan lebih besar dari Total Biaya' },
      { id: 'C', text: 'Biaya Tetap bernilai nol' },
      { id: 'D', text: 'Keuangat perusahaan mengalami kerugian besar' }
    ],
    correctAnswer: 'A',
    explanation: 'BEP adalah kondisi di mana perusahaan tidak untung maupun rugi, sehingga Total Revenue (TR) sama dengan Total Cost (TC).'
  },
  {
    id: 'pq-26',
    subjectId: 'pkwu',
    topicTag: 'Analisis Usaha',
    difficulty: 'Sedang',
    question: 'Evaluasi berkala terhadap laporan laba rugi dan neraca keuangan perusahaan dilakukan untuk menilai aspek...',
    options: [
      { id: 'A', text: 'Kinerja Finansial & Profitabilitas' },
      { id: 'B', text: 'Jumlah pengikut media sosial' },
      { id: 'C', text: 'Kerapian tata letak pabrik' },
      { id: 'D', text: 'Jumlah karyawan yang hadir' }
    ],
    correctAnswer: 'A',
    explanation: 'Analisis laporan laba rugi dan neraca memberikan gambaran menyeluruh tentang profitabilitas, likuiditas, dan kesehatan keuangan.'
  },
  {
    id: 'pq-27',
    subjectId: 'pkwu',
    topicTag: 'Pemasaran',
    difficulty: 'Mudah',
    question: 'Segmentasi pasar berdasarkan karakteristik gaya hidup, kelas sosial, dan kepribadian konsumen disebut segmentasi...',
    options: [
      { id: 'A', text: 'Demografis' },
      { id: 'B', text: 'Geografis' },
      { id: 'C', text: 'Psikografis' },
      { id: 'D', text: 'Behavioral' }
    ],
    correctAnswer: 'C',
    explanation: 'Segmentasi psikografis mengelompokkan konsumen berdasarkan kelas sosial, gaya hidup, dan karakteristik kepribadian.'
  },
  {
    id: 'pq-28',
    subjectId: 'pkwu',
    topicTag: 'Kewirausahaan',
    difficulty: 'Sedang',
    question: 'Tindakan mengubah limbah atau barang tidak terpakai menjadi produk bernilai jual tinggi dikenal dengan istilah...',
    options: [
      { id: 'A', text: 'Upcycling / Kreativitas Pengolahan Limbah' },
      { id: 'B', text: 'Liquidation' },
      { id: 'C', text: 'Outsourcing' },
      { id: 'D', text: 'Monopoli' }
    ],
    correctAnswer: 'A',
    explanation: 'Upcycling adalah proses mendaur ulang limbah atau produk buangan menjadi bahan atau produk bernilai estetika dan ekonomi lebih tinggi.'
  },
  {
    id: 'pq-29',
    subjectId: 'pkwu',
    topicTag: 'Manajemen',
    difficulty: 'Sedang',
    question: 'Dalam analisis kelayakan usaha, aspek yang mengkaji ketersediaan bahan baku, mesin, lokasi pabrik, dan tata letak disebut aspek...',
    options: [
      { id: 'A', text: 'Aspek Pasar dan Pemasaran' },
      { id: 'B', text: 'Aspek Teknis dan Operasi' },
      { id: 'C', text: 'Aspek Finansial' },
      { id: 'D', text: 'Aspek Hukum' }
    ],
    correctAnswer: 'B',
    explanation: 'Aspek teknis dan operasi mengevaluasi kelayakan lokasi, fasilitas produksi, mesin, tata letak, dan proses operasional.'
  },
  {
    id: 'pq-30',
    subjectId: 'pkwu',
    topicTag: 'Break Even Point',
    difficulty: 'Sedang',
    question: 'Suatu usaha kuliner memiliki biaya tetap Rp 12.000.000 per bulan. Jika harga jual satu porsi makanan Rp 20.000 dan biaya variabel Rp 8.000 per porsi, berapa porsi yang harus dijual dalam sebulan agar mencapai BEP?',
    options: [
      { id: 'A', text: '600 porsi' },
      { id: 'B', text: '800 porsi' },
      { id: 'C', text: '1.000 porsi' },
      { id: 'D', text: '1.200 porsi' }
    ],
    correctAnswer: 'C',
    explanation: 'BEP (unit) = 12.000.000 / (20.000 - 8.000) = 12.000.000 / 12.000 = 1.000 porsi.'
  }
];
