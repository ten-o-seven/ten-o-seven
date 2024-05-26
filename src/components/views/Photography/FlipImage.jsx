import React, {useState} from 'react';
import PropTypes from 'prop-types';
import backV from './images/back_vertical.png';
import backH from './images/back_horizontal.png';
import './styles.css';

/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function FlipImage({front, backText, vertical, styles}) {
  const [showBack, setShowBack] = useState(false);
  const backImg = vertical ? backV : backH;
  const handleFlip = () => {
    setShowBack((prev)=> !prev);
  };
  if (!front) {
    return null;
  }

  return (
    <div
      className="relative flip-card"
      style={{
        marginTop: 100,
        position: 'relative',
        transition: 'all 0.2s',
        transform: showBack ? 'scale(1,1)' : 'scale(-1, 1)',
        width: 600,
        height: vertical ? 900 : 400,
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          opacity: showBack ? 1 : 0,
        }}
      >
        <img
          src={backImg}
          style={{
            left: 0,
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            transition: 'all 0.2s',
            ...styles,
          }}
          onClick={handleFlip}
        />
        {backText &&
            <img
              src={backText}
              style={{
                position: 'absolute',
                top: '70%',
                left: '20%',
              }}
            />
        }
      </div>
      <img
        src={front}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          opacity: showBack ? 0 : 1,
          ...styles,
        }}
        onClick={handleFlip}
      />
    </div>
  );
}

FlipImage.propTypes = {
  front: PropTypes.string,
  backText: PropTypes.object,
  styles: PropTypes.object,
  vertical: PropTypes.bool,
};

FlipImage.defaultProps = {
  front: null,
  backText: null,
  styles: {},
  vertical: false,
};


