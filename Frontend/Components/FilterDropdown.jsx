import React, { useState } from 'react';

export default function FilterDropdown({ onFilterChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('All Sectors');

    const categories = [
        'All Sectors',
        'Residential Megastructures',
        'Commercial High-Rise',
        'Heritage Restoration',
        'Sustainable/Green Architecture',
        'Bespoke Landscape Design'
    ];

    const handleSelect = (category) => {
        setSelected(category);
        setIsOpen(false);
        if (onFilterChange) {
            onFilterChange(category);
        }
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block', width: '260px' }}>
            <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>
                Architectural Class
            </span>

            {/* Trigger Button */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    color: '#fff',
                    padding: '12px 16px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '2px',
                    transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--accent-brass)'}
                onMouseOut={(e) => { if (!isOpen) e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)' }}
            >
                <span>{selected}</span>
                <span style={{ color: 'var(--accent-brass)', fontSize: '10px' }}>{isOpen ? '▲' : '▼'}</span>
            </div>

            {/* Luxury Dropdown Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '105%',
                    left: 0,
                    width: '100%',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--accent-brass)',
                    zIndex: 1100,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '2px',
                    maxHeight: '250px',
                    overflowY: 'auto'
                }}>
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleSelect(cat)}
                            style={{
                                padding: '12px 16px',
                                fontSize: '13px',
                                color: selected === cat ? 'var(--accent-brass)' : 'var(--text-main)',
                                background: selected === cat ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.03)';
                                e.target.style.color = 'var(--accent-brass)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = selected === cat ? 'rgba(212, 175, 55, 0.05)' : 'transparent';
                                e.target.style.color = selected === cat ? 'var(--accent-brass)' : 'var(--text-main)';
                            }}
                        >
                            {cat}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}