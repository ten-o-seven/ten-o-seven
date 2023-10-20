import {ThemeProvider} from '@emotion/react';
import * as React from 'react';
import Store from '../components/Store';
import theme from '../components/theme';
import Views from '../components/views';
import {Helmet} from 'react-helmet';
import './styles.css';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link
          // eslint-disable-next-line max-len
          href={`https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&display=swap`}
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Store>
          <Views/>
        </Store>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
