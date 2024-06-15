import React from 'react';
import useAssetAppend from '../hooks/useAssetAppend';
import useAssetLoader from '../hooks/useAssetLoader';
import hero1 from '../video/hero_1.mp4';
// import hero2 from '../video/hero_2.mp4';
import hero3 from '../video/hero_3.mp4';
import hero4 from '../video/hero_4.mp4';

/**
 * @return {Node} home landing page
 */
export default function Home() {
  const videoObj = {
    1: hero1,
    2: hero3,
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
    <>
      <div
        className="hidden-md-up full-view flex flex-column justify-center"
        style={{padding: '0 10%'}}
      >
        <h2>omg.</h2>
        <p style={{margin: '0 auto', paddingTop: 20}}>
          Given that you are on a small device,
          either your really want to see my work,
          or you are a workaholic looking at portfolios on a small device...
          I don&#39;t judge (mostly). This is a safe place (mostly).
          But the mobile responsive is a work in progress and best viewed on a desktop.
        </p>
      </div>
      <div
        className="full-view hidden-md-down"
        id={ref}
        style={{overflow: 'hidden'}}
      />
    </>
  );
}
