import React, { useRef } from 'react';
import Navbar from './Navbar';
import useSticky from 'hooks/useSticky';
import Topbar from './Topbar';

const Header = () => {
  // Reference to the sticky wrapper element
  const stickyRef = useRef(null);

  // Custom hook to determine sticky state based on scroll position (350px)
  const isSticky = useSticky(350);

  return (
    <div 
      ref={stickyRef} 
      className={`sticky-wrapper ${isSticky ? 'is-sticky' : ''}`}
    >
      {/* Topbar section (contact info, social links, etc.) */}
      <Topbar />

      {/* Main navigation bar */}
      <Navbar />
    </div>
  );
};

export default Header;
