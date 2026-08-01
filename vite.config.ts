import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),

    dts({
      tsconfigPath: "./tsconfig.build.json",
      insertTypesEntry: true,
    }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "AutoSkeleton",
      fileName: "index",
      formats: ["es", "cjs"],
    },

    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        // Every export in this package is a hook or a component built on
        // useContext/useMemo/useState/useEffect — the whole bundle is client
        // code. Rollup drops per-file "use client" directives when it merges
        // everything into a single output file, so without this banner the
        // built dist/ files silently ship with no directive at all, and any
        // Next.js App Router consumer rendering these from a Server
        // Component crashes with "createContext is not a function".
        banner: '"use client";',
      },
    },
  },
});
