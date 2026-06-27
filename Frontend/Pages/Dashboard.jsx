import React from 'react';

export default function Dashboard() {
    const activeProjects = [
        { id: 1, title: "Onyx Penthouse Facade", manager: "Zircon Structural", progress: 75, status: "Finishing Phase" },
        { id: 2, title: "DHA Phase 6 Villa", manager: "Vertex Arc Studios", progress: 40, status: "Masonry Frame" },
        { id: 3, title: "Gulberg Corporate Lounge", manager: "Matrix Smart Build", progress: 90, status: "Automation Setup" }
    ];

    return (
        <div style={{ padding: '60px 50px', maxWidth: '1400px', margin: '0 auto', minHeight: '90vh' }}>
            <div style={{ marginBottom: '40px' }}>
                <span style={{ color: 'var(--accent-brass)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}>Management Control Console</span>
                <h2 className="font-luxury" style={{ fontSize: '32px', color: '#fff', marginTop: '5px' }}>PROJECT BACKBONE</h2>
            </div>

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                {/* Dynamic Project Streams */}
                <div style={{ flex: '2 1 65%' }}>
                    <h3 className="font-luxury" style={{ fontSize: '18px', color: '#fff', marginBottom: '20px' }}>ACTIVE WORKFLOWS</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {activeProjects.map((proj) => (
                            <div key={proj.id} className="premium-card" style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                                <div>
                                    <h4 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '16px' }}>{proj.title}</h4>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Lead Firm: {proj.manager}</span>
                                </div>
                                <div style={{ width: '200px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px', color: 'var(--text-muted)' }}>
                                        <span>Progress Cluster</span>
                                        <span style={{ color: 'var(--accent-brass)' }}>{proj.progress}%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                                        <div style={{ width: `${proj.progress}%`, height: '100%', background: 'var(--accent-brass)', borderRadius: '2px' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <span style={{ border: '1px solid rgba(212,175,55,0.2)', padding: '4px 12px', fontSize: '11px', color: 'var(--accent-brass)' }}>
                                        {proj.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Global Notifications Node */}
                <div style={{ flex: '1 1 30%', minWidth: '300px' }}>
                    <h3 className="font-luxury" style={{ fontSize: '18px', color: '#fff', marginBottom: '20px' }}>LIVE STREAM</h3>
                    <div className="premium-card" style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.02)', paddingBottom: '10px' }}>
                            <span style={{ color: 'var(--accent-brass)', display: 'block', fontSize: '10px' }}>SYSTEM ALERT // 10m ago</span>
                            <p style={{ margin: '4px 0 0 0', color: 'var(--text-main)' }}>GET request processed for location radius Lahore.</p>
                        </div>
                        <div style={{ fontSize: '13px' }}>
                            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '10px' }}>INVOICE PIPELINE // 2h ago</span>
                            <p style={{ margin: '4px 0 0 0', color: 'var(--text-main)' }}>Valuation estimate verified for Zircon Structural Eng.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}