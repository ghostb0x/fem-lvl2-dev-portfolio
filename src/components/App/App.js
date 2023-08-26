import React from 'react';
import Hero from '../Hero/Hero';
import { styled } from 'styled-components';
import Skills from '../Skills/Skills';

function App() {
  return (
    <Main>
      <Hero />
      <Skills/>
    </Main>
  );
}

const Main = styled.main`
  background: var(--color-black);

`;

export default App;
