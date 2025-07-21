// src/pages/rss.xml.js
import rss from '@astrojs/rss';
// import { AstroConfing } from 'astro';
import { AstroConfig } from 'astro';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context : AstroConfig) {
  const posts = await getCollection('blog');
  const rssContent = await rss({
    title: 'My Blog',
    description: 'Latest posts from my blog',
    site: context.site || 'https://medali.me', 
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
  });

  return {
    body: typeof rssContent === 'string' ? rssContent : await rssContent.text(),
  };
}