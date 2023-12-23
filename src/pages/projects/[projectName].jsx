import {ThemeProvider} from '@emotion/react';
import * as React from 'react';
import Store from '../../components/Store';
import theme from '../../components/theme';
import Navigation from '../../components/views/Navigation';
import {Helmet} from 'react-helmet';
import {shape, string} from 'prop-types';
import '../styles.css';
import {PAGE_MAP} from '../../components/constants';

const ProjectName = ({location: {pathname}, location}) => {
  const Display = PAGE_MAP[pathname];
  console.log(Display);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link
          href="https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Lacquer&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Store>
          <Navigation location={pathname}/>
          <main className="flex justify-center">
            <Display />
          </main>
        </Store>
      </ThemeProvider>
    </>
  );
};

ProjectName.propTypes = {
  location: shape({pathname: string.isRequired}),
};


export default ProjectName;
