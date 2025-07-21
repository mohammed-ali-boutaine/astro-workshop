import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, d as renderComponent } from './astro/server_DJA7yQRE.mjs';
import 'kleur/colors';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { a as addToCart } from './default_g9h4UWKE.mjs';
/* empty css                         */

function AddToCartButton({ product }) {
  const [isAdding, setIsAdding] = useState(false);
  const handleAddToCart = async () => {
    setIsAdding(true);
    addToCart({ ...product });
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleAddToCart,
      disabled: isAdding,
      className: `big-link add-to-cart-btn ${isAdding ? "adding" : ""}`,
      "aria-label": `Add ${product.title} to cart`,
      children: isAdding ? "✓ Added!" : "Add to Cart"
    }
  );
}

const $$Astro = createAstro("https://astro-workshop-f18lrqfvg-mohammed-ali-boutaines-projects.vercel.app/");
const $$ShopItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ShopItems;
  const { count = Infinity, addToCartButton = true } = Astro2.props;
  function formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(amount);
  }
  const API_URL = "https://astro-frontend-masters-api.netlify.app/api/products";
  let shopItems = [];
  let hasError = false;
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    shopItems = await response.json();
  } catch (error) {
    console.error("Failed to fetch shop items:", error);
    hasError = true;
  }
  return renderTemplate`${maybeRenderHead()}<div class="shop-items" data-astro-cid-yrcbyhum> ${hasError ? renderTemplate`<div class="error-message" data-astro-cid-yrcbyhum> <p data-astro-cid-yrcbyhum>Sorry, we're having trouble loading products right now.</p> </div>` : shopItems.length === 0 ? renderTemplate`<div class="loading-message" data-astro-cid-yrcbyhum> <div class="spinner" data-astro-cid-yrcbyhum></div> <p data-astro-cid-yrcbyhum>Loading products...</p> </div>` : shopItems.reverse().slice(0, count).map((item) => renderTemplate`<article class="item" itemscope itemtype="https://schema.org/Product" data-astro-cid-yrcbyhum> <div class="item-image" data-astro-cid-yrcbyhum> <img${addAttribute(item.image.src, "src")}${addAttribute(item.image.alt, "alt")} loading="lazy" itemprop="image" data-astro-cid-yrcbyhum> </div> <div class="item-content" data-astro-cid-yrcbyhum> <h3 class="item-title" itemprop="name" data-astro-cid-yrcbyhum>${item.title}</h3> <p class="item-description" itemprop="description" data-astro-cid-yrcbyhum>${item.description}</p> <div class="item-footer" data-astro-cid-yrcbyhum> <span class="price" itemprop="price"${addAttribute(item.price.toString(), "data-content")} data-astro-cid-yrcbyhum> ${formatCurrency(item.price)} </span> ${addToCartButton && renderTemplate`${renderComponent($$result, "AddToCartButton", AddToCartButton, { "client:load": true, "product": item, "client:component-hydration": "load", "client:component-path": "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/components/AddToCartButton", "client:component-export": "default", "data-astro-cid-yrcbyhum": true })}`} </div> </div> </article>`)} </div> `;
}, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/components/ShopItems.astro", void 0);

export { $$ShopItems as $ };
