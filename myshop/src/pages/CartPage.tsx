import { useCart } from '../features/cart/CartContext';
import { Link } from 'react-router-dom';
import '../styles/pages/cart.css';

export default function CartPage() {
    const { state, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (state.items.length === 0) {
        return (
            <div className="cart-page">
                <div className="container">
                    <h1>Shopping Cart</h1>
                    <div className="empty-cart">
                        <p>Your cart is empty</p>
                        <Link to="/products" className="btn primary">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container">
                <h1>Shopping Cart</h1>

                <div className="cart-content">
                    <div className="cart-items">
                        {state.items.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p className="price">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="item-quantity">
                                    <button
                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                        +
                                    </button>
                                </div>
                                <div className="item-total">
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping:</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <Link to="/checkout" className="btn primary wide">
                            Proceed to Checkout
                        </Link>
                        <button className="btn secondary wide" onClick={clearCart}>
                            Clear Cart
                        </button>
                        <Link to="/products" className="btn tertiary wide">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
