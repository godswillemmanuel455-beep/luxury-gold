import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, LogOut } from 'lucide-react';
import { useStore } from '../store/store';
import { auth } from '../services/firebase';
import './Navbar.css';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, cart, isAdmin } = useStore();

    const handleLogout = async () => {
        await auth.signOut();
    };

    const cartTotal = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">
                    <span className="logo-text">✨ Luxury Gold</span>
                </Link>

                <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/collections" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
                    
                    {user ? (
                        <>
                            {isAdmin && (
                                <Link to="/admin" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                                    Admin
                                </Link>
                            )}
                            <button onClick={handleLogout} className="nav-link logout-btn">
                                <LogOut size={18} /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                            <Link to="/register" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Register</Link>
                        </>
                    )}
                </div>

                <Link to="/cart" className="cart-icon">
                    <ShoppingCart size={24} />
                    {cartTotal > 0 && <span className="cart-badge">{cartTotal}</span>}
                </Link>

                <button 
                    className="hamburger" 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
}
