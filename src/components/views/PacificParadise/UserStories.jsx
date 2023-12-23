import styled from '@emotion/styled';
import React, {useState} from 'react';
import persona1 from './images/persona_1.png';
import persona2 from './images/persona_2.png';
import personaProfile1 from './images/persona_profile_1.png';
import personaProfile2 from './images/persona_profile_2.png';
import personaDetails1 from './images/persona_details_1.png';
import personaDetails2 from './images/persona_details_2.png';
import journey1 from './images/journey_1.png';
import journey2 from './images/journey_2.png';

const NameLink = styled.button`
  :hover > img {
    opacity: 100% !important;
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
    <div className="container flex flex-column" style={{margin: '100px 0 0'}}>
      <h2 style={{margin: '0 auto'}}>User Persona and Journey Maps</h2>
      <div className="flex" style={{marginTop: 0}}>
        <div style={{width: '20%', marginTop: 40}}>
          <NameLink value="Austin" onClick={handleSetPerson} style={{cursor: 'pointer'}}>
            <img
              src={personaProfile1}
              style={{width: '100%', marginTop: 20, opacity: person === 'Austin' ? '100%': '30%'}}
            />
          </NameLink>
          <NameLink value="Ting" onClick={handleSetPerson} style={{cursor: 'pointer'}}>
            <img
              src={personaProfile2}
              style={{width: '100%', marginTop: 20, opacity: person === 'Ting' ? '100%': '30%'}}
            />
          </NameLink>
        </div>
        {person === 'Austin' ?
          <div style={{width: '80%', marginLeft: '10%'}}>
            <img src={personaDetails1} style={{width: '80%', marginTop: 20, marginLeft: 60}}/>
            <img src={journey1} style={{width: '100%', marginTop: 50}}/>
          </div> :
          <div style={{width: '80%', marginLeft: '10%'}}>
            <img src={personaDetails2} style={{width: '80%', marginTop: 20, marginLeft: 60}}/>
            <img src={journey2} style={{width: '100%', marginTop: 50}}/>
          </div>
        }
      </div>
    </div>
  );
}
