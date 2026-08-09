import { Question } from '../types';

export const ekonomiQuestions: Question[] = [
  {
    id: 'ekq-1',
    subjectId: 'ekonomi',
    topicTag: 'Mikroekonomi',
    difficulty: 'Mudah',
    question: 'Hukum permintaan menyatakan bahwa jika harga suatu barang naik, maka jumlah barang yang diminta akan...',
    options: [
      { id: 'A', text: 'Bertambah' },
      { id: 'B', text: 'Berkurang' },
      { id: 'C', text: 'Tetap' },
      { id: 'D', text: 'Tidak terpengaruh' }
    ],
    correctAnswer: 'B',
    explanation: 'Hukum permintaan berbanding terbalik: harga naik -> permintaan turun (ceteris paribus).'
  },
  {
    id: 'ekq-2',
    subjectId: 'ekonomi',
    topicTag: 'Mikroekonomi',
    difficulty: 'Sedang',
    question: 'Diketahui fungsi permintaan Qd = 80 - 2P dan fungsi penawaran Qs = -20 + 3P. Harga keseimbangan (Pe) pasar adalah...',
    mathFormula: 'Q_d = Q_s',
    options: [
      { id: 'A', text: '10' },
      { id: 'B', text: '15' },
      { id: 'C', text: '20' },
      { id: 'D', text: '25' }
    ],
    correctAnswer: 'C',
    explanation: '80 - 2P = -20 + 3P => 100 = 5P => P = 20.'
  },
  {
    id: 'ekq-3',
    subjectId: 'ekonomi',
    topicTag: 'Makroekonomi',
    difficulty: 'Sedang',
    question: 'Jumlah seluruh produk yang dihasilkan oleh warga negara baik di dalam negeri maupun di luar negeri dalam kurun waktu satu tahun disebut...',
    options: [
      { id: 'A', text: 'Gross Domestic Product (GDP)' },
      { id: 'B', text: 'Gross National Product (GNP)' },
      { id: 'C', text: 'Net National Product (NNP)' },
      { id: 'D', text: 'Disposal Income (DI)' }
    ],
    correctAnswer: 'B',
    explanation: 'GNP (Produk Nasional Bruto) memperhitungkan WNI di dalam dan luar negeri, tidak termasuk warga negara asing di dalam negeri.'
  },
  {
    id: 'ekq-4',
    subjectId: 'ekonomi',
    topicTag: 'Inflasi',
    difficulty: 'Sedang',
    question: 'Kenaikan harga barang dan jasa secara umum dan terus-menerus dalam jangka waktu tertentu disebut...',
    options: [
      { id: 'A', text: 'Deflasi' },
      { id: 'B', text: 'Inflasi' },
      { id: 'C', text: 'Devaluasi' },
      { id: 'D', text: 'Revaluasi' }
    ],
    correctAnswer: 'B',
    explanation: 'Definisi inflasi adalah kenaikan harga umum secara terus-menerus.'
  },
  {
    id: 'ekq-5',
    subjectId: 'ekonomi',
    topicTag: 'Perbankan',
    difficulty: 'Mudah',
    question: 'Bank sentral di Indonesia yang bertugas menetapkan dan melaksanakan kebijakan moneter adalah...',
    options: [
      { id: 'A', text: 'Bank Mandiri' },
      { id: 'B', text: 'Bank Rakyat Indonesia (BRI)' },
      { id: 'C', text: 'Bank Indonesia (BI)' },
      { id: 'D', text: 'Otoritas Jasa Keuangan (OJK)' }
    ],
    correctAnswer: 'C',
    explanation: 'Bank Indonesia adalah bank sentral Republik Indonesia.'
  },
  {
    id: 'ekq-6',
    subjectId: 'ekonomi',
    topicTag: 'Kebijakan Fiskal',
    difficulty: 'Sedang',
    question: 'Kebijakan yang dilakukan oleh pemerintah dengan cara mengatur penerimaan (pajak) dan pengeluaran negara disebut...',
    options: [
      { id: 'A', text: 'Kebijakan Moneter' },
      { id: 'B', text: 'Kebijakan Fiskal' },
      { id: 'C', text: 'Kebijakan Perdagangan' },
      { id: 'D', text: 'Kebijakan Produksi' }
    ],
    correctAnswer: 'B',
    explanation: 'Kebijakan fiskal berkaitan dengan APBN, pajak, dan pengeluaran pemerintah.'
  },
  {
    id: 'ekq-7',
    subjectId: 'ekonomi',
    topicTag: 'Akuntansi Dasar',
    difficulty: 'Sedang',
    question: 'Persamaan dasar akuntansi yang benar adalah...',
    mathFormula: 'Harta = Utang + Modal',
    options: [
      { id: 'A', text: 'Harta = Utang + Modal' },
      { id: 'B', text: 'Harta = Utang - Modal' },
      { id: 'C', text: 'Modal = Harta + Utang' },
      { id: 'D', text: 'Pendapatan = Beban + Harta' }
    ],
    correctAnswer: 'A',
    explanation: 'Persamaan dasar akuntansi: Aset (Harta) = Liabilitas (Utang) + Ekuitas (Modal).'
  },
  {
    id: 'ekq-8',
    subjectId: 'ekonomi',
    topicTag: 'Akuntansi',
    difficulty: 'Sedang',
    question: 'Penerimaan pendapatan jasa secara tunai dalam jurnal umum akan dicatat di sisi...',
    options: [
      { id: 'A', text: 'Kas (Debet), Pendapatan Jasa (Kredit)' },
      { id: 'B', text: 'Kas (Kredit), Pendapatan Jasa (Debet)' },
      { id: 'C', text: 'Utang (Debet), Kas (Kredit)' },
      { id: 'D', text: 'Modal (Debet), Kas (Kredit)' }
    ],
    correctAnswer: 'A',
    explanation: 'Penerimaan kas menambah harta di Debet, dan bertambahnya pendapatan dicatat di Kredit.'
  },
  {
    id: 'ekq-9',
    subjectId: 'ekonomi',
    topicTag: 'Ketenagakerjaan',
    difficulty: 'Sedang',
    question: 'Pengangguran yang terjadi akibat ketidaksesuaian antara keterampilan pencari kerja dengan kebutuhan pemberi kerja disebut pengangguran...',
    options: [
      { id: 'A', text: 'Konjungtural (siklikal)' },
      { id: 'B', text: 'Struktural' },
      { id: 'C', text: 'Frictional (gesekan)' },
      { id: 'D', text: 'Musiman' }
    ],
    correctAnswer: 'B',
    explanation: 'Pengangguran struktural terjadi karena perubahan struktur ekonomi atau ketidaksesuaian skill.'
  },
  {
    id: 'ekq-10',
    subjectId: 'ekonomi',
    topicTag: 'Perdagangan Internasional',
    difficulty: 'Sedang',
    question: 'Kebijakan pemerintah membatasi jumlah fisik barang impor yang masuk ke dalam negeri disebut...',
    options: [
      { id: 'A', text: 'Tarif' },
      { id: 'B', text: 'Kuota impor' },
      { id: 'C', text: 'Subsidi' },
      { id: 'D', text: 'Dump' }
    ],
    correctAnswer: 'B',
    explanation: 'Kuota adalah pembatasan kuantitas maksimal barang yang boleh diimpor.'
  },
  {
    id: 'ekq-11',
    subjectId: 'ekonomi',
    topicTag: 'Koperasi',
    difficulty: 'Mudah',
    question: 'Sisa Hasil Usaha (SHU) koperasi dibagikan kepada anggota berdasarkan jasa modal dan...',
    options: [
      { id: 'A', text: 'Jumlah simpanan wajib' },
      { id: 'B', text: 'Jasa usaha (partisipasi anggota)' },
      { id: 'C', text: 'Keputusan pengurus' },
      { id: 'D', text: 'Lama keanggotaan' }
    ],
    correctAnswer: 'B',
    explanation: 'SHU koperasi dibagikan adil berdasarkan jasa modal (simpanan) dan jasa transaksi anggota (jasa usaha).'
  },
  {
    id: 'ekq-12',
    subjectId: 'ekonomi',
    topicTag: 'Teori Konsumsi',
    difficulty: 'Sedang',
    question: 'Besarnya tambahan konsumsi akibat adanya tambahan pendapatan disebut...',
    options: [
      { id: 'A', text: 'Marginal Propensity to Consume (MPC)' },
      { id: 'B', text: 'Marginal Propensity to Save (MPS)' },
      { id: 'C', text: 'Average Propensity to Consume (APC)' },
      { id: 'D', text: 'Multiplier effect' }
    ],
    correctAnswer: 'A',
    explanation: 'MPC adalah perbandingan antara tambahan konsumsi (ΔC) dengan tambahan pendapatan (ΔY).'
  },
  {
    id: 'ekq-13',
    subjectId: 'ekonomi',
    topicTag: 'Biaya Produksi',
    difficulty: 'Sedang',
    question: 'Biaya total (TC) yang dikeluarkan perusahaan untuk memproduksi sejumlah barang terdiri atas...',
    options: [
      { id: 'A', text: 'Biaya tetap dan biaya variabel (FC + VC)' },
      { id: 'B', text: 'Biaya marginal dan biaya rata-rata' },
      { id: 'C', text: 'Biaya langsung dan pajak' },
      { id: 'D', text: 'Biaya investasi dan depresiasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Total Cost (TC) = Fixed Cost (FC) + Variable Cost (VC).'
  },
  {
    id: 'ekq-14',
    subjectId: 'ekonomi',
    topicTag: 'Pasar Persaingan Sempurna',
    difficulty: 'Sedang',
    question: 'Ciri utama dari pasar persaingan sempurna adalah...',
    options: [
      { id: 'A', text: 'Hanya ada satu penjual di pasar' },
      { id: 'B', text: 'Barang yang diperjualbelikan bersifat homogen (serupa)' },
      { id: 'C', text: 'Penjual memiliki kekuatan penuh menentukan harga' },
      { id: 'D', text: 'Terdapat hambatan besar untuk keluar masuk pasar' }
    ],
    correctAnswer: 'B',
    explanation: 'Pasar persaingan sempurna memiliki banyak penjual/pembeli, produk homogen, dan bertindak sebagai price taker.'
  },
  {
    id: 'ekq-15',
    subjectId: 'ekonomi',
    topicTag: 'Monopoli',
    difficulty: 'Sedang',
    question: 'Struktur pasar di mana hanya terdapat satu perusahaan yang menguasai seluruh penawaran suatu barang yang tidak memiliki substitusi dekat disebut...',
    options: [
      { id: 'A', text: 'Oligopoli' },
      { id: 'B', text: 'Monopoli' },
      { id: 'C', text: 'Monopolistik' },
      { id: 'D', text: 'Duopoli' }
    ],
    correctAnswer: 'B',
    explanation: 'Pasar monopoli dikuasai oleh satu produsen tunggal (price maker).'
  },
  {
    id: 'ekq-16',
    subjectId: 'ekonomi',
    topicTag: 'Pertumbuhan Ekonomi',
    difficulty: 'Sedang',
    question: 'Pertumbuhan ekonomi suatu negara dihitung berdasarkan persentase kenaikan dari...',
    options: [
      { id: 'A', text: 'Pendapatan per kapita' },
      { id: 'B', text: 'Produk Domestik Bruto (PDB) riil dari tahun ke tahun' },
      { id: 'C', text: 'Jumlah uang beredar' },
      { id: 'D', text: 'Cadangan devisa negara' }
    ],
    correctAnswer: 'B',
    explanation: 'Pertumbuhan ekonomi dihitung dari kenaikan PDB riil dari periode ke periode.'
  },
  {
    id: 'ekq-17',
    subjectId: 'ekonomi',
    topicTag: 'APBN & APBD',
    difficulty: 'Sedang',
    question: 'Jika dalam APBN belanja negara lebih besar daripada pendapatan negara (penerimaan pajak), kondisi tersebut dinamakan...',
    options: [
      { id: 'A', text: 'Surplus anggaran' },
      { id: 'B', text: 'Defisit anggaran' },
      { id: 'C', text: 'Anggaran berimbang' },
      { id: 'D', text: 'Devisa positif' }
    ],
    correctAnswer: 'B',
    explanation: 'Defisit anggaran terjadi saat pengeluaran melampaui pendapatan negara.'
  },
  {
    id: 'ekq-18',
    subjectId: 'ekonomi',
    topicTag: 'Manajemen',
    difficulty: 'Mudah',
    question: 'Fungsi manajemen yang pertama kali dilakukan oleh seorang manajer dalam organisasi adalah...',
    options: [
      { id: 'A', text: 'Planning (Perencanaan)' },
      { id: 'B', text: 'Organizing (Pengorganisasian)' },
      { id: 'C', text: 'Actuating (Penggerakan)' },
      { id: 'D', text: 'Controlling (Pengawasan)' }
    ],
    correctAnswer: 'A',
    explanation: 'Fungsi dasar manajemen menurut Henry Fayol / Luther Gulick diawali dengan Planning (Perencanaan).'
  },
  {
    id: 'ekq-19',
    subjectId: 'ekonomi',
    topicTag: 'Bursa Efek',
    difficulty: 'Sedang',
    question: 'Surat berharga yang menunjukkan bukti kepemilikan sebagian dari suatu perusahaan berbadan hukum PT disebut...',
    options: [
      { id: 'A', text: 'Obligasi' },
      { id: 'B', text: 'Saham' },
      { id: 'C', text: 'Reksadana' },
      { id: 'D', text: 'Sertifikat deposito' }
    ],
    correctAnswer: 'B',
    explanation: 'Saham (stocks) adalah bukti kepemilikan ekuitas di suatu perusahaan terbuka.'
  },
  {
    id: 'ekq-20',
    subjectId: 'ekonomi',
    topicTag: 'Pajak',
    difficulty: 'Sedang',
    question: 'Pajak yang dikenakan atas penghasilan yang diterima atau diperoleh wajib pajak orang pribadi maupun badan dalam tahun pajak disebut...',
    options: [
      { id: 'A', text: 'Pajak Pertambahan Nilai (PPN)' },
      { id: 'B', text: 'Pajak Penghasilan (PPh)' },
      { id: 'C', text: 'Pajak Bumi dan Bangunan (PBB)' },
      { id: 'D', text: 'Bea Cukai' }
    ],
    correctAnswer: 'B',
    explanation: 'PPh adalah pajak atas penghasilan perorangan dan korporasi.'
  },
  {
    id: 'ekq-21',
    subjectId: 'ekonomi',
    topicTag: 'Elastisitas',
    difficulty: 'Sulit',
    question: 'Jika harga suatu barang naik 10% dan mengakibatkan jumlah permintaan turun sebesar 20%, jenis elastisitas permintaan barang tersebut adalah...',
    options: [
      { id: 'A', text: 'Inelastis (Ed < 1)' },
      { id: 'B', text: 'Elastis (Ed > 1)' },
      { id: 'C', text: 'Uniter (Ed = 1)' },
      { id: 'D', text: 'Inelastis sempurna' }
    ],
    correctAnswer: 'B',
    explanation: 'Ed = 20% / 10% = 2. Karena Ed > 1, permintaan bersifat elastis.'
  },
  {
    id: 'ekq-22',
    subjectId: 'ekonomi',
    topicTag: 'Neraca Pembayaran',
    difficulty: 'Sedang',
    question: 'Catatan sistematis mengenai seluruh transaksi ekonomi antara penduduk suatu negara dengan negara lain dalam periode tertentu disebut...',
    options: [
      { id: 'A', text: 'Neraca perdagangan' },
      { id: 'B', text: 'Neraca pembayaran (balance of payments)' },
      { id: 'C', text: 'APBN' },
      { id: 'D', text: 'PDB' }
    ],
    correctAnswer: 'B',
    explanation: 'Neraca pembayaran mencatat seluruh transaksi internasional (perdagangan, modal, transfer).'
  },
  {
    id: 'ekq-23',
    subjectId: 'ekonomi',
    topicTag: 'Akuntansi Perusahaan Dagang',
    difficulty: 'Sulit',
    question: 'Dalam laporan laba rugi perusahaan dagang, Harga Pokok Penjualan (HPP) dihitung dengan rumus...',
    options: [
      { id: 'A', text: 'Persediaan awal + Pembelian bersih - Persediaan akhir' },
      { id: 'B', text: 'Penjualan - Beban operasional' },
      { id: 'C', text: 'Pembelian - Beban angkut' },
      { id: 'D', text: 'Modal akhir - Modal awal' }
    ],
    correctAnswer: 'A',
    explanation: 'HPP = Persediaan Awal + Pembelian Bersih - Persediaan Akhir.'
  },
  {
    id: 'ekq-24',
    subjectId: 'ekonomi',
    topicTag: 'Ilmu Ekonomi',
    difficulty: 'Mudah',
    question: 'Inti masalah ekonomi yang dihadapi oleh setiap manusia pada dasarnya adalah...',
    options: [
      { id: 'A', text: 'Kelangkaan (scarcity) di tengah kebutuhan manusia yang tidak terbatas' },
      { id: 'B', text: 'Tingginya suku bunga bank' },
      { id: 'C', text: 'Fluktuasi nilai tukar rupiah' },
      { id: 'D', text: 'Banyaknya pengangguran terdidik' }
    ],
    correctAnswer: 'A',
    explanation: 'Inti ilmu ekonomi adalah mengatasi kelangkaan sumber daya untuk memenuhi kebutuhan manusia yang tak terbatas.'
  },
  {
    id: 'ekq-25',
    subjectId: 'ekonomi',
    topicTag: 'Pasar Oligopoli',
    difficulty: 'Sedang',
    question: 'Struktur pasar yang dikuasai oleh beberapa perusahaan besar saja (seperti industri semen atau industri telekomunikasi) disebut...',
    options: [
      { id: 'A', text: 'Monopoli' },
      { id: 'B', text: 'Oligopoli' },
      { id: 'C', text: 'Monopsoni' },
      { id: 'D', text: 'Pasar persaingan sempurna' }
    ],
    correctAnswer: 'B',
    explanation: 'Oligopoli adalah pasar dengan sedikit produsen yang saling mempengaruhi kebijakan harga.'
  },
  {
    id: 'ekq-26',
    subjectId: 'ekonomi',
    topicTag: 'Kebijakan Moneter',
    difficulty: 'Sedang',
    question: 'Untuk mengatasi inflasi yang tinggi, Bank Indonesia dapat menerapkan kebijakan moneter kontraktif dengan cara...',
    options: [
      { id: 'A', text: 'Menurunkan suku bunga acuan' },
      { id: 'B', text: 'Menaikkan suku bunga acuan dan giro wajib minimum' },
      { id: 'C', text: 'Membeli surat berharga negara (SBN)' },
      { id: 'D', text: 'Mencetak lebih banyak uang kertas' }
    ],
    correctAnswer: 'B',
    explanation: 'Kebijakan kontraktif (tight money policy) menaikkan suku bunga dan GWM untuk mengerem jumlah uang beredar.'
  },
  {
    id: 'ekq-27',
    subjectId: 'ekonomi',
    topicTag: 'Pendapatan Nasional',
    difficulty: 'Sulit',
    question: 'Besarnya Pendapatan Nasional Netto (NNI) diperoleh dari Net National Product (NNP) dikurangi dengan...',
    options: [
      { id: 'A', text: 'Pajak tidak langsung neto' },
      { id: 'B', text: 'Penyusutan barang modal' },
      { id: 'C', text: 'Transfer payment' },
      { id: 'D', text: 'Pajak perseroan' }
    ],
    correctAnswer: 'A',
    explanation: 'NNI = NNP - Pajak tidak langsung neto (pajak tak langsung dikurangi subsidi).'
  },
  {
    id: 'ekq-28',
    subjectId: 'ekonomi',
    topicTag: 'Perdagangan Internasional',
    difficulty: 'Sedang',
    question: 'Teori keunggulan komparatif (Comparative Advantage) dalam perdagangan internasional dikemukakan oleh...',
    options: [
      { id: 'A', text: 'Adam Smith' },
      { id: 'B', text: 'David Ricardo' },
      { id: 'C', text: 'J.M. Keynes' },
      { id: 'D', text: 'Karl Marx' }
    ],
    correctAnswer: 'B',
    explanation: 'David Ricardo menyatakan bahwa negara akan tetap untung berdagang jika memproduksi barang yang memiliki biaya oportunitas lebih rendah (keunggulan komparatif).'
  },
  {
    id: 'ekq-29',
    subjectId: 'ekonomi',
    topicTag: 'Pembangunan Ekonomi',
    difficulty: 'Sedang',
    question: 'Indikator utama yang digunakan PBB untuk mengukur tingkat pembangunan manusia dan kualitas hidup suatu negara (IPM) meliputi...',
    options: [
      { id: 'A', text: 'Pendapatan per kapita, tingkat pengangguran, dan inflasi' },
      { id: 'B', text: 'Angka harapan hidup, pendidikan (lama sekolah), dan standar hidup layak' },
      { id: 'C', text: 'Jumlah ekspor migas dan cadangan devisa' },
      { id: 'D', text: 'Jumlah kepemilikan kendaraan bermotor' }
    ],
    correctAnswer: 'B',
    explanation: 'IPM (Indeks Pembangunan Manusia / HDI) diukur dari tiga dimensi: kesehatan (harapan hidup), pendidikan, dan ekonomi (standar hidup layak).'
  },
  {
    id: 'ekq-30',
    subjectId: 'ekonomi',
    topicTag: 'Kewirausahaan',
    difficulty: 'Mudah',
    question: 'Sikap mental dan jiwa kewirausahaan yang selalu berani mengambil risiko untuk menciptakan nilai tambah disebut...',
    options: [
      { id: 'A', text: 'Konsumerisme' },
      { id: 'B', text: 'Intrapreneurship / Entrepreneurship' },
      { id: 'C', text: 'Birokrasi' },
      { id: 'D', text: 'Kapitalisme mutlak' }
    ],
    correctAnswer: 'B',
    explanation: 'Kewirausahaan (entrepreneurship) adalah kemampuan inovasi dan keberanian mengambil risiko bisnis.'
  }
];
