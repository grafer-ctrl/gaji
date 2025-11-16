# Panduan Deployment Pelacak Pengeluaran ke GitHub Pages

Tenang, ini panduan super simpel. Ikuti langkah-langkah ini satu per satu, jangan ada yang terlewat.

### Langkah 1: Hapus File dan Folder yang Salah

Setelah Anda extract file ZIP proyek ini, Anda akan melihat ada file yang sama di dua tempat. Ini yang bikin pusing. Kita akan hapus yang tidak perlu.

Buka folder proyek Anda, dan **HAPUS** file dan folder berikut dari direktori utama (folder paling luar):

**Folder yang harus dihapus:**
*   `components`

**File yang harus dihapus:**
*   `App.tsx`
*   `index.tsx`
*   `types.ts`
*   `SpendingVisual.tsx` (jika ada file ini di luar folder `components`)

**PENTING:** Jangan hapus folder `src`. Semua file yang kita butuhkan aman di dalam folder `src`.

Setelah selesai, struktur folder utama Anda akan terlihat bersih dan benar.

### Langkah 2: Edit `package.json`

1.  Buka file `package.json`.
2.  Cari baris ini: `"homepage": "https://<NAMA_PENGGUNA_GITHUB_ANDA>.github.io/gaji/",`
3.  Ganti `<NAMA_PENGGUNA_GITHUB_ANDA>` dengan username GitHub Anda.
    *   **Contoh:** Jika username Anda `budi-sukses`, barisnya menjadi: `"homepage": "https://budi-sukses.github.io/gaji/",`

### Langkah 3: Upload Kembali ke GitHub

Sekarang, upload semua file yang sudah rapi ini ke repository GitHub Anda. Pastikan semua file yang tadi dihapus sudah benar-benar tidak ada dan Anda sudah menyimpan perubahan di `package.json`.

### Langkah 4: Jalankan Perintah di Komputer Anda (Terminal)

Bagian ini **harus** dilakukan di komputer, tidak bisa di situs GitHub.

1.  Buka aplikasi **Terminal** (atau `Command Prompt`/`Git Bash` di Windows).
2.  Masuk ke direktori proyek Anda menggunakan perintah `cd`.
3.  Jalankan perintah ini untuk persiapan (hanya perlu dijalankan sekali):
    ```bash
    npm install
    ```
4.  Setelah selesai, jalankan perintah ini untuk deploy:
    ```bash
    npm run deploy
    ```

Tunggu sampai prosesnya selesai. Perintah ini akan membuat aplikasi Anda dan mengunggahnya ke GitHub secara otomatis.

### Langkah 5: Pengaturan Final di GitHub

1.  Buka repository Anda di situs GitHub.
2.  Pergi ke **Settings** > **Pages**.
3.  Di bagian **Source**, pilih **Deploy from a branch**.
4.  Pastikan **Branch** adalah `gh-pages` dan foldernya `/(root)`. Klik **Save**.

Selesai! Tunggu beberapa menit, lalu buka link `homepage` yang Anda atur di `package.json`. Aplikasi Anda sudah online.
