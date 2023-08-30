import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";

export default defineConfig({
  resolve: {
    alias: {
      "@ui": fileURLToPath(new URL("src/lib/ui", import.meta.url)),
      "@ui/components": fileURLToPath(
        new URL("src/lib/ui/components", import.meta.url),
      ),
    },
  },
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
