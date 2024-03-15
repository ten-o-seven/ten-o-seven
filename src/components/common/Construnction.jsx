/* eslint-disable react/no-children-prop */
import styled from '@emotion/styled';
import * as React from 'react';
// import GhostSVG from '../../icons/Ghost.svg';
import Icon from './Icon';

const IconKeys = styled.span`
    padding: ${({theme: {size}})=>size?.u2}px;
    margin: ${({theme: {size}})=>size?.u1}px;
    border: 1px solid ${({theme: {color}})=>color?.gray[400]};
    border-radius: 5px;
`;
const LetterKeys = styled.p`
    padding: ${({theme: {size}})=>size?.u2}px;
    margin: ${({theme: {size}})=>size?.u1}px;
    border: 1px solid ${({theme: {color}})=>color?.gray[400]};
    border-radius: 5px;
    width: 16px;
    height: 16px;
    text-align: center;
`;

const Construction = () => {
  const ghostRef = React.useRef();
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [pressedKey, setPressedKey] = React.useState(null);

  //   const canvasRef = React.useRef();
  //   const context = canvasRef.current?.getContext('2d');
  //   const img = new Image();
  //   img.src = GhostSVG;

  const clydeNavigation = ({keyCode}) =>{
    switch (keyCode) {
      case 87:
        setPressedKey('up');
        setY((prev) => prev-10);
        break;
      case 68:
        setPressedKey('right');
        setX((prev) => prev+10);
        break;
      case 83:
        setPressedKey('down');
        setY((prev) => prev+10);
        break;
      case 65:
        setPressedKey('left');
        setX((prev) => prev-10);
        break;
      case 38:
        setPressedKey('up');
        setY((prev) => prev-10);
        break;
      case 39:
        setPressedKey('right');
        setX((prev) => prev+10);
        break;
      case 40:
        setPressedKey('down');
        setY((prev) => prev+10);
        break;
      case 37:
        setPressedKey('left');
        setX((prev) => prev-10);
        break;
    }
  };

  const onKeyUp = () => setPressedKey(null);

  React.useEffect(()=>{
    document.addEventListener('keydown', clydeNavigation);
    document.addEventListener('keyup', onKeyUp);
    // context?.drawImage(img, x, y);

    return () => {
      document.removeEventListener('keydown', clydeNavigation);
      document.removeEventListener('keyup', clydeNavigation);
    };
  }, []);

  //   const render = () =>{
  //     requestAnimationFrame(render);
  //   };
  //   render();
  const bg = (elementKey) =>{
    return pressedKey === elementKey ? '#ddd' : 'white';
  };

  return (
    <div className="flex flex-column align-items-center justify-center full-view relative">
      {/* <canvas ref={canvasRef} height="500" width="500" /> */}
      <div
        ref={ghostRef}
        id="ghost"
        style={{
          'position': 'relative',
          'left': x,
          'top': y,
          'transition': 'all 0.2s ease-out',
        }}
      >
        <Icon name={'Ghost'}/>
      </div>
      <h2>Page Under Construction</h2>
      <br />
      <p className="flex flex-column align-items-center">
        Sorry, still contemplating on this page. Or Clyde may have ate the page.
      </p>
      <div className="flex" style={{paddingTop: 30}}>
        <div className="flex flex-column align-items-center">
          <LetterKeys children="W" style={{backgroundColor: bg('up')}} />
          <div className="flex">
            <LetterKeys children="A" style={{backgroundColor: bg('left')}}/>
            <LetterKeys children="S" style={{backgroundColor: bg('down')}}/>
            <LetterKeys children="D" style={{backgroundColor: bg('right')}}/>
          </div>
        </div>
        <div className="flex flex-column align-items-center">
          <IconKeys className="fa-solid fa-arrow-up" style={{backgroundColor: bg('up')}}/>
          <div>
            <IconKeys className="fa-solid fa-arrow-left" style={{backgroundColor: bg('left')}}/>
            <IconKeys className="fa-solid fa-arrow-down" style={{backgroundColor: bg('down')}}/>
            <IconKeys className="fa-solid fa-arrow-right" style={{backgroundColor: bg('right')}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;
