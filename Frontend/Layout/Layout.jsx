// src/layouts/Layout.jsx
import React, { useState, useEffect } from 'react';
import '../Styles/index.css';

// Fallback high-tier professional database for offline/zero-config startup
const fallbackProfessionals = [
    {
        id: 1,
        name: "Vertex Arc Studios",
        rating: 4.9,
        projectsCount: 54,
        specialty: "Brutalist Megastructures & Minimalist Villa Designs",
        location: "Wayne, NE",
        startingBudget: 120000,
        sector: "Residential Megastructures",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        name: "Nebraska Eco-Framing Co.",
        rating: 4.7,
        projectsCount: 29,
        specialty: "High-Tier Sustainable Residential Builds",
        location: "Omaha, NE",
        startingBudget: 65000,
        sector: "Sustainable/Green Architecture",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        name: "Midwest Steel & Tower",
        rating: 5.0,
        projectsCount: 42,
        specialty: "Commercial High-Rise & Heavy Steel Framing",
        location: "Lincoln, NE",
        startingBudget: 350000,
        sector: "Commercial High-Rise",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        name: "Heritage Builders NE",
        rating: 4.8,
        projectsCount: 31,
        specialty: "Heritage Conservation & Historic Building Restorations",
        location: "Norfolk, NE",
        startingBudget: 150000,
        sector: "Heritage Restoration",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        name: "Prairie Landscape Architects",
        rating: 4.6,
        projectsCount: 18,
        specialty: "Bespoke Biophilic Gardens & Outdoor Retaining Pools",
        location: "Wayne, NE",
        startingBudget: 45000,
        sector: "Bespoke Landscape Design",
        image: "https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        name: "Sharp Construction Inc.",
        rating: 4.9,
        projectsCount: 42,
        specialty: "Premium Structural Framing & Commercial Assets",
        location: "Wayne, NE",
        startingBudget: 55000,
        sector: "Residential Megastructures",
        image: "https://images.unsplash.com/photo-1503387762-592ded58c45a?auto=format&fit=crop&w=800&q=80",
    }
];

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

// Reusable Inner Glass Navigation Component
const Navbar = ({ currentPage, onNavigate, onToggleSidebar }) => {
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
    const [professionals, setProfessionals] = useState([]);

    useEffect(() => {
        setIsLoaded(true);

        const fetchPros = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/professionals');
                const payload = await response.json();
                if (payload.success && payload.data && payload.data.length > 0) {
                    setProfessionals(payload.data);
                } else {
                    setProfessionals(fallbackProfessionals);
                }
            } catch (error) {
                console.warn("Sidebar professionals fetch failed, using fallback:", error);
                setProfessionals(fallbackProfessionals);
            }
        };

        fetchPros();
    }, [currentPage]); // Re-trigger fade-in and update list on page transitions

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden', width: '100%' }}>
            {/* Background Decorative Ambient Glows */}
            <div style={{
                position: 'absolute', top: '10%', left: '70%', width: '400px', height: '400px',
                background: 'rgba(212, 175, 55, 0.03)', filter: 'blur(150px)', pointerEvents: 'none', zIndex: 0
            }} />
            <div style={{
                position: 'absolute', top: '60%', left: '-10%', width: '500px', height: '500px',
                background: 'rgba(30, 40, 60, 0.2)', filter: 'blur(180px)', pointerEvents: 'none', zIndex: 0
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