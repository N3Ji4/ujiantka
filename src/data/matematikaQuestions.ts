import { Question } from '../types';

export const matematikaQuestions: Question[] = [
  {
    id: 'mq-1',
    subjectId: 'matematika',
    topicTag: 'Aljabar',
    difficulty: 'Sedang',
    question: 'Jika suku banyak f(x) = 2x^3 - px^2 + 4x + 6 dibagi oleh (x + 1) bersisa 4, maka nilai p adalah...',
    mathFormula: 'f(-1) = 4',
    options: [
      { id: 'A', text: '-4' },
      { id: 'B', text: '-2' },
      { id: 'C', text: '2' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'A',
    explanation: 'Substitusi x = -1 ke f(x): f(-1) = 2(-1)^3 - p(-1)^2 + 4(-1) + 6 = -2 - p - 4 + 6 = -p. Karena sisa 4, maka -p = 4 sehingga p = -4.'
  },
  {
    id: 'mq-2',
    subjectId: 'matematika',
    topicTag: 'Kalkulus',
    difficulty: 'Mudah',
    question: 'Turunan pertama dari fungsi f(x) = (3x^2 - 5)^4 adalah f\'(x) = ...',
    mathFormula: 'f(x) = u^n \\rightarrow f\'(x) = n \\cdot u^{n-1} \\cdot u\'',
    options: [
      { id: 'A', text: '12x(3x^2 - 5)^3' },
      { id: 'B', text: '24x(3x^2 - 5)^3' },
      { id: 'C', text: '4(3x^2 - 5)^3' },
      { id: 'D', text: '12(3x^2 - 5)^3' }
    ],
    correctAnswer: 'B',
    explanation: 'Gunakan aturan rantai: f\'(x) = 4(3x^2 - 5)^3 · (6x) = 24x(3x^2 - 5)^3.'
  },
  {
    id: 'mq-3',
    subjectId: 'matematika',
    topicTag: 'Integral',
    difficulty: 'Sedang',
    question: 'Nilai dari integral tertentu \\int_{0}^{2} (3x^2 - 2x + 1) dx adalah...',
    mathFormula: '\\left[ x^3 - x^2 + x \\right]_{0}^{2}',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'B',
    explanation: 'Anti turunan: [x^3 - x^2 + x]. Masukkan batas 2: (2^3 - 2^2 + 2) - (0) = 8 - 4 + 2 = 6.'
  },
  {
    id: 'mq-4',
    subjectId: 'matematika',
    topicTag: 'Trigonometri',
    difficulty: 'Sulit',
    question: 'Diketahui sin A = 3/5 untuk A sudut lancip. Nilai dari sin(2A) adalah...',
    mathFormula: '\\sin(2A) = 2 \\sin A \\cos A',
    options: [
      { id: 'A', text: '12/25' },
      { id: 'B', text: '16/25' },
      { id: 'C', text: '24/25' },
      { id: 'D', text: '7/25' }
    ],
    correctAnswer: 'C',
    explanation: 'Karena sin A = 3/5 (sisi depan/miring), maka cos A = 4/5 (sisi samping/miring). sin(2A) = 2(3/5)(4/5) = 24/25.'
  },
  {
    id: 'mq-5',
    subjectId: 'matematika',
    topicTag: 'Peluang',
    difficulty: 'Mudah',
    question: 'Dalam sebuah kantong terdapat 5 kelereng merah dan 4 kelereng biru. Diambil 2 kelereng sekaligus secara acak. Peluang terambil keduanya kelereng merah adalah...',
    options: [
      { id: 'A', text: '5/18' },
      { id: 'B', text: '10/18' },
      { id: 'C', text: '2/9' },
      { id: 'D', text: '5/9' }
    ],
    correctAnswer: 'A',
    explanation: 'n(S) = 9C2 = (9*8)/2 = 36. n(M) = 5C2 = (5*4)/2 = 10. Peluang = 10/36 = 5/18.'
  },
  {
    id: 'mq-6',
    subjectId: 'matematika',
    topicTag: 'Geometri Analitik',
    difficulty: 'Sedang',
    question: 'Persamaan lingkaran yang berpusat di (2, -3) dan memiliki jari-jari r = 4 adalah...',
    mathFormula: '(x - a)^2 + (y - b)^2 = r^2',
    options: [
      { id: 'A', text: 'x^2 + y^2 - 4x + 6y - 3 = 0' },
      { id: 'B', text: 'x^2 + y^2 + 4x - 6y + 3 = 0' },
      { id: 'C', text: 'x^2 + y^2 - 4x + 6y + 9 = 0' },
      { id: 'D', text: 'x^2 + y^2 + 2x - 3y - 4 = 0' }
    ],
    correctAnswer: 'A',
    explanation: '(x - 2)^2 + (y + 3)^2 = 4^2 => x^2 - 4x + 4 + y^2 + 6y + 9 = 16 => x^2 + y^2 - 4x + 6y - 3 = 0.'
  },
  {
    id: 'mq-7',
    subjectId: 'matematika',
    topicTag: 'Barisan & Deret',
    difficulty: 'Mudah',
    question: 'Suku ke-n suatu barisan aritmetika diberikan oleh Un = 3n + 2. Jumlah 10 suku pertama (S10) barisan tersebut adalah...',
    options: [
      { id: 'A', text: '175' },
      { id: 'B', text: '180' },
      { id: 'C', text: '185' },
      { id: 'D', text: '190' }
    ],
    correctAnswer: 'C',
    explanation: 'U1 = 3(1)+2 = 5. U10 = 3(10)+2 = 32. S10 = 10/2 * (U1 + U10) = 5 * (5 + 32) = 5 * 37 = 185.'
  },
  {
    id: 'mq-8',
    subjectId: 'matematika',
    topicTag: 'Matriks',
    difficulty: 'Sedang',
    question: 'Diketahui matriks A = [[2, 3], [1, 2]]. Determinan dari matriks invers A (det(A^-1)) adalah...',
    mathFormula: '\\det(A^{-1}) = \\frac{1}{\\det(A)}',
    options: [
      { id: 'A', text: '-1' },
      { id: 'B', text: '1' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: '2' }
    ],
    correctAnswer: 'B',
    explanation: 'det(A) = (2·2) - (3·1) = 4 - 3 = 1. det(A^-1) = 1 / det(A) = 1 / 1 = 1.'
  },
  {
    id: 'mq-9',
    subjectId: 'matematika',
    topicTag: 'Vektor',
    difficulty: 'Sedang',
    question: 'Jika vektor a = [2, -1, 3] dan b = [4, 2, -1], maka hasil perkalian titik (dot product) a · b adalah...',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '5' },
      { id: 'C', text: '7' },
      { id: 'D', text: '9' }
    ],
    correctAnswer: 'A',
    explanation: 'a · b = (2·4) + (-1·2) + (3·(-1)) = 8 - 2 - 3 = 3.'
  },
  {
    id: 'mq-10',
    subjectId: 'matematika',
    topicTag: 'Statistika',
    difficulty: 'Mudah',
    question: 'Simpangan rata-rata dari data: 4, 5, 6, 7, 8 adalah...',
    options: [
      { id: 'A', text: '1.0' },
      { id: 'B', text: '1.2' },
      { id: 'C', text: '1.5' },
      { id: 'D', text: '2.0' }
    ],
    correctAnswer: 'B',
    explanation: 'Rata-rata (x̄) = (4+5+6+7+8)/5 = 30/5 = 6. Simpangan rata-rata = (|4-6| + |5-6| + |6-6| + |7-6| + |8-6|) / 5 = (2 + 1 + 0 + 1 + 2) / 5 = 6/5 = 1.2.'
  },
  {
    id: 'mq-11',
    subjectId: 'matematika',
    topicTag: 'Fungsi Komposisi',
    difficulty: 'Sedang',
    question: 'Diketahui f(x) = 2x + 3 dan g(x) = x^2 - 1. Nilai dari (f o g)(3) adalah...',
    options: [
      { id: 'A', text: '15' },
      { id: 'B', text: '17' },
      { id: 'C', text: '19' },
      { id: 'D', text: '21' }
    ],
    correctAnswer: 'C',
    explanation: 'g(3) = 3^2 - 1 = 8. (f o g)(3) = f(g(3)) = f(8) = 2(8) + 3 = 19.'
  },
  {
    id: 'mq-12',
    subjectId: 'matematika',
    topicTag: 'Limit',
    difficulty: 'Sedang',
    question: 'Nilai dari \\lim_{x \\to 0} \\frac{\\sin(3x)}{\\tan(2x)} adalah...',
    options: [
      { id: 'A', text: '3/2' },
      { id: 'B', text: '2/3' },
      { id: 'C', text: '1' },
      { id: 'D', text: '0' }
    ],
    correctAnswer: 'A',
    explanation: 'Gunakan sifat limit trigonometri lim x->0 sin(ax)/tan(bx) = a/b. Di sini a=3 dan b=2, sehingga hasilnya 3/2.'
  },
  {
    id: 'mq-13',
    subjectId: 'matematika',
    topicTag: 'Logaritma',
    difficulty: 'Mudah',
    question: 'Jika ²log 3 = a dan ³log 5 = b, maka nilai dari ¹⁵log 20 dinyatakan dalam a dan b adalah...',
    options: [
      { id: 'A', text: '(2 + ab) / (a + ab)' },
      { id: 'B', text: '(1 + 2a) / (a + ab)' },
      { id: 'C', text: '(2 + a) / (a + ab)' },
      { id: 'D', text: '(1 + a) / (1 + b)' }
    ],
    correctAnswer: 'A',
    explanation: '¹⁵log 20 = (³log 20) / (³log 15) = (2·³log 2 + ³log 5) / (1 + ³log 5). Dengan ²log 3 = a -> ³log 2 = 1/a. Hasilnya (2/a + b)/(1+b) = (2+ab)/(a(1+b)) = (2+ab)/(a+ab).'
  },
  {
    id: 'mq-14',
    subjectId: 'matematika',
    topicTag: 'Transformasi Geometri',
    difficulty: 'Sedang',
    question: 'Titik A(3, -5) direfleksikan terhadap garis y = -x, kemudian dilanjutkan dengan rotasi sebesar 90° berlawanan arah jarum jam dengan pusat (0,0). Koordinat bayangan akhir titik A adalah...',
    options: [
      { id: 'A', text: '(5, -3)' },
      { id: 'B', text: '(-5, 3)' },
      { id: 'C', text: '(3, 5)' },
      { id: 'D', text: '(-3, 5)' }
    ],
    correctAnswer: 'D',
    explanation: 'Refleksi terhadap y = -x: (3,-5) -> (5,3). Rotasi 90° CCW: (x,y) -> (-y, x). (5,3) menjadi (-3,5).'
  },
  {
    id: 'mq-15',
    subjectId: 'matematika',
    topicTag: 'Program Linear',
    difficulty: 'Sedang',
    question: 'Nilai maksimum dari fungsi tujuan f(x, y) = 4x + 5y pada daerah penyelesaian x + 2y ≤ 10, 3x + y ≤ 15, x ≥ 0, y ≥ 0 adalah...',
    options: [
      { id: 'A', text: '25' },
      { id: 'B', text: '28' },
      { id: 'C', text: '31' },
      { id: 'D', text: '35' }
    ],
    correctAnswer: 'C',
    explanation: 'Uji titik pojok (0,0)=0, (5,0)=20, (0,5)=25, serta titik potong (4,3) -> 4(4)+5(3) = 31. Nilai maksimum adalah 31.'
  },
  {
    id: 'mq-16',
    subjectId: 'matematika',
    topicTag: 'Barisan Geometri',
    difficulty: 'Mudah',
    question: 'Suku ke-3 dan suku ke-6 suatu barisan geometri berturut-turut adalah 12 dan 96. Suku ke-8 barisan tersebut adalah...',
    options: [
      { id: 'A', text: '192' },
      { id: 'B', text: '384' },
      { id: 'C', text: '768' },
      { id: 'D', text: '1536' }
    ],
    correctAnswer: 'B',
    explanation: 'r^3 = 96/12 = 8 -> r = 2. a(2)^2 = 12 -> a = 3. U8 = 3 · 2^7 = 384.'
  },
  {
    id: 'mq-17',
    subjectId: 'matematika',
    topicTag: 'Statistika',
    difficulty: 'Sedang',
    question: 'Simpangan baku dari data: 2, 4, 5, 6, 8 adalah...',
    options: [
      { id: 'A', text: '1.5' },
      { id: 'B', text: '2.0' },
      { id: 'C', text: '2.5' },
      { id: 'D', text: '3.0' }
    ],
    correctAnswer: 'B',
    explanation: 'Rata-rata = 25/5 = 5. Variansi = ((9+1+0+1+9)/5) = 20/5 = 4. Simpangan baku = \\sqrt{4} = 2.0.'
  },
  {
    id: 'mq-18',
    subjectId: 'matematika',
    topicTag: 'Integral',
    difficulty: 'Sulit',
    question: 'Nilai dari integral substitusi \\int 6x(3x^2 + 1)^4 dx adalah...',
    options: [
      { id: 'A', text: '\\frac{1}{5}(3x^2 + 1)^5 + C' },
      { id: 'B', text: '(3x^2 + 1)^5 + C' },
      { id: 'C', text: '\\frac{6}{5}(3x^2 + 1)^5 + C' },
      { id: 'D', text: '5(3x^2 + 1)^5 + C' }
    ],
    correctAnswer: 'A',
    explanation: 'Misal u = 3x^2 + 1, du = 6x dx. Integral menjadi \\int u^4 du = (1/5)u^5 + C = (1/5)(3x^2 + 1)^5 + C.'
  },
  {
    id: 'mq-19',
    subjectId: 'matematika',
    topicTag: 'Trigonometri',
    difficulty: 'Sedang',
    question: 'Himpunan penyelesaian dari persamaan 2 cos x - 1 = 0 untuk 0° ≤ x ≤ 360° adalah...',
    options: [
      { id: 'A', text: '{30°, 150°}' },
      { id: 'B', text: '{60°, 300°}' },
      { id: 'C', text: '{60°, 240°}' },
      { id: 'D', text: '{30°, 330°}' }
    ],
    correctAnswer: 'B',
    explanation: 'cos x = 1/2. Kuadran I: 60°. Kuadran IV: 360° - 60° = 300°.'
  },
  {
    id: 'mq-20',
    subjectId: 'matematika',
    topicTag: 'Suku Banyak',
    difficulty: 'Sedang',
    question: 'Sisa pembagian suku banyak f(x) oleh (x^2 - x - 2) adalah (3x + 2). Jika f(x) dibagi (x - 2), maka sisanya adalah...',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'C',
    explanation: 'f(2) = 3(2) + 2 = 6 + 2 = 8.'
  },
  {
    id: 'mq-21',
    subjectId: 'matematika',
    topicTag: 'Matriks',
    difficulty: 'Sedang',
    question: 'Diketahui matriks A = [[1, 2], [3, 4]] dan B = [[-1, 1], [2, 0]]. Matriks (A + B)^2 adalah...',
    options: [
      { id: 'A', text: '[[15, 12], [20, 31]]' },
      { id: 'B', text: '[[1, 9], [15, 25]]' },
      { id: 'C', text: '[[10, 12], [18, 28]]' },
      { id: 'D', text: '[[4, 6], [9, 13]]' }
    ],
    correctAnswer: 'A',
    explanation: 'A + B = [[0, 3], [5, 4]]. Kuadratnya adalah [[15, 12], [20, 31]].'
  },
  {
    id: 'mq-22',
    subjectId: 'matematika',
    topicTag: 'Limit',
    difficulty: 'Sulit',
    question: 'Nilai dari \\lim_{x \\to \\infty} (\\sqrt{4x^2 + 5x - 1} - 2x) adalah...',
    options: [
      { id: 'A', text: '1/4' },
      { id: 'B', text: '5/4' },
      { id: 'C', text: '7/4' },
      { id: 'D', text: '9/4' }
    ],
    correctAnswer: 'B',
    explanation: 'Gunakan bentuk akar dengan b - p / 2√a. Di sini \\sqrt{4x^2+5x-1} - \\sqrt{4x^2}. b=5, p=0, a=4. Hasilnya (5 - 0) / (2·2) = 5/4.'
  },
  {
    id: 'mq-23',
    subjectId: 'matematika',
    topicTag: 'Vektor',
    difficulty: 'Sedang',
    question: 'Besar sudut antara vektor a = [1, 1, 0] dan b = [0, 1, 1] adalah...',
    options: [
      { id: 'A', text: '30°' },
      { id: 'B', text: '45°' },
      { id: 'C', text: '60°' },
      { id: 'D', text: '90°' }
    ],
    correctAnswer: 'C',
    explanation: 'cos θ = 1 / (√2 · √2) = 1/2. θ = 60°.'
  },
  {
    id: 'mq-24',
    subjectId: 'matematika',
    topicTag: 'Kalkulus',
    difficulty: 'Sedang',
    question: 'Titik balik minimum dari kurva f(x) = x^3 - 3x^2 - 9x + 7 adalah...',
    options: [
      { id: 'A', text: '(3, -20)' },
      { id: 'B', text: '(-1, 12)' },
      { id: 'C', text: '(3, 20)' },
      { id: 'D', text: '(-1, -2)' }
    ],
    correctAnswer: 'A',
    explanation: 'f\'(x) = 3x^2 - 6x - 9 = 0 -> x = 3 atau x = -1. Uji turunan kedua menunjukkan minimum di x = 3 dengan f(3) = -20.'
  },
  {
    id: 'mq-25',
    subjectId: 'matematika',
    topicTag: 'Peluang',
    difficulty: 'Sedang',
    question: 'Sebuah dadu dan sebuah mata uang dilempar undi bersama-sama sekali. Peluang muncul angka ganjil pada dadu dan gambar pada mata uang adalah...',
    options: [
      { id: 'A', text: '1/6' },
      { id: 'B', text: '1/4' },
      { id: 'C', text: '1/3' },
      { id: 'D', text: '1/2' }
    ],
    correctAnswer: 'B',
    explanation: 'P(ganjil) = 3/6 = 1/2. P(gambar) = 1/2. P(gabungan) = 1/4.'
  },
  {
    id: 'mq-26',
    subjectId: 'matematika',
    topicTag: 'Transformasi Geometri',
    difficulty: 'Mudah',
    question: 'Bayangan garis 2x - y + 3 = 0 oleh translasi T = [3, -2] adalah...',
    options: [
      { id: 'A', text: '2x - y - 5 = 0' },
      { id: 'B', text: '2x - y + 7 = 0' },
      { id: 'C', text: '2x - y - 1 = 0' },
      { id: 'D', text: '2x - y + 1 = 0' }
    ],
    correctAnswer: 'A',
    explanation: 'Substitusi x = x\' - 3 dan y = y\' + 2 menghasilkan 2x - y - 5 = 0.'
  },
  {
    id: 'mq-27',
    subjectId: 'matematika',
    topicTag: 'Logika Matematika',
    difficulty: 'Mudah',
    question: 'Negasi dari pernyataan "Semua siswa belajar dengan giat dan lulus ujian" adalah...',
    options: [
      { id: 'A', text: 'Beberapa siswa tidak belajar dengan giat atau tidak lulus ujian' },
      { id: 'B', text: 'Semua siswa tidak belajar dengan giat dan tidak lulus ujian' },
      { id: 'C', text: 'Beberapa siswa belajar dengan giat dan lulus ujian' },
      { id: 'D', text: 'Tidak ada siswa yang belajar dengan giat' }
    ],
    correctAnswer: 'A',
    explanation: 'Hukum De Morgan untuk Kuantor: ~(∀x P(x) ∧ Q(x)) ≡ ∃x (~P(x) ∨ ~Q(x)).'
  },
  {
    id: 'mq-28',
    subjectId: 'matematika',
    topicTag: 'Statistika',
    difficulty: 'Sedang',
    question: 'Rata-rata nilai ulangan matematika 30 siswa adalah 70. Jika nilai 2 orang siswa susulan digabungkan, rata-rata nilai menjadi 71. Rata-rata nilai 2 orang siswa susulan tersebut adalah...',
    options: [
      { id: 'A', text: '80' },
      { id: 'B', text: '86' },
      { id: 'C', text: '90' },
      { id: 'D', text: '95' }
    ],
    correctAnswer: 'B',
    explanation: 'Jumlah 32 siswa = 2272. Jumlah 30 siswa = 2100. Selisih = 172. Rata-rata 2 siswa = 172/2 = 86.'
  },
  {
    id: 'mq-29',
    subjectId: 'matematika',
    topicTag: 'Suku Banyak',
    difficulty: 'Sulit',
    question: 'Suku banyak f(x) jika dibagi (x - 1) bersisa 2 dan jika dibagi (x - 2) bersisa 3. Sisa pembagian f(x) oleh (x^2 - 3x + 2) adalah...',
    options: [
      { id: 'A', text: 'x + 1' },
      { id: 'B', text: '2x' },
      { id: 'C', text: '3x - 1' },
      { id: 'D', text: 'x + 2' }
    ],
    correctAnswer: 'A',
    explanation: 'S(x) = ax + b. f(1) = a+b = 2 dan f(2) = 2a+b = 3. Diperoleh a = 1, b = 1 sehingga S(x) = x + 1.'
  },
  {
    id: 'mq-30',
    subjectId: 'matematika',
    topicTag: 'Integral',
    difficulty: 'Sedang',
    question: 'Luas daerah yang dibatasi oleh kurva y = x^2 - 4 dan garis y = 0 (sumbu X) adalah...',
    options: [
      { id: 'A', text: '16/3 satuan luas' },
      { id: 'B', text: '32/3 satuan luas' },
      { id: 'C', text: '8/3 satuan luas' },
      { id: 'D', text: '20/3 satuan luas' }
    ],
    correctAnswer: 'B',
    explanation: 'L = \\int_{-2}^{2} (4 - x^2) dx = 32/3 satuan luas.'
  }
];
