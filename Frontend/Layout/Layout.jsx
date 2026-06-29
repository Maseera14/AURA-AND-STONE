// src/layouts/Layout.jsx
import React, { useState, useEffect } from 'react';
import { professionals as localProfessionals } from '../Data/professionals.js';
import '../Styles/index.css';


// Reusable Portfolio Sidebar Drawer Component
const Sidebar = ({ isOpen, onClose, professionals, onNavigate }) => {
    return (
        <>
            <div 
                className={`portfolio-sidebar-overlay ${isOpen ? 'visible' : ''}`} 
                onClick={onClose}
            />
            <div className={`portfolio-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="portfolio-sidebar-header">
                    <span className="font-luxury" style={{ color: 'var(--accent-brass)', fontSize: '18px', letterSpacing: '2px', fontWeight: 'bold' }}>
                        PORTFOLIO INDEX
                    </span>
                    <button className="sidebar-close-btn" onClick={onClose} aria-label="Close Sidebar">
                        ✕
                    </button>
                </div>
                <div className="sidebar-portfolio-list">
                    {professionals.map((pro) => (
                        <div 
                            key={pro._id || pro.id} 
                            className="sidebar-portfolio-item"
                            onClick={() => {
                                onNavigate && onNavigate('pro-profile', pro);
                                onClose();
                            }}
                        >
                            <img 
                                src={pro.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=100&q=80"} 
                                alt={pro.name} 
                                className="sidebar-pro-thumb"
                            />
                            <div className="sidebar-pro-info">
                                <div className="sidebar-pro-name">{pro.name}</div>
                                <div className="sidebar-pro-sector">{pro.sector}</div>
                            </div>
                            <div className="sidebar-pro-rating">
                                ★ {pro.rating.toFixed(1)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

// Reusable Theme Switcher Component
const ThemeSwitcher = ({ theme, onChangeTheme }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const themes = [
        { 
            id: 'dark', 
            label: 'Dark', 
            icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'all 0.3s' }}>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            )
        },
        { 
            id: 'light', 
            label: 'Light', 
            icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'all 0.3s' }}>
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            )
        },
        { 
            id: 'vintage', 
            label: 'Vintage', 
            icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'all 0.3s' }}>
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                    <line x1="16" y1="8" x2="2" y2="22"></line>
                    <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
            )
        }
    ];

    const activeThemeObj = themes.find(t => t.id === theme) || themes[0];
    
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border-glow)',
                    color: 'var(--accent-brass)',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    padding: 0,
                    outline: 'none'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-brass)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-glow)';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
                aria-label="Toggle Theme Menu"
            >
                {activeThemeObj.icon}
            </button>
            
            {dropdownOpen && (
                <>
                    <div 
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }} 
                        onClick={() => setDropdownOpen(false)}
                    />
                    
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        marginTop: '10px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-glow)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                        backdropFilter: 'blur(15px)',
                        zIndex: 10000,
                        minWidth: '130px',
                        borderRadius: '6px',
                        padding: '6px 0',
                    }}>
                        {themes.map((t) => (
                            <div
                                key={t.id}
                                onClick={() => {
                                    onChangeTheme(t.id);
                                    setDropdownOpen(false);
                                }}
                                style={{
                                    padding: '10px 16px',
                                    fontSize: '11px',
                                    fontFamily: 'Cinzel',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    color: theme === t.id ? 'var(--accent-brass)' : 'var(--text-main)',
                                    background: theme === t.id ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    transition: 'all 0.2s'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.08)';
                                    e.currentTarget.style.color = 'var(--accent-brass)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = theme === t.id ? 'rgba(212, 175, 55, 0.05)' : 'transparent';
                                    e.currentTarget.style.color = theme === t.id ? 'var(--accent-brass)' : 'var(--text-main)';
                                }}
                            >
                                <span style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>{t.icon}</span>
                                {t.label}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// Reusable Inner Glass Navigation Component
const Navbar = ({ currentPage, onNavigate, onToggleSidebar, theme, onChangeTheme }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="navbar-container">
            <div 
                className="font-luxury navbar-logo" 
                onClick={() => { onNavigate && onNavigate('home'); setMobileMenuOpen(false); }}
            >
                AURA & STONE <span className="logo-pro-tag">PRO</span>
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
                    onClick={() => { onToggleSidebar && onToggleSidebar(); setMobileMenuOpen(false); }}
                    className="nav-link-item"
                >
                    Portfolio Index
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

            {/* Right Side Actions: Theme Selector & Hamburger Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', zIndex: 1002 }}>
                <ThemeSwitcher theme={theme} onChangeTheme={onChangeTheme} />
                
                <div 
                    className="hamburger-menu-btn" 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Navigation Menu"
                    style={{ margin: 0 }}
                >
                    <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
                </div>
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
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '25px', flexWrap: 'wrap' }}>
            <span onClick={() => onNavigate && onNavigate('browse')} style={{ cursor: 'pointer', transition: '0.3s' }} onMouseOver={(e)=>e.target.style.color='var(--accent-brass)'} onMouseOut={(e)=>e.target.style.color='var(--text-muted)'}>Specialists Index</span>
            <span onClick={() => onNavigate && onNavigate('privacy')} style={{ cursor: 'pointer', transition: '0.3s' }} onMouseOver={(e)=>e.target.style.color='var(--accent-brass)'} onMouseOut={(e)=>e.target.style.color='var(--text-muted)'}>Privacy Protocols</span>
            <span onClick={() => onNavigate && onNavigate('contact')} style={{ cursor: 'pointer', transition: '0.3s' }} onMouseOver={(e)=>e.target.style.color='var(--accent-brass)'} onMouseOut={(e)=>e.target.style.color='var(--text-muted)'}>Contact Headquarters</span>
        </div>
        <p>© 2026 Aura & Stone Networks. Elevating Digital Space Matching.</p>
    </footer>
);

export default function Layout({ children, currentPage, onNavigate }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [professionals, setProfessionals] = useState(localProfessionals);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('aura-stone-theme') || 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('aura-stone-theme', theme);
    }, [theme]);

    useEffect(() => {
        setIsLoaded(true);
    }, [currentPage]); // Re-trigger fade-in on page transitions

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden', width: '100%' }}>
            {/* Background Decorative Ambient Glows */}
            <div style={{
                position: 'absolute', top: '10%', left: '70%', width: '400px', height: '400px',
                background: 'var(--glow-color)', filter: 'blur(150px)', pointerEvents: 'none', zIndex: 0
            }} />
            <div style={{
                position: 'absolute', top: '60%', left: '-10%', width: '500px', height: '500px',
                background: 'var(--glow-color-secondary)', filter: 'blur(180px)', pointerEvents: 'none', zIndex: 0
            }} />

            <Sidebar 
                isOpen={sidebarOpen} 
                onClose={() => setSidebarOpen(false)} 
                professionals={professionals} 
                onNavigate={onNavigate} 
            />

            <Navbar 
                currentPage={currentPage} 
                onNavigate={onNavigate} 
                onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
                theme={theme}
                onChangeTheme={setTheme}
            />

            <main key={currentPage} className={isLoaded ? 'fade-in-load' : ''} style={{
                flex: 1, paddingTop: '100px', zIndex: 1, position: 'relative'
            }}>
                {children}
            </main>

            <Footer onNavigate={onNavigate} />
        </div>
    );
}