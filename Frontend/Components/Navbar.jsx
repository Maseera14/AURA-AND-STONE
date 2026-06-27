import React, { useState } from 'react';

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('browse');

    const navLinks = [
        { id: 'browse', label: 'Elite Professionals' },
        { id: 'portfolios', label: 'Bespoke Galleries' },
        { id: 'estimates', label: 'Live Valuation' },
    ];

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
            background: 'rgba(10, 11, 13, 0.75)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
            padding: '20px 50px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'middle'
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="font-luxury" style={{ fontSize: '22px', fontWeight: '700', color: 'var(--accent-brass)', cursor: 'pointer' }}>
                    AURA & STONE <span style={{ fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '2px' }}>STUDIO</span>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
                {navLinks.map((link) => (
                    <span
                        key={link.id}
                        onClick={() => setActiveTab(link.id)}
                        style={{
                            fontSize: '13px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            color: activeTab === link.id ? 'var(--accent-brass)' : 'var(--text-muted)',
                            transition: 'all 0.3s ease',
                            borderBottom: activeTab === link.id ? '1px solid var(--accent-brass)' : '1px solid transparent',
                            paddingBottom: '4px'
                        }}
                    >
                        {link.label}
                    </span>
                ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button style={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent)',
                    border: '1px solid var(--accent-brass)',
                    color: 'var(--accent-brass)',
                    padding: '10px 24px',
                    fontFamily: 'Cinzel',
                    fontSize: '11px',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    borderRadius: '1px',
                    transition: 'all 0.3s'
                }}
                    onMouseOver={(e) => e.target.style.background = 'rgba(212, 175, 55, 0.2)'}
                    onMouseOut={(e) => e.target.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent)'}>
                    CONNECT AS PRO
                </button>
            </div>
        </nav>
    );
}