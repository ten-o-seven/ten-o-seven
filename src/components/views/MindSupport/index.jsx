import React, {useState} from 'react';
import ProjectsNavigator from '../../common/ProjectsNavigator';
import {ROUTE_PATH} from '../../constants';
import {useStore} from '../../Store';
import Conclusion from './Conclusion';
import DefineProblem from './DefineProblem';
import Design from './Design';
import Hero from './Hero';
import HeroSubSection from './HeroSubSection';
import Hifi from './Hifi';
import Lofi from './Lofi';
import UserFlow from './UserFlow';
import styled from '@emotion/styled';

const Button = styled.button`
  height: 40px;
  width: 50px;
  border: 1px solid black;
  margin-left: 5px;
  &: hover{
    color: white;
    border-color: ${({theme})=>theme?.color?.brand?.red};
    background-color: ${({theme})=>theme?.color?.brand?.red};
  }

  &: active{
    background-color: pink;
    border-color: pink;
  }
`;

/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function MindSupport() {
  const errorCopyMap = {
    1: 'That might have been a little too loud, try again.',
    2: 'Open Sesame won\'t help you here.',
    3: 'Gentle, it\'s sensitve. Get it?',
  };
  const {setPageOpacity, hasMSAuth, setHasMSAuth}=useStore();
  const [wrongPassword, setWrongPassword] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === '10O7') {
      setPageOpacity(0);

      setTimeout(()=>{
        setPageOpacity(1);
        setHasMSAuth(true);
      }, 700);
    } else {
      const copyNumber = Math.floor(Math.random() * 3) + 1;
      setWrongPassword(errorCopyMap[copyNumber]);
    }
  };
  return (
    <div
      className="container flex flex-column"
      style={{marginTop: 100, minHeight: '80vh'}}
    >
      {
        hasMSAuth ? (
          <>
            <Hero />
            <HeroSubSection />
            <UserFlow />
            <DefineProblem />
            <Lofi />
            <Design />
            <Hifi />
            <Conclusion />
            <ProjectsNavigator
              style={{marginTop: 200, marginBottom: 100}}
              prev={ROUTE_PATH.PACIFIC_PARADISE}
            />
          </>
        ): (
          <div
            className="flex flex-column align-self-center align-items-center justify-center"
            style={{height: '100%'}}
          >
            <h2>Area 51</h2>
            <p>
              This project is sensitive,
              email me for the secret code if you want to take a peak
            </p>
            <div style={{marginTop: 70}} className="flex flex-column align-items-center">
              <label htmlFor="ms_password_input"><p>(Whisper your secret code here)</p></label>
              <form
                onSubmit={onSubmit}
                id="ms_password_form"
                className="flex align-items-center"
                style={{marginTop: 10}}
              >
                <input
                  id="ms_password_input"
                  type="password"
                  style={{
                    height: 40,
                    padding: 10,
                    margin: 0,
                    boxSizing: 'border-box',
                    borderRadius: 1,
                    border: '1px solid black',
                  }}/>
                <Button
                  type="submit"
                  form="ms_password_form"
                >
                  Psst
                </Button>
              </form>
              <p style={{color: 'red', marginTop: 5}}>{wrongPassword}</p>
            </div>
          </div>
        )
      }
    </div>
  );
}
