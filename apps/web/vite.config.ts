import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
  plugins: [
    svgr(),
    tailwindcss(),
    react(),
    tsconfigPaths(),
    process.env.HTTPS && mkcert(),
  ],
  build: {
    target: "esnext",
  },
  publicDir: "./public",
  server: {
    host: true,
    allowedHosts: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
