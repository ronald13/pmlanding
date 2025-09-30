import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../styles/global.scss'; // изменили на .scss

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, marginTop: '80px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;