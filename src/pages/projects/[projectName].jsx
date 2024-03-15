import * as React from 'react';
import {PAGE_MAP} from '../../components/constants';
// import PacificParadise from '../../components/views/PacificParadise';
import {shape, string} from 'prop-types';

const ProjectName = ({location: {pathname}}) => {
  const Display = PAGE_MAP[pathname];
  return (
    <div
      className="full-view flex flex-column align-items-center"
      style={{
        width: 'calc(100vw - 100px)',
        marginTop: 100,
      }}>
      {/* <PacificParadise /> */}
      {/* TODO: figure out why object map display does not work during build */}
      <Display />
    </div>
  );
};

export default ProjectName;

ProjectName.propTypes = {
  location: shape({pathname: string.isRequired}).isRequired,
};
