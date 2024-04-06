import React from 'react';
import {highFidelity} from './lang';
import arrows from './images/arrows_right.png';
import hifiGroup from './images/hifi_group.png';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Section
 */
export default function HighFidelity() {
  return (
    <div className="flex align-items-center flex-column" style={{marginTop: 200}} id="hifi">
      <h2>Lo-Fi to Hi-Fi</h2>
      <p style={{maxWidth: 950, marginTop: 50}}>
        Taking the wireframes digital and start to think about how all elements layout
        on screens of different sizes. Combing through everything after setting the basic
        parameters and dimensions, need to efficiently use the real estate on each screen.
        avoid crowding and allow users to focus on one task at a time. certain elements
        needed to be relocated. I then used the lo-fi prototype in the usability test to
        examine the functionality of the app, prioritizing key actions through the user journey.
      </p>
      {highFidelity.map((row)=>{
        return (
          <div key={row.description} style={{width: '100%', marginTop: 200}}>
            <div className={'flex align-items-end'}>
              <div className="flex flex-column align-items-center">
                <img src={row.number}/>
                <img src={row.text}/>
              </div>
              <p style={{maxWidth: 450, marginLeft: 40}}>
                {row.description}
              </p>
            </div>
            <div className="flex justify-between" style={{marginTop: 50}}>
              <img src={row.lofi}/>
              <div
                className="flex flex-column align-items-cetner relative"
                style={{width: 700}}
              >
                <img
                  src={arrows}
                  style={{width: 520, position: 'absolute', left: 100, top: '45%'}}
                />
                {row.flow.map((copy, i)=>{
                  return (
                    <p
                      key={copy}
                      style={{width: 360, marginLeft: 110 * i, marginTop: i===2 ? 80 : 40}}
                    >
                      {copy}
                    </p>
                  );
                })}
              </div>
              <img src={row.hifi}/>
            </div>
          </div>
        );
      })}
      <h2 style={{marginTop: 200}} id="final">Final Design</h2>
      <img src={hifiGroup} style={{marginTop: 50}}/>
    </div>
  );
}
