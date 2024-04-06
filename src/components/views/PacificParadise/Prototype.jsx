import React from 'react';
import BoldedText from '../../common/BoldedText';
import theme from '../../theme';
import lofiGroupOne from './images/lofi_group_1.png';
import lofiGroupTwo from './images/lofi_group_2.png';
import bubble1 from './images/bubble_2_2.png';
import bubble2 from './images/bubble_1_3.png';
import {lofi, usabilityTesting} from './lang';

const bubbles = [bubble1, bubble2];


/**
 * @param {Node} na
 * @return {Node} Pacific Paradise User Research Section
 */
export default function Prototype() {
  return (
    <div style={{margin: '200px 0 0'}} id="lofi">
      <div className="flex align-items-center flex-column">
        <h2>Key Lo-Fi Frames</h2>
        <span style={{maxWidth: 950, marginTop: 50}}>
          <p style={{display: 'inline'}}>
            Taking the wireframes digital and start to think about how all elements
            layout on screens of different sizes. Combing through everything after
            setting the basic parameters and dimensions, need to efficiently use the
            real estate on each screen. avoid crowding and allow users to focus on one
            task at a time. certain elements needed to be relocated.
          </p>
          <p style={{color: theme.color.brand.red, display: 'inline'}}>
            {' '}Talk about UX and explain these are sample screen to show how I approached.
          </p>
        </span>
        {lofi.map((row, index)=>{
          let right = null;
          if (index === 1) right = {right: 0};
          return (
            <div
              key={row.description}
              style={{
                width: '100%',
                marginTop: index === 2 ? 20 : 100,
                height: 500,
                position: 'relative',
              }}
            >
              <div style={{...right, position: 'absolute'}} className="flex flex-column">
                <div className={`flex align-items-end${index===1 ? ' align-self-end':''}`}>
                  <div className="flex flex-column align-items-center">
                    <img src={row.number}/>
                    <img src={row.text}/>
                  </div>
                  <p style={{maxWidth: 375, marginLeft: 40}}>
                    {row.description}
                  </p>
                </div>
                <div style={{marginTop: 30}}>
                  <div
                    style={{
                      position: 'relative',
                      width: 600,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <img src={row.wireframe} />
                    {row.callout.map(({
                      emphasis, copy, style,
                    })=>{
                      return (
                        <BoldedText
                          key='copy'
                          bolded={emphasis}
                          message={copy}
                          style={{
                            width: 100,
                            position: 'absolute',
                            ...style,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{height: 400}}/>
        <h2 id="moreLofi">More Wireframes</h2>
        <img src={lofiGroupOne} style={{marginTop: 100}}/>
        <img src={lofiGroupTwo} style={{marginTop: 100}}/>
        <h2 style={{marginTop: 200}} id="usability">Usability Testing</h2>
        <p style={{maxWidth: 950, marginTop: 50}}>
          I conducted a moderated usability study at the restaurant to test the performance of
          the low-fidelity prototype. The customers answered general questions and completed
          tasks such as placing take-out orders, accessing receipts, and reviewing account
          information. Overall, the customers responded positively to having a Pacific Paradise
          app and being able to manage their orders more efficiently.  The study also identified
          the following issues which are addressed in the high-fidelity stage.
        </p>
        <div className="flex justify-between" style={{width: 950, marginTop: 150}}>
          {usabilityTesting.map((result, index)=>{
            return (
              <div key={result.description} style={{width: '31%', position: 'relative'}}>
                {result.bubble &&
                  <div style={{position: 'absolute', ...result.bubbleStyle}}>
                    <img src={bubbles[index]}/>
                    <p style={{position: 'absolute', ...result.copyStyle}}>{result.bubble}</p>
                  </div>
                }
                <div>
                  <img src={result.src}/>
                  <h3>{result.percentage}</h3>
                </div>
                <h6>{result.description}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
