import React from 'react';
import {func, object} from 'prop-types';
import styled from '@emotion/styled';
import FatBoiToggle from '../../../images/FatBoiToggle.jsx';
import BubbleWide from '../../../images/BubbleWide.jsx';

const FatBoiWrapper = styled.button`
    width: 70px;
    height:70px;
    position: absolute;
    bottom: -10px;
    left: 20%;
    z-index:10000;
    transition: all 0.2s ease-out;
    &:hover{
        bottom: 5px;
    }
`;

const BubbleWrapper = styled.div`
    position: absolute;
    bottom: 50px;
    left: calc(20% + 90px);
`;

/**
 * @param {func} onClick click event handler
 * @param {int} position distance from the left
 * @return {Node} the project collection view
 */
export default function FatBoi({onClick, caption}) {
  const onMouseEnter = () => {
    const brow = document.querySelector('#fat-boi-toggler-brow');
    const sly = document.querySelector('#sly');
    const og = document.querySelector('#og');
    sly.classList.remove('hide');
    og.classList.add('hide');
    brow.classList.add('animate__infinite');
  };
  const onMouseLeave = () => {
    const brow = document.querySelector('#fat-boi-toggler-brow');
    const sly = document.querySelector('#sly');
    const og = document.querySelector('#og');
    og.classList.remove('hide');
    sly.classList.add('hide');
    brow.classList.remove('animate__infinite');
  };
  return (
    <div>
      {caption &&
      <BubbleWrapper>
        <BubbleWide />
        <div style={{position: 'absolute', left: 40, top: 20}} className="flex">
          <p><strong>{caption.title}</strong></p>
          <p style={{marginLeft: 10}}>-</p>
          <p style={{marginLeft: 10}}>{caption.subtitle}</p>
        </div>
      </BubbleWrapper>
      }
      <FatBoiWrapper
        id="fat-boi"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <FatBoiToggle />
      </FatBoiWrapper>
    </div>
  );
}

FatBoi.propTypes = {
  onClick: func.isRequired,
  caption: object.isRequired,
};
