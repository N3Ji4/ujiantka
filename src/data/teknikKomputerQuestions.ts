import { Question } from '../types';

export const teknikKomputerQuestions: Question[] = [
  {
    id: 'tkq-1',
    subjectId: 'teknik_komputer',
    topicTag: 'Arsitektur Komputer',
    difficulty: 'Mudah',
    question: 'Bagian dari CPU yang berfungsi untuk melakukan perhitungan aritmatika dan logika adalah...',
    options: [
      { id: 'A', text: 'ALU (Arithmetic Logic Unit)' },
      { id: 'B', text: 'Control Unit' },
      { id: 'C', text: 'Cache Memory' },
      { id: 'D', text: 'ROM BIOS' }
    ],
    correctAnswer: 'A',
    explanation: 'ALU bertanggung jawab atas operasi matematika dasar dan perbandingan logika dalam instruksi CPU.'
  },
  {
    id: 'tkq-2',
    subjectId: 'teknik_komputer',
    topicTag: 'Jaringan',
    difficulty: 'Sedang',
    question: 'Dalam Model OSI, protokol TCP dan UDP bekerja pada layer ke berapa?',
    options: [
      { id: 'A', text: 'Layer 2 (Data Link)' },
      { id: 'B', text: 'Layer 3 (Network)' },
      { id: 'C', text: 'Layer 4 (Transport)' },
      { id: 'D', text: 'Layer 7 (Application)' }
    ],
    correctAnswer: 'C',
    explanation: 'TCP dan UDP adalah protokol Transport Layer yang mengatur keandalan dan pengiriman segmen data end-to-end.'
  },
  {
    id: 'tkq-3',
    subjectId: 'teknik_komputer',
    topicTag: 'Sistem Operasi',
    difficulty: 'Sulit',
    question: 'Kondisi di mana sekumpulan proses saling menunggu sumber daya yang sedang dipegang oleh proses lain sehingga tidak ada proses yang dapat berjalan disebut...',
    options: [
      { id: 'A', text: 'Starvation' },
      { id: 'B', text: 'Deadlock' },
      { id: 'C', text: 'Thrashing' },
      { id: 'D', text: 'Context Switching' }
    ],
    correctAnswer: 'B',
    explanation: 'Deadlock terjadi ketika empat syarat (Mutual exclusion, Hold & wait, No preemption, Circular wait) terpenuhi secara simultan.'
  },
  {
    id: 'tkq-4',
    subjectId: 'teknik_komputer',
    topicTag: 'Jaringan',
    difficulty: 'Sedang',
    question: 'Berapa jumlah host yang dapat digunakan pada subnet dengan prefiks /26 (IP v4)?',
    mathFormula: '2^{32 - 26} - 2 = 2^6 - 2 = 64 - 2',
    options: [
      { id: 'A', text: '30 host' },
      { id: 'B', text: '62 host' },
      { id: 'C', text: '126 host' },
      { id: 'D', text: '254 host' }
    ],
    correctAnswer: 'B',
    explanation: 'Sisa bit host = 32 - 26 = 6 bit. Jumlah IP = 2^6 = 64. Dikurangi 1 network ID dan 1 broadcast ID, jadi 64 - 2 = 62 host.'
  },
  {
    id: 'tkq-5',
    subjectId: 'teknik_komputer',
    topicTag: 'Jaringan',
    difficulty: 'Sedang',
    question: 'Alamat IP 192.168.1.1 termasuk dalam kelas IP address berapa?',
    options: [
      { id: 'A', text: 'Kelas A' },
      { id: 'B', text: 'Kelas B' },
      { id: 'C', text: 'Kelas C' },
      { id: 'D', text: 'Kelas D' }
    ],
    correctAnswer: 'C',
    explanation: 'Kelas C memiliki rentang oktet pertama 192 hingga 223, dengan subnet mask default 255.255.255.0.'
  },
  {
    id: 'tkq-6',
    subjectId: 'teknik_komputer',
    topicTag: 'Arsitektur Komputer',
    difficulty: 'Sedang',
    question: 'Memori internal berkecepatan tinggi yang terletak di antara CPU dan RAM utama untuk mempercepat akses data disebut...',
    options: [
      { id: 'A', text: 'Hard Disk Drive (HDD)' },
      { id: 'B', text: 'Cache Memory (L1/L2/L3)' },
      { id: 'C', text: 'Flash Drive' },
      { id: 'D', text: 'CMOS RAM' }
    ],
    correctAnswer: 'B',
    explanation: 'Cache memory menyimpan salinan data yang sering diakses dari RAM utama untuk memangkas waktu tunggu CPU.'
  },
  {
    id: 'tkq-7',
    subjectId: 'teknik_komputer',
    topicTag: 'Sistem Operasi',
    difficulty: 'Sedang',
    question: 'Perintah pada sistem operasi Linux/Unix untuk mengubah hak akses (permissions) suatu file atau direktori adalah...',
    options: [
      { id: 'A', text: 'chmod' },
      { id: 'B', text: 'chown' },
      { id: 'C', text: 'grep' },
      { id: 'D', text: 'ps aux' }
    ],
    correctAnswer: 'A',
    explanation: '`chmod` (change mode) digunakan untuk mengatur izin baca (r), tulis (w), dan eksekusi (x) bagi user, group, dan others.'
  },
  {
    id: 'tkq-8',
    subjectId: 'teknik_komputer',
    topicTag: 'Jaringan',
    difficulty: 'Sulit',
    question: 'Perangkat jaringan yang bekerja pada Layer 3 (Network Layer) dari model OSI dan berfungsi meneruskan paket antar jaringan berbeda adalah...',
    options: [
      { id: 'A', text: 'Hub' },
      { id: 'B', text: 'Switch Layer 2' },
      { id: 'C', text: 'Router' },
      { id: 'D', text: 'Repeater' }
    ],
    correctAnswer: 'C',
    explanation: 'Router beroperasi pada Layer 3 untuk melakukan routing paket berdasarkan alamat IP tujuan.'
  },
  {
    id: 'tkq-9',
    subjectId: 'teknik_komputer',
    topicTag: 'Keamanan Jaringan',
    difficulty: 'Sedang',
    question: 'Protokol jaringan yang mengenkripsi seluruh komunikasi jarak jauh secara aman (menggantikan Telnet) pada port 22 adalah...',
    options: [
      { id: 'A', text: 'HTTP' },
      { id: 'B', text: 'SSH (Secure Shell)' },
      { id: 'C', text: 'FTP' },
      { id: 'D', text: 'SMTP' }
    ],
    correctAnswer: 'B',
    explanation: 'SSH menyediakan saluran aman terenkripsi untuk pengelolaan jarak jauh pada port 22.'
  },
  {
    id: 'tkq-10',
    subjectId: 'teknik_komputer',
    topicTag: 'Troubleshooting',
    difficulty: 'Sedang',
    question: 'Perintah utilitas jaringan (CLI) yang digunakan untuk melacak jalur paket yang dilewati menuju host tujuan adalah...',
    options: [
      { id: 'A', text: 'ping' },
      { id: 'B', text: 'traceroute / tracert' },
      { id: 'C', text: 'ipconfig / ifconfig' },
      { id: 'D', text: 'netstat' }
    ],
    correctAnswer: 'B',
    explanation: 'Traceroute melacak setiap hop router yang dilalui paket data dari sumber ke tujuan.'
  },
  {
    id: 'tkq-11',
    subjectId: 'teknik_komputer',
    topicTag: 'Jaringan',
    difficulty: 'Sedang',
    question: 'Berapakah subnet mask yang sesuai dengan prefiks /28 pada IPv4?',
    options: [
      { id: 'A', text: '255.255.255.128' },
      { id: 'B', text: '255.255.255.192' },
      { id: 'C', text: '255.255.255.240' },
      { id: 'D', text: '255.255.255.248' }
    ],
    correctAnswer: 'C',
    explanation: 'Prefiks /28 berarti 28 bit network dan 4 bit host. 4 bit terakhir bernilai 11110000 dalam biner, yaitu 240 dalam desimal (255.255.255.240).'
  },
  {
    id: 'tkq-12',
    subjectId: 'teknik_komputer',
    topicTag: 'Sistem Operasi',
    difficulty: 'Mudah',
    question: 'Manajemen memori virtual dalam sistem operasi menggunakan teknik pemindahan halaman memori antara RAM dan penyimpanan sekunder disebut...',
    options: [
      { id: 'A', text: 'Paging / Swapping' },
      { id: 'B', text: 'Caching' },
      { id: 'C', text: 'Spooling' },
      { id: 'D', text: 'Fragmentation' }
    ],
    correctAnswer: 'A',
    explanation: 'Paging dan swapping memungkinkan OS memperluas kapasitas memori fisik menggunakan ruang swap/page file pada disk.'
  },
  {
    id: 'tkq-13',
    subjectId: 'teknik_komputer',
    topicTag: 'Arsitektur Komputer',
    difficulty: 'Sedang',
    question: 'Komponen pada motherboard yang menghubungkan CPU, RAM, dan kartu grafis berkecepatan tinggi pada arsitektur chipset tradisional disebut...',
    options: [
      { id: 'A', text: 'Northbridge' },
      { id: 'B', text: 'Southbridge' },
      { id: 'C', text: 'BIOS Chip' },
      { id: 'D', text: 'Super I/O' }
    ],
    correctAnswer: 'A',
    explanation: 'Northbridge menangani komunikasi berkecepatan tinggi antara CPU, RAM, dan GPU (pada arsitektur lama).'
  },
  {
    id: 'tkq-14',
    subjectId: 'teknik_komputer',
    topicTag: 'Jaringan',
    difficulty: 'Sedang',
    question: 'Protokol pada Layer 7 (Application) yang otomatis mendistribusikan alamat IP kepada perangkat klien dalam jaringan adalah...',
    options: [
      { id: 'A', text: 'DNS' },
      { id: 'B', text: 'DHCP (Dynamic Host Configuration Protocol)' },
      { id: 'C', text: 'FTP' },
      { id: 'D', text: 'SNMP' }
    ],
    correctAnswer: 'B',
    explanation: 'DHCP secara otomatis menyewakan konfigurasi IP, subnet mask, gateway, dan DNS ke perangkat klien.'
  },
  {
    id: 'tkq-15',
    subjectId: 'teknik_komputer',
    topicTag: 'Keamanan Jaringan',
    difficulty: 'Sedang',
    question: 'Teknologi yang menerjemahkan alamat IP privat lokal menjadi satu atau beberapa alamat IP publik agar dapat mengakses internet adalah...',
    options: [
      { id: 'A', text: 'NAT (Network Address Translation)' },
      { id: 'B', text: 'VLAN' },
      { id: 'C', text: 'STP (Spanning Tree Protocol)' },
      { id: 'D', text: 'ARP' }
    ],
    correctAnswer: 'A',
    explanation: 'NAT memungkinkan beberapa perangkat ber-IP privat berbagi satu IP publik untuk koneksi internet.'
  },
  {
    id: 'tkq-16',
    subjectId: 'teknik_komputer',
    topicTag: 'Sistem Operasi',
    difficulty: 'Mudah',
    question: 'Perintah dasar Linux untuk melihat daftar file dan direktori secara lengkap (termasuk file tersembunyi dan izin akses) adalah...',
    options: [
      { id: 'A', text: 'ls -la' },
      { id: 'B', text: 'cd ..' },
      { id: 'C', text: 'pwd' },
      { id: 'D', text: 'mkdir' }
    ],
    correctAnswer: 'A',
    explanation: '`ls -la` menampilkan seluruh file (l = long format, a = all/hidden) beserta izin kepemilikan dan ukuran.'
  },
  {
    id: 'tkq-17',
    subjectId: 'teknik_komputer',
    topicTag: 'Jaringan',
    difficulty: 'Sulit',
    question: 'Protokol routing dinamis yang menggunakan algoritma State-Link (Dijkstra) dan membagi jaringan ke dalam area-area adalah...',
    options: [
      { id: 'A', text: 'RIP (Routing Information Protocol)' },
      { id: 'B', text: 'OSPF (Open Shortest Path First)' },
      { id: 'C', text: 'BGP' },
      { id: 'D', text: 'PPP' }
    ],
    correctAnswer: 'B',
    explanation: 'OSPF adalah protokol routing interior berbasis link-state yang sangat efisien dan menggunakan algoritma Dijkstra.'
  },
  {
    id: 'tkq-18',
    subjectId: 'teknik_komputer',
    topicTag: 'Arsitektur Komputer',
    difficulty: 'Sedang',
    question: 'Jenis memori non-volatile yang dapat dihapus dan diprogram ulang secara elektronik, banyak digunakan pada SSD dan flash drive, adalah...',
    options: [
      { id: 'A', text: 'SRAM' },
      { id: 'B', text: 'DRAM' },
      { id: 'C', text: 'NAND Flash Memory' },
      { id: 'D', text: 'ROM Mask' }
    ],
    correctAnswer: 'C',
    explanation: 'NAND Flash memory menyimpan data secara persisten tanpa daya listrik, dasar dari teknologi Solid State Drive (SSD).'
  },
  {
    id: 'tkq-19',
    subjectId: 'teknik_komputer',
    topicTag: 'Jaringan',
    difficulty: 'Sedang',
    question: 'Fungsi utama dari VLAN (Virtual Local Area Network) pada switch managed adalah...',
    options: [
      { id: 'A', text: 'Meningkatkan kapasitas daya listrik switch' },
      { id: 'B', text: 'Memecah jaringan fisik tunggal menjadi beberapa domain siaran (broadcast domain) secara logis' },
      { id: 'C', text: 'Menggantikan fungsi router sepenuhnya' },
      { id: 'D', text: 'Mempercepat kabel tembaga' }
    ],
    correctAnswer: 'B',
    explanation: 'VLAN memisahkan lalu lintas broadcast secara logis pada switch yang sama untuk meningkatkan keamanan dan efisiensi.'
  },
  {
    id: 'tkq-20',
    subjectId: 'teknik_komputer',
    topicTag: 'Sistem Operasi',
    difficulty: 'Sedang',
    question: 'Keadaan di mana CPU terlalu sering melakukan paging (pertukaran halaman memori ke disk) sehingga kinerja sistem sangat lambat disebut...',
    options: [
      { id: 'A', text: 'Thrashing' },
      { id: 'B', text: 'Deadlock' },
      { id: 'C', text: 'Multitasking' },
      { id: 'D', text: 'Starvation' }
    ],
    correctAnswer: 'A',
    explanation: 'Thrashing terjadi ketika memori fisik tidak cukup, menyebabkan sistem menghabiskan sebagian besar waktunya melakukan paging.'
  },
  {
    id: 'tkq-21',
    subjectId: 'teknik_komputer',
    topicTag: 'Jaringan',
    difficulty: 'Sedang',
    question: 'Port standar yang digunakan oleh protokol HTTPS (Secure Web Browsing) adalah...',
    options: [
      { id: 'A', text: 'Port 80' },
      { id: 'B', text: 'Port 443' },
      { id: 'C', text: 'Port 21' },
      { id: 'D', text: 'Port 53' }
    ],
    correctAnswer: 'B',
    explanation: 'HTTPS menggunakan port 443 untuk enkripsi SSL/TLS, sedangkan HTTP standar menggunakan port 80.'
  },
  {
    id: 'tkq-22',
    subjectId: 'teknik_komputer',
    topicTag: 'Troubleshooting',
    difficulty: 'Mudah',
    question: 'Perintah pada Windows Command Prompt untuk melihat konfigurasi IP komputer saat ini adalah...',
    options: [
      { id: 'A', text: 'ipconfig' },
      { id: 'B', text: 'ifconfig' },
      { id: 'C', text: 'route print' },
      { id: 'D', text: 'netstat -an' }
    ],
    correctAnswer: 'A',
    explanation: '`ipconfig` menampilkan informasi alamat IP, subnet mask, dan default gateway pada sistem operasi Windows.'
  },
  {
    id: 'tkq-23',
    subjectId: 'teknik_komputer',
    topicTag: 'Arsitektur Komputer',
    difficulty: 'Sedang',
    question: 'Satuan ukuran kecepatan clock prosesor modern dalam siklus per detik adalah...',
    options: [
      { id: 'A', text: 'Byte' },
      { id: 'B', text: 'Hertz (GHz / MHz)' },
      { id: 'C', text: 'Watt' },
      { id: 'D', text: 'RPM' }
    ],
    correctAnswer: 'B',
    explanation: 'Kecepatan clock CPU diukur dalam Gigahertz (GHz), menyatakan miliaran siklus clock per detik.'
  },
  {
    id: 'tkq-24',
    subjectId: 'teknik_komputer',
    topicTag: 'Jaringan',
    difficulty: 'Sulit',
    question: 'Berapakah jumlah host yang valid pada subnet IP 192.168.10.0 dengan netmask 255.255.255.224 (/27)?',
    mathFormula: '2^{32 - 27} - 2 = 2^5 - 2 = 32 - 2',
    options: [
      { id: 'A', text: '14 host' },
      { id: 'B', text: '30 host' },
      { id: 'C', text: '62 host' },
      { id: 'D', text: '126 host' }
    ],
    correctAnswer: 'B',
    explanation: 'Subnet /27 menyisakan 5 bit host (32 - 27 = 5). Total IP = 2^5 = 32. Host valid = 32 - 2 = 30 host.'
  },
  {
    id: 'tkq-25',
    subjectId: 'teknik_komputer',
    topicTag: 'Sistem Operasi',
    difficulty: 'Sedang',
    question: 'Proses penjadwalan CPU di mana setiap proses diberi jatah waktu (time quantum) yang sama secara bergiliran disebut...',
    options: [
      { id: 'A', text: 'First-Come, First-Served (FCFS)' },
      { id: 'B', text: 'Round Robin (RR)' },
      { id: 'C', text: 'Shortest Job First (SJF)' },
      { id: 'D', text: 'Priority Scheduling' }
    ],
    correctAnswer: 'B',
    explanation: 'Round Robin menggunakan time quantum (slice) untuk memberikan giliran yang adil kepada setiap proses.'
  },
  {
    id: 'tkq-26',
    subjectId: 'teknik_komputer',
    topicTag: 'Jaringan',
    difficulty: 'Mudah',
    question: 'Kabel UTP (Unshielded Twisted Pair) untuk menghubungkan komputer langsung ke switch (straight-through) menggunakan standar susunan pin...',
    options: [
      { id: 'A', text: 'T568A di kedua ujung atau T568B di kedua ujung' },
      { id: 'B', text: 'T568A di satu ujung dan T568B di ujung lain' },
      { id: 'C', text: 'Hanya pin 1 dan 2' },
      { id: 'D', text: 'Kabel koaksial' }
    ],
    correctAnswer: 'A',
    explanation: 'Kabel straight-through menggunakan standar urutan warna yang sama di kedua ujungnya (biasanya T568B - T568B).'
  },
  {
    id: 'tkq-27',
    subjectId: 'teknik_komputer',
    topicTag: 'Keamanan Jaringan',
    difficulty: 'Sedang',
    question: 'Sistem keamanan jaringan yang memantau lalu lintas masuk dan keluar serta memblokir paket berdasarkan aturan (rules) yang ditetapkan disebut...',
    options: [
      { id: 'A', text: 'Firewall' },
      { id: 'B', text: 'Repeater' },
      { id: 'C', text: 'Bridge' },
      { id: 'D', text: 'Hub' }
    ],
    correctAnswer: 'A',
    explanation: 'Firewall bertindak sebagai pos pemeriksaan keamanan untuk menyaring lalu lintas jaringan yang mencurigakan.'
  },
  {
    id: 'tkq-28',
    subjectId: 'teknik_komputer',
    topicTag: 'Sistem Operasi',
    difficulty: 'Sedang',
    question: 'Perintah Linux untuk menghentikan proses yang sedang berjalan berdasarkan ID proses (PID) adalah...',
    options: [
      { id: 'A', text: 'kill <PID>' },
      { id: 'B', text: 'stop <PID>' },
      { id: 'C', text: 'rm -rf <PID>' },
      { id: 'D', text: 'halt <PID>' }
    ],
    correctAnswer: 'A',
    explanation: 'Perintah `kill` (atau `kill -9`) mengirimkan sinyal penghentian ke proses berdasarkan Process ID.'
  },
  {
    id: 'tkq-29',
    subjectId: 'teknik_komputer',
    topicTag: 'Jaringan',
    difficulty: 'Sedang',
    question: 'Alamat MAC (Media Access Control) pada kartu jaringan (NIC) memiliki panjang bit sepanjang...',
    options: [
      { id: 'A', text: '32 bit' },
      { id: 'B', text: '48 bit' },
      { id: 'C', text: '64 bit' },
      { id: 'D', text: '128 bit' }
    ],
    correctAnswer: 'B',
    explanation: 'Alamat MAC adalah alamat fisik unik sepanjang 48 bit (biasanya ditulis dalam 6 pasangan heksadesimal).'
  },
  {
    id: 'tkq-30',
    subjectId: 'teknik_komputer',
    topicTag: 'Arsitektur Komputer',
    difficulty: 'Sedang',
    question: 'Jenis arsitektur komputer di mana memori data dan memori instruksi program disatukan dalam satu ruang memori fisik disebut arsitektur...',
    options: [
      { id: 'A', text: 'Von Neumann' },
      { id: 'B', text: 'Harvard' },
      { id: 'C', text: 'RISC' },
      { id: 'D', text: 'CISC' }
    ],
    correctAnswer: 'A',
    explanation: 'Arsitektur Von Neumann menggunakan bus tunggal dan ruang memori bersama untuk instruksi dan data.'
  }
];
