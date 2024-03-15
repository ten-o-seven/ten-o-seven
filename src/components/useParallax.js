import {useEffect, useRef} from 'react';

const useParallax = () =>{
  const mouseEvent = useRef({});

  const parallax = (event) => {
    mouseEvent.current = event;
    document.querySelectorAll('.parallax-element').forEach((shift) => {
      const isForeground = shift.getAttribute('data-toggled') === 'true' ? true : false;
      const position = isForeground ?
        shift.getAttribute('value') : shift.getAttribute('value') / 10;

      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      if (isForeground) {
        shift.style.transform = `scale(1.5, 1.5) translateX(${x}px) translateY(${y}px)`;
      } else {
        shift.style.transform = `scale(1, 1) translateX(${x}px) translateY(${y}px)`;
      }
    });
  };

  useEffect(()=>{
    document.addEventListener('mousemove', parallax);
    return () => document.removeEventListener('mousemove', parallax);
  }, []);
};

export default useParallax;
