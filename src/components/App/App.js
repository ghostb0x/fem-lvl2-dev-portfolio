import React from 'react';
import Hero from '../Hero/Hero';
import { styled } from 'styled-components';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

function App() {
  return (
    <Main>
      <Hero />
      <Skills/>
      <Projects/>
    </Main>
  );
}

const Main = styled.main`
  background: var(--color-black);

`;

export default App;
