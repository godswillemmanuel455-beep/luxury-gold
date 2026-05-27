import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useStore } from '../store/store';
import './ProductCard.css';

export default function ProductCard({ product }) {
    const addToCart = useStore(state => state.addToCart);

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product);
    };

    return (
        <Link to={`/product/${product.id}`} className="product-card">
            <div className="product-image-container">
                <img 
                    src={product.image} 
                    alt={product.name}
                    loading="lazy"
                    className="product-image"
                />
                <div className="product-overlay">
                    <button 
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}
                    >
                        <ShoppingCart size={20} /> Add to Cart
                    </button>
                </div>
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.minPrice} – ${product.maxPrice}</p>
            </div>
        </Link>
    );
}
