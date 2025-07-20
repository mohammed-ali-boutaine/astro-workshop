import { atom } from 'nanostores';
import { CartItem, ShopItem } from '../types';

// Helper functions for localStorage
const CART_STORAGE_KEY = 'sndwch-cart';

const loadCartFromStorage = (): CartItem[] => {
	if (typeof window === 'undefined') return [];

	try {
		const stored = localStorage.getItem(CART_STORAGE_KEY);
		return stored ? JSON.parse(stored) : [];
	} catch (error) {
		console.error('Failed to load cart from localStorage:', error);
		return [];
	}
};

const saveCartToStorage = (cartItems: CartItem[]) => {
	if (typeof window === 'undefined') return;

	try {
		localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
	} catch (error) {
		console.error('Failed to save cart to localStorage:', error);
	}
};

// Initialize cart with data from localStorage
export const cart = atom<CartItem[]>(loadCartFromStorage());

export const addToCart = (item: ShopItem) => {
	const currentCart = cart.get();
	const existingItemIndex = currentCart.findIndex(
		(cartItem) => cartItem.id === item.id
	);

	if (existingItemIndex > -1) {
		// Update quantity if item already exists in the cart
		currentCart[existingItemIndex].quantity += 1;
	} else {
		// Add new item to the cart
		currentCart.push({
			quantity: 1,
			item,
			id: item.id,
		});
	}

	const newCart = [...currentCart];
	cart.set(newCart);
	saveCartToStorage(newCart);
};

export const removeFromCart = (itemId: number) => {
	const currentCart = cart.get();
	const updatedCart = currentCart.filter((cartItem) => cartItem.id !== itemId);
	cart.set(updatedCart);
	saveCartToStorage(updatedCart);
};

export const increaseQuantity = (itemId: number) => {
	const currentCart = cart.get();
	const itemIndex = currentCart.findIndex((cartItem) => cartItem.id === itemId);

	if (itemIndex > -1) {
		currentCart[itemIndex].quantity += 1;
		const newCart = [...currentCart];
		cart.set(newCart);
		saveCartToStorage(newCart);
	}
};

export const decreaseQuantity = (itemId: number) => {
	const currentCart = cart.get();
	const itemIndex = currentCart.findIndex((cartItem) => cartItem.id === itemId);

	if (itemIndex > -1) {
		if (currentCart[itemIndex].quantity > 1) {
			currentCart[itemIndex].quantity -= 1;
			const newCart = [...currentCart];
			cart.set(newCart);
			saveCartToStorage(newCart);
		} else {
			// Remove item if quantity becomes 0
			removeFromCart(itemId);
		}
	}
};

export const clearCart = () => {
	cart.set([]);
	saveCartToStorage([]);
};
export const getCartTotal = () => {
	const currentCart = cart.get();
	return currentCart.reduce(
		(total, cartItem) => total + cartItem.item.price * cartItem.quantity,
		0
	);
};
