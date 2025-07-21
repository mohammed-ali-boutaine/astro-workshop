import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJA7yQRE.mjs';
import 'kleur/colors';
import { $ as $$Default } from '../chunks/default_g9h4UWKE.mjs';
import { $ as $$Hero } from '../chunks/Hero_5QR6XYaW.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const subTitle = `The history of sndwch is the history of all of us, really. Who among us hasn\u2019t set bravely forth to challenge the boundaries that limited those who came before us? Who hasn\u2019t felt the call to shed the senseless burdens of previous generations and embrace a brighter, happier, more unified future?

At sndwch, we believe in bringing people together. The overly restrictive labels of our past have divided us for too long.

Forget the labels. You don\u2019t need to stand alone. Explore a new world of joyful, unburdened flavors.

Because when you\u2019re here, just about everything can be a sandwich.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="about-page" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "About Savory", "subtitle": subTitle, "data-astro-cid-kh7btl4r": true })} <div class="about-container" data-astro-cid-kh7btl4r> <section class="story-section" data-astro-cid-kh7btl4r> <!-- <h2>About sndwch</h2> --> <div class="story-content" data-astro-cid-kh7btl4r></div> </section> <section class="mission-section" data-astro-cid-kh7btl4r> <div class="mission-content" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Our Mission</h2> <blockquote data-astro-cid-kh7btl4r>
"To create exceptional sandwiches that bring people together, using the finest ingredients and time-honored techniques, while building a sustainable future for our community."
</blockquote> <p class="mission-text" data-astro-cid-kh7btl4r>
Every sandwich we create is a testament to our commitment to quality, flavor, and community. We believe that great food has the power to bring people together, create memories, and brighten someone's day.
</p> </div> </section> <section class="stats-section" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>By the Numbers</h2> <div class="stats-grid" data-astro-cid-kh7btl4r> <div class="stat-item" data-astro-cid-kh7btl4r> <div class="stat-number" data-astro-cid-kh7btl4r>50,000+</div> <div class="stat-label" data-astro-cid-kh7btl4r>Sandwiches Crafted</div> </div> <div class="stat-item" data-astro-cid-kh7btl4r> <div class="stat-number" data-astro-cid-kh7btl4r>25+</div> <div class="stat-label" data-astro-cid-kh7btl4r>Local Suppliers</div> </div> <div class="stat-item" data-astro-cid-kh7btl4r> <div class="stat-number" data-astro-cid-kh7btl4r>8</div> <div class="stat-label" data-astro-cid-kh7btl4r>Years of Excellence</div> </div> <div class="stat-item" data-astro-cid-kh7btl4r> <div class="stat-number" data-astro-cid-kh7btl4r>100%</div> <div class="stat-label" data-astro-cid-kh7btl4r>Fresh Daily</div> </div> </div> </section> </div> </div> ` })} `;
}, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/about.astro", void 0);

const $$file = "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
