import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafId = useRef(null);

  // Keep a mutable ref of isPointer to access it instantly inside animation loop without stale state
  const isPointerRef = useRef(false);

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
        
      const pointerState = !!clickable;
      setIsPointer(pointerState);
      isPointerRef.current = pointerState;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Initial position to avoid starting at top-left (0,0)
    pos.current.rx = window.innerWidth / 2;
    pos.current.ry = window.innerHeight / 2;

    const animCursor = () => {
      const { mx, my } = pos.current;
      
      // Lerp for the ring - increased to 0.22 for faster, 60fps responsive movement
      pos.current.rx += (mx - pos.current.rx) * 0.22;
      pos.current.ry += (my - pos.current.ry) * 0.22;

      if (cursorRef.current && ringRef.current) {
        // Hardware accelerated translate3d (avoids left/top layout thrashing)
        const scaleVal = isPointerRef.current ? 2.2 : 1;
        cursorRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%) scale(${scaleVal})`;
        ringRef.current.style.transform = `translate3d(${pos.current.rx}px, ${pos.current.ry}px, 0) translate(-50%, -50%)`;
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
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-[width,height,background-color,border-color,opacity] duration-250 ease-out"
        style={{
          width: isPointer ? '48px' : '26px',
          height: isPointer ? '48px' : '26px',
          borderColor: '#4A72EB', // Blue cursor matches our light theme
          borderWidth: '2px',
          borderStyle: 'solid',
          backgroundColor: isPointer ? 'rgba(74, 114, 235, 0.15)' : 'transparent',
          boxShadow: '0 0 10px rgba(74, 114, 235, 0.25)',
          opacity: isVisible ? 1 : 0,
          transform: 'translate3d(-50%, -50%, 0)',
          willChange: 'transform',
        }}
      />
      {/* The instant dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-brand-blue rounded-full pointer-events-none z-[9999] transition-[opacity] duration-250 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: 'translate3d(-50%, -50%, 0)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
