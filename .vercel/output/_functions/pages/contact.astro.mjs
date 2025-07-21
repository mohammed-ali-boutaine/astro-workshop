import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJA7yQRE.mjs';
import 'kleur/colors';
import { $ as $$Default } from '../chunks/default_g9h4UWKE.mjs';
import { $ as $$Hero } from '../chunks/Hero_5QR6XYaW.mjs';
import { $ as $$ContactSection } from '../chunks/ContactSection_CSiJGbbp.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="contact-page" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Get in Touch", "subtitle": "Have questions about our sandwiches? Want to collaborate? We'd love to hear from you!", "data-astro-cid-uw5kdbxl": true })} ${renderComponent($$result2, "ContactSection", $$ContactSection, { "data-astro-cid-uw5kdbxl": true })} </div> ` })} `;
}, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/contact.astro", void 0);

const $$file = "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
