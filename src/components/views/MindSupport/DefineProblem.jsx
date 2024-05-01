import React from 'react';
import numberOne from '../../../images/number_1.svg';
import numberTwo from '../../../images/number_2.svg';
import numberThree from '../../../images/number_3.svg';
import frame from '../../../images/rounded_card.svg';
import noteOne from './images/written_note_1.png';
import noteTwo from './images/written_note_2.png';
import noteThree from './images/written_note_3.png';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Section
 */
export default function DefineProblem() {
  return (
    <div style={{marginTop: 210}}>
      <h2 id="pp">02. Define The Problem</h2>
      <p>
        Our top priority was crafting an intuitive app that users genuinely enjoy,
        while gradually fostering the growth of the MS community. Given the early
        stage of brand development, our main focuses for the app were establishing
        user trust and eliminating any potential obstacles during user interactions
        with the self-support and peer-support features.
      </p>
      <div className="flex justify-evenly">
        <div style={{width: '25%', marginTop: 140}} className="flex flex-column align-items-center">
          <div style={{width: '75%'}}>
            <img src={numberOne}/>
            <h6 style={{fontWeight: 700}}>User Trust</h6>
            <p style={{marginTop: 20}}>
            It’s important to users that they can trust the content and the support
            buddy once matched.
            </p>
            <div className="relative" style={{height: 100}}>
              <p className="relative" style={{marginTop: 40}}>
              How can the MS app build user trust and help create a strong community?
              </p>
              <img
                style={{position: 'absolute', bottom: 0, left: -20, width: '110%'}}
                src={frame}
              />
            </div>
          </div>
          <img src={noteOne} style={{width: '100%', marginTop: 30}} />
        </div>
        <div style={{width: '25%', marginTop: 140}} className="flex flex-column align-items-center">
          <div style={{width: '75%'}}>
            <img src={numberTwo}/>
            <h6 style={{fontWeight: 700}}>Resistance</h6>
            <p style={{marginTop: 20}}>
              The idea of getting a mental health support buddy is great,
              but a survey and training are required.
            </p>
            <div className="relative" style={{height: 100}}>
              <p className="relative" style={{marginTop: 40}}>
                Where are the drop off points, and how can the survey and
                training modules be structured to avoid them?
              </p>
              <img
                style={{position: 'absolute', bottom: 0, left: -20, width: '110%'}}
                src={frame}
              />
            </div>
          </div>
          <img src={noteTwo} style={{width: '100%', marginTop: 30}} />
        </div>
        <div style={{width: '25%', marginTop: 140}} className="flex flex-column align-items-center">
          <div style={{width: '75%'}}>
            <img src={numberThree}/>
            <h6 style={{fontWeight: 700}}>Community</h6>
            <p style={{marginTop: 20}}>
              The peer support feature relies on a safe, stable,
              and healthy MS community which will take time to grow.
            </p>
            <div className="relative" style={{height: 100}}>
              <p className="relative" style={{marginTop: 40}}>
                How to build and maintain the MS community?
              </p>
              <img
                style={{position: 'absolute', bottom: 0, left: -20, width: '110%'}}
                src={frame}
              />
            </div>
          </div>
          <img src={noteThree} style={{width: '100%', marginTop: 30}} />
        </div>
      </div>
    </div>
  );
}
