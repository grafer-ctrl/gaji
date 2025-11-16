import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // PENTING: Pastikan '<NAMA_REPO_ANDA>' sesuai dengan nama repository GitHub Anda.
  // Contoh: jika repo Anda adalah 'https://github.com/john-doe/aplikasi-pengeluaran',
  // maka baris di bawah ini harus menjadi: base: '/aplikasi-pengeluaran/',
  // Untuk kasus Anda, sepertinya sudah benar jika nama repo-nya 'gaji'
  base: '/gaji/',
});
