
import * as React from 'react';
import Navbar from "./components/navbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from './contexts/colorMode';
import Fade from 'react-reveal/Fade'
import { CssBaseline, Toolbar, Container } from '@mui/material';
import Home from "./components/pages/home"
import About from "./components/pages/about"
import Contact from "./components/pages/contact"
import Education from "./components/pages/education"
import Portfolio from './components/pages/portfolio';
import Skills from './components/pages/skills';
function App() {
  const [colorMode, setColorMode] = React.useState('dark');
  const toggleColorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
        },
      }),
    [colorMode],
  );

  return (

    <div>
      <ColorModeContext.Provider value={{ toggleColorMode, colorMode }}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Container>
            <Fade top>
              <div id="home" style={{ height: "100vh" }}>
                <Toolbar />
                <Home />
              </div>
            </Fade>
            <Fade bottom>
              <div id="about" style={{ height: "100vh" }}>
                <Toolbar />
                <About />
              </div>
            </Fade>
            <Fade bottom>
              <div id="skills" style={{ height: "100vh" }}>
                <Toolbar />
                <Skills />
              </div>
            </Fade>
            <Fade bottom>
              <div id="education" style={{ height: "100vh" }}>
                <Toolbar />
                <Education />
              </div>
            </Fade>
            <Fade bottom>
              <div id="portfolio" style={{ height: "100vh" }}>
                <Toolbar />
                <Portfolio />
              </div>
            </Fade>
            <Fade bottom>
              <div id="contact" style={{ height: "100vh" }}>
                <Toolbar />
                <Contact />
              </div>
            </Fade>
          </Container>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div >

  );
}
export default App;
