import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Kin.css';

const Kin = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.kin-header',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' }
      );
      gsap.fromTo('.demo-button',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" ref={containerRef}>
      <h1 className="kin-header">Discover KIN.</h1>
      <p className="kin-subtitle">The ultimate tool for the modern IT industry.</p>
      
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <button className="demo-button">Demo</button>
      </div>
    </div>
  );
};

export default Kin;
