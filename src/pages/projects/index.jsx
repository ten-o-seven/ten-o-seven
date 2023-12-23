import {ThemeProvider} from '@emotion/react';
import * as React from 'react';
import Store from '../../components/Store';
import theme from '../../components/theme';
import Navigation from '../../components/views/Navigation';
import Projects from '../../components/views/Projects';
import {Helmet} from 'react-helmet';
import {shape, string} from 'prop-types';
import '../styles.css';

const ProjectsPage = ({location: {pathname}}) => {
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
      <ThemeProvider theme={theme}>
        <Store>
          <Navigation location={pathname}/>
          <main className="flex justify-center">
            <Projects pageOpacity={pageOpacity} setPageOpacity={setPageOpacity} />
          </main>
        </Store>
      </ThemeProvider>
    </>
  );
};

ProjectsPage.propTypes = {
  location: shape({pathname: string.isRequired}),
};


export default ProjectsPage;
