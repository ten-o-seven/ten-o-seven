import React,
{useEffect, useRef, useState} from 'react';
import {useStore} from '../components/Store';
import cloud1 from '../video/cloud_1.mp4';

/**
 * @return {Node} home landing page
 */
export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const {pageOpacity, setPageOpacity} = useStore();
  const videoRef = useRef();

  const playPause = () => {
    if (isPaused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

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
        muted={isMuted}
        ref={videoRef}
        loop={true}
      >
        <source src={cloud1} type="video/mp4" />
      </video>
      <div style={{
        zIndex: 1000,
        position: 'absolute',
        top: '10vh',
        left: '10vh',

      }}
      >
        <button
          onClick={()=>setIsMuted(!isMuted)}
          style={{padding: 10}}
        >
          <span
            title={isMuted ? 'click to unmute' : 'click to mute'}
            className={`fa-lg fa-solid fa-volume-${isMuted ? 'xmark' : 'high'}`}
          />
        </button>
        <button
          onClick={playPause}
          style={{padding: 10}}
        >
          <span
            title={isPaused ? 'click to play' : 'click to pause'}
            className={`fa-lg fa-solid fa-${isPaused ? 'play' : 'pause'}`}
          />
        </button>
      </div>
    </div>
  );
}
