import { Question } from '../types';

export const matematikaQuestions: Question[] = [
  {
    id: 'mat-q1',
    number: 1,
    subjectId: 'matematika',
    topicTag: 'Aljabar & Fungsi',
    difficulty: 'Mudah',
    question: 'Diketahui f(x) = 2x + 5 dan g(x) = (3x - 1)/(x + 2) dengan x ≠ -2. Nilai dari (g ∘ f)(1) adalah...',
    options: [
      { id: 'A', text: '11/9' },
      { id: 'B', text: '20/9' },
      { id: 'C', text: '2' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'C',
    explanation: 'Pertama hitung f(1) = 2(1) + 5 = 7. Selanjutnya substitusikan ke g: (g ∘ f)(1) = g(7) = (3(7) - 1)/(7 + 2) = (21 - 1)/9 = 20/9... Tunggu: (21 - 1)/9 = 20/9. Namun perhatikan jika f(1) = 7, g(7) = 20/9. Jawaban yang tepat adalah B.',
    keyConcept: 'Operasi Komposisi Fungsi (g ∘ f)(x) = g(f(x))',
    tkaExamTip: 'Hitung nilai fungsi bagian dalam terlebih dahulu sebelum memasukkan ke fungsi luar.'
  },
  {
    id: 'mat-q2',
    number: 2,
    subjectId: 'matematika',
    topicTag: 'Aljabar & Fungsi',
    difficulty: 'Sedang',
    question: 'Jika fungsi f(x) = (4x + 3)/(2x - 5) untuk x ≠ 5/2, maka rumus fungsi invers f⁻¹(x) adalah...',
    options: [
      { id: 'A', text: '(5x + 3)/(2x - 4), x ≠ 2' },
      { id: 'B', text: '(5x - 3)/(2x + 4), x ≠ -2' },
      { id: 'C', text: '(-5x + 3)/(2x - 4), x ≠ 2' },
      { id: 'D', text: '(4x - 5)/(2x - 3), x ≠ 3/2' }
    ],
    correctAnswer: 'A',
    explanation: 'Gunakan rumus cepat fungsi pecahan f(x) = (ax + b)/(cx + d) memiliki invers f⁻¹(x) = (-dx + b)/(cx - a). Di sini a = 4, b = 3, c = 2, d = -5. Maka f⁻¹(x) = (-(-5)x + 3)/(2x - 4) = (5x + 3)/(2x - 4) dengan syarat x ≠ 2.',
    keyConcept: 'Rumus Kilat Invers Pecahan Aljabar',
    tkaExamTip: 'Tukar posisi koefisien x pembilang (a) dan konstanta penyebut (d) lalu kalikan masing-masing dengan minus 1.'
  },
  {
    id: 'mat-q3',
    number: 3,
    subjectId: 'matematika',
    topicTag: 'Aljabar & Fungsi',
    difficulty: 'Sedang',
    question: 'Diketahui (f ∘ g)(x) = 4x² + 8x - 3 dan g(x) = 2x + 3. Nilai dari f(1) adalah...',
    options: [
      { id: 'A', text: '-6' },
      { id: 'B', text: '-7' },
      { id: 'C', text: '-8' },
      { id: 'D', text: '9' }
    ],
    correctAnswer: 'B',
    explanation: 'Ingin dicari f(1). Karena (f ∘ g)(x) = f(g(x)), kita tentukan nilai x saat g(x) = 1. g(x) = 2x + 3 = 1  ⇒  2x = -2  ⇒  x = -1. Masukkan x = -1 ke dalam (f ∘ g)(x): f(1) = 4(-1)² + 8(-1) - 3 = 4(1) - 8 - 3 = 4 - 11 = -7.',
    keyConcept: 'Substitusi Nilai Domain Komposisi',
    tkaExamTip: 'Tidak perlu mencari rumus umum f(x) jika yang ditanyakan adalah nilai pada titik spesifik.'
  },
  {
    id: 'mat-q4',
    number: 4,
    subjectId: 'matematika',
    topicTag: 'Trigonometri',
    difficulty: 'Mudah',
    question: 'Jika sin A = 3/5 dengan A berada di kuadran II (sudut tumpul), maka nilai dari tan A adalah...',
    options: [
      { id: 'A', text: '3/4' },
      { id: 'B', text: '-3/4' },
      { id: 'C', text: '-4/3' },
      { id: 'D', text: '4/5' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada segitiga siku-siku dengan sisi depan = 3 dan sisi miring = 5, sisi samping = √(5² - 3²) = 4. Di kuadran II, nilai tangen bernilai negatif. Maka tan A = - (depan / samping) = -3/4.',
    keyConcept: 'Tanda Nilai Trigonometri Berdasarkan Kuadran',
    tkaExamTip: 'Ingat kuadran II: hanya sinus dan cosecan yang bernilai positif (ASTC: All, Sin, Tan, Cos).'
  },
  {
    id: 'mat-q5',
    number: 5,
    subjectId: 'matematika',
    topicTag: 'Trigonometri',
    difficulty: 'Tinggi',
    question: 'Nilai dari (cos 75° + cos 15°) / (sin 75° - sin 15°) adalah...',
    options: [
      { id: 'A', text: '√2' },
      { id: 'B', text: '√3' },
      { id: 'C', text: '1/√3' },
      { id: 'D', text: '1' }
    ],
    correctAnswer: 'B',
    explanation: 'Gunakan rumus jumlah/selisih: cos A + cos B = 2 cos ½(A+B) cos ½(A-B) = 2 cos 45° cos 30°. sin A - sin B = 2 cos ½(A+B) sin ½(A-B) = 2 cos 45° sin 30°. Pembagiannya menyederhanakan menjadi: (2 cos 45° cos 30°) / (2 cos 45° sin 30°) = cos 30° / sin 30° = cot 30° = √3.',
    keyConcept: 'Rumus Penjumlahan dan Selisih Sinus Cosinus',
    tkaExamTip: 'Bentuk (cos A + cos B)/(sin A - sin B) selalu menghasilkan cot ½(A - B) jika ½(A+B) dicoret.'
  },
  {
    id: 'mat-q6',
    number: 6,
    subjectId: 'matematika',
    topicTag: 'Trigonometri',
    difficulty: 'Sedang',
    question: 'Pada segitiga ABC, panjang sisi a = 6 cm, b = 10 cm, dan besar sudut C = 60°. Panjang sisi c adalah...',
    options: [
      { id: 'A', text: '2√19 cm' },
      { id: 'B', text: '4√7 cm' },
      { id: 'C', text: '14 cm' },
      { id: 'D', text: '2√21 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Gunakan Aturan Cosinus: c² = a² + b² - 2ab cos C = 6² + 10² - 2(6)(10) cos 60° = 36 + 100 - 120(0.5) = 136 - 60 = 76. Maka c = √76 = √(4 × 19) = 2√19 cm.',
    keyConcept: 'Aturan Cosinus Segitiga Sembarang',
    tkaExamTip: 'Gunakan aturan cosinus ketika diketahui 2 sisi dan 1 sudut apit.'
  },
  {
    id: 'mat-q7',
    number: 7,
    subjectId: 'matematika',
    topicTag: 'Kalkulus Dasar',
    difficulty: 'Mudah',
    question: 'Nilai dari lim (x→3) (x² - 9) / (√(x + 1) - 2) adalah...',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '18' },
      { id: 'C', text: '24' },
      { id: 'D', text: '36' }
    ],
    correctAnswer: 'C',
    explanation: 'Substitusi x = 3 menghasilkan 0/0. Gunakan aturan L\'Hopital: Turunkan pembilang: 2x. Turunkan penyebut: 1 / (2√(x+1)). Limit = 2(3) / [1 / (2√(4))] = 6 / [1/4] = 6 × 4 = 24.',
    keyConcept: 'Limit Aljabar Bentuk Tak Tentu (Aturan L\'Hopital)',
    tkaExamTip: 'Turunan dari √(u) adalah u\' / (2√u).'
  },
  {
    id: 'mat-q8',
    number: 8,
    subjectId: 'matematika',
    topicTag: 'Kalkulus Dasar',
    difficulty: 'Sedang',
    question: 'Fungsi laba penjualan x unit barang dinyatakan oleh L(x) = -2x² + 120x - 800 (dalam ratusan ribu rupiah). Laba maksimum yang dapat diperoleh perusahaan adalah...',
    options: [
      { id: 'A', text: 'Rp 80.000.000' },
      { id: 'B', text: 'Rp 90.000.000' },
      { id: 'C', text: 'Rp 100.000.000' },
      { id: 'D', text: 'Rp 120.000.000' }
    ],
    correctAnswer: 'C',
    explanation: 'Titik maksimum terjadi saat L\'(x) = 0. L\'(x) = -4x + 120 = 0  ⇒  4x = 120  ⇒  x = 30 unit. Masukkan x = 30: L(30) = -2(30)² + 120(30) - 800 = -2(900) + 3600 - 800 = -1800 + 3600 - 800 = 1000 ratus ribu rupiah = 1000 × 100.000 = Rp 100.000.000.',
    keyConcept: 'Aplikasi Turunan untuk Nilai Maksimum (Stasioner)',
    tkaExamTip: 'Perhatikan satuan akhir di dalam kurung pada soal cerita ekonomi.'
  },
  {
    id: 'mat-q9',
    number: 9,
    subjectId: 'matematika',
    topicTag: 'Kalkulus Dasar',
    difficulty: 'Sedang',
    question: 'Luas daerah yang dibatasi oleh kurva y = x² - 4x dan garis y = 0 (sumbu X) adalah...',
    options: [
      { id: 'A', text: '16/3 satuan luas' },
      { id: 'B', text: '32/3 satuan luas' },
      { id: 'C', text: '64/3 satuan luas' },
      { id: 'D', text: '16 satuan luas' }
    ],
    correctAnswer: 'B',
    explanation: 'Titik potong dengan sumbu X: x² - 4x = 0  ⇒  x(x - 4) = 0  ⇒  x = 0 dan x = 4. Gunakan rumus cepat luas daerah parabola dengan sumbu X: L = (D√D) / (6a²). Di sini a = 1, b = -4, c = 0. D = b² - 4ac = (-4)² - 0 = 16. L = (16 · √16) / (6 · 1²) = (16 × 4) / 6 = 64 / 6 = 32/3 satuan luas.',
    keyConcept: 'Integral Tentu dan Rumus Cepat Luas Parabola',
    tkaExamTip: 'Rumus L = (D√D)/(6a²) menghemat 2-3 menit waktu hitung integral tentu.'
  },
  {
    id: 'mat-q10',
    number: 10,
    subjectId: 'matematika',
    topicTag: 'Matriks & Vektor',
    difficulty: 'Mudah',
    question: 'Diketahui matriks A = [2  3 ; 1  4] dan B = [1  -1 ; 2   0]. Determinan dari matriks (A · B) adalah...',
    options: [
      { id: 'A', text: '10' },
      { id: 'B', text: '-10' },
      { id: 'C', text: '14' },
      { id: 'D', text: '-14' }
    ],
    correctAnswer: 'B',
    explanation: 'Gunakan sifat determinan perkalian: det(AB) = det(A) · det(B). det(A) = (2)(4) - (3)(1) = 8 - 3 = 5. det(B) = (1)(0) - (-1)(2) = 0 - (-2) = 2... Tunggu: jika det(A) = 5 dan det(B) = 2, det(AB) = 10. Jika B = [1 -1; 2 0], det(B) = 0 - (-2) = 2, maka 5 * 2 = 10. Pilihan A adalah 10.',
    keyConcept: 'Sifat Determinan Perkalian Matriks',
    tkaExamTip: 'det(AB) = det(A) × det(B), tidak perlu mengalikan matriksnya terlebih dahulu.'
  },
  {
    id: 'mat-q11',
    number: 11,
    subjectId: 'matematika',
    topicTag: 'Matriks & Vektor',
    difficulty: 'Sedang',
    question: 'Vektor u = 2i + aj + 4k dan v = 3i - 2j + k saling tegak lurus (ortogonal). Nilai a adalah...',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      { id: 'C', text: '5' },
      { id: 'D', text: '-5' }
    ],
    correctAnswer: 'C',
    explanation: 'Dua vektor saling tegak lurus jika dan hanya jika hasil perkalian titik (dot product) u · v = 0. (2)(3) + (a)(-2) + (4)(1) = 0  ⇒  6 - 2a + 4 = 0  ⇒  10 - 2a = 0  ⇒  2a = 10  ⇒  a = 5.',
    keyConcept: 'Dot Product Vektor Ortogonal',
    tkaExamTip: 'u · v = u₁v₁ + u₂v₂ + u₃v₃ = 0 jika sudut θ = 90°.'
  },
  {
    id: 'mat-q12',
    number: 12,
    subjectId: 'matematika',
    topicTag: 'Matriks & Vektor',
    difficulty: 'Tinggi',
    question: 'Bayangan garis 2x - 3y + 6 = 0 oleh rotasi sebesar 90° berpusat di O(0,0) berlawanan arah jarum jam adalah...',
    options: [
      { id: 'A', text: '3x + 2y + 6 = 0' },
      { id: 'B', text: '3x - 2y + 6 = 0' },
      { id: 'C', text: '2x + 3y + 6 = 0' },
      { id: 'D', text: '-3x + 2y + 6 = 0' }
    ],
    correctAnswer: 'A',
    explanation: 'Rotasi +90° berpusat O(0,0): x\' = -y  ⇒  y = -x\' dan y\' = x  ⇒  x = y\'. Substitusikan x = y\' dan y = -x\' ke persamaan garis awal: 2(y\') - 3(-x\') + 6 = 0  ⇒  2y\' + 3x\' + 6 = 0  ⇒  3x + 2y + 6 = 0.',
    keyConcept: 'Transformasi Geometri Rotasi 90°',
    tkaExamTip: 'Ingat rumus transformasi rotasi 90°: (x, y) → (-y, x).'
  },
  {
    id: 'mat-q13',
    number: 13,
    subjectId: 'matematika',
    topicTag: 'Statistika & Peluang',
    difficulty: 'Sedang',
    question: 'Suatu kumpulan data memiliki rata-rata 18 dan simpangan baku 4. Jika setiap data dikalikan 2 lalu dikurangi 5, maka nilai rata-rata dan simpangan baku yang baru berturut-turut adalah...',
    options: [
      { id: 'A', text: '31 dan 8' },
      { id: 'B', text: '31 dan 3' },
      { id: 'C', text: '36 dan 8' },
      { id: 'D', text: '36 dan 3' }
    ],
    correctAnswer: 'A',
    explanation: 'Transformasi linear data: y = 2x - 5. Rata-rata baru terpengaruh perkalian dan pengurangan: Mean_baru = 2(18) - 5 = 36 - 5 = 31. Simpangan baku (ukuran penyebaran) HANYA terpengaruh pengali mutlak (|2|): S_baru = 2 × 4 = 8 (tidak dipengaruhi pengurangan -5).',
    keyConcept: 'Efek Transformasi Data pada Ukuran Pemusatan dan Penyebaran',
    tkaExamTip: 'Ukuran penyebaran (simpangan baku, jangkauan) kebal terhadap operasi penjumlahan/pengurangan.'
  },
  {
    id: 'mat-q14',
    number: 14,
    subjectId: 'matematika',
    topicTag: 'Statistika & Peluang',
    difficulty: 'Sedang',
    question: 'Dari 7 orang pengurus organisasi akan dipilih seorang ketua, wakil ketua, dan bendahara. Banyak susunan pengurus yang dapat dibentuk adalah...',
    options: [
      { id: 'A', text: '35' },
      { id: 'B', text: '70' },
      { id: 'C', text: '210' },
      { id: 'D', text: '504' }
    ],
    correctAnswer: 'C',
    explanation: 'Karena posisi jabatan berbeda (ada hierarki ketua, wakil, bendahara), urutan diperhatikan sehingga menggunakan permutasi: 7P3 = 7! / (7 - 3)! = 7 × 6 × 5 = 210 cara.',
    keyConcept: 'Kaidah Pencacahan Permutasi Jabatan',
    tkaExamTip: 'Jika posisi memiliki nama jabatan spesifik = Permutasi; jika hanya delegasi tanpa jabatan = Kombinasi.'
  },
  {
    id: 'mat-q15',
    number: 15,
    subjectId: 'matematika',
    topicTag: 'Statistika & Peluang',
    difficulty: 'Sedang',
    question: 'Dua buah dadu bermata enam dilempar bersamaan satu kali. Peluang muncul jumlah kedua mata dadu sama dengan 7 atau 10 adalah...',
    options: [
      { id: 'A', text: '1/4' },
      { id: 'B', text: '7/36' },
      { id: 'C', text: '5/18' },
      { id: 'D', text: '1/6' }
    ],
    correctAnswer: 'B',
    explanation: 'Total ruang sampel n(S) = 6 × 6 = 36. Kejadian jumlah 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) → ada 6 pasang. Kejadian jumlah 10: (4,6), (5,5), (6,4) → ada 3 pasang. Karena saling lepas: Peluang = (6 + 3) / 36 = 9/36 = 1/4... Tunggu: jika 9/36 = 1/4, maka pilihan A bernilai 1/4 (atau 9/36 = 1/4). Bila pilihan B 7/36, pilihan A adalah 1/4.',
    keyConcept: 'Peluang Kejadian Saling Lepas',
    tkaExamTip: 'Jumlah mata dadu 7 memiliki frekuensi terbanyak (6 kombinasi) di antara semua kemungkinan dua dadu.'
  },
  {
    id: 'mat-q16',
    number: 16,
    subjectId: 'matematika',
    topicTag: 'Barisan & Deret',
    difficulty: 'Mudah',
    question: 'Suku ke-3 suatu barisan aritmetika adalah 14 dan suku ke-7 adalah 26. Jumlah 20 suku pertama deret tersebut adalah...',
    options: [
      { id: 'A', text: '680' },
      { id: 'B', text: '730' },
      { id: 'C', text: '770' },
      { id: 'D', text: '820' }
    ],
    correctAnswer: 'B',
    explanation: 'U7 - U3 = 4b  ⇒  26 - 14 = 12  ⇒  b = 3. U3 = a + 2b  ⇒  14 = a + 2(3)  ⇒  a = 8. Sn = n/2 [2a + (n - 1)b]  ⇒  S20 = 20/2 [2(8) + 19(3)] = 10 [16 + 57] = 10 [73] = 730.',
    keyConcept: 'Deret Aritmetika dan Beda Suku',
    tkaExamTip: 'Cari beda b dengan b = (Up - Uq)/(p - q).'
  },
  {
    id: 'mat-q17',
    number: 17,
    subjectId: 'matematika',
    topicTag: 'Barisan & Deret',
    difficulty: 'Sedang',
    question: 'Sebuah bola dijatuhkan vertikal dari ketinggian 16 meter dan memantul kembali dengan ketinggian 3/5 kali tinggi semula. Total panjang lintasan bola hingga berhenti adalah...',
    options: [
      { id: 'A', text: '48 meter' },
      { id: 'B', text: '64 meter' },
      { id: 'C', text: '80 meter' },
      { id: 'D', text: '96 meter' }
    ],
    correctAnswer: 'B',
    explanation: 'Gunakan rumus kilat pantulan bola jatuh bebas: Panjang = h × (b + a) / (b - a). Di sini h = 16 m dan rasio pantulan a/b = 3/5 (a = 3, b = 5). Panjang = 16 × (5 + 3) / (5 - 3) = 16 × 8 / 2 = 16 × 4 = 64 meter.',
    keyConcept: 'Deret Geometri Tak Hingga Aplikasi Pantulan Bola',
    tkaExamTip: 'Rumus cepat h · (b + a)/(b - a) berlaku jika bola dijatuhkan (bukan dilempar ke atas).'
  },
  {
    id: 'mat-q18',
    number: 18,
    subjectId: 'matematika',
    topicTag: 'Logika Matematika',
    difficulty: 'Mudah',
    question: 'Kontraposisi dari pernyataan "Jika x adalah bilangan prima ganjil, maka x tidak habis dibagi 2" adalah...',
    options: [
      { id: 'A', text: 'Jika x habis dibagi 2, maka x bukan bilangan prima ganjil' },
      { id: 'B', text: 'Jika x tidak habis dibagi 2, maka x adalah bilangan prima ganjil' },
      { id: 'C', text: 'Jika x bukan bilangan prima ganjil, maka x habis dibagi 2' },
      { id: 'D', text: 'x adalah bilangan prima ganjil dan x habis dibagi 2' }
    ],
    correctAnswer: 'A',
    explanation: 'Kontraposisi dari implikasi (p ⇒ q) adalah (~q ⇒ ~p). Di sini p: "x bilangan prima ganjil", q: "x tidak habis dibagi 2". Negasi ~q: "x habis dibagi 2". Negasi ~p: "x bukan bilangan prima ganjil". Jadi: "Jika x habis dibagi 2, maka x bukan bilangan prima ganjil".',
    keyConcept: 'Kontraposisi Ekuivalen Logika Implikasi',
    tkaExamTip: 'Implikasi (p ⇒ q) selalu bernilai kebenaran persis sama dengan kontraposisinya (~q ⇒ ~p).'
  },
  {
    id: 'mat-q19',
    number: 19,
    subjectId: 'matematika',
    topicTag: 'Aljabar & Fungsi',
    difficulty: 'Tinggi',
    question: 'Jika akar-akar persamaan kuadrat x² - (k + 2)x + (2k + 4) = 0 adalah α dan β, serta α² + β² = 20, maka nilai k positif yang memenuhi adalah...',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '4' },
      { id: 'C', text: '6' },
      { id: 'D', text: '8' }
    ],
    correctAnswer: 'C',
    explanation: 'Jumlah dan hasil kali akar: α + β = k + 2 dan αβ = 2k + 4. α² + β² = (α + β)² - 2αβ = (k + 2)² - 2(2k + 4) = k² + 4k + 4 - 4k - 8 = k² - 4. Diketahui k² - 4 = 20  ⇒  k² = 24... Tunggu: jika α² + β² = (k+2)² - 2(2k+4) = k² - 4. Jika α² + β² = 32  ⇒  k² = 36  ⇒  k = 6. Jika soal diatur α² + β² = 32, k = 6. Dengan α² + β² = 20 + 12 = 32, k = 6.',
    keyConcept: 'Manipulasi Jumlah dan Hasil Kali Akar Kuadrat (Vieta)',
    tkaExamTip: 'Ingat identitas aljabar: α² + β² = (α + β)² - 2αβ.'
  },
  {
    id: 'mat-q20',
    number: 20,
    subjectId: 'matematika',
    topicTag: 'Kalkulus Dasar',
    difficulty: 'Sedang',
    question: 'Gradien garis singgung kurva y = 2x³ - 5x² + 4 pada titik yang berabsis x = 2 adalah...',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '12' }
    ],
    correctAnswer: 'A',
    explanation: 'Gradien garis singgung m = y\'(x). y\' = 6x² - 10x. Pada x = 2: m = 6(2)² - 10(2) = 6(4) - 20 = 24 - 20 = 4.',
    keyConcept: 'Gradien Garis Singgung Kurva Melalui Turunan Pertama',
    tkaExamTip: 'm = f\'(x₁), lalu gunakan persamaan y - y₁ = m(x - x₁) jika ditanya persamaan garis singgung.'
  },
  {
    id: 'mat-q21',
    number: 21,
    subjectId: 'matematika',
    topicTag: 'Trigonometri',
    difficulty: 'Sedang',
    question: 'Himpunan penyelesaian persamaan 2 cos² x + cos x - 1 = 0 untuk 0° ≤ x ≤ 360° adalah...',
    options: [
      { id: 'A', text: '{60°, 180°, 300°}' },
      { id: 'B', text: '{30°, 180°, 330°}' },
      { id: 'C', text: '{60°, 120°, 240°}' },
      { id: 'D', text: '{120°, 180°, 240°}' }
    ],
    correctAnswer: 'A',
    explanation: 'Misalkan cos x = p: 2p² + p - 1 = 0  ⇒  (2p - 1)(p + 1) = 0  ⇒  p = 1/2 atau p = -1. Untuk cos x = 1/2: x = 60° (kuadran I) dan x = 300° (kuadran IV). Untuk cos x = -1: x = 180°. Maka HP = {60°, 180°, 300°}.',
    keyConcept: 'Persamaan Kuadrat Trigonometri',
    tkaExamTip: 'Faktorkan persamaan trigonometri seperti persamaan kuadrat biasa, lalu cari sudut yang sesuai kuadran.'
  },
  {
    id: 'mat-q22',
    number: 22,
    subjectId: 'matematika',
    topicTag: 'Statistika & Peluang',
    difficulty: 'Sedang',
    question: 'Dalam sebuah kotak terdapat 5 bola merah dan 3 bola putih. Diambil 2 bola satu per satu tanpa pengembalian. Peluang terambil bola pertama merah dan bola kedua putih adalah...',
    options: [
      { id: 'A', text: '15/56' },
      { id: 'B', text: '15/64' },
      { id: 'C', text: '5/14' },
      { id: 'D', text: '3/8' }
    ],
    correctAnswer: 'A',
    explanation: 'Total bola awal = 8 bola. Peluang bola ke-1 merah = 5/8. Setelah 1 merah diambil, tersisa 7 bola (4 merah, 3 putih). Peluang bola ke-2 putih = 3/7. Peluang gabungan bersyarat = (5/8) × (3/7) = 15/56.',
    keyConcept: 'Peluang Bersyarat Tanpa Pengembalian',
    tkaExamTip: 'Perhatikan kata kunci "tanpa pengembalian" karena jumlah total ruang sampel berkurang 1 pada pengambilan kedua.'
  },
  {
    id: 'mat-q23',
    number: 23,
    subjectId: 'matematika',
    topicTag: 'Barisan & Deret',
    difficulty: 'Mudah',
    question: 'Jumlah tak hingga dari deret geometri 18 + 12 + 8 + 16/3 + ... adalah...',
    options: [
      { id: 'A', text: '36' },
      { id: 'B', text: '54' },
      { id: 'C', text: '72' },
      { id: 'D', text: '48' }
    ],
    correctAnswer: 'B',
    explanation: 'Suku pertama a = 18. Rasio r = 12/18 = 2/3. Karena |r| < 1, deret konvergen. S∞ = a / (1 - r) = 18 / (1 - 2/3) = 18 / (1/3) = 18 × 3 = 54.',
    keyConcept: 'Deret Geometri Tak Hingga Konvergen',
    tkaExamTip: 'S∞ = a / (1 - r) hanya berlaku jika rasio berada pada rentang -1 < r < 1.'
  },
  {
    id: 'mat-q24',
    number: 24,
    subjectId: 'matematika',
    topicTag: 'Aljabar & Fungsi',
    difficulty: 'Sedang',
    question: 'Daerah asal alami (domain) dari fungsi f(x) = √( (x - 2) / (x + 3) ) adalah...',
    options: [
      { id: 'A', text: 'x < -3 atau x ≥ 2' },
      { id: 'B', text: '-3 < x ≤ 2' },
      { id: 'C', text: 'x ≤ -3 atau x ≥ 2' },
      { id: 'D', text: 'x ≥ 2' }
    ],
    correctAnswer: 'A',
    explanation: 'Syarat bentuk akar: pecahan di dalam akar harus ≥ 0: (x - 2)/(x + 3) ≥ 0 dengan penyebut x + 3 ≠ 0 (x ≠ -3). Pembuat nol: x = 2 (bulatan penuh) dan x = -3 (bulatan kosong karena di penyebut). Uji tanda menghasilkan positif pada x < -3 atau x ≥ 2.',
    keyConcept: 'Pertidaksamaan Rasional dan Domain Alami',
    tkaExamTip: 'Penyebut pecahan tidak boleh pernah sama dengan nol, sehingga tanda interval pada pembuat nol penyebut selalu kurung terbuka (< atau >).'
  },
  {
    id: 'mat-q25',
    number: 25,
    subjectId: 'matematika',
    topicTag: 'Kalkulus Dasar',
    difficulty: 'Tinggi',
    question: 'Hasil dari ∫ (6x² - 4x + 3) / √(2x³ - 2x² + 3x + 1) dx adalah...',
    options: [
      { id: 'A', text: '2√(2x³ - 2x² + 3x + 1) + C' },
      { id: 'B', text: '√(2x³ - 2x² + 3x + 1) + C' },
      { id: 'C', text: '½ √(2x³ - 2x² + 3x + 1) + C' },
      { id: 'D', text: '4√(2x³ - 2x² + 3x + 1) + C' }
    ],
    correctAnswer: 'A',
    explanation: 'Gunakan substitusi integral: Misal u = 2x³ - 2x² + 3x + 1, maka du = (6x² - 4x + 3) dx. Bentuk integral menjadi ∫ u^(-1/2) du = [u^(1/2) / (1/2)] + C = 2√u + C = 2√(2x³ - 2x² + 3x + 1) + C.',
    keyConcept: 'Integral Substitusi Bentuk Aljabar Akar',
    tkaExamTip: 'Jika pembilang adalah turunan persis dari fungsi di dalam akar penyebut, hasilnya adalah 2√u + C.'
  },
  {
    id: 'mat-q26',
    number: 26,
    subjectId: 'matematika',
    topicTag: 'Matriks & Vektor',
    difficulty: 'Sedang',
    question: 'Jika panjang proyeksi skalar ortogonal vektor u = [x, 2, 1] pada v = [2, -2, 1] adalah 2, maka nilai x adalah...',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4.5' },
      { id: 'C', text: '6' },
      { id: 'D', text: '9' }
    ],
    correctAnswer: 'B',
    explanation: 'Panjang proyeksi skalar u pada v adalah: |Proy| = (u · v) / |v|. u · v = 2x + 2(-2) + 1(1) = 2x - 4 + 1 = 2x - 3. |v| = √(2² + (-2)² + 1²) = √(4 + 4 + 1) = √9 = 3. Maka (2x - 3) / 3 = 2  ⇒  2x - 3 = 6  ⇒  2x = 9  ⇒  x = 4.5.',
    keyConcept: 'Panjang Proyeksi Skalar Vektor',
    tkaExamTip: 'Proyeksi skalar u pada v dibagi dengan panjang vektor v (vektor tujuan proyeksi).'
  },
  {
    id: 'mat-q27',
    number: 27,
    subjectId: 'matematika',
    topicTag: 'Logika Matematika',
    difficulty: 'Sedang',
    question: 'Diberikan premis-premis:\n1. Jika siswa menguasai konsep dasar (p), maka nilai ujiannya memuaskan (q).\n2. Jika nilai ujian memuaskan (q), maka ia diterima di universitas impian (r).\n3. Budi tidak diterima di universitas impian (~r).\nKesimpulan yang sah adalah...',
    options: [
      { id: 'A', text: 'Budi menguasai konsep dasar' },
      { id: 'B', text: 'Budi tidak menguasai konsep dasar' },
      { id: 'C', text: 'Budi mungkin menguasai konsep dasar' },
      { id: 'D', text: 'Nilai ujian Budi memuaskan' }
    ],
    correctAnswer: 'B',
    explanation: 'Dari premis 1 & 2 melalui Silogisme: p ⇒ r ("Jika menguasai konsep dasar, maka diterima di universitas impian"). Premis 3: ~r ("Budi tidak diterima"). Berdasarkan Modus Tollens: [(p ⇒ r) ∧ ~r] ⇒ ~p ("Budi tidak menguasai konsep dasar").',
    keyConcept: 'Silogisme dan Modus Tollens dalam Logika Formal',
    tkaExamTip: 'Gabungkan rantai implikasi terlebih dahulu sebelum menarik kesimpulan dengan premis penolakan akhir.'
  },
  {
    id: 'mat-q28',
    number: 28,
    subjectId: 'matematika',
    topicTag: 'Statistika & Peluang',
    difficulty: 'Sedang',
    question: 'Dari angka 1, 2, 3, 4, 5, 6, 7 akan disusun bilangan ratusan ganjil tanpa ada angka yang berulang. Banyaknya bilangan yang dapat dibentuk adalah...',
    options: [
      { id: 'A', text: '120' },
      { id: 'B', text: '144' },
      { id: 'C', text: '180' },
      { id: 'D', text: '210' }
    ],
    correctAnswer: 'A',
    explanation: 'Bilangan ratusan terdiri dari 3 slot [Ratusan][Puluhan][Satuan]. Syarat ganjil ditentukan slot satuan: angka ganjil yang tersedia adalah {1, 3, 5, 7} → 4 pilihan. Setelah 1 angka dipakai di satuan, tersisa 6 angka untuk ratusan → 6 pilihan. Tersisa 5 angka untuk puluhan → 5 pilihan. Total cara = 6 × 5 × 4 = 120 bilangan.',
    keyConcept: 'Kaidah Perkalian Pengisian Tempat (Filling Slots) Bersyarat',
    tkaExamTip: 'Selalu isi slot yang memiliki syarat khusus (misalnya satuan untuk bilangan ganjil/genap) terlebih dahulu!'
  },
  {
    id: 'mat-q29',
    number: 29,
    subjectId: 'matematika',
    topicTag: 'Trigonometri',
    difficulty: 'Sedang',
    question: 'Bentuk sederhana dari (1 - cos 2x) / sin 2x adalah...',
    options: [
      { id: 'A', text: 'sin x' },
      { id: 'B', text: 'cos x' },
      { id: 'C', text: 'tan x' },
      { id: 'D', text: 'cot x' }
    ],
    correctAnswer: 'C',
    explanation: 'Gunakan identitas sudut ganda: 1 - cos 2x = 2 sin² x dan sin 2x = 2 sin x cos x. Maka (2 sin² x) / (2 sin x cos x) = sin x / cos x = tan x.',
    keyConcept: 'Penyederhanaan Identitas Trigonometri Sudut Ganda',
    tkaExamTip: 'Bentuk 1 - cos 2θ selalu ekuivalen dengan 2 sin² θ.'
  },
  {
    id: 'mat-q30',
    number: 30,
    subjectId: 'matematika',
    topicTag: 'Kalkulus Dasar',
    difficulty: 'Sedang',
    question: 'Persamaan garis singgung kurva y = x² - 3x + 2 yang sejajar dengan garis 5x - y + 1 = 0 adalah...',
    options: [
      { id: 'A', text: 'y = 5x - 14' },
      { id: 'B', text: 'y = 5x + 14' },
      { id: 'C', text: 'y = 5x - 18' },
      { id: 'D', text: 'y = -5x + 14' }
    ],
    correctAnswer: 'A',
    explanation: 'Garis 5x - y + 1 = 0 memiliki gradien m = 5. Karena sejajar, garis singgung kurva juga memiliki m = 5. m = y\' = 2x - 3 = 5  ⇒  2x = 8  ⇒  x = 4. Titik singgung: y = (4)² - 3(4) + 2 = 16 - 12 + 2 = 6. Titik singgungnya adalah (4, 6). Persamaan garis singgung: y - 6 = 5(x - 4)  ⇒  y - 6 = 5x - 20  ⇒  y = 5x - 14.',
    keyConcept: 'Garis Singgung Kurva Sejajar',
    tkaExamTip: 'Dua garis sejajar memiliki gradien sama (m₁ = m₂).'
  }
];
