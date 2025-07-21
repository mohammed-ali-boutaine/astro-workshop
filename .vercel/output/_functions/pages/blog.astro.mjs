import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DJA7yQRE.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_BOG9faMl.mjs';
import { $ as $$Default } from '../chunks/default_BzcFEWT5.mjs';
import { $ as $$Hero } from '../chunks/Hero_DL3hGjA_.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const published = posts.filter((p) => !p.data.draft);
  const sortedPosts = published.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "The Savory Blog", "subtitle": "Discover kitchen secrets, chef stories, recipe tips, and behind-the-scenes magic from our culinary team.", "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<div class="blog-container" data-astro-cid-5tznm7mj> <div class="posts-grid" data-astro-cid-5tznm7mj> ${sortedPosts.map((post) => renderTemplate`<article class="post-card" data-astro-cid-5tznm7mj> ${post.data.image && renderTemplate`<div class="post-image" data-astro-cid-5tznm7mj> <img${addAttribute(post.data.image, "src")}${addAttribute(post.data.title, "alt")} loading="lazy" data-astro-cid-5tznm7mj> ${post.data.draft && renderTemplate`<div class="draft-badge" data-astro-cid-5tznm7mj>Draft</div>`} </div>`} <div class="post-content" data-astro-cid-5tznm7mj> <div class="post-meta" data-astro-cid-5tznm7mj> <time${addAttribute(post.data.date.toISOString(), "datetime")} data-astro-cid-5tznm7mj> ${post.data.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> </div> <h2 data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-5tznm7mj>${post.data.title}</a> </h2> ${post.data.description && renderTemplate`<p class="post-description" data-astro-cid-5tznm7mj>${post.data.description}</p>`} <a${addAttribute(`/blog/${post.slug}`, "href")} class="read-more" data-astro-cid-5tznm7mj>
Read More →
</a> </div> </article>`)} </div> ${sortedPosts.length === 0 && renderTemplate`<div class="no-posts" data-astro-cid-5tznm7mj> <p data-astro-cid-5tznm7mj>No blog posts available at the moment. Check back soon!</p> </div>`} </div>  <section class="cta-section" data-astro-cid-5tznm7mj> <div class="cta-container" data-astro-cid-5tznm7mj> <div class="cta-content" data-astro-cid-5tznm7mj> <h2 data-astro-cid-5tznm7mj>Ready to Cook Your Own Masterpiece?</h2> <p data-astro-cid-5tznm7mj>Get inspired by our blog posts and start creating delicious sandwiches in your own kitchen. From gourmet ingredients to professional techniques, we have everything you need to elevate your culinary game.</p> <div class="cta-buttons" data-astro-cid-5tznm7mj> <a href="/shop" class="cta-primary" data-astro-cid-5tznm7mj>Shop Sandwich Kits</a> <a href="/contact" class="cta-secondary" data-astro-cid-5tznm7mj>Get Cooking Tips</a> </div> </div> <div class="cta-features" data-astro-cid-5tznm7mj> <div class="feature" data-astro-cid-5tznm7mj> <div class="feature-icon" data-astro-cid-5tznm7mj> <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-5tznm7mj> <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" data-astro-cid-5tznm7mj></path> <path d="M12 19H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8Z" data-astro-cid-5tznm7mj></path> <path d="m8 8 4-4 4 4" data-astro-cid-5tznm7mj></path> </svg> </div> <h3 data-astro-cid-5tznm7mj>Premium Ingredients</h3> <p data-astro-cid-5tznm7mj>Hand-selected ingredients from local farms and artisan producers</p> </div> <div class="feature" data-astro-cid-5tznm7mj> <div class="feature-icon" data-astro-cid-5tznm7mj> <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-5tznm7mj> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" data-astro-cid-5tznm7mj></path> <rect x="8" y="2" width="8" height="4" rx="1" ry="1" data-astro-cid-5tznm7mj></rect> <path d="m9 14 2 2 4-4" data-astro-cid-5tznm7mj></path> </svg> </div> <h3 data-astro-cid-5tznm7mj>Chef Techniques</h3> <p data-astro-cid-5tznm7mj>Learn professional cooking methods from our experienced chefs</p> </div> <div class="feature" data-astro-cid-5tznm7mj> <div class="feature-icon" data-astro-cid-5tznm7mj> <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-5tznm7mj> <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" data-astro-cid-5tznm7mj></path> <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" data-astro-cid-5tznm7mj></path> <path d="M8 7h8" data-astro-cid-5tznm7mj></path> <path d="M8 11h8" data-astro-cid-5tznm7mj></path> <path d="M8 15h6" data-astro-cid-5tznm7mj></path> </svg> </div> <h3 data-astro-cid-5tznm7mj>Recipe Collections</h3> <p data-astro-cid-5tznm7mj>Access to exclusive recipes and step-by-step cooking guides</p> </div> </div> </div> </section>  ` })} `;
}, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
