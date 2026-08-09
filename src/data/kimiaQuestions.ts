import { Question } from '../types';

export const kimiaQuestions: Question[] = [
  {
    id: 'kq-1',
    subjectId: 'kimia',
    topicTag: 'Struktur Atom',
    difficulty: 'Mudah',
    question: 'Suatu atom unsur X memiliki nomor atom 19 dan nomor massa 39. Jumlah neutron dalam atom tersebut adalah...',
    options: [
      { id: 'A', text: '19' },
      { id: 'B', text: '20' },
      { id: 'C', text: '39' },
      { id: 'D', text: '58' }
    ],
    correctAnswer: 'B',
    explanation: 'Neutron = Nomor Massa - Nomor Atom = 39 - 19 = 20.'
  },
  {
    id: 'kq-2',
    subjectId: 'kimia',
    topicTag: 'Konfigurasi Elektron',
    difficulty: 'Sedang',
    question: 'Konfigurasi elektron unsur dengan nomor atom 20 adalah...',
    options: [
      { id: 'A', text: '2.8.8.2' },
      { id: 'B', text: '2.8.10' },
      { id: 'C', text: '2.18' },
      { id: 'D', text: '2.8.6.4' }
    ],
    correctAnswer: 'A',
    explanation: 'Z = 20: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² -> Kulit K=2, L=8, M=8, N=2 (2.8.8.2).'
  },
  {
    id: 'kq-3',
    subjectId: 'kimia',
    topicTag: 'Sistem Periodik',
    difficulty: 'Sedang',
    question: 'Unsur dengan konfigurasi elektron berakhir pada 3s² 3p³ terletak pada...',
    options: [
      { id: 'A', text: 'Periode 3, Golongan IIIA' },
      { id: 'B', text: 'Periode 3, Golongan VA' },
      { id: 'C', text: 'Periode 5, Golongan IIIA' },
      { id: 'D', text: 'Periode 3, Golongan VIIA' }
    ],
    correctAnswer: 'B',
    explanation: 'Kulit terbesar = 3 (Periode 3). Elektron valensi = 2 + 3 = 5 (Golongan VA / 15).'
  },
  {
    id: 'kq-4',
    subjectId: 'kimia',
    topicTag: 'Ikatan Kimia',
    difficulty: 'Mudah',
    question: 'Ikatan kimia yang terbentuk akibat serah terima elektron antara unsur logam dan nonlogam adalah...',
    options: [
      { id: 'A', text: 'Ikatan Kovalen' },
      { id: 'B', text: 'Ikatan Ion' },
      { id: 'C', text: 'Ikatan Logam' },
      { id: 'D', text: 'Ikatan Hidrogen' }
    ],
    correctAnswer: 'B',
    explanation: 'Ikatan ion terbentuk karena transfer elektron dari unsur logam (melepas elektron) ke nonlogam (menerima elektron).'
  },
  {
    id: 'kq-5',
    subjectId: 'kimia',
    topicTag: 'Ikatan Kimia',
    difficulty: 'Sedang',
    question: 'Senyawa berikut yang memiliki ikatan kovalen rangkap dua adalah...',
    options: [
      { id: 'A', text: 'HCl' },
      { id: 'B', text: 'H2O' },
      { id: 'C', text: 'O2' },
      { id: 'D', text: 'N2' }
    ],
    correctAnswer: 'C',
    explanation: 'Molekul O2 memiliki ikatan kovalen rangkap dua (O=O) untuk mencapai kestabilan oktet.'
  },
  {
    id: 'kq-6',
    subjectId: 'kimia',
    topicTag: 'Konsep Mol',
    difficulty: 'Sedang',
    question: 'Jika Ar C = 12 dan O = 16, massa molar (Mr) dari senyawa CO2 adalah...',
    options: [
      { id: 'A', text: '28 g/mol' },
      { id: 'B', text: '44 g/mol' },
      { id: 'C', text: '56 g/mol' },
      { id: 'D', text: '60 g/mol' }
    ],
    correctAnswer: 'B',
    explanation: 'Mr CO2 = (1 * Ar C) + (2 * Ar O) = 12 + (2 * 16) = 12 + 32 = 44 g/mol.'
  },
  {
    id: 'kq-7',
    subjectId: 'kimia',
    topicTag: 'Konsep Mol',
    difficulty: 'Sedang',
    question: 'Jumlah mol dari 11 gram gas CO2 (Mr = 44) adalah...',
    options: [
      { id: 'A', text: '0.15 mol' },
      { id: 'B', text: '0.25 mol' },
      { id: 'C', text: '0.50 mol' },
      { id: 'D', text: '2.00 mol' }
    ],
    correctAnswer: 'B',
    explanation: 'n = massa / Mr = 11 / 44 = 0.25 mol.'
  },
  {
    id: 'kq-8',
    subjectId: 'kimia',
    topicTag: 'Larutan & Konsentrasi',
    difficulty: 'Sedang',
    question: 'Sebanyak 4 gram NaOH (Mr = 40) dilarutkan dalam air hingga volume larutan menjadi 500 mL (0.5 Liter). Molaritas larutan tersebut adalah...',
    options: [
      { id: 'A', text: '0.1 M' },
      { id: 'B', text: '0.2 M' },
      { id: 'C', text: '0.4 M' },
      { id: 'D', text: '0.8 M' }
    ],
    correctAnswer: 'B',
    explanation: 'n = 4 / 40 = 0.1 mol. M = n / V(L) = 0.1 / 0.5 = 0.2 M.'
  },
  {
    id: 'kq-9',
    subjectId: 'kimia',
    topicTag: 'Termokimia',
    difficulty: 'Sedang',
    question: 'Reaksi kimia yang disertai dengan pelepasan kalor dari sistem ke lingkungan disebut reaksi...',
    options: [
      { id: 'A', text: 'Endoterm' },
      { id: 'B', text: 'Eksoterm' },
      { id: 'C', text: 'Netralisasi' },
      { id: 'D', text: 'Hidrolisis' }
    ],
    correctAnswer: 'B',
    explanation: 'Reaksi eksoterm melepaskan kalor, ditandai dengan nilai ΔH negatif dan kenaikan suhu lingkungan.'
  },
  {
    id: 'kq-10',
    subjectId: 'kimia',
    topicTag: 'Laju Reaksi',
    difficulty: 'Sedang',
    question: 'Faktor berikut yang TIDAK mempercepat laju reaksi kimia adalah...',
    options: [
      { id: 'A', text: 'Menaikkan suhu' },
      { id: 'B', text: 'Memperkecil luas permukaan zat padat' },
      { id: 'C', text: 'Menambahkan katalis' },
      { id: 'D', text: 'Memperbesar konsentrasi reaktan' }
    ],
    correctAnswer: 'B',
    explanation: 'Memperkecil luas permukaan justru memperlambat laju reaksi. Yang mempercepat adalah memperbesar luas permukaan.'
  },
  {
    id: 'kq-11',
    subjectId: 'kimia',
    topicTag: 'Kesetimbangan Kimia',
    difficulty: 'Sulit',
    question: 'Diketahui reaksi kesetimbangan: N2(g) + 3H2(g) ⇌ 2NH3(g). Jika tekanan sistem dinaikkan (volume diperkecil), kesetimbangan akan bergeser ke arah...',
    options: [
      { id: 'A', text: 'Kiri (reaktan)' },
      { id: 'B', text: 'Kanan (produk)' },
      { id: 'C', text: 'Tidak bergeser' },
      { id: 'D', text: 'Bergeser ke endoterm' }
    ],
    correctAnswer: 'B',
    explanation: 'Jika tekanan diperkecil/volume diperkecil (tekanan naik), kesetimbangan bergeser ke jumlah koefisien lebih kecil (Kanan: 2 koefisien, Kiri: 4 koefisien).'
  },
  {
    id: 'kq-12',
    subjectId: 'kimia',
    topicTag: 'Asam Basa',
    difficulty: 'Mudah',
    question: 'Larutan yang memiliki pH sebesar 3 bersifat...',
    options: [
      { id: 'A', text: 'Asam kuat/lemah' },
      { id: 'B', text: 'Basa kuat' },
      { id: 'C', text: 'Netral' },
      { id: 'D', text: 'Garam dapur' }
    ],
    correctAnswer: 'A',
    explanation: 'pH < 7 menunjukkan larutan bersifat asam.'
  },
  {
    id: 'kq-13',
    subjectId: 'kimia',
    topicTag: 'Asam Basa',
    difficulty: 'Sedang',
    question: 'Jika konsentrasi ion H^+ dalam suatu larutan asam adalah 0.001 M (10^-3 M), nilai pH larutan tersebut adalah...',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '11' }
    ],
    correctAnswer: 'C',
    explanation: 'pH = -log[H^+] = -log(10^-3) = 3.'
  },
  {
    id: 'kq-14',
    subjectId: 'kimia',
    topicTag: 'Redoks & Elektrokimia',
    difficulty: 'Sedang',
    question: 'Bilangan oksidasi atom S dalam senyawa H2SO4 adalah...',
    options: [
      { id: 'A', text: '+2' },
      { id: 'B', text: '+4' },
      { id: 'C', text: '+6' },
      { id: 'D', text: '-2' }
    ],
    correctAnswer: 'C',
    explanation: 'H2SO4 netral = 0. (2*+1) + S + (4*-2) = 0 => +2 + S - 8 = 0 => S = +6.'
  },
  {
    id: 'kq-15',
    subjectId: 'kimia',
    topicTag: 'Sel Volta',
    difficulty: 'Sedang',
    question: 'Pada sel Volta, elektroda tempat terjadinya reaksi oksidasi disebut...',
    options: [
      { id: 'A', text: 'Katoda (kutub positif)' },
      { id: 'B', text: 'Anoda (kutub negatif)' },
      { id: 'C', text: 'Jembatan garam' },
      { id: 'D', text: 'Elektrolit' }
    ],
    correctAnswer: 'B',
    explanation: 'An Anode is where Oxidation occurs (Anode = Oksidasi).'
  },
  {
    id: 'kq-16',
    subjectId: 'kimia',
    topicTag: 'Hidrokarbon',
    difficulty: 'Mudah',
    question: 'Senyawa hidrokarbon dengan rumus molekul C4H10 termasuk kelompok...',
    options: [
      { id: 'A', text: 'Alkane (Alkiena jenuh)' },
      { id: 'B', text: 'Alkene' },
      { id: 'C', text: 'Alkyne' },
      { id: 'D', text: 'Benzena' }
    ],
    correctAnswer: 'A',
    explanation: 'Alkane memiliki rumus umum C_n H_{2n+2}. Untuk n=4, C4H10 (Butana).'
  },
  {
    id: 'kq-17',
    subjectId: 'kimia',
    topicTag: 'Minyak Bumi',
    difficulty: 'Sedang',
    question: 'Proses pemisahanfraksi-fraksi minyak bumi berdasarkan perbedaan titik didihnya disebut...',
    options: [
      { id: 'A', text: 'Kracking' },
      { id: 'B', text: 'Destilasi Bertingkat' },
      { id: 'C', text: 'Reforming' },
      { id: 'D', text: 'Polimerisasi' }
    ],
    correctAnswer: 'B',
    explanation: 'Destilasi bertingkat memisahkan komponen minyak bumi berdasarkan titik didihnya dalam menara distilasi.'
  },
  {
    id: 'kq-18',
    subjectId: 'kimia',
    topicTag: 'Sifat Koligatif Larutan',
    difficulty: 'Sulit',
    question: 'Penurunan titik beku larutan dipengaruhi terutama oleh...',
    options: [
      { id: 'A', text: 'Jenis zat terlarut' },
      { id: 'B', text: 'Jumlah partikel zat terlarut (konsentrasi molal)' },
      { id: 'C', text: 'Volume pelarut' },
      { id: 'D', text: 'Tekanan udara luar' }
    ],
    correctAnswer: 'B',
    explanation: 'Sifat koligatif larutan bergantung pada jumlah partikel zat terlarut, bukan jenisnya.'
  },
  {
    id: 'kq-19',
    subjectId: 'kimia',
    topicTag: 'Koloid',
    difficulty: 'Sedang',
    question: 'Sistem koloid di mana fase terdispersi cair dalam medium pendispersi gas disebut...',
    options: [
      { id: 'A', text: 'Aerosol cair (contoh: kabut, awan)' },
      { id: 'B', text: 'Sol' },
      { id: 'C', text: 'Emulsi' },
      { id: 'D', text: 'Busa' }
    ],
    correctAnswer: 'A',
    explanation: 'Aerosol cair adalah butiran cairan yang terdispersi di dalam gas.'
  },
  {
    id: 'kq-20',
    subjectId: 'kimia',
    topicTag: 'Polimer',
    difficulty: 'Sedang',
    question: 'Polimer alam yang menjadi penyusun utama serat kapas dan kertas adalah...',
    options: [
      { id: 'A', text: 'Amilum' },
      { id: 'B', text: 'Selulosa' },
      { id: 'C', text: 'Protein' },
      { id: 'D', text: 'Karet alam' }
    ],
    correctAnswer: 'B',
    explanation: 'Selulosa adalah polimer glukosa alami yang menyusun dinding sel tumbuhan dan kapas.'
  },
  {
    id: 'kq-21',
    subjectId: 'kimia',
    topicTag: 'Stoikiometri Gas',
    difficulty: 'Sulit',
    question: 'Pada pembakaran sempurna 2 liter gas asetilena (C2H2) pada T dan P yang sama, volume gas CO2 yang dihasilkan adalah...',
    options: [
      { id: 'A', text: '2 liter' },
      { id: 'B', text: '4 liter' },
      { id: 'C', text: '6 liter' },
      { id: 'D', text: '8 liter' }
    ],
    correctAnswer: 'B',
    explanation: 'Reaksi: 2C2H2 + 5O2 -> 4CO2 + 2H2O. Perbandingan koefisien CO2 : C2H2 = 4 : 2 = 2 : 1. Volume CO2 = 2 * 2 = 4 liter.'
  },
  {
    id: 'kq-22',
    subjectId: 'kimia',
    topicTag: 'pH Larutan Garam',
    difficulty: 'Sulit',
    question: 'Garam CH3COONa dalam air akan mengalami hidrolisis dan bersifat...',
    options: [
      { id: 'A', text: 'Asam (pH < 7)' },
      { id: 'B', text: 'Basa (pH > 7)' },
      { id: 'C', text: 'Netral (pH = 7)' },
      { id: 'D', text: 'Tidak terhidrolisis' }
    ],
    correctAnswer: 'B',
    explanation: 'CH3COONa berasal dari asam lemah (CH3COOH) dan basa kuat (NaOH). Ion CH3COO^- terhidrolisis menghasilkan OH^-, sehingga bersifat basa.'
  },
  {
    id: 'kq-23',
    subjectId: 'kimia',
    topicTag: 'Larutan Penyangga',
    difficulty: 'Sedang',
    question: 'Larutan penyangga (buffer) dalam darah manusia berfungsi untuk mempertahankan pH darah agar tetap berkisar di sekitar...',
    options: [
      { id: 'A', text: '5.5' },
      { id: 'B', text: '6.4' },
      { id: 'C', text: '7.4' },
      { id: 'D', text: '8.2' }
    ],
    correctAnswer: 'C',
    explanation: 'pH darah normal manusia dipertahankan oleh sistem buffer karbonat (H2CO3 / HCO3^-) pada kisaran 7.35 - 7.45.'
  },
  {
    id: 'kq-24',
    subjectId: 'kimia',
    topicTag: 'Kelarutan & Ksp',
    difficulty: 'Sulit',
    question: 'Jika kelarutan AgCl dalam air adalah s mol/L, tetapan hasil kali kelarutan (Ksp) AgCl dirumuskan sebagai...',
    options: [
      { id: 'A', text: 's' },
      { id: 'B', text: 's^2' },
      { id: 'C', text: '4s^3' },
      { id: 'D', text: '27s^4' }
    ],
    correctAnswer: 'B',
    explanation: 'AgCl(s) ⇌ Ag^+(aq) + Cl^-(aq). [Ag^+] = s, [Cl^-] = s. Ksp = [Ag^+][Cl^-] = s * s = s^2.'
  },
  {
    id: 'kq-25',
    subjectId: 'kimia',
    topicTag: 'Sel Elektrolisis',
    difficulty: 'Sedang',
    question: 'Pada elektrolisis leburan NaCl dengan elektroda karbon, di katoda akan dihasilkan...',
    options: [
      { id: 'A', text: 'Gas klorin (Cl2)' },
      { id: 'B', text: 'Logam Natrium (Na)' },
      { id: 'C', text: 'Gas hidrogen (H2)' },
      { id: 'D', text: 'Air (H2O)' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada elektrolisis leburan (tanpa air), kation Na^+ direduksi di katoda menjadi logam Na.'
  },
  {
    id: 'kq-26',
    subjectId: 'kimia',
    topicTag: 'Kimia Unsur',
    difficulty: 'Sedang',
    question: 'Unsur golongan VIIA (halogen) yang berwujud cair pada suhu kamar adalah...',
    options: [
      { id: 'A', text: 'Fluorin' },
      { id: 'B', text: 'Klorin' },
      { id: 'C', text: 'Bromin' },
      { id: 'D', text: 'Iodin' }
    ],
    correctAnswer: 'C',
    explanation: 'Bromin (Br2) adalah satu-satunya unsur halogen yang berwujud cair pada suhu kamar.'
  },
  {
    id: 'kq-27',
    subjectId: 'kimia',
    topicTag: 'Senyawa Turunan Alkana',
    difficulty: 'Sedang',
    question: 'Senyawa karbon dengan gugus fungsi -OH termasuk golongan...',
    options: [
      { id: 'A', text: 'Alkohol (Alkanol)' },
      { id: 'B', text: 'Eter (Alkoksi alkana)' },
      { id: 'C', text: 'Aldehid' },
      { id: 'D', text: 'Asam Karboksilat' }
    ],
    correctAnswer: 'A',
    explanation: 'Gugus fungsi -OH adalah ciri khas alkohol / alkanol.'
  },
  {
    id: 'kq-28',
    subjectId: 'kimia',
    topicTag: 'Benzena',
    difficulty: 'Sedang',
    question: 'Turunan benzena yang digunakan sebagai bahan baku antiseptik pembersih luka dan fenol adalah...',
    options: [
      { id: 'A', text: 'Toluena' },
      { id: 'B', text: 'Fenol' },
      { id: 'C', text: 'Anilina' },
      { id: 'D', text: 'Asam Benzoat' }
    ],
    correctAnswer: 'B',
    explanation: 'Fenol (benzena dengan gugus -OH) sering digunakan sebagai disinfektan dan antiseptik.'
  },
  {
    id: 'kq-29',
    subjectId: 'kimia',
    topicTag: 'Biomolekul',
    difficulty: 'Sedang',
    question: 'Ikatan peptida yang menghubungkan asam amino satu dengan asam amino lainnya dalam protein terbentuk melalui gugus...',
    options: [
      { id: 'A', text: 'Ester dan amida' },
      { id: 'B', text: 'Karboksil (-COOH) dan amina (-NH2)' },
      { id: 'C', text: 'Hidroksil (-OH)' },
      { id: 'D', text: 'Eter dan keton' }
    ],
    correctAnswer: 'B',
    explanation: 'Ikatan peptida terbentuk antara gugus karboksil asam amino pertama dan gugus amina asam amino kedua.'
  },
  {
    id: 'kq-30',
    subjectId: 'kimia',
    topicTag: 'Radioaktivitas Kimia',
    difficulty: 'Sulit',
    question: 'Karbon-14 (^14C) sering digunakan dalam metode penanggalan radiokarbon (carbon dating) untuk menentukan umur fosil karena meluruh memancarkan sinar...',
    options: [
      { id: 'A', text: 'Sinar alpha (α)' },
      { id: 'B', text: 'Sinar beta minus (β^-)' },
      { id: 'C', text: 'Sinar gamma (γ)' },
      { id: 'D', text: 'Positron' }
    ],
    correctAnswer: 'B',
    explanation: 'Peluruhan ^14C menjadi ^14N disertai pemancaran partikel beta minus (^14_6C → ^14_7N + e^-).'
  }
];
