import React, { useState, useEffect } from 'react';
import '../index.css'; // Import your CSS for styling

export default function Scrollbar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 100) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div>
       <header >
      <nav>
        <div className="logo">Logo</div>
        <ul className="menu">
          <li><a href="/" className={`header ${scrolling ? 'scrolling' : ''}`}>Home</a></li>
          <li><a href="/" className={`header ${scrolling ? 'scrolling' : ''}`}>About</a></li>
          <li><a href="/" className={`header ${scrolling ? 'scrolling' : ''}`}>Services</a></li>
          <li><a href="/" className={`header ${scrolling ? 'scrolling' : ''}`}>Contact</a></li>
        </ul>
      </nav>
    </header>
    </div>
  )
}
