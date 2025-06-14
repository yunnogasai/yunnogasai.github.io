// @ts-check
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";
// https://astro.build/config
export default defineConfig({
    site: "https://yunnogasai.github.io",
    server: { port: 1116 },
    scopedStyleStrategy: "where",
    build: { format: "file" },

    vite: {
        plugins: [
            visualizer({
                emitFile: true,
                filename: "stats.html",
            }),
        ],
    },
});
