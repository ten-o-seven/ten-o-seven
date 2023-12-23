import styled from '@emotion/styled';
import React from 'react';
import {PAGE_NAME} from '../constants';
import {useStore} from '../Store';
import logo from '../../images/logo_graphic.png';
import logoWithText from '../../images/logo_w_text.png';

const ContainerVertical = styled.div`
    z-index: 100;
    // background-color: rgb(255 255 255 / 0.3);
    // backdrop-filter: blur(10px);
    width: 200px;
    right:0;
`;

const HomeIcon = styled.img`
  cursor: pointer;
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
    if (displayedPage !== e.target.value && displayedPage !== e.target.parentNode.value) {
      document.querySelector('main').firstChild.style.opacity=0;
    }

    setTimeout(()=>{
      setDisplayedPage(e.target.value || e.target.parentNode.value);
    }, 700);
  };

  if ([PAGE_NAME.PROJECTS, PAGE_NAME.HOME].includes(displayedPage)) {
    return (
      <ContainerVertical className='fixed align-self-end full-vh'>
        <ul
          className='flex flex-column align-items-center'
          style={{marginTop: '10vh'}}
        >
          <li>
            <button
              style={{padding: 0}}
              value={PAGE_NAME.HOME}
              onClick={onProjectsClick}
            >
              <HomeIcon src={logo}/>
            </button>
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
      </ContainerVertical>
    );
  }

  return (
    <div
      className="flex flex-column align-items-center"
      style={{zIndex: 1000, position: 'relative'}}
    >
      <div
        className="container fixed"
        style={{backgroundColor: 'rgba(249, 249, 249, 1)'}}
      >
        <ul className="flex justify-between">
          <li>
            <button
              style={{padding: 0}}
              value={PAGE_NAME.HOME}
              onClick={onProjectsClick}
            >
              <HomeIcon src={logoWithText}/>
            </button>
          </li>
          <div className="flex justify-between" style={{width: '10%'}}>
            <li>
              <button
                className='link-button'
                onClick={onProjectsClick}
                value={PAGE_NAME.PROJECTS}
              >
                <p value={PAGE_NAME.PROJECTS}>
              Projects
                </p>
              </button>
            </li>
            <li>
              <button
                className='link-button'
                onClick={()=>{}}
                value={PAGE_NAME.CONTACTS}
              >
                <p>Me</p>
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
