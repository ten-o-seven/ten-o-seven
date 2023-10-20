import React from 'react';
import {PAGE_NAME} from '../constants';
import {useStore} from '../Store';

/**
 * Renders global nav bar
 * @return {Node} Global nav bar
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
    <navigation className='home-navigation'>
      <ul
        className='flex flex-column align-items-center'
        style={{marginTop: '10vh'}}
      >
        <li>
          <div className='home-icon' />
        </li>
        <li>
          <button
            className='link-button'
            onClick={onProjectsClick}
            value={PAGE_NAME.PROJECTS}
          >
            <p value={PAGE_NAME.PROJECTS} className='link-button-text'>
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
            <p className='link-button-text'>Me</p>
          </button>
        </li>
      </ul>
    </navigation>);
}
