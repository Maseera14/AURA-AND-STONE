import React, { useState } from 'react';

export default function InteractiveMap({ currentZone = "Wayne, NE" }) {
    const [activeNode, setActiveNode] = useState(currentZone);

    // High-Tier Active Operational Clusters
    const premiumNodes = [
        { name: "Wayne, NE", coordinates: "Zone NE-68787", latency: "Core Office Node" },
        { name: "Omaha, NE", coordinates: "Zone NE-68102", latency: "Delta Cluster" },
        { name: "Lincoln, NE", coordinates: "Zone NE-68508", latency: "Auxiliary Node" }
    ];

    return (
        <div className="premium-card" style={{
            padding: '30px',
            borderRadius: '4px',
            marginTop: '20px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--accent-brass)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        Spatial Mapping Environment
                    </span>
                    <h3 className="font-luxury" style={{ fontSize: '18px', margin: '5px 0 0 0', color: '#fff' }}>
                        Live Regional Coverage
                    </h3>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    Active Node: <span style={{ color: 'var(--accent-brass)' }}>{activeNode}</span>
                </div>
            </div>

            {/* Abstract Grid Grid Vector Map Area */}
            <div className="map-nodes-container" style={{
                height: '240px',
                background: 'radial-gradient(circle at center, #16191f 0%, #0c0e12 100%)',
                border: '1px solid rgba(255,255,255,0.03)',
                position: 'relative',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '0 40px'
            }}>
                {/* Subtle background tech line mapping */}
                <div style={{
                    position: 'absolute', width: '80%', height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)', top: '50%'
                }}></div>

                {premiumNodes.map((node, i) => (
                    <div
                        key={i}
                        onClick={() => setActiveNode(node.name)}
                        style={{
                            textAlign: 'center',
                            cursor: 'pointer',
                            zIndex: 5,
                            transform: activeNode === node.name ? 'scale(1.08)' : 'scale(1)',
                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                    >
                        {/* Pulsing Core Node Ring */}
                        <div style={{
                            width: '14px', height: '14px',
                            background: activeNode === node.name ? 'var(--accent-brass)' : '#334155',
                            borderRadius: '50%',
                            margin: '0 auto 12px auto',
                            boxShadow: activeNode === node.name ? '0 0 15px var(--accent-brass)' : 'none',
                            border: '3px solid #0a0b0d'
                        }}></div>
                        <span style={{ display: 'block', fontSize: '13px', color: activeNode === node.name ? '#fff' : 'var(--text-muted)', fontWeight: '500' }}>
                            {node.name}
                        </span>
                        <span style={{ fontSize: '10px', color: 'var(--accent-brass)', opacity: activeNode === node.name ? 0.8 : 0 }}>
                            {node.coordinates}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}