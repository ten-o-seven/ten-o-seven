import * as React from 'react';
import Icon from '../components/common/Icon';
import styled from '@emotion/styled';

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
    width: 150px;
    height: 16px;
    text-align: center;
`;

const NotFoundPage = () => {
  const [balloons, setBalloons] = React.useState([]);
  const [showSpaceBar, setShowSpaceBar] = React.useState(false);
  const [backgroundColor, setBGColor] = React.useState(false);

  const onClick = ({pageX, pageY}) => {
    const element = {top: pageY, left: pageX};
    setBalloons((prev)=> {
      return [...prev, element];
    });
  };

  const spaceDown = ({keyCode}) =>{
    if (keyCode===32) {
      setBGColor('#ddd');
      document.querySelectorAll('.balloon').forEach((e)=>{
        e.style.animation = 'none';

        setTimeout(()=>{
          e.style.animation = 'fadeOutUpBig 5s';
          e.style.animationFillMode = 'forwards';
        }, 10);
        // e.offsetHeight;
      });
    }
  };
  const spaceUp = () =>{
    setBGColor('transparent');
  };

  React.useEffect(()=>{
    document.addEventListener('keydown', spaceDown);
    document.addEventListener('keyup', spaceUp);
    // context?.drawImage(img, x, y);

    return () => {
      document.removeEventListener('keydown', spaceDown);
      document.removeEventListener('keyup', spaceUp);
    };
  }, []);

  React.useEffect(()=>{
    if (balloons.length > 3) setShowSpaceBar(true);
  }, [balloons]);

  return (
    <div
      className="flex flex-column align-items-center justify-center full-view relative"
      onClick={onClick}
    >
      <Icon name={'Balloon'}/>
      <h2>Page Not Found</h2>
      <br />
      <p className="flex flex-column align-items-center">
        Congrats, seems like you found my secret stash. Here, have a balloon, or ten, or a hundred.
      </p>
      <div style={{height: 10}} />
      <div className="flex">
        <IconKeys className="fa-solid fa-mouse" />
        {showSpaceBar && <LetterKeys style={{backgroundColor}}>Space</LetterKeys>}
      </div>
      <>
        {balloons.map((styles, index)=> {
          return (
            <Icon
              id={`balloon-${index}`}
              name={'Balloon'}
              key={`${styles.top}, ${styles.left}`}
              className="animate__animated balloon"
              style={{
                'animation': 'fadeOutUpBig 5s',
                'animationFillMode': 'forwards',
                'position': 'absolute',
                ...styles,
              }}
            />
          );
        })}
      </>
      {/* <Icon name={'Balloon'} style={{position: 'absolute', top: 300, left: 300}} /> */}
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
