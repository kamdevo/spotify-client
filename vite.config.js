import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// vite.config.js


// path

// This is a Vite configuration file that sets up a React project with Tailwind CSS.
// It uses the `@vitejs/plugin-react` for React support and `@tailwin

const __dirname = path.resolve()
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})