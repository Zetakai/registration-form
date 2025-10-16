# Form Registrasi - Tugas Pemrograman Front-End

## Informasi Tugas
- **Mata Kuliah:** Pemrograman Front-End
- **Dosen Pengampu:** TAUFIK IQBAL RAMDHANI ST., M.Sc
- **Jenis Tugas:** Form Registrasi Dasar
- **Teknologi:** HTML5, CSS3, JavaScript (Vanilla)

## Deskripsi Proyek
Aplikasi web form registrasi yang dibangun menggunakan teknologi front-end modern dengan fitur validasi real-time, toggle password visibility, dan desain responsif. Form ini dirancang dengan pendekatan user experience yang optimal dan antarmuka yang user-friendly.

## Fitur Utama

### Form Registrasi
- **Nama Lengkap** - Validasi minimum 2 karakter
- **Alamat Email** - Validasi format email yang benar
- **Password** - Minimum 6 karakter dengan indikator kekuatan
- **Konfirmasi Password** - Validasi kesesuaian password

### Fitur UI/UX
- **Toggle Password Visibility** - Tombol show/hide untuk kedua field password
- **Validasi Real-time** - Feedback langsung saat user mengetik
- **Animasi Loading** - Indikator loading saat submit form
- **Responsive Design** - Optimal di desktop dan mobile
- **Error Handling** - Pesan error yang informatif dalam Bahasa Indonesia

### Desain
- **Color Scheme** - Palet warna earthy (coklat/cream) yang hangat
- **Typography** - Font serif (Georgia) untuk kesan klasik
- **Animations** - Transisi halus dan efek hover
- **Accessibility** - Kontras warna yang baik dan navigasi keyboard

## Teknologi yang Digunakan

| Teknologi | Versi | Deskripsi |
|-----------|-------|-----------|
| HTML5 | Latest | Struktur semantic dan form elements |
| CSS3 | Latest | Styling, animations, dan responsive design |
| JavaScript | ES6+ | Validasi form, event handling, dan DOM manipulation |

## Struktur File

```
registration-form/
├── index.html          # File HTML utama
├── style.css           # Stylesheet dengan styling lengkap
├── script.js           # JavaScript untuk validasi dan interaksi
└── README.md           # Dokumentasi proyek
```

## Cara Menjalankan

1. **Clone atau Download** repository ini
2. **Buka file** `index.html` di web browser modern
3. **Form siap digunakan** tanpa perlu server atau build process

### Persyaratan Browser
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Responsive Breakpoints

```css
/* Mobile First Approach */
@media (max-width: 600px) {
    /* Styling untuk mobile devices */
}
```

## Fitur Teknis

### Validasi Form
- **Client-side validation** dengan JavaScript
- **Real-time feedback** dengan debouncing (500ms)
- **Custom error messages** dalam Bahasa Indonesia
- **Focus management** untuk accessibility

### Password Security
- **Strength indicator** (5 level kekuatan)
- **Toggle visibility** dengan icon yang intuitif
- **Minimum length** dan pattern validation

### Performance
- **Vanilla JavaScript** - No external dependencies
- **Optimized CSS** - Minimal dan efficient
- **Fast loading** - Lightweight implementation

## Design Philosophy

### Prinsip Desain
1. **Simplicity** - Interface yang bersih dan tidak berlebihan
2. **Accessibility** - Mudah digunakan oleh semua user
3. **Consistency** - Pola desain yang konsisten
4. **Feedback** - Respons yang jelas untuk setiap aksi user

### Color Palette
- **Primary:** #8b4513 (Saddle Brown)
- **Secondary:** #a0522d (Sienna)
- **Background:** #f5f1e8 (Warm White)
- **Error:** #dc143c (Crimson)
- **Success:** #228b22 (Forest Green)

## Validasi Rules

| Field | Rules | Error Message |
|-------|-------|---------------|
| Nama | Required, Min 2 chars | "Nama harus minimal 2 karakter" |
| Email | Required, Valid format | "Format email tidak valid" |
| Password | Required, Min 6 chars | "Password harus minimal 6 karakter" |
| Confirm Password | Required, Match password | "Konfirmasi password tidak cocok" |

## Developer Notes

### Code Quality
- **Clean Code** - Kode yang mudah dibaca dan dipahami
- **Modular Structure** - Fungsi-fungsi yang terpisah dan reusable
- **Error Handling** - Penanganan error yang comprehensive
- **Performance** - Optimasi untuk loading yang cepat

### Best Practices
- Semantic HTML5 elements
- CSS Grid/Flexbox untuk layout
- Event delegation untuk performance
- Progressive enhancement approach

## Kontak

**Nama:** Muhammad Farid Zaki  
**NIM:** 1003240010  
**Email:** muhammadfarid.zaki@gmail.com  
**Kelas:** Informatika

---

*Dibuat untuk memenuhi tugas Pemrograman Front-End - Semester [3] Tahun Akademik [2025/2026]*