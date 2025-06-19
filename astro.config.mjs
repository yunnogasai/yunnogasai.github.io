// @ts-check
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
// https://astro.build/config
export default defineConfig({
    site: "https://yunnogasai.github.io",
    integrations: [sitemap()],
    srcDir: "./src",
    publicDir: "./resources",
    outDir: "./dist",
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
    markdown: {
        rehypePlugins: [
            [
                rehypeExternalLinks,
                {
                    target: "_blank", // 为外部链接添加 target="_blank"
                    rel: ["noopener", "noreferrer"], // 为了安全，推荐添加 rel 属性
                },
            ],
        ],
    },
});
