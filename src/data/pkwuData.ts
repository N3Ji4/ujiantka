import { Topic } from '../types';

export const pkwuTopics: Topic[] = [
  {
    id: 'pkwu-1',
    title: 'Perencanaan Usaha, Lean Canvas & Business Model',
    subheader: 'Pemetaan peluang pasar, value proposition, dan perancangan model bisnis tangkas',
    estimatedReadTime: '8 menit',
    summary: 'Prakarya dan Kewirausahaan (PKWU) TKA menguji pemahaman mendalam tentang siklus wirausaha: identifikasi masalah konsumen, Value Proposition Canvas, 9 elemen Lean Model Canvas, analisis SWOT, serta kelayakan pasar.',
    keyConcepts: [
      {
        title: 'Lean Model Canvas (9 Blok)',
        explanation: '1. Problem, 2. Customer Segments, 3. Unique Value Proposition (UVP), 4. Solution, 5. Channels, 6. Revenue Streams, 7. Cost Structure, 8. Key Metrics, 9. Unfair Advantage (keunggulan kompetitif yang sulit ditiru kompetitor).',
        formulaOrKey: 'UVP = Solusi Nyata + Keunikan Produk - Friksi Konsumen'
      },
      {
        title: 'Analisis SWOT & Strategi Matriks',
        explanation: 'Faktor Internal: Strengths & Weaknesses. Faktor Eksternal: Opportunities & Threats. Strategi SO (Manfaatkan kekuatan untuk rebut peluang), Strategi WO (Atasi kelemahan dengan peluang pasar).',
        formulaOrKey: 'Internal (S, W) vs Eksternal (O, T)'
      },
      {
        title: 'Validasi Masalah & Target Persona',
        explanation: 'Membangun produk berdasarkan Problem-Solution Fit sebelum melakukan produksi massal, guna meminimalkan risiko modal terbuang (wasting capital).',
        formulaOrKey: 'Customer Discovery → Problem Validation → MVP (Minimum Viable Product)'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Menentukan Unfair Advantage Startup PKWU',
        problem: 'Sebuah usaha kerajinan ramah lingkungan memanfaatkan limbah ampas kopi dengan teknologi pengikat getah damar organik berpaten.',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Evaluasi apakah aset tersebut mudah dibeli atau ditiru',
            calculationOrDetail: 'Modal uang atau iklan media sosial bukan unfair advantage karena kompetitor bermodal besar bisa menirunya kapan saja.'
          },
          {
            stepNumber: 2,
            instruction: 'Cari elemen perlindungan hukum dan formula eksklusif',
            calculationOrDetail: 'Formula pengikat organik yang sudah didaftarkan paten dan kemitraan eksklusif dengan 50 kedai kopi lokal merupakan hak eksklusif.'
          },
          {
            stepNumber: 3,
            instruction: 'Kategorikan ke dalam blok Lean Canvas',
            calculationOrDetail: 'Aset paten dan kontrak rantai pasok eksklusif menempati blok "Unfair Advantage".'
          }
        ],
        solution: 'Paten formula kimia organik adalah unfair advantage yang sah.',
        tip: 'Unfair advantage adalah sesuatu yang TIDAK DAPAT dibeli atau ditiru dengan mudah oleh kompetitor bermodal besar.'
      }
    ],
    practicalExamples: [
      {
        title: 'Perumusan Unique Value Proposition (UVP)',
        context: 'Usaha minuman herbal instan ingin bersaing dengan jamu tradisional serbuk di pasar modern.',
        solution: 'UVP yang dirumuskan: "Jamu higienis tanpa ampas siap seduh 10 detik dengan kemasan saset ramah lingkungan dan bebas gula pasir".',
        takeaway: 'UVP harus menjawab: Mengapa konsumen harus membeli dari Anda, bukan dari kompetitor?'
      }
    ],
    quickTips: [
      'MVP (Minimum Viable Product) adalah versi produk paling sederhana yang sudah bisa diuji ke konsumen nyata.',
      'Analisis kelayakan teknis memeriksa ketersediaan bahan baku, mesin produksi, dan keahlian tenaga kerja.',
      'SWOT: Kekuatan (Strength) dan Kelemahan (Weakness) dapat dikontrol langsung oleh manajemen internal perusahaan.'
    ],
    quickCheck: [
      {
        id: 'qc-p1',
        question: 'Manakah dari elemen berikut yang termasuk faktor internal dalam analisis SWOT usaha pengolahan makanan?',
        options: ['Perubahan tren gaya hidup sehat konsumen', 'Kenaikan tarif pajak bahan bakar', 'Keahlian juru masak dan formula resep rahasia', 'Regulasi sertifikasi pangan baru dari dinas'],
        correctIndex: 2,
        explanation: 'Keahlian staf dan resep rahasia adalah faktor internal (Strengths/Weaknesses) yang berada di dalam kendali perusahaan.'
      }
    ]
  },
  {
    id: 'pkwu-2',
    title: 'Analisis BEP, HPP & Manajemen Keuangan Usaha',
    subheader: 'Kalkulasi titik impas produksi, penentuan harga jual, margin laba, dan arus kas',
    estimatedReadTime: '9 menit',
    summary: 'Materi kuantitatif inti PKWU: menghitung Biaya Tetap (Fixed Cost), Biaya Variabel (Variable Cost), Harga Pokok Produksi (HPP), Titik Impas BEP (Unit & Rupiah), serta persentase Markup Margin Laba.',
    keyConcepts: [
      {
        title: 'HPP (Harga Pokok Produksi) per Unit',
        explanation: 'HPP = (Total Biaya Bahan Baku + Total Biaya Tenaga Kerja Langsung + Total Biaya Overhead Pabrik) / Total Jumlah Unit Diproduksi.',
        formulaOrKey: 'HPP = Total Biaya Produksi / Jumlah Unit Produk'
      },
      {
        title: 'Rumus BEP (Break Even Point)',
        explanation: 'BEP Unit = Fixed Cost / (Harga Jual per Unit - Variable Cost per Unit). BEP Rupiah = Fixed Cost / [1 - (Variable Cost / Harga Jual)] atau BEP Unit × Harga Jual.',
        formulaOrKey: 'BEP Unit = FC / (P - VC) ; BEP Rupiah = FC / (Margin Kontribusi Ratio)'
      },
      {
        title: 'Penentuan Harga Jual (Cost-Plus Pricing)',
        explanation: 'Harga Jual = HPP + (Persentase Margin Laba Diinginkan × HPP) atau Harga Jual = HPP / (1 - Margin Laba %).',
        formulaOrKey: 'Harga Jual = HPP × (1 + % Markup Laba)'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Menghitung BEP Unit dan Target Laba Usaha',
        problem: 'Sebuah usaha kerajinan tas memiliki Biaya Tetap (FC) Rp 12.000.000 per bulan. Biaya Variabel (VC) per tas adalah Rp 60.000 dan harga jual (P) adalah Rp 100.000. Berapa unit tas yang harus diproduksi agar memperoleh laba bersih Rp 8.000.000?',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Hitung Margin Kontribusi per unit',
            calculationOrDetail: 'Margin Kontribusi = P - VC = Rp 100.000 - Rp 60.000 = Rp 40.000 per tas.'
          },
          {
            stepNumber: 2,
            instruction: 'Hitung BEP dasar (titik impas tanpa laba)',
            calculationOrDetail: 'BEP Unit = FC / Margin = Rp 12.000.000 / Rp 40.000 = 300 unit tas.'
          },
          {
            stepNumber: 3,
            instruction: 'Tambahkan target laba ke pembilang biaya tetap',
            calculationOrDetail: 'Target Unit = (FC + Target Laba) / Margin = (12.000.000 + 8.000.000) / 40.000 = 20.000.000 / 40.000 = 500 unit tas.'
          }
        ],
        solution: 'Usaha tersebut harus menjual 500 unit tas untuk memperoleh laba Rp 8.000.000.',
        tip: 'Jika ditanya target laba, cukup tambahkan nilai target laba ke Biaya Tetap pada rumus pembilang!'
      }
    ],
    practicalExamples: [
      {
        title: 'Kalkulasi HPP Pengolahan Keripik Pisang 1000 Bungkus',
        context: 'Biaya pisang kepok Rp 2.500.000, minyak & bumbu Rp 1.500.000, kemasan standing pouch & stiker Rp 1.000.000, upah tenaga kerja Rp 1.000.000, gas LPG Rp 400.000.',
        solution: 'Total Biaya Produksi = 2.5jt + 1.5jt + 1jt + 1jt + 0.4jt = Rp 6.400.000. HPP per bungkus = Rp 6.400.000 / 1000 = Rp 6.400. Jika laba 25%, Harga Jual = 6.400 × 1.25 = Rp 8.000 per bungkus.',
        takeaway: 'Pastikan seluruh biaya bahan pendukung dan kemasan dimasukkan ke dalam komponen HPP.'
      }
    ],
    quickTips: [
      'Biaya Tetap (Fixed Cost) tidak berubah meskipun volume produksi bertambah (contoh: sewa ruko, penyusutan mesin).',
      'Biaya Variabel (Variable Cost) berbanding lurus dengan jumlah unit yang diproduksi (contoh: bahan baku, kemasan per biji).',
      'Margin Kontribusi = Harga Jual - Biaya Variabel.'
    ],
    quickCheck: [
      {
        id: 'qc-p2',
        question: 'Jika Biaya Tetap = Rp 6.000.000, Biaya Variabel per unit = Rp 15.000, dan Harga Jual = Rp 25.000, berapa BEP dalam unit?',
        options: ['300 unit', '400 unit', '600 unit', '1000 unit'],
        correctIndex: 2,
        explanation: 'BEP = FC / (P - VC) = 6.000.000 / (25.000 - 15.000) = 6.000.000 / 10.000 = 600 unit.'
      }
    ]
  },
  {
    id: 'pkwu-3',
    title: 'Strategi Pemasaran 4P/7P & Digital Marketing',
    subheader: 'Bauran pemasaran, segmentasi pasar, customer acquisition, dan funnel penjualan',
    estimatedReadTime: '8 menit',
    summary: 'Membahas bauran pemasaran Product, Price, Place, Promotion (ditambah People, Process, Physical Evidence untuk produk jasa), Search Engine Marketing, Social Media Marketing (SMM), Endorsement ROI, dan retensi konsumen.',
    keyConcepts: [
      {
        title: 'Bauran Pemasaran (Marketing Mix 4P & 7P)',
        explanation: 'Product (kualitas, kemasan, merk), Price (skimming, penetrasi, diskon), Place (saluran distribusi langsung/tidak langsung), Promotion (iklan, promosi penjualan, PR, personal selling). Pada 7P ditambahkan People, Process, dan Physical Evidence.',
        formulaOrKey: '4P Produk Fisik | 7P Layanan/Jasa Kreatif'
      },
      {
        title: 'Strategi Penetapan Harga Pasar',
        explanation: 'Penetration Pricing (harga awal rendah untuk merebut pangsa pasar), Price Skimming (harga awal tinggi untuk produk inovatif eksklusif), Psychological Pricing (contoh: Rp 99.900).',
        formulaOrKey: 'Skimming: Inovasi Baru High-end | Penetrasi: Pasar Massal Cepat'
      },
      {
        title: 'Digital Marketing & Conversion Funnel',
        explanation: 'Tahapan AIDA: Attention/Awareness → Interest → Desire → Action. Metrik kunci: Cost Per Click (CPC), Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS).',
        formulaOrKey: 'ROAS = Pendapatan dari Iklan / Total Biaya Iklan'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Memilih Saluran Distribusi Berdasarkan Karakteristik Produk',
        problem: 'Produk pengolahan yoghurt probiotik alami tanpa pengawet dengan masa simpan hanya 7 hari dalam suhu dingin.',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Analisis masa simpan dan sensitivitas suhu produk',
            calculationOrDetail: 'Yoghurt cepat rusak (perishable) dan memerlukan rantai dingin (cold chain).'
          },
          {
            stepNumber: 2,
            instruction: 'Evaluasi panjang rantai distribusi',
            calculationOrDetail: 'Rantai distribusi panjang (Produsen → Distributor → Grosir → Pengecer) memakan waktu 3-5 hari di jalan, meningkatkan risiko pembusukan.'
          },
          {
            stepNumber: 3,
            instruction: 'Pilih saluran distribusi pendek atau langsung',
            calculationOrDetail: 'Saluran distribusi langsung (Direct Selling / D2C lokal) atau 1 tingkat (Produsen → Supermarket lokal berpendingin).'
          }
        ],
        solution: 'Gunakan saluran distribusi langsung atau rantai dingin lokal satu tingkat.',
        tip: 'Produk yang cepat busuk atau bernilai estetika sangat tinggi memerlukan saluran distribusi sependek mungkin.'
      }
    ],
    practicalExamples: [
      {
        title: 'Penerapan Social Proof dalam Penjualan Online',
        context: 'Toko online produk aromaterapi lilin kedelai.',
        solution: 'Menampilkan video testimoni unboxing pelanggan asli dan sertifikasi keamanan bahan di halaman utama katalog.',
        takeaway: 'Bukti sosial (social proof) menurunkan keraguan konsumen baru hingga lebih dari 60%.'
      }
    ],
    quickTips: [
      'Segmentasi pasar dibagi 4: Geografis (lokasi), Demografis (usia, gender, pendapatan), Psikografis (gaya hidup, nilai), dan Perilaku (loyalitas merk).',
      'Endorsement influencer mikro sering kali menghasilkan tingkat keterlibatan (engagement rate) lebih tinggi dibandingkan mega influencer.',
      'Kemasan sekunder berfungsi melindungi kemasan primer dan menarik perhatian di rak display toko.'
    ],
    quickCheck: [
      {
        id: 'qc-p3',
        question: 'Strategi menetapkan harga awal yang sangat terjangkau guna menarik banyak pembeli awal dan merebut pasar disebut...',
        options: ['Price Skimming', 'Penetration Pricing', 'Premium Pricing', 'Cost-Minus Pricing'],
        correctIndex: 1,
        explanation: 'Penetration Pricing (Penetapan Harga Penetrasi) bertujuan menembus pasar secara cepat dengan mematok harga bersahabat.'
      }
    ]
  },
  {
    id: 'pkwu-4',
    title: 'Desain Produk, Ergonomi, Prototipe & Standarisasi Mutu',
    subheader: 'Kaidah estetika, kenyamanan pengguna, tahapan prototyping, dan pengujian produk',
    estimatedReadTime: '8 menit',
    summary: 'Mempelajari prinsip desain ergonomi (kenyamanan, keamanan, kemudahan penggunaan), tahapan rapid prototyping (sketsa, mock-up, proof of concept, functional prototype), serta standardisasi SNI, BPOM, dan sertifikasi Halal.',
    keyConcepts: [
      {
        title: 'Prinsip Ergonomi Produk Kreatif',
        explanation: 'Ergonomi memadukan anatomi tubuh dan efisiensi gerak manusia dengan produk: Utility (kegunaan), Comfort (kenyamanan), Safety (keamanan), Aesthetics (keindahan), Flexibility (keluwesan pakai).',
        formulaOrKey: 'Ergonomi = Manusiawi + Aman + Nyaman + Tepat Guna'
      },
      {
        title: 'Tahapan Prototyping Produk',
        explanation: '1. Ideation & Concept Sketching → 2. Low-Fidelity Mock-up (karton/plastisin) → 3. Functional Prototype (uji coba fungsional & material asli) → 4. Pilot Run / Pre-production.',
        formulaOrKey: 'Sketsa → Mockup → Prototipe Fungsional → Produksi Massal'
      },
      {
        title: 'Sertifikasi Legalitas & Keamanan Pangan/Kerajinan',
        explanation: 'P-IRT (Pangan Industri Rumah Tangga dari Dinkes) untuk skala mikro lokal, BPOM MD/ML untuk industri menengah-besar/berisiko tinggi, Sertifikat Halal BPJPH, SNI (Standar Nasional Indonesia).',
        formulaOrKey: 'P-IRT (Skala Rumah Tangga) vs BPOM MD (Industri Menengah/Tinggi)'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Menentukan Tingkat Sertifikasi Pangan',
        problem: 'Pengusaha memproduksi rendang daging kemasan kaleng steril bertekanan dengan daya simpan 1 tahun pada suhu ruang.',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Analisis kategori risiko bahan pangan',
            calculationOrDetail: 'Daging olahan dalam kemasan kaleng bertekanan tinggi (retort) tergolong pangan berisiko tinggi (potensi bakteri Clostridium botulinum).'
          },
          {
            stepNumber: 2,
            instruction: 'Cek batas kewenangan izin edar P-IRT Dinkes',
            calculationOrDetail: 'Dinas Kesehatan melarang izin P-IRT untuk produk kalengan steril bertekanan dan olahan daging segar berisiko tinggi.'
          },
          {
            stepNumber: 3,
            instruction: 'Tentukan izin edar wajib',
            calculationOrDetail: 'Wajib mengurus izin edar BPOM MD (Makanan Dalam Negeri) langsung ke Badan Pengawas Obat dan Makanan.'
          }
        ],
        solution: 'Produk tersebut wajib memiliki izin edar BPOM MD.',
        tip: 'Makanan berisiko tinggi (susu cair, daging olahan, makanan kaleng steril) TIDAK BISA menggunakan izin P-IRT biasa.'
      }
    ],
    practicalExamples: [
      {
        title: 'Uji Ergonomi Desain Cangkir Keramik',
        context: 'Perajin mendesain pegangan cangkir kopi ergonomis.',
        solution: 'Mengukur lekukan jari telunjuk dan ibu jari agar saat cangkir berisi kopi panas 85°C, panas dinding cangkir tidak menyengat jari.',
        takeaway: 'Desain yang baik mengutamakan keselamatan dan kenyamanan pengguna di atas dekorasi murni.'
      }
    ],
    quickTips: [
      'Hak Kekayaan Intelektual (HKI) terbagi menjadi: Hak Cipta (seni/karya tulis), Merek (logo/nama dagang), Paten (teknologi/invensi fungsi), Desain Industri (bentuk estetika fisik).',
      'NIB (Nomor Induk Berusaha) merupakan pintu masuk legalitas usaha tunggal melalui sistem OSS (Online Single Submission).',
      'Kemasan ramah lingkungan biodegradable meningkatkan nilai jual (brand equity) pada segmen konsumen modern.'
    ],
    quickCheck: [
      {
        id: 'qc-p4',
        question: 'Perlindungan hukum atas bentuk fisik 3 dimensi suatu botol parfum dengan lekukan orisinal didaftarkan pada HKI sebagai...',
        options: ['Hak Paten', 'Desain Industri', 'Rahasia Dagang', 'Hak Cipta Musik'],
        correctIndex: 1,
        explanation: 'Desain Industri melindungi kreasi tentang bentuk, konfigurasi, atau komposisi garis dan warna 3D/2D yang memberikan kesan estetis pada suatu komoditas.'
      }
    ]
  }
];

