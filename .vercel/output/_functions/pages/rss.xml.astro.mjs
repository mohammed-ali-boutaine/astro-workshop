import rss from '@astrojs/rss';
import { a as getCollection } from '../chunks/_astro_content_DA5OKawJ.mjs';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
export { renderers } from '../renderers.mjs';

const parser = new MarkdownIt();
async function GET(context) {
  const posts = await getCollection("blog");
  const rssContent = await rss({
    title: "My Blog",
    description: "Latest posts from my blog",
    site: context.site || "https://astro-workshop-f18lrqfvg-mohammed-ali-boutaines-projects.vercel.app/",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body))
    }))
  });
  return {
    body: typeof rssContent === "string" ? rssContent : await rssContent.text()
  };
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
