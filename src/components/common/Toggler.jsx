import React from 'react';
import {func, number} from 'prop-types';
import styled from '@emotion/styled';

const Thumbnail = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: solid 1px #ddd;
    background-color: rgb(167, 39, 39);
    z-index: 10;

    transition-duration: 0.3s;
    left: ${({position})=>`${position}px`};
`;

const Track = styled.div`
    height: 8px;
    width: 25px;
    border-radius: 50px;
    background-color: #ddd;
`;

const Container = styled.button`
    margin: ${({theme: {size}})=>`0 ${size?.u3}px`};
    right: 10vw
`;

/**
 * @param {func} onClick click event handler
 * @param {int} position distance from the left
 * @return {Node} a toggler
 */
export default function Toggler({onClick, position}) {
  return (
    <Container
      onClick={onClick}
      className="flex align-self-end align-items-center justify-between relative"
    >
      <p>UIUX</p>
      <div className="flex align-items-center justify-center relative" style={{margin: 20}}>
        <Thumbnail className="absolute" position={position}/>
        <Track/>
      </div>
      <p>Creative Work</p>
    </Container>
  );
}

Toggler.propTypes = {
  onClick: func.isRequired,
  position: number.isRequired,
};
