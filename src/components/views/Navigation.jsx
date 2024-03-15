import styled from '@emotion/styled';
import React, {useEffect} from 'react';
import {ROUTE_PATH} from '../constants';
import logo from '../../images/logo_graphic.png';
import logoWithText from '../../images/logo_w_text.png';
import {string} from 'prop-types';

import './styles.css';
import {navigate, withPrefix} from 'gatsby-link';
import {useStore} from '../Store';
import {getIsBetweenPortAndProj} from '../utils';


const ContainerVertical = styled.nav`
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
export default function Navigation({displayedPage}) {
  const {setPageOpacity, setNavOpacity, navOpacity} = useStore();
  useEffect(()=>{
    setTimeout(()=>{
      setNavOpacity(1);
    }, 700);
  }, [displayedPage]);

  const onProjectsClick = (e) => {
    const targetPath = withPrefix(e.target.value || e.target.parentNode.value);
    const isSameAsCurrentPage = displayedPage === targetPath;
    if (!isSameAsCurrentPage) setPageOpacity(0);

    const isBetweenPortAndProj = getIsBetweenPortAndProj(displayedPage, targetPath);

    if (!isBetweenPortAndProj && !isSameAsCurrentPage) {
      setNavOpacity(0);
    }

    setTimeout(()=>{
      navigate(targetPath);
    }, 700);
  };

  if ([withPrefix(ROUTE_PATH.PROJECTS), withPrefix(ROUTE_PATH.HOME)].includes(displayedPage)) {
    return (
      <ContainerVertical
        className='fixed align-self-end full-vh'
        style={{
          opacity: navOpacity,
          transition: '0.75s ease-out',
        }}
      >
        <ul
          className='flex flex-column align-items-center'
          style={{marginTop: '10vh'}}
        >
          <li>
            <button
              style={{padding: 0}}
              value={ROUTE_PATH.HOME}
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
                value={ROUTE_PATH.PROJECTS}
              >
                <LinkText value={ROUTE_PATH.PROJECTS}>
                  Projects
                </LinkText>
              </button>
            </li>
            <li>
              <button
                className='link-button'
                onClick={()=>{}}
                value={ROUTE_PATH.CONTACTS}
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
    <nav
      className="fixed"
      style={{
        zIndex: 1000,
        width: '100%',
        backgroundColor: 'rgba(249, 249, 249, 1)',
        opacity: navOpacity,
        transition: '0.75s ease-out',
      }}
    >
      <div
        className="container"
        style={{margin: '0 auto'}}
      >
        <ul className="flex justify-between">
          <li>
            <button
              style={{padding: 0}}
              value={ROUTE_PATH.HOME}
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
                value={ROUTE_PATH.PROJECTS}
              >
                <p value={ROUTE_PATH.PROJECTS}>
              Projects
                </p>
              </button>
            </li>
            <li>
              <button
                className='link-button'
                onClick={()=>{}}
                value={ROUTE_PATH.CONTACTS}
              >
                <p>Me</p>
              </button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  displayedPage: string.isRequired,
};
