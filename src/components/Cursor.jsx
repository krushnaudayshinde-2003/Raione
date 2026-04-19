import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Move cursor
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
    };
    
    // Hover effects
    const onMouseEnter = () => cursor.classList.add('active');
    const onMouseLeave = () => cursor.classList.remove('active');

    window.addEventListener('mousemove', onMouseMove);
    
    const observer = new MutationObserver(() => {
      const interactives = document.querySelectorAll('a, button, .play-button, .social-link');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} />;
};

export default Cursor;
