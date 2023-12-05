import React from 'react';
import {useEffect, useState, useRef} from 'react';
import Toggler from '../../common/Toggler';
import {DOODLES_MAP, PROJECTS_MAP} from '../../constants';
import {useStore} from '../../Store';
import './styles.css';
import 'animate.css';

/**
 * @return {Node} the project collection view
 */
export default function Projects() {
  const {setDisplayedPage} = useStore();
  const [pageOpacity, setPageOpacity] = useState(0);

  const [isUiToggled, setIsUiToggled] = useState(true);
  const [thumbnailPosition, setThumbnailPosition] = useState(-5);
  const mouseEvent = useRef({});

  const onTogglerClick = () => {
    if (isUiToggled) {
      setThumbnailPosition(15);
    } else {
      setThumbnailPosition(-5);
    }

    document.querySelectorAll('.parallax-element').forEach((shift) => {
      const isForeground = shift.getAttribute('data-toggled') === 'true' ? true : false;
      if (!isForeground) {
        shift.style.transform = `scale(1.5, 1.5) translateX(0px) translateY(0px)`;
      } else {
        shift.style.transform = `scale(1, 1) translateX(0px) translateY(0px)`;
      }
    });
    setIsUiToggled(!isUiToggled);
  };


  const parallax = (event) => {
    mouseEvent.current = event;
    document.querySelectorAll('.parallax-element').forEach((shift) => {
      const isForeground = shift.getAttribute('data-toggled') === 'true' ? true : false;
      const position = isForeground ?
        shift.getAttribute('value') : shift.getAttribute('value') / 10;

      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      if (isForeground) {
        shift.style.transform = `scale(1.5, 1.5) translateX(${x}px) translateY(${y}px)`;
      } else {
        shift.style.transform = `scale(1, 1) translateX(${x}px) translateY(${y}px)`;
      }
    });
  };

  const toggleBySpaceBar = (event) => {
    if (event.keyCode === 32 ) {
      onTogglerClick();
    }
  };

  useEffect(()=>{
    setTimeout(()=>{
      setPageOpacity(1);
    }, 700);
    document.addEventListener('mousemove', parallax);
    return () => document.removeEventListener('mousemove', parallax);
  }, []);


  useEffect(()=>{
    document.addEventListener('keydown', toggleBySpaceBar);
    return () => document.removeEventListener('keydown', toggleBySpaceBar);
  }, [isUiToggled]);


  return (
    <div
      className="flex flex-column full-vh relative"
      style={{
        width: 'calc(100vw - 100px)',
        transition: '0.75s ease-out',
        opacity: pageOpacity,
      }}
    >
      <Toggler onClick={onTogglerClick} position={thumbnailPosition}/>
      <div className="flex flex-column flex-grow relative">
        <div className="flex flex-column flex-grow relative">
          {Object.entries(PROJECTS_MAP).map(([name, {src, value, styles}], i)=>{
            return (
              <div
                key={name}
                id={`parallax-${name}`}
                value={value}
                data-toggled={isUiToggled}
                className="parallax-element relative"
                onClick={()=>{
                  setPageOpacity(0);
                  setTimeout(()=>{
                    setDisplayedPage(name);
                  }, 1500);
                }}
                style={{
                  zIndex: 100,
                  opacity: isUiToggled ? 1 : 0.2,
                  marginTop: `${(i+1) * 9}vh`,
                  transform: 'scale(1.5, 1.5) translateX(0px) translateY(0px)',
                  ...styles,
                }}>
                <img
                  className={'parallax-children animate__animated'}
                  src={src}
                  style={{
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer',
                  }}
                />
              </div>
            );
          })}
        </div>
        <div
          className="absolute flex flex-column flex-grow"
          style={{height: '90%', width: '100%', top: 0}}
        >
          {Object.entries(DOODLES_MAP).map(([name, {src, value, styles}], i)=>{
            return (
              <div
                value={value}
                data-toggled={!isUiToggled}
                key={name}
                id={`parallax-${name}`}
                className={'parallax-element relative'}
                src={src}
                style={{
                  opacity: isUiToggled ? 0.2 : 1,
                  marginTop: `${(i+1) * 7}vh`,
                  transform: 'scale(1, 1) translateX(0px) translateY(0px)',
                  ...styles,
                }}
              >
                <img
                  className={'parallax-children animate__animated'}
                  src={src}
                  style={{
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
