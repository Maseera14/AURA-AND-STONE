import React from 'react';

export default function ProCard({ data, onCardClick }) {
    const {
        name = "Imperial Structures Ltd",
        rating = "4.9",
        projectsCount = 42,
        specialty = "High-End Residential Metallurgy",
        location = "Wayne, NE",
        startingBudget = 15000,
        image = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    } = data || {};

    const formattedBudget = typeof startingBudget === 'number' 
        ? startingBudget >= 1000 
            ? `$${(startingBudget / 1000).toFixed(0)}K+` 
            : `$${startingBudget}`
        : startingBudget;

    return (
        <div 
            className="premium-card" 
            onClick={() => onCardClick && onCardClick(data)}
            style={{
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative',
                display: 'block',
                cursor: 'pointer'
            }}
        >
            {/* Decorative Media Area with real image */}
            <div style={{
                height: '220px',
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '1px solid rgba(212,175,55,0.05)'
            }}>
                <img 
                    src={image} 
                    alt={name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.06)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                    position: 'absolute', bottom: '15px', left: '20px',
                    background: 'rgba(10,11,13,0.85)', padding: '6px 14px',
                    fontSize: '11px', color: 'var(--accent-brass)', border: '1px solid rgba(212,175,55,0.2)',
                    backdropFilter: 'blur(4px)', letterSpacing: '0.5px'
                }}>
                    {specialty}
                </div>
            </div>

            {/* Card Information Body */}
            <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 className="font-luxury" style={{ fontSize: '18px', color: '#fff', margin: 0 }}>{name}</h3>
                    <span style={{ color: 'var(--accent-brass)', fontSize: '13px', fontWeight: '600', whiteSpace: 'nowrap' }}>★ {rating}</span>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: '0 0 20px 0' }}>
                    📍 Operates in <span style={{ color: '#fff' }}>{location}</span> cluster.
                </p>

                {/* Technical Sub-metrics Block */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '15px'
                }}>
                    <div>
                        <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Portfolios</span>
                        <span style={{ fontSize: '14px', color: '#fff', fontWeight: '500' }}>{projectsCount} Units</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Est. Base</span>
                        <span style={{ fontSize: '14px', color: 'var(--accent-brass)', fontWeight: '600' }}>{formattedBudget}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}