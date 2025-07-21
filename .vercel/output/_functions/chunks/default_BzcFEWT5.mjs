import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, k as renderHead, d as renderComponent, f as renderSlot, e as renderScript } from './astro/server_DJA7yQRE.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { useEffect } from 'react';

const $$Astro$1 = createAstro("https://medali.me/");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const links = [
    { label: "Shop", path: "/shop" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-pux6a34n> <a href="/" rel="home" data-astro-cid-pux6a34n> <span role="img" aria-label="hotdog" data-astro-cid-pux6a34n>🌭</span>
Savory
</a> <nav data-astro-cid-pux6a34n> ${links.map((link) => renderTemplate`<a${addAttribute(link.path, "href")}${addAttribute(currentPath === link.path ? "active" : "", "class")} data-astro-cid-pux6a34n> ${link.label} </a>`)} </nav> </header> `;
}, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/components/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <div class="footer-section" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>Savory</h3> <p data-astro-cid-sz7xmlte>Crafting exceptional sandwiches since 2017. Quality ingredients, bold flavors, unforgettable experiences.</p> </div> <div class="footer-section" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Quick Links</h4> <nav data-astro-cid-sz7xmlte> <a href="/shop" data-astro-cid-sz7xmlte>Shop</a> <a href="/blog" data-astro-cid-sz7xmlte>Blog</a> <a href="/about" data-astro-cid-sz7xmlte>About</a> <a href="/contact" data-astro-cid-sz7xmlte>Contact</a> </nav> </div> <div class="footer-section" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Follow Us</h4> <div class="social-links" data-astro-cid-sz7xmlte> <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener" data-astro-cid-sz7xmlte> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-astro-cid-sz7xmlte></path> </svg> </a> <a href="https://twitter.com" aria-label="Twitter/X" target="_blank" rel="noopener" data-astro-cid-sz7xmlte> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-sz7xmlte></path> </svg> </a> <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener" data-astro-cid-sz7xmlte> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-sz7xmlte></path> </svg> </a> <a href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener" data-astro-cid-sz7xmlte> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" data-astro-cid-sz7xmlte></path> </svg> </a> </div> </div> </div> <div class="footer-bottom" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${currentYear} Savory. All rights reserved.</p> <p data-astro-cid-sz7xmlte> <a href="/privacy" data-astro-cid-sz7xmlte>Privacy Policy</a> <span data-astro-cid-sz7xmlte>•</span> <a href="/terms" data-astro-cid-sz7xmlte>Terms of Service</a> <span data-astro-cid-sz7xmlte>•</span> <a href="/accessibility" data-astro-cid-sz7xmlte>Accessibility</a> </p> </div> </footer> `;
}, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/components/Footer.astro", void 0);

const CART_STORAGE_KEY = "sndwch-cart";
const loadCartFromStorage = () => {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error);
    return [];
  }
};
const saveCartToStorage = (cartItems) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
};
const cart = atom(loadCartFromStorage());
const addToCart = (item) => {
  const currentCart = cart.get();
  const existingItemIndex = currentCart.findIndex(
    (cartItem) => cartItem.id === item.id
  );
  if (existingItemIndex > -1) {
    currentCart[existingItemIndex].quantity += 1;
  } else {
    currentCart.push({
      quantity: 1,
      item,
      id: item.id
    });
  }
  const newCart = [...currentCart];
  cart.set(newCart);
  saveCartToStorage(newCart);
};
const removeFromCart = (itemId) => {
  const currentCart = cart.get();
  const updatedCart = currentCart.filter((cartItem) => cartItem.id !== itemId);
  cart.set(updatedCart);
  saveCartToStorage(updatedCart);
};
const increaseQuantity = (itemId) => {
  const currentCart = cart.get();
  const itemIndex = currentCart.findIndex((cartItem) => cartItem.id === itemId);
  if (itemIndex > -1) {
    currentCart[itemIndex].quantity += 1;
    const newCart = [...currentCart];
    cart.set(newCart);
    saveCartToStorage(newCart);
  }
};
const decreaseQuantity = (itemId) => {
  const currentCart = cart.get();
  const itemIndex = currentCart.findIndex((cartItem) => cartItem.id === itemId);
  if (itemIndex > -1) {
    if (currentCart[itemIndex].quantity > 1) {
      currentCart[itemIndex].quantity -= 1;
      const newCart = [...currentCart];
      cart.set(newCart);
      saveCartToStorage(newCart);
    } else {
      removeFromCart(itemId);
    }
  }
};
const clearCart = () => {
  cart.set([]);
  saveCartToStorage([]);
};

