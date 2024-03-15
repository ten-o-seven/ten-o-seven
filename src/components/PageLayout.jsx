import {ThemeProvider} from '@emotion/react';
import * as React from 'react';
import Store from './Store';
import theme from './theme';
import Navigation from './views/Navigation';
import {Helmet} from 'react-helmet';
import {shape, string, func, object, oneOfType} from 'prop-types';
import '../pages/styles.css';
import favIco from '../images/icon.png';

const PageLayout = ({children, location, location: {pathname}}) => {
  const [pageOpacity, setPageOpacity] = React.useState(0);
  React.useEffect(()=>{
    setTimeout(()=>{
      setPageOpacity(1);
    }, 700);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link
          href="https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Lacquer&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href={favIco} sizes="16x16" />
        <script src="https://kit.fontawesome.com/a704284d8b.js" crossOrigin="anonymous"></script>
      </Helmet>
      <ThemeProvider theme={theme} >
        <Store rootValues={{pageOpacity, setPageOpacity, location}}>
          <Navigation
            displayedPage={pathname}
            setPageOpacity={setPageOpacity}
          />
          <main
            className="flex justify-center"
            style={{
              opacity: pageOpacity,
              transition: '0.75s ease-in',
            }}
          >
            {children}
          </main>
        </Store>
      </ThemeProvider>
    </>
  );
};

PageLayout.propTypes = {
  children: oneOfType([func, object]),
  location: shape({pathname: string.isRequired}),
};


export default PageLayout;
