# Tentang Saya
**Nama**          : Muhammad Mas Adji Firmansyah<br>
**NIM**           : 230444040013<br>
**Prodi**         : Manajemen Informatika<br>
**Mata Kuliah**   : Mobile Programming II<br>
**Dosen**         : Taufik Ardiyan S.Kom

---


# 📱 UAS Project React Native Expo — "uas-project-masadji"

Aplikasi ini merupakan **tugas Ujian Akhir Semester (UAS)** mata kuliah *Pemrograman Mobile* yang dikembangkan menggunakan **React Native (Expo + Expo Router)**. Proyek ini dibuat dengan konsep **navigasi multipage**, **autentikasi sederhana**, dan **pengelolaan data dummy (mock-data)** untuk menampilkan informasi *User* dan *Product*.

---

## 🧩 Tujuan Aplikasi

Aplikasi ini bertujuan untuk:
- Menunjukkan kemampuan mahasiswa dalam membangun aplikasi React Native menggunakan **Expo Router**.
- Memahami konsep **navigasi**, **autentikasi**, dan **state management sederhana**.
- Mengimplementasikan struktur proyek yang rapi dan modular.

---

## 🚀 Flow Aplikasi

Berikut adalah alur atau *user flow* dari aplikasi ini:

1. **Login Page**
   - Pengguna diminta untuk login menggunakan *email* dan *password*.
   - Validasi dilakukan menggunakan data dari `mock-data.ts`.
   - Password yang digunakan untuk semua akun mock adalah `password`.
      | No | Email                   | Password |
      |----|-------------------------|----------|
      | 1  | muhammad@example.com    | 123456   |
      | 2  | mas@example.com         | abcdef   |
      | 3  | adji@example.com        | 654321   |

2. **Home Page**
   - Setelah login berhasil, pengguna akan diarahkan ke halaman **Home**.
   - Terdapat 3 tombol utama:
     - **User List** → menuju daftar user.
     - **Product List** → menuju daftar produk.
     - **Logout** → keluar dari aplikasi dan kembali ke halaman login.

3. **User List Page**
   - Menampilkan daftar user dari data mock.
   - Saat salah satu user ditekan, aplikasi berpindah ke halaman **User Detail**.

4. **User Detail Page**
   - Menampilkan detail informasi user (nama, email, tanggal dibuat).

5. **Product List Page**
   - Menampilkan daftar produk lengkap dengan deskripsi, harga, dan stok.

6. **Logout**
   - Logout bisa dilakukan dari halaman Home.
   - Setelah logout, pengguna diarahkan kembali ke halaman Login.
   - Setiap halaman dilindungi oleh `Redirect`, sehingga user tidak bisa mengakses halaman lain tanpa login.

---

## 📱 Tampilan Aplikasi

1. **Login Page**<br>
![Login Page](assets/images/Login%20pages.png)<br>

2. **Home Page**<br>
![Home Page](assets/images/Home%20Pages.png)<br>
z
3. **User List Page**<br>
![User List Page](assets/images/List%20User.png)<br>

4. **User Detail Page**<br>
![User Detail Page](assets/images/Detail%20User.png) <br>

5. **Product List Page**<br>
![Product List Page](assets/images/List%20Product.png)<br>