import styled from '@emotion/styled';
import React from 'react';
import note from './images/note_3.png';
import oneA from './images/iteration_1a.png';
import oneB from './images/iteration_1b.png';
import oneC from './images/iteration_1c.png';
import twoA from './images/iteration_2a.png';
import twoB from './images/iteration_2b.png';
import twoC from './images/iteration_2c.png';
import threeA from './images/iteration_3a.png';
import threeB from './images/iteration_3b.png';
import threeC from './images/iteration_3c.png';
import numberOne from '../../../images/number_1.svg';
import numberTwo from '../../../images/number_2.svg';
import numberThree from '../../../images/number_3.svg';
import primaryText from './images/text_primary.svg';
import trainingText from './images/text_training_screens.svg';
import surveyText from './images/text_survey_screens.svg';
import textText from './images/text_text.svg';
import textSwatch1 from './images/text_swatch_1.png';
import textSwatch2 from './images/text_swatch_2.png';
import textSwatch3 from './images/text_swatch_3.png';
import textSwatch4 from './images/text_swatch_4.png';
import swatch1 from './images/swatch_1.png';
import swatch2 from './images/swatch_2.png';
import swatch3 from './images/swatch_3.png';
import swatch4 from './images/swatch_4.png';
import swatch5 from './images/swatch_5.png';
import swatch6 from './images/swatch_6.png';
import swatch7 from './images/swatch_7.png';
import swatch8 from './images/swatch_8.png';
import swatch9 from './images/swatch_9.png';
import swatch10 from './images/swatch_10.png';

const Pill = styled.p`
  padding: 10px;
  margin: 10px 20px;
  border: 1px solid black;
  border-radius: 50px;
`;

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Sub Section
 */
