import { Topic } from '../types';

export const pkwuTopics: Topic[] = [
  {
    id: 'p1',
    title: 'Analisis Peluang Usaha & Matriks SWOT Strategis',
    categoryTag: 'Kewirausahaan & Strategi',
    summary: 'Metode identifikasi peluang usaha baru, analisis faktor internal (Kekuatan & Kelemahan) dan eksternal (Peluang & Ancaman), serta penyusunan strategi SO, WO, ST, dan WT.',
    conceptExplanation: 'Analisis SWOT adalah instrumen perencanaan strategis untuk mengevaluasi posisi bisnis. Faktor internal (Strengths & Weaknesses) dapat dikendalikan langsung oleh manajemen, sedangkan faktor eksternal (Opportunities & Threats) berasal dari lingkungan luar seperti tren pasar, kompetitor, dan regulasi pemerintah.',
    keyPoints: [
      'Strengths (Kekuatan): Keunggulan kompetitif internal (misal: resep unik, hak paten, tim ahli, teknologi modern).',
      'Weaknesses (Kelemahan): Keterbatasan internal (misal: modal terbatas, kapasitas produksi kecil, belum ada merek terkenal).',
      'Opportunities (Peluang): Situasi eksternal yang menguntungkan (misal: tren gaya hidup sehat, insentif UMKM, pasar ekspor terbuka).',
      'Threats (Ancaman): Hambatan eksternal (misal: kenaikan harga bahan baku, regulasi baru yang ketat, persaingan harga perang tarif).',
      'Strategi SO (Maxi-Maxi): Memanfaatkan seluruh kekuatan untuk merebut peluang sebesar-besarnya.',
      'Strategi WO (Mini-Maxi): Memperbaiki kelemahan dengan memanfaatkan peluang yang ada.',
      'Strategi ST (Maxi-Mini): Menggunakan kekuatan internal untuk mengatasi ancaman eksternal.',
      'Strategi WT (Mini-Mini): Meminimalkan kelemahan internal dan menghindari ancaman bisnis.'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Menyusun Matriks SWOT dan Memilih Strategi Terbaik',
        description: 'Langkah praktis analisis usaha dari identifikasi hingga eksekusi program.',
        steps: [
          'Langkah 1: Kumpulkan data internal perusahaan (keuangan, SDM, produk, fasilitas) untuk menyusun daftar Strength & Weakness.',
          'Langkah 2: Lakukan riset pasar, analisis kompetitor, dan tren industri untuk mendata Opportunity & Threat.',
          'Langkah 3: Masukkan ke dalam tabel matriks 2x2 silang.',
          'Langkah 4: Buat pasangan strategi: pasangkan S dengan O (Strategi SO), W dengan O (Strategi WO), S dengan T (Strategi ST), dan W dengan T (Strategi WT).',
          'Langkah 5: Beri prioritas pada strategi yang memiliki dampak pendapatan tertinggi dengan risiko yang terukur.'
        ],
        tips: 'Jangan mencampurkan faktor internal dan eksternal! Jika itu bisa diubah langsung oleh perusahaan (seperti harga atau kualitas), itu internal (S/W).'
      }
    ],
    formulaDetails: [
      {
        title: 'Formulasi Strategi Matriks SWOT',
        formula: '\\text{Strategi SO} = \\text{Strengths} \\times \\text{Opportunities} \\quad (\\text{Agresif / Pertumbuhan})',
        explanation: 'Fokus ekspansi bisnis saat perusahaan kuat dan pasar sedang terbuka lebar.',
        variables: [
          { symbol: 'SO', meaning: 'Strategi Agresif memacu pertumbuhan usaha' },
          { symbol: 'WO', meaning: 'Strategi Turnaround / pembenahan internal' },
          { symbol: 'ST', meaning: 'Strategi Diversifikasi menghadapi ancaman' },
          { symbol: 'WT', meaning: 'Strategi Defensif / penyelamatan usaha' }
        ]
      }
    ],
    formulas: [
      '\\text{Strategi SO: Kekuatan Internal} + \\text{Peluang Eksternal (Ekspansi)}',
      '\\text{Strategi WO: Perbaikan Kelemahan} + \\text{Pemanfaatan Peluang}',
      '\\text{Strategi ST: Penggunaan Kekuatan} + \\text{Mitigasi Ancaman}',
      '\\text{Strategi WT: Pengurangan Kelemahan} + \\text{Penghindaran Ancaman (Defensif)}'
    ],
    examples: [
      {
        problem: 'Sebuah usaha keripik singkong lokal memiliki cita rasa sangat enak dan resep turun-temurun (Strength), tetapi kemasannya masih plastik biasa tanpa izin P-IRT sehingga belum bisa masuk minimarket modern (Weakness). Saat ini permintaan camilan tradisional kemasan di minimarket sangat tinggi (Opportunity). Rancanglah Strategi WO yang paling tepat!',
        given: 'Strength: Rasa enak; Weakness: Kemasan tradisional & belum P-IRT; Opportunity: Permintaan minimarket tinggi',
        questionTarget: 'Strategi WO (Mini-Maxi) yang tepat',
        steps: [
          'Analisis kelemahan: Kemasan plastik polos dan belum ada izin resmi P-IRT.',
          'Analisis peluang: Pasar modern minimarket membuka pintu lebar untuk camilan lokal.',
          'Formulasi Strategi WO: Meningkatkan kualitas kemasan menjadi standing pouch kedap udara berdesain modern dan segera mengurus sertifikasi P-IRT serta Halal agar produk memenuhi syarat masuk ke jaringan minimarket modern.'
        ],
        solution: 'Strategi WO: Mengupgrade desain kemasan modern kedap udara dan melegalkan izin P-IRT/Halal guna memanfaatkan peluang distribusi ke jaringan ritel minimarket modern.'
      }
    ],
    quickTips: [
      'Strength & Weakness = Berasal dari DALAM (Internal).',
      'Opportunity & Threat = Berasal dari LUAR (Eksternal).'
    ]
  },
  {
    id: 'p2',
    title: 'Perhitungan Biaya Produksi, HPP & Break Even Point (BEP)',
    categoryTag: 'Akuntansi & Keuangan Usaha',
    summary: 'Klasifikasi biaya tetap (FC) dan biaya variabel (VC), perhitungan Harga Pokok Produksi (HPP), titik impas produksi (BEP Unit & BEP Rupiah), margin kontribusi, dan estimasi keuntungan usaha.',
    conceptExplanation: 'Break Even Point (BEP) adalah kondisi titik impas di mana total pendapatan (Total Revenue) sama persis dengan total pengeluaran biaya (Total Cost). Pada titik ini perusahaan tidak mengalami kerugian dan belum memperoleh laba (Laba = 0). Mengetahui BEP sangat krusial agar wirausahawan mengetahui target minimum penjualan.',
    keyPoints: [
      'Biaya Tetap (Fixed Cost / FC): Biaya yang jumlah totalnya tetap dan tidak dipengaruhi oleh volume produksi (contoh: sewa ruko, gaji pokok karyawan bulanan, depresiasi mesin).',
      'Biaya Variabel (Variable Cost / VC): Biaya yang totalnya bertambah sebanding dengan jumlah unit produk yang dihasilkan (contoh: bahan baku utama, kemasan per bungkus, upah borongan).',
      'Total Biaya (Total Cost / TC): TC = FC + (VC_unit · Total Unit).',
      'Harga Pokok Produksi (HPP per unit): Total Seluruh Biaya Produksi / Jumlah Unit yang Dihasilkan.',
      'Margin Kontribusi per Unit: Harga Jual per unit (P) dikurangi Biaya Variabel per unit (VC_unit).',
      'BEP Unit = Fixed Cost / (Harga Jual per unit - Biaya Variabel per unit) = FC / (P - VC).',
      'BEP Rupiah = Fixed Cost / [1 - (Total Biaya Variabel / Total Penjualan)] = BEP Unit · Harga Jual (P).'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Menghitung BEP Unit & BEP Rupiah Langkah Demi Langkah',
        description: 'Panduan menghitung titik impas usaha dengan mudah dan tepat.',
        steps: [
          'Langkah 1: Pisahkan seluruh biaya operasional menjadi Biaya Tetap (FC) dan Biaya Variabel per unit (VC).',
          'Langkah 2: Tentukan Harga Jual per unit (P) yang ditawarkan ke konsumen.',
          'Langkah 3: Hitung Margin Kontribusi per unit = P - VC.',
          'Langkah 4: Hitung BEP Unit = FC / (P - VC). Hasilnya menunjukkan berapa unit produk yang harus terjual agar impas.',
          'Langkah 5: Hitung BEP Rupiah = BEP Unit · P. Hasilnya menunjukkan berapa omzet (rupiah) yang harus didapatkan agar impas.',
          'Langkah 6: Untuk target laba tertentu (L): Target Unit = (FC + Target Laba) / (P - VC).'
        ],
        tips: 'Ingat: jika harga jual dinaikkan atau biaya variabel ditekan, maka BEP Unit akan turun (titik impas lebih cepat tercapai)!'
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus BEP (Titik Impas) Unit',
        formula: '\\text{BEP}_{\\text{unit}} = \\frac{\\text{FC}}{P - \\text{VC}}',
        explanation: 'Jumlah kuantitas produk minimal yang wajib diproduksi dan terjual untuk menutupi seluruh modal operasional.',
        variables: [
          { symbol: 'FC (Fixed Cost)', meaning: 'Total Biaya Tetap operasional' },
          { symbol: 'P (Price)', meaning: 'Harga Jual produk per satu unit' },
          { symbol: 'VC (Variable Cost)', meaning: 'Biaya Variabel per satu unit produk' },
          { symbol: 'P - VC', meaning: 'Margin Kontribusi per unit' }
        ]
      },
      {
        title: 'Rumus BEP Penjualan (Rupiah)',
        formula: '\\text{BEP}_{\\text{rupiah}} = \\frac{\\text{FC}}{1 - \\frac{\\text{VC}}{P}} \\quad \\text{atau} \\quad \\text{BEP}_{\\text{rupiah}} = \\text{BEP}_{\\text{unit}} \\times P',
        explanation: 'Nilai omzet nominal uang yang wajib dicapai agar usaha tidak merugi.',
        variables: [
          { symbol: '1 - (VC / P)', meaning: 'Rasio Margin Kontribusi (Contribution Margin Ratio)' }
        ],
        quickTip: 'Cara termudah: cari dulu BEP Unit, lalu kalikan langsung dengan Harga Jual (P)!'
      }
    ],
    formulas: [
      '\\text{HPP per unit} = \\frac{\\text{Total Biaya Produksi (FC + Total VC)}}{\\text{Jumlah Unit Diproduksi}}',
      '\\text{BEP}_{\\text{unit}} = \\frac{\\text{FC}}{P - \\text{VC}}',
      '\\text{BEP}_{\\text{rupiah}} = \\text{BEP}_{\\text{unit}} \\times P',
      '\\text{Target Unit (Laba L)} = \\frac{\\text{FC} + L}{P - \\text{VC}}',
      '\\text{Laba Bersih} = (\\text{Total Unit} \\times (P - \\text{VC})) - \\text{FC}'
    ],
    examples: [
      {
        problem: 'Sebuah usaha minuman boba memiliki Biaya Tetap per bulan sebesar Rp 6.000.000 (sewa tempat & gaji). Biaya variabel untuk membuat 1 cup boba (bahan & kemasan) adalah Rp 6.000. Harga jual ditetapkan Rp 16.000 per cup. Tentukan:\n1. BEP dalam Unit (cup)\n2. BEP dalam Rupiah\n3. Berapa cup yang harus terjual jika ingin memperoleh laba bersih Rp 4.000.000 per bulan?',
        given: 'FC = Rp 6.000.000, VC = Rp 6.000 / cup, P = Rp 16.000 / cup, Target Laba = Rp 4.000.000',
        questionTarget: 'BEP Unit, BEP Rupiah, dan Target Penjualan untuk Laba Rp 4 Juta',
        steps: [
          'Hitung Margin Kontribusi per cup: P - VC = Rp 16.000 - Rp 6.000 = Rp 10.000 / cup.',
          '1. BEP Unit = FC / (P - VC) = 6.000.000 / 10.000 = 600 cup.',
          '2. BEP Rupiah = BEP Unit · P = 600 · Rp 16.000 = Rp 9.600.000.',
          '3. Target Unit untuk Laba Rp 4 Juta: Target = (FC + Laba) / (P - VC) = (6.000.000 + 4.000.000) / 10.000 = 10.000.000 / 10.000 = 1.000 cup.'
        ],
        solution: 'BEP Unit = 600 cup, BEP Rupiah = Rp 9.600.000, dan Target Penjualan untuk laba Rp 4 Juta = 1.000 cup per bulan.'
      }
    ],
    quickTips: [
      'Jika penjualan < BEP unit → Usaha Rugi.',
      'Jika penjualan = BEP unit → Impas (Laba Nol).',
      'Jika penjualan > BEP unit → Usaha Untung / Laba.'
    ]
  },
  {
    id: 'p3',
    title: 'Strategi Penetapan Harga & Analisis Pasar (Pricing Strategy)',
    categoryTag: 'Pemasaran & Manajemen',
    summary: 'Metode penetapan harga berbasis biaya (Cost-Plus & Markup), berbasis persaingan (Competitive Pricing), dan berbasis nilai (Value-Based), serta strategi peluncuran produk (Skimming vs Penetration).',
    conceptExplanation: 'Penetapan harga menentukan persepsi konsumen dan margin keuntungan bisnis. Harga yang terlalu murah dapat menurunkan citra kualitas (perceived quality), sedangkan harga yang terlalu mahal dapat menurunkan volume penjualan jika diferensiasi produk lemah.',
    keyPoints: [
      'Cost-Plus Pricing: Menambahkan persentase keuntungan (markup) di atas total HPP produk. Harga Jual = HPP + (% Laba · HPP).',
      'Markup Pricing: Berdasarkan persentase dari harga jual. Harga Jual = HPP / (1 - % Margin yang diinginkan).',
      'Price Skimming (Memerah Pasar): Menetapkan harga awal yang sangat tinggi untuk membidik segmen premium/early adopter yang tidak sensitif harga, kemudian menurunkan harga bertahap seiring bertambahnya kompetitor (contoh: peluncuran iPhone/gadget flagship).',
      'Penetration Pricing (Penetrasi Pasar): Menetapkan harga awal sangat rendah dan terjangkau untuk merebut pangsa pasar secara kilat dan menyingkirkan kompetitor baru (contoh: promo tarif awal ojek online / layanan streaming).',
      'Dynamic Pricing: Penyesuaian harga secara fleksibel mengikuti fluktuasi permintaan (contoh: tiket pesawat & hotel saat musim liburan).'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Menghitung Harga Jual Metode Cost-Plus Pricing',
        description: 'Langkah menentukan harga jual berdasarkan target persentase laba.',
        steps: [
          'Hitung total HPP per unit (semua bahan baku + tenaga kerja langsung + biaya overhead per unit).',
          'Tentukan margin keuntungan yang diinginkan (misal 30% atau 0,30).',
          'Hitung nominal keuntungan: Laba = HPP · 30%.',
          'Jumlahkan: Harga Jual = HPP + Laba nominal.'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus Cost-Plus Pricing',
        formula: 'P = \\text{HPP} + (\\%\\text{Markup} \\times \\text{HPP}) = \\text{HPP} \\times (1 + \\%\\text{Markup})',
        explanation: 'Metode paling umum untuk memastikan setiap produk yang terjual pasti menghasilkan margin profit.',
        variables: [
          { symbol: 'P', meaning: 'Harga jual produk yang ditawarkan ke pasar' },
          { symbol: 'HPP', meaning: 'Harga Pokok Produksi per unit' },
          { symbol: 'Markup', meaning: 'Persentase keuntungan yang ditargetkan' }
        ]
      }
    ],
    formulas: [
      'P = \\text{HPP} \\times (1 + \\%\\text{Markup})',
      '\\text{Margin Kotor (\\%)} = \\frac{\\text{Harga Jual} - \\text{HPP}}{\\text{Harga Jual}} \\times 100\\%',
      '\\text{ROI (Return on Investment)} = \\frac{\\text{Laba Bersih}}{\\text{Total Investasi / Modal}} \\times 100\\%'
    ],
    examples: [
      {
        problem: 'Sebuah produsen tas rajut menghitung HPP pembuatan 1 buah tas adalah Rp 120.000. Jika produsen menginginkan persentase markup laba sebesar 40%, berapa harga jual tas tersebut ke konsumen?',
        given: 'HPP = Rp 120.000, Markup = 40% (0,40)',
        questionTarget: 'Harga Jual P',
        steps: [
          'Hitung nominal laba per tas: Laba = 40% · Rp 120.000 = Rp 48.000.',
          'Hitung harga jual: P = HPP + Laba = Rp 120.000 + Rp 48.000 = Rp 168.000.'
        ],
        solution: 'Harga jual tas rajut adalah Rp 168.000 per buah.'
      }
    ],
    quickTips: [
      'Ingat beda Skimming vs Penetration: Skimming = Mulai dari MAHAL (menyaring pembeli kaya), Penetration = Mulai dari MURAH (merebut pasar massal).'
    ]
  },
  {
    id: 'p4',
    title: 'Marketing Mix (4P / 7P) & Funnel Digital Marketing (AIDA)',
    categoryTag: 'Pemasaran & Digital',
    summary: 'Konsep bauran pemasaran 4P (Product, Price, Place, Promotion) untuk produk barang dan 7P (+ People, Process, Physical Evidence) untuk jasa, serta sales funnel AIDA dan metriks digital marketing.',
    conceptExplanation: 'Pemasaran modern menggabungkan strategi bauran pemasaran dengan saluran digital. Model AIDA (Attention, Interest, Desire, Action) memetakan perjalanan konsumen dari pertama kali melihat iklan hingga melakukan transaksi pembelian.',
    keyPoints: [
      '4P Produk Barang: Product (kualitas, desain, kemasan), Price (strategi harga, diskon), Place (saluran distribusi fisik & online), Promotion (iklan, promosi penjualan, PR, personal selling).',
      '7P Produk Jasa: Ditambah People (pelayanan staf & keramahan), Process (alur pemesanan yang cepat & mudah), Physical Evidence (tampilan toko, suasana, bukti fisik sertifikat).',
      'Sales Funnel AIDA: Attention (menarik perhatian melalui konten viral/iklan) → Interest (membangkitkan minat dengan edukasi manfaat) → Desire (menciptakan hasrat dengan ulasan positif & promo terbatas) → Action (mendorong pembelian / checkout).',
      'Metriks Digital Marketing: CAC (Customer Acquisition Cost), LTV (Customer Lifetime Value), ROAS (Return on Ad Spend = Revenue Iklan / Biaya Iklan), Conversion Rate (CVR).'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Mengukur Efektivitas Iklan Digital (ROAS & Konversi)',
        description: 'Langkah menilai apakah promosi berbayar mendatangkan keuntungan.',
        steps: [
          'Catat total biaya belanja iklan (Ad Spend), misal Rp 1.000.000.',
          'Catat total nilai penjualan omzet kotor yang dihasilkan dari iklan tersebut, misal Rp 5.000.000.',
          'Hitung ROAS = Total Penjualan / Biaya Iklan = 5.000.000 / 1.000.000 = 5x (atau 500%).',
          'Jika ROAS > 1 (setelah dikurangi HPP produk), kampanye iklan dinyatakan untung (profitable).'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Return on Ad Spend (ROAS)',
        formula: '\\text{ROAS} = \\frac{\\text{Total Pendapatan dari Iklan}}{\\text{Total Biaya Iklan}}',
        explanation: 'Mengukur efisiensi setiap rupiah yang dikeluarkan untuk iklan digital.',
        variables: [
          { symbol: 'ROAS', meaning: 'Pengali pendapatan per rupiah biaya iklan' }
        ]
      }
    ],
    formulas: [
      '\\text{ROAS} = \\frac{\\text{Revenue Iklan}}{\\text{Biaya Iklan}}',
      '\\text{Conversion Rate (CVR)} = \\frac{\\text{Jumlah Pembeli}}{\\text{Total Pengunjung / Klik}} \\times 100\\%',
      '\\text{CAC} = \\frac{\\text{Total Biaya Pemasaran}}{\\text{Jumlah Pelanggan Baru}}'
    ],
    examples: [
      {
        problem: 'Sebuah toko online mengeluarkan biaya iklan Instagram Ads sebesar Rp 500.000 dan mendatangkan 1.000 klik pengunjung website. Dari 1.000 pengunjung tersebut, terdapat 50 orang yang melakukan transaksi pembelian. Hitunglah Conversion Rate (CVR) toko online tersebut!',
        given: 'Total Klik Pengunjung = 1.000, Jumlah Pembeli = 50 orang',
        questionTarget: 'Tingkat Konversi (Conversion Rate / CVR)',
        steps: [
          'Gunakan rumus CVR: CVR = (Jumlah Pembeli / Total Pengunjung) · 100%.',
          'CVR = (50 / 1.000) · 100% = 0,05 · 100% = 5%.'
        ],
        solution: 'Conversion Rate toko online tersebut adalah 5% (tergolong sangat baik untuk e-commerce standar).'
      }
    ],
    quickTips: [
      'Rata-rata conversion rate website e-commerce global berkisar antara 2% - 3%. Di atas 4% tergolong luar biasa.',
      'Retention (mempertahankan pelanggan lama) biayanya 5x lebih hemat daripada mencari pelanggan baru (CAC).'
    ]
  },
  {
    id: 'p5',
    title: 'Hak Kekayaan Intelektual (HKI) & Legalitas Usaha',
    categoryTag: 'Legalitas & HKI',
    summary: 'Klasifikasi HKI di Indonesia: Hak Cipta, Paten, Merek Dagang, Desain Industri, Rahasia Dagang, serta prosedur perizinan usaha (NIB OSS, Sertifikasi Halal BPJPH, dan Izin Edar BPOM/P-IRT).',
    conceptExplanation: 'Perlindungan HKI memberikan hak eksklusif bagi wirausahawan atas karya cipta dan inovasinya agar tidak ditiru atau dibajak oleh pihak lain tanpa izin. Legalitas usaha juga menjadi syarat mutlak untuk memperluas pasar ke ritel modern dan ekspor.',
    keyPoints: [
      'Hak Cipta (Copyright): Melindungi karya seni, sastra, software, musik, buku, foto (perlindungan otomatis sejak dideklarasikan/seumur hidup pencipta + 70 tahun).',
      'Paten (Patent): Melindungi INVENSI TEKNOLOGI baru yang memecahkan masalah teknis (Paten Biasa 20 tahun, Paten Sederhana 10 tahun).',
      'Merek Dagang (Trademark): Melindungi tanda visual berupa logo, nama, kata, susunan warna untuk membedakan produk di pasar (berlaku 10 tahun dan dapat diperpanjang).',
      'Rahasia Dagang (Trade Secret): Melindungi formula, metode pengolahan yang bersifat rahasia dan bernilai ekonomis (contoh: formula Coca-Cola, bumbu KFC; tidak ada batas waktu selama tetap rahasia).',
      'Desain Industri (Industrial Design): Melindungi bentuk fisik estetika 3D/2D produk (berlaku 10 tahun).',
      'NIB (Nomor Induk Berusaha): Identitas legalitas berusaha tunggal yang diterbitkan melalui sistem OSS (Online Single Submission).'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Menentukan Kategori HKI yang Tepat untuk Produk Usaha',
        description: 'Trik membedakan Paten, Merek, Hak Cipta, dan Rahasia Dagang.',
        steps: [
          'Jika berupa LOGO atau NAMA BRAND → Daftarkan sebagai MEREK DAGANG.',
          'Jika berupa KARYA TULIS, VIDEO IKLAN, LOGO GRAFIS, atau SOURCE CODE APLIKASI → Lindungi dengan HAK CIPTA.',
          'Jika berupa ALAT/MESIN/PROSES TEKNOLOGI BARU yang belum pernah ada di dunia → Daftarkan sebagai PATEN.',
          'Jika berupa RESEP RAHASIA MAKANAN/MINUMAN yang tidak ingin dipublikasikan sama sekali ke umum → Lindungi sebagai RAHASIA DAGANG dengan perjanjian kerahasiaan (NDA).'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Tabel Ringkasan Masa Berlaku HKI Indonesia',
        formula: '\\text{Merek (10 Th)} \\quad | \\quad \\text{Paten (20 Th)} \\quad | \\quad \\text{Hak Cipta (Seumur Hidup + 70 Th)}',
        explanation: 'Jangka waktu perlindungan hukum eksklusif menurut undang-undang HKI Republik Indonesia.',
        variables: [
          { symbol: 'Merek', meaning: '10 tahun dan dapat diperpanjang seterusnya' },
          { symbol: 'Paten', meaning: '20 tahun (Paten Biasa) dan tidak dapat diperpanjang (menjadi public domain)' }
        ]
      }
    ],
    formulas: [
      '\\text{Masa Berlaku Merek Dagang: 10 Tahun (Dapat diperpanjang)}',
      '\\text{Masa Berlaku Paten: 20 Tahun (Paten Biasa) / 10 Tahun (Paten Sederhana)}',
      '\\text{Masa Berlaku Desain Industri: 10 Tahun}'
    ],
    examples: [
      {
        problem: 'Pak Budi berhasil menciptakan mesin pencacah sampah organik dengan sistem transmisi pisau otomatis jenis baru yang hemat listrik dan belum pernah dibuat sebelumnya. Perlindungan HKI jenis apakah yang paling tepat untuk didaftarkan oleh Pak Budi?',
        given: 'Invensi mesin baru di bidang teknologi hemat listrik',
        questionTarget: 'Jenis HKI yang tepat',
        steps: [
          'Mesin baru tersebut adalah invensi teknologi yang menyelesaikan masalah teknis pencacahan sampah.',
          'Invensi teknologi baru yang memiliki langkah inventif dan dapat diterapkan dalam industri dilindungi oleh PATEN.',
          'Jika teknologinya merupakan pengembangan sederhana, dapat didaftarkan sebagai Paten Sederhana.'
        ],
        solution: 'PATEN (Paten / Paten Sederhana).'
      }
    ],
    quickTips: [
      'Paten WAJIB dipublikasikan ke publik sebagai syarat pendaftaran.',
      'Jika resep bumbu Anda dipatenkan, seluruh dunia akan membaca formulanya! Oleh karena itu resep kuliner selalu dilindungi dengan RAHASIA DAGANG (Trade Secret), bukan Paten.'
    ]
  }
];
