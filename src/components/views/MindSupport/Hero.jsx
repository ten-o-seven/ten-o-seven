import React from 'react';
import msHero from './images/hero.png';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Section
 */
export default function Hero() {
  return (
    <div>
      <h1 id="pp">Mind Support</h1>
      {/* <h6 style={{marginTop: 10}}>Mobile App Case Study for a Local Chinese Restaurant.</h6> */}
      <div className="flex" style={{marginTop: 60, justifyContent: 'space-between'}}>
        <h3 style={{width: '67%'}}>
        MS is a non-profit foundation dedicated to offering free mental health support to all.
        After winning a grant for their vision, the team began to develop an app that empowers
        individuals to self-help and connect with others who sahre similar experiences.
        </h3>
        <div style={{width: '20%', alignSelf: 'flex-start'}}>
          <h6 style={{fontWeight: 600}}>Service</h6>
          <p>
            UX/UI Design <br/>
            User Analysis <br/>
            Branding <br/>
          </p>
          <h6 style={{marginTop: 30, fontWeight: 600}}>Team</h6>
          <p>
            Angela & Moustapha <br/>
            MS - Noah, Yasmin, <br/>
            Matt, Ruben
          </p>
        </div>
      </div>
      <img
        src={msHero}
        className="full-vw"
        style={{
          position: 'absolute',
          left: 0,
        }}
      />
      <img
        src={msHero}
        className="full-vw"
        style={{opacity: 0}}
      />
      <div className="flex">
      </div>
    </div>
  );
}
