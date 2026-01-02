import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/ts_main_logo.svg';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { logout } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const scrollTimeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            // 1. Moving? Solid immediately.
            setIsScrolled(true);

            // 2. Clear stop timer
            if (scrollTimeoutRef.current) {
                window.clearTimeout(scrollTimeoutRef.current);
            }

            // 3. Set timer to revert to transparent if stopped
            scrollTimeoutRef.current = window.setTimeout(() => {
                setIsScrolled(false);
            }, 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
        };
    }, []);

    const headerStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 4%',
        transition: 'background-color 0.4s ease', // Smooth color transition
        // Logic: Solid Dark if scrolling, Transparent (alpha 0) if stopped.
        // Using rgba for alpha transition is smoother than 'transparent' keyword sometimes
        backgroundColor: isScrolled ? 'rgba(11, 11, 13, 1)' : 'rgba(11, 11, 13, 0)',
        height: '70px',
    };

    const searchInputStyle: React.CSSProperties = {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid transparent',
        borderRadius: '50px', // Pill shape
        color: '#fff',
        padding: '0.6rem 1.2rem',
        width: '100%',
        maxWidth: '800px', // Wider as requested
        outline: 'none',
        fontSize: '0.9rem',
        transition: 'all 0.2s',
    };

    const linkStyle: React.CSSProperties = {
        color: '#e5e5e5',
        textDecoration: 'none',
        opacity: 0.9,
        transition: 'opacity 0.2s',
        fontSize: '1rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    };

    return (
        <header style={headerStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Logo" style={{ height: '50px' }} />
                </Link>
                <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}>Home</Link>
                    <Link to="/" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}>TV Shows</Link>
                    <Link to="/" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}>Movies</Link>
                    <Link to="/" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}>My List</Link>
                </nav>
            </div>

            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', margin: '0 2rem' }}>
                <input
                    type="text"
                    placeholder="Search studios, shows, movies, worlds..."
                    style={searchInputStyle}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={(e) => { e.target.style.backgroundColor = 'rgba(0,0,0,0.8)'; e.target.style.border = '1px solid #fff'; }}
                    onBlur={(e) => { e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; e.target.style.border = '1px solid transparent'; }}
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ cursor: 'pointer', color: '#fff' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }} onClick={logout}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '4px', backgroundColor: '#E50914', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: '#fff', fontSize: '0.9rem' }}>
                        A
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
