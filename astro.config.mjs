// @ts-check
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
    site: "https://yunnogasai.github.io",
    integrations: [sitemap()],
    scopedStyleStrategy: "where",
    build: {
        format: "file",
    },
    server: {
        port: 1116,
    },
    vite: {
        plugins: [
            visualizer({
                emitFile: true,
                filename: "stats.html",
            }),
        ],
    },
});
