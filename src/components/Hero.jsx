import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Luxury Gold Jewelry Collection</h1>
                <p className="hero-subtitle">Premium handcrafted jewelry for elegance and style</p>
                <Link to="/collections" className="cta-button">
                    Shop Now
                </Link>
            </div>
            <div className="hero-background">
                <div className="gold-accent top-left"></div>
                <div className="gold-accent bottom-right"></div>
            </div>
        </section>
    );
}
