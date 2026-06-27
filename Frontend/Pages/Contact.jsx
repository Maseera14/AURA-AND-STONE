import React, { useState } from 'react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleFormSubmission = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div style={{ padding: '60px 50px 100px 50px', maxWidth: '1200px', margin: '0 auto', minHeight: '90vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <span style={{ color: 'var(--accent-brass)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' }}>Ingestion Node</span>
                <h2 className="font-luxury" style={{ fontSize: '36px', color: '#fff', marginTop: '5px', marginBottom: '10px' }}>INITIATE PROJECT STREAM</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Establish direct routing pipelines to elite localized professionals.</p>
            </div>

            <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', alignItems: 'flex-start', marginTop: '20px' }}>
                {/* Form Column */}
                <div style={{ flex: '1 1 500px' }}>
                    {submitted ? (
                        <div className="premium-card" style={{ padding: '40px', textAlign: 'center', color: 'var(--accent-brass)', fontFamily: 'Cinzel', letterSpacing: '1px' }}>
                            ✓ DATA STREAM ROUTED SUCCESSFULLY. CHECK YOUR ACCESS DASHBOARD.
                        </div>
                    ) : (
                        <form onSubmit={handleFormSubmission} className="premium-card" style={{ padding: '40px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '1px' }}>Your Identity / Entity Name</label>
                                <input required type="text" style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.15)', padding: '12px', color: '#fff', outline: 'none', transition: '0.3s' }} onFocus={(e)=>e.target.style.borderColor='var(--accent-brass)'} onBlur={(e)=>e.target.style.borderColor='rgba(212,175,55,0.15)'}/>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '1px' }}>Secure Communication Channel</label>
                                <input required type="email" placeholder="you@domain.com" style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.15)', padding: '12px', color: '#fff', outline: 'none', transition: '0.3s' }} onFocus={(e)=>e.target.style.borderColor='var(--accent-brass)'} onBlur={(e)=>e.target.style.borderColor='rgba(212,175,55,0.15)'}/>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '1px' }}>Structural Manifesto / Project Scope</label>
                                <textarea required rows="5" placeholder="Outline your spatial dimensions, material preferences..." style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.15)', padding: '12px', color: '#fff', outline: 'none', resize: 'none', transition: '0.3s' }} onFocus={(e)=>e.target.style.borderColor='var(--accent-brass)'} onBlur={(e)=>e.target.style.borderColor='rgba(212,175,55,0.15)'}></textarea>
                            </div>

                            <button type="submit" style={{
                                background: 'var(--accent-brass)', color: '#000', border: 'none', padding: '15px',
                                fontFamily: 'Cinzel', fontWeight: '700', fontSize: '12px', cursor: 'pointer', letterSpacing: '1px', marginTop: '10px', transition: '0.3s'
                            }} onMouseOver={(e)=>e.target.style.background='#e5be43'} onMouseOut={(e)=>e.target.style.background='var(--accent-brass)'}>
                                FORWARD TRANSMISSION
                            </button>
                        </form>
                    )}
                </div>

                {/* HQ Address Column */}
                <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <div className="premium-card" style={{ padding: '40px', borderRadius: '4px' }}>
                        <span style={{ color: 'var(--accent-brass)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                            Global Headquarters
                        </span>
                        <h3 className="font-luxury" style={{ fontSize: '22px', color: '#fff', marginBottom: '25px' }}>WAYNE OFFICE NODE</h3>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <div>
                                <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Physical Address</span>
                                <span style={{ color: '#fff' }}>704 Sherman St, Wayne, NE 68787, United States</span>
                            </div>
                            
                            <div>
                                <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Direct Communication</span>
                                <span style={{ color: '#fff' }}>Phone: +1 (402) 375-1700</span><br />
                                <span style={{ color: 'var(--accent-brass)' }}>Email: hq@aurastone.pro</span>
                            </div>
                            
                            <div>
                                <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Plus Grid Code</span>
                                <span style={{ color: '#fff' }}>6XPG+9C Wayne, Nebraska, USA</span>
                            </div>

                            <div>
                                <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Operational Window</span>
                                <span style={{ color: '#fff' }}>Mon - Fri: 0800 - 1800 CST</span>
                            </div>
                        </div>
                    </div>

                    {/* Aesthetic Map/Visual Container */}
                    <div className="premium-card" style={{ height: '220px', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                            backgroundImage: 'linear-gradient(to bottom, rgba(10,11,13,0.3), rgba(10,11,13,0.85)), url(https://images.unsplash.com/photo-1503387762-592ded58c45a?auto=format&fit=crop&w=800&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: 0
                        }} />
                        <div style={{ position: 'relative', zIndex: 1, padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                            <span style={{ fontSize: '10px', color: 'var(--accent-brass)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Spatial Location Pin</span>
                            <h4 className="font-luxury" style={{ color: '#fff', fontSize: '16px', margin: '4px 0 0 0' }}>WAYNE, NEBRASKA CLUSTER</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}