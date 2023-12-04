import React, {useEffect, useState} from 'react';
import Hero from './Hero';
import HeroSubSection from './HeroSubSection';
import Opportunities from './Opportunities';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Project Page
 */
export default function PacificParadise() {
  const [pageOpacity, setPageOpacity] = useState(0);
  useEffect(()=>{
    setPageOpacity(1);
  }, []);

  return (
    <div
      className="full-view flex flex-column align-items-center"
      style={{
        width: 'calc(100vw - 100px)',
        transition: '0.75s ease-out',
        opacity: pageOpacity,
      }}>
      <div className="container flex flex-column" >
        <Hero />
        <HeroSubSection />
        <Opportunities />
      </div>
    </div>
  );
}
