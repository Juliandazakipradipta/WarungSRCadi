# 🏪 Sistem Informasi Kasir & Manajemen Stok - Warung SRC Adi

Aplikasi Web Manajemen Kasir, Pengelolaan Inventaris, Notifikasi Stok Kritis via Telegram, serta Integrasi Struk Belanja via WhatsApp Gateway. Dibuat menggunakan framework **Flask** (Python) dan database **MySQL**.

---

## 🚀 Fitur Utama

1. **Dashboard Penjualan**: Ringkasan omzet harian, keuntungan bersih, statistik produk kritis, produk kedaluwarsa, daftar transaksi terbaru, dan produk terlaris.
2. **Manajemen Produk & Stok**: Pencatatan produk, harga beli, harga jual, stok minimum, unit satuan konversi otomatis, serta tanggal kedaluwarsa.
3. **Transaksi Kasir**: Pencatatan penjualan real-time dengan kalkulasi subtotal otomatis dan pencarian produk yang efisien.
4. **Notifikasi Telegram Otomatis**: Integrasi bot Telegram untuk mengirimkan laporan stok produk kritis/habis dan produk hampir kedaluwarsa setiap hari.
5. **Struk WhatsApp**: Mengirimkan struk belanja belanja ke nomor WhatsApp pelanggan dengan integrasi API Gateway Fonnte atau tautan pintasan WhatsApp Web.

---

## 🛠️ Persyaratan Sistem

- Python 3.8 ke atas
- MySQL Server / XAMPP
- Koneksi Internet (untuk API Telegram dan Fonnte WhatsApp)

---

## 📦 Langkah Instalasi & Konfigurasi

### 1. Kloning / Ekstrak Proyek
Pastikan file proyek berada dalam satu folder kerja, misalnya `D:\PROJECT_SKRIPSI`.

### 2. Konfigurasi Virtual Environment (venv)
Untuk mengisolasi modul Python proyek agar stabil:
```bash
# Membuat Virtual Environment
python -m venv venv

# Mengaktifkan Virtual Environment (Windows PowerShell)
venv\Scripts\Activate.ps1

# Mengaktifkan Virtual Environment (Windows Command Prompt)
venv\Scripts\activate.bat
```

### 3. Pasang Dependencies
Gunakan pip untuk memasang seluruh library yang dideklarasikan pada `requirements.txt`:
```bash
pip install -r requirements.txt
```

### 4. Konfigurasi Database MySQL
1. Aktifkan modul **Apache** dan **MySQL** di XAMPP Control Panel.
2. Buka `http://localhost/phpmyadmin` di browser.
3. Buat database baru bernama `warung_src_adi`.
4. Impor struktur tabel (file `.sql` skripsi Anda jika ada, atau buat tabel produk, transaksi, detail_transaksi, dan pelanggan sesuai skema).

### 5. Konfigurasi File Lingkungan (`.env`)
Buat file bernama `.env` di direktori utama proyek, lalu isi parameter berikut:
```env
# Database Configuration
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DB=warung_src_adi

# Flask configuration
SECRET_KEY=warung_src_adi_secret_2025

# Telegram Notification Bot
TELEGRAM_TOKEN=isi_dengan_token_bot_telegram_anda
TELEGRAM_CHAT_ID=isi_dengan_chat_id_telegram_anda

# Fonnte WhatsApp API Gateway
FONNTE_TOKEN=isi_dengan_token_fonnte_anda
```

---

## 🚦 Cara Menjalankan Aplikasi

1. Pastikan Virtual Environment masih aktif.
2. Jalankan perintah berikut di terminal:
   ```bash
   python app.py
   ```
3. Buka peramban (browser) lalu kunjungi alamat berikut:
   `http://127.0.0.1:5000`

---

## 📂 Struktur Direktori Proyek

- [app.py](file:///d:/PROJECT_SKRIPSI/app.py): Kode utama aplikasi Flask, berisi rute/routing dan pengolah logika bisnis.
- [config.py](file:///d:/PROJECT_SKRIPSI/config.py): Konfigurasi pembacaan file `.env`.
- [templates/](file:///d:/PROJECT_SKRIPSI/templates/): Berisi file template halaman HTML Jinja2.
- [static/](file:///d:/PROJECT_SKRIPSI/static/): File aset statis seperti file style CSS (`style.css`), JavaScript, dan gambar.
- [static/style.css](file:///d:/PROJECT_SKRIPSI/static/style.css): Desain antarmuka utama berskema warna Biru Metallic Modern.
