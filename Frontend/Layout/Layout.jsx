// src/layouts/Layout.jsx
import React, { useState, useEffect } from 'react';
import '../Styles/index.css';

// Reusable Inner Glass Navigation Component
const Navbar = ({ currentPage, onNavigate }) => (
    <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        background: 'rgba(10, 11, 13, 0.75)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    }}>
        <div 
            className="font-luxury" 
            onClick={() => onNavigate && onNavigate('home')}
            style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--accent-brass)', cursor: 'pointer', transition: '0.3s' }}
            onMouseOver={(e) => e.target.style.textShadow = '0 0 10px rgba(212,175,55,0.3)'}
            onMouseOut={(e) => e.target.style.textShadow = 'none'}
        >
            AURA & STONE <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>PRO</span>
        </div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '14px', alignItems: 'center' }}>
            <span 
                onClick={() => onNavigate && onNavigate('browse')}
                style={{ 
                    color: currentPage === 'browse' ? 'var(--accent-brass)' : 'var(--text-main)', 
                    textDecoration: 'none', cursor: 'pointer', transition: '0.3s' 
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent-brass)'}
                onMouseOut={(e) => e.target.style.color = currentPage === 'browse' ? 'var(--accent-brass)' : 'var(--text-main)'}
            >
                Browse Specialists
            </span>
            <span 
                onClick={() => onNavigate && onNavigate('dashboard')}
                style={{ 
                    color: currentPage === 'dashboard' ? 'var(--accent-brass)' : 'var(--text-muted)', 
                    textDecoration: 'none', cursor: 'pointer', transition: '0.3s' 
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent-brass)'}
                onMouseOut={(e) => e.target.style.color = currentPage === 'dashboard' ? 'var(--accent-brass)' : 'var(--text-muted)'}
            >
                Active Portfolios
            </span>
            <span 
                onClick={() => onNavigate && onNavigate('pricing')}
                style={{ 
                    color: currentPage === 'pricing' ? 'var(--accent-brass)' : 'var(--text-muted)', 
                    textDecoration: 'none', cursor: 'pointer', transition: '0.3s' 
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent-brass)'}
                onMouseOut={(e) => e.target.style.color = currentPage === 'pricing' ? 'var(--accent-brass)' : 'var(--text-muted)'}
            >
                Pricing Models
            </span>
            <span 
                onClick={() => onNavigate && onNavigate('contact')}
                style={{ 
                    color: currentPage === 'contact' ? 'var(--accent-brass)' : 'var(--text-muted)', 
                    textDecoration: 'none', cursor: 'pointer', transition: '0.3s' 
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent-brass)'}
                onMouseOut={(e) => e.target.style.color = currentPage === 'contact' ? 'var(--accent-brass)' : 'var(--text-muted)'}
            >
                Contact Us
            </span>
            <button 
                onClick={() => onNavigate && onNavigate('contact')}
                style={{
                    background: 'transparent', border: '1px solid var(--accent-brass)',
                    color: 'var(--accent-brass)', padding: '8px 20px', borderRadius: '2px', cursor: 'pointer',
                    fontFamily: 'Cinzel', fontSize: '12px', transition: 'all 0.3s'
                }} 
                onMouseOver={(e) => e.target.style.background = 'rgba(212,175,55,0.1)'}
                onMouseOut={(e) => e.target.style.background = 'transparent'}
            >
                INITIATE STREAM
            </button>
        </div>
    </nav>
);

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