import React from 'react';
import Hero from '../Hero/Hero';
import { styled } from 'styled-components';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Main>
        <Hero />
        <Skills />
        <Projects />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  background: var(--color-black);
  overflow-x: clip;
`;

export default App;
