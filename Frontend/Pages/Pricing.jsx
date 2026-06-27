import React from 'react';

export default function Pricing() {
    const tiers = [
        { name: "Pro Essential", price: "$149", period: "/mo", desc: "For independent premium architects.", features: ["3D Floor Plan Previews", "Basic Spatial Filter Listing", "Lead Ingestion Nodes", "Direct Client Messaging"] },
        { name: "Custom Elite", price: "$349", period: "/mo", desc: "For multi-tier construction firms.", features: ["Everything in Essential", "Bespoke Portfolio Badging", "Dynamic Valuation Integration", "Priority Regional Match", "Dedicated Dashboard Suite"], recommended: true },
        { name: "Enterprise", price: "Custom", period: "", desc: "For massive infrastructure conglomerates.", features: ["Custom API Endpoints", "Infinite Lead Pipeline Mapping", "White-labeled Subdomains", "Manual Node Calibration", "24/7 Priority VIP Backchannel"] }
    ];

    return (
        <div style={{ padding: '60px 50px', maxWidth: '1200px', margin: '0 auto', minHeight: '90vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span style={{ color: 'var(--accent-brass)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' }}>Subscription Model</span>
                <h2 className="font-luxury" style={{ fontSize: '36px', color: '#fff', marginTop: '5px' }}>SOLUTIONS & SCALES</h2>
            </div>

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {tiers.map((tier, idx) => (
                    <div key={idx} className="premium-card" style={{
                        flex: '1 1 320px', maxWidth: '380px', padding: '40px 35px', borderRadius: '4px', position: 'relative',
                        border: tier.recommended ? '1px solid var(--accent-brass)' : '1px solid rgba(212,175,55,0.1)'
                    }}>
                        {tier.recommended && (
                            <span style={{ position: 'absolute', top: '15px', right: '20px', background: 'var(--accent-brass)', color: '#000', fontSize: '10px', fontWeight: '700', padding: '2px 10px', fontFamily: 'Cinzel' }}>
                                RECOMMENDED
                            </span>
                        )}

                        <h3 className="font-luxury" style={{ fontSize: '20px', color: '#fff', marginBottom: '10px' }}>{tier.name}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '13px', minHeight: '40px' }}>{tier.desc}</p>

                        <div style={{ margin: '30px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '20px' }}>
                            <span style={{ fontSize: '32px', fontWeight: '700', color: tier.recommended ? 'var(--accent-brass)' : '#fff' }}>{tier.price}</span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}> {tier.period}</span>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {tier.features.map((feat, i) => (
                                <li key={i} style={{ fontSize: '13px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: 'var(--accent-brass)' }}>✓</span> {feat}
                                </li>
                            ))}
                        </ul>

                        <button style={{
                            width: '100%', padding: '14px', border: tier.recommended ? 'none' : '1px solid rgba(255,255,255,0.1)',
                            background: tier.recommended ? 'var(--accent-brass)' : 'transparent',
                            color: tier.recommended ? '#000' : '#fff', fontWeight: '600', fontFamily: 'Cinzel', fontSize: '12px', cursor: 'pointer', transition: '0.3s'
                        }}
                            onMouseOver={(e) => { if (!tier.recommended) e.target.style.borderColor = 'var(--accent-brass)'; }}
                            onMouseOut={(e) => { if (!tier.recommended) e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                            INITIALIZE TIER
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}