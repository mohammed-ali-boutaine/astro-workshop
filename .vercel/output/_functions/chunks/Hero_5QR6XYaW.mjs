import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_DJA7yQRE.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://astro-workshop-f18lrqfvg-mohammed-ali-boutaines-projects.vercel.app/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero-section" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>${title}</h1> <p data-astro-cid-bbe6dxrz>${subtitle}</p> </section> `;
}, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/components/Hero.astro", void 0);

export { $$Hero as $ };
