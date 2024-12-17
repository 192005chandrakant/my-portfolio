import Styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme , lightTheme } from "./utils/utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Skills from "./components/sections/Skills";
//  import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import StarCanvas from "./components/canvas/Stars";
import Projects from "./components/sections/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const Body = Styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;
const Wrapper = Styled.div`
 padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
    return(
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <BrowserRouter>
          <Navbar />
          <Body>
            <StarCanvas />
            <div>
              <Hero />
              <Wrapper>
                <Skills />
                {/* <Experience /> */}
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Education />
                <Contact />
              </Wrapper>
              <Footer />
            </div>
            {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    );
  } 
  
  export default App;