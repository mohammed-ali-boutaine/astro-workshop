import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DJA7yQRE.mjs';
import 'kleur/colors';
import { g as getEntryBySlug, a as getCollection } from '../../chunks/_astro_content_DA5OKawJ.mjs';
import { $ as $$Default } from '../../chunks/default_g9h4UWKE.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-workshop-f18lrqfvg-mohammed-ali-boutaines-projects.vercel.app/");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { entry } = Astro2.props;
  const post = entry || await getEntryBySlug("blog", slug);
  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }
  const { Content } = await post.render();
  const { data } = post;
  if (data.draft && true) {
    return Astro2.redirect("/blog");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="blog-post" data-astro-cid-4sn4zg3r> ${data.draft && renderTemplate`<div class="draft-banner" data-astro-cid-4sn4zg3r> <p data-astro-cid-4sn4zg3r>⚠️ This is a draft post and may not be complete.</p> </div>`} ${data.image && renderTemplate`<div class="post-image" data-astro-cid-4sn4zg3r> <img${addAttribute(data.image, "src")}${addAttribute(data.title, "alt")} data-astro-cid-4sn4zg3r> </div>`} <header class="post-header" data-astro-cid-4sn4zg3r> <h1 data-astro-cid-4sn4zg3r>${data.title}</h1> <div class="post-meta" data-astro-cid-4sn4zg3r> <time${addAttribute(data.date.toISOString(), "datetime")} data-astro-cid-4sn4zg3r> ${data.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> ${data.draft && renderTemplate`<span class="draft-indicator" data-astro-cid-4sn4zg3r>Draft</span>`} </div> ${data.description && renderTemplate`<p class="post-description" data-astro-cid-4sn4zg3r>${data.description}</p>`} </header> <div class="post-content" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-4sn4zg3r": true })} </div> <!-- CTA Section --> <section class="post-cta" data-astro-cid-4sn4zg3r> <div class="cta-card" data-astro-cid-4sn4zg3r> <h3 data-astro-cid-4sn4zg3r>Love This Recipe? Try It at Home!</h3> <p data-astro-cid-4sn4zg3r>Get all the ingredients and step-by-step instructions delivered to your door. Start cooking like a pro with our curated sandwich kits.</p> <div class="cta-actions" data-astro-cid-4sn4zg3r> <a href="/shop" class="cta-button primary" data-astro-cid-4sn4zg3r>Shop Sandwich Kits</a> <a href="/blog" class="cta-button secondary" data-astro-cid-4sn4zg3r>Read More Recipes</a> </div> </div> </section> <footer class="post-footer" data-astro-cid-4sn4zg3r> <a href="/blog/" class="back-link" data-astro-cid-4sn4zg3r>← Back to all posts</a> </footer> </article> ` })} `;
}, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/blog/[slug].astro", void 0);
const $$file = "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
