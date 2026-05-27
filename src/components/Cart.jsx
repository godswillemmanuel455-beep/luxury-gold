import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus } from 'lucide-react';
import { useStore } from '../store/store';
import './Cart.css';

export default function Cart() {
    const { cart, removeFromCart, updateCartQuantity } = useStore();

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            
            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty</p>
                    <Link to="/collections" className="continue-shopping">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="cart-content">
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                                <div className="quantity-controls">
                                    <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
                                        <Minus size={18} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
                                        <Plus size={18} />
                                    </button>
                                </div>
                                <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
                                <button 
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax (10%):</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <Link to="/checkout" className="checkout-btn">
                            Proceed to Checkout
                        </Link>
                        <Link to="/collections" className="continue-shopping">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
