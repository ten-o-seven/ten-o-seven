import React, {useEffect, useState} from 'react';
import Hero from './Hero';
import HeroSubSection from './HeroSubSection';
import Opportunities from './Opportunities';
import UserResearch from './UserResearch';
import UserStories from './UserStories';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Project Page
 */
export default function PacificParadise() {
  const [pageOpacity, setPageOpacity] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setPageOpacity(1);
    }, 700);
  }, []);

  return (
    <div
      className="full-view flex flex-column align-items-center"
      style={{
        width: 'calc(100vw - 100px)',
        transition: '0.75s ease-out',
        opacity: pageOpacity,
        marginTop: 100,
      }}>
      <div className="container flex flex-column" >
        <Hero />
        <HeroSubSection />
        <UserResearch />
        <Opportunities />
        <UserStories />
      </div>
    </div>
  );
}
