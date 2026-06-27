import React, { useState } from 'react';

export default function QuoteEstimator() {
    const [sqFt, setSqFt] = useState(2500);
    const [tier, setTier] = useState(1.5); // Multiplier code

    // Inline pricing arithmetic logic
    const calculateEstimate = () => {
        const rawSum = sqFt * tier * 150; // Base cost per sq ft in USD ($150)
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(rawSum);
    };

    return (
        <div className="premium-card" style={{ padding: '35px', borderRadius: '4px', maxWidth: '500px', margin: '20px auto' }}>
            <span style={{ display: 'block', fontSize: '10px', color: 'var(--accent-brass)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>
                Valuation Processing Unit
            </span>
            <h3 className="font-luxury" style={{ fontSize: '20px', color: '#fff', marginBottom: '25px' }}>
                Instant Area Estimation
            </h3>

            {/* Slider Section */}
            <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Covered Area Scope</span>
                    <span style={{ color: 'var(--accent-brass)', fontWeight: '600' }}>{sqFt} Sq. Ft.</span>
                </div>
                <input
                    type="range"
                    min="500"
                    max="10000"
                    step="250"
                    value={sqFt}
                    onChange={(e) => setSqFt(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-brass)', background: 'rgba(255,255,255,0.05)' }}
                />
            </div>

            {/* Finishing Material Quality Tier Selection */}
            <div style={{ marginBottom: '30px' }}>
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '10px' }}>Material Execution Quality</span>
                <div className="estimator-material-grid" style={{ display: 'flex', gap: '10px' }}>
                    {[
                        { label: 'Premium Slate', scale: 1.0 },
                        { label: 'Royal Imperial', scale: 1.5 },
                        { label: 'Bespoke Onyx', scale: 2.2 }
                    ].map((obj, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setTier(obj.scale)}
                            style={{
                                flex: 1,
                                background: tier === obj.scale ? 'rgba(212,175,55,0.08)' : 'transparent',
                                border: `1px solid ${tier === obj.scale ? 'var(--accent-brass)' : 'rgba(255,255,255,0.05)'}`,
                                color: tier === obj.scale ? 'var(--accent-brass)' : 'var(--text-main)',
                                padding: '10px 5px', fontSize: '11px', fontFamily: 'Cinzel', cursor: 'pointer', transition: '0.2s'
                            }}
                        >
                            {obj.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Outbound Pricing Render Display */}
            <div style={{
                background: 'rgba(255,255,255,0.01)',
                padding: '20px',
                textAlign: 'center',
                border: '1px dashed rgba(212,175,55,0.15)',
                borderRadius: '2px'
            }}>
                <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Estimated Projection Basis
                </span>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#fff', letterSpacing: '-0.5px' }}>
                    {calculateEstimate()}
                </div>
            </div>
        </div>
    );
}