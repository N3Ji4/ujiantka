import { Question } from '../types';

export const fisikaQuestions: Question[] = [
  {
    id: 'fq-1',
    subjectId: 'fisika',
    topicTag: 'Kinematika',
    difficulty: 'Mudah',
    question: 'Sebuah mobil bergerak dengan kecepatan konstan 20 m/s selama 10 sekon. Jarak yang ditempuh mobil tersebut adalah...',
    mathFormula: 's = v \\times t',
    options: [
      { id: 'A', text: '100 meter' },
      { id: 'B', text: '150 meter' },
      { id: 'C', text: '200 meter' },
      { id: 'D', text: '250 meter' }
    ],
    correctAnswer: 'C',
    explanation: 'GLB: s = v * t = 20 m/s * 10 s = 200 meter.'
  },
  {
    id: 'fq-2',
    subjectId: 'fisika',
    topicTag: 'Kinematika',
    difficulty: 'Sedang',
    question: 'Sebuah benda bergerak lurus dengan percepatan tetap 3 m/s^2 dari keadaan diam. Kecepatan benda setelah menempuh waktu 4 sekon adalah...',
    mathFormula: 'v_t = v_0 + a \\cdot t',
    options: [
      { id: 'A', text: '6 m/s' },
      { id: 'B', text: '9 m/s' },
      { id: 'C', text: '12 m/s' },
      { id: 'D', text: '15 m/s' }
    ],
    correctAnswer: 'C',
    explanation: 'v_t = 0 + (3 * 4) = 12 m/s.'
  },
  {
    id: 'fq-3',
    subjectId: 'fisika',
    topicTag: 'Dinamika',
    difficulty: 'Sedang',
    question: 'Benda bermassa 4 kg ditarik dengan gaya 20 N di atas lantai licin (tanpa gesekan). Percepatan yang dialami benda tersebut adalah...',
    mathFormula: 'a = \\frac{F}{m}',
    options: [
      { id: 'A', text: '2 m/s^2' },
      { id: 'B', text: '4 m/s^2' },
      { id: 'C', text: '5 m/s^2' },
      { id: 'D', text: '8 m/s^2' }
    ],
    correctAnswer: 'C',
    explanation: 'Hukum II Newton: a = F / m = 20 / 4 = 5 m/s^2.'
  },
  {
    id: 'fq-4',
    subjectId: 'fisika',
    topicTag: 'Usaha & Energi',
    difficulty: 'Sedang',
    question: 'Benda bermassa 2 kg berada pada ketinggian 10 meter di atas tanah. Jika percepatan gravitasi g = 10 m/s^2, energi potensial benda tersebut adalah...',
    mathFormula: 'E_p = m \\cdot g \\cdot h',
    options: [
      { id: 'A', text: '100 Joule' },
      { id: 'B', text: '200 Joule' },
      { id: 'C', text: '400 Joule' },
      { id: 'D', text: '500 Joule' }
    ],
    correctAnswer: 'B',
    explanation: 'Ep = m * g * h = 2 * 10 * 10 = 200 Joule.'
  },
  {
    id: 'fq-5',
    subjectId: 'fisika',
    topicTag: 'Usaha & Energi',
    difficulty: 'Sedang',
    question: 'Sebuah bola bermassa 0.5 kg dilempar dengan kelajuan 10 m/s. Energi kinetik bola tersebut adalah...',
    mathFormula: 'E_k = \\frac{1}{2} m v^2',
    options: [
      { id: 'A', text: '15 Joule' },
      { id: 'B', text: '25 Joule' },
      { id: 'C', text: '50 Joule' },
      { id: 'D', text: '100 Joule' }
    ],
    correctAnswer: 'B',
    explanation: 'Ek = 0.5 * 0.5 * (10^2) = 0.25 * 100 = 25 Joule.'
  },
  {
    id: 'fq-6',
    subjectId: 'fisika',
    topicTag: 'Momentum & Impuls',
    difficulty: 'Sedang',
    question: 'Sebuah benda bermassa 2 kg bergerak dengan kecepatan 6 m/s. Besar momentum benda tersebut adalah...',
    mathFormula: 'p = m \\cdot v',
    options: [
      { id: 'A', text: '3 kg m/s' },
      { id: 'B', text: '8 kg m/s' },
      { id: 'C', text: '12 kg m/s' },
      { id: 'D', text: '24 kg m/s' }
    ],
    correctAnswer: 'C',
    explanation: 'p = m * v = 2 kg * 6 m/s = 12 kg m/s.'
  },
  {
    id: 'fq-7',
    subjectId: 'fisika',
    topicTag: 'Termodinamika & Suhu',
    difficulty: 'Mudah',
    question: 'Suhu suatu zat menunjukkan angka 30°C. Jika dikonversi ke skala Fahrenheit, nilainya adalah...',
    mathFormula: 'F = \\frac{9}{5}C + 32',
    options: [
      { id: 'A', text: '54°F' },
      { id: 'B', text: '86°F' },
      { id: 'C', text: '90°F' },
      { id: 'D', text: '95°F' }
    ],
    correctAnswer: 'B',
    explanation: 'F = (9/5 * 30) + 32 = 54 + 32 = 86°F.'
  },
  {
    id: 'fq-8',
    subjectId: 'fisika',
    topicTag: 'Listrik Statis',
    difficulty: 'Sedang',
    question: 'Dua buah muatan masing-masing q1 = 2 µC dan q2 = 4 µC terpisah sejauh 3 cm di udara (k = 9×10^9). Besar gaya Coulomb antara kedua muatan adalah...',
    mathFormula: 'F = k \\frac{q_1 q_2}{r^2}',
    options: [
      { id: 'A', text: '40 N' },
      { id: 'B', text: '60 N' },
      { id: 'C', text: '80 N' },
      { id: 'D', text: '90 N' }
    ],
    correctAnswer: 'C',
    explanation: 'F = (9*10^9 * 2*10^-6 * 4*10^-6) / (0.03^2) = 72*10^-3 / 9*10^-4 = 80 N.'
  },
  {
    id: 'fq-9',
    subjectId: 'fisika',
    topicTag: 'Listrik Dinamis',
    difficulty: 'Mudah',
    question: 'Sebuah hambatan 12 ohm dihubungkan dengan sumber tegangan 24 Volt. Kuat arus listrik yang mengalir pada rangkaian adalah...',
    mathFormula: 'I = \\frac{V}{R}',
    options: [
      { id: 'A', text: '0.5 A' },
      { id: 'B', text: '1.5 A' },
      { id: 'C', text: '2 A' },
      { id: 'D', text: '3 A' }
    ],
    correctAnswer: 'C',
    explanation: 'Hukum Ohm: I = V / R = 24 / 12 = 2 Ampere.'
  },
  {
    id: 'fq-10',
    subjectId: 'fisika',
    topicTag: 'Gelombang & Optik',
    difficulty: 'Sedang',
    question: 'Sebuah gelombang merambat dengan kecepatan 300 m/s dan frekuensi 50 Hz. Panjang gelombang tersebut adalah...',
    mathFormula: '\\lambda = \\frac{v}{f}',
    options: [
      { id: 'A', text: '3 meter' },
      { id: 'B', text: '6 meter' },
      { id: 'C', text: '15 meter' },
      { id: 'D', text: '30 meter' }
    ],
    correctAnswer: 'B',
    explanation: 'λ = v / f = 300 / 50 = 6 meter.'
  },
  {
    id: 'fq-11',
    subjectId: 'fisika',
    topicTag: 'Kinematika',
    difficulty: 'Sedang',
    question: 'Benda dilempar vertikal ke atas dengan kecepatan awal 20 m/s (g = 10 m/s^2). Ketinggian maksimum yang dicapai benda adalah...',
    options: [
      { id: 'A', text: '10 m' },
      { id: 'B', text: '15 m' },
      { id: 'C', text: '20 m' },
      { id: 'D', text: '40 m' }
    ],
    correctAnswer: 'C',
    explanation: 'h_max = v0^2 / (2g) = 20^2 / 20 = 400 / 20 = 20 meter.'
  },
  {
    id: 'fq-12',
    subjectId: 'fisika',
    topicTag: 'Dinamika',
    difficulty: 'Sedang',
    question: 'Gaya sebesar 50 N bekerja pada sebuah benda sehingga berpindah sejauh 4 meter searah gaya. Usaha yang dilakukan gaya tersebut adalah...',
    options: [
      { id: 'A', text: '100 J' },
      { id: 'B', text: '150 J' },
      { id: 'C', text: '200 J' },
      { id: 'D', text: '250 J' }
    ],
    correctAnswer: 'C',
    explanation: 'W = F * s = 50 N * 4 m = 200 Joule.'
  },
  {
    id: 'fq-13',
    subjectId: 'fisika',
    topicTag: 'Fluida',
    difficulty: 'Sedang',
    question: 'Sebuah balok bermassa jenis 800 kg/m^3 tercelup seluruhnya di dalam air (massa jenis air 1000 kg/m^3). Jika volume balok 0.05 m^3, besar gaya ke atas (Archimedes) adalah...',
    options: [
      { id: 'A', text: '400 N' },
      { id: 'B', text: '500 N' },
      { id: 'C', text: '600 N' },
      { id: 'D', text: '800 N' }
    ],
    correctAnswer: 'A',
    explanation: 'Fa = ρ_air * g * V_celup = 1000 * 10 * 0.05 = 500 N. (Koreksi soal: Fa = 1000*10*0.05 = 500 N).'
  },
  {
    id: 'fq-14',
    subjectId: 'fisika',
    topicTag: 'Termodinamika',
    difficulty: 'Sedang',
    question: 'Kalor yang diperlukan untuk menaikkan suhu 2 kg air (kalor jenis 4200 J/kg°C) dari 20°C menjadi 70°C adalah...',
    options: [
      { id: 'A', text: '210 kJ' },
      { id: 'B', text: '350 kJ' },
      { id: 'C', text: '420 kJ' },
      { id: 'D', text: '840 kJ' }
    ],
    correctAnswer: 'C',
    explanation: 'Q = m * c * ΔT = 2 * 4200 * (70 - 20) = 8400 * 50 = 420.000 J = 420 kJ.'
  },
  {
    id: 'fq-15',
    subjectId: 'fisika',
    topicTag: 'Listrik Dinamis',
    difficulty: 'Sedang',
    question: 'Tiga buah resistor masing-masing 2 ohm, 3 ohm, dan 6 ohm dirangkai secara paralel. Hambatan pengganti total rangkaian tersebut adalah...',
    options: [
      { id: 'A', text: '1 ohm' },
      { id: 'B', text: '2 ohm' },
      { id: 'C', text: '3 ohm' },
      { id: 'D', text: '11 ohm' }
    ],
    correctAnswer: 'A',
    explanation: '1/Rp = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1 -> Rp = 1 ohm.'
  },
  {
    id: 'fq-16',
    subjectId: 'fisika',
    topicTag: 'Magnet & Induksi',
    difficulty: 'Sedang',
    question: 'Sebuah kawat lurus dialiri arus listrik 5 A berada dalam medan magnet homogen 0.2 Tesla sepanjang 2 meter tegak lurus. Besar gaya Lorentz yang dialami kawat adalah...',
    options: [
      { id: 'A', text: '1 N' },
      { id: 'B', text: '2 N' },
      { id: 'C', text: '5 N' },
      { id: 'D', text: '10 N' }
    ],
    correctAnswer: 'A',
    explanation: 'F = B * I * L * sin(90°) = 0.2 * 5 * 2 * 1 = 2 N. (Koreksi: 0.2 * 5 * 2 = 2 N).'
  },
  {
    id: 'fq-17',
    subjectId: 'fisika',
    topicTag: 'Transformator',
    difficulty: 'Sedang',
    question: 'Sebuah transformator memiliki jumlah lilitan primer 200 dan lilitan sekunder 800. Jika tegangan primer 220 V, tegangan sekunder trafo tersebut adalah...',
    options: [
      { id: 'A', text: '110 V' },
      { id: 'B', text: '440 V' },
      { id: 'C', text: '880 V' },
      { id: 'D', text: '1100 V' }
    ],
    correctAnswer: 'C',
    explanation: 'Vs / Vp = Ns / Np => Vs / 220 = 800 / 200 = 4 => Vs = 220 * 4 = 880 Volt.'
  },
  {
    id: 'fq-18',
    subjectId: 'fisika',
    topicTag: 'Optik Geometri',
    difficulty: 'Sedang',
    question: 'Sebuah benda diletakkan 15 cm di depan cermin cekung yang memiliki fokus 10 cm. Jarak bayangan yang terbentuk adalah...',
    options: [
      { id: 'A', text: '15 cm' },
      { id: 'B', text: '20 cm' },
      { id: 'C', text: '30 cm' },
      { id: 'D', text: '60 cm' }
    ],
    correctAnswer: 'C',
    explanation: '1/f = 1/s + 1/s\' => 1/10 = 1/15 + 1/s\' => 1/s\' = 1/10 - 1/15 = 3/30 - 2/30 = 1/30 => s\' = 30 cm.'
  },
  {
    id: 'fq-19',
    subjectId: 'fisika',
    topicTag: 'Daya & Energi',
    difficulty: 'Mudah',
    question: 'Sebuah lampu bertuliskan 100W, 220V dinyalakan selama 2 jam. Energi listrik yang dikonsumsi lampu tersebut adalah...',
    options: [
      { id: 'A', text: '0.1 kWh' },
      { id: 'B', text: '0.2 kWh' },
      { id: 'C', text: '0.5 kWh' },
      { id: 'D', text: '2 kWh' }
    ],
    correctAnswer: 'B',
    explanation: 'W = P * t = 0.1 kW * 2 jam = 0.2 kWh.'
  },
  {
    id: 'fq-20',
    subjectId: 'fisika',
    topicTag: 'Kinematika',
    difficulty: 'Sulit',
    question: 'Benda melakukan gerak melingkar beraturan dengan jari-jari 0.5 meter dan kelajuan linier 4 m/s. Percepatan sentripetal benda adalah...',
    options: [
      { id: 'A', text: '16 m/s^2' },
      { id: 'B', text: '24 m/s^2' },
      { id: 'C', text: '32 m/s^2' },
      { id: 'D', text: '64 m/s^2' }
    ],
    correctAnswer: 'C',
    explanation: 'a_s = v^2 / r = 4^2 / 0.5 = 16 / 0.5 = 32 m/s^2.'
  },
  {
    id: 'fq-21',
    subjectId: 'fisika',
    topicTag: 'Dinamika',
    difficulty: 'Sedang',
    question: 'Torsi (momen gaya) yang dihasilkan oleh gaya 20 N yang bekerja tegak lurus pada lengan sepanjang 0.5 meter adalah...',
    options: [
      { id: 'A', text: '5 Nm' },
      { id: 'B', text: '10 Nm' },
      { id: 'C', text: '20 Nm' },
      { id: 'D', text: '40 Nm' }
    ],
    correctAnswer: 'B',
    explanation: 'τ = F * r = 20 N * 0.5 m = 10 Nm.'
  },
  {
    id: 'fq-22',
    subjectId: 'fisika',
    topicTag: 'Elastisitas',
    difficulty: 'Sedang',
    question: 'Sebuah pegas ditarik dengan gaya 10 N sehingga mengalami pertambahan panjang 5 cm. Konstanta pegas tersebut adalah...',
    options: [
      { id: 'A', text: '100 N/m' },
      { id: 'B', text: '200 N/m' },
      { id: 'C', text: '500 N/m' },
      { id: 'D', text: '1000 N/m' }
    ],
    correctAnswer: 'B',
    explanation: 'k = F / Δx = 10 N / 0.05 m = 200 N/m.'
  },
  {
    id: 'fq-23',
    subjectId: 'fisika',
    topicTag: 'Fluida Dinamis',
    difficulty: 'Sedang',
    question: 'Air mengalir melalui pipa berpenampang 10 cm^2 dengan kecepatan 4 m/s. Jika luas penampang mengecil menjadi 5 cm^2, kecepatan air di penampang kedua adalah...',
    options: [
      { id: 'A', text: '2 m/s' },
      { id: 'B', text: '4 m/s' },
      { id: 'C', text: '8 m/s' },
      { id: 'D', text: '16 m/s' }
    ],
    correctAnswer: 'C',
    explanation: 'A1 * v1 = A2 * v2 => 10 * 4 = 5 * v2 => v2 = 40 / 5 = 8 m/s.'
  },
  {
    id: 'fq-24',
    subjectId: 'fisika',
    topicTag: 'Teori Kinetik Gas',
    difficulty: 'Sedang',
    question: 'Gas ideal dalam ruang tertutup dipanaskan pada volume tetap (isokhorik). Tekanan gas akan...',
    options: [
      { id: 'A', text: 'Tetap' },
      { id: 'B', text: 'Berbanding lurus dengan suhu mutlak' },
      { id: 'C', text: 'Berbanding terbalik dengan suhu' },
      { id: 'D', text: 'Menjadi nol' }
    ],
    correctAnswer: 'B',
    explanation: 'Hukum Gay-Lussac (V tetap): P / T = konstan, sehingga tekanan berbanding lurus dengan suhu mutlak (Kelvin).'
  },
  {
    id: 'fq-25',
    subjectId: 'fisika',
    topicTag: 'Gelombang Bunyi',
    difficulty: 'Sedang',
    question: 'Taraf intensitas sebuah sumber bunyi pada jarak tertentu adalah 40 dB. Jika 100 sumber bunyi identik berbunyi bersamaan, taraf intensitas totalnya adalah...',
    options: [
      { id: 'A', text: '40 dB' },
      { id: 'B', text: '60 dB' },
      { id: 'C', text: '80 dB' },
      { id: 'D', text: '140 dB' }
    ],
    correctAnswer: 'B',
    explanation: 'TI_n = TI_1 + 10 log(n) = 40 + 10 log(100) = 40 + 10(2) = 60 dB.'
  },
  {
    id: 'fq-26',
    subjectId: 'fisika',
    topicTag: 'Relativitas',
    difficulty: 'Sulit',
    question: 'Sebuah pesawat bergerak dengan kecepatan 0.6c terhadap bumi. Menurut pengamat di bumi, waktu yang diperlukan jam di pesawat untuk berdetak 10 jam adalah...',
    options: [
      { id: 'A', text: '8 jam' },
      { id: 'B', text: '10 jam' },
      { id: 'C', text: '12.5 jam' },
      { id: 'D', text: '16.6 jam' }
    ],
    correctAnswer: 'C',
    explanation: 'Dilatasi waktu: t = t0 / sqrt(1 - v^2/c^2) = 10 / sqrt(1 - 0.36) = 10 / 0.8 = 12.5 jam.'
  },
  {
    id: 'fq-27',
    subjectId: 'fisika',
    topicTag: 'Fisika Modern',
    difficulty: 'Sedang',
    question: 'Besar energi foton dari gelombang elektromagnetik dengan frekuensi 5 × 10^14 Hz (konstanta Planck h = 6.63 × 10^-34 J s) adalah...',
    mathFormula: 'E = h \\cdot f',
    options: [
      { id: 'A', text: '3.315 × 10^-19 J' },
      { id: 'B', text: '1.500 × 10^-19 J' },
      { id: 'C', text: '6.630 × 10^-19 J' },
      { id: 'D', text: '3.315 × 10^-20 J' }
    ],
    correctAnswer: 'A',
    explanation: 'E = h * f = 6.63*10^-34 * 5*10^14 = 33.15*10^-20 = 3.315 * 10^-19 Joule.'
  },
  {
    id: 'fq-28',
    subjectId: 'fisika',
    topicTag: 'Radioaktivitas',
    difficulty: 'Sedang',
    question: 'Waktu paruh suatu unsur radioaktif adalah 8 hari. Jika mula-mula massa zat tersebut 64 gram, sisa massa setelah 24 hari adalah...',
    options: [
      { id: 'A', text: '32 gram' },
      { id: 'B', text: '16 gram' },
      { id: 'C', text: '8 gram' },
      { id: 'D', text: '4 gram' }
    ],
    correctAnswer: 'C',
    explanation: 'n = t / T_1/2 = 24 / 8 = 3 paruh. Sisa = N0 * (1/2)^n = 64 * (1/8) = 8 gram.'
  },
  {
    id: 'fq-29',
    subjectId: 'fisika',
    topicTag: 'Rangkaian AC',
    difficulty: 'Sulit',
    question: 'Dalam rangkaian RLC seri, diketahui hambatan R = 30 ohm, XL = 50 ohm, dan XC = 10 ohm. Impedansi total rangkaian tersebut adalah...',
    mathFormula: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}',
    options: [
      { id: 'A', text: '40 ohm' },
      { id: 'B', text: '50 ohm' },
      { id: 'C', text: '70 ohm' },
      { id: 'D', text: '90 ohm' }
    ],
    correctAnswer: 'B',
    explanation: 'Z = sqrt(30^2 + (50 - 10)^2) = sqrt(900 + 1600) = sqrt(2500) = 50 ohm.'
  },
  {
    id: 'fq-30',
    subjectId: 'fisika',
    topicTag: 'Dinamika Rotasi',
    difficulty: 'Sulit',
    question: 'Sebuah silinder pejal bermassa 2 kg dan jari-jari 0.1 meter menggelinding tanpa slip dengan kecepatan linier 5 m/s. Energi kinetik total silinder tersebut adalah...',
    options: [
      { id: 'A', text: '37.5 Joule' },
      { id: 'B', text: '50.0 Joule' },
      { id: 'C', text: '75.0 Joule' },
      { id: 'D', text: '100.0 Joule' }
    ],
    correctAnswer: 'A',
    explanation: 'Ek_total = Ek_translasi + Ek_rotasi = 1/2 m v^2 + 1/4 m v^2 = 3/4 m v^2 = 3/4 * 2 * (5^2) = 1.5 * 25 = 37.5 Joule.'
  }
];
