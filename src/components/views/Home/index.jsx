import React, {useEffect, useState} from 'react';
import cloud1 from '../../../video/cloud_1.mp4';

/**
 * @return {Node} home landing page
 */
export default function Home() {
  const [pageOpacity, setPageOpacity] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setPageOpacity(1);
    }, 700);
  }, []);

  return (
    <div className="full-view" id="homeContainer" style={{
      opacity: pageOpacity,
      transition: '0.75s ease-in',
      overflow: 'hidden',
    }}>
      <video autoPlay={true} controls={false} className="full-view" style={{objectFit: 'cover'}}>
        <source src={cloud1} type="video/mp4" />
      </video>
    </div>
  );
}
