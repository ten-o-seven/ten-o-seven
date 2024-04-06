import React from 'react';
import {Fade} from 'react-awesome-reveal';
import {hookCopy} from './lang';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Sub Section
 */
export default function HeroSubSection() {
  return (
    <div direction="up" className="flex justify-between" style={{margin: '50px 0 0'}}>
      <div className="flex flex-column align-items-center">
        {hookCopy.map((column)=>{
          return (
            <Fade
              key={`hook-${column.title}-column`}
              cascade={true}
              fraction={1}
              direction="up"
              triggerOnce={true}
              style={{width: '100%'}}
            >
              <div
                className="flex flex-column align-items-center"
                style={{marginTop: 100}}
              >
                <h6 style={{fontWeight: 700, marginBottom: -20}}>{column.title}</h6>
                <img src={column.img} sizes="contian" style={{height: 100, width: 130}}/>
                <div className="flex justify-between">
                  {column.content.map((listItem, i)=>{
                    return (
                      <p
                        key={listItem}
                        style={{
                          width: `${column.title === 'Goal' ? 60 : 25}%`,
                          textAlign: 'center',
                          margin: '0 auto',
                        }}
                      >
                        {listItem}
                      </p>
                    );
                  })}
                </div>
              </div>
            </Fade>
          );
        })}
      </div>,
    </div>
  );
}
