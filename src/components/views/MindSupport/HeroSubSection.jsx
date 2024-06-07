import React from 'react';
import selfSupport from './images/text_self_support.svg';
import peerSupport from './images/text_peer_support.svg';
import heart from './images/heart.svg';
import timeline from './images/timeline.png';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Sub Section
 */
export default function HeroSubSection() {
  return (
    <div direction="up" className="flex justify-between" style={{margin: '50px 0 0'}}>
      <div>
        <div
          className="flex flex-column align-items-center"
          style={{marginTop: 100}}
        >
          <h6 style={{fontWeight: 700}}>Background</h6>
          {/* <img src={column.img} sizes="contian" style={{height: 100, width: 130}}/> */}
          <div className="flex flex-column align-items-center" style={{marginTop: 20}}>
            <p className="text-box">
              The MS team hired Moustapha and me to design the self-support
              and peer-support features of the MS mobile app and provided us
              with a rough outline of those two primary user flows . Due to
              constraints on their grant funds, the MS team opted out of conducting
              additional real user research and directed us to proceed with the design
              using their existing research data. Their key objectives included
              exploring branding strategy, establishing a UI language, and laying
              the groundwork for future development efforts. In addition, the MS
              team requested a website redesign to align with the aesthetics of
              the new mobile app and a desktop version of the MS app which are
              not covered in this page.
            </p>
            <div className="flex" style={{marginTop: 70}}>
              <div
                style={{
                  padding: 30,
                  width: 210,
                  border: '2px solid black',
                }}
              >
                <img src={selfSupport} />
                <p style={{marginTop: 20}}>
                  This feature provides free resources and exercises that
                  could help users support themselves through a difficult time.
                </p>
              </div>
              <img src={heart} style={{margin: '0 70px'}} />
              <div
                style={{
                  padding: 30,
                  width: 210,
                  border: '2px solid black',
                }}
              >
                <img src={peerSupport} />
                <p style={{marginTop: 20}}>
                  This feature matches users with similar experiences and
                  provides a safe and confidential space for them to support and be supported.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-column align-items-center">
          <h6 style={{fontWeight: 700, marginTop: 210}}>Project Timeline</h6>
          <img src={timeline} style={{width: '100%', marginTop: 70}}/>
          <h6 style={{fontWeight: 700, marginTop: 210}}>My Role</h6>
          <p className="text-box" style={{marginTop: 30}}>
            Collaborating closely with Moustapha, I drove the UX design process by spearheading
            user analysis, guiding the MS team to define their key priorities, and facilitating
            discussions to uncover design opportunities. I offered design recommendations to ensure
            alignment with project goals. Additionally, I encouraged the MS team to establish
            their branding narrative and took the led on UI design for the app which later
            informed the website redesign. In late July, after five Zoom meetings and receiving
            scattered offline critiques from all team members, including their in-house developers,
            we handed off the design to the team for future development.
          </p>
        </div>
      </div>
    </div>
  );
}
