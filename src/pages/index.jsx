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
          href="https://fonts.googleapis.com/css2?family=Lacquer&display=swap"
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
