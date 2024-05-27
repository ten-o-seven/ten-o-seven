import React from 'react';
import useAssetAppend from '../hooks/useAssetAppend';
import useAssetLoader from '../hooks/useAssetLoader';
import hero1 from '../video/hero_1.mp4';
import hero2 from '../video/hero_2.mp4';
import hero3 from '../video/hero_3.mp4';
import hero4 from '../video/hero_4.mp4';

/**
 * @return {Node} home landing page
 */
export default function Home() {
  const videoObj = {
    1: hero1,
    2: hero2,
    3: hero3,
    4: hero4,
  };

  const videoNumber = Math.floor(Math.random() * 4) + 1;
  const {loaded, assets} = useAssetLoader([videoObj[videoNumber]]);
  useAssetAppend(
      loaded,
      assets,
      {
        'className': 'hero-video',
        'controls': false,
        'loop': true,
        'muted': true,
      },
      {
        'autoplay': true,
      },
  );

  if (!loaded) {
    return (
      <h2 className="full-vh flex justify-center align-items-center">
        loading...
      </h2>
    );
  }

  const ref = assets[0].url.split('/').join('').split('.')[0];

  return (
    <div
      className="full-view"
      id={ref}
      style={{overflow: 'hidden'}}
    />
  );
}
