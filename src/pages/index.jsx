import {ThemeProvider} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import Store from '../components/Store';
import theme from '../components/theme';
import {Helmet} from 'react-helmet';
import Navigation from '../components/views/Navigation';
import {shape, string} from 'prop-types';
import './styles.css';

import cloud1 from '../video/cloud_1.mp4';

const IndexPage = ({location: {pathname, ...rest}}) => {
  const [pageOpacity, setPageOpacity] = useState(0);
  useEffect(()=>{
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
      <ThemeProvider theme={theme}>
        <Store>
          <Navigation displayedPage={pathname} setPageOpacity={setPageOpacity}/>
          <main className="flex justify-center">
            <div className="full-view" id="homeContainer" style={{
              opacity: pageOpacity,
              transition: '0.75s ease-in',
              overflow: 'hidden',
            }}>
              <video
                autoPlay={true}
                controls={false}
                className="full-view"
                style={{objectFit: 'cover'}}
              >
                <source src={cloud1} type="video/mp4" />
              </video>
            </div>
          </main>
        </Store>
      </ThemeProvider>
    </>
  );
};

IndexPage.propTypes = {
  location: shape({pathname: string.isRequired}),
};

export default IndexPage;
