import { Topic } from '../types';

export const matematikaTopics: Topic[] = [
  {
    id: 'mat-1',
    title: 'Aljabar, Komposisi Fungsi & Invers',
    subheader: 'Fondasi utama analitik: manipulasi fungsi, daerah asal, dan operasi invers',
    estimatedReadTime: '8 menit',
    summary: 'Mempelajari hubungan operasi fungsi (f ∘ g)(x), penentuan daerah asal alami (domain), sifat-sifat fungsi invers f⁻¹(x), serta manipulasi aljabar persamaan kuadrat dan polinomial yang sering keluar di TKA.',
    keyConcepts: [
      {
        title: 'Komposisi Fungsi (f ∘ g)(x)',
        explanation: 'Operasi memasukkan output fungsi g(x) ke dalam domain fungsi f(x). Ingat bahwa (f ∘ g)(x) = f(g(x)) dan secara umum f(g(x)) ≠ g(f(x)) (tidak komutatif).',
        formulaOrKey: '(f ∘ g)(x) = f(g(x)), dengan syarat Rf ∩ Dg ≠ ∅'
      },
      {
        title: 'Fungsi Invers f⁻¹(x)',
        explanation: 'Membalik relasi input-output. Syarat fungsi memiliki invers adalah fungsi harus bijektif (satu-satu dan pada). Rumus cepat pecahan linier: jika f(x) = (ax + b)/(cx + d), maka f⁻¹(x) = (-dx + b)/(cx - a).',
        formulaOrKey: 'f(x) = (ax+b)/(cx+d)  ⇒  f⁻¹(x) = (-dx+b)/(cx-a)'
      },
      {
        title: 'Domain & Range Alami',
        explanation: 'Daerah asal pecahan f(x)/g(x) mensyaratkan g(x) ≠ 0. Daerah asal bentuk akar √(h(x)) mensyaratkan h(x) ≥ 0 pada himpunan bilangan real.',
        formulaOrKey: '√(h(x)) ⇒ h(x) ≥ 0 ; 1/g(x) ⇒ g(x) ≠ 0'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Menentukan (f ∘ g)⁻¹(x) dari Dua Fungsi',
        problem: 'Diketahui f(x) = 2x - 3 dan g(x) = (x + 1)/(x - 2). Tentukan nilai dari (f ∘ g)⁻¹(5).',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Pahami sifat invers komposisi',
            calculationOrDetail: 'Gunakan sifat: jika (f ∘ g)⁻¹(5) = k, maka (f ∘ g)(k) = 5. Ini jauh lebih cepat daripada mencari rumus umum inversnya!'
          },
          {
            stepNumber: 2,
            instruction: 'Cari nilai y sehingga f(y) = 5',
            calculationOrDetail: 'f(y) = 2y - 3 = 5  ⇒  2y = 8  ⇒  y = 4'
          },
          {
            stepNumber: 3,
            instruction: 'Cari nilai k sehingga g(k) = y = 4',
            calculationOrDetail: 'g(k) = (k + 1)/(k - 2) = 4  ⇒  k + 1 = 4(k - 2)  ⇒  k + 1 = 4k - 8  ⇒  3k = 9  ⇒  k = 3'
          }
        ],
        solution: 'Nilai dari (f ∘ g)⁻¹(5) adalah 3.',
        tip: 'Jangan buang waktu menurunkan rumus aljabar invers panjang jika soal hanya menanyakan nilai pada titik tertentu!'
      }
    ],
    practicalExamples: [
      {
        title: 'Model Biaya dan Konversi Mata Uang',
        context: 'Perusahaan teknologi membebankan biaya server f(x) = 1.2x + 15 (dalam USD) untuk x gigabyte data. Nilai tukar rupiah terhadap USD dinyatakan g(y) = 16.000y.',
        solution: 'Fungsi total biaya dalam Rupiah adalah (g ∘ f)(x) = g(1.2x + 15) = 16.000(1.2x + 15) = 19.200x + 240.000 rupiah.',
        takeaway: 'Komposisi fungsi memodelkan rantai proses bertahap dari variabel mentah ke hasil akhir.'
      }
    ],
    quickTips: [
      'Gunakan trik f(invers) = identitas: jika f(a) = b, maka f⁻¹(b) = a.',
      'Periksa selalu syarat penyebut pecahan tidak boleh nol dan angka di dalam akar tidak boleh negatif.',
      'Sifat penting: (f ∘ g)⁻¹(x) = (g⁻¹ ∘ f⁻¹)(x), urutan komposisi dibalik.'
    ],
    quickCheck: [
      {
        id: 'qc-m1',
        question: 'Jika f(x) = (3x - 2)/(2x + 5), berapakah f⁻¹(1)?',
        options: ['-7', '7', '1/3', '3'],
        correctIndex: 1,
        explanation: 'Gunakan f⁻¹(1) = k  ⇒  f(k) = 1  ⇒  (3k - 2)/(2k + 5) = 1  ⇒  3k - 2 = 2k + 5  ⇒  k = 7.'
      }
    ]
  },
  {
    id: 'mat-2',
    title: 'Trigonometri & Identitas Sudut',
    subheader: 'Penguasaan sudut istimewa, aturan segitiga, identitas penjumlahan, dan grafik',
    estimatedReadTime: '9 menit',
    summary: 'Trigonometri TKA menguji pemahaman aturan sinus dan cosinus pada segitiga sembarang, rumus jumlah & selisih sudut, sudut ganda, serta pemecahan persamaan trigonometri pada interval tertentu.',
    keyConcepts: [
      {
        title: 'Identitas Pythagoras & Sudut Ganda',
        explanation: 'Identitas dasar: sin²θ + cos²θ = 1. Sudut ganda: sin(2θ) = 2 sinθ cosθ ; cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ.',
        formulaOrKey: 'sin 2A = 2 sin A cos A ; cos 2A = 1 - 2 sin² A'
      },
      {
        title: 'Aturan Sinus & Cosinus Segitiga',
        explanation: 'Aturan Sinus: a/sin A = b/sin B = c/sin C = 2R (R = jari-jari lingkaran luar). Aturan Cosinus: a² = b² + c² - 2bc cos A (digunakan saat diketahui 2 sisi dan sudut apit atau 3 sisi).',
        formulaOrKey: 'a² = b² + c² - 2bc cos A ; Luas = ½ bc sin A'
      },
      {
        title: 'Penjumlahan & Selisih Sudut',
        explanation: 'sin(A ± B) = sin A cos B ± cos A sin B. cos(A ± B) = cos A cos B ∓ sin A sin B.',
        formulaOrKey: 'tan(A + B) = (tan A + tan B)/(1 - tan A tan B)'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Mencari Jarak dengan Aturan Cosinus',
        problem: 'Sebuah kapal berlayar dari pelabuhan A ke B sejauh 60 km dengan arah 040°, lalu berbelok menuju C sejauh 80 km dengan arah 160°. Tentukan jarak langsung A ke C.',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Tentukan sudut apit di titik B (sudut ∠ABC)',
            calculationOrDetail: 'Arah datang kapal di B berlawanan dengan 040° (yaitu 220°). Arah baru menuju C adalah 160°. Maka sudut apit ∠ABC = 220° - 160° = 60°.'
          },
          {
            stepNumber: 2,
            instruction: 'Terapkan rumus Aturan Cosinus',
            calculationOrDetail: 'AC² = AB² + BC² - 2(AB)(BC) cos 60° = 60² + 80² - 2(60)(80)(0.5) = 3600 + 6400 - 4800 = 5200'
          },
          {
            stepNumber: 3,
            instruction: 'Sederhanakan bentuk akar',
            calculationOrDetail: 'AC = √5200 = √(100 × 4 × 13) = 20√13 km'
          }
        ],
        solution: 'Jarak langsung dari titik A ke C adalah 20√13 km (sekitar 72.1 km).',
        tip: 'Selalu gambar diagram arah mata angin (azimuth) dengan garis utara tegak lurus untuk menghindari salah menghitung besar sudut.'
      }
    ],
    practicalExamples: [
      {
        title: 'Menghitung Ketinggian Menara Sinyal 5G',
        context: 'Seorang teknisi jaringan mengukur sudut elevasi ke puncak menara dari titik P sebesar 30°, lalu berjalan 40 meter mendekati menara ke titik Q dan sudutnya menjadi 60°.',
        solution: 'Karena segitiga P-Q-Puncak adalah segitiga sama kaki pada sudut luar (60° - 30° = 30°), maka jarak Q ke puncak = 40 m. Tinggi menara h = 40 × sin(60°) = 40 × (√3/2) = 20√3 m (≈ 34.64 m).',
        takeaway: 'Segitiga 30°-60°-90° memiliki perbandingan sisi 1 : √3 : 2.'
      }
    ],
    quickTips: [
      'Ingat tanda kuadran: Semua (I positif), Sindikat (II sin positif), Tangan (III tan positif), Kosong (IV cos positif) -> ASTC.',
      'sin(90° - x) = cos(x) dan cos(90° - x) = sin(x).',
      'Untuk mencari nilai maksimum f(x) = a cos x + b sin x + c, nilainya adalah c + √(a² + b²).'
    ],
    quickCheck: [
      {
        id: 'qc-m2',
        question: 'Nilai dari sin 75° cos 15° + cos 75° sin 15° adalah...',
        options: ['0', '1/2', '1/2 √3', '1'],
        correctIndex: 3,
        explanation: 'Bentuk ini adalah rumus sin(A + B) = sin(75° + 15°) = sin 90° = 1.'
      }
    ]
  },
  {
    id: 'mat-3',
    title: 'Kalkulus Dasar: Limit, Turunan & Integral',
    subheader: 'Tingkat perubahan, optimasi maksimum/minimum, dan akumulasi luas daerah',
    estimatedReadTime: '10 menit',
    summary: 'Kalkulus TKA berfokus pada aturan L\'Hopital dan aljabar limit fungsi, turunan fungsi implisit/rantai, aplikasi nilai ekstrem (laba maksimum/biaya minimum), serta integral tentu untuk menghitung luas kurva.',
    keyConcepts: [
      {
        title: 'Limit Aljabar & Aturan L\'Hopital',
        explanation: 'Jika substitusi langsung menghasilkan bentuk tak tentu 0/0 atau ∞/∞, gunakan pemfaktoran, perkalian sekawan, atau turunkan pembilang dan penyebut secara terpisah (L\'Hopital).',
        formulaOrKey: 'lim (x→c) f(x)/g(x) = lim (x→c) f\'(x)/g\'(x)  [syarat 0/0]'
      },
      {
        title: 'Turunan & Aplikasi Nilai Ekstrem',
        explanation: 'Titik stasioner tercapai saat turunan pertama f\'(x) = 0. Nilai maksimum terjadi jika f\'\'(x) < 0 (cekung ke bawah), dan minimum jika f\'\'(x) > 0.',
        formulaOrKey: 'Stasioner: f\'(x) = 0 ; Maksimum: f\'\'(x) < 0'
      },
      {
        title: 'Integral Tentu & Luas Daerah',
        explanation: 'Luas daerah antara dua kurva y = f(x) dan y = g(x) dari x=a ke x=b adalah ∫[a,b] (f(x) - g(x)) dx, di mana f(x) berada di atas g(x).',
        formulaOrKey: 'Luas = ∫ [a to b] (y_atas - y_bawah) dx'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Optimasi Biaya Minimum Produksi',
        problem: 'Biaya proyek per hari dinyatakan oleh B(x) = (2x - 60 + 800/x) juta rupiah. Proyek selesai dalam x hari. Tentukan total biaya minimum proyek.',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Tentukan fungsi TOTAL biaya (Biaya per hari × jumlah hari)',
            calculationOrDetail: 'Total Biaya T(x) = x · B(x) = x(2x - 60 + 800/x) = 2x² - 60x + 800 (dalam juta rupiah).'
          },
          {
            stepNumber: 2,
            instruction: 'Cari titik stasioner dengan menurunkan T(x)',
            calculationOrDetail: 'T\'(x) = 4x - 60 = 0  ⇒  4x = 60  ⇒  x = 15 hari.'
          },
          {
            stepNumber: 3,
            instruction: 'Hitung total biaya minimum untuk x = 15 hari',
            calculationOrDetail: 'T(15) = 2(15)² - 60(15) + 800 = 2(225) - 900 + 800 = 450 - 900 + 800 = 350 juta rupiah.'
          }
        ],
        solution: 'Total biaya minimum proyek adalah Rp 350.000.000 jika dikerjakan selama 15 hari.',
        tip: 'Hati-hati membaca soal: pastikan apakah fungsi yang diberikan adalah biaya total atau biaya rata-rata per hari!'
      }
    ],
    practicalExamples: [
      {
        title: 'Laju Pertumbuhan Pengguna Aplikasi',
        context: 'Jumlah pengguna aktif suatu startup dinyatakan oleh N(t) = 100t² + 500t + 1000 dengan t dalam bulan.',
        solution: 'Laju pertambahan pengguna pada bulan ke-6 adalah turunan pertama N\'(t) = 200t + 500. Pada t = 6, N\'(6) = 200(6) + 500 = 1700 pengguna baru/bulan.',
        takeaway: 'Turunan mengukur laju perubahan sesaat (instantaneous rate of change).'
      }
    ],
    quickTips: [
      'Rumus cepat luas daerah antara parabola dan garis atau dua parabola: L = (D√D) / (6a²).',
      'Turunan uv: (uv)\' = u\'v + uv\'. Turunan u/v: (u/v)\' = (u\'v - uv\') / v².',
      'Limit trigonometri x→0: lim (sin ax)/(bx) = a/b dan lim (tan ax)/(bx) = a/b.'
    ],
    quickCheck: [
      {
        id: 'qc-m3',
        question: 'Nilai dari lim (x→0) (1 - cos 4x) / (2x²) adalah...',
        options: ['1', '2', '4', '8'],
        correctIndex: 2,
        explanation: 'Gunakan identitas 1 - cos 4x = 2 sin²(2x). Maka lim (2 sin 2x sin 2x) / (2 · x · x) = (2 · 2 · 2) / 2 = 4.'
      }
    ]
  },
  {
    id: 'mat-4',
    title: 'Matriks, Vektor & Transformasi Geometri',
    subheader: 'Operasi matriks, determinan, invers, dot product, rotasi, dan dilatasi',
    estimatedReadTime: '8 menit',
    summary: 'Membahas determinan matriks ordo 2x2 dan 3x3, sifat determinan matriks hasil kali, vektor pada R² dan R³, proyeksi skalar/vektor, serta matriks transformasi geometri (translasi, refleksi, rotasi, dilatasi).',
    keyConcepts: [
      {
        title: 'Sifat Determinan & Invers Matriks',
        explanation: 'det(AB) = det(A) · det(B) ; det(Aᵀ) = det(A) ; det(A⁻¹) = 1/det(A) ; det(kA) = kⁿ · det(A) untuk matriks ordo n×n.',
        formulaOrKey: 'det(AB) = det(A)·det(B) ; det(kA) = k² det(A) [2×2]'
      },
      {
        title: 'Perkalian Titik Vektor (Dot Product)',
        explanation: 'u · v = |u| |v| cos θ = u₁v₁ + u₂v₂ + u₃v₃. Jika dua vektor saling tegak lurus (ortogonal), maka u · v = 0.',
        formulaOrKey: 'Tegak Lurus: u · v = 0 ; Proyeksi Skalar: (u · v) / |v|'
      },
      {
        title: 'Transformasi Geometri dengan Matriks',
        explanation: 'Rotasi pusat (0,0) sebesar θ: matriks [cosθ, -sinθ ; sinθ, cosθ]. Refleksi sumbu X: [1, 0 ; 0, -1]. Dilatasi faktor k: [k, 0 ; 0, k].',
        formulaOrKey: 'R(θ) = [cos θ  -sin θ ; sin θ   cos θ]'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Mencari Luas Bayangan Akibat Transformasi Matriks',
        problem: 'Segitiga ABC dengan luas 12 satuan luas ditransformasikan oleh matriks M = [3  1 ; 2  4], kemudian dilanjutkan rotasi 90° berpusat di O. Tentukan luas bayangan akhir segitiga.',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Hitung determinan matriks transformasi pertama (M)',
            calculationOrDetail: 'det(M) = (3)(4) - (1)(2) = 12 - 2 = 10.'
          },
          {
            stepNumber: 2,
            instruction: 'Hitung determinan matriks transformasi kedua (Rotasi 90°)',
            calculationOrDetail: 'Matriks rotasi R = [0  -1 ; 1   0]. det(R) = (0)(0) - (-1)(1) = 1 (rotasi tidak mengubah ukuran luas).'
          },
          {
            stepNumber: 3,
            instruction: 'Gunakan hubungan Luas Bayangan = |det(Transformasi)| × Luas Awal',
            calculationOrDetail: 'Luas Bayangan = |det(R · M)| × Luas Awal = |det(R) · det(M)| × 12 = |1 × 10| × 12 = 120 satuan luas.'
          }
        ],
        solution: 'Luas akhir bayangan segitiga adalah 120 satuan luas.',
        tip: 'Untuk menghitung luas bayangan, tidak perlu mencari koordinat titik satu per satu. Cukup kalikan luas asli dengan nilai mutlak determinan gabungan matriks transformasinya!'
      }
    ],
    practicalExamples: [
      {
        title: 'Rendering Grafika Komputer 2D/3D',
        context: 'Game engine melakukan transformasi kamera dan perputaran karakter dengan matriks rotasi dan translasi.',
        solution: 'Setiap titik vertex (x,y) dikalikan matriks transformasi sehingga posisi berpindah seragam dalam hitungan mikrodetik.',
        takeaway: 'Matriks adalah pondasi komputasi grafis dan animasi game modern.'
      }
    ],
    quickTips: [
      'Jika matriks A tidak punya invers (singular), maka det(A) = 0.',
      'Proyeksi vektor ortogonal u pada v: w = ((u · v) / |v|²) · v.',
      'Pencerminan terhadap garis y = x diwakili oleh matriks [0 1 ; 1 0].'
    ],
    quickCheck: [
      {
        id: 'qc-m4',
        question: 'Jika matriks A berordo 2×2 dengan det(A) = 4, maka det(3A⁻¹) adalah...',
        options: ['3/4', '9/4', '12', '36'],
        correctIndex: 1,
        explanation: 'det(3A⁻¹) = 3² · det(A⁻¹) = 9 · (1 / det(A)) = 9 · (1/4) = 9/4.'
      }
    ]
  },
  {
    id: 'mat-5',
    title: 'Statistika, Kaidah Pencacahan & Peluang',
    subheader: 'Ukuran pemusatan/penyebaran, permutasi, kombinasi, dan peluang majemuk',
    estimatedReadTime: '9 menit',
    summary: 'Mencakup rata-rata gabungan, median, simpangan baku, efek perubahan data (jika setiap data dikali/ditambah), permutasi siklis/berunsur sama, kombinasi nCr, serta peluang bersyarat P(A|B).',
    keyConcepts: [
      {
        title: 'Efek Transformasi Linear terhadap Data Statistik',
        explanation: 'Jika setiap nilai data x dikalikan a dan ditambah b (y = ax + b): Ukuran Pemusatan (Mean, Median, Modus, Kuartil) berubah menjadi: Baru = a(Lama) + b. Ukuran Penyebaran (Jangkauan, Simpangan Baku, Varians) hanya terpengaruh pengali |a|: Baru = |a| × Lama (tidak terpengaruh penambahan b).',
        formulaOrKey: 'Mean_baru = a(Mean) + b ; S_baru = |a| · S_lama'
      },
      {
        title: 'Permutasi vs Kombinasi',
        explanation: 'Permutasi memperhatikan urutan (Ketua, Sekretaris, Bendahara / nomor telepon): nPr = n! / (n - r)!. Kombinasi TIDAK memperhatikan urutan (tim, jabat tangan, pengambilan kelereng acak): nCr = n! / (r!(n - r)!).',
        formulaOrKey: 'nCr = n! / (r!(n - r)!) ; nPr = n! / (n - r)!'
      },
      {
        title: 'Peluang Kejadian Majemuk & Komplemen',
        explanation: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Peluang kejadian saling bebas: P(A ∩ B) = P(A) · P(B). Peluang komplemen: P(A\') = 1 - P(A).',
        formulaOrKey: 'P(A ∩ B) = P(A) · P(B) [Bebas] ; P(A\') = 1 - P(A)'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Menghitung Rata-rata Gabungan',
        problem: 'Nilai rata-rata ujian matematika kelas A (20 siswa) adalah 75. Nilai rata-rata kelas B (30 siswa) adalah 85. Jika ada 2 siswa kelas A berpindah ke kelas B dan rata-rata kelas A menjadi 74, tentukan rata-rata nilai 2 siswa yang pindah tersebut.',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Hitung total nilai awal kelas A',
            calculationOrDetail: 'Total awal kelas A = 20 siswa × 75 = 1500.'
          },
          {
            stepNumber: 2,
            instruction: 'Hitung total nilai baru kelas A (setelah 2 siswa pindah)',
            calculationOrDetail: 'Siswa kelas A tersisa 18 orang dengan rata-rata 74. Total baru = 18 × 74 = 1332.'
          },
          {
            stepNumber: 3,
            instruction: 'Hitung jumlah dan rata-rata nilai kedua siswa tersebut',
            calculationOrDetail: 'Jumlah nilai 2 siswa = 1500 - 1332 = 168. Rata-rata = 168 / 2 = 84.'
          }
        ],
        solution: 'Nilai rata-rata kedua siswa yang pindah adalah 84.',
        tip: 'Selalu ubah data rata-rata menjadi nilai total (Σx = n · x̄) saat menangani penambahan atau pengurangan anggota.'
      }
    ],
    practicalExamples: [
      {
        title: 'Pengujian Mutu Komponen Chip Komputer',
        context: 'Dari 100 chip, terdapat 8 chip cacat. Jika diambil 3 chip secara acak sekaligus, berapa peluang mendapatkan paling sedikit 1 chip cacat?',
        solution: 'Gunakan peluang komplemen: P(≥1 cacat) = 1 - P(semua 3 baik). P(semua baik) = (92C3) / (100C3).',
        takeaway: 'Kata kunci "paling sedikit satu" selalu paling mudah diselesaikan dengan komplemen: 1 - P(tidak ada).'
      }
    ],
    quickTips: [
      'Ingat rumus jabat tangan n orang: nC2 = n(n - 1) / 2.',
      'Permutasi siklis (melingkar) untuk n unsur: (n - 1)!.',
      'Simpangan baku adalah akar dari ragam (varians): S = √(Varians).'
    ],
    quickCheck: [
      {
        id: 'qc-m5',
        question: 'Dari 8 orang calon pengurus OSIS, akan dipilih 3 orang sebagai delegasi tanpa membedakan jabatan. Berapa banyak cara pemilihan?',
        options: ['24', '56', '120', '336'],
        correctIndex: 1,
        explanation: 'Karena tidak memperhatikan urutan jabatan, gunakan kombinasi: 8C3 = (8 × 7 × 6) / (3 × 2 × 1) = 56 cara.'
      }
    ]
  },
  {
    id: 'mat-6',
    title: 'Barisan, Deret & Logika Matematika',
    subheader: 'Aritmetika, geometri tak hingga, pola bilangan, dan penalaran silogisme',
    estimatedReadTime: '8 menit',
    summary: 'Membahas barisan/deret aritmetika dan geometri, deret geometri tak hingga konvergen (|r| < 1), aplikasi bunga majemuk & peluruhan, serta logika matematika (implikasi, kontraposisi, silogisme, penarikan kesimpulan modus ponens/tollens).',
    keyConcepts: [
      {
        title: 'Deret Geometri Tak Hingga',
        explanation: 'Deret konvergen memiliki rasio -1 < r < 1 dengan jumlah S∞ = a / (1 - r). Jumlah suku bernomor ganjil: S_ganjil = a / (1 - r²).',
        formulaOrKey: 'S∞ = a / (1 - r) ; S_ganjil = a / (1 - r²)'
      },
      {
        title: 'Barisan & Deret Aritmetika',
        explanation: 'Un = a + (n - 1)b. Sn = n/2 (2a + (n - 1)b) = n/2 (a + Un). Hubungan penting: Un = Sn - S(n-1) dan Utengah = (a + Un) / 2.',
        formulaOrKey: 'Un = a + (n-1)b ; Sn = n/2 (a + Un)'
      },
      {
        title: 'Logika & Ekuivalensi Pernyataan',
        explanation: 'Implikasi p ⇒ q ekuivalen dengan kontraposisinya: ~q ⇒ ~p dan juga ekuivalen dengan ~p ∨ q. Negasi dari p ⇒ q adalah p ∧ ~q.',
        formulaOrKey: '(p ⇒ q) ≡ (~q ⇒ ~p) ≡ (~p ∨ q) ; ~(p ⇒ q) ≡ p ∧ ~q'
      }
    ],
    stepByStepGuides: [
      {
        title: 'Lintasan Bola Memantul (Deret Tak Hingga)',
        problem: 'Sebuah bola dijatuhkan dari ketinggian 12 meter dan memantul kembali dengan ketinggian 3/4 dari tinggi sebelumnya. Tentukan total panjang lintasan bola hingga berhenti.',
        steps: [
          {
            stepNumber: 1,
            instruction: 'Identifikasi pola gerak bola',
            calculationOrDetail: 'Lintasan turun pertama = 12 m. Lintasan berikutnya terdiri dari naik dan turun (2 kali pantulan) dengan a_pantul = 12 × (3/4) = 9 m.'
          },
          {
            stepNumber: 2,
            instruction: 'Gunakan rumus cepat pantulan bola: Panjang = h × (b + a) / (b - a)',
            calculationOrDetail: 'Dengan tinggi awal h = 12 m dan rasio pantulan a/b = 3/4, maka b = 4 dan a = 3.'
          },
          {
            stepNumber: 3,
            instruction: 'Hitung total panjang lintasan',
            calculationOrDetail: 'Panjang = 12 × (4 + 3) / (4 - 3) = 12 × 7 / 1 = 84 meter.'
          }
        ],
        solution: 'Total panjang seluruh lintasan bola sampai berhenti adalah 84 meter.',
        tip: 'Rumus kilat pantulan bola jatuh bebas: S = h · (penyebut + pembilang) / (penyebut - pembilang).'
      }
    ],
    practicalExamples: [
      {
        title: 'Penarikan Kesimpulan Hukum & Algoritma',
        context: 'Premis 1: Jika server offline (p), maka layanan cloud terhenti (q). Premis 2: Layanan cloud aktif (~q).',
        solution: 'Berdasarkan aturan Modus Tollens: [(p ⇒ q) ∧ ~q] ⇒ ~p. Kesimpulannya adalah server tidak offline (server online).',
        takeaway: 'Logika matematika memastikan validitas sistem keamanan dan aturan bisnis tanpa celah.'
      }
    ],
    quickTips: [
      'Silogisme: (p ⇒ q) dan (q ⇒ r) menghasilkan kesimpulan (p ⇒ r).',
      'Ingat hukum De Morgan: ~(p ∧ q) ≡ ~p ∨ ~q, dan ~(p ∨ q) ≡ ~p ∧ ~q.',
      'Suku tengah barisan geometri: Ut² = a · Un.'
    ],
    quickCheck: [
      {
        id: 'qc-m6',
        question: 'Negasi dari pernyataan "Jika semua siswa rajin belajar, maka nilai TKA meningkat" adalah...',
        options: [
          'Jika beberapa siswa tidak rajin, maka nilai TKA tidak meningkat',
          'Semua siswa rajin belajar dan nilai TKA tidak meningkat',
          'Beberapa siswa rajin belajar atau nilai TKA meningkat',
          'Semua siswa tidak rajin belajar dan nilai TKA meningkat'
        ],
        correctIndex: 1,
        explanation: 'Negasi dari implikasi (p ⇒ q) adalah p ∧ ~q ("p terjadi tetapi q tidak terjadi"). Maka kalimatnya: "Semua siswa rajin belajar dan nilai TKA tidak meningkat".'
      }
    ]
  }
];

