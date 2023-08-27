import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import crypto from "crypto";

export default defineConfig({
  base: "",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: crypto.randomUUID().replace(/-+/g, ""),
  },
  server: {
    port: 5173,
  },
  plugins: [solid()],
});
