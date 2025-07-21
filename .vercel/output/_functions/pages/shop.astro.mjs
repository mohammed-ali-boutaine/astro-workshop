import { a as createComponent, d as renderComponent, e as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJA7yQRE.mjs';
import 'kleur/colors';
import { $ as $$ShopItems } from '../chunks/ShopItems_CFsbzv8x.mjs';
import { $ as $$Default } from '../chunks/default_g9h4UWKE.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Shop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "data-astro-cid-5w43p2qc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="shop" data-astro-cid-5w43p2qc> <h1 data-astro-cid-5w43p2qc>Shop Sandwich Kits</h1> <noscript> <p data-astro-cid-5w43p2qc>
JavaScript is required for the shopping cart. Please enable JavaScript or call (555) 123-4567 to place an order.
</p> </noscript> <div class="products" data-astro-cid-5w43p2qc> <!-- list products --> ${renderComponent($$result2, "ShopItems", $$ShopItems, { "addToCartButton": true, "data-astro-cid-5w43p2qc": true })} </div> <!-- Cart is now globally available in layout --> </div> ` })}  ${renderScript($$result, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/shop.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/shop.astro", void 0);

const $$file = "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/shop.astro";
const $$url = "/shop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Shop,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
