import styled from '@emotion/styled';
import React from 'react';
import {userResearchCopy} from './lang';
import bubble11 from './images/bubble_1_1.png';
import bubble12 from './images/bubble_1_2.png';
import bubble13 from './images/bubble_1_3.png';
import figure1 from './images/figure_1.png';
import bubble21 from './images/bubble_2_1.png';
import bubble22 from './images/bubble_2_2.png';
import bubble23 from './images/bubble_2_3.png';
import bubble24 from './images/bubble_2_4.png';
import figure2 from './images/figure_2.png';
import {Fade} from 'react-awesome-reveal';

const Bubble = styled.img`
  position: absolute;
  z-index: -100;
`;

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise User Research Section
 */
export default function UserResearch() {
  return (
    <div className="" style={{margin: '200px 0 0'}}>
      <Fade delay={500} fraction={1} direction="up" triggerOnce={true}>
        <h4 style={{fontWeight: 700}}>{userResearchCopy.title}</h4>
        <p style={{marginTop: 20, maxWidth: 800}}>{userResearchCopy.content}</p>
      </Fade>
      <div className="flex justify-between" style={{marginTop: 150}}>
        <h2 style={{width: '40%'}}>The interviews with lovely PP customers</h2>
        <div style={{width: '50%'}}>
          <Fade delay={500} triggerOnce={true} cascade={true} fraction={1} >
            <div style={{width: 180, top: -100, left: -50, position: 'relative'}}>
              <Bubble src={bubble11} />
              <p style={{top: 45, left: 40, position: 'absolute'}}>
              What did you <b>like or dislike</b> about
              your last experience with your takeout from pacific paradise
              </p>
            </div>
            <div style={{width: 230, left: 270, top: -120, position: 'relative'}}>
              <Bubble src={bubble12} />
              <p style={{top: 30, left: 45, position: 'absolute'}}>
              Do you usually order <b>online or over the phone</b>
              when you get takeout from pacific paradise and why?
              </p>
            </div>
            <div style={{width: 180, top: 30, left: 320, position: 'relative'}}>
              <Bubble src={bubble13} />
              <p style={{top: 30, left: 55, position: 'absolute'}}>
                <b>What would motivate you</b> to use the pacific paradise app?
              </p>
            </div>
          </Fade>
          <img src={figure1} style={{left: 170, position: 'relative'}} />
        </div>
      </div>
      <div style={{top: 150, position: 'relative'}}>
        <div style={{width: '50%'}}>
          <Fade delay={1000} triggerOnce={true} cascade={true} fraction={1} >
            <div style={{width: 210, position: 'relative'}}>
              <Bubble src={bubble21} />
              <p style={{top: 55, left: 30, position: 'absolute'}}>
              “I usually call in because I have dietary restrictions,
              and I want to make sure they can fulfill my requests,
              especially when I am trying a new place.”
              </p>
            </div>
            <div style={{width: 230, left: 50, top: -160, position: 'relative'}}>
              <Bubble src={bubble22} />
              <p style={{top: 30, left: 40, position: 'absolute'}}>
              “I was put on hold for a very long time when you were busy last Friday.
              I think you forgot that I was on the phone.”
              </p>
            </div>
            <div style={{width: 180, top: -220, left: 350, position: 'relative'}}>
              <Bubble src={bubble23} />
              <p style={{top: 60, left: 40, position: 'absolute'}}>
              “I’d use it if it saves me time. I want to order ahead so I can
              keep working and pick it up on the way home. ”
              </p>
            </div>
            <div style={{width: 220, top: 30, left: 400, position: 'relative'}}>
              <Bubble src={bubble24} />
              <p style={{top: 40, left: 70, position: 'absolute'}}>
              “I love the baked lobster roll, but it’s been out since May.
              I would like to be notified when it’s available again.”
              </p>
            </div>
          </Fade>
          <img src={figure2} style={{left: 260, position: 'relative'}} />
        </div>
      </div>
    </div>
  );
}
