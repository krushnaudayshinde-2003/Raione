import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Contact.css';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-header',
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1 }
      );
      gsap.fromTo('.social-link',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container flex-center" ref={containerRef}>
      <div className="contact-card">
        <h1 className="contact-header">Let's Connect</h1>
        <p className="contact-subtitle">Follow us on our journey</p>
        
        <div className="social-links">
          <a href="#" className="social-link">
            <span className="social-icon">X</span>
            <span className="social-name">Twitter / X</span>
          </a>
          <a href="#" className="social-link">
            <span className="social-icon">in</span>
            <span className="social-name">LinkedIn</span>
          </a>
          <a href="#" className="social-link">
            <span className="social-icon">GH</span>
            <span className="social-name">GitHub</span>
          </a>
          <a href="#" className="social-link">
            <span className="social-icon">IG</span>
            <span className="social-name">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
