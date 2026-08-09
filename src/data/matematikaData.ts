import { Topic } from '../types';

export const matematikaTopics: Topic[] = [
  {
    id: 'm1',
    title: 'Operasi Hitung Dasar & Bilangan Bulat',
    categoryTag: 'Aritmatika',
    summary: 'Memahami konsep operasi bilangan bulat (positif dan negatif), aturan urutan pengerjaan (Kabataku), serta penentuan KPK dan FPB.',
    conceptExplanation: 'Bilangan bulat terdiri dari bilangan bulat positif, nol, dan bilangan bulat negatif. Dalam operasi hitung campuran, urutan prioritas pengerjaan adalah tanda kurung, perkalian/pembagian dari kiri ke kanan, lalu penjumlahan/pengurangan dari kiri ke kanan (Kabataku).',
    keyPoints: [
      'Aturan tanda perkalian/pembagian: Positif × Positif = Positif, Negatif × Negatif = Positif, Positif × Negatif = Negatif.',
      'Operasi pengurangan dengan bilangan negatif menjadi penjumlahan: a - (-b) = a + b.',
      'Prioritas pengerjaan (Kabataku): (1) Kurung, (2) Perkalian & Pembagian, (3) Penjumlahan & Pengurangan.',
      'FPB (Faktor Persekutuan Terbesar) adalah faktor terbesar yang membagi habis dua bilangan atau lebih.',
      'KPK (Kelipatan Persekutuan Terkecil) adalah bilangan kelipatan terkecil yang habis dibagi oleh masing-masing bilangan tersebut.'
    ],
    stepByStepGuides: [
      {
        title: 'Aturan Urutan Operasi Hitung Campuran (Kabataku)',
        description: 'Langkah aman menghitung soal campuran tanpa salah urutan.',
        steps: [
          'Kerjakan terlebih dahulu operasi di dalam tanda kurung ( ).',
          'Selesaikan operasi perkalian (×) dan pembagian (÷) urut dari kiri ke kanan.',
          'Selesaikan operasi penjumlahan (+) dan pengurangan (-) urut dari kiri ke kanan.'
        ],
        tips: 'Contoh: 10 + 5 × 2 = 10 + 10 = 20 (bukan 15 × 2 = 30).'
      },
      {
        title: 'Mencari FPB dan KPK dengan Pohon Faktor',
        description: 'Gunakan faktorisasi prima untuk menentukan FPB dan KPK dengan cepat.',
        steps: [
          'Bagi bilangan dengan bilangan prima (2, 3, 5, 7, ...) hingga menghasilkan bilangan prima terakhir.',
          'Tuliskan faktorisasi prima dalam bentuk perkalian bilangan berpangkat.',
          'Untuk FPB: Ambil faktor yang SAMA dengan pangkat TERKECIL, lalu kalikan.',
          'Untuk KPK: Ambil SEMUA faktor yang ada, jika ada faktor yang sama pilih pangkat TERBESAR, lalu kalikan.'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Sifat Operasi Tanda Negatif',
        formula: 'a - (-b) = a + b \\quad \\text{dan} \\quad (-a) \\times (-b) = +(a \\times b)',
        explanation: 'Dua tanda negatif yang berurutan atau dikalikan akan menghasilkan nilai positif.',
        variables: [
          { symbol: 'a, b', meaning: 'Bilangan bulat sembarang' }
        ]
      }
    ],
    formulas: [
      'a - (-b) = a + b',
      '(-a) \\times (-b) = a \\times b',
      '(-a) \\times b = -(a \\times b)'
    ],
    examples: [
      {
        problem: 'Hitunglah nilai dari: 24 - (-16) + (-10) × 3',
        given: 'Operasi campuran: pengurangan bilangan negatif, penjumlahan, dan perkalian.',
        questionTarget: 'Hasil akhir perhitungan',
        steps: [
          'Dahulukan perkalian: (-10) × 3 = -30.',
          'Tulis ulang persamaan: 24 - (-16) + (-30).',
          'Ubah pengurangan minus menjadi plus: 24 + 16 - 30.',
          'Hitung dari kiri: 24 + 16 = 40.',
          'Lanjutkan pengurangan: 40 - 30 = 10.'
        ],
        solution: 'Hasil akhir adalah 10.'
      }
    ],
    quickTips: [
      'Ingat kata kunci KABATAKU: Kali, Bagi, Tambah, Kurang!',
      'Minus ketemu minus selalu jadi plus: 5 - (-3) = 5 + 3 = 8.'
    ]
  },
  {
    id: 'm2',
    title: 'Pecahan, Desimal, dan Persentase',
    categoryTag: 'Pecahan',
    summary: 'Memahami cara menyederhanakan pecahan, operasi penjumlahan/pengurangan pecahan dengan menyamakan penyebut, serta konversi pecahan, desimal, dan persen.',
    conceptExplanation: 'Pecahan terdiri dari pembilang (bagian atas) dan penyebut (bagian bawah). Untuk menjumlahkan atau mengurangkan pecahan biasa, penyebutnya harus disamakan terlebih dahulu dengan mencari KPK dari penyebut-penyebutnya.',
    keyPoints: [
      'Menyederhanakan pecahan: Bagi pembilang dan penyebut dengan FPB-nya.',
      'Penjumlahan/Pengurangan: Samakan penyebut dengan KPK penyebut, lalu jumlahkan pembilangnya: a/c + b/c = (a+b)/c.',
      'Perkalian pecahan: Langsung kalikan pembilang dengan pembilang, dan penyebut dengan penyebut: (a/b) × (c/d) = (a×c)/(b×d).',
      'Pembagian pecahan: Ubah menjadi perkalian dengan membalik pecahan kedua: (a/b) ÷ (c/d) = (a/b) × (d/c).',
      'Persen berarti perseratus: 25% = 25/100 = 1/4 = 0.25.'
    ],
    stepByStepGuides: [
      {
        title: 'Langkah Menjumlahkan Pecahan Berbeda Penyebut',
        description: 'Cara menjumlahkan a/b + c/d dengan mudah.',
        steps: [
          'Cari KPK dari kedua penyebut (b dan d).',
          'Ubah setiap pecahan menjadi pecahan senilai dengan penyebut KPK tersebut.',
          'Jumlahkan pembilangnya, sedangkan penyebut tetap sama.',
          'Sederhanakan hasil akhir jika masih bisa disederhanakan.'
        ],
        tips: 'Metode kali silang cepat: a/b + c/d = (a×d + b×c) / (b×d).'
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus Operasi Pecahan',
        formula: '\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d} \\quad ; \\quad \\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}',
        explanation: 'Perkalian langsung dikalikan lurus, pembagian dibalik kemudian dikali.',
        variables: [
          { symbol: 'a, c', meaning: 'Pembilang (angka atas)' },
          { symbol: 'b, d', meaning: 'Penyebut (angka bawah, tidak boleh 0)' }
        ]
      }
    ],
    formulas: [
      '\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}',
      '\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}',
      '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}',
      'P\\% = \\frac{P}{100}'
    ],
    examples: [
      {
        problem: 'Hitunglah hasil dari 3/4 + 1/6 !',
        given: 'Dua pecahan biasa dengan penyebut berbeda (4 dan 6).',
        questionTarget: 'Hasil penjumlahan dalam bentuk paling sederhana',
        steps: [
          'KPK dari 4 dan 6 adalah 12.',
          'Ubah 3/4 menjadi per-12: (3 × 3) / (4 × 3) = 9/12.',
          'Ubah 1/6 menjadi per-12: (1 × 2) / (6 × 2) = 2/12.',
          'Jumlahkan pembilang: 9/12 + 2/12 = 11/12.'
        ],
        solution: 'Hasil akhirnya adalah 11/12.'
      }
    ],
    quickTips: [
      'Pembagian pecahan: Kunci T-P-B (Tulis pecahan pertama, Putar bagi jadi kali, Balik pecahan kedua)!',
      '20% = 1/5 ; 25% = 1/4 ; 50% = 1/2 ; 75% = 3/4.'
    ]
  },
  {
    id: 'm3',
    title: 'Aljabar Dasar & Persamaan Linear Satu Variabel',
    categoryTag: 'Aljabar',
    summary: 'Mengenal variabel, koefisien, konstanta, suku sejenis, serta cara menyelesaikan persamaan linear satu variabel (PLSV) sederhana.',
    conceptExplanation: 'Bentuk aljabar memuat huruf (variabel) yang mewakili angka yang belum diketahui. Suku sejenis adalah suku yang memiliki variabel dan pangkat yang sama, dan hanya suku sejenis yang dapat dijumlahkan atau dikurangkan.',
    keyPoints: [
      'Komponen aljabar: Pada 5x + 3, angka 5 adalah koefisien, x adalah variabel, dan 3 adalah konstanta.',
      'Suku sejenis: 3x dan 7x dapat dijumlahkan menjadi 10x; sedangkan 3x dan 5y tidak dapat dijumlahkan menjadi satu suku.',
      'Aturan pindah ruas: Pindah ruas mengubah tanda (+ menjadi -, - menjadi +, × menjadi ÷, ÷ menjadi ×).',
      'Persamaan Linear Satu Variabel (PLSV) berbentuk ax + b = c.'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Menyelesaikan Persamaan Linear ax + b = c',
        description: 'Langkah mengisolasi variabel x untuk menemukan nilainya.',
        steps: [
          'Kumpulkan semua suku yang memiliki variabel di satu ruas (biasanya ruas kiri).',
          'Kumpulkan semua suku konstanta (angka tanpa huruf) di ruas yang berlawanan (ruas kanan).',
          'Sederhanakan masing-masing ruas.',
          'Bagi kedua ruas dengan koefisien variabel untuk memperoleh nilai x.'
        ],
        tips: 'Jika 2x + 6 = 16, maka 2x = 16 - 6 => 2x = 10 => x = 10 / 2 = 5.'
      }
    ],
    formulaDetails: [
      {
        title: 'Bentuk Umum PLSV',
        formula: 'ax + b = c \\implies ax = c - b \\implies x = \\frac{c - b}{a}',
        explanation: 'Solusi nilai x didapatkan dengan memindahkan konstanta lalu membagi dengan koefisien a.',
        variables: [
          { symbol: 'a', meaning: 'Koefisien (a ≠ 0)' },
          { symbol: 'x', meaning: 'Variabel peubah' },
          { symbol: 'b, c', meaning: 'Konstanta' }
        ]
      }
    ],
    formulas: [
      'ax + b = c \\iff x = \\frac{c - b}{a}',
      'a(x + y) = ax + ay'
    ],
    examples: [
      {
        problem: 'Tentukan nilai x dari persamaan: 4x - 7 = 13 !',
        given: 'Persamaan 4x - 7 = 13',
        questionTarget: 'Nilai variabel x',
        steps: [
          'Pindahkan konstanta -7 ke ruas kanan: 4x = 13 + 7.',
          'Hitung ruas kanan: 4x = 20.',
          'Bagi kedua ruas dengan 4: x = 20 / 4.',
          'Didapat x = 5.'
        ],
        solution: 'Nilai x yang memenuhi adalah 5.'
      }
    ],
    quickTips: [
      'Pindah tanda: Positif menyeberang jembatan sama dengan (=) jadi negatif, perkalian jadi pembagian!',
      'Uji kembali nilai x yang didapat dengan memasukkannya ke persamaan awal.'
    ]
  },
  {
    id: 'm4',
    title: 'Geometri & Pengukuran Bangun Datar',
    categoryTag: 'Geometri',
    summary: 'Menghitung keliling dan luas bangun datar dasar: persegi, persegi panjang, segitiga, jajar genjang, dan lingkaran.',
    conceptExplanation: 'Keliling adalah total panjang garis tepi yang mengelilingi suatu bangun datar. Luas adalah besarnya area atau daerah yang dibatasi oleh batas bangun datar tersebut.',
    keyPoints: [
      'Persegi: Keliling = 4 × sisi ; Luas = sisi × sisi (s²).',
      'Persegi Panjang: Keliling = 2 × (panjang + lebar) ; Luas = panjang × lebar.',
      'Segitiga: Keliling = sisi₁ + sisi₂ + sisi₃ ; Luas = (alas × tinggi) / 2.',
      'Lingkaran: Keliling = 2 × π × r atau π × d ; Luas = π × r² (nilai π ≈ 22/7 atau 3.14).',
      'Teorema Pythagoras pada segitiga siku-siku: a² + b² = c² (dengan c sisi miring).'
    ],
    stepByStepGuides: [
      {
        title: 'Menghitung Luas & Keliling Lingkaran',
        description: 'Penggunaan nilai π = 22/7 jika jari-jari kelipatan 7, atau 3.14 jika bukan.',
        steps: [
          'Identifikasi jari-jari (r) atau diameter (d). Ingat bahwa d = 2r.',
          'Jika r kelipatan 7 (7, 14, 21, 28, ...), gunakan π = 22/7 untuk memudahkan pencoretan.',
          'Untuk Keliling: Gunakan K = 2 × π × r.',
          'Untuk Luas: Gunakan L = π × r × r.'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus Luas & Keliling Bangun Datar',
        formula: 'L_{\\text{persegi}} = s^2 \\quad , \\quad L_{\\text{persegi panjang}} = p \\times l \\quad , \\quad L_{\\text{lingkaran}} = \\pi r^2',
        explanation: 'Rumus dasar menghitung besaran area berbagai bangun datar.',
        variables: [
          { symbol: 's', meaning: 'Panjang sisi persegi' },
          { symbol: 'p, l', meaning: 'Panjang dan lebar persegi panjang' },
          { symbol: 'r', meaning: 'Jari-jari lingkaran (radius)' }
        ]
      }
    ],
    formulas: [
      'K_{\\text{persegi}} = 4s \\quad ; \\quad L_{\\text{persegi}} = s^2',
      'K_{\\text{persegi panjang}} = 2(p + l) \\quad ; \\quad L_{\\text{persegi panjang}} = p \\times l',
      'L_{\\text{segitiga}} = \\frac{1}{2} \\times a \\times t',
      'K_{\\text{lingkaran}} = 2 \\pi r \\quad ; \\quad L_{\\text{lingkaran}} = \\pi r^2'
    ],
    examples: [
      {
        problem: 'Sebuah taman berbentuk persegi panjang memiliki panjang 15 meter dan lebar 8 meter. Tentukan keliling dan luas taman tersebut!',
        given: 'Panjang (p) = 15 m, Lebar (l) = 8 m',
        questionTarget: 'Keliling (K) dan Luas (L)',
        steps: [
          'Keliling = 2 × (p + l) = 2 × (15 + 8) = 2 × 23 = 46 meter.',
          'Luas = p × l = 15 × 8 = 120 m².'
        ],
        solution: 'Keliling taman adalah 46 meter dan Luas taman adalah 120 m².'
      }
    ],
    quickTips: [
      'Satuan keliling menggunakan satuan panjang (m, cm), sedangkan luas selalu menggunakan satuan persegi (m², cm²)!',
      'Diameter adalah dua kali jari-jari (d = 2r).'
    ]
  },
  {
    id: 'm5',
    title: 'Statistika Dasar & Pengolahan Data',
    categoryTag: 'Statistika',
    summary: 'Memahami cara mencari nilai rata-rata (mean), nilai tengah (median), nilai yang paling sering muncul (modus), dan membaca diagram data sederhana.',
    conceptExplanation: 'Statistika dasar digunakan untuk mengumpulkan, menyajikan, dan menganalisis data sederhana agar mudah dipahami. Tiga ukuran pemusatan data yang paling mendasar adalah mean, median, dan modus.',
    keyPoints: [
      'Mean (Rata-rata): Jumlah seluruh nilai data dibagi dengan banyaknya data.',
      'Median (Nilai Tengah): Nilai yang berada tepat di tengah setelah semua data diurutkan dari yang terkecil hingga terbesar.',
      'Modus: Nilai atau data yang paling sering muncul (memiliki frekuensi terbanyak).',
      'Jangkauan (Range): Selisih antara nilai tertinggi dan nilai terendah (Nilai Maks - Nilai Min).'
    ],
    stepByStepGuides: [
      {
        title: 'Langkah Mencari Median (Nilai Tengah)',
        description: 'Pastikan data sudah terurut terlebih dahulu.',
        steps: [
          'Urutkan data dari yang terkecil sampai yang terbesar.',
          'Jika banyak data (n) GANJIL: Median adalah data tepat di posisi tengah, yaitu data ke-(n+1)/2.',
          'Jika banyak data (n) GENAP: Median adalah rata-rata dari dua data di tengah, yaitu (data ke-(n/2) + data ke-(n/2 + 1)) / 2.'
        ],
        tips: 'Contoh data: 3, 5, 7, 8, 9 (n=5 ganjil) → Median adalah 7.'
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus Rata-rata (Mean)',
        formula: '\\bar{x} = \\frac{\\sum x}{n} = \\frac{x_1 + x_2 + x_3 + \\dots + x_n}{n}',
        explanation: 'Jumlahkan seluruh data lalu bagi dengan banyaknya datum.',
        variables: [
          { symbol: '\\bar{x}', meaning: 'Nilai rata-rata (mean)' },
          { symbol: '\\sum x', meaning: 'Jumlah seluruh data' },
          { symbol: 'n', meaning: 'Banyaknya data' }
        ]
      }
    ],
    formulas: [
      '\\bar{x} = \\frac{\\sum x}{n}',
      '\\text{Range} = x_{\\text{maks}} - x_{\\text{min}}'
    ],
    examples: [
      {
        problem: 'Diberikan nilai ulangan harian: 7, 8, 6, 9, 8, 10, 8. Tentukan Mean, Median, dan Modus!',
        given: 'Data: 7, 8, 6, 9, 8, 10, 8 (banyak data n = 7)',
        questionTarget: 'Mean, Median, dan Modus',
        steps: [
          'Urutkan data: 6, 7, 8, 8, 8, 9, 10.',
          'Mean = (6 + 7 + 8 + 8 + 8 + 9 + 10) / 7 = 56 / 7 = 8.',
          'Median: Karena n = 7 (ganjil), nilai tengahnya adalah data ke-4, yaitu 8.',
          'Modus: Angka yang paling sering muncul adalah 8 (muncul sebanyak 3 kali).'
        ],
        solution: 'Mean = 8, Median = 8, dan Modus = 8.'
      }
    ],
    quickTips: [
      'Selalu URUTKAN data dari terkecil ke terbesar sebelum mencari Median!',
      'Modus bisa lebih dari satu jika ada beberapa angka dengan frekuensi tertinggi yang sama.'
    ]
  }
];
