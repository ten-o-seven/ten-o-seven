import React, {useEffect} from 'react';
import useAssetLoader from '../../../hooks/useAssetLoader';
import {useStore} from '../../Store';
import FlipImage from './FlipImage';
import {imageMap, textListObj} from './imageMap';

/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function Photography() {
  let skipNextImage = false;
  let stackedCount = 0;

  const {setPageOpacity} = useStore();
  const {loaded, assets} = useAssetLoader(imageMap, 'image');


  useEffect(()=>{
    setPageOpacity(0);
    setTimeout(()=>{
      setPageOpacity(1);
    }, 700);
  }, [loaded]);

  if (!loaded) {
    return (
      <h2 className="full-vh flex justify-center align-items-center">
        loading...
      </h2>
    );
  }

  return (
    <div className="large-container flex flex-column align-items-center">
      <div className="container" style={{marginTop: 250}}>
        <h1>dslr.</h1>
      </div>
      <div className="flex align-items-start justify-between" style={{flexWrap: 'wrap'}}>
        {assets.map(({image, vertical, element}, index, imgArr)=>{
          const isRightColumn = (index - stackedCount) % 2 === 1;
          const shouldStack =
            (isRightColumn && !!imgArr[index-1]?.vertical && !vertical) ||
            (!isRightColumn && !!imgArr[index+1]?.vertical && !vertical);
          if (shouldStack) {
            skipNextImage = true;
            stackedCount ++;
            return (
              <div
                key={image}
                className="flex flex-column justify-between"
              >
                <FlipImage
                  front={element.src}
                  backText={textListObj?.[index+1]?.default}
                  vertical={vertical}
                />
                <FlipImage
                  front={imgArr[index+1]?.element.src}
                  backText={textListObj?.[index+2]?.default}
                  vertical={vertical}
                />
              </div>
            );
          } else if (skipNextImage) {
            skipNextImage = false;
            return (null);
          } else {
            return (
              <div key={image}>
                <FlipImage
                  front={element.src}
                  backText={textListObj?.[index+1]?.default}
                  vertical={vertical}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
