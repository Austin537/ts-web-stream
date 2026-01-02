
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentRail from '../components/ContentRail';

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#0b0b0d', minHeight: '100vh', paddingBottom: '2rem', overflowX: 'hidden' }}>
      <Header />
      <Hero />
      <div style={{ marginTop: '-150px', position: 'relative', zIndex: 20 }}>
        <ContentRail title="Continue Watching" />
        <ContentRail title="Trending Now In SCI-FI" />
        <ContentRail title="New Releases" />
        <ContentRail title="Action Blockbusters" />
      </div>
    </div>
  );
};

export default Home;
