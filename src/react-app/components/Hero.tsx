
import React from 'react';

const Hero: React.FC = () => {
    const heroStyle: React.CSSProperties = {
        position: 'relative',
        height: '85vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url("https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")', // Abstract/Sci-fiish placeholder
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '4rem',
    };

    const overlayStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to top, #0b0b0d 10%, transparent 90%)',
    };

    const contentStyle: React.CSSProperties = {
        position: 'relative',
        maxWidth: '600px',
        zIndex: 10,
        paddingTop: '10rem', // Push down a bit
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '4rem',
        fontWeight: 'bold',
        lineHeight: '1.1',
        marginBottom: '0.5rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
    };

    const buttonStyle: React.CSSProperties = {
        padding: '0.8rem 2rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px',
        marginRight: '1rem',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
    };

    return (
        <div style={heroStyle}>
            <div style={overlayStyle}></div>
            {/* Left side gradient for text readability */}
            <div style={{ ...overlayStyle, background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 60%)' }}></div>

            <div style={contentStyle}>
                <h1 style={titleStyle}>Dusted Collapse</h1>
                <h3 style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '1.5rem', fontWeight: 'normal' }}>A realvision-studios Series</h3>

                <div style={{ display: 'flex', marginBottom: '2rem' }}>
                    <button style={{ ...buttonStyle, backgroundColor: 'rgba(50, 50, 50, 0.6)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                        Watch Now
                    </button>
                    <button style={{ ...buttonStyle, backgroundColor: 'rgba(100, 100, 100, 0.4)', color: 'white' }}>
                        Info
                    </button>
                </div>

                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#aaa', fontWeight: 600 }}>
                    <span>PG-13</span>
                    <span>1 Season</span>
                    <span>SCI-FI</span>
                    <span>Action</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
