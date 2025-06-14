import rss, { pagesGlobToRssItems } from "@astrojs/rss";


export async function GET(context: any) {
    const record: Record<string, string> = {
        "atom": "http://www.w3.org/2005/Atom",

    }
    return rss({
        xmlns: record,
        title: "Yuno blog",
        description: "写一些东西()",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    });
}
