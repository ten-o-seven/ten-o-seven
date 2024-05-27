import React from 'react';
import useAssetAppend from '../../../hooks/useAssetAppend';
import useAssetLoader from '../../../hooks/useAssetLoader';
import FlipImage from './FlipImage';
import {imageMap, textListObj} from './imageMap';
import './styles.css';

/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function Photography() {
  let skipNextImage = false;
  let stackedCount = 0;
  const {loaded, assets, status} = useAssetLoader(imageMap, 'image');
  useAssetAppend(loaded, assets, {className: 'appended-image'});

  return (
    <div className="large-container flex flex-column align-items-center">
      <h2
        className="full-vh"
        style={{
          opacity: loaded ? 0 : 1,
          zIndex: loaded ? -1 : 0,
          top: '45%',
          position: 'absolute',
        }}
      >
        loading... {status}
      </h2>
      <div
        style={{
          opacity: loaded ? 1 : 0,
          zIndex: loaded ? 0 : -1,
        }}
      >
        <div className="container" style={{marginTop: 250}}>
          <h1>dslr.</h1>
        </div>
        <div className="flex align-items-start justify-between" style={{flexWrap: 'wrap'}}>
          {imageMap.map(({image, vertical}, index, imgArr)=>{
            const isRightColumn = (index - stackedCount) % 2 === 1;
            const shouldStack =
            (isRightColumn && !!imgArr[index-1]?.vertical && !vertical) ||
            (!isRightColumn && !!imgArr[index+1]?.vertical && !vertical);
            if (shouldStack) {
              skipNextImage = true;
              stackedCount ++;
              const ref = image.default.split('/').join('').split('.')[0];
              const refNext = imgArr[index+1]?.image?.default?.split('/')?.join('')?.split('.')[0];
              return (
                <div
                  key={image.default}
                  className="flex flex-column justify-between"
                >
                  <div>
                    <FlipImage
                      id={ref}
                      backText={textListObj?.[index+1]?.default}
                      vertical={vertical}
                    />
                  </div>
                  <div>
                    <FlipImage
                      id={refNext}
                      backText={textListObj?.[index+2]?.default}
                      vertical={vertical}
                    />
                  </div>
                </div>
              );
            } else if (skipNextImage) {
              skipNextImage = false;
              return (null);
            } else {
              const ref = image.default.split('/').join('').split('.')[0];
              return (
                <div key={image.default}>
                  <FlipImage
                    id={ref}
                    backText={textListObj?.[index+1]?.default}
                    vertical={vertical}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
