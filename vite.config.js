import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mf-react-vite', // Nombre de la aplicación
      filename: 'remoteEntry.js', // Nombre del archivo remoto
      exposes: {
        // Componentes o módulos que serán consumidos por otras apps
        './ComponentName': './src/components/ComponentName.jsx',
      },
      remotes: {
        // Consumir otros microfrontends:
        'pagos': 'https://pasarela-de-pagos.vercel.app/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom'], // Dependencias compartidas
    }),
  ],
  build: {
    target: 'esnext',
  },
});
