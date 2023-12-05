import React from 'react';
import {hookCopy} from './lang';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Sub Section
 */
export default function HeroSubSection() {
  return (
    <div className="flex justify-between" style={{margin: '100px 0 0'}}>
      {hookCopy.map((column)=>{
        return (
          <div
            key={`hook-${column.title}-column`}
            style={{width: '30%'}}
          >
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
    </div>
  );
}
