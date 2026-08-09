import { Question } from '../types';

export const geografiQuestions: Question[] = [
  {
    id: 'geq-1',
    subjectId: 'geografi',
    topicTag: 'Litosfer',
    difficulty: 'Mudah',
    question: 'Lapisan bumi tempat terjadinya proses tektonisme dan vulkanisme yang tersusun atas batuan padat disebut...',
    options: [
      { id: 'A', text: 'Atmosfer' },
      { id: 'B', text: 'Litosfer' },
      { id: 'C', text: 'Hidrosfer' },
      { id: 'D', text: 'Biosfer' }
    ],
    correctAnswer: 'B',
    explanation: 'Litosfer adalah lapisan kerak bumi terluar yang padat.'
  },
  {
    id: 'geq-2',
    subjectId: 'geografi',
    topicTag: 'Tenaga Endogen',
    difficulty: 'Sedang',
    question: 'Pusat gempa yang berada di dalam lapisan bumi disebut...',
    options: [
      { id: 'A', text: 'Episentrum' },
      { id: 'B', text: 'Hiposentrum' },
      { id: 'C', text: 'Seismograf' },
      { id: 'D', text: 'Seismogram' }
    ],
    correctAnswer: 'B',
    explanation: 'Hiposentrum adalah pusat gempa di dalam bumi, sedangkan episentrum adalah titik di permukaan bumi tepat di atas hiposentrum.'
  },
  {
    id: 'geq-3',
    subjectId: 'geografi',
    topicTag: 'Atmosfer',
    difficulty: 'Sedang',
    question: 'Lapisan atmosfer bumi yang paling dekat dengan permukaan bumi dan menjadi tempat terjadinya dinamika cuaca (hujan, awan, angin) adalah...',
    options: [
      { id: 'A', text: 'Stratosfer' },
      { id: 'B', text: 'Mesosfer' },
      { id: 'C', text: 'Troposfer' },
      { id: 'D', text: 'Termosfer' }
    ],
    correctAnswer: 'C',
    explanation: 'Troposfer adalah lapisan terbawah atmosfer tempat berlangsungnya seluruh peristiwa cuaca.'
  },
  {
    id: 'geq-4',
    subjectId: 'geografi',
    topicTag: 'Meteorologi',
    difficulty: 'Sedang',
    question: 'Angin muson di Indonesia yang bertiup dari benua Australia menuju benua Asia (bulan April - Oktober) menyebabkan terjadinya...',
    options: [
      { id: 'A', text: 'Musim hujan' },
      { id: 'B', text: 'Musim kemarau' },
      { id: 'C', text: 'Pancaroba' },
      { id: 'D', text: 'Badai tropis' }
    ],
    correctAnswer: 'B',
    explanation: 'Angin Muson Timur (dari Australia kering) menyebabkan musim kemarau di Indonesia.'
  },
  {
    id: 'geq-5',
    subjectId: 'geografi',
    topicTag: 'Hidrosfer',
    difficulty: 'Sedang',
    question: 'Siklus hidrologi di mana air laut menguap, membentuk awan, terbawa angin ke daratan, lalu turun sebagai hujan disebut siklus...',
    options: [
      { id: 'A', text: 'Pendek' },
      { id: 'B', text: 'Sedang' },
      { id: 'C', text: 'Panjang' },
      { id: 'D', text: 'Kondensasi' }
    ],
    correctAnswer: 'B',
    explanation: 'Siklus sedang melibatkan penguapan laut, transpor uap air ke darat, presipitasi di darat, dan aliran kembali ke laut.'
  },
  {
    id: 'geq-6',
    subjectId: 'geografi',
    topicTag: 'Biosfer',
    difficulty: 'Sedang',
    question: 'Garis khayal yang memisahkan fauna tipe Asiatis di sebelah barat dengan fauna peralihan (Wallace) di Indonesia adalah...',
    options: [
      { id: 'A', text: 'Garis Weber' },
      { id: 'B', text: 'Garis Wallace' },
      { id: 'C', text: 'Garis Khatulistiwa' },
      { id: 'D', text: 'Garis Bujur' }
    ],
    correctAnswer: 'B',
    explanation: 'Garis Wallace memisahkan fauna Asiatis dan Australasea (peralihan di antaranya).'
  },
  {
    id: 'geq-7',
    subjectId: 'geografi',
    topicTag: 'Kartografi',
    difficulty: 'Sedang',
    question: 'Jika suatu peta memiliki skala 1 : 50.000, artinya 1 cm pada peta mewakili ... di lapangan.',
    options: [
      { id: 'A', text: '50 meter' },
      { id: 'B', text: '500 meter' },
      { id: 'C', text: '5 kilometer' },
      { id: 'D', text: '50 kilometer' }
    ],
    correctAnswer: 'B',
    explanation: '1 cm * 50.000 = 50.000 cm = 500 meter.'
  },
  {
    id: 'geq-8',
    subjectId: 'geografi',
    topicTag: 'Penginderaan Jauh',
    difficulty: 'Sedang',
    question: 'Alat perekam objek di permukaan bumi tanpa kontak langsung dalam penginderaan jauh disebut...',
    options: [
      { id: 'A', text: 'Sensor' },
      { id: 'B', text: 'Citra' },
      { id: 'C', text: 'Platform' },
      { id: 'D', text: 'Detektor' }
    ],
    correctAnswer: 'A',
    explanation: 'Sensor adalah alat perekam gelombang elektromagnetik yang dipantulkan atau dipancarkan oleh objek.'
  },
  {
    id: 'geq-9',
    subjectId: 'geografi',
    topicTag: 'SIG (Sistem Informasi Geografis)',
    difficulty: 'Sedang',
    question: 'Komponen SIG yang berfungsi mengolah, menganalisis, dan menyajikan data spasial adalah...',
    options: [
      { id: 'A', text: 'Perangkat keras (Hardware) dan Perangkat lunak (Software) serta Manusia' },
      { id: 'B', text: 'Citra satelit' },
      { id: 'C', text: 'Peta tematik' },
      { id: 'D', text: 'GPS receiver' }
    ],
    correctAnswer: 'A',
    explanation: 'SIG memadukan hardware, software, data spasial, dan brainware untuk analisis geografis.'
  },
  {
    id: 'geq-10',
    subjectId: 'geografi',
    topicTag: 'Demografi',
    difficulty: 'Sedang',
    question: 'Angka yang menunjukkan jumlah bayi yang lahir hidup per 1,000 penduduk dalam waktu satu tahun disebut...',
    options: [
      { id: 'A', text: 'Angka Kematian Kasar (CDR)' },
      { id: 'B', text: 'Angka Kelahiran Kasar (CBR)' },
      { id: 'C', text: 'Pertumbuhan penduduk alami' },
      { id: 'D', text: 'Rasio jenis kelamin' }
    ],
    correctAnswer: 'B',
    explanation: 'CBR (Crude Birth Rate) adalah angka kelahiran kasar per 1.000 penduduk.'
  },
  {
    id: 'geq-11',
    subjectId: 'geografi',
    topicTag: 'Wilayah & Perencanaan',
    difficulty: 'Sedang',
    question: 'Teori tempat pusat (Central Place Theory) yang membagi wilayah pelayanan menjadi hirarki 3 (K=3) dikemukakan oleh...',
    options: [
      { id: 'A', text: 'W. Christaller' },
      { id: 'B', text: 'A. Losch' },
      { id: 'C', text: 'E.W. Burgess' },
      { id: 'D', text: 'H. Hoyt' }
    ],
    correctAnswer: 'A',
    explanation: 'Walter Christaller mengembangkan Teori Tempat Pusat dengan asas pasar K=3.'
  },
  {
    id: 'geq-12',
    subjectId: 'geografi',
    topicTag: 'Pariwisata & SDA',
    difficulty: 'Mudah',
    question: 'Sumber daya alam yang dapat diperbaharui (renewable resources) contohnya adalah...',
    options: [
      { id: 'A', text: 'Minyak bumi dan gas alam' },
      { id: 'B', text: 'Batubara' },
      { id: 'C', text: 'Air, tanah, dan hutan' },
      { id: 'D', text: 'Biji besi' }
    ],
    correctAnswer: 'C',
    explanation: 'Air, tumbuhan, hewan, dan udara adalah contoh sumber daya alam terbarukan.'
  },
  {
    id: 'geq-13',
    subjectId: 'geografi',
    topicTag: 'Mitigasi Bencana',
    difficulty: 'Sedang',
    question: 'Tindakan mitigasi bencana gempa bumi saat terjadi guncangan di dalam ruangan adalah...',
    options: [
      { id: 'A', text: 'Berlari secepatnya menggunakan lift' },
      { id: 'B', text: 'Berlindung di bawah meja yang kokoh dan melindungi kepala' },
      { id: 'C', text: 'Berdiri di dekat jendela kaca' },
      { id: 'D', text: 'Tetap diam di tempat tidur tanpa pelindung' }
    ],
    correctAnswer: 'B',
    explanation: 'Drop, Cover, and Hold On: Berlindung di bawah meja kokoh untuk menghindari jatuhnya reruntuhan.'
  },
  {
    id: 'geq-14',
    subjectId: 'geografi',
    topicTag: 'Oceanografi',
    difficulty: 'Sedang',
    question: 'Arus laut panas yang mengalir di perairan Indonesia dan menjadi jalur migrasi ikan adalah...',
    options: [
      { id: 'A', text: 'Arus Arlindo (Arus Lintas Indonesia)' },
      { id: 'B', text: 'Arus Teluk (Gulf Stream)' },
      { id: 'C', text: 'Arus Labrador' },
      { id: 'D', text: 'Arus Oyashio' }
    ],
    correctAnswer: 'A',
    explanation: 'Arlindo menghubungkan massa air Samudera Pasifik ke Samudera Hindia melalui perairan nusantara.'
  },
  {
    id: 'geq-15',
    subjectId: 'geografi',
    topicTag: 'Pedosfer',
    difficulty: 'Sedang',
    question: 'Jenis tanah yang sangat subur di Indonesia yang terbentuk dari endapan material vulkanik gunung berapi adalah...',
    options: [
      { id: 'A', text: 'Tanah Laterit' },
      { id: 'B', text: 'Tanah Vulkanik (Andosol)' },
      { id: 'C', text: 'Tanah Gambut' },
      { id: 'D', text: 'Tanah Podzolik' }
    ],
    correctAnswer: 'B',
    explanation: 'Tanah vulkanik kaya unsur hara akibat abu vulkanik letusan gunung berapi.'
  },
  {
    id: 'geq-16',
    subjectId: 'geografi',
    topicTag: 'Planit Bumi',
    difficulty: 'Mudah',
    question: 'Bentuk bumi yang tidak bulat sempurna melainkan pepat di bagian kutub dan menggelembung di khatulistiwa disebut...',
    options: [
      { id: 'A', text: 'Silinder' },
      { id: 'B', text: 'Geoid (Ellipsoid rotasi)' },
      { id: 'C', text: 'Bola sempurna' },
      { id: 'D', text: 'Kubus' }
    ],
    correctAnswer: 'B',
    explanation: 'Bumi berbentuk geoid akibat gaya sentrifugal rotasi bumi.'
  },
  {
    id: 'geq-17',
    subjectId: 'geografi',
    topicTag: 'Penginderaan Jauh',
    difficulty: 'Sulit',
    question: 'Dalam citra penginderaan jauh, objek air jernih pada spektrum gelombang tampak akan tampak berwarna gelap karena...',
    options: [
      { id: 'A', text: 'Menyerap sebagian besar tenaga inframerah dan memantulkan sedikit cahaya' },
      { id: 'B', text: 'Memantulkan seluruh sinar matahari' },
      { id: 'C', text: 'Memiliki pantulan spektral yang sangat tinggi' },
      { id: 'D', text: 'Sifat air selalu memancarkan cahaya sendiri' }
    ],
    correctAnswer: 'A',
    explanation: 'Air jernih menyerap gelombang elektromagnetik (terutama inframerah), sehingga pada citra tampak gelap.'
  },
  {
    id: 'geq-18',
    subjectId: 'geografi',
    topicTag: 'Klimatologi',
    difficulty: 'Sedang',
    question: 'Menurut klasifikasi iklim Junghuhn, zona dengan ketinggian 0 - 650 meter di atas permukaan laut dan suhu rata-rata panas disebut zona...',
    options: [
      { id: 'A', text: 'Panas (Tropis)' },
      { id: 'B', text: 'Sedang' },
      { id: 'C', text: 'Sejuk' },
      { id: 'D', text: 'Dingin' }
    ],
    correctAnswer: 'A',
    explanation: 'Zona panas (0 - 650 m) ditanami padi, kelapa, dan tebu.'
  },
  {
    id: 'geq-19',
    subjectId: 'geografi',
    topicTag: 'Geopolitik',
    difficulty: 'Sedang',
    question: 'Konsep Wawasan Nusantara menempatkan wilayah laut antar pulau di Indonesia sebagai...',
    options: [
      { id: 'A', text: 'Pemisah daratan dan pembatas wilayah' },
      { id: 'B', text: 'Penyatu wilayah daratan nusantara' },
      { id: 'C', text: 'Wilayah bebas internasional' },
      { id: 'D', text: 'Daerah terlarang pelayaran' }
    ],
    correctAnswer: 'B',
    explanation: 'Wawasan Nusantara memandang laut sebagai penghubung dan pemersatu wilayah kepulauan Indonesia.'
  },
  {
    id: 'geq-20',
    subjectId: 'geografi',
    topicTag: 'SIG',
    difficulty: 'Sedang',
    question: 'Overlay (tumpang susun) peta jenis tanah, peta kemiringan lereng, dan peta curah hujan dalam SIG biasanya digunakan untuk menganalisis...',
    options: [
      { id: 'A', text: 'Tingkat kerawanan bencana erosi / longsor' },
      { id: 'B', text: 'Jumlah penduduk miskin' },
      { id: 'C', text: 'Jaringan transportasi darat' },
      { id: 'D', text: 'Sebaran industri tekstil' }
    ],
    correctAnswer: 'A',
    explanation: 'Overlay peta tanah, lereng, dan hujan digunakan untuk evaluasi kemampuan lahan dan risiko erosi.'
  },
  {
    id: 'geq-21',
    subjectId: 'geografi',
    topicTag: 'Demografi',
    difficulty: 'Sulit',
    question: 'Piramida penduduk bentuk "Stasioner" (granat) menunjukkan kondisi demografi dengan ciri...',
    options: [
      { id: 'A', text: 'Angka kelahiran dan kematian seimbang, pertumbuhan penduduk lambat/tetap' },
      { id: 'B', text: 'Angka kelahiran sangat tinggi' },
      { id: 'C', text: 'Angka kematian sangat tinggi di usia muda' },
      { id: 'D', text: 'Jumlah anak-anak mendominasi secara ekstrem' }
    ],
    correctAnswer: 'A',
    explanation: 'Piramida stasioner menunjukkan kelahiran dan kematian seimbang (ciri negara maju).'
  },
  {
    id: 'geq-22',
    subjectId: 'geografi',
    topicTag: 'Sumber Daya Alam',
    difficulty: 'Sedang',
    question: 'Prinsip pembangunan berkelanjutan (sustainable development) menekankan pada...',
    options: [
      { id: 'A', text: 'Eksploitasi sumber daya semaksimal mungkin demi pertumbuhan ekonomi instan' },
      { id: 'B', text: 'Memenuhi kebutuhan generasi masa kini tanpa mengorbankan kebutuhan generasi masa depan' },
      { id: 'C', text: 'Menghentikan seluruh kegiatan industri pertambangan' },
      { id: 'D', text: 'Menjaga kelestarian alam tanpa memanfaatkan sumber daya' }
    ],
    correctAnswer: 'B',
    explanation: 'Definisi pembangunan berkelanjutan menurut Brundtland Report adalah pemenuhan kebutuhan kini tanpa mengorbankan masa depan.'
  },
  {
    id: 'geq-23',
    subjectId: 'geografi',
    topicTag: 'Geomorfologi',
    difficulty: 'Sedang',
    question: 'Bentuk muka bumi berupa delta yang terbentuk di muara sungai diakibatkan oleh proses...',
    options: [
      { id: 'A', text: 'Erosi air sungai' },
      { id: 'B', text: 'Sedimentasi material aluvial oleh sungai saat memasuki laut' },
      { id: 'C', text: 'Abrasi gelombang air laut' },
      { id: 'D', text: 'Patahan tektonik lempeng' }
    ],
    correctAnswer: 'B',
    explanation: 'Delta terbentuk akibat sedimentasi endapan lumpur dan pasir yang dibawa sungai di muara.'
  },
  {
    id: 'geq-24',
    subjectId: 'geografi',
    topicTag: 'Tata Guna Lahan',
    difficulty: 'Sedang',
    question: 'Teori konsentris (Concentric Zone Theory) perkembangan kota yang dikemukakan oleh E.W. Burgess membagi zona kota dari pusat keluar berupa...',
    options: [
      { id: 'A', text: 'Zona lingkaran konsentris (CBD, zona transisi, pemukiman buruh, pemukiman mewah, pengaju)' },
      { id: 'B', text: 'Zona sektoral menyerupai kue tart' },
      { id: 'C', text: 'Zona banyak inti' },
      { id: 'D', text: 'Zona linier sepanjang rel kereta' }
    ],
    correctAnswer: 'A',
    explanation: 'Teori konsentris Burgess membagi kota dalam bentuk gelang/lingkaran konsentris.'
  },
  {
    id: 'geq-25',
    subjectId: 'geografi',
    topicTag: 'Mitigasi Bencana',
    difficulty: 'Sedang',
    question: 'Tsunami umumnya dibangkitkan oleh gempa bumi tektonik di dasar laut dengan karakteristik pergerakan lempeng berupa...',
    options: [
      { id: 'A', text: 'Patahan mendatar (strike-slip fault)' },
      { id: 'B', text: 'Patahan naik atau turun vertikal (dip-slip / subduksi)' },
      { id: 'C', text: 'Tumbukan lempeng benua dengan benua' },
      { id: 'D', text: 'Aktivitas vulkanik daratan' }
    ],
    correctAnswer: 'B',
    explanation: 'Gempa sesar naik/turun di zona subduksi dasar laut mendesak kolom air laut vertikal membentuk gelombang tsunami.'
  },
  {
    id: 'geq-26',
    subjectId: 'geografi',
    topicTag: 'Biosfer',
    difficulty: 'Sedang',
    question: 'Bioma di bumi yang dicirikan dengan curah hujan sangat rendah, tumbuhan xerofit (kaktus), dan amplitudo suhu harian yang ekstrem adalah...',
    options: [
      { id: 'A', text: 'Tundra' },
      { id: 'B', text: 'Gurun (Desert)' },
      { id: 'C', text: 'Taiga' },
      { id: 'D', text: 'Sabana' }
    ],
    correctAnswer: 'B',
    explanation: 'Bioma gurun memiliki curah hujan minim dan vegetasi kaktus.'
  },
  {
    id: 'geq-27',
    subjectId: 'geografi',
    topicTag: 'Kartografi',
    difficulty: 'Sulit',
    question: 'Jarak antara kota A dan B pada peta bersekala 1 : 100.000 adalah 5 cm. Jarak sebenarnya di lapangan adalah...',
    options: [
      { id: 'A', text: '0.5 km' },
      { id: 'B', text: '5 km' },
      { id: 'C', text: '50 km' },
      { id: 'D', text: '500 km' }
    ],
    correctAnswer: 'B',
    explanation: '5 cm * 100.000 = 500.000 cm = 5.000 meter = 5 kilometer.'
  },
  {
    id: 'geq-28',
    subjectId: 'geografi',
    topicTag: 'Atmosfer',
    difficulty: 'Sulit',
    question: 'Fenomena El Nino di Samudera Pasifik umumnya berdampak pada wilayah Indonesia berupa...',
    options: [
      { id: 'A', text: 'Musim hujan ekstrem dan banjir bandang' },
      { id: 'B', text: 'Musim kemarau panjang dan kekeringan' },
      { id: 'C', text: 'Peningkatan suhu air laut secara merata' },
      { id: 'D', text: 'Hilangnya angin muson barat' }
    ],
    correctAnswer: 'B',
    explanation: 'El Nino memicu kekeringan dan musim kemarau panjang di wilayah Indonesia.'
  },
  {
    id: 'geq-29',
    subjectId: 'geografi',
    topicTag: 'Kelautan',
    difficulty: 'Sedang',
    question: 'Kawasan laut Indonesia yang diukur dari garis pantai dasar sejauh 200 mil laut ke laut bebas disebut Zona...',
    options: [
      { id: 'A', text: 'Laut Teritorial' },
      { id: 'B', text: 'Landas Kontinen' },
      { id: 'C', text: 'Zona Ekonomi Eksklusif (ZEE)' },
      { id: 'D', text: 'Laut Lepas' }
    ],
    correctAnswer: 'C',
    explanation: 'ZEE (Zona Ekonomi Eksklusif) seluas 200 mil laut memberikan hak berdaulat pengoperasian SDA bagi negara pantai.'
  },
  {
    id: 'geq-30',
    subjectId: 'geografi',
    topicTag: 'Interaksi Desa Kota',
    difficulty: 'Sedang',
    question: 'Menurut hukum interaksi wilayah (Grafik interaksi / hukum gravitasi Reilly), kekuatan interaksi antara dua wilayah berbanding lurus dengan...',
    options: [
      { id: 'A', text: 'Kuadrat jarak kedua wilayah' },
      { id: 'B', text: 'Jumlah penduduk kedua wilayah dan berbanding terbalik dengan kuadrat jarak' },
      { id: 'C', text: 'Luas wilayah kota' },
      { id: 'D', text: 'Pendapatan per kapita penduduk' }
    ],
    correctAnswer: 'B',
    explanation: 'Hukum Gravitasi Reilly: I_AB = k * (P_A * P_B) / (d_AB)^2.'
  }
];
