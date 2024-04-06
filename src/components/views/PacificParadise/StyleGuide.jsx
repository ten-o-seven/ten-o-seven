import React from 'react';
import {styleGuide} from './lang';
import fontBrand from './images/font_brand.png';
import fontTitle from './images/font_title.png';
import fontBody from './images/font_body.png';
import fontLinks from './images/font_links.png';
import components from './images/components.png';
import icons from './images/icons.png';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Section
 */
export default function StyleGuide() {
  return (
    <div style={{marginTop: 200}} id="style">
      <h3>05. Style Guide</h3>
      <div className="flex" style={{marginTop: 100}}>
        <div>
          <div>
            <h2 style={{marginLeft: 145}}>Colors</h2>
            {styleGuide.colors.map((row)=>{
              return (
                <div key={row.text} style={{marginTop: 30}} className="flex align-items-start">
                  <img src={row.text} />
                  {row.swatch.map((card)=>{
                    return <img key={card} src={card} style={{marginLeft: 30}}/>;
                  })}
                </div>
              );
            })}
          </div>
          <div style={{marginTop: 100, marginLeft: 145}} className="relative">
            <div>
              <h2>Typography</h2>
              <div style={{marginTop: 30}}>
                <img src={fontBrand} />
                <img src={fontTitle} style={{marginLeft: 30}}/>
              </div>
              <div style={{marginTop: 30}}>
                <img src={fontBody}/>
                <img src={fontLinks} style={{marginLeft: 30}}/>
              </div>
            </div>
            <div style={{position: 'absolute', right: -220, top: 0}}>
              <h2>Icons</h2>
              <img src={icons}/>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{marginLeft: 70}}>Components</h2>
          <img src={components} style={{width: 760, marginLeft: 50}} />
        </div>
      </div>
    </div>
  );
}
