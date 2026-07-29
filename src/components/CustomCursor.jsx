import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    // Don't init on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const clickable = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') || 
        target.closest('textarea') || 
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsPointer(!!clickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    const animCursor = () => {
      const { mx, my } = pos.current;
      
      // Lerp for the ring
      pos.current.rx += (mx - pos.current.rx) * 0.12;
      pos.current.ry += (my - pos.current.ry) * 0.12;

      if (cursorRef.current && ringRef.current) {
        // Dot follows instantly
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;
        // Ring follows with delay
        ringRef.current.style.left = `${pos.current.rx}px`;
        ringRef.current.style.top = `${pos.current.ry}px`;
      }
      
      rafId.current = requestAnimationFrame(animCursor);
    };

    rafId.current = requestAnimationFrame(animCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  // Hide entirely on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* The trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isPointer ? '60px' : '36px',
          height: isPointer ? '60px' : '36px',
          borderColor: '#ffffff',
          borderWidth: '2px',
          borderStyle: 'solid',
          backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          boxShadow: '0 0 8px rgba(0, 82, 255, 0.4), 0 0 2px rgba(0, 0, 0, 0.2)',
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* The instant dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-[9999] transition-transform duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(-50%, -50%) scale(${isPointer ? 2 : 1})`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
