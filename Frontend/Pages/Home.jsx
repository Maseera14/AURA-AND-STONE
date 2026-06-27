import React from 'react';

export default function Home({ onNavigate }) {
    return (
        <div style={{ padding: '80px 50px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '90vh' }}>
            <div style={{ textAlign: 'center', maxWidth: '900px', marginBottom: '60px', marginTop: '40px' }}>
                <span style={{ color: 'var(--accent-brass)', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '5px', marginBottom: '25px', display: 'block' }}>
                    Aura & Stone Network
                </span>

                <h1 className="font-luxury" style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.15', margin: '0 0 30px 0', color: '#fff' }}>
                    Where High-End Architecture Meets Structural Precision.
                </h1>

                <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '650px', margin: '0 auto 50px auto', lineHeight: '1.8' }}>
                    An elite ecosystem for builders, contractors, and design professionals. Discover verified elite firms and high-end construction executors mapped through advanced telemetry.
                </p>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <button
                        onClick={() => onNavigate && onNavigate('browse')}
                        style={{
                            background: 'var(--accent-brass)', color: '#000', border: 'none', padding: '16px 42px',
                            fontFamily: 'Cinzel', fontSize: '13px', fontWeight: '700', cursor: 'pointer', letterSpacing: '1.5px', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            boxShadow: '0 4px 20px rgba(212,175,55,0.15)'
                        }}
                        onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 25px rgba(212,175,55,0.3)'; }}
                        onMouseOut={(e) => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 4px 20px rgba(212,175,55,0.15)'; }}
                    >
                        EXPLORE THE INDEX
                    </button>

                    <button
                        onClick={() => onNavigate && onNavigate('pricing')}
                        style={{
                            background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '16px 42px',
                            fontFamily: 'Cinzel', fontSize: '13px', cursor: 'pointer', letterSpacing: '1.5px', transition: 'all 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.borderColor = 'var(--accent-brass)'}
                        onMouseOut={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                    >
                        VIEW SOLUTIONS
                    </button>
                </div>
            </div>

            {/* Mini Micro-Stats Bar */}
            <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '1000px', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)', padding: '30px 0', margin: '40px 0 80px 0' }}>
                <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '28px', fontFamily: 'Cinzel', color: 'var(--accent-brass)', fontWeight: '600' }}>240+</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Elite Firms</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '28px', fontFamily: 'Cinzel', color: 'var(--accent-brass)', fontWeight: '600' }}>$1.2B+</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Capital Managed</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '28px', fontFamily: 'Cinzel', color: 'var(--accent-brass)', fontWeight: '600' }}>99.4%</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Precision Match</span>
                </div>
            </div>

            {/* Signature Showcase Section */}
            <div style={{ width: '100%', maxWidth: '1200px', textAlign: 'left', marginTop: '20px' }}>
                <span style={{ color: 'var(--accent-brass)', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                    Signature Masterpieces
                </span>
                <h2 className="font-luxury" style={{ fontSize: '32px', color: '#fff', marginBottom: '40px' }}>
                    CURATED ARCHITECTURAL EXHIBITIONS
                </h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
                    {/* Project 1 */}
                    <div className="premium-card" style={{ overflow: 'hidden', borderRadius: '4px' }}>
                        <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                            <img 
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                                alt="Concrete brutalism" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.06)'} 
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <div style={{ padding: '25px' }}>
                            <span style={{ fontSize: '10px', color: 'var(--accent-brass)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Brutalist Residential // Lahore</span>
                            <h4 className="font-luxury" style={{ fontSize: '18px', color: '#fff', margin: '5px 0 12px 0' }}>The Concrete Monolith</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.7' }}>An exploration of raw concrete, dramatic glass cantilevers, and structural gravity-defying aesthetics engineered for luxury living.</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="premium-card" style={{ overflow: 'hidden', borderRadius: '4px' }}>
                        <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                            <img 
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                                alt="High rise" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.06)'} 
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <div style={{ padding: '25px' }}>
                            <span style={{ fontSize: '10px', color: 'var(--accent-brass)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Commercial Tower // Karachi</span>
                            <h4 className="font-luxury" style={{ fontSize: '18px', color: '#fff', margin: '5px 0 12px 0' }}>Imperial Heights</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.7' }}>State-of-the-art earthquake-resistant commercial megastructure detailed with custom-fabricated glass curtain walls.</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="premium-card" style={{ overflow: 'hidden', borderRadius: '4px' }}>
                        <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                            <img 
                                src="https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&w=800&q=80" 
                                alt="Landscape" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.06)'} 
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <div style={{ padding: '25px' }}>
                            <span style={{ fontSize: '10px', color: 'var(--accent-brass)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Biophilic Design // Islamabad</span>
                            <h4 className="font-luxury" style={{ fontSize: '18px', color: '#fff', margin: '5px 0 12px 0' }}>Zen Oasis Deck</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.7' }}>Bespoke stone patio installations integrated with infinity retaining pools and sustainable, zero-maintenance local flora.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}