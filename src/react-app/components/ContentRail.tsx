
import React, { useRef, useState, useEffect } from 'react';

interface ContentRailProps {
    title: string;
}

const ContentRail: React.FC<ContentRailProps> = ({ title }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (el) {
            el.addEventListener('scroll', checkScroll);
            checkScroll();
            return () => el.removeEventListener('scroll', checkScroll);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -current.clientWidth / 2 : current.clientWidth / 2;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const railStyle: React.CSSProperties = {
        marginBottom: '3rem',
        paddingLeft: '4rem',
        position: 'relative',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '1.4rem',
        fontWeight: 600,
        marginBottom: '1rem',
        color: '#e5e5e5',
    };

    const listContainerStyle: React.CSSProperties = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    };

    const listStyle: React.CSSProperties = {
        display: 'flex',
        gap: '1rem',
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        paddingBottom: '1rem',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE/Edge
    };

    const arrowStyle: React.CSSProperties = {
        position: 'absolute',
        top: '0',
        bottom: '1rem', // Match list padding
        zIndex: 10,
        width: '50px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        transition: 'background-color 0.3s, opacity 0.3s',
    };

    const itemStyle: React.CSSProperties = {
        minWidth: '350px', // Bigger width
        height: '200px', // Bigger height
        backgroundColor: '#222',
        borderRadius: '6px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        flexShrink: 0, // Prevent shrinking
    };

    // Mock items
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div style={railStyle} className="content-rail">
            <h3 style={titleStyle}>{title}</h3>

            <div style={listContainerStyle}>
                {showLeftArrow && (
                    <button
                        onClick={() => scroll('left')}
                        style={{ ...arrowStyle, left: '-4rem' }} // Pull out to the left padding
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
                    >
                        ‹
                    </button>
                )}

                <div
                    ref={scrollContainerRef}
                    style={listStyle}
                    className="hide-scrollbar"
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                ...itemStyle,
                                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), transparent), url(https://picsum.photos/400/250?random=${index + (title.length)})`
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.zIndex = '1'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.zIndex = '0'; }}
                        >
                            <span style={{ position: 'absolute', bottom: '15px', left: '15px', fontSize: '1.1rem', fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                                Show Title {item}
                            </span>
                        </div>
                    ))}
                </div>

                {showRightArrow && (
                    <button
                        onClick={() => scroll('right')}
                        style={{ ...arrowStyle, right: 0 }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
                    >
                        ›
                    </button>
                )}
            </div>
        </div>
    );
};

export default ContentRail;
