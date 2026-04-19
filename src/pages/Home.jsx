import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Home.css';

const Home = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title-line', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.5 }
      );

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" ref={containerRef}>
      <div className="hero-content">
        <h1 className="hero-title">
          <div className="hero-title-line-wrapper">
            <span className="hero-title-line">We are launching</span>
          </div>
          <div className="hero-title-line-wrapper">
            <span className="hero-title-line">our flagship SaaS</span>
          </div>
          <div className="hero-title-line-wrapper">
            <span className="hero-title-line highlight">"KIN" Soon.</span>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Home;
