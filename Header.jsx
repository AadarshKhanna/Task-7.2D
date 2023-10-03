import React from 'react';
import './Header.css';

// Define the Header component
function Header() {
  return (
    <header className='navbar'>
      <a href='/'>DEV@Deakin</a>
      <nav className='right'>
        <a href='/u_val'> New Post</a> {/* Navigation link for creating a new post */}
      </nav>
    </header>
  );
}

export default Header; // Export the Header component
