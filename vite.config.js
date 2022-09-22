import path from "path"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"

export default defineConfig({
    clearScreen: false,
    build: {
        chunkSizeWarningLimit: 1000,
        minify: "terser",
    },
    plugins: [svelte(), splitVendorChunkPlugin()],
    resolve: {
        alias: {
            // make sure to add the same alias to tsconfig.json
            "@app": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/components"),
        },
    },
})
