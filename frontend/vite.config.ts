import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const envDir = path.resolve(__dirname, '../../');
  const env = loadEnv(mode, envDir, 'VITE_');

  const envVariables = Object.fromEntries(
    Object.entries(env).map(([key, value]) => [
      `import.meta.env.${key}`,
      JSON.stringify(value),
    ])
  );

  return {
    plugins: [react(), tailwindcss()],
    define: envVariables,
    resolve: {
      alias: {
        '@shared': path.resolve(__dirname, '../package/shared/src'),
      },
    },
  };
});

