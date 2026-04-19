import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    // Simple staggering animation on load
    gsap.fromTo('.nav-link', 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  return (
    <header className="navigation" ref={navRef}>
      <div className="logo-container">
        <Link to="/" className="logo">
          <strong>Raione</strong><span className="logo-dot">.</span>
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/kin" className={location.pathname === '/kin' ? 'active' : ''}>The Tool</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Get In Touch</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
