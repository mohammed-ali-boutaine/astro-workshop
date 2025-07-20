import { useStore } from '@nanostores/react';
import {
	cart,
	removeFromCart,
	clearCart,
	increaseQuantity,
	decreaseQuantity,
} from '../stores/cart';
import { useEffect } from 'react';

export default function Cart() {
	const $cart = useStore(cart);

	const total = $cart.reduce(
		(sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
		0
	);

	// Dispatch cart update events for the toggle button
	useEffect(() => {
		const event = new CustomEvent('cartUpdated', {
			detail: { count: $cart.length },
		});
		window.dispatchEvent(event);

		// Update the cart count in the toggle button
		const cartCountElement = document.getElementById('cart-count');
		if (cartCountElement) {
			cartCountElement.textContent = $cart.length.toString();
		}
	}, [$cart]);

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(amount);
	};

	if ($cart.length === 0) {
		return (
			<div className="cart-container fixed-cart">
				<div className="cart-header">
					<h2 className="cart-title">🛒 Your Cart</h2>
					<button
						className="close-cart-btn"
						onClick={() => {
							const cartPanel = document.getElementById('cart-panel');
							cartPanel?.classList.remove('open');
						}}
					>
						×
					</button>
				</div>
				<div className="empty-cart">
					<p>Your cart is empty</p>
					<span className="empty-cart-icon">🛍️</span>
				</div>
			</div>
		);
	}

	return (
		<div className="cart-container fixed-cart">
			<div className="cart-header">
				<h2 className="cart-title">🛒 Your Cart</h2>
				<button
					className="close-cart-btn"
					onClick={() => {
						const cartPanel = document.getElementById('cart-panel');
						cartPanel?.classList.remove('open');
					}}
				>
					×
				</button>
			</div>

			<div className="cart-items">
				{$cart.map((cartItem) => (
					<div key={cartItem.id} className="cart-item">
						<div className="item-info">
							<h4 className="item-name">{cartItem.item.title}</h4>
							<p className="item-price">
								{formatCurrency(cartItem.item.price)}
							</p>
						</div>

						<div className="quantity-controls">
							<button
								className="quantity-btn decrease"
								onClick={() => decreaseQuantity(cartItem.id)}
								aria-label="Decrease quantity"
							>
								−
							</button>
							<span className="quantity">{cartItem.quantity}</span>
							<button
								className="quantity-btn increase"
								onClick={() => increaseQuantity(cartItem.id)}
								aria-label="Increase quantity"
							>
								+
							</button>
						</div>

						<div className="item-total">
							{formatCurrency(cartItem.item.price * cartItem.quantity)}
						</div>

						<button
							className="remove-btn"
							onClick={() => removeFromCart(cartItem.id)}
							aria-label={`Remove ${cartItem.item.title} from cart`}
						>
							🗑️
						</button>
					</div>
				))}
			</div>

			<div className="cart-summary">
				<div className="total-row">
					<span className="total-label">Total:</span>
					<span className="total-amount">{formatCurrency(total)}</span>
				</div>
				<button onClick={clearCart} className="clear-cart-btn">
					Clear Cart
				</button>
			</div>
		</div>
	);
}