export const matematikaCheatSheet = [
  {
    category: 'Aljabar & Fungsi',
    items: [
      { label: 'Invers Pecahan Linier', formula: 'f(x)=(ax+b)/(cx+d) → f⁻¹(x)=(-dx+b)/(cx-a)', note: 'Tukar posisi a dan d lalu kalikan -1' },
      { label: 'Sifat Komposisi', formula: '(f ∘ g)⁻¹(x) = (g⁻¹ ∘ f⁻¹)(x)', note: 'Urutan invers dibalik' },
      { label: 'Jumlah & Hasil Kali Akar', formula: 'x₁ + x₂ = -b/a ; x₁ · x₂ = c/a', note: 'Untuk persamaan ax² + bx + c = 0' }
    ]
  },
  {
    category: 'Trigonometri',
    items: [
      { label: 'Sudut Ganda Sinus', formula: 'sin 2A = 2 sin A cos A', note: 'Identitas sangat sering keluar di kalkulus' },
      { label: 'Sudut Ganda Cosinus', formula: 'cos 2A = 2 cos² A - 1 = 1 - 2 sin² A', note: 'Gunakan versi yang paling mudah menyederhanakan' },
      { label: 'Aturan Cosinus', formula: 'a² = b² + c² - 2bc cos A', note: 'Gunakan saat diketahui 2 sisi dan 1 sudut apit' },
      { label: 'Luas Segitiga', formula: 'L = ½ a b sin C', note: 'Sudut C adalah sudut yang diapit sisi a dan b' }
    ]
  },
  {
    category: 'Kalkulus',
    items: [
      { label: 'Aturan L\'Hopital', formula: 'lim f(x)/g(x) = lim f\'(x)/g\'(x)', note: 'Hanya berlaku untuk bentuk tak tentu 0/0 atau ∞/∞' },
      { label: 'Luas Antar Kurva', formula: 'L = ∫ [a, b] (y_atas - y_bawah) dx', note: 'Integralkan selisih fungsi atas dikurang fungsi bawah' },
      { label: 'Rumus Cepat Luas Parabola', formula: 'L = (D√D) / (6a²)', note: 'D = b² - 4ac dari persamaan selisih kuadrat' }
    ]
  },
  {
    category: 'Peluang & Deret',
    items: [
      { label: 'Kombinasi nCr', formula: 'nCr = n! / (r!(n - r)!)', note: 'Tidak membedakan urutan posisi' },
      { label: 'Deret Geometri Tak Hingga', formula: 'S∞ = a / (1 - r)', note: 'Syarat konvergen: -1 < r < 1' },
      { label: 'Lintasan Bola Jatuh', formula: 'S = h · (b + a) / (b - a)', note: 'Untuk rasio pantulan a/b dari ketinggian h' }
    ]
  }
];
