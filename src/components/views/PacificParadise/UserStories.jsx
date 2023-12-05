import styled from '@emotion/styled';
import React, {useState} from 'react';
import persona1 from './images/persona_1.png';
import journey1 from './images/journey_1.png';
import persona2 from './images/persona_2.png';
import journey2 from './images/journey_2.png';

const NameLink = styled.button`
  :hover > h2 {
    color: red!important;
  }
`;

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Sub Section
 */
export default function UserStories() {
  const [person, setPerson] = useState('Austin');
  const handleSetPerson = ({target}) => {
    console.log(target);
    setPerson(target.value || target.parentNode.value);
  };

  return (
    <div className="container" style={{margin: '100px 0 0'}}>
      <div className="flex" style={{marginTop: 0}}>
        <div style={{width: '20%', marginTop: 40}}>
          <NameLink value="Austin" onClick={handleSetPerson}>
            <h2
              style={{
                color: '#AD3537',
                fontFamily: person === 'Austin' ? 'Chelsea Market' : 'Chelsea Market Outline',
              }}
            >
            Austin
            </h2>
          </NameLink>
          <NameLink value="Ting" onClick={handleSetPerson}>
            <h2
              style={{
                color: '#AD3537',
                fontFamily: person === 'Ting' ? 'Chelsea Market' : 'Chelsea Market Outline',
              }}
            >
            Ting
            </h2>
          </NameLink>
        </div>
        {person === 'Austin' ?
          <div style={{width: '80%'}}>
            <h4>User personas</h4>
            <img src={persona1} style={{width: '100%', marginTop: 20}}/>
            <h4 style={{marginTop: 30}}>User journey map</h4>
            <p>
              Austin wants to schedule a take-out order using the
              Pacific Paradise app in-between meetings. He plans to pick
              up the food on his way home after a long work day.
            </p>
            <img src={journey1} style={{width: '100%', marginTop: 50}}/>
          </div> :
          <div style={{width: '80%'}}>
            <h4>User personas</h4>
            <img src={persona2} style={{width: '100%', marginTop: 20}}/>
            <h4 style={{marginTop: 30}}>User journey map</h4>
            <p>
            Ting wants to explore new dishes from Pacific Paradise
            because she enjoyed her food when she dined in with her friends.
            </p>
            <img src={journey2} style={{width: '100%', marginTop: 50}}/>
          </div>
        }
      </div>
    </div>
  );
}
