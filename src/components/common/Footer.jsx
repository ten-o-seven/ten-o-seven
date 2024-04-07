import React from 'react';
import {string} from 'prop-types';
import {ROUTE_PATH} from '../constants';

/**
 * @param {Node} message
 * @return {Node} Pacific Paradise User Research Section
 */
export default function Footer({pathname}) {
  const {
    PROJECTS,
    ABOUT,
    HOME,
    PHOTOGRAPHY,
    DOODLE,
    BLOG,
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

  if ([ABOUT, PHOTOGRAPHY, DOODLE, BLOG].includes(pathname)) {
    style={
      paddingBottom: 50,
      bottom: 0,
      width: '100%',
      margin: '0 auto',
      position: 'absolute',
    };
  }

  return (
    <footer
      style={style}>
      <div
        style={{margin: '0 auto'}}
        className="flex justify-between container"
      >
        <div>
          <a href="https://www.instagram.com/pei.1004/?hl=en" className="flex align-items-center">
            <i className="fa-brands fa-instagram" />
            <p style={{marginLeft: 10}}>Let’s collaborate or be friends.</p>
          </a>
          <p style={{marginTop: 10}}>© 2024 Designed by Angela Zhang | Developed by Hank Chen</p>
        </div>
        <div>
          <a href="" className="flex align-items-center">
            <i style={{marginRight: 10}} className="fa-regular fa-user" />
            <p>Resume</p>
          </a>
          <a href="" className="flex align-items-center" style={{marginTop: 10}}>
            <i style={{marginRight: 10}} className="fa-regular fa-envelope" />
            <p>Email Me</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  pathname: string,
};
