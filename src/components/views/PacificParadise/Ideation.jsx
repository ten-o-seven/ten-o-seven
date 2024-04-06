import React from 'react';
import brainstormOne from './images/brainstorm_1.png';
import brainstormTwo from './images/brainstorm_2.png';
import paper1 from './images/paper_1.png';
import paper2 from './images/paper_2.png';
import paper3 from './images/paper_3.png';
import paper4 from './images/paper_4.png';
import paper5 from './images/paper_5.png';
import paper6 from './images/paper_6.png';

const rowOne = [paper1, paper2, paper3];
const rowTwo = [paper4, paper5, paper6];

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise User Research Section
 */
export default function Ideation() {
  return (
    <div style={{margin: '200px 0 0'}} id="ideation">
      <h4 id="brainstorm">0.3 Ideation</h4>
      <div className="flex flex-column align-items-center">
        <h2 style={{marginTop: 100, marginBottom: 30}}>Brainstorm</h2>
        <p>Based on the user flow, I sketched out a series of wireframes with basic elements.</p>
        <img style={{marginTop: 100}} src={brainstormOne}/>
        <h2 style={{marginTop: 200, marginBottom: 30}} id="flow">User Flow</h2>
        <p>Based on the user flow, I sketched out a series of wireframes with basic elements. </p>
        <img src={brainstormTwo}/>
        <h2 style={{marginTop: 150, marginBottom: 30}} id="paper">Paper Wireframes</h2>
        <p>Based on the user flow, I sketched out a series of wireframes with basic elements. </p>
        <div style={{marginTop: 100}}>
          {rowOne.map((src)=>{
            return <img src={src} key={src} style={{margin: '0 50px 0'}} />;
          })}
        </div>
        <div style={{marginTop: 50}}>
          {rowTwo.map((src)=>{
            return <img src={src} key={src} style={{margin: '0 50px 0'}} />;
          })}
        </div>
      </div>
    </div>
  );
}