export default function Design() {
  return (
    <div style={{marginTop: 210}}>
      <div>
        <h4>0.4 UI Design</h4>
        <p style={{marginTop: 30}}>The MS team didn&lsquo;t have specific visual preferences
          for the app besides some vague ideas.Their only request was to integrate existing
          illustrations from an artist they&lsquo;ve collaborated with on previous projects.
          After receiving initial feedback on the inspiration images we shared, we developed
          three design schemes aligned with the general direction they provided.
        </p>
      </div>
      <div className="flex flex-column align-items-center" style={{marginTop: 70}}>
        <h6 style={{fontWeight: 600}}>What they asked</h6>
        <div className="flex">
          <Pill style={{backgroundColor: '#C9BAC3'}}>make it look good</Pill>
          <Pill style={{backgroundColor: '#FFEAAE'}}>let&lsquo;s use warm colors</Pill>
          <Pill style={{backgroundColor: '#C4DAD5'}}>friendly but not childish</Pill>
        </div>
        <div className="flex">
          <Pill style={{backgroundColor: '#F0EDE9'}}>unique</Pill>
          <Pill style={{backgroundColor: '#C4DAD5'}}>it should appeal to all</Pill>
          <Pill style={{backgroundColor: '#FFEAAE'}}>welcoming</Pill>
        </div>
      </div>


      <div className="flex flex-column align-items-center" style={{marginTop: 70}}>
        <h6 style={{fontWeight: 600}}>What we presented</h6>
        <div className="flex justify-between" style={{width: '100%', marginTop: 30}}>
          <div className="relative" style={{width: '20%'}}>
            <img src={numberOne} />
            <p>
              We thought the vibrant colors and diverse hues within the illustrations perfectly
              captured the varied experiences of MS users. This scheme primarily aims to convey
              professionalism, sleekness, and credibility in its visual language.
            </p>
            <p style={{marginTop: 100, padding: 30}}>
              <strong>Client Feedback:</strong>
              <br/><br/>
              “This is a little too serious and not friendly enough.
              We prefer round edges over sharp edges.”
            </p>
            <img src={note} style={{position: 'absolute', top: 250, width: '100%', zIndex: -100}}/>
          </div>
          <img src={oneA} style={{width: '25%'}}/>
          <img src={oneB} style={{width: '25%'}}/>
          <img src={oneC} style={{width: '25%'}}/>
        </div>
        <div className="flex justify-between" style={{width: '100%', marginTop: 140}}>
          <div className="relative" style={{width: '20%'}}>
            <img src={numberTwo} />
            <p>This scheme introduces a monochromatic color palette aimed to establish a strong
              branding. The simple and clean interface without any excessive articulation appeal
              to users of all ages.
            </p>
            <p style={{marginTop: 120, padding: 30}}>
              <strong>Client Feedback:</strong>
              <br/><br/>
              “The app should be colorful and cheerful considering that most users are going
              through something unpleasant.”
            </p>
            <img src={note} style={{position: 'absolute', top: 250, width: '100%', zIndex: -100}}/>
          </div>
          <img src={twoA} style={{width: '25%'}}/>
          <img src={twoB} style={{width: '25%'}}/>
          <img src={twoC} style={{width: '25%'}}/>
        </div>
        <div className="flex justify-between" style={{width: '100%', marginTop: 140}}>
          <div className="relative" style={{width: '20%'}}>
            <img src={numberThree} />
            <p>This scheme emphasizes a friendly visual style through the use of simple shapes
              and solid colors. Two vibrant accent colors help establishing a strong brand
              identity, while the pastel colors and the generous white space give the app a
              gentle and inviting presence.
            </p>
            <p style={{marginTop: 80, padding: 30}}>
              <strong>Client Feedback:</strong>
              <br/><br/>
              “This option lacks graphics, and we think it’s a bit childish.”
            </p>
            <img src={note} style={{position: 'absolute', top: 250, width: '100%', zIndex: -100}}/>
          </div>
          <img src={threeA} style={{width: '25%'}}/>
          <img src={threeB} style={{width: '25%'}}/>
          <img src={threeC} style={{width: '25%'}}/>
        </div>
      </div>

      <div className="flex flex-column align-items-center" style={{marginTop: 280}}>
        <p>
        After reviewing the 3 schemes we presented, the MS team provide us with their choice
        of font and colors for the high fidelity prototypes we created next.
        </p>

        <div className="flex justify-around" style={{width: '100%', marginTop: 70}}>
          <div className="flex">
            <div className="flex flex-column">
              <div />
              <img src={primaryText} style={{marginTop: 120, width: 74}}/>
              <img src={trainingText} style={{marginTop: 160, width: 88}}/>
              <img src={surveyText} style={{marginTop: 110, width: 77}}/>
              <img src={textText} style={{marginTop: 110, width: 55}}/>
            </div>
            <div>
              <div>
                <h2 style={{fontSize: 36, marginLeft: 10}}>Colors</h2>
                <img src={swatch1} style={{width: 120, marginTop: 70, marginLeft: 10}}/>
                <img src={swatch2} style={{width: 120, marginLeft: 10}}/>
                <img src={swatch3} style={{width: 120, marginLeft: 10}}/>
              </div>
              <div>
                <img src={swatch4} style={{width: 120, marginTop: 40, marginLeft: 10}}/>
                <img src={swatch5} style={{width: 120, marginLeft: 10}}/>
                <img src={swatch6} style={{width: 120, marginLeft: 10}}/>
              </div>
              <div>
                <img src={swatch7} style={{width: 120, marginTop: 40, marginLeft: 10}}/>
                <img src={swatch8} style={{width: 120, marginLeft: 10}}/>
              </div>
              <div>
                <img src={swatch9} style={{width: 120, marginTop: 40, marginLeft: 10}}/>
                <img src={swatch10} style={{width: 120, marginLeft: 10}}/>
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <div>
                <h2 style={{fontSize: 36, marginLeft: 10}}>Typography</h2>
                <img src={textSwatch1} style={{width: 120, marginTop: 70, marginLeft: 10}}/>
                <img src={textSwatch2} style={{width: 120, marginLeft: 10}}/>
              </div>
              <div>
                <img src={textSwatch3} style={{width: 120, marginTop: 40, marginLeft: 10}}/>
                <img src={textSwatch4} style={{width: 120, marginLeft: 10}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
