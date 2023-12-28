import React, { useState, useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';
// import About from './About';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmallerScreen = window.innerWidth < 850;
      if (!isSmallerScreen) {
        setIsOpen(true); // Keep the menu open on bigger screens
      } else {
        setIsOpen(false); // Close the menu on smaller screens
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      if (window.innerWidth < 850){
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <div className='nv_container'>
        <nav>
          <div className='nav-logo'>
            {/* <RouterLink className='link' to=""> */}
              <img className='logo-img' src="./assets/img/webimg/zeblogo.webp" alt="icon" />
              {/* </RouterLink> */}
            {/* <h5>Puppy World</h5> */}
          </div>
          <div className='menu-link'>
            {isOpen && (
              <ul>
                {/* <li><Link to="" onClick={handleLinkClick}>Home</Link></li>
                <li><Link smooth to="/about" onClick={handleLinkClick}>About</Link></li>
                <li><Link smooth to="/product" onClick={handleLinkClick}>Product</Link></li>
                <li><Link smooth to="/training" onClick={handleLinkClick}>Training</Link></li>
                <li><Link smooth to="/Pet Boarding" onClick={handleLinkClick}>Pet Boarding</Link></li>
                <Link className='Butt_contact' smooth to="#contact" onClick={handleLinkClick}><button className='nav_contact' >Contact us</button></Link> */}
              </ul>
              
            )}
          </div>
          {/* <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
          </div> */}
          <div><h3 style={{ color: '#fff' }}>  +91 8506 888 288</h3></div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
