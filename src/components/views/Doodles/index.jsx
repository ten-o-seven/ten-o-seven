import React from 'react';

const bday = require.context('./images/bday', true);
const bdayImages = bday.keys().map((img)=>bday(img).default);
const dad = require.context('./images/dad', true);
const dadImages = dad.keys().map((img)=>dad(img).default);
const fatboi = require.context('./images/fatboi', true);
const fatboiImages = fatboi.keys().map((img)=>fatboi(img).default);

/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function Doodles() {
  return (
    <div
      style={{paddingTop: 250, paddingBottom: 250, backgroundColor: 'white'}}
      className="flex flex-column align-items-center full-vw"
    >
      <div className="container">
        <h1>doodles.</h1>
      </div>
      <h6 style={{marginTop: 220}} ><strong>I love my dad</strong></h6>
      <div className="flex" style={{marginTop: 60}}>
        {dadImages.map((path)=>(
          <img
            style={{height: 430}}
            key={path}
            src={path}
          />
        ))}
      </div>
      <h6 style={{marginTop: 600}}><strong>My feelings in Colors</strong></h6>
      <div style={{marginTop: 60, width: '100%'}} className="flex justify-between">
        {bdayImages.map((path)=>(
          <img
            style={{maxWidth: 400}}
            key={path}
            src={path}
          />
        ))}
      </div>
      <h6 style={{marginTop: 600}}><strong>Fatboi</strong></h6>
      <div style={{marginTop: 60}}>
        {fatboiImages.map((path)=>(
          <img
            style={{height: 400}}
            key={path}
            src={path}
          />
        ))}
      </div>
    </div>
  );
}
