import React from 'react';

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            padding: '80px 60px 40px 60px',
            borderTop: '1px solid rgba(212, 175, 55, 0.05)',
            marginTop: '120px',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '5px' }}>
                <div style={{ flex: '1 1 300px' }}>
                    <div className="font-luxury" style={{ fontSize: '20px', color: 'var(--accent-brass)', marginBottom: '15px' }}>
                        AURA & STONE
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6', maxWidth: '280px' }}>
                        Elevating construction networking through rich visual layers and responsive spatial telemetry grids.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '60px' }}>
                    <div>
                        <span style={{ display: 'block', fontFamily: 'Cinzel', fontSize: '12px', color: 'var(--accent-brass)', marginBottom: '15px', letterSpacing: '1px' }}>SYSTEM</span>
                        <a href="#nodes" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none', marginBottom: '10px' }}>Spatial Nodes</a>
                        <a href="#valuation" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none', marginBottom: '10px' }}>Live Valuation</a>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontFamily: 'Cinzel', fontSize: '12px', color: 'var(--accent-brass)', marginBottom: '15px', letterSpacing: '1px' }}>LEGAL</span>
                        <a href="#terms" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none', marginBottom: '10px' }}>Terms of Access</a>
                        <a href="#privacy" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none', marginBottom: '10px' }}>Privacy Clusters</a>
                    </div>
                </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.02)', paddingTop: '30px', textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>
                <p>© 2026 Aura & Stone. Designed for High-Tier Structural Execution.</p>
            </div>
        </footer>
    );
}