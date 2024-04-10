import React from 'react';
import {useEffect, useState} from 'react';
import {DOODLES_MAP, PROJECTS_MAP} from '../../constants';
import './styles.css';
import 'animate.css';
import {navigate} from 'gatsby-link';
import {useStore} from '../../Store';
import Icon from '../../common/Icon';
import FatBoi from './FatBoi';

/**
 * @return {Node} the project collection view
 */
export default function Projects() {
  const {
    pageOpacity,
    setPageOpacity,
  } = useStore();
  const [isUiToggled, setIsUiToggled] = useState(true);
  const [caption, setCaption] = useState(null);

  const onTogglerClick = () => {
    document.querySelectorAll('.parallax-element').forEach((shift) => {
      const isForeground = shift.getAttribute('data-toggled') === 'true' ? true : false;
      if (!isForeground) {
        shift.style.transform = `scale(2.2, 2.2) translateX(0px) translateY(0px)`;
      } else {
        shift.style.transform = `scale(1.75, 1.75) translateX(0px) translateY(0px)`;
      }
    });

    document.querySelectorAll('.parallax-children').forEach((shift) => {
      const isForeground = shift.getAttribute('data-toggled') === 'true' ? true : false;
      if (!isForeground) {
        shift.classList.add('pulse');
      } else {
        shift.classList.remove('pulse');
      }
    });

    setIsUiToggled(!isUiToggled);
  };


  const toggleBySpaceBar = (event) => {
    if (event.keyCode === 32 ) {
      onTogglerClick();
    }
  };

  const onMouseEnter = (title, subtitle) => {
    console.log(isUiToggled);
    const fatboi = document.querySelector('#fat-boi');
    fatboi.style.bottom = '5px';
    setCaption({title, subtitle});
  };

  const onMouseLeave = () => {
    const fatboi = document.querySelector('#fat-boi');
    fatboi.style = null;
    setCaption(null);
  };

  const onMouseClick = (pathname)=>{
    setPageOpacity(0);
    setTimeout(()=>{
      navigate(pathname);
    }, 700);
  };


  useEffect(()=>{
    document.addEventListener('keydown', toggleBySpaceBar);
    return () => document.removeEventListener('keydown', toggleBySpaceBar);
  }, [isUiToggled]);


  return (
    <div
      className="flex flex-column full-vh relative"
      style={{
        overflow: 'hidden',
        width: 'calc(100vw - 100px)',
        transition: '0.75s ease-out',
        opacity: pageOpacity,
      }}
    >
      <FatBoi onClick={onTogglerClick} caption={caption} />
      {/* <Toggler onClick={onTogglerClick} position={thumbnailPosition}/> */}
      <div className="flex flex-column flex-grow relative">
        <div className="flex flex-column flex-grow relative">
          {Object.entries(PROJECTS_MAP)
              .map(([pathname, {name, value, styles, title, subtitle}], i)=>{
                return (
                  <div
                    key={pathname}
                    id={`parallax-${pathname}`}
                    value={value}
                    data-toggled={isUiToggled}
                    className="parallax-element relative"
                    style={{
                      zIndex: 100,
                      opacity: isUiToggled ? 1 : 0.2,
                      marginTop: `${(i+1) * 11}vh`,
                      transform: 'scale(2.2, 2.2) translateX(0px) translateY(0px)',
                      ...styles,
                    }}

                    onMouseEnter={() => {
                      if (isUiToggled) onMouseEnter(title, subtitle);
                    }}
                    onMouseLeave={() => {
                      if (isUiToggled) onMouseLeave(title, subtitle);
                    }}
                    onClick={() => {
                      if (isUiToggled) onMouseClick(pathname);
                    }}
                  >
                    <Icon
                      className={'parallax-children pulse animate__animated'}
                      data-toggled={isUiToggled}
                      name={name}
                      style={{
                        width: '100%',
                        height: '100%',
                        cursor: isUiToggled ? 'pointer' : 'initial',
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
          {Object.entries(DOODLES_MAP).map(([pathname, {name, value, styles, title}], i)=>{
            return (
              <div
                value={value}
                data-toggled={!isUiToggled}
                key={pathname}
                id={`parallax-${pathname}`}
                className={'parallax-element relative'}
                style={{
                  opacity: isUiToggled ? 0.2 : 1,
                  marginTop: `${(i+1) * 9}vh`,
                  transform: 'scale(1.75, 1.75) translateX(0px) translateY(0px)',
                  display: 'flex',
                  alignItems: 'center',
                  ...styles,
                }}
                onMouseEnter={() => {
                  if (!isUiToggled) onMouseEnter(title);
                }}
                onMouseLeave={() => {
                  if (!isUiToggled) onMouseLeave(title);
                }}
                onClick={() => {
                  if (!isUiToggled) onMouseClick(pathname);
                }}
              >
                <Icon
                  className={'parallax-children animate__animated'}
                  data-toggled={!isUiToggled}
                  name={name}
                  style={{
                    width: '100%',
                    height: '100%',
                    cursor: isUiToggled ? 'initial' :'pointer',
                  }}
                />
                <div
                  style={{
                    display: 'none',
                    position: 'absolute',
                    left: '100%',
                    marginLeft: 10,
                    width: '300%',
                    zIndex: -10,
                  }}
                >
                  <h6>{title}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
