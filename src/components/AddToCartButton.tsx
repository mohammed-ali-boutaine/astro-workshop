import { useState } from 'react';
import { addToCart } from '../stores/cart';
import { ShopItem } from '../types';

export default function AddToCartButton({ product }: { product: ShopItem }) {
	const [isAdding, setIsAdding] = useState(false);

	const handleAddToCart = async () => {
		setIsAdding(true);
		addToCart({ ...product });

		// Brief feedback animation
		setTimeout(() => {
			setIsAdding(false);
		}, 500);
	};

	return (
		<button
			onClick={handleAddToCart}
			disabled={isAdding}
			className={`big-link add-to-cart-btn ${isAdding ? 'adding' : ''}`}
			aria-label={`Add ${product.title} to cart`}
		>
			{isAdding ? '✓ Added!' : 'Add to Cart'}
		</button>
	);
}
