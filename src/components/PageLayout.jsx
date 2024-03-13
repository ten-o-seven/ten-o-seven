import {ThemeProvider} from '@emotion/react';
import * as React from 'react';
import Store from './Store';
import theme from './theme';
import Navigation from './views/Navigation';
import {Helmet} from 'react-helmet';
import {shape, string} from 'prop-types';
import '../pages/styles.css';

const PageLayout = ({children, location: {pathname}}) => {
  const [pageOpacity, setPageOpacity] = React.useState(0);
  React.useEffect(()=>{
    setTimeout(()=>{
      setPageOpacity(1);
    }, 700);
  }, []);

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
      <ThemeProvider theme={theme} >
        <Store rootValues={{pageOpacity, setPageOpacity}}>
          <Navigation displayedPage={pathname} setPageOpacity={setPageOpacity}/>
          <main className="flex justify-center">
            {children}
          </main>
        </Store>
      </ThemeProvider>
    </>
  );
};

PageLayout.propTypes = {
  children: Node.isRequired,
  location: shape({pathname: string.isRequired}),
};


export default PageLayout;
