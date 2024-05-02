import React from 'react';
import PropTypes from 'prop-types';
import arrow from '../../images/arrow.svg';
import {PROJECTS_MAP} from '../constants';
import {navigate} from 'gatsby-link';
import {useStore} from '../Store';

/**
 * @param {Node} message
 * @return {Node} Pacific Paradise User Research Section
 */
export default function ProjectsNavigator({prev, next, style}) {
  const {setPageOpacity} = useStore();
  return (
    <div style={{width: '100%', ...style}} className="flex flex-column align-items-center">
      <button
        className="flex flex-column align-items-center"
        onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <h2 style={{fontSize: 36}}>take me up</h2>
        <img src={arrow} style={{rotate: '90deg', marginTop: 20}} />
      </button>
      <div className="flex" style={{marginTop: 20, width: '100%'}}>
        <div style={{width: '45%'}} className="flex justify-end">
          {prev &&
            <button className="flex align-items-center"
              onClick={()=>{
                setPageOpacity(0);
                setTimeout(()=>navigate(prev), 700);
              }}
            >
              <h2 style={{fontSize: 36}}>{PROJECTS_MAP[prev].title}</h2>
              <img src={arrow} style={{marginLeft: 20}} />
            </button>
          }
        </div>
        <div style={{width: '10%'}} />
        <div style={{width: '45%'}}>
          {next &&
            <button className="flex align-items-center"
              onClick={()=>{
                setPageOpacity(0);
                setTimeout(()=>navigate(next), 700);
              }}
            >
              <img src={arrow} style={{rotate: '180deg', marginRight: 20}} />
              <h2 style={{fontSize: 36}}>{PROJECTS_MAP[next].title}</h2>
            </button>
          }
        </div>
      </div>
    </div>
  );
}

ProjectsNavigator.propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  style: PropTypes.object,
};

ProjectsNavigator.defaultProps = {
  style: {},
};

