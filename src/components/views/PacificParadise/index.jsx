import React from 'react';
import ppHero from '../../../images/pp_hero.png';
import {heroCopy} from './lang';

/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function PacificParadise() {
  return (
    <div className="full-view flex flex-column align-items-center">
      <div className="container" style={{width: 744}} >
        <h1>Pacific Paradise.</h1>
        <h6 style={{marginTop: 10}}>UX/ brand strategy / visual design</h6>
        <h4>This is a mobile app for a family business </h4>
        <img src={ppHero} style={{marginTop: 40, maxWidth: 744}} />
        <div className="flex" style={{marginTop: 40}}>
          <h4 style={{width: '65%', marginRight: 40, fontSize: '1.5em'}}>
            Pacific Paradise is one of the most loved local restaurant in Albuquerque,
            NM for the past 2 decades. While the owners are proud of their steady dine-in
            customer flow, they hoped to improve on the take-out order process especially
            after the surge in demand due to the pandemic.
          </h4>
          <div style={{width: '35%'}}>
            <h2>2022</h2>
            <h6 style={{fontWeight: 700}}>Service</h6>
            <p>
              User research, paper + digital wireframing, low + high-fidelity prototypes,
              usability studies, oncept, interface design, interactions, graphic design &
              illustrations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