export const pkwuCheatSheet = [
  {
    category: 'Rumus Keuangan & BEP',
    items: [
      { label: 'BEP Unit', formula: 'BEP = FC / (P - VC)', note: 'FC = Biaya Tetap, P = Harga Jual, VC = Biaya Variabel per unit' },
      { label: 'BEP Rupiah', formula: 'BEP Rp = FC / [1 - (VC / P)]', note: 'Titik impas dalam omset nominal uang' },
      { label: 'Target Laba Unit', formula: 'Unit Target = (FC + Laba) / (P - VC)', note: 'Jumlah penjualan agar mencapai laba bersih tertentu' },
      { label: 'HPP per Unit', formula: 'HPP = Total Biaya Produksi / Unit Jadi', note: 'Biaya riil untuk menghasilkan 1 buah produk' }
    ]
  },
  {
    category: 'Legalitas & Hak Kekayaan Intelektual (HKI)',
    items: [
      { label: 'Paten', formula: 'Invensi teknologi / formula baru', note: 'Berlaku 20 tahun untuk paten biasa, 10 tahun untuk paten sederhana' },
      { label: 'Merek Dagang', formula: 'Nama, logo, simbol, kata pembeda', note: 'Berlaku 10 tahun dan dapat diperpanjang' },
      { label: 'Desain Industri', formula: 'Estetika fisik 2D / 3D wadah atau produk', note: 'Berlaku 10 tahun sejak tanggal penerimaan pendaftaran' },
      { label: 'Hak Cipta', formula: 'Karya seni, buku, musik, program komputer', note: 'Otomatis melekat (deklaratif) saat karya diwujudkan' }
    ]
  },
  {
    category: 'Bauran Pemasaran (Marketing Mix)',
    items: [
      { label: '4P Produk Fisik', formula: 'Product, Price, Place, Promotion', note: 'Fondasi bauran pemasaran barang konsumsi' },
      { label: '7P Produk Jasa', formula: '4P + People, Process, Physical Evidence', note: 'Khusus untuk bisnis berbasis layanan dan jasa kreatif' },
      { label: 'AIDA Model', formula: 'Attention → Interest → Desire → Action', note: 'Alur perjalanan konversi calon konsumen' }
    ]
  }
];
