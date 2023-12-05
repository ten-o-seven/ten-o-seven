import React from 'react';
import {opportunitiesCopy} from './lang';
import frame from './images/frame.png';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Pain Points and Opportunities Section
 */
export default function Opportunities() {
  return (
    <div style={{margin: '250px 0 0'}}>
      <h4 style={{fontWeight: 700}}>02. Process Discoveries</h4>
      <h4>User pain points and opportunities</h4>
      <div
        className="flex align-items-center"
        style={{height: 560, marginTop: 20, transform: 'translateX(-50px)'}}
      >
        <img
          src={frame}
          style={{
            position: 'absolute',
            zIndex: -100,
          }}
        />
        <div className="flex" style={{marginLeft: 100}}>
          {opportunitiesCopy.map((column, index)=>{
            return (
              <div
                key={`opportunities-${column.title}-column`}
                style={{width: '25%', marginRight: 30}}
              >
                <h2
                  style={{
                    color: '#AD3537',
                    fontFamily: 'Futura PT',
                    fontWeight: 400,
                    lineHeight: '1em',
                  }}
                >
                  {index + 1}
                </h2>
                <div style={{
                  width: 50,
                  height: 10,
                  backgroundColor: '#AD3537',
                  margin: '0 0 10px',
                }}/>
                <h6 style={{fontWeight: 700}}>{column.title}</h6>
                <p style={{marginTop: 25}}>{column.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
