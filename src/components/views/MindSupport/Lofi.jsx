import React from 'react';
import WireframeCarousel from '../../common/WireframeCarousel';

const lofiOne = require.context('./images/lofi_g1', true);
const lofiOneList = lofiOne.keys().map((image) => lofiOne(image));
const lofiTwo = require.context('./images/lofi_g2', true);
const lofiTwoList = lofiTwo.keys().map((image) => lofiTwo(image));

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Sub Section
 */
export default function Lofi() {
  return (
    <div style={{marginTop: 210}}>
      <div>
        <h4>0.3 Lo-Fi Wireframing</h4>
        <p style={{marginTop: 30}}>
          Based on our user analysis findings, we quickly created low-fidelity wireframes
          to illustrate how users navigate across key app screens. From these wireframes,
          the MS team recognized the advantage of delaying the profile creation process
          until later in the app journey, rather than prompting it immediately upon opening the app.
        </p>
        <br />
        <p>
          Additionally, the team tasked us with designing screens for different survey questions
          and generating iterations to accommodate various user responses. This spurred discussions
          on crucial flow details, such as:
        </p>
        <ul style={{listStyleType: 'circle', listStylePosition: 'inside'}}>
          <li>
            How to ensure users grasp the meaning of practices and challenges given the limited
            information presented on the dashboard?
          </li>
          <li>
            How do users change their peer support role later without disrupting the overall
            user experience?
          </li>
        </ul>
      </div>
      <div className="flex flex-column align-items-center" style={{marginTop: 140}}>
        <h2 style={{fontSize: 36, fontWeight: 400}}>dashboard, self support & chat</h2>
        <WireframeCarousel imageList={lofiOneList} />
      </div>
      <div className="flex flex-column align-items-center" style={{marginTop: 140}}>
        <h2 style={{fontSize: 36, fontWeight: 400}}>peer support & survey questions</h2>
        <WireframeCarousel imageList={lofiTwoList} />
      </div>
    </div>
  );
}
