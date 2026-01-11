import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "es2020",

    chunkSizeWarningLimit: 1200,

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          animations: ["gsap"],
          three: ["three"],
        },

      },
    },
  },
})

