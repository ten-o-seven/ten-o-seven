import React from 'react';
import WireframeCarousel from '../../common/WireframeCarousel';

const hifiOne = require.context('./images/hifi_g1', true);
const hifiOneList = hifiOne.keys().map((image) => hifiOne(image));
const hifiTwo = require.context('./images/hifi_g2', true);
const hifiTwoList = hifiTwo.keys().map((image) => hifiTwo(image));
const hifiThree = require.context('./images/hifi_g3', true);
const hifiThreeList = hifiThree.keys().map((image) => hifiThree(image));
const hifiFour = require.context('./images/hifi_g4', true);
const hifiFourList = hifiFour.keys().map((image) => hifiFour(image));

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Sub Section
 */
export default function Hifi() {
  return (
    <div style={{marginTop: 210}}>
      <div>
        <h4>0.5 Final Design</h4>
        <p style={{marginTop: 30}}>
          Based on the feedback received from the MS team, we quickly produced high-fidelity
          screens and applied the design strategies uncovered during the user analysis phase.
          With the final written content for the survey questions and training provided by the
          MS team, we made minor UI revisions to accommodate heavy text in certain sections.
          I&lsquo;ve received permission to showcase the final design; below are selected screens
          showcasing the app&lsquo;s various features.
        </p>
        <br />
      </div>
      <div className="flex flex-column align-items-center" style={{marginTop: 140}}>
        <h2 style={{fontSize: 36, fontWeight: 400}}>dashboard, self support</h2>
        <WireframeCarousel
          verticalPadding={20}
          imageWidth={250}
          imageSpacing={-20}
          imageList={hifiOneList}
        />
      </div>
      <div className="flex flex-column align-items-center" style={{marginTop: 140}}>
        <h2 style={{fontSize: 36, fontWeight: 400}}>survey questions</h2>
        <WireframeCarousel
          verticalPadding={20}
          imageWidth={250}
          imageSpacing={-20}
          imageList={hifiTwoList}
        />
      </div>
      <div className="flex flex-column align-items-center" style={{marginTop: 140}}>
        <h2 style={{fontSize: 36, fontWeight: 400}}>training modules</h2>
        <WireframeCarousel
          verticalPadding={20}
          imageWidth={250}
          imageSpacing={-20}
          imageList={hifiThreeList}
        />
      </div>
      <div className="flex flex-column align-items-center" style={{marginTop: 140}}>
        <h2 style={{fontSize: 36, fontWeight: 400}}>training modules</h2>
        <WireframeCarousel
          verticalPadding={20}
          imageWidth={250}
          imageSpacing={-20}
          imageList={hifiFourList}
        />
      </div>
    </div>
  );
}