function Cart() {
  const $cart = useStore(cart);
  const total = $cart.reduce(
    (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  );
  useEffect(() => {
    const event = new CustomEvent("cartUpdated", {
      detail: { count: $cart.length }
    });
    window.dispatchEvent(event);
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = $cart.length.toString();
    }
  }, [$cart]);
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(amount);
  };
  if ($cart.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "cart-container fixed-cart", children: [
      /* @__PURE__ */ jsxs("div", { className: "cart-header", children: [
        /* @__PURE__ */ jsx("h2", { className: "cart-title", children: "🛒 Your Cart" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "close-cart-btn",
            onClick: () => {
              const cartPanel = document.getElementById("cart-panel");
              cartPanel?.classList.remove("open");
            },
            children: "×"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "empty-cart", children: [
        /* @__PURE__ */ jsx("p", { children: "Your cart is empty" }),
        /* @__PURE__ */ jsx("span", { className: "empty-cart-icon", children: "🛍️" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "cart-container fixed-cart", children: [
    /* @__PURE__ */ jsxs("div", { className: "cart-header", children: [
      /* @__PURE__ */ jsx("h2", { className: "cart-title", children: "🛒 Your Cart" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "close-cart-btn",
          onClick: () => {
            const cartPanel = document.getElementById("cart-panel");
            cartPanel?.classList.remove("open");
          },
          children: "×"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "cart-items", children: $cart.map((cartItem) => /* @__PURE__ */ jsxs("div", { className: "cart-item", children: [
      /* @__PURE__ */ jsxs("div", { className: "item-info", children: [
        /* @__PURE__ */ jsx("h4", { className: "item-name", children: cartItem.item.title }),
        /* @__PURE__ */ jsx("p", { className: "item-price", children: formatCurrency(cartItem.item.price) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "quantity-controls", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "quantity-btn decrease",
            onClick: () => decreaseQuantity(cartItem.id),
            "aria-label": "Decrease quantity",
            children: "−"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "quantity", children: cartItem.quantity }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "quantity-btn increase",
            onClick: () => increaseQuantity(cartItem.id),
            "aria-label": "Increase quantity",
            children: "+"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "item-total", children: formatCurrency(cartItem.item.price * cartItem.quantity) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "remove-btn",
          onClick: () => removeFromCart(cartItem.id),
          "aria-label": `Remove ${cartItem.item.title} from cart`,
          children: "🗑️"
        }
      )
    ] }, cartItem.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "cart-summary", children: [
      /* @__PURE__ */ jsxs("div", { className: "total-row", children: [
        /* @__PURE__ */ jsx("span", { className: "total-label", children: "Total:" }),
        /* @__PURE__ */ jsx("span", { className: "total-amount", children: formatCurrency(total) })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: clearCart, className: "clear-cart-btn", children: "Clear Cart" })
    ] })
  ] });
}

const $$Astro = createAstro("https://medali.me/");
const $$Default = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Default;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@700&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Make great sandwiches at home with sndwch</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navigation", $$Navigation, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> <!-- Fixed Cart Toggle Button (site-wide) --> <button id="cart-toggle" class="cart-toggle-btn">
🛒 <span id="cart-count">0</span> </button> <!-- Fixed Cart Panel (site-wide) --> <div id="cart-panel" class="cart-panel"> <div id="cart-content"> ${renderComponent($$result, "Cart", Cart, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/components/Cart.tsx", "client:component-export": "default" })} </div> </div> ${renderComponent($$result, "Footer", $$Footer, {})}  ${renderScript($$result, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/layouts/default.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/ali/Desktop/projects/astro-frontend-masters/src/layouts/default.astro", void 0);

export { $$Default as $, addToCart as a };
