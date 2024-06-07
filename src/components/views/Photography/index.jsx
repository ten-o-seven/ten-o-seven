import React from 'react';
import useAssetAppend from '../../../hooks/useAssetAppend';
import useAssetLoader from '../../../hooks/useAssetLoader';
import Construction from '../../common/Construnction';
import FlipImage from './FlipImage';
import {imageMap, textListObj} from './imageMap';
import './styles.css';

/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function Photography() {
  let adjustedIndex = 0;
  const skippedMap = {};
  const {loaded, assets, status} = useAssetLoader(imageMap, 'image');
  useAssetAppend(loaded, assets, {className: 'appended-image'});

  return (
    <div
      className="large-container flex flex-column align-items-center"
      style={{
        overflow: loaded ? 'inherit' : 'hidden',
        height: loaded ? '100%' : '90vh',
      }}
    >
      <Construction
        title={`loading... ${status}`}
        style={{
          display: loaded ? 'none' : 'flex',
        }}
      />
      <div
        style={{
          height: loaded ? '100%' : 0,
          opacity: loaded ? 1 : 0,
          zIndex: loaded ? 0 : -1,
          marginBottom: loaded ? 250 : 0,
        }}
      >
        <div className="container" style={{marginTop: 250}}>
          <h1>dslr.</h1>
        </div>
        <div className="flex align-items-start justify-between" style={{flexWrap: 'wrap'}}>
          {imageMap.map(({image, vertical}, index, imgArr)=>{
            const isRightColumn = adjustedIndex % 2 === 1;
            console.log(index, isRightColumn);
            if (index===33)console.log('blah', !!imgArr[index+1]?.vertical);
            const shouldStackNext = isRightColumn && !!imgArr[index-1]?.vertical && !vertical;
            const shouldStackSkipped = !isRightColumn && !!imgArr[index+1]?.vertical && !vertical;


            const ref = image.default.split('/').join('').split('.')[0];

            if (skippedMap[ref]) {
              adjustedIndex ++;
              return (null);
            } else if (shouldStackNext) {
              const refNext = imgArr[index+1]?.image?.default?.split('/')?.join('')?.split('.')[0];
              skippedMap[refNext] = true;
              return (
                <div
                  key={image.default}
                  className="flex flex-column justify-between"
                >
                  <FlipImage
                    id={ref}
                    backText={textListObj?.[index+1]?.default}
                    vertical={vertical}
                  />
                  <FlipImage
                    id={refNext}
                    backText={textListObj?.[index+2]?.default}
                    vertical={imgArr[index+1]?.vertical}
                  />
                </div>
              );
            } else if (shouldStackSkipped) {
              const refNext = imgArr[index+2]?.image?.default?.split('/')?.join('')?.split('.')[0];
              skippedMap[refNext] = true;
              return (
                <div
                  key={image.default}
                  className="flex flex-column justify-between"
                >
                  <FlipImage
                    id={ref}
                    backText={textListObj?.[index+2]?.default}
                    vertical={vertical}
                  />
                  <FlipImage
                    id={refNext}
                    backText={textListObj?.[index+3]?.default}
                    vertical={imgArr[index+2]?.vertical}
                  />
                </div>
              );
            } else {
              const ref = image.default.split('/').join('').split('.')[0];
              adjustedIndex ++;
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
