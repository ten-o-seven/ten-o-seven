import React from 'react';
import {Fade} from 'react-awesome-reveal';
import {hookCopy} from './lang';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Sub Section
 */
export default function HeroSubSection() {
  return (
    <div direction="up" className="flex justify-between" style={{margin: '100px 0 0'}}>
      <Fade
        cascade={true}
        fraction={1}
        direction="up"
        triggerOnce={true}
        style={{width: '100%'}}
      >
        {hookCopy.map((column)=>{
          return (
            <div key={`hook-${column.title}-column`}>
              <img src={column.img}/>
              <h6 style={{fontWeight: 700}}>{column.title}</h6>
              <ul>
                {column.content.map((listItem)=>{
                  return (
                    <li
                      key={`hook-${listItem}-column`}
                      style={{listStyle: 'initial', marginLeft: 20}}
                    >
                      {listItem}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </Fade>
    </div>
  );
}
