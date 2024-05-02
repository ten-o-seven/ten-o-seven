import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import left from '../../images/caret_left.svg';
import right from '../../images/caret_right.svg';


/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function WireframeCarousel({
  imageList,
  imageSpacing,
  imageWidth,
  verticalPadding,
}) {
  const container = useRef(null);
  const [intervalRef, setIntervalRef] = useState(null);

  const handleScroll = (dir) => {
    if (dir === 'left') container.current.scrollLeft -= 1;
    else if (dir === 'right') container.current.scrollLeft += 1;
  };

  const handleMouseDown = (dir) => {
    const interval = setInterval(()=>handleScroll(dir), 1);
    setIntervalRef(interval);
  };

  return (
    <div className="flex">
      <button
        onMouseEnter={()=> handleMouseDown('left')}
        onMouseLeave={()=> clearInterval(intervalRef)}
        style={{padding: 20}}
      >
        <img src={left} />
      </button>
      <div
        ref={container}
        className="flex container"
        style={{
          marginTop: 30,
          padding: `${verticalPadding}px 20px`,
          overflowX: 'scroll',
          border: '3px solid black',
          borderRadius: 15,
          scrollbarWidth: 'thin',
          scrollbarColor: '#777 transparent',
        }}
      >
        {imageList.map((image)=>{
          return (
            <img
              src={image.default}
              key={image.default}
              style={{
                marginLeft: imageSpacing,
                width: imageWidth,
                objectFit: 'contain',
              }}
            />
          );
        })}
      </div>
      <button
        onMouseEnter={()=> handleMouseDown('right')}
        onMouseLeave={()=> clearInterval(intervalRef)}
        style={{padding: 20}}
      >
        <img src={right} />
      </button>
    </div>
  );
}

WireframeCarousel.propTypes = {
  imageList: PropTypes.string.isRequired,
  imageWidth: PropTypes.number,
  imageSpacing: PropTypes.number,
  verticalPadding: PropTypes.number,
};

WireframeCarousel.defaultProps = {
  imageSpacing: 20,
  imageWidth: 150,
  verticalPadding: 55,
};


