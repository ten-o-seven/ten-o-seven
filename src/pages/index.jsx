import {ThemeProvider} from '@emotion/react';
import * as React from 'react';
import Store from '../components/Store';
import theme from '../components/theme';
import Views from '../components/views';
import './styles.css';


const IndexPage = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Store>
          <Views/>
        </Store>
      </ThemeProvider>
    </main>
  );
};

export default IndexPage;
