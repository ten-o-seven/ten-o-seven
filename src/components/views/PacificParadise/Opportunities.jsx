import React from 'react';
import {opportunitiesCopy} from './lang';
import frame from '../../../images/rounded_card.svg';
import {Fade} from 'react-awesome-reveal';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Pain Points and Opportunities Section
 */
export default function Opportunities() {
  return (
    <div style={{margin: '250px 0 0'}}>
      <h4 id="define">02. Define</h4>
      <p style={{marginTop: 30}}>
        After analyzing the research data, I’ve identified 4 major issues that
        customers are facing when placing take-out orders over the phone or online.
      </p>
      <div
        className="flex align-items-center"
        style={{height: 560, marginTop: 20, transform: 'translateX(-50px)'}}
      >
        <div className="flex" style={{marginLeft: 100}}>
          <Fade
            cascade={true}
            triggerOnce={true}
            fraction={1}
            direction='up'
            style={{width: '100%'}}
          >
            {opportunitiesCopy.map((column, index)=>{
              return (
                <div
                  key={`opportunities-${column.title}-column`}
                  className="flex flex-column align-items-center"
                >
                  <img src={column.src} />
                  <h6 style={{fontWeight: 700, marginTop: 20}}>{column.title}</h6>
                  <p
                    style={{
                      marginTop: 25,
                      height: 150,
                    }} className="text-center">{column.content}</p>
                  <p style={{fontSize: 14, width: '60%', height: 90}}>{column.question}</p>
                  <img style={{position: 'absolute', bottom: 0}} src={frame} />
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
    </div>
  );
}
