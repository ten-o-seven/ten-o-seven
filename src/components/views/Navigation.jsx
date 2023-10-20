import styled from '@emotion/styled';
import React from 'react';
import {PAGE_NAME} from '../constants';
import {useStore} from '../Store';

const Container = styled.div`
    z-index: 100;
    // background-color: rgb(255 255 255 / 0.3);
    // backdrop-filter: blur(10px);
    width: 200px;
    right:0;
`;

const HomeIcon = styled.div`
    width: 25px;
    height:25px;
    background-color: red;
    border-radius: 50px;
`;

const LinksContainer = styled.div`
    transform: rotate(180deg);
`;

const LinkText = styled.p`
    writing-mode: vertical-lr;
    font-weight: 400
`;

/**
 * @return {Node} global nav bar
 */
export default function Navigation() {
  const {displayedPage, setDisplayedPage} = useStore();

  const onProjectsClick = (e) => {
    if (displayedPage === PAGE_NAME.HOME) {
      document.querySelector('#homeContainer').style.opacity=0;
    }
    setTimeout(()=>{
      setDisplayedPage(e.target.value || e.target.parentNode.value);
    }, 1500);
  };


  return (
    <Container className='fixed align-self-end full-vh'>
      <ul
        className='flex flex-column align-items-center'
        style={{marginTop: '10vh'}}
      >
        <li>
          <HomeIcon />
        </li>
        <LinksContainer className='flex flex-column-reverse'>
          <li>
            <button
              className='link-button'
              onClick={onProjectsClick}
              value={PAGE_NAME.PROJECTS}
            >
              <LinkText value={PAGE_NAME.PROJECTS}>
                Projects
              </LinkText>
            </button>
          </li>
          <li>
            <button
              className='link-button'
              onClick={()=>{}}
              value={PAGE_NAME.CONTACTS}
            >
              <LinkText>Me</LinkText>
            </button>
          </li>
        </LinksContainer>
      </ul>
    </Container>);
}
