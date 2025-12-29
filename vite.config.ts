import { defineConfig } from "vite";
import path from "path";

/**
 * Configuração Vite para projeto Vanilla JS
 *
 * - Sem dependências React
 * - Build otimizado para produção
 * - Suporte a módulos ES6
 */
export default defineConfig({
  base: "/LP-WhiteLabel/",

  resolve: {
    extensions: [".js", ".ts", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    minify: "terser",

    // Otimizações de bundle
    rollupOptions: {
      output: {
        // Mantenha estrutura de módulos clara
        entryFileNames: "[name]-[hash].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name]-[hash][extname]",
      },
    },

    // Compressão de CSS
    cssCodeSplit: true,
    cssMinify: true,

    // Relatório de tamanho
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
  },

  server: {
    port: 3000,
    open: true,

    // Middleware para SPA
    middlewareMode: false,
  },

  // Otimizações
  optimizeDeps: {
    // Pré-buscas de dependências críticas (se houver)
    entries: ["index.html"],
  },
});
