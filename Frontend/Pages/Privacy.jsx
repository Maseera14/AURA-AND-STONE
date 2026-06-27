import React from 'react';

export default function Privacy() {
    return (
        <div className="privacy-container" style={{ padding: '60px 50px 100px 50px', maxWidth: '900px', margin: '0 auto', minHeight: '90vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <span style={{ color: 'var(--accent-brass)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' }}>
                    Corporate Governance
                </span>
                <h2 className="font-luxury" style={{ fontSize: '36px', color: '#fff', marginTop: '5px', marginBottom: '15px' }}>
                    PRIVACY PROTOCOLS
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                    Disclosing structural data ingestion, protection standards, and telemetry management policies.
                </p>
            </div>

            <div className="premium-card" style={{ padding: '45px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '35px' }}>
                <div>
                    <h3 className="font-luxury" style={{ color: 'var(--accent-brass)', fontSize: '18px', marginBottom: '12px' }}>
                        1. INGESTION & DATA CAPTURE
                    </h3>
                    <p style={{ color: 'var(--text-main)', fontSize: '14px', lineHeight: '1.8' }}>
                        Aura & Stone operates an advanced telemetry index connecting professional architectural entities with prospective clients. When utilizing our search channels or submitting project scope manifestos, we ingest secure identifiers, business metrics, spatial boundaries, and budget criteria to optimize the matchmaking pipeline.
                    </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '25px' }}>
                    <h3 className="font-luxury" style={{ color: 'var(--accent-brass)', fontSize: '18px', marginBottom: '12px' }}>
                        2. SECURE TRANSMISSION NODES
                    </h3>
                    <p style={{ color: 'var(--text-main)', fontSize: '14px', lineHeight: '1.8' }}>
                        All client scoping payloads, financial tiers, and messaging logs are encrypted via Secure Sockets Layer (SSL) transmission channels and multiplexed directly to our regional database servers. Standard database records are maintained securely behind firewall layers to prevent unauthenticated spatial mapping interference.
                    </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '25px' }}>
                    <h3 className="font-luxury" style={{ color: 'var(--accent-brass)', fontSize: '18px', marginBottom: '12px' }}>
                        3. THIRD-PARTY DISCLOSURES
                    </h3>
                    <p style={{ color: 'var(--text-main)', fontSize: '14px', lineHeight: '1.8' }}>
                        We do not exchange, rent, or lease verified identity parameters to external advertising networks. Scoping details are only shared directly with the chosen elite professionals to initiate contact streams and generate building blueprints.
                    </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '25px' }}>
                    <h3 className="font-luxury" style={{ color: 'var(--accent-brass)', fontSize: '18px', marginBottom: '12px' }}>
                        4. DATA RETAINMENT & RIGHTS
                    </h3>
                    <p style={{ color: 'var(--text-main)', fontSize: '14px', lineHeight: '1.8' }}>
                        You maintain full authority to recall or wipe your active project scoping manifests from our servers at any time. To request a complete system profile extraction or coordinate node wipe, forward a certified request stream to our compliance channel at:
                    </p>
                    <div style={{ 
                        marginTop: '15px', 
                        padding: '20px', 
                        background: 'rgba(255,255,255,0.01)', 
                        borderLeft: '2px solid var(--accent-brass)',
                        fontSize: '13px',
                        color: 'var(--text-muted)',
                        lineHeight: '1.6'
                    }}>
                        <strong>Aura & Stone Compliance Node</strong><br />
                        704 Sherman St, Wayne, NE 68787, United States<br />
                        Phone Channel: +1 (402) 375-1700<br />
                        Electronic Link: compliance@aurastone.pro
                    </div>
                </div>
            </div>
        </div>
    );
}
