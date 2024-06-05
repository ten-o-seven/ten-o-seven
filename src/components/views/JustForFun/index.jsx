import React, {useState} from 'react';
import money from './images/money.jpg';
import cards0 from './images/cards_0.jpg';
import cards1 from './images/cards_1.jpg';
import cards2 from './images/cards_2.jpg';
import leftCard from './images/left_card.jpg';
import left from '../../../images/caret_left.svg';
import right from '../../../images/caret_right.svg';
import './styles.css';

/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function JustForFun() {
  const cardMap = {
    0: cards0,
    1: cards1,
    2: cards2,
  };
  const [counter, setCounter] = useState(0);
  let workingCounter = counter;

  return (
    <div
      style={{paddingTop: 250, paddingBottom: 250}}
      className="flex flex-column align-items-center full-vw"
    >
      <div className="container">
        <h1>just for fun.</h1>
      </div>
      <h6 style={{marginTop: 220}} ><strong>Vip Card for PP</strong></h6>
      <div className="flex flex-wrap justify-center">
        <div
          style={{width: 635, marginTop: 60}}
          className="flex flex-column align-items-center"
        >
          <img
            src={leftCard}
            style={{
              width: 437,
              height: 262,
            }}
          />
        </div>
        <div className="flex align-items-center" style={{marginTop: 60}}>
          <button onClick={() => setCounter(workingCounter -= 1)}>
            <img
              src={left} style={{padding: 40, height: 30}}
            />
          </button>
          <img
            src={cardMap[counter % 3]}
            style={{
              width: 435,
              height: 260,
              border: 'solid 1px black',
            }}
          />
          <button onClick={() => setCounter(workingCounter += 1)}>
            <img
              src={right} style={{padding: 40, height: 30}}
            />
          </button>
        </div>
      </div>

      <h6 style={{marginTop: 600}} ><strong>i PUT ADITI ON A TEN THOUSAND DOLLAR BILL</strong></h6>
      <div style={{marginTop: 60}}>
        <img
          className="money"
          src={money}
        />
      </div>
    </div>
  );
}
