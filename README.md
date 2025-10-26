# Form Registrasi Sederhana - Tugas Pemrograman Front-End

## Informasi Tugas
- **Mata Kuliah:** Pemrograman Front-End
- **Dosen Pengampu:** TAUFIK IQBAL RAMDHANI ST., M.Sc
- **Jenis Tugas:** Form Registrasi Dasar
- **Teknologi:** HTML5, CSS3, JavaScript (Vanilla)

## Deskripsi Proyek
Aplikasi web form registrasi dengan sistem penilaian yang dibangun menggunakan teknologi front-end modern. Form ini memiliki desain yang clean dan user-friendly dengan popup modal yang elegan untuk menampilkan hasil input dan konversi nilai.

## Fitur Utama

### Form Registrasi
- **Nama Depan** - Field input untuk nama depan
- **Nama Belakang** - Field input untuk nama belakang
- **Nilai Angka** - Field input untuk nilai numerik (0-100)
- **Submit Button** - Tombol untuk mengirim form

### Sistem Penilaian
- **Konversi Nilai** - Otomatis mengkonversi nilai angka ke huruf
- **Skala Penilaian:**
  - 90-100: A
  - 80-89: B
  - 70-79: C
  - 60-69: D
  - <60: E

### Fitur UI/UX
- **Popup Modal** - Menampilkan hasil dalam format kolom yang rapi
- **Console Logging** - Menampilkan hasil di browser console
- **Responsive Design** - Optimal di desktop dan mobile
- **Smooth Animations** - Animasi halus untuk modal dan transisi
- **Clean Design** - Desain minimalis dengan color scheme yang hangat

### Desain
- **Color Scheme** - Palet warna earthy (coklat/cream) yang hangat
- **Typography** - Font serif (Georgia) untuk kesan klasik
- **Animations** - Transisi halus dan efek hover
- **Modal Design** - Popup modal dengan animasi slide dan fade

## Teknologi yang Digunakan

| Teknologi | Versi | Deskripsi |
|-----------|-------|-----------|
| HTML5 | Latest | Struktur semantic dan form elements |
| CSS3 | Latest | Styling, animations, dan responsive design |
| JavaScript | ES6+ | Event handling, DOM manipulation, dan modal control |

## Struktur File

```
registration-form/
├── index.html          # File HTML utama dengan form sederhana
├── style.css           # Stylesheet dengan styling dan modal
├── script.js           # JavaScript untuk form handling dan modal
└── README.md           # Dokumentasi proyek
```

## Cara Menjalankan

1. **Clone atau Download** repository ini
2. **Buka file** `index.html` di web browser modern
3. **Isi form** dengan nama depan dan nama belakang
4. **Klik Submit** untuk melihat hasil dalam popup modal

### Persyaratan Browser
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Cara Penggunaan

1. **Masukkan Nama Depan** - Ketik nama depan Anda
2. **Masukkan Nama Belakang** - Ketik nama belakang Anda
3. **Masukkan Nilai Angka** - Ketik nilai numerik (0-100)
4. **Klik Submit** - Tombol untuk mengirim form
5. **Lihat Hasil** - Popup modal akan menampilkan:
   - Nama Lengkap : [Nama Depan] [Nama Belakang]
   - Nilai Angka : [Nilai Angka]
   - Nilai Huruf : [Nilai Huruf]
6. **Console Log** - Buka Developer Tools (F12) untuk melihat log di console

## Fitur Teknis

### Modal System
- **Custom Modal** - Modal buatan sendiri tanpa library eksternal
- **Smooth Animations** - Animasi fade in dan slide down
- **Multiple Close Options** - Bisa ditutup dengan X, tombol Tutup, atau klik luar modal
- **Responsive Design** - Modal yang responsif di berbagai ukuran layar

### Form Handling
- **Input Validation** - Validasi sederhana untuk memastikan semua field terisi
- **Event Handling** - Event listener untuk form submission
- **DOM Manipulation** - Manipulasi DOM untuk menampilkan hasil
- **Grade Conversion** - Fungsi untuk mengkonversi nilai angka ke huruf
- **HTML Formatting** - Format output dalam kolom yang rapi

### Performance
- **Vanilla JavaScript** - No external dependencies
- **Lightweight CSS** - CSS yang efisien dan minimal
- **Fast Loading** - Implementasi yang ringan dan cepat

## Color Palette
- **Primary:** #8b4513 (Saddle Brown)
- **Secondary:** #a0522d (Sienna)
- **Background:** #f5f1e8 (Warm White)
- **Modal Background:** #fff (White)
- **Text:** #333 (Dark Gray)

## Kontak

**Nama:** Muhammad Farid Zaki  
**NIM:** 1003240010  
**Email:** muhammadfarid.zaki@gmail.com  
**Kelas:** Informatika

---

*Dibuat untuk memenuhi tugas Pemrograman Front-End - Semester [3] Tahun Akademik [2025/2026]*