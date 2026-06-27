import React from 'react';

const projectImageFallback = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
];

export default function ProProfile({ proData, onNavigate }) {
    const profile = proData || {
        name: "Vertex Arc Studios",
        rating: 4.9,
        projectsCount: 54,
        specialty: "Brutalist Megastructures & Minimalist Villa Designs",
        location: "Wayne, NE",
        startingBudget: 120000,
        sector: "Residential Megastructures",
        bio: "Pioneering brutalist structures and ultra-minimalist residential facades across Nebraska. Focused on raw concrete materials, glass cantilevers, and high-precision structural integrity. Delivering iconic landmark residences.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "Project Obsidian - Concrete Cantilever Villa",
            "The Concrete Monolith - Minimalist Living",
            "Aura Residence - Brutalist Oasis"
        ]
    };

    const formattedBudget = typeof profile.startingBudget === 'number'
        ? profile.startingBudget >= 1000
            ? `$${(profile.startingBudget / 1000).toFixed(0)}K+`
            : `$${profile.startingBudget}`
        : profile.startingBudget || 'N/A';

    const galleryList = profile.gallery || [];

    return (
        <div style={{ padding: '40px 50px 80px 50px', maxWidth: '1200px', margin: '0 auto', minHeight: '90vh' }}>
            {/* Back Button */}
            <div style={{ marginBottom: '30px' }}>
                <span 
                    onClick={() => onNavigate && onNavigate('browse')}
                    style={{ 
                        color: 'var(--text-muted)', 
                        fontSize: '13px', 
                        cursor: 'pointer', 
                        fontFamily: 'Cinzel', 
                        letterSpacing: '1px',
                        transition: '0.3s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-brass)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}
                >
                    ← BACK TO SPECIALISTS
                </span>
            </div>

            {/* Profile Master Header with Image Banner */}
            <div 
                className="premium-card" 
                style={{ 
                    position: 'relative', 
                    borderRadius: '4px', 
                    marginBottom: '50px',
                    overflow: 'hidden',
                    border: '1px solid rgba(212,175,55,0.15)'
                }}
            >
                {/* Banner Background */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: `linear-gradient(to right, rgba(10,11,13,0.95) 40%, rgba(10,11,13,0.3) 100%), url(${profile.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }} />

                {/* Content Overlay */}
                <div style={{ padding: '60px 50px', position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                    <span style={{ 
                        background: 'rgba(212,175,55,0.1)', 
                        color: 'var(--accent-brass)', 
                        fontSize: '11px', 
                        letterSpacing: '2.5px', 
                        textTransform: 'uppercase',
                        padding: '4px 12px',
                        border: '1px solid rgba(212,175,55,0.2)',
                        display: 'inline-block',
                        marginBottom: '15px'
                    }}>
                        Verified {profile.sector} specialist
                    </span>
                    <h1 className="font-luxury" style={{ fontSize: '42px', color: '#fff', marginTop: '5px', marginBottom: '15px', lineHeight: '1.2' }}>{profile.name}</h1>
                    <p style={{ color: 'var(--text-main)', fontSize: '15px', fontWeight: '500', marginBottom: '8px' }}>
                        ✦ {profile.specialty}
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                        📍 Operating Cluster: <span style={{ color: '#fff' }}>{profile.location}</span>
                    </p>
                    
                    <p style={{ 
                        color: 'var(--text-muted)', 
                        fontSize: '14px', 
                        lineHeight: '1.8', 
                        marginTop: '30px', 
                        borderTop: '1px solid rgba(255,255,255,0.06)', 
                        paddingTop: '20px', 
                        maxWidth: '650px' 
                    }}>
                        {profile.bio}
                    </p>
                </div>

                {/* Rating Badge */}
                <div style={{ 
                    position: 'absolute', 
                    top: '30px', 
                    right: '30px', 
                    background: 'rgba(10,11,13,0.85)',
                    border: '1px solid rgba(212,175,55,0.25)',
                    padding: '15px 25px',
                    textAlign: 'center',
                    zIndex: 2,
                    backdropFilter: 'blur(4px)'
                }}>
                    <div style={{ color: 'var(--accent-brass)', fontSize: '26px', fontWeight: '700', fontFamily: 'Cinzel' }}>★ {profile.rating}</div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Score Matrix</span>
                </div>
            </div>

            {/* Portfolio Grid & Metrics Row */}
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <div style={{ flex: '2 1 60%' }}>
                    <h3 className="font-luxury" style={{ fontSize: '20px', color: '#fff', marginBottom: '25px', letterSpacing: '2px' }}>
                        FEATURED EXHIBITS
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                        {galleryList.length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', gridColumn: 'span 2', padding: '40px 0' }}>
                                No portfolio assets loaded.
                            </div>
                        ) : (
                            galleryList.map((item, idx) => {
                                const bgImg = projectImageFallback[idx % projectImageFallback.length];
                                return (
                                    <div 
                                        key={idx} 
                                        className="premium-card" 
                                        style={{ 
                                            height: '240px', 
                                            borderRadius: '4px',
                                            overflow: 'hidden',
                                            position: 'relative',
                                            display: 'flex', 
                                            alignItems: 'flex-end',
                                        }}
                                    >
                                        <div style={{
                                            position: 'absolute',
                                            top: 0, left: 0, right: 0, bottom: 0,
                                            backgroundImage: `linear-gradient(to top, rgba(10,11,13,0.95) 0%, rgba(10,11,13,0.2) 60%, transparent 100%), url(${bgImg})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                            zIndex: 0
                                        }}
                                        onMouseOver={(e) => e.target.style.transform = 'scale(1.06)'}
                                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                        />
                                        <div style={{ padding: '20px', position: 'relative', zIndex: 1, width: '100%' }}>
                                            <span 
                                                className="font-luxury" 
                                                style={{ 
                                                    color: 'var(--text-main)', 
                                                    fontSize: '13px', 
                                                    letterSpacing: '0.5px',
                                                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                                                }}
                                            >
                                                {item}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* Operational Metrics Panel */}
                <div style={{ flex: '1 1 30%', minWidth: '280px' }}>
                    <h3 className="font-luxury" style={{ fontSize: '20px', color: '#fff', marginBottom: '25px', letterSpacing: '2px' }}>
                        TELEMETRY DATA
                    </h3>
                    <div className="premium-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '25px', borderRadius: '4px' }}>
                        <div>
                            <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Completed Units</span>
                            <span style={{ fontSize: '26px', color: '#fff', fontWeight: '600' }}>{profile.projectsCount} Units</span>
                        </div>
                        <div>
                            <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Base Budget Threshold</span>
                            <span style={{ fontSize: '26px', color: 'var(--accent-brass)', fontWeight: '600' }}>{formattedBudget}</span>
                        </div>
                        <div>
                            <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Client Satisfaction</span>
                            <span style={{ fontSize: '26px', color: '#fff', fontWeight: '600' }}>98.8%</span>
                        </div>
                        
                        <button 
                            onClick={() => onNavigate && onNavigate('contact')}
                            style={{
                                width: '100%',
                                padding: '15px',
                                background: 'var(--accent-brass)',
                                border: 'none',
                                color: '#000',
                                fontFamily: 'Cinzel',
                                fontWeight: '700',
                                fontSize: '12px',
                                cursor: 'pointer',
                                letterSpacing: '1px',
                                marginTop: '10px',
                                transition: '0.3s'
                            }}
                            onMouseOver={(e) => e.target.style.background = '#e5be43'}
                            onMouseOut={(e) => e.target.style.background = 'var(--accent-brass)'}
                        >
                            INITIATE ENGAGEMENT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}