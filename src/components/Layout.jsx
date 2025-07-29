import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout component wraps page content with a consistent header and footer.
 * 
 * @param {React.ReactNode} children - The page content to be rendered between header and footer.
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
