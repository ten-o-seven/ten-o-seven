import * as React from 'react';
import {useStore} from '../../components/Store';
import PacificParadise from '../../components/views/PacificParadise';

const ProjectName = () => {
  // const Display = PAGE_MAP[pathname];
  const {pageOpacity, setPageOpacity} = useStore();
  React.useEffect(()=>{
    setTimeout(()=>{
      setPageOpacity(1);
    }, 700);
  }, []);

  return (
    <div
      className="full-view flex flex-column align-items-center"
      style={{
        width: 'calc(100vw - 100px)',
        transition: '0.75s ease-out',
        opacity: pageOpacity,
        marginTop: 100,
      }}>
      <PacificParadise />
      {/* TODO: figure out why object map display does not work during build */}
      {/* <Display /> */}
    </div>
  );
};

export default ProjectName;
