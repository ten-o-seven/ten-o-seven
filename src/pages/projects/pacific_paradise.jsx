import * as React from 'react';
import PacificParadise from '../../components/views/PacificParadise';

const PP = () => {
  return (
    <div
      className="full-view flex flex-column align-items-center"
      style={{
        width: 'calc(100vw - 100px)',
        marginTop: 100,
      }}
    >
      <PacificParadise />
    </div>
  );
};

export default PP;
