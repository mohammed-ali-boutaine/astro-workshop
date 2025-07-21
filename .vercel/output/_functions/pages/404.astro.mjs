import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, f as renderSlot } from '../chunks/astro/server_DJA7yQRE.mjs';
import 'kleur/colors';
import { $ as $$Default } from '../chunks/default_BzcFEWT5.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Page = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="block page"> ${renderSlot($$result2, $$slots["default"])} </section> ` })}`;
}, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/layouts/page.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="not-found" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>Page not found (404)</h1> <img src="https://images.unsplash.com/photo-1531928351158-2f736078e0a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="an empty plate with a frowny face drawn on it" data-astro-cid-zetdm5md> <p data-astro-cid-zetdm5md>Looks like the page you requested doesn’t exist.</p> <p data-astro-cid-zetdm5md><a href="/" data-astro-cid-zetdm5md>&larr; back home</a></p> </div>  ` })}`;
}, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/404.astro", void 0);

const $$file = "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
     __proto__: null,
     default: $$404,
     file: $$file,
     url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
