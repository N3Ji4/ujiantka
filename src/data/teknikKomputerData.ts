import { Topic } from '../types';

export const teknikKomputerTopics: Topic[] = [
  {
    id: 'tk1',
    title: 'Subnetting IPv4 & CIDR Master Guide (Trik Cepat)',
    categoryTag: 'Jaringan & Subnetting',
    summary: 'Metode kilat menghitung Subnet Mask, Netmask Prefix /24 sampai /30, Network ID, Broadcast ID, Host Valid pertama & terakhir, serta pembagian rentang IP kelas C/B.',
    conceptExplanation: 'Subnetting adalah teknik membagi satu jaringan komputer besar menjadi beberapa sub-jaringan (subnet) yang lebih kecil dan efisien. Hal ini mencegah pemborosan alamat IP publik/privat dan membatasi broadcast domain agar performa jaringan tetap kencang.',
    keyPoints: [
      'Alamat IPv4 terdiri dari 32 bit biner yang dibagi menjadi 4 oktet (masing-masing 8 bit) dipisahkan titik.',
      'Notasi CIDR (Classless Inter-Domain Routing): Ditulis dengan garis miring (/), contoh /24 = 24 bit network bernilai 1 biner (255.255.255.0).',
      'Rumus Jumlah Total IP per Subnet = 2^(32 - Prefix).',
      'Rumus Jumlah Host Valid yang Bisa Dipakai = [2^(32 - Prefix)] - 2 (dikurangi 2 karena 1 IP untuk Network ID dan 1 IP untuk Broadcast ID).',
      'Tabel Sakti Prefix Kelas C (/24 - /30):\n- /24: Mask 255.255.255.0 → Total IP = 256 → Host Valid = 254\n- /25: Mask 255.255.255.128 → Total IP = 128 → Host Valid = 126\n- /26: Mask 255.255.255.192 → Total IP = 64 → Host Valid = 62\n- /27: Mask 255.255.255.224 → Total IP = 32 → Host Valid = 30\n- /28: Mask 255.255.255.240 → Total IP = 16 → Host Valid = 14\n- /29: Mask 255.255.255.248 → Total IP = 8 → Host Valid = 6\n- /30: Mask 255.255.255.252 → Total IP = 4 → Host Valid = 2 (Khusus link point-to-point antar Router).'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Cepat 10 Detik Menghitung Network ID & Broadcast ID',
        description: 'Trik praktis tanpa konversi biner panjang untuk soal ujian.',
        steps: [
          'Langkah 1: Cari Nilai Blok Subnet = 256 dikurangi angka terakhir Subnet Mask (atau 2^(32-CIDR)). Contoh /26 → Mask 255.255.255.192 → Blok = 256 - 192 = 64.',
          'Langkah 2: Buat kelipatan blok mulai dari 0: 0, 64, 128, 192, 256.',
          'Langkah 3: Lihat oktet terakhir IP yang ditanyakan berada di rentang mana. Misal IP 192.168.1.100/26 berada di antara 64 dan 127.',
          'Langkah 4: Network ID adalah angka awal rentang (192.168.1.64).',
          'Langkah 5: Broadcast ID adalah angka terakhir rentang (192.168.1.127).',
          'Langkah 6: Host Pertama = Network ID + 1 (192.168.1.65); Host Terakhir = Broadcast ID - 1 (192.168.1.126).'
        ],
        tips: 'Ingat rumus sakti blok: Angka Blok Subnet = 256 - Nilai Mask Terakhir!'
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus Jumlah Host Valid Subnet',
        formula: '\\text{Jumlah Host} = 2^{32 - \\text{CIDR}} - 2',
        explanation: 'Selalu dikurangi 2 untuk alamat Network ID (alamat awal) dan Broadcast ID (alamat akhir).',
        variables: [
          { symbol: 'CIDR', meaning: 'Panjang prefix bit network (misal 24, 26, 27, 30)' },
          { symbol: '32 - CIDR', meaning: 'Jumlah bit host (sisa bit nol)' }
        ]
      },
      {
        title: 'Rumus Blok Subnet',
        formula: '\\text{Blok Kelipatan} = 256 - \\text{Nilai Oktet Mask Terakhir}',
        explanation: 'Menentukan titik awal dan akhir kelipatan setiap subnet.',
        variables: [
          { symbol: '256', meaning: 'Kapasitas maksimal 8-bit dalam 1 oktet (0 s.d 255)' }
        ],
        quickTip: 'Prefix /30 selalu memiliki blok 4 dengan 2 host valid (cocok untuk kabel serial antar router)!'
      }
    ],
    formulas: [
      '\\text{Jumlah Host Valid} = 2^{32 - \\text{CIDR}} - 2',
      '\\text{Blok Subnet} = 256 - \\text{Subnet Mask}',
      '\\text{Host Pertama} = \\text{Network ID} + 1',
      '\\text{Host Terakhir} = \\text{Broadcast ID} - 1'
    ],
    examples: [
      {
        problem: 'Diberikan alamat IP 192.168.10.75/27. Tentukan:\n1. Subnet Mask\n2. Network ID\n3. Broadcast ID\n4. Rentang IP Host Valid yang dapat digunakan oleh komputer client!',
        given: 'IP = 192.168.10.75, Prefix = /27',
        questionTarget: 'Subnet Mask, Network ID, Broadcast ID, dan Rentang Host',
        steps: [
          '1. Subnet Mask /27: Bit host = 32 - 27 = 5 bit. Nilai mask = 256 - 2⁵ = 256 - 32 = 224. Jadi Mask = 255.255.255.224.',
          '2. Nilai Blok Subnet = 2⁵ = 32. Kelipatan blok: 0, 32, 64, 96, 128, dst.',
          '3. Oktet terakhir IP adalah 75. Angka 75 berada di antara rentang blok 64 sampai 95 (karena blok berikutnya 96).',
          '4. Network ID = 192.168.10.64.',
          '5. Broadcast ID = 192.168.10.95.',
          '6. Host Pertama = 192.168.10.65; Host Terakhir = 192.168.10.94.'
        ],
        solution: 'Mask: 255.255.255.224 | Network ID: 192.168.10.64 | Broadcast ID: 192.168.10.95 | Rentang Host: 192.168.10.65 s.d 192.168.10.94 (Total 30 Host).'
      }
    ],
    quickTips: [
      'Alamat IP berakhiran .0 BELUM TENTU Network ID pada subnetting (contoh: pada /23, IP 192.168.1.0 adalah host valid)!',
      'Alamat IP berakhiran .255 BELUM TENTU Broadcast ID pada subnetting (contoh: pada /23, IP 192.168.0.255 adalah host valid)!'
    ]
  },
  {
    id: 'tk2',
    title: 'Model Referensi OSI 7 Layer & Protokol TCP/IP',
    categoryTag: 'Protokol & Arsitektur',
    summary: 'Fungsi rinci Lapisan OSI 1 sampai 7, enkapsulasi unit data (PDU: Data, Segment, Packet, Frame, Bits), perbedaan TCP vs UDP, serta port-port standar jaringan internet.',
    conceptExplanation: 'Model Open Systems Interconnection (OSI) 7 Layer adalah standar konseptual komunikasi jaringan. Data dari aplikasi pengguna dibungkus (enkapsulasi) lapis demi lapis ke bawah hingga menjadi sinyal bit listrik/gelombang fisik, lalu diuraikan kembali (dekapsulasi) di komputer tujuan.',
    keyPoints: [
      'Layer 7 - Application: Antarmuka aplikasi dengan jaringan (HTTP/HTTPS, FTP, DNS, SMTP, SSH). PDU: Data.',
      'Layer 6 - Presentation: Format data, kompresi, dan enkripsi/dekripsi (SSL/TLS, JPEG, ASCII, MP4). PDU: Data.',
      'Layer 5 - Session: Membuka, memelihara, dan menutup sesi komunikasi antar aplikasi (NetBIOS, RPC, PPTP). PDU: Data.',
      'Layer 4 - Transport: Pengiriman data ujung ke ujung (End-to-End), segmentasi, error checking, flow control (TCP, UDP). PDU: Segment.',
      'Layer 3 - Network: Pengalamatan logis (IP Address) dan penentuan rute terbaik (Routing). Perangkat: Router. PDU: Packet.',
      'Layer 2 - Data Link: Pengalamatan fisik (MAC Address 48-bit), deteksi error (CRC/FCS), framing. Perangkat: Switch L2, NIC. PDU: Frame.',
      'Layer 1 - Physical: Transmisi bit biner mentah melalui media fisik (kabel UTP, Fiber Optic, Wi-Fi, Hub, Repeater). PDU: Bits.',
      'Perbedaan TCP vs UDP: TCP bersifat Connection-Oriented, Reliable (ada 3-Way Handshake SYN-SYN/ACK-ACK & retransmisi data hilang); UDP bersifat Connectionless, Unreliable tetapi sangat cepat & minim overhead (cocok untuk Video Streaming, Game Online, DNS).'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Menghafal Urutan 7 Layer OSI & PDU dengan Mudah',
        description: 'Jembatan keledai teruji untuk mengingat 7 lapisan dan PDU-nya.',
        steps: [
          'Hafalan Layer dari Atas (Layer 7 ke 1): "Anak Pak Sholeh Tidak Nakal Dan Pintar" (Application, Presentation, Session, Transport, Network, Data Link, Physical).',
          'Hafalan Layer dari Bawah (Layer 1 ke 7): "Please Do Not Throw Sausage Pizza Away" (Physical, Data Link, Network, Transport, Session, Presentation, Application).',
          'Hafalan PDU dari Layer 7 ke 1: "Data - Data - Data - Segment - Packet - Frame - Bits" (Singkatan: "Don\'t Do Drugs, Some People Forget Basics").'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Tabel Port Protokol Standar Populer',
        formula: '\\text{HTTP (80)} \\quad | \\quad \\text{HTTPS (443)} \\quad | \\quad \\text{SSH (22)} \\quad | \\quad \\text{DNS (53)} \\quad | \\quad \\text{DHCP (67/68)}',
        explanation: 'Port jaringan digunakan layer Transport untuk mengarahkan paket ke aplikasi layanan yang tepat.',
        variables: [
          { symbol: 'Port 80', meaning: 'HTTP (Hypertext Transfer Protocol unencrypted)' },
          { symbol: 'Port 443', meaning: 'HTTPS (HTTP Secure dengan enkripsi SSL/TLS)' },
          { symbol: 'Port 22', meaning: 'SSH (Secure Shell remote command line)' },
          { symbol: 'Port 53', meaning: 'DNS (Domain Name System penerjemah domain ke IP)' },
          { symbol: 'Port 21', meaning: 'FTP Control (File Transfer Protocol)' },
          { symbol: 'Port 25', meaning: 'SMTP (Simple Mail Transfer Protocol untuk kirim email)' }
        ]
      }
    ],
    formulas: [
      '\\text{Enkapsulasi: Data} \\to \\text{Segment (L4)} \\to \\text{Packet (L3)} \\to \\text{Frame (L2)} \\to \\text{Bits (L1)}',
      '\\text{TCP 3-Way Handshake: SYN} \\to \\text{SYN-ACK} \\to \\text{ACK}'
    ],
    examples: [
      {
        problem: 'Pada lapisan model OSI manakah proses penambahan alamat IP pengirim dan alamat IP tujuan (IP Header) berlangsung, dan apa sebutan unit data (PDU) pada lapisan tersebut?',
        given: 'Penambahan IP Address pengirim dan tujuan',
        questionTarget: 'Layer OSI dan Nama PDU',
        steps: [
          'Pengalamatan IP (logis) dan perutean adalah tugas dari Layer 3 (Network Layer).',
          'Pada Layer 3, segment dari Layer 4 dibungkus dengan IP Header sehingga menjadi unit data bernama PACKET.',
        ],
        solution: 'Layer 3 (Network Layer) dan nama PDU-nya adalah Packet.'
      }
    ],
    quickTips: [
      'Switch bekerja di Layer 2 (Data Link) berdasarkan MAC Address.',
      'Router bekerja di Layer 3 (Network) berdasarkan IP Address.',
      'Hub bekerja di Layer 1 (Physical) hanya meneruskan sinyal listrik tanpa membaca alamat.'
    ]
  },
  {
    id: 'tk3',
    title: 'Routing Statis, Dinamis & Konfigurasi Jaringan',
    categoryTag: 'Routing & Infrastruktur',
    summary: 'Prinsip kerja tabel routing, konfigurasi routing statis & default route (0.0.0.0/0), protokol routing dinamis (OSPF, RIP, BGP), Administrative Distance (AD), serta Inter-VLAN Routing (Router-on-a-Stick).',
    conceptExplanation: 'Routing adalah proses meneruskan paket data dari satu jaringan ke jaringan lain yang berbeda subnet/segmen. Router memeriksa tabel routing miliknya untuk mencocokkan IP tujuan dengan rute terbaik berdasarkan nilai Administrative Distance (AD) dan metric terendah.',
    keyPoints: [
      'Routing Statis: Administrator memasukkan jalur rute secara manual. Aman dan hemat resource CPU, namun tidak adaptif jika kabel/jalur putus. AD = 1.',
      'Default Route: Rute gerbang utama (0.0.0.0/0 dengan gateway ISP) yang digunakan jika alamat tujuan tidak ditemukan dalam tabel routing spesifik.',
      'Routing Dinamis: Router saling bertukar informasi tabel rute secara otomatis menggunakan protokol routing:',
      '- RIP (Routing Information Protocol): Distance Vector, metric berdasarkan Hop Count (maksimal 15 hop, 16 hop = unreachable). AD = 120.',
      '- OSPF (Open Shortest Path First): Link-State Protocol, metric berdasarkan Cost (Bandwidth interface), menggunakan algoritma Dijkstra SPF. AD = 110.',
      '- BGP (Border Gateway Protocol): Path Vector Protocol yang digunakan untuk menghubungkan jaringan Autonomous System (AS) di seluruh dunia (tulang punggung Internet). AD eBGP = 20, iBGP = 200.',
      'Urutan Prioritas Pemilihan Jalur:\n1. Longest Prefix Match (misal /28 lebih diprioritaskan dibanding /24)\n2. Nilai Administrative Distance (AD) terkecil\n3. Metric terkecil.'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Mengonfigurasi Routing Statis Dasar',
        description: 'Langkah mendefinisikan rute statis pada router MikroTik atau Cisco.',
        steps: [
          'Identifikasi Subnet Jaringan Tujuan (Destination Network IP dan Subnet Mask / CIDR).',
          'Tentukan IP Gateway berikutnya (Next-Hop IP) yaitu IP interface router tetangga yang langsung terhubung.',
          'Pada MikroTik: `/ip route add dst-address=192.168.20.0/24 gateway=10.10.10.2`.',
          'Pada Cisco: `Router(config)# ip route 192.168.20.0 255.255.255.0 10.10.10.2`.',
          'Lakukan uji koneksi dengan perintah `ping` dan `traceroute`.'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Tabel Nilai Administrative Distance (AD)',
        formula: '\\text{Connected (0)} < \\text{Static (1)} < \\text{eBGP (20)} < \\text{OSPF (110)} < \\text{RIP (120)}',
        explanation: 'Semakin KECIL nilai AD, semakin DIPERCAYA dan DIPRIORITASKAN rute tersebut oleh router.',
        variables: [
          { symbol: 'Connected (0)', meaning: 'Interface yang terhubung langsung secara kabel fisik' },
          { symbol: 'Static Route (1)', meaning: 'Rute manual buatan administrator' },
          { symbol: 'OSPF (110)', meaning: 'Protokol dinamis link-state' },
          { symbol: 'RIP (120)', meaning: 'Protokol dinamis distance-vector' }
        ]
      }
    ],
    formulas: [
      '\\text{OSPF Cost} = \\frac{\\text{Reference Bandwidth (100 Mbps)}}{\\text{Interface Bandwidth}}',
      '\\text{Default Route} = 0.0.0.0/0 \\quad \\text{via Next-Hop Gateway}'
    ],
    examples: [
      {
        problem: 'Sebuah router menerima dua rute menuju jaringan 172.16.0.0/16 yang sama: satu melalui OSPF (AD = 110) dan satu melalui RIP (AD = 120). Rute manakah yang akan dimasukkan ke dalam tabel routing aktif (Routing Table)?',
        given: 'Jalur OSPF (AD = 110) vs Jalur RIP (AD = 120)',
        questionTarget: 'Rute yang terpilih masuk ke tabel routing aktif',
        steps: [
          'Kedua rute memiliki panjang prefix yang sama persis (/16).',
          'Router membandingkan nilai Administrative Distance (AD).',
          'OSPF memiliki nilai AD 110 yang lebih kecil dibanding RIP yang bernilai AD 120.',
          'Nilai AD yang lebih kecil menandakan jalur lebih tepercaya.'
        ],
        solution: 'Jalur OSPF (AD = 110) yang akan dipilih dan dimasukkan ke Routing Table.'
      }
    ],
    quickTips: [
      'Default Gateway 0.0.0.0/0 cocok digunakan untuk mengarahkan seluruh lalu lintas internet klien ke modem ISP.',
      'Pada OSPF, semua router area non-backbone (Area 1, 2, dst) WAJIB terhubung langsung ke Area 0 (Backbone Area)!'
    ]
  },
  {
    id: 'tk4',
    title: 'VLAN, Switching & Keamanan Jaringan (Firewall & NAT)',
    categoryTag: 'Switching & Security',
    summary: 'Virtual LAN (VLAN ID 1-4094), IEEE 802.1Q frame tagging, mode Access vs Trunk, Spanning Tree Protocol (STP), Network Address Translation (NAT Masquerade, SNAT, DNAT), dan aturan Firewall filter.',
    conceptExplanation: 'VLAN membagi switch fisik menjadi beberapa jaringan logis yang terisolasi untuk meningkatkan keamanan dan membatasi broadcast traffic. NAT memungkinkan ribuan komputer jaringan lokal privat mengakses internet publik hanya dengan satu IP publik.',
    keyPoints: [
      'VLAN Access Port: Port switch yang terhubung ke perangkat akhir (PC, printer, laptop). Paket data tidak diberi tag VLAN (untagged).',
      'VLAN Trunk Port: Port penghubung antar switch atau dari switch ke router yang membawa paket dari BANYAK VLAN sekaligus. Paket disisipi tag 4-byte IEEE 802.1Q.',
      'STP (Spanning Tree Protocol 802.1D): Mencegah terjadinya looping jaringan (Broadcast Storm) saat ada jalur kabel ganda/redundant dengan cara memblokir sementara salah satu port (Blocking State).',
      'NAT Masquerade / PAT: Mengubah IP privat sumber dari banyak klien menjadi satu IP publik router secara dinamis menggunakan nomor port unik.',
      'DNAT / Port Forwarding: Meneruskan koneksi dari IP publik luar ke server lokal privat (misal membuka web server lokal port 80 ke publik).',
      'Firewall Filter Chain MikroTik:\n- Input: Paket yang ditujukan langsung KE router itu sendiri (misal akses Winbox / SSH).\n- Output: Paket yang berasal DARI router keluar.\n- Forward: Paket yang hanya LEWAT melintasi router dari klien ke internet.'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Membedakan Chain Input vs Chain Forward pada Firewall',
        description: 'Trik memilih aturan filter firewall agar tidak salah konfigurasi.',
        steps: [
          'Tanyakan: "Ke mana tujuan akhir dari paket data tersebut?"',
          'Jika tujuannya adalah ROUTER ITU SENDIRI (misal mengamankan port Winbox router dari hacker luar) → GUNAKAN CHAIN = INPUT.',
          'Jika tujuannya adalah INTERNET / KOMPUTER LAIN dan hanya melewati router (misal memblokir situs judi untuk klien LAN) → GUNAKAN CHAIN = FORWARD.',
          'Jika paket dibuat oleh sistem router sendiri (misal router melakukan ping ke Google) → GUNAKAN CHAIN = OUTPUT.'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Struktur Tagging VLAN IEEE 802.1Q',
        formula: '\\text{Ethernet Frame} + \\mathbf{802.1Q \\text{ Tag (4 Bytes)}} \\quad (\\text{VLAN ID: } 1 - 4094)',
        explanation: 'Tag disisipkan antara Source MAC dan Type/Length pada Ethernet Frame.',
        variables: [
          { symbol: 'VLAN ID', meaning: 'Nomor identitas unik VLAN (12-bit, nilai 1 s.d 4094)' },
          { symbol: 'Priority (PCP)', meaning: '3-bit Quality of Service (QoS) level prioritas traffic' }
        ]
      }
    ],
    formulas: [
      '\\text{NAT Masquerade: IP Lokal Privat (192.168.x.x)} \\to \\text{IP Publik Router}',
      '\\text{Port Forwarding: IP Publik:Port Eksternal} \\to \\text{IP Server Lokal:Port Internal}'
    ],
    examples: [
      {
        problem: 'Administrator ingin memblokir akses internet bagi klien di kantor agar tidak bisa membuka website tertentu pada jam kerja. Chain firewall manakah yang harus dikonfigurasi pada router MikroTik?',
        given: 'Lalu lintas data dari klien LAN menuju internet melewati router',
        questionTarget: 'Chain Firewall yang tepat (Input / Forward / Output)',
        steps: [
          'Paket data berasal dari komputer klien LAN.',
          'Tujuan akhir paket adalah server website di internet, bukan router itu sendiri.',
          'Router hanya bertindak sebagai perantara yang meneruskan (forward) paket tersebut.',
          'Oleh karena itu, aturan firewall filtering wajib diletakkan pada CHAIN = FORWARD.'
        ],
        solution: 'Chain = FORWARD.'
      }
    ],
    quickTips: [
      'Gunakan Action = DROP pada firewall untuk diam-diam membuang paket tanpa memberi tahu pengirim (paling aman dari hacker).',
      'Action = REJECT membuang paket sambil mengirim pesan balasan ICMP unreachable (memberi tahu pengirim bahwa port ditutup).'
    ]
  },
  {
    id: 'tk5',
    title: 'Sistem Operasi Linux & Perintah Esensial Shell CLI',
    categoryTag: 'Sistem Operasi & Server',
    summary: 'Struktur direktori Linux (FHS), sistem hak akses file angka oktal (chmod 755/644, chown), manajemen proses (ps, top, kill), konfigurasi jaringan CLI (ip a, systemctl), dan manipulasi teks (grep, cat, nano).',
    conceptExplanation: 'Linux adalah sistem operasi open-source standar industri server cloud dan perangkat jaringan. Menguasai command line interface (CLI) dan manajemen hak akses permission adalah kompetensi utama teknisi sistem dan jaringan.',
    keyPoints: [
      'Struktur File Linux (Root /):\n- `/etc`: File konfigurasi sistem & software\n- `/var/log`: Log catatan aktivitas sistem dan error server\n- `/home`: Direktori pribadi user\n- `/bin` & `/sbin`: Perintah biner eksekusi sistem.',
      'Sistem Hak Akses File (Permissions: rwx):\n- Read (r) = Nilai 4\n- Write (w) = Nilai 2\n- Execute (x) = Nilai 1\n- Nilai 7 = 4 + 2 + 1 (Read + Write + Execute)\n- Nilai 6 = 4 + 2 (Read + Write)\n- Nilai 5 = 4 + 1 (Read + Execute)\n- Format 3 digit: [Owner] [Group] [Others]. Contoh: `chmod 755 file.sh` artinya Owner full (7), Group bisa baca & eksekusi (5), Others bisa baca & eksekusi (5).',
      'Perintah Esensial:\n- `ls -la`: Melihat seluruh file beserta atribut hak akses dan file tersembunyi\n- `grep "error" file.log`: Mencari teks spesifik di dalam file\n- `systemctl restart nginx`: Merestart layanan server web\n- `ps aux | grep node`: Melihat proses aplikasi node yang sedang berjalan\n- `kill -9 <PID>`: Menghentikan paksa proses berdasarkan Process ID (PID)\n- `chown user:group file`: Mengubah kepemilikan user dan group file.'
    ],
    stepByStepGuides: [
      {
        title: 'Cara Menghitung Angka Oktal Hak Akses Linux (chmod)',
        description: 'Trik cepat menghitung nilai angka permission rwx.',
        steps: [
          'Ingat nilai dasar 3 huruf: r = 4, w = 2, x = 1.',
          'Hitung digit ke-1 (User / Pemilik): Misal ingin r+w+x → 4+2+1 = 7.',
          'Hitung digit ke-2 (Group): Misal ingin r+x → 4+0+1 = 5.',
          'Hitung digit ke-3 (Others / Publik): Misal ingin r+x → 4+0+1 = 5.',
          'Gabungkan menjadi: `chmod 755 nama_file`.',
          'Untuk file dokumen sensitif (hanya owner yang boleh baca & tulis, lainnya dilarang): `chmod 600 config.env` (Owner: 4+2=6, Group: 0, Others: 0).'
        ]
      }
    ],
    formulaDetails: [
      {
        title: 'Rumus Nilai Hak Akses Linux',
        formula: '\\text{Permission Oktal} = \\mathbf{r}(4) + \\mathbf{w}(2) + \\mathbf{x}(1)',
        explanation: 'Kombinasi angka menghasilkan total dari 0 (tidak ada akses) hingga 7 (akses penuh).',
        variables: [
          { symbol: 'Read (r)', meaning: 'Membaca isi file / melihat daftar folder (bobot 4)' },
          { symbol: 'Write (w)', meaning: 'Mengedit, menghapus, membuat file baru (bobot 2)' },
          { symbol: 'Execute (x)', meaning: 'Menjalankan script atau masuk ke folder (bobot 1)' }
        ]
      }
    ],
    formulas: [
      '\\text{chmod 777} = \\text{rwxrwxrwx (Akses Penuh Semua User)}',
      '\\text{chmod 755} = \\text{rwxr-xr-x (Standar Folder & Executable Script)}',
      '\\text{chmod 644} = \\text{rw-r--r-- (Standar File Web / Konfigurasi Biasa)}',
      '\\text{chmod 600} = \\text{rw------- (File Rahasia Private Key SSH / .env)}'
    ],
    examples: [
      {
        problem: 'Sebuah file script bernama `deploy.sh` memiliki permission `-rw-r--r--`. Administrator ingin agar pemilik file (owner) dapat mengeksekusi script tersebut, sementara group dan others hanya boleh membaca dan mengeksekusi tanpa boleh mengedit/mengubah isinya. Perintah chmod berapakah yang harus diketikkan?',
        given: 'Owner: Read, Write, Execute | Group: Read, Execute | Others: Read, Execute',
        questionTarget: 'Perintah chmod dengan notasi oktal',
        steps: [
          'Owner = r + w + x = 4 + 2 + 1 = 7.',
          'Group = r + x = 4 + 1 = 5.',
          'Others = r + x = 4 + 1 = 5.',
          'Maka nilai perizinannya adalah 755.'
        ],
        solution: 'chmod 755 deploy.sh'
      }
    ],
    quickTips: [
      'Jangan pernah memberi `chmod 777` di server produksi karena membahayakan keamanan (siapa pun bisa menyisipkan malware)!',
      'Gunakan perintah `tail -f /var/log/syslog` untuk memantau log sistem secara live real-time.'
    ]
  }
];
