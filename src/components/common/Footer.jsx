import React from 'react';
import {string} from 'prop-types';
import {ROUTE_PATH} from '../constants';
import styled from '@emotion/styled';

const FooterAnchor = styled.a`
    text-decoration: none;
    color: black;
    &: visited {
        color: black
    }
    &: hover {
        text-decoration: underline;
    }
`;

/**
 * @param {Node} message
 * @return {Node} Pacific Paradise User Research Section
 */
export default function Footer({pathname}) {
  const {
    PROJECTS,
    ABOUT,
    HOME,
    DOODLE,
    BLOG,
    ANOTHER_PROJECT,
  } = ROUTE_PATH;
  if (
    [PROJECTS, HOME].includes(pathname) ||
    !Object.values(ROUTE_PATH).includes(pathname)
  ) {
    return null;
  }

  let style = {
    margin: '0 auto',
    paddingBottom: 50,
  };

  if ([ABOUT, BLOG, ANOTHER_PROJECT].includes(pathname)) {
    style={
      paddingBottom: 50,
      bottom: 0,
      width: '100%',
      margin: '0 auto',
      position: 'absolute',
    };
  }

  if ([DOODLE].includes(pathname)) {
    style={
      backgroundColor: 'white',
    };
  }

  return (
    <footer
      style={{
        ...style,
        paddingBottom: 30,
      }}
    >
      <div
        className="flex justify-between container"
        style={{margin: '0 auto'}}
      >
        <div>
          <div className="flex">
            <FooterAnchor
              href=""
              className="flex align-items-center"
              style={{textDecoration: 'none'}}
            >
              <i className="fa-regular fa-envelope" />
            </FooterAnchor>
            <FooterAnchor
              href="https://www.instagram.com/pei.1004/?hl=en"
              className="flex align-items-center"
              style={{marginLeft: 10, textDecoration: 'none'}}
            >
              <i className="fa-brands fa-instagram" />
            </FooterAnchor>
            <p style={{marginLeft: 10}}>Let’s collaborate or be friends.</p>
          </div>
          <p
            style={{
              marginTop: 10,
              fontSize: 12,
            }}
          >
              © 2024 Designed by Angela Zhang | Developed by Hank Chen
          </p>
        </div>
        <div>
          <FooterAnchor href="" className="flex align-items-center">
            <p>Resume</p>
          </FooterAnchor>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  pathname: string,
};
