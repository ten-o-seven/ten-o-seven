import React from 'react';
import useAssetLoader from '../hooks/useAssetLoader';
import hero1 from '../video/hero_1.mp4';
import hero2 from '../video/hero_2.mp4';
import hero3 from '../video/hero_3.mp4';
import hero4 from '../video/hero_4.mp4';

/**
 * @return {Node} home landing page
 */
export default function Home() {
  // const [isMuted, setIsMuted] = useState(true);
  // const [isPaused, setIsPaused] = useState(false);
  // const playPause = () => {
  //   if (isPaused) {
  //     videoRef.current.play();
  //     setIsPaused(false);
  //   } else {
  //     videoRef.current.pause();
  //     setIsPaused(true);
  //   }
  // };
  // const videoRef = useRef();

  // const [videoNumber, setVideoNumber] = useState(null);
  // useEffect(()=>{
  //   setVideoNumber(num);
  // }, []);
  const videoObj = {
    1: hero1,
    2: hero2,
    3: hero3,
    4: hero4,
  };

  const videoNumber = Math.floor(Math.random() * 4) + 1;
  const {loaded, assets} = useAssetLoader([videoObj[videoNumber]]);

  if (!loaded) {
    return (
      <h2 className="full-vh flex justify-center align-items-center">
        loading...
      </h2>
    );
  }

  return (
    <div
      className="full-view"
      id="homeContainer"
      style={{overflow: 'hidden'}}
    >
      {assets.map(({element})=>{
        return (
          <video
            key={element}
            autoPlay={true}
            controls={false}
            className="full-view"
            style={{objectFit: 'cover'}}
            loop={true}
            muted={true}
            // ref={videoRef}
            // muted={isMuted}
          >
            <source
              src={element.src}
              type="video/mp4"
            />
          </video>
        );
      })}
      {/* <div style={{
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
      </div> */}
    </div>
  );
}
