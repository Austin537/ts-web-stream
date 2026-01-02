import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ts_main_logo.svg';

const SignUp: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        minHeight: '100vh',
        backgroundColor: '#0b0b0d',
        color: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
    };

    const sectionTitleStyle: React.CSSProperties = {
        fontSize: '2rem',
        fontWeight: 700,
        margin: '2rem 0 1.5rem',
        borderBottom: '2px solid #E50914',
        paddingBottom: '0.5rem',
        width: '100%',
        maxWidth: '1000px',
    };

    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%',
        maxWidth: '1000px',
        marginBottom: '3rem',
    };

    const cardStyle: React.CSSProperties = {
        backgroundColor: '#1a1a1d',
        borderRadius: '8px',
        padding: '2rem',
        border: '1px solid #333',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, border-color 0.2s',
        cursor: 'pointer',
    };

    const buttonStyle: React.CSSProperties = {
        marginTop: 'auto',
        padding: '0.8rem',
        backgroundColor: '#E50914',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        cursor: 'pointer',
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <Link to="/login">
                <img src={logo} alt="Logo" style={{ height: '60px', marginBottom: '1rem' }} />
            </Link>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Join the Platform</h1>
            <p style={{ color: '#aaa', marginBottom: '2rem' }}>Choose the plan that fits your needs.</p>

            {/* Viewer Section */}
            <h2 style={sectionTitleStyle}>For Viewers</h2>
            <div style={gridStyle}>
                <div
                    style={cardStyle}
                    onMouseOver={(e) => { e.currentTarget.style.borderColor = '#E50914'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Free</h3>
                    <p style={{ color: '#ccc', marginBottom: '1.5rem', flex: 1 }}>
                        Access to thousands of ad-supported movies and shows.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', color: '#888' }}>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Standard Definition</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Ad-supported</li>
                        <li>✓ Watch on 1 device</li>
                    </ul>
                    <button style={{ ...buttonStyle, backgroundColor: '#333' }}>Sign Up Free</button>
                </div>

                <div
                    style={{ ...cardStyle, borderColor: '#d69e2e' }}
                    onMouseOver={(e) => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.borderColor = '#d69e2e'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#d69e2e' }}>Pro View</h3>
                    <p style={{ color: '#ccc', marginBottom: '1.5rem', flex: 1 }}>
                        Ad-free experience with high definition content and offline downloads.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', color: '#ccc' }}>
                        <li style={{ marginBottom: '0.5rem' }}>✓ 4K Ultra HD</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Ad-free</li>
                        <li>✓ Watch on 4 devices</li>
                    </ul>
                    <button style={buttonStyle}>Get Pro</button>
                </div>
            </div>

            {/* Business Section */}
            <h2 style={{ ...sectionTitleStyle, borderBottom: '2px solid #555' }}>Business Solutions</h2>
            <div style={gridStyle}>
                <div style={cardStyle}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Studio Partner</h3>
                    <p style={{ color: '#ccc', marginBottom: '1.5rem', flex: 1 }}>
                        Distribute your content to a global audience and track performance analytics.
                    </p>
                    <button style={{ ...buttonStyle, backgroundColor: '#333' }}>Apply as Studio</button>
                </div>
                <div style={cardStyle}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Advertiser</h3>
                    <p style={{ color: '#ccc', marginBottom: '1.5rem', flex: 1 }}>
                        Reach engaged viewers with targeted ad campaigns.
                    </p>
                    <button style={{ ...buttonStyle, backgroundColor: '#333' }}>Start Advertising</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
