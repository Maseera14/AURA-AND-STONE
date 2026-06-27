import React, { useState } from 'react';

export default function SearchBar({ onSearchSubmit }) {
    const [location, setLocation] = useState('Wayne, NE');
    const [keyword, setKeyword] = useState('');

    const handleTrigger = (e) => {
        e.preventDefault();
        if (onSearchSubmit) {
            onSearchSubmit({ location, keyword });
        }
    };

    return (
        <form onSubmit={handleTrigger} className="premium-card search-bar-container" style={{
            padding: '15px 25px',
            borderRadius: '4px',
            margin: '30px auto',
            maxWidth: '950px',
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            boxSizing: 'border-box'
        }}>
            <div style={{ flex: 1, textAlign: 'left' }}>
                <span style={{ display: 'block', fontSize: '10px', color: 'var(--accent-brass)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>
                    Spatial Location Node
                </span>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter region..."
                    style={{
                        background: 'transparent', border: 'none', color: '#fff', fontSize: '15px',
                        outline: 'none', width: '100%'
                    }}
                />
            </div>

            <div className="search-bar-divider" style={{ height: '40px', width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>

            <div style={{ flex: 2, textAlign: 'left' }}>
                <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>
                    Exquisite Specialization / Service Architecture
                </span>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="e.g., Minimalist Facade, Heritage Remodeling..."
                    style={{
                        background: 'transparent', border: 'none', color: '#fff', fontSize: '15px',
                        outline: 'none', width: '100%'
                    }}
                />
            </div>

            <div>
                <button type="submit" style={{
                    background: 'var(--accent-brass)',
                    color: '#0a0b0d',
                    border: 'none',
                    padding: '14px 35px',
                    fontWeight: '700',
                    fontFamily: 'Cinzel',
                    fontSize: '12px',
                    cursor: 'pointer',
                    letterSpacing: '1px',
                    transition: 'transform 0.2s'
                }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                    INDEX FEED
                </button>
            </div>
        </form>
    );
}