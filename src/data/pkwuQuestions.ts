import { Question } from '../types';

export const pkwuQuestions: Question[] = [
  {
    id: 'pkw-q1',
    number: 1,
    subjectId: 'pkwu',
    topicTag: 'Analisis BEP & Keuangan',
    difficulty: 'Mudah',
    question: 'Sebuah usaha kerajinan memiliki Biaya Tetap bulanan sebesar Rp 5.000.000. Biaya variabel untuk memproduksi 1 unit kerajinan adalah Rp 30.000 dan produk dijual dengan harga Rp 50.000 per unit. Titik Impas (BEP) dalam unit adalah...',
    options: [
      { id: 'A', text: '100 unit' },
      { id: 'B', text: '150 unit' },
      { id: 'C', text: '250 unit' },
      { id: 'D', text: '500 unit' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus BEP Unit = Biaya Tetap (FC) / [Harga Jual (P) - Biaya Variabel (VC)]. BEP = Rp 5.000.000 / (Rp 50.000 - Rp 30.000) = Rp 5.000.000 / Rp 20.000 = 250 unit.',
    keyConcept: 'Perhitungan Titik Impas Dasar (Break Even Point)',
    tkaExamTip: 'Margin kontribusi per unit adalah penyebut rumus: P - VC.'
  },
  {
    id: 'pkw-q2',
    number: 2,
    subjectId: 'pkwu',
    topicTag: 'Analisis BEP & Keuangan',
    difficulty: 'Sedang',
    question: 'Jika dari soal sebelumnya perusahaan ingin memperoleh laba bersih sebesar Rp 3.000.000 per bulan, maka jumlah unit produk yang harus terjual adalah...',
    options: [
      { id: 'A', text: '350 unit' },
      { id: 'B', text: '400 unit' },
      { id: 'C', text: '450 unit' },
      { id: 'D', text: '550 unit' }
    ],
    correctAnswer: 'B',
    explanation: 'Rumus Target Unit = (Biaya Tetap + Target Laba) / Margin Kontribusi = (Rp 5.000.000 + Rp 3.000.000) / Rp 20.000 = Rp 8.000.000 / Rp 20.000 = 400 unit.',
    keyConcept: 'Perhitungan Volume Penjualan untuk Target Laba',
    tkaExamTip: 'Cukup tambahkan target laba ke bagian biaya tetap (FC + Laba).'
  },
  {
    id: 'pkw-q3',
    number: 3,
    subjectId: 'pkwu',
    topicTag: 'Model Bisnis & Lean Canvas',
    difficulty: 'Sedang',
    question: 'Dalam 9 blok Lean Model Canvas, elemen "Unfair Advantage" merujuk pada...',
    options: [
      { id: 'A', text: 'Total anggaran promosi digital marketing di media sosial' },
      { id: 'B', text: 'Keunggulan kompetitif eksklusif yang tidak dapat dengan mudah dibeli atau ditiru oleh kompetitor' },
      { id: 'C', text: 'Daftar semua biaya operasional bulanan kantor' },
      { id: 'D', text: 'Jumlah target follower media sosial perusahaan' }
    ],
    correctAnswer: 'B',
    explanation: '"Unfair Advantage" (keunggulan yang tidak adil) adalah aset atau kapabilitas internal yang tidak dapat dengan mudah disalin, dibeli dengan uang, atau ditiru oleh pesaing besar, seperti paten formula eksklusif, algoritma khusus, atau jaringan kemitraan kunci.',
    keyConcept: 'Elemen Lean Canvas: Unfair Advantage',
    tkaExamTip: 'Modal uang atau iklan bukanlah unfair advantage karena kompetitor yang lebih kaya bisa menirunya kapan saja.'
  },
  {
    id: 'pkw-q4',
    number: 4,
    subjectId: 'pkwu',
    topicTag: 'Strategi Pemasaran',
    difficulty: 'Mudah',
    question: 'Strategi menetapkan harga awal yang tinggi pada produk inovatif teknologi baru untuk menyaring segmen konsumen kelas atas, kemudian secara bertahap menurunkan harga seiring waktu dinamakan...',
    options: [
      { id: 'A', text: 'Penetration Pricing' },
      { id: 'B', text: 'Price Skimming' },
      { id: 'C', text: 'Cost-Plus Pricing' },
      { id: 'D', text: 'Competitive Parity' }
    ],
    correctAnswer: 'B',
    explanation: 'Price Skimming (penyaringan harga) adalah strategi mematok harga tinggi di awal saat produk inovatif pertama kali dirilis untuk meraup margin maksimal dari pembeli awal (early adopters), lalu menurunkannya ketika kompetitor mulai masuk.',
    keyConcept: 'Strategi Penetapan Harga: Price Skimming vs Penetration Pricing',
    tkaExamTip: 'Skimming = Mulai dari harga tinggi lalu turun; Penetrasi = Mulai dari harga rendah untuk kuasai pasar.'
  },
  {
    id: 'pkw-q5',
    number: 5,
    subjectId: 'pkwu',
    topicTag: 'Desain & Ergonomi',
    difficulty: 'Mudah',
    question: 'Suatu produk kerajinan meja belajar lipat dirancang agar tidak memiliki sudut tajam yang membahayakan anak-anak dan tidak menyebabkan pegal pada punggung saat digunakan. Prinsip ergonomi yang diutamakan adalah...',
    options: [
      { id: 'A', text: 'Estetika murni dan kemewahan' },
      { id: 'B', text: 'Keamanan (Safety) dan Kenyamanan (Comfort)' },
      { id: 'C', text: 'Kelangkaan bahan baku' },
      { id: 'D', text: 'Tingkat kesulitan ornamen ukiran' }
    ],
    correctAnswer: 'B',
    explanation: 'Prinsip ergonomi menekankan adaptasi produk terhadap kebutuhan fisik manusia. Menghilangkan sudut tajam menjamin aspek Keamanan (Safety), sementara posisi postur bebas pegal menjamin aspek Kenyamanan (Comfort).',
    keyConcept: 'Prinsip Ergonomi Produk Fungsional',
    tkaExamTip: '5 Prinsip Ergonomi: Utility (kegunaan), Comfort (kenyamanan), Safety (keamanan), Flexibility (keluwesan), dan Aesthetics (keindahan).'
  },
  {
    id: 'pkw-q6',
    number: 6,
    subjectId: 'pkwu',
    topicTag: 'HKI & Legalitas Usaha',
    difficulty: 'Sedang',
    question: 'Bentuk perlindungan hukum terhadap ciptaan lagu promosi iklan dan video animasi pengenalan produk wirausaha didaftarkan ke Direktorat Jenderal Kekayaan Intelektual sebagai...',
    options: [
      { id: 'A', text: 'Paten Sederhana' },
      { id: 'B', text: 'Hak Cipta' },
      { id: 'C', text: 'Desain Tata Letak Sirkuit Terpadu' },
      { id: 'D', text: 'Rahasia Dagang' }
    ],
    correctAnswer: 'B',
    explanation: 'Hak Cipta (Copyright) adalah hak eksklusif pencipta atas karya seni, sastra, ilmu pengetahuan, lagu, musik, film/video animasi, dan program komputer.',
    keyConcept: 'Klasifikasi Jenis Hak Kekayaan Intelektual (HKI)',
    tkaExamTip: 'Paten untuk teknologi/mesin; Merek untuk logo/nama; Desain Industri untuk bentuk fisik wadah; Hak Cipta untuk karya seni/audio/video.'
  },
  {
    id: 'pkw-q7',
    number: 7,
    subjectId: 'pkwu',
    topicTag: 'Analisis BEP & Keuangan',
    difficulty: 'Sedang',
    question: 'Data produksi 500 kotak katering bento: Biaya bahan makanan Rp 6.000.000, biaya bumbu & saus Rp 1.000.000, kemasan kotak bento & sendok Rp 1.000.000, upah koki harian Rp 1.500.000, gas & listrik dapur Rp 500.000. Harga Pokok Produksi (HPP) per kotak bento adalah...',
    options: [
      { id: 'A', text: 'Rp 16.000' },
      { id: 'B', text: 'Rp 18.000' },
      { id: 'C', text: 'Rp 20.000' },
      { id: 'D', text: 'Rp 22.000' }
    ],
    correctAnswer: 'C',
    explanation: 'Total Biaya Produksi = Rp 6jt + 1jt + 1jt + 1.5jt + 0.5jt = Rp 10.000.000. HPP per unit = Total Biaya / Jumlah Unit = Rp 10.000.000 / 500 kotak = Rp 20.000 per kotak.',
    keyConcept: 'Kalkulasi Harga Pokok Produksi (HPP)',
    tkaExamTip: 'HPP = Seluruh total biaya produksi dibagi dengan jumlah unit yang dihasilkan.'
  },
  {
    id: 'pkw-q8',
    number: 8,
    subjectId: 'pkwu',
    topicTag: 'Strategi Pemasaran',
    difficulty: 'Sedang',
    question: 'Manakah dari komponen berikut yang merupakan tambahan khusus pada bauran pemasaran 7P (Extended Marketing Mix untuk produk jasa) yang membedakannya dari bauran pemasaran 4P produk fisik?',
    options: [
      { id: 'A', text: 'Packaging, Profit, dan Partnership' },
      { id: 'B', text: 'People, Process, dan Physical Evidence' },
      { id: 'C', text: 'Public Relation, Publicity, dan Positioning' },
      { id: 'D', text: 'Payment, Placement, dan Performance' }
    ],
    correctAnswer: 'B',
    explanation: 'Bauran pemasaran 7P untuk industri jasa dan pengalaman konsumen menambahkan 3P baru: People (SDM/karyawan yang melayani), Process (alur kecepatan dan prosedur pelayanan), serta Physical Evidence (bukti fisik lingkungan tempat jasa diberikan seperti interior, kebersihan, dan seragam).',
    keyConcept: 'Bauran Pemasaran Jasa (7P Marketing Mix)',
    tkaExamTip: 'Ingat 3P tambahan untuk jasa: People, Process, Physical Evidence.'
  },
  {
    id: 'pkw-q9',
    number: 9,
    subjectId: 'pkwu',
    topicTag: 'HKI & Legalitas Usaha',
    difficulty: 'Sedang',
    question: 'Seorang wirausahawan pemula memproduksi sambal kemasan botol kaca dan keripik singkong di dapur rumahnya. Izin edar yang paling tepat dan menjadi kewenangan Dinas Kesehatan Kabupaten/Kota adalah...',
    options: [
      { id: 'A', text: 'Sertifikat P-IRT (Pangan Industri Rumah Tangga)' },
      { id: 'B', text: 'Izin Edar BPOM ML' },
      { id: 'C', text: 'Sertifikat AMDAL Nasional' },
      { id: 'D', text: 'Sertifikasi ISO 9001' }
    ],
    correctAnswer: 'A',
    explanation: 'Sertifikat Produksi Pangan Industri Rumah Tangga (SPP-PIRT) diterbitkan oleh Dinas Kesehatan bagi usaha pangan olahan skala mikro dan kecil dengan tingkat risiko rendah-sedang yang beroperasi di fasilitas rumah tangga.',
    keyConcept: 'Hierarki Izin Edar Produk Pangan (P-IRT vs BPOM)',
    tkaExamTip: 'P-IRT untuk skala rumah tangga; BPOM MD untuk industri pabrik dalam negeri; BPOM ML untuk makanan luar negeri/impor.'
  },
  {
    id: 'pkw-q10',
    number: 10,
    subjectId: 'pkwu',
    topicTag: 'Model Bisnis & Lean Canvas',
    difficulty: 'Sedang',
    question: 'Dalam matriks analisis SWOT, strategi "WO" (Weaknesses - Opportunities) dirancang dengan tujuan untuk...',
    options: [
      { id: 'A', text: 'Menggunakan kekuatan internal untuk meniadakan seluruh ancaman eksternal' },
      { id: 'B', text: 'Meminimalkan kelemahan internal dengan cara memanfaatkan peluang pasar eksternal yang tersedia' },
      { id: 'C', text: 'Menutup usaha secara permanen karena ancaman terlalu besar' },
      { id: 'D', text: 'Menghindari peluang baru demi mempertahankan kelemahan' }
    ],
    correctAnswer: 'B',
    explanation: 'Strategi WO (Kelemahan-Peluang) berfokus pada upaya meminimalkan atau memperbaiki kelemahan internal yang dimiliki usaha dengan cara menangkap dan memanfaatkan peluang yang datang dari lingkungan eksternal.',
    keyConcept: 'Matriks Strategi Kombinasi SWOT (SO, ST, WO, WT)',
    tkaExamTip: 'WO = Mengatasi kelemahan internal menggunakan peluang luar.'
  },
  {
    id: 'pkw-q11',
    number: 11,
    subjectId: 'pkwu',
    topicTag: 'Strategi Pemasaran',
    difficulty: 'Mudah',
    question: 'Dalam model hierarki respon pemasaran AIDA, urutan tahapan yang benar dari pertama kali calon konsumen terpapar hingga melakukan transaksi adalah...',
    options: [
      { id: 'A', text: 'Action → Interest → Desire → Attention' },
      { id: 'B', text: 'Attention → Interest → Desire → Action' },
      { id: 'C', text: 'Awareness → Action → Decision → Interest' },
      { id: 'D', text: 'Agreement → Investment → Delivery → Acceptance' }
    ],
    correctAnswer: 'B',
    explanation: 'Tahapan model AIDA: 1. Attention/Awareness (menarik perhatian), 2. Interest (membangkitkan minat), 3. Desire (menciptakan keinginan/hasrat memiliki), 4. Action (mendorong tindakan pembelian nyata).',
    keyConcept: 'Model Komunikasi Pemasaran AIDA',
    tkaExamTip: 'AIDA: Attention → Interest → Desire → Action.'
  },
  {
    id: 'pkw-q12',
    number: 12,
    subjectId: 'pkwu',
    topicTag: 'Desain & Ergonomi',
    difficulty: 'Sedang',
    question: 'Kemasan yang bersentuhan langsung dengan produk pangan dan berfungsi menjaga sterilitas serta keutuhan rasa disebut sebagai kemasan...',
    options: [
      { id: 'A', text: 'Tersier' },
      { id: 'B', text: 'Sekunder' },
      { id: 'C', text: 'Primer' },
      { id: 'D', text: 'Kuartener' }
    ],
    correctAnswer: 'C',
    explanation: 'Kemasan Primer adalah kemasan yang langsung mewadahi atau bersentuhan dengan produk (misal: botol minuman, plastik pembungkus roti). Kemasan Sekunder membungkus beberapa kemasan primer (misal: kardus isi 12 botol). Kemasan Tersier untuk pengiriman kargo (misal: palet kayu/kontainer).',
    keyConcept: 'Klasifikasi Tingkatan Kemasan Produk (Primer, Sekunder, Tersier)',
    tkaExamTip: 'Primer kontak langsung dengan isi makanan; Sekunder melindungi kelompok produk; Tersier untuk logistik besar.'
  },
  {
    id: 'pkw-q13',
    number: 13,
    subjectId: 'pkwu',
    topicTag: 'Analisis BEP & Keuangan',
    difficulty: 'Sedang',
    question: 'Sebuah usaha kerajinan memiliki Biaya Tetap Rp 18.000.000 per tahun. Biaya variabel per unit adalah Rp 40.000 dan harga jual per unit adalah Rp 100.000. BEP dalam bentuk nominal rupiah omset penjualan adalah...',
    options: [
      { id: 'A', text: 'Rp 24.000.000' },
      { id: 'B', text: 'Rp 30.000.000' },
      { id: 'C', text: 'Rp 36.000.000' },
      { id: 'D', text: 'Rp 45.000.000' }
    ],
    correctAnswer: 'B',
    explanation: 'BEP Unit = Rp 18.000.000 / (Rp 100.000 - Rp 40.000) = Rp 18.000.000 / Rp 60.000 = 300 unit. BEP Rupiah = BEP Unit × Harga Jual = 300 unit × Rp 100.000 = Rp 30.000.000.',
    keyConcept: 'Perhitungan BEP Nominal Rupiah (Sales Revenue BEP)',
    tkaExamTip: 'BEP Rupiah = BEP Unit dikalikan Harga Jual per unit.'
  },
  {
    id: 'pkw-q14',
    number: 14,
    subjectId: 'pkwu',
    topicTag: 'Model Bisnis & Lean Canvas',
    difficulty: 'Sedang',
    question: 'Versi awal suatu produk yang hanya memuat fitur-fitur esensial minimum untuk dapat segera diuji dan divalidasi oleh pengguna nyata di pasar tanpa membuang banyak waktu dan modal disebut...',
    options: [
      { id: 'A', text: 'Final Mass Production' },
      { id: 'B', text: 'Minimum Viable Product (MVP)' },
      { id: 'C', text: 'Patent Blueprint' },
      { id: 'D', text: 'Commercial Rollout' }
    ],
    correctAnswer: 'B',
    explanation: 'MVP (Minimum Viable Product) adalah versi produk dengan serangkaian fitur paling dasar yang sudah berfungsi dengan baik untuk mengumpulkan pembelajaran teruji dari umpan balik konsumen dengan upaya dan biaya sekecil mungkin.',
    keyConcept: 'Konsep Lean Startup: Minimum Viable Product (MVP)',
    tkaExamTip: 'MVP memvalidasi hipotesis pasar sebelum perusahaan melakukan investasi cetakan pabrik massal yang mahal.'
  },
  {
    id: 'pkw-q15',
    number: 15,
    subjectId: 'pkwu',
    topicTag: 'HKI & Legalitas Usaha',
    difficulty: 'Mudah',
    question: 'Berdasarkan Undang-Undang Republik Indonesia, hak eksklusif yang diberikan negara kepada inventor atas hasil invensinya di bidang teknologi baru selama jangka waktu tertentu disebut...',
    options: [
      { id: 'A', text: 'Hak Merek' },
      { id: 'B', text: 'Hak Paten' },
      { id: 'C', text: 'Indikasi Geografis' },
      { id: 'D', text: 'Hak Cipta Seni' }
    ],
    correctAnswer: 'B',
    explanation: 'Hak Paten adalah hak eksklusif atas penemuan (invensi) di bidang teknologi yang memiliki kebaruan (novelty), langkah inventif, dan dapat diterapkan dalam industri.',
    keyConcept: 'Definisi Hak Paten Invensi Teknologi',
    tkaExamTip: 'Invensi teknologi/cara kerja mesin = Paten; Identitas brand/nama produk = Merek.'
  },
  {
    id: 'pkw-q16',
    number: 16,
    subjectId: 'pkwu',
    topicTag: 'Strategi Pemasaran',
    difficulty: 'Sedang',
    question: 'Mengapa segmentasi pasar berdasarkan karakteristik "Psikografis" penting dalam penjualan produk kerajinan ramah lingkungan bernilai tinggi?',
    options: [
      { id: 'A', text: 'Karena hanya menghitung jarak tempuh kurir logistik ke rumah konsumen' },
      { id: 'B', text: 'Karena mengelompokkan konsumen berdasarkan nilai-nilai hidup (values), kepedulian lingkungan, dan gaya hidup (lifestyle)' },
      { id: 'C', text: 'Karena hanya membagi konsumen berdasarkan jenis kelamin pria dan wanita' },
      { id: 'D', text: 'Karena menetapkan tarif bea cukai ekspor' }
    ],
    correctAnswer: 'B',
    explanation: 'Segmentasi psikografis membagi pasar berdasarkan kelas sosial, gaya hidup (lifestyle), kepribadian, serta nilai-nilai moral/kepedulian konsumen (misalnya kesadaran lingkungan dan pola konsumsi berkelanjutan).',
    keyConcept: 'Segmentasi Pasar Psikografis vs Demografis',
    tkaExamTip: 'Psikografis = Gaya hidup, minat, dan prinsip nilai hidup; Demografis = Usia, jenis kelamin, dan tingkat pendapatan.'
  },
  {
    id: 'pkw-q17',
    number: 17,
    subjectId: 'pkwu',
    topicTag: 'Analisis BEP & Keuangan',
    difficulty: 'Sedang',
    question: 'Jika suatu usaha menaikkan harga jual produk sebesar 20% sementara Biaya Tetap dan Biaya Variabel per unit tidak berubah sama sekali, apa yang akan terjadi pada titik impas (BEP) unit?',
    options: [
      { id: 'A', text: 'BEP unit akan meningkat drastis' },
      { id: 'B', text: 'BEP unit akan menurun (titik impas tercapai lebih cepat)' },
      { id: 'C', text: 'BEP unit tetap sama tidak ada perubahan' },
      { id: 'D', text: 'Biaya Tetap otomatis menjadi nol' }
    ],
    correctAnswer: 'B',
    explanation: 'Rumus BEP Unit = FC / (P - VC). Ketika P (harga jual) naik, selisih margin kontribusi (P - VC) menjadi lebih besar. Karena pembaginya membesar, nilai BEP Unit akan menurun, artinya usaha butuh menjual lebih sedikit barang untuk balik modal.',
    keyConcept: 'Pengaruh Kenaikan Harga terhadap Titik Impas (BEP Sensitivity)',
    tkaExamTip: 'Makin tinggi harga atau makin rendah biaya variabel, titik impas (BEP) akan makin cepat tercapai.'
  },
  {
    id: 'pkw-q18',
    number: 18,
    subjectId: 'pkwu',
    topicTag: 'Desain & Ergonomi',
    difficulty: 'Sedang',
    question: 'Dalam rekayasa produk elektronika kreatif, tujuan utama dilakukannya "Thermal Management" (pengaturan pembuangan panas pada casing) adalah...',
    options: [
      { id: 'A', text: 'Mencegah komponen overheating agar perangkat tidak rusak dan aman dipegang pengguna' },
      { id: 'B', text: 'Membuat suara perangkat menjadi lebih keras' },
      { id: 'C', text: 'Mengubah warna lampu indikator LED secara otomatis' },
      { id: 'D', text: 'Mengurangi kapasitas baterai internal' }
    ],
    correctAnswer: 'A',
    explanation: 'Thermal management (seperti penggunaan ventilasi udara, heatsink, atau casing aluminium) bertujuan mendisipasikan panas berlebih sehingga komponen sirkuit tidak mengalami degradasi termal dan suhu luar tetap nyaman/aman disentuh tangan.',
    keyConcept: 'Keamanan Produk Elektronika Terapan',
    tkaExamTip: 'Manajemen termal menggabungkan aspek durabilitas fungsi teknis dan keselamatan ergonomi pengguna.'
  },
  {
    id: 'pkw-q19',
    number: 19,
    subjectId: 'pkwu',
    topicTag: 'HKI & Legalitas Usaha',
    difficulty: 'Sedang',
    question: 'Tanda "Kopi Arabika Gayo" atau "Garam Amed Bali" yang mengidentifikasikan suatu produk berasal dari wilayah geografis tertentu dengan reputasi kualitas khas tanah setempat dilindungi oleh HKI dalam kategori...',
    options: [
      { id: 'A', text: 'Rahasia Dagang' },
      { id: 'B', text: 'Indikasi Geografis' },
      { id: 'C', text: 'Paten Sederhana' },
      { id: 'D', text: 'Desain Industri 2D' }
    ],
    correctAnswer: 'B',
    explanation: 'Indikasi Geografis adalah tanda yang mengidentifikasi suatu barang berasal dari wilayah geografis tertentu yang karena faktor lingkungan alam, faktor manusia, atau kombinasinya memberikan reputasi, kualitas, dan karakteristik unik khas daerah tersebut.',
    keyConcept: 'Perlindungan Hukum Indikasi Geografis Produk Nusantara',
    tkaExamTip: 'Ciri khas wilayah alam/tradisi lokal yang melekat pada nama daerah = Indikasi Geografis.'
  },
  {
    id: 'pkw-q20',
    number: 20,
    subjectId: 'pkwu',
    topicTag: 'Model Bisnis & Lean Canvas',
    difficulty: 'Sedang',
    question: 'Di era digital, wirausahawan yang memfasilitasi transaksi antara penjual pihak ketiga dan pembeli tanpa menyimpan stok barang fisik di gudang sendiri menerapkan model bisnis...',
    options: [
      { id: 'A', text: 'Direct Manufacturer Offline' },
      { id: 'B', text: 'Marketplace / Dropshipping Platform' },
      { id: 'C', text: 'Traditional Brick-and-Mortar' },
      { id: 'D', text: 'Single Wholesaler Exclusive' }
    ],
    correctAnswer: 'B',
    explanation: 'Model bisnis Marketplace atau sistem Dropshipping bertindak sebagai platform perantara tanpa beban biaya penyimpanan inventaris barang (zero inventory cost), mengurangi risiko modal tertahan.',
    keyConcept: 'Evolusi Model Bisnis Platform Digital',
    tkaExamTip: 'Dropshipping memindahkan beban pengiriman dan stok langsung dari pemasok ke konsumen akhir.'
  },
  {
    id: 'pkw-q21',
    number: 21,
    subjectId: 'pkwu',
    topicTag: 'Analisis BEP & Keuangan',
    difficulty: 'Sedang',
    question: 'Biaya sewa ruko tahunan, biaya penyusutan mesin jahit, dan premi asuransi kebakaran bangunan dalam klasifikasi biaya usaha tergolong sebagai...',
    options: [
      { id: 'A', text: 'Biaya Variabel (Variable Cost)' },
      { id: 'B', text: 'Biaya Tetap (Fixed Cost)' },
      { id: 'C', text: 'Biaya Bahan Baku Langsung' },
      { id: 'D', text: 'Biaya Pemasaran Berdasarkan Komisi Penjualan' }
    ],
    correctAnswer: 'B',
    explanation: 'Biaya Tetap (Fixed Cost) adalah pengeluaran yang jumlah totalnya tetap konstan dan tidak terpengaruh oleh naik turunnya volume unit produk yang dihasilkan dalam periode tertentu.',
    keyConcept: 'Klasifikasi Biaya Tetap vs Biaya Variabel',
    tkaExamTip: 'Biaya tetap harus tetap dibayar meskipun perusahaan memproduksi 0 unit produk.'
  },
  {
    id: 'pkw-q22',
    number: 22,
    subjectId: 'pkwu',
    topicTag: 'Strategi Pemasaran',
    difficulty: 'Sedang',
    question: 'Metrik dalam periklanan digital yang menghitung rasio antara total pendapatan kotor yang dihasilkan dari suatu kampanye iklan dibagi dengan total biaya yang dikeluarkan untuk iklan tersebut disebut...',
    options: [
      { id: 'A', text: 'ROAS (Return on Ad Spend)' },
      { id: 'B', text: 'Bounce Rate' },
      { id: 'C', text: 'Organic Impressions' },
      { id: 'D', text: 'Cost Per Mille' }
    ],
    correctAnswer: 'A',
    explanation: 'ROAS (Return on Ad Spend) mengukur efektivitas finansial dari kampanye iklan digital: ROAS = Total Pendapatan Iklan / Total Biaya Iklan. Jika belanja iklan Rp 1 juta menghasilkan omset Rp 4 juta, maka ROAS = 4x.',
    keyConcept: 'Metrik Kinerja Pemasaran Digital (Digital Marketing Metrics)',
    tkaExamTip: 'ROAS > 1 berarti kampanye iklan mendatangkan pendapatan melebihi biaya belanja iklannya.'
  },
  {
    id: 'pkw-q23',
    number: 23,
    subjectId: 'pkwu',
    topicTag: 'Desain & Ergonomi',
    difficulty: 'Mudah',
    question: 'Simbol panah melingkar dengan angka di tengahnya (seperti kode resin segitiga 1-7) pada bagian bawah botol plastik berfungsi untuk memberikan informasi tentang...',
    options: [
      { id: 'A', text: 'Tingkat kepedasan makanan' },
      { id: 'B', text: 'Jenis polimer plastik dan kemudahan daur ulangnya (recyclability)' },
      { id: 'C', text: 'Jumlah kalori per porsi' },
      { id: 'D', text: 'Nomor izin bangunan pabrik' }
    ],
    correctAnswer: 'B',
    explanation: 'Kode identifikasi resin (SPI Resin Identification Code) angka 1 (PET), 2 (HDPE), 5 (PP), dst., menginformasikan jenis polimer penyusun kemasan dan mempermudah pemilahan saat proses daur ulang sampah.',
    keyConcept: 'Standardisasi Kode Kemasan Plastik Ramah Lingkungan',
    tkaExamTip: 'Plastik kode 5 (PP) paling umum digunakan untuk wadah makanan tahan panas dan botol susu bayi.'
  },
  {
    id: 'pkw-q24',
    number: 24,
    subjectId: 'pkwu',
    topicTag: 'HKI & Legalitas Usaha',
    difficulty: 'Sedang',
    question: 'Portal resmi terintegrasi milik Pemerintah Republik Indonesia untuk penerbitan perizinan berusaha berbasis risiko dan Nomor Induk Berusaha (NIB) secara daring adalah...',
    options: [
      { id: 'A', text: 'Online Single Submission (OSS)' },
      { id: 'B', text: 'E-Katalog Lembaga Kebijakan Pengadaan' },
      { id: 'C', text: 'Sistem Informasi Debitur Bank' },
      { id: 'D', text: 'Direktori Paten WIPO' }
    ],
    correctAnswer: 'A',
    explanation: 'OSS (Online Single Submission) yang dikelola oleh Kementerian Investasi/BKPM adalah sistem pelayanan perizinan berusaha satu pintu yang menerbitkan NIB (Nomor Induk Berusaha) secara elektronik.',
    keyConcept: 'Legalitas Usaha Terintegrasi: OSS dan NIB',
    tkaExamTip: 'NIB berfungsi ganda sebagai identitas berusaha, TDP (Tanda Daftar Perusahaan), dan Angka Pengenal Impor.'
  },
  {
    id: 'pkw-q25',
    number: 25,
    subjectId: 'pkwu',
    topicTag: 'Analisis BEP & Keuangan',
    difficulty: 'Sedang',
    question: 'Toko roti menghitung HPP per loyang kue sebesar Rp 40.000. Jika pemilik toko menerapkan strategi Cost-Plus Pricing dengan target keuntungan (markup margin) sebesar 30%, maka harga jual kue per loyang adalah...',
    options: [
      { id: 'A', text: 'Rp 48.000' },
      { id: 'B', text: 'Rp 52.000' },
      { id: 'C', text: 'Rp 56.000' },
      { id: 'D', text: 'Rp 60.000' }
    ],
    correctAnswer: 'B',
    explanation: 'Harga Jual = HPP + (Margin % × HPP) = Rp 40.000 + (30% × Rp 40.000) = Rp 40.000 + Rp 12.000 = Rp 52.000 per loyang.',
    keyConcept: 'Penetapan Harga Jual Berbasis Biaya (Cost-Plus Pricing)',
    tkaExamTip: 'Hitung nominal margin labanya terlebih dahulu lalu jumlahkan dengan HPP awal.'
  },
  {
    id: 'pkw-q26',
    number: 26,
    subjectId: 'pkwu',
    topicTag: 'Model Bisnis & Lean Canvas',
    difficulty: 'Sedang',
    question: 'Apa perbedaan mendasar antara Business Model Canvas (BMC) tradisional dan Lean Canvas karya Ash Maurya?',
    options: [
      { id: 'A', text: 'Lean Canvas mengganti Key Partners, Key Activities, Key Resources dengan Problem, Solution, Key Metrics, dan Unfair Advantage untuk fokus pada risiko startup tahap awal' },
      { id: 'B', text: 'Lean Canvas tidak memiliki kolom biaya dan pendapatan' },
      { id: 'C', text: 'BMC hanya digunakan untuk perusahaan nirlaba' },
      { id: 'D', text: 'Lean Canvas hanya berlaku untuk toko fisik kelontong' }
    ],
    correctAnswer: 'A',
    explanation: 'Lean Canvas diadaptasi khusus untuk startup dan produk inovatif baru yang menghadapi ketidakpastian tinggi, mengganti blok infrastruktur internal yang statis dengan blok validasi masalah (Problem), Solusi teruji, Metrik Kunci, dan Unfair Advantage.',
    keyConcept: 'Perbandingan BMC Tradisional vs Lean Canvas',
    tkaExamTip: 'Lean Canvas lebih fokus pada Problem-Solution Fit daripada operasional korporasi besar.'
  },
  {
    id: 'pkw-q27',
    number: 27,
    subjectId: 'pkwu',
    topicTag: 'Strategi Pemasaran',
    difficulty: 'Sedang',
    question: 'Saluran distribusi di mana produsen menjual produknya langsung kepada konsumen akhir melalui website toko online resmi atau toko cabang miliknya sendiri tanpa perantara grosir disebut...',
    options: [
      { id: 'A', text: 'Saluran Distribusi 2 Tingkat' },
      { id: 'B', text: 'Saluran Distribusi Langsung (Zero-Level Channel / D2C)' },
      { id: 'C', text: 'Saluran Konsinyasi Agen Tunggal' },
      { id: 'D', text: 'Distribusi Multinasional Tidak Langsung' }
    ],
    correctAnswer: 'B',
    explanation: 'Saluran Distribusi Langsung (Direct to Consumer / D2C) memotong seluruh perantara (tanpa agen/distributor/grosir/pengecer), sehingga produsen mengendalikan harga, margin, dan data hubungan pelanggan secara penuh.',
    keyConcept: 'Tingkatan Saluran Distribusi Barang (Direct vs Indirect)',
    tkaExamTip: 'Direct Selling / D2C = Produsen langsung bertemu Konsumen Akhir.'
  },
  {
    id: 'pkw-q28',
    number: 28,
    subjectId: 'pkwu',
    topicTag: 'Desain & Ergonomi',
    difficulty: 'Sedang',
    question: 'Tahapan pengujian produk di mana prototipe fungsional diuji coba oleh sekelompok konsumen terbatas di luar lingkungan internal perusahaan guna mendeteksi kecacatan penggunaan nyata sebelum peluncuran resmi dinamakan...',
    options: [
      { id: 'A', text: 'Alpha Testing' },
      { id: 'B', text: 'Beta Testing' },
      { id: 'C', text: 'Ideation Brainstorming' },
      { id: 'D', text: 'Material Sourcing' }
    ],
    correctAnswer: 'B',
    explanation: 'Alpha Testing dilakukan di internal oleh tim pengembang perusahaan. Setelah lolos, dilakukan Beta Testing dengan melibatkan calon konsumen eksternal nyata untuk menguji keandalan di lingkungan sehari-hari.',
    keyConcept: 'Pengujian Mutu Prototipe Produk (Alpha vs Beta Testing)',
    tkaExamTip: 'Alpha = Pengujian internal tim pengembang; Beta = Pengujian eksternal bersama pengguna nyata.'
  },
  {
    id: 'pkw-q29',
    number: 29,
    subjectId: 'pkwu',
    topicTag: 'HKI & Legalitas Usaha',
    difficulty: 'Sedang',
    question: 'Masa berlaku perlindungan hukum untuk sertifikat Hak Merek Dagang yang terdaftar di Indonesia adalah...',
    options: [
      { id: 'A', text: '5 tahun dan tidak dapat diperpanjang' },
      { id: 'B', text: '10 tahun dan dapat diperpanjang untuk jangka waktu yang sama' },
      { id: 'C', text: '20 tahun sejak tanggal penerimaan invensi' },
      { id: 'D', text: '50 tahun setelah pencipta meninggal dunia' }
    ],
    correctAnswer: 'B',
    explanation: 'Sertifikat Hak Merek berlaku selama 10 tahun sejak tanggal penerimaan pendaftaran dan dapat diperpanjang terus-menerus setiap 10 tahun sekali selama merek tersebut masih aktif digunakan dalam perdagangan.',
    keyConcept: 'Masa Perlindungan Hukum Hak Merek Dagang',
    tkaExamTip: 'Paten teknologi = 20 tahun (tidak dapat diperpanjang); Merek = 10 tahun (dapat diperpanjang terus).'
  },
  {
    id: 'pkw-q30',
    number: 30,
    subjectId: 'pkwu',
    topicTag: 'Analisis BEP & Keuangan',
    difficulty: 'Sedang',
    question: 'Sebuah usaha kerajinan memiliki biaya bahan baku Rp 15.000 per unit, upah tenaga kerja borongan Rp 5.000 per unit, dan kemasan plastik Rp 2.000 per unit. Biaya tetap total Rp 4.400.000. Jika harga jual ditetapkan Rp 33.000 per unit, berapa unit kerajinan yang harus diproduksi dan terjual untuk mencapai titik impas?',
    options: [
      { id: 'A', text: '200 unit' },
      { id: 'B', text: '300 unit' },
      { id: 'C', text: '400 unit' },
      { id: 'D', text: '500 unit' }
    ],
    correctAnswer: 'C',
    explanation: 'Total Biaya Variabel per unit (VC) = Rp 15.000 + Rp 5.000 + Rp 2.000 = Rp 22.000. Margin Kontribusi per unit = Harga Jual - VC = Rp 33.000 - Rp 22.000 = Rp 11.000. BEP Unit = FC / Margin = Rp 4.400.000 / Rp 11.000 = 400 unit.',
    keyConcept: 'Kalkulasi Gabungan Seluruh Elemen Biaya Variabel dan BEP',
    tkaExamTip: 'Jumlahkan seluruh pos pengeluaran yang berubah mengikuti jumlah produk sebelum menghitung margin kontribusi.'
  }
];
