import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Luxury Gold</h3>
                    <p>Premium handcrafted jewelry for elegance and style</p>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <div className="contact-item">
                        <Mail size={18} />
                        <a href="mailto:godswillemmanuel455@gmail.com">godswillemmanuel455@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <Phone size={18} />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>123 Luxury Ave, Gold City, NY 10001</span>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/luxury-gold/">Home</a></li>
                        <li><a href="/luxury-gold/collections">Collections</a></li>
                        <li><a href="/luxury-gold/cart">Cart</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <p>Subscribe for exclusive updates</p>
                    <form className="newsletter-form">
                        <input 
                            type="email" 
                            placeholder="Your email" 
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Luxury Gold. All rights reserved. | Premium Jewelry Crafted with Excellence</p>
            </div>
        </footer>
    );
}
