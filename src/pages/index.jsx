import React,
{useEffect, useRef, useState} from 'react';
import hero1 from '../video/hero_1.mp4';
import hero2 from '../video/hero_2.mp4';
import hero3 from '../video/hero_3.mp4';
import hero4 from '../video/hero_4.mp4';

/**
 * @return {Node} home landing page
 */
export default function Home() {
  // const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [video, setVideo] = useState(null);
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

  const selectVideo = () => {
    const videoMap = {
      0: hero1,
      1: hero2,
      2: hero3,
      3: hero4,
    };
    const num = Math.floor(Math.random() * 4);
    setVideo(videoMap[num]);
  };

  useEffect(()=>{
    selectVideo();
  }, []);

  if (!video) return null;

  return (
    <div
      className="full-view"
      id="homeContainer"
      style={{overflow: 'hidden'}}
    >
      <video
        autoPlay={true}
        controls={false}
        className="full-view"
        style={{objectFit: 'cover'}}
        ref={videoRef}
        loop={true}
        muted={true}
        // muted={isMuted}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div style={{
        zIndex: 1000,
        position: 'absolute',
        top: '10vh',
        left: '10vh',

      }}
      >
        {/* <button
          onClick={()=>setIsMuted(!isMuted)}
          style={{padding: 10}}
        >
          <span
            title={isMuted ? 'click to unmute' : 'click to mute'}
            className={`fa-lg fa-solid fa-volume-${isMuted ? 'xmark' : 'high'}`}
          />
        </button> */}
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
