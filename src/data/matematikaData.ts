import { Topic } from '../types';

export const matematikaTopics: Topic[] = [
  {
    id: 'm1',
    title: 'Aljabar Lanjutan & Polinomial (Suku Banyak)',
    categoryTag: 'Aljabar',
    summary: 'Memahami pembagian suku banyak f(x), Teorema Sisa, Teorema Faktor, metode bagan Horner, serta hubungan akar-akar persamaan suku banyak (Teorema Vieta).',
    conceptExplanation: 'Suku banyak (polinomial) adalah bentuk aljabar yang memuat variabel berpangkat bulat positif. Setiap suku banyak yang dibagi pembagi P(x) akan menghasilkan hasil bagi H(x) dan sisa S(x). Teorema Sisa dan Horner adalah cara tercepat mencari sisa tanpa pembagian panjang manual.',
    keyPoints: [
      'Bentuk umum pembagian: f(x) = P(x) · H(x) + S(x), dengan derajat S(x) selalu lebih kecil dari derajat P(x).',
      'Teorema Sisa 1: Jika f(x) dibagi oleh (x - k), maka sisanya adalah S = f(k).',
      'Teorema Sisa 2: Jika f(x) dibagi oleh (ax + b), maka sisanya adalah S = f(-b/a).',
      'Teorema Faktor: (x - k) merupakan faktor dari f(x) jika dan hanya jika f(k) = 0 (sisanya bernilai nol).',
      'Teorema Vieta untuk derajat 3 (ax³ + bx² + cx + d = 0): x₁ + x₂ + x₃ = -b/a, x₁x₂ + x₁x₃ + x₂x₃ = c/a, x₁x₂x₃ = -d/a.'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Cepat Menentukan Sisa Menggunakan Bagan Horner',
        description: 'Metode skema Horner mempermudah pembagian aljabar berderajat tinggi dengan koefisien.',
        steps: [
          'Tuliskan semua koefisien suku banyak dari derajat tertinggi ke terendah secara berurutan. Jangan lewatkan koefisien 0 jika ada suku yang hilang (misal x³ + 5, koefisien x² dan x adalah 0).',
          'Tentukan nilai pembuat nol pembagi (k). Jika pembagi adalah (x - k), maka pembuat nolnya adalah x = k.',
          'Turunkan koefisien pertama ke baris hasil paling bawah.',
          'Kalikan angka di baris hasil tersebut dengan nilai k, lalu tuliskan hasilnya tepat di bawah koefisien suku berikutnya.',
          'Jumlahkan kolom tersebut ke bawah, lalu ulangi langkah perkalian dengan k sampai kolom terakhir.',
          'Angka paling kanan di baris bawah adalah Sisa Pembagian (S), sedangkan angka-angka di sebelah kirinya adalah koefisien Hasil Bagi (H(x)).'
        ],
        tips: 'Jika pembagi berbentuk (ax - b), hasil bagi dari bagan Horner harus dibagi lagi dengan a!'
      },
      {
        title: 'Cara Menentukan Fungsi Invers f⁻¹(x)',
        description: 'Langkah sistematis mencari invers dari fungsi rasional f(x) = (ax + b) / (cx + d).',
        steps: [
          'Ubah notasi fungsi menjadi persamaan: y = f(x).',
          'Lakukan manipulasi aljabar untuk menyatakan variabel x dalam variabel y (x = ...).',
          'Trik cepat fungsi pecahan: f(x) = (ax + b) / (cx + d) memiliki invers f⁻¹(x) = (-dx + b) / (cx - a). Cukup tukar posisi a dan d, lalu ubah tanda keduanya menjadi lawannya (+ jadi -, - jadi +).'
        ],
        tips: 'Ingat syarat domain pecahan: penyebut tidak boleh sama dengan nol (cx - a ≠ 0).'
      }
    ],
    formulaDetails: [
      {
        title: 'Bentuk Pembagian Polinomial',
        formula: 'f(x) = P(x) · H(x) + S(x)',
        explanation: 'Setiap suku banyak f(x) dapat diuraikan menjadi hasil kali pembagi P(x) dengan hasil bagi H(x) ditambah sisa S(x).',
        variables: [
          { symbol: 'f(x)', meaning: 'Polinomial yang dibagi (derajat n)' },
          { symbol: 'P(x)', meaning: 'Polinomial pembagi (derajat m)' },
          { symbol: 'H(x)', meaning: 'Hasil bagi polinomial (derajat n - m)' },
          { symbol: 'S(x)', meaning: 'Sisa pembagian (derajat maksimum m - 1)' }
        ]
      },
      {
        title: 'Rumus Cepat Invers Fungsi Pecahan',
        formula: 'f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}',
        explanation: 'Tukar posisi koefisien a dan konstanta d, lalu ubah tanda positif/negatifnya.',
        variables: [
          { symbol: 'a, b, c, d', meaning: 'Konstanta bilangan real dengan cx + d ≠ 0' }
        ],
        quickTip: 'Trik cepat hafalan: Tukar posisi pojok kiri atas dan kanan bawah, kalikan minus!'
      }
    ],
    formulas: [
      'f(x) = P(x) \\cdot H(x) + S(x)',
      'x_1 + x_2 + x_3 = -b/a, \\quad x_1 x_2 + x_1 x_3 + x_2 x_3 = c/a, \\quad x_1 x_2 x_3 = -d/a',
      'f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}'
    ],
    examples: [
      {
        problem: 'Diketahui suku banyak f(x) = 2x³ - 5x² + 4x + p. Jika f(x) habis dibagi oleh (x - 2), tentukan nilai p dan hasil baginya!',
        given: 'f(x) = 2x³ - 5x² + 4x + p, Pembagi = (x - 2), Sisa = 0 (karena habis dibagi)',
        questionTarget: 'Nilai p dan hasil bagi H(x)',
        steps: [
          'Gunakan Teorema Sisa: Pembagi (x - 2) artinya pembuat nol x = 2.',
          'Substitusikan x = 2 ke f(x): f(2) = 2(2)³ - 5(2)² + 4(2) + p = 0.',
          'Hitung: 2(8) - 5(4) + 8 + p = 16 - 20 + 8 + p = 4 + p = 0.',
          'Maka diperoleh p = -4.',
          'Gunakan bagan Horner untuk koefisien [2, -5, 4, -4] dengan k = 2:',
          'Koefisien hasil: 2, (2·2 - 5) = -1, (-1·2 + 4) = 2, (2·2 - 4) = 0 (sisa).',
          'Maka Hasil Bagi H(x) = 2x² - x + 2.'
        ],
        solution: 'Nilai p = -4 dan hasil bagi f(x) adalah H(x) = 2x² - x + 2.'
      }
    ],
    quickTips: [
      'Jika jumlah semua koefisien f(x) = 0, maka x = 1 pasti salah satu akarnya!',
      'Jika jumlah koefisien pangkat genap = jumlah koefisien pangkat ganjil, maka x = -1 pasti salah satu akarnya!'
    ]
  },
  {
    id: 'm2',
    title: 'Kalkulus Diferensial (Turunan Fungsi)',
    categoryTag: 'Kalkulus',
    summary: 'Konsep laju perubahan sesaat, aturan perkalian & pembagian, aturan rantai, penentuan titik stasioner (maksimum/minimum), serta persamaan garis singgung kurva.',
    conceptExplanation: 'Turunan f\'(x) mengukur kemiringan (gradien m) garis singgung kurva pada titik tertentu. Ketika f\'(x) = 0, grafik sedang berada pada titik puncak (maksimum lokal), lembah (minimum lokal), atau titik belok.',
    keyPoints: [
      'Turunan dasar: f(x) = axⁿ → f\'(x) = a · n · xⁿ⁻¹.',
      'Aturan Perkalian: y = u · v → y\' = u\'v + uv\'.',
      'Aturan Pembagian: y = u / v → y\' = (u\'v - uv\') / v².',
      'Aturan Rantai: y = [u(x)]ⁿ → y\' = n · [u(x)]ⁿ⁻¹ · u\'(x).',
      'Gradien garis singgung pada kurva di titik (x₁, y₁) adalah m = f\'(x₁). Persamaan garis singgung: y - y₁ = m(x - x₁).',
      'Fungsi naik saat f\'(x) > 0, fungsi turun saat f\'(x) < 0, dan stasioner saat f\'(x) = 0.'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Mencari Nilai Maksimum & Minimum Fungsi',
        description: 'Langkah menentukan titik balik maksimum atau minimum pada interval tertentu.',
        steps: [
          'Cari turunan pertama f\'(x) dari fungsi tersebut.',
          'Buat persamaan stasioner: f\'(x) = 0 untuk menemukan nilai x stasioner (titik kritis).',
          'Tentukan jenis stasioner menggunakan uji turunan kedua f\'\'(x): Jika f\'\'(x) < 0 maka Maksimum; Jika f\'\'(x) > 0 maka Minimum; Jika f\'\'(x) = 0 maka titik belok.',
          'Substitusikan nilai x stasioner dan batas ujung interval (jika ada interval tertutup) ke fungsi asli f(x) untuk membandingkan nilai maksimum atau minimum globalnya.'
        ],
        tips: 'Jangan memasukkan nilai x ke f\'(x) untuk mencari nilai maksimum, selalu substitusikan ke fungsi awal f(x)!'
      },
      {
        title: 'Cara Cepat Menentukan Garis Singgung Kurva',
        description: 'Menemukan persamaan garis singgung di titik tertentu.',
        steps: [
          'Tentukan koordinat titik singgung (x₁, y₁). Jika baru diketahui x₁, cari y₁ = f(x₁).',
          'Hitung turunan pertama f\'(x), lalu masukkan x₁ untuk mendapatkan gradien m = f\'(x₁).',
          'Gunakan rumus baku garis singgung: y - y₁ = m(x - x₁), lalu sederhanakan ke bentuk y = mx + c atau ax + by + c = 0.'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Aturan Rantai Turunan',
        formula: '\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} \\iff y = [u(x)]^n \\implies y\' = n[u(x)]^{n-1} \\cdot u\'(x)',
        explanation: 'Digunakan ketika suatu fungsi berada di dalam fungsi lain atau memiliki pangkat berpangkat.',
        variables: [
          { symbol: 'u(x)', meaning: 'Fungsi bagian dalam' },
          { symbol: 'u\'(x)', meaning: 'Turunan dari fungsi bagian dalam' },
          { symbol: 'n', meaning: 'Pangkat fungsi luar' }
        ]
      },
      {
        title: 'Persamaan Garis Singgung Kurva',
        formula: 'y - y_1 = m(x - x_1) \\quad \\text{dengan } m = f\'(x_1)',
        explanation: 'Gradien garis singgung kurva adalah nilai turunan pertama di absis titik singgung.',
        variables: [
          { symbol: 'm', meaning: 'Gradien (kemiringan) garis singgung' },
          { symbol: '(x₁, y₁)', meaning: 'Titik singgung pada kurva' }
        ]
      }
    ],
    formulas: [
      'f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}',
      'y = u \\cdot v \\implies y\' = u\'v + uv\'',
      'y = \\frac{u}{v} \\implies y\' = \\frac{u\'v - uv\'}{v^2}',
      'y = [u(x)]^n \\implies y\' = n \\cdot [u(x)]^{n-1} \\cdot u\'(x)',
      'y - y_1 = m(x - x_1), \\quad m = f\'(x_1)'
    ],
    examples: [
      {
        problem: 'Tentukan persamaan garis singgung kurva y = 2x² - 3x + 1 di titik yang berabsis x = 2!',
        given: 'Kurva y = f(x) = 2x² - 3x + 1, x₁ = 2',
        questionTarget: 'Persamaan garis singgung',
        steps: [
          'Langkah 1: Cari ordinat titik singgung y₁ dengan substitusi x = 2 ke kurva: y₁ = 2(2)² - 3(2) + 1 = 8 - 6 + 1 = 3. Jadi titik singgung adalah (2, 3).',
          'Langkah 2: Cari turunan pertama kurva untuk gradien: y\' = f\'(x) = 4x - 3.',
          'Langkah 3: Hitung nilai gradien m di x₁ = 2: m = f\'(2) = 4(2) - 3 = 5.',
          'Langkah 4: Masukkan ke rumus garis singgung: y - 3 = 5(x - 2) → y - 3 = 5x - 10 → y = 5x - 7.'
        ],
        solution: 'Persamaan garis singgungnya adalah y = 5x - 7 atau 5x - y - 7 = 0.'
      }
    ],
    quickTips: [
      'Garis saling sejajar memiliki gradien sama: m₁ = m₂.',
      'Garis saling tegak lurus memiliki hasil kali gradien = -1 (m₁ · m₂ = -1 atau m₂ = -1/m₁).'
    ]
  },
  {
    id: 'm3',
    title: 'Kalkulus Integral (Anti-Turunan & Luas Daerah)',
    categoryTag: 'Kalkulus',
    summary: 'Teknik pengintegralan tak tentu, integral tentu, integral substitusi, integral parsial (metode Tanzalin), serta penerapan menghitung luas daerah dan volume benda putar.',
    conceptExplanation: 'Integral adalah operasi balikan dari turunan (anti-turunan). Integral tentu secara geometris merepresentasikan akumulasi luas di bawah kurva fungsi terhadap sumbu koordinat.',
    keyPoints: [
      'Integral dasar aljabar: ∫ axⁿ dx = [a / (n + 1)] · xⁿ⁺¹ + C, dengan n ≠ -1.',
      'Integral tentu Teorema Dasar Kalkulus: ∫ₐᵇ f(x) dx = F(b) - F(a).',
      'Luas daerah antara kurva atas y₁ dan kurva bawah y₂: L = ∫ₐᵇ [y_atas - y_bawah] dx.',
      'Rumus kilat luas daerah yang dibatasi parabola dan garis atau 2 parabola: Luas = (D√D) / (6a²), di mana D = b² - 4ac dari persamaan sekutu y₁ - y₂ = 0!',
      'Volume benda putar mengelilingi sumbu-X: V = π ∫ₐᵇ [f(x)]² dx.'
    ],
    stepByStepGuides: [
      {
        title: 'Trik Cepat Menghitung Luas Parabola & Garis (Tanpa Integral)',
        description: 'Metode kilat determinan D√D / 6a² untuk soal pilihan ganda ujian kompetensi.',
        steps: [
          'Samakan persamaan kurva: y₁ = y₂ → y₁ - y₂ = 0 untuk mendapatkan persamaan kuadrat sekutu: ax² + bx + c = 0.',
          'Identifikasi nilai koefisien a, b, dan c.',
          'Hitung nilai diskriminan: D = b² - 4ac.',
          'Hitung luas langsung dengan rumus sakti: L = (D · √D) / (6 · a²).'
        ],
        tips: 'Trik ini menghemat waktu 80% dibandingkan menghitung integral batas dan eliminasi panjang!'
      },
      {
        title: 'Cara Integral Parsial dengan Metode Tabel (Tanzalin)',
        description: 'Menyelesaikan integral ∫ u · v dx dengan turunan berulang dan integral berulang.',
        steps: [
          'Buat 2 kolom tabel: Kolom Kiri (Turunan / Diferensial u) dan Kolom Kanan (Integral v).',
          'Pilih u yang akan menjadi nol jika diturunkan terus-menerus (misal x, x², x³).',
          'Turunkan kolom kiri sampai menghasilkan 0. Integralkan kolom kanan sebanyak baris kolom kiri.',
          'Beri tanda bergantian pada hasil kali silang miring: baris 1 (+), baris 2 (-), baris 3 (+), dst.',
          'Kalikan menyilang baris ke-i kolom kiri dengan baris ke-(i+1) kolom kanan beserta tandanya lalu jumlahkan + C.'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus Cepat Luas Daerah Parabola',
        formula: 'L = \\frac{D\\sqrt{D}}{6a^2} \\quad \\text{dengan } D = b^2 - 4ac',
        explanation: 'Luas daerah tertutup antara parabola dan garis atau antara dua parabola yang berpotongan.',
        variables: [
          { symbol: 'D', meaning: 'Diskriminan persamaan kuadrat persekutuan (b² - 4ac)' },
          { symbol: 'a', meaning: 'Koefisien x² pada persamaan persekutuan' }
        ],
        quickTip: 'Hanya berlaku untuk persamaan persekutuan berderajat dua (parabola & garis / 2 parabola)!'
      },
      {
        title: 'Volume Benda Putar Sumbu-X',
        formula: 'V = \\pi \\int_{a}^{b} [f(x)]^2 dx \\quad \\text{atau} \\quad V = \\pi \\int_{a}^{b} [y_1^2 - y_2^2] dx',
        explanation: 'Perputaran 360° bidang datar terhadap sumbu X menghasilkan volume benda pejal silindris.',
        variables: [
          { symbol: 'a, b', meaning: 'Batas integrasi pada sumbu X' },
          { symbol: 'y₁, y₂', meaning: 'Kurva terluar dan kurva terdalam' }
        ]
      }
    ],
    formulas: [
      '\\int ax^n dx = \\frac{a}{n+1} x^{n+1} + C',
      '\\int_{a}^{b} f(x) dx = [F(x)]_a^b = F(b) - F(a)',
      '\\int u \\cdot dv = u \\cdot v - \\int v \\cdot du',
      'L = \\frac{D\\sqrt{D}}{6a^2}, \\quad D = b^2 - 4ac',
      'V_x = \\pi \\int_{a}^{b} [y_{atas}^2 - y_{bawah}^2] dx'
    ],
    examples: [
      {
        problem: 'Hitunglah luas daerah yang dibatasi oleh kurva y = 4 - x² dan garis y = 4 - 2x!',
        given: 'y₁ = 4 - x² (parabola), y₂ = 4 - 2x (garis lurus)',
        questionTarget: 'Luas daerah L',
        steps: [
          'Gunakan trik cepat persamaan sekutu: y₁ - y₂ = 0 → (4 - x²) - (4 - 2x) = 0.',
          'Sederhanakan: -x² + 2x = 0 atau dikali -1 menjadi x² - 2x + 0 = 0.',
          'Identifikasi: a = 1, b = -2, c = 0.',
          'Hitung Diskriminan D: D = b² - 4ac = (-2)² - 4(1)(0) = 4 - 0 = 4.',
          'Gunakan rumus kilat: L = (D√D) / (6a²) = (4 · √4) / (6 · 1²) = (4 · 2) / 6 = 8/6 = 4/3 satuan luas.'
        ],
        solution: 'Luas daerah tersebut adalah 4/3 satuan luas (atau 1 ⅓ satuan luas).'
      }
    ],
    quickTips: [
      'Integral dari turunan adalah fungsi aslinya ditambah konstanta C: ∫ f\'(x) dx = f(x) + C.',
      'Jika kurva simetris ganjil f(-x) = -f(x) diintegralkan dari -a ke a, hasilnya selalu bernilai 0!'
    ]
  },
  {
    id: 'm4',
    title: 'Trigonometri & Identitas Sudut Lengkap',
    categoryTag: 'Trigonometri',
    summary: 'Nilai perbandingan trigonometri sudut istimewa, aturan kuadran I-IV, rumus jumlah & selisih sudut, sudut rangkap, aturan sinus & kosinus, serta luas segitiga sembarang.',
    conceptExplanation: 'Trigonometri mengkaji hubungan antara sudut dan panjang sisi segitiga. Dengan memahami lingkaran satuan dan tanda trigonometri di tiap kuadran (ASTC: All - Sin - Tan - Cos), seluruh relasi sudut dapat dihitung dengan mudah.',
    keyPoints: [
      'Kuadran I (0°-90°): Semua positif (All). Kuadran II (90°-180°): Hanya Sinus positif. Kuadran III (180°-270°): Hanya Tangen positif. Kuadran IV (270°-360°): Hanya Kosinus positif (Hafalan: Semua Sindikat Tangan Kosong).',
      'Identitas Dasar: sin² A + cos² A = 1, 1 + tan² A = sec² A, 1 + cot² A = csc² A.',
      'Sudut Rangkap: sin(2A) = 2 sin A cos A; cos(2A) = cos² A - sin² A = 2cos² A - 1 = 1 - 2sin² A; tan(2A) = 2tan A / (1 - tan² A).',
      'Aturan Sinus: a / sin A = b / sin B = c / sin C = 2R (R = jari-jari lingkaran luar segitiga).',
      'Aturan Kosinus: a² = b² + c² - 2bc cos A (digunakan jika diketahui 2 sisi dan 1 sudut apit, atau 3 sisi).',
      'Luas Segitiga: Luas = ½ · a · b · sin C = ½ · b · c · sin A = ½ · a · c · sin B.'
    ],
    stepByStepGuides: [
      {
        title: 'Kapan Menggunakan Aturan Sinus vs Aturan Kosinus?',
        description: 'Cara cepat memilih rumus segitiga sembarang tanpa salah jalan.',
        steps: [
          'Gunakan Aturan Sinus jika diketahui: (1) Dua sudut dan satu sisi (sudut-sisi-sudut atau sudut-sudut-sisi), atau (2) Dua sisi dan satu sudut yang BERHADAPAN dengan salah satu sisi tersebut.',
          'Gunakan Aturan Kosinus jika diketahui: (1) Dua sisi dan satu SUDUT APIT di antara keduanya (sisi-sudut-sisi), atau (2) Ketiga sisi segitiga diketahui dan diminta mencari besar salah satu sudutnya.'
        ],
        tips: 'Ingat: Jika mencari sudut dari 3 sisi, gunakan rumus cos A = (b² + c² - a²) / (2bc).'
      }
    ],
    formulaDetails: [
      {
        title: 'Aturan Kosinus Sudut',
        formula: '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}',
        explanation: 'Mencari besar sudut segitiga sembarang apabila panjang ketiga sisinya diketahui.',
        variables: [
          { symbol: 'a, b, c', meaning: 'Panjang sisi-sisi segitiga' },
          { symbol: 'A', meaning: 'Sudut di hadapan sisi a' }
        ]
      },
      {
        title: 'Rumus Jumlah & Selisih Sudut',
        formula: '\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B, \\quad \\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B',
        explanation: 'Perhatikan tanda pada cosinus: jika di dalam tanda kurung (+), maka pada penjabaran menjadi (-).',
        variables: [
          { symbol: 'A, B', meaning: 'Besar sudut real' }
        ]
      }
    ],
    formulas: [
      '\\sin^2 A + \\cos^2 A = 1',
      '\\sin(2A) = 2 \\sin A \\cos A',
      '\\cos(2A) = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A',
      '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}',
      'a^2 = b^2 + c^2 - 2bc \\cos A',
      '\\text{Luas } \\Delta = \\frac{1}{2} ab \\sin C'
    ],
    examples: [
      {
        problem: 'Dalam segitiga ABC, diketahui panjang sisi b = 6 cm, c = 8 cm, dan sudut apit ∠A = 60°. Tentukan panjang sisi a dan luas segitiga ABC!',
        given: 'b = 6 cm, c = 8 cm, ∠A = 60° (cos 60° = ½, sin 60° = ½√3)',
        questionTarget: 'Panjang sisi a dan Luas ΔABC',
        steps: [
          'Gunakan Aturan Kosinus untuk sisi a: a² = b² + c² - 2bc cos A.',
          'a² = 6² + 8² - 2(6)(8)(cos 60°) = 36 + 64 - 96(½) = 100 - 48 = 52.',
          'Maka a = √52 = √(4 · 13) = 2√13 cm.',
          'Gunakan rumus luas segitiga trigonometri: Luas = ½ · b · c · sin A = ½ · 6 · 8 · sin 60° = 24 · (½√3) = 12√3 cm².'
        ],
        solution: 'Panjang sisi a = 2√13 cm dan Luas segitiga = 12√3 cm².'
      }
    ],
    quickTips: [
      'Hafalan tanda kuadran: "Semua - Sudah - Tahu - Caranya" (Kuadran I: Semua +, II: Sin +, III: Tan +, IV: Cos +).',
      'Sudut berelasi (90° ± α) atau (270° ± α) MENGUBAH fungsi (sin ↔ cos, tan ↔ cot).'
    ]
  },
  {
    id: 'm5',
    title: 'Matriks & Transformasi Geometri',
    categoryTag: 'Matriks & Geometri',
    summary: 'Operasi matriks, determinan ordo 2x2 dan 3x3 (metode Sarrus), matriks invers, penyelesaian SPLDV metode Cramer, serta matriks transformasi (translasi, refleksi, rotasi, dilatasi).',
    conceptExplanation: 'Matriks adalah susunan skalar dalam baris dan kolom. Perkalian matriks dilakukan dengan metode baris kali kolom. Matriks transformasi mengubah posisi koordinat titik (x, y) menjadi bayangan (x\', y\').',
    keyPoints: [
      'Perkalian Matriks A(m×p) · B(p×n) menghasilkan matriks C(m×n). Hanya bisa dikalikan jika jumlah kolom A sama dengan jumlah baris B.',
      'Determinan Matriks 2x2: det(A) = |A| = ad - bc. Matriks singular adalah matriks yang |A| = 0 (tidak punya invers).',
      'Invers Matriks 2x2: A⁻¹ = (1 / det A) · [d, -b; -c, a].',
      'Sifat Determinan: det(A · B) = det(A) · det(B); det(A⁻¹) = 1 / det(A); det(Aᵀ) = det(A); det(k · Aₙₓₙ) = kⁿ · det(A).',
      'Matriks Rotasi sebesar θ terhadap pusat (0,0): [cos θ, -sin θ; sin θ, cos θ].',
      'Matriks Refleksi terhadap sumbu X: [1, 0; 0, -1]; terhadap sumbu Y: [-1, 0; 0, 1]; terhadap garis y = x: [0, 1; 1, 0].'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Menentukan Invers Matriks 2x2',
        description: 'Langkah cepat mencari invers matriks [a b; c d].',
        steps: [
          'Hitung determinan: det(A) = (a · d) - (b · c).',
          'Pastikan det(A) ≠ 0. Jika det(A) = 0, matriks tidak memiliki invers.',
          'Tukar posisi elemen diagonal utama: a bertukar posisi dengan d.',
          'Kalikan elemen diagonal samping dengan -1: b menjadi -b, dan c menjadi -c (adjoin matriks: [d, -b; -c, a]).',
          'Kalikan matriks adjoin tersebut dengan skalar 1 / det(A).'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus Invers Matriks 2x2',
        formula: 'A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\implies A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
        explanation: 'Invers ada jika determinan ad - bc ≠ 0.',
        variables: [
          { symbol: 'ad - bc', meaning: 'Determinan matriks A' },
          { symbol: '[d, -b; -c, a]', meaning: 'Adjoin matriks A' }
        ]
      }
    ],
    formulas: [
      '\\det(A) = ad - bc',
      'A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
      '\\det(A \\cdot B) = \\det(A) \\cdot \\det(B), \\quad \\det(A^{-1}) = \\frac{1}{\\det(A)}',
      '\\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix} = \\begin{pmatrix} \\cos \\theta & -\\sin \\theta \\\\ \\sin \\theta & \\cos \\theta \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}'
    ],
    examples: [
      {
        problem: 'Diketahui matriks A = [3, 2; 4, 3]. Tentukan determinan dan matriks invers A⁻¹!',
        given: 'A = [3, 2; 4, 3] (a = 3, b = 2, c = 4, d = 3)',
        questionTarget: 'Determinan det(A) dan Invers A⁻¹',
        steps: [
          'Hitung determinan: det(A) = (3)(3) - (2)(4) = 9 - 8 = 1.',
          'Susun matriks adjoin: tukar posisi a=3 dan d=3 → [3, ...; ..., 3]; ubah tanda b=2 jadi -2 dan c=4 jadi -4 → [3, -2; -4, 3].',
          'Hitung Invers: A⁻¹ = (1/1) · [3, -2; -4, 3] = [3, -2; -4, 3].'
        ],
        solution: 'det(A) = 1 dan A⁻¹ = [3, -2; -4, 3].'
      }
    ],
    quickTips: [
      'Jika persamaan matriks A · X = B, maka X = A⁻¹ · B (A⁻¹ ditaruh di depan B!).',
      'Jika X · A = B, maka X = B · A⁻¹ (A⁻¹ ditaruh di belakang B!).'
    ]
  },
  {
    id: 'm6',
    title: 'Barisan, Deret & Bunga Majemuk',
    categoryTag: 'Barisan & Deret',
    summary: 'Barisan dan deret aritmatika, barisan geometri, deret geometri tak hingga konvergen, serta penerapan finansial pada bunga majemuk, pertumbuhan, dan anuitas.',
    conceptExplanation: 'Barisan aritmatika memiliki selisih (beda b) yang konstan melalui penjumlahan, sedangkan barisan geometri memiliki pengali (rasio r) yang konstan. Deret tak hingga dengan rasio -1 < r < 1 memiliki jumlah terhingga (konvergen).',
    keyPoints: [
      'Aritmatika: Suku ke-n: Uₙ = a + (n - 1)b. Beda: b = Uₙ - Uₙ₋₁. Jumlah n suku pertama: Sₙ = n/2 (2a + (n-1)b) = n/2 (a + Uₙ).',
      'Suku Tengah Aritmatika: U_t = (a + Uₙ) / 2 untuk n ganjil.',
      'Geometri: Suku ke-n: Uₙ = a · rⁿ⁻¹. Rasio: r = Uₙ / Uₙ₋₁. Jumlah n suku pertama: Sₙ = a(rⁿ - 1) / (r - 1) untuk r > 1, atau a(1 - rⁿ) / (1 - r) untuk r < 1.',
      'Deret Geometri Tak Hingga: S_∞ = a / (1 - r), syarat konvergen: -1 < r < 1.',
      'Bunga Majemuk: Mₙ = M₀ (1 + i)ⁿ, di mana M₀ = modal awal, i = persentase suku bunga per periode, n = periode waktu.'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Cepat Menghitung Deret Geometri Tak Hingga',
        description: 'Menemukan jumlah total tanpa menghitung deret satu per satu.',
        steps: [
          'Tentukan suku pertama a (nilai saat n = 1).',
          'Hitung nilai rasio r = U₂ / U₁.',
          'Pastikan |r| < 1. Jika r ≥ 1 atau r ≤ -1, deret divergen (hasilnya tak hingga).',
          'Masukkan langsung ke rumus S_∞ = a / (1 - r).'
        ],
        tips: 'Pada soal bola memantul dengan tinggi awal h dan rasio pantulan a/b, Panjang Lintasan Total = h · [(b + a) / (b - a)]!'
      }
    ],
    formulaDetails: [
      {
        title: 'Deret Geometri Tak Hingga Konvergen',
        formula: 'S_\\infty = \\frac{a}{1 - r} \\quad \\text{dengan } -1 < r < 1',
        explanation: 'Jumlah seluruh suku tak terhingga dari deret geometri yang semakin mengecil mendekati nol.',
        variables: [
          { symbol: 'a', meaning: 'Suku pertama deret' },
          { symbol: 'r', meaning: 'Rasio barisan (U₂ / U₁)' }
        ]
      },
      {
        title: 'Rumus Kilat Lintasan Bola Memantul',
        formula: 'S_{\\text{total}} = h \\cdot \\left( \\frac{b + a}{b - a} \\right)',
        explanation: 'Total jarak lintasan bola yang dijatuhkan dari ketinggian h dan memantul kembali dengan rasio a/b.',
        variables: [
          { symbol: 'h', meaning: 'Ketinggian mula-mula bola dijatuhkan' },
          { symbol: 'a/b', meaning: 'Rasio pecahan pantulan tinggi bola (misal 3/4)' }
        ],
        quickTip: 'Sangat sering keluar di UTBK & Uji Kompetensi Matematika!'
      }
    ],
    formulas: [
      'U_n = a + (n-1)b, \\quad S_n = \\frac{n}{2}(2a + (n-1)b)',
      'U_n = a \\cdot r^{n-1}, \\quad S_n = \\frac{a(r^n - 1)}{r - 1}',
      'S_\\infty = \\frac{a}{1 - r}, \\quad (|r| < 1)',
      'S_{\\text{pantulan}} = h \\cdot \\frac{b + a}{b - a}',
      'M_n = M_0 (1 + i)^n'
    ],
    examples: [
      {
        problem: 'Sebuah bola dijatuhkan dari ketinggian 12 meter dan memantul kembali setinggi ¾ dari tinggi sebelumnya secara terus-menerus hingga berhenti. Tentukan total panjang lintasan bola tersebut!',
        given: 'Tinggi awal h = 12 meter, rasio pantulan = ¾ (a = 3, b = 4)',
        questionTarget: 'Total panjang lintasan bola S_total',
        steps: [
          'Gunakan rumus kilat bola memantul: S_total = h · [(b + a) / (b - a)].',
          'Masukkan nilai: h = 12, a = 3, b = 4.',
          'S_total = 12 · [(4 + 3) / (4 - 3)] = 12 · [7 / 1] = 12 · 7 = 84 meter.'
        ],
        solution: 'Total panjang lintasan bola sampai berhenti adalah 84 meter.'
      }
    ],
    quickTips: [
      'Hubungan antara Sₙ dan Uₙ: Uₙ = Sₙ - Sₙ₋₁.',
      'Suku tengah aritmatika selalu berada di posisi n = (ganjil + 1)/2.'
    ]
  },
  {
    id: 'm7',
    title: 'Statistika Data Berkelompok & Ukuran Pemusatan',
    categoryTag: 'Statistika',
    summary: 'Rata-rata (mean) data tunggal & kelompok, metode rata-rata sementara, median, modus, kuartil (Q1, Q2, Q3), jangkauan interkuartil, ragam (varians), dan simpangan baku.',
    conceptExplanation: 'Statistika mengorganisasi dan menganalisis data untuk menarik kesimpulan. Data berkelompok disajikan dalam tabel distribusi frekuensi yang memiliki batas bawah (Tb), panjang kelas (p), dan frekuensi kumulatif.',
    keyPoints: [
      'Mean data kelompok: x̄ = Σ(fᵢ · xᵢ) / Σfᵢ, dengan xᵢ adalah titik tengah kelas (½(batas bawah + batas atas)).',
      'Modus data kelompok: Mo = Tb + [d₁ / (d₁ + d₂)] · p, di mana Tb = tepi bawah kelas modus, d₁ = selisih frekuensi dengan kelas sebelumnya, d₂ = selisih dengan kelas sesudahnya, p = panjang kelas.',
      'Median (Q2) data kelompok: Me = Tb + [(½N - Fk) / f_me] · p, di mana N = total frekuensi, Fk = frekuensi kumulatif sebelum kelas median, f_me = frekuensi kelas median.',
      'Ragam (Varians s²): s² = Σ(xᵢ - x̄)² / n. Simpangan Baku (Standar Deviasi s): s = √(s²).'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Menentukan Modus Data Berkelompok dengan Akurat',
        description: 'Langkah mudah menghitung modus dari tabel distribusi frekuensi.',
        steps: [
          'Cari kelas interval yang memiliki frekuensi (f) paling tinggi/terbesar.',
          'Tentukan tepi bawah (Tb) = batas bawah - 0,5.',
          'Hitung d₁ = frekuensi kelas modus dikurangi frekuensi kelas tepat di atasnya.',
          'Hitung d₂ = frekuensi kelas modus dikurangi frekuensi kelas tepat di bawahnya.',
          'Hitung panjang kelas p = (tepi atas - tepi bawah).',
          'Masukkan ke rumus Mo = Tb + [d₁ / (d₁ + d₂)] · p.'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus Modus Data Berkelompok',
        formula: 'Mo = Tb + \\left( \\frac{d_1}{d_1 + d_2} \\right) \\cdot p',
        explanation: 'Menentukan nilai yang paling sering muncul pada data yang dikelompokkan dalam interval kelas.',
        variables: [
          { symbol: 'Tb', meaning: 'Tepi bawah kelas modus (Batas Bawah - 0,5)' },
          { symbol: 'd₁', meaning: 'Selisih frekuensi kelas modus dengan frekuensi kelas sebelumnya' },
          { symbol: 'd₂', meaning: 'Selisih frekuensi kelas modus dengan frekuensi kelas sesudahnya' },
          { symbol: 'p', meaning: 'Panjang interval kelas' }
        ]
      },
      {
        title: 'Rumus Median (Kuartil Tengah Q2)',
        formula: 'Me = Tb + \\left( \\frac{\\frac{1}{2}N - F_k}{f_{me}} \\right) \\cdot p',
        explanation: 'Nilai tengah yang membagi 50% data di bawah dan 50% data di atasnya.',
        variables: [
          { symbol: 'N', meaning: 'Total seluruh frekuensi (jumlah data)' },
          { symbol: 'Fk', meaning: 'Frekuensi kumulatif sebelum kelas median' },
          { symbol: 'f_me', meaning: 'Frekuensi asli kelas median' }
        ]
      }
    ],
    formulas: [
      '\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}',
      'Mo = Tb + \\left(\\frac{d_1}{d_1 + d_2}\\right) p',
      'Me = Tb + \\left(\\frac{\\frac{1}{2}N - F_k}{f_{me}}\\right) p',
      's = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}'
    ],
    examples: [
      {
        problem: 'Dalam kelas modus dengan interval 50 - 59, frekuensi kelasnya adalah 12. Frekuensi kelas sebelumnya 8, dan frekuensi kelas sesudahnya 6. Tentukan nilai modusnya!',
        given: 'Interval 50 - 59 → Tb = 50 - 0,5 = 49,5; p = (59 - 50 + 1) = 10; f_mo = 12, f_sebelum = 8, f_sesudah = 6',
        questionTarget: 'Nilai Modus Mo',
        steps: [
          'Hitung d₁: d₁ = 12 - 8 = 4.',
          'Hitung d₂: d₂ = 12 - 6 = 6.',
          'Hitung d₁ / (d₁ + d₂): 4 / (4 + 6) = 4 / 10 = 0,4.',
          'Masukkan ke rumus: Mo = Tb + 0,4 · p = 49,5 + (0,4 · 10) = 49,5 + 4 = 53,5.'
        ],
        solution: 'Nilai modus data kelompok tersebut adalah 53,5.'
      }
    ],
    quickTips: [
      'Jika setiap data ditambah konstanta k: Mean, Median, Modus naik sebesar k, tetapi Simpangan Baku TETAP!',
      'Jika setiap data dikali konstanta k: Semua ukuran pemusatan DAN simpangan baku ikut dikali k.'
    ]
  },
  {
    id: 'm8',
    title: 'Kaidah Pencacahan, Permutasi & Peluang',
    categoryTag: 'Peluang & Kombinatorika',
    summary: 'Aturan perkalian (filling slots), faktorial, permutasi (nPr, unsur sama, siklis), kombinasi (nCr), peluang kejadian majemuk (saling lepas, saling bebas, peluang bersyarat), serta frekuensi harapan.',
    conceptExplanation: 'Kombinatorika menghitung banyaknya susunan kemungkinan tanpa harus mendaftar satu per satu. Permutasi memperhatikan urutan (posisi ketua-wakil, juara 1-2-3), sedangkan Kombinasi TIDAK memperhatikan urutan (memilih anggota tim, mengambil bola acak).',
    keyPoints: [
      'Faktorial: n! = n · (n - 1) · (n - 2) · ... · 1, dengan 0! = 1.',
      'Permutasi memperhatikan urutan: ₙPᵣ = n! / (n - r)!',
      'Permutasi Unsur Sama: P = n! / (k₁! · k₂! · ... · kₘ!) (contoh: menyusun kata "MATEMATIKA").',
      'Permutasi Siklis (melingkar): P_siklis = (n - 1)!',
      'Kombinasi TANPA urutan: ₙCᵣ = n! / [r! · (n - r)!].',
      'Peluang: P(A) = n(A) / n(S), rentang nilai 0 ≤ P(A) ≤ 1.',
      'Kejadian Saling Lepas: P(A ∪ B) = P(A) + P(B). Kejadian Saling Bebas: P(A ∩ B) = P(A) · P(B).',
      'Peluang Bersyarat: P(A | B) = P(A ∩ B) / P(B).'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Membedakan Permutasi vs Kombinasi dalam Soal Cerita',
        description: 'Trik cepat memilih rumus yang tepat dalam hitungan detik.',
        steps: [
          'Baca soal dan tanyakan: "Apakah urutan objek berpengaruh jika dibolak-balik?"',
          'Jika BERPENGARUH (misal: A ketua B sekretaris BEDA dengan B ketua A sekretaris, atau juara 1-2-3, atau plat nomor mobil) → GUNAKAN PERMUTASI (nPr).',
          'Jika TIDAK BERPENGARUH (misal: memilih 3 orang delegasi dari 10 siswa, mengambil 2 bola merah dari kotak, bersalaman) → GUNAKAN KOMBINASI (nCr).'
        ],
        tips: 'Ingat rumus kombinasi nC2 selalu sama dengan n(n-1) / 2! Sangat praktis untuk soal jabat tangan.'
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus Kombinasi nCr',
        formula: '_nC_r = \\frac{n!}{r!(n - r)!}',
        explanation: 'Memilih r objek dari total n objek tanpa memperhatikan urutan susunannya.',
        variables: [
          { symbol: 'n', meaning: 'Jumlah seluruh objek yang tersedia' },
          { symbol: 'r', meaning: 'Jumlah objek yang akan dipilih' }
        ]
      },
      {
        title: 'Peluang Kejadian Saling Bebas',
        formula: 'P(A \\cap B) = P(A) \\cdot P(B)',
        explanation: 'Terjadinya peristiwa A tidak mempengaruhi terjadinya peristiwa B (misal melempar 2 koin terpisah).',
        variables: [
          { symbol: 'P(A)', meaning: 'Peluang terjadinya peristiwa A' },
          { symbol: 'P(B)', meaning: 'Peluang terjadinya peristiwa B' }
        ]
      }
    ],
    formulas: [
      '_nP_r = \\frac{n!}{(n - r)!}',
      'P_{\\text{siklis}} = (n - 1)!',
      '_nC_r = \\frac{n!}{r!(n - r)!}',
      'P(A) = \\frac{n(A)}{n(S)}, \\quad F_h(A) = P(A) \\cdot N',
      'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
      'P(A \\cap B) = P(A) \\cdot P(B) \\quad (\\text{Saling Bebas})'
    ],
    examples: [
      {
        problem: 'Dalam sebuah kotak terdapat 5 kelereng merah dan 3 kelereng biru. Diambil 2 kelereng sekaligus secara acak. Tentukan peluang terambilnya 1 kelereng merah dan 1 kelereng biru!',
        given: '5 Merah, 3 Biru (Total = 8 kelereng), Diambil = 2 kelereng',
        questionTarget: 'Peluang terambil 1 Merah dan 1 Biru (P(A))',
        steps: [
          'Langkah 1: Hitung ruang sampel n(S) (memilih 2 dari 8 kelereng): n(S) = ₈C₂ = 8! / (2! · 6!) = (8 · 7) / 2 = 28.',
          'Langkah 2: Hitung titik sampel n(A) (1 merah dari 5 DAN 1 biru dari 3): n(A) = ₅C₁ · ₃C₁ = 5 · 3 = 15.',
          'Langkah 3: Hitung peluang: P(A) = n(A) / n(S) = 15 / 28.'
        ],
        solution: 'Peluang terambil 1 kelereng merah dan 1 kelereng biru adalah 15/28.'
      }
    ],
    quickTips: [
      'Peluang komplemen: P(bukan A) = 1 - P(A). Berguna untuk soal "peluang paling sedikit satu..."!',
      'Jumlah jabat tangan n orang = ₙC₂ = n(n - 1) / 2.'
    ]
  }
];
