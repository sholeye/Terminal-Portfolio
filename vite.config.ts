import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: true, // ← This is crucial
  },
  server: {
    // host: true, // binds to 0.0.0.0 so ngrok can tunnel it
    // port: 5173,
    // strictPort: true, // avoids random ports which would break ngrok
    // allowedHosts: ['maximo-vocational-nonmythically.ngrok-free.dev'],

    // IMPORTANT:
    // cors: true,
    proxy: {
      // '/api': 'http://localhost:3000', //
      '/api':
        'https://foiled-overbravely-rosamond.ngrok-free.dev/api', //
    },
  },
  // preview: {
  //   host: true,
  //   port: 4173,
  // },
});
