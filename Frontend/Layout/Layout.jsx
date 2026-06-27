// src/layouts/Layout.jsx
import React, { useState, useEffect } from 'react';
import '../Styles/index.css';

// Reusable Inner Glass Navigation Component
const Navbar = ({ currentPage, onNavigate }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="navbar-container">
            <div 
                className="font-luxury navbar-logo" 
                onClick={() => { onNavigate && onNavigate('home'); setMobileMenuOpen(false); }}
            >
                AURA & STONE <span className="logo-pro-tag">PRO</span>
            </div>

            {/* Hamburger Button for Mobile View */}
            <div 
                className="hamburger-menu-btn" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
            >
                <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
            </div>

            {/* Navigation Links (Responsive Desktop/Mobile Drawer) */}
            <div className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <span 
                    onClick={() => { onNavigate && onNavigate('home'); setMobileMenuOpen(false); }}
                    className={`nav-link-item ${currentPage === 'home' ? 'active' : ''}`}
                >
                    Home
                </span>
                <span 
                    onClick={() => { onNavigate && onNavigate('browse'); setMobileMenuOpen(false); }}
                    className={`nav-link-item ${currentPage === 'browse' ? 'active' : ''}`}
                >
                    Browse Specialists
                </span>
                <span 
                    onClick={() => { onNavigate && onNavigate('dashboard'); setMobileMenuOpen(false); }}
                    className={`nav-link-item ${currentPage === 'dashboard' ? 'active' : ''}`}
                >
                    Active Portfolios
                </span>
                <span 
                    onClick={() => { onNavigate && onNavigate('pricing'); setMobileMenuOpen(false); }}
                    className={`nav-link-item ${currentPage === 'pricing' ? 'active' : ''}`}
                >
                    Pricing Models
                </span>
                <span 
                    onClick={() => { onNavigate && onNavigate('contact'); setMobileMenuOpen(false); }}
                    className={`nav-link-item ${currentPage === 'contact' ? 'active' : ''}`}
                >
                    Contact Us
                </span>
                <button 
                    onClick={() => { onNavigate && onNavigate('contact'); setMobileMenuOpen(false); }}
                    className="initiate-stream-btn"
                >
                    INITIATE STREAM
                </button>
            </div>
        </nav>
    );
};

// Reusable Minimal Footer
const Footer = ({ onNavigate }) => (
    <footer style={{
        background: 'var(--bg-secondary)', padding: '60px 40px 40px 40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.03)', marginTop: '100px',
        textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)'
    }}>
        <p 
            className="font-luxury" 
            onClick={() => onNavigate && onNavigate('home')}
            style={{ color: 'var(--accent-brass)', marginBottom: '15px', fontSize: '16px', cursor: 'pointer', letterSpacing: '2px' }}
        >
            ARCHITECTURAL BRILLIANCE DEFINED
        </p>
        <div style={{ maxWidth: '600px', margin: '0 auto 25px auto', lineHeight: '1.8', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '20px' }}>
            <span style={{ color: '#fff', display: 'block', marginBottom: '5px', fontWeight: '500' }}>HQ: 704 Sherman St, Wayne, NE 68787, United States</span>
            <span>Tel: +1 (402) 375-1700 &nbsp;|&nbsp; Plus Code: 6XPG+9C Wayne, Nebraska, USA</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '25px' }}>
            <span onClick={() => onNavigate && onNavigate('browse')} style={{ cursor: 'pointer', transition: '0.3s' }} onMouseOver={(e)=>e.target.style.color='var(--accent-brass)'} onMouseOut={(e)=>e.target.style.color='var(--text-muted)'}>Specialists Index</span>
            <span onClick={() => onNavigate && onNavigate('privacy')} style={{ cursor: 'pointer', transition: '0.3s' }} onMouseOver={(e)=>e.target.style.color='var(--accent-brass)'} onMouseOut={(e)=>e.target.style.color='var(--text-muted)'}>Privacy Protocols</span>
            <span onClick={() => onNavigate && onNavigate('contact')} style={{ cursor: 'pointer', transition: '0.3s' }} onMouseOver={(e)=>e.target.style.color='var(--accent-brass)'} onMouseOut={(e)=>e.target.style.color='var(--text-muted)'}>Contact Headquarters</span>
        </div>
        <p>© 2026 Aura & Stone Networks. Elevating Digital Space Matching.</p>
    </footer>
);

export default function Layout({ children, currentPage, onNavigate }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, [currentPage]); // Re-trigger fade-in animation on page change

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            {/* Background Decorative Ambient Glows */}
            <div style={{
                position: 'absolute', top: '10%', left: '70%', width: '400px', height: '400px',
                background: 'rgba(212, 175, 55, 0.03)', filter: 'blur(150px)', pointerEvents: 'none', zIndex: 0
            }} />
            <div style={{
                position: 'absolute', top: '60%', left: '-10%', width: '500px', height: '500px',
                background: 'rgba(30, 40, 60, 0.2)', filter: 'blur(180px)', pointerEvents: 'none', zIndex: 0
            }} />

            <Navbar currentPage={currentPage} onNavigate={onNavigate} />

            <main key={currentPage} className={isLoaded ? 'fade-in-load' : ''} style={{
                flex: 1, paddingTop: '100px', zIndex: 1, position: 'relative'
            }}>
                {children}
            </main>

            <Footer onNavigate={onNavigate} />
        </div>
    );
}