import React from 'react';
import left from './images/note_left.png';
import top from './images/note_top.png';
import bottom from './images/note_bottom.png';
import right from './images/note_right.png';
import {userStories} from './lang';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Sub Section
 */
export default function UserStories() {
  return (
    <>
      {userStories.map((story)=>{
        return (
          <div
            key={story.title}
            id={story.id}
            style={{marginTop: 150}}
            className="flex align-items-center flex-column"
          >
            <h2>{story.title}</h2>
            <div className="flex" style={{marginTop: 50}}>
              <div style={{width: '100%', position: 'relative'}}>
                <img
                  src={story.name}
                  style={{width: 200, rotate: '6rad', position: 'absolute', right: 20, top: 70}}
                />
                <img src={left} style={{width: 300, height: 450}}/>
                <div style={{position: 'absolute', bottom: 180, right: 0, width: 240}}>
                  {story.demographics.map((item)=>{
                    const [[key, value]] = Object.entries(item);
                    return <p key={key+value}>{key}: {value}</p>;
                  })}
                </div>
              </div>
              <div className="flex flex-column align-center" style={{paddingLeft: 10}}>
                <div style={{position: 'relative'}}>
                  <p style={{position: 'absolute', width: 300, left: 30, top: 60}}>
                    {story.background}
                  </p>
                  <img src={top} style={{width: 370, height: 257}}/>
                </div>
                <div style={{position: 'relative'}}>
                  <div style={{position: 'absolute', top: 30, left: 20}}>
                    <h5>Frustration:</h5>
                    <div style={{width: 280}}>
                      {story.frustration.map((item)=>{
                        return (
                          <p
                            key={item}
                            style={{width: 280, marginTop: 22, marginLeft: 40}}
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <img src={bottom} style={{width: 370, height: 287}}/>
                </div>
              </div>
              <div style={{position: 'relative', paddingLeft: 10}}>
                <div style={{position: 'absolute', top: 50, left: 20}}>
                  <h5> Goals:</h5>
                  <div style={{width: 280}}>
                    {story.goals.map((item)=>{
                      return (
                        <p
                          key={item}
                          style={{width: 180, marginTop: 20, marginLeft: 35}}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <img src={right} style={{width: 250, height: 377}}/>
            </div>
            <div className="flex flex-column align-items-center">
              <div style={{marginTop: 100, width: '75%'}}>
                <img
                  src={story.name}
                  style={{float: 'left', marginRight: 5, position: 'relative', top: 7}}
                />
                <div style={{height: 20}}/>
                <p style={{textAlign: 'justify', position: 'relative'}}>
                  {story.desire}
                </p>
              </div>
              <img src={story.journey} style={{marginTop: 30}}/>
            </div>
          </div>
        );
      })}

    </>
  );
}
