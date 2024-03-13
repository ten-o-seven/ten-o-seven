import React, {useEffect} from 'react';
import {useStore} from '../components/Store';
import cloud1 from '../video/cloud_1.mp4';

const IndexPage = () => {
  const {pageOpacity, setPageOpacity} = useStore();
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
      <video
        autoPlay={true}
        controls={false}
        className="full-view"
        style={{objectFit: 'cover'}}
      >
        <source src={cloud1} type="video/mp4" />
      </video>
    </div>
  );
};

export default IndexPage;
