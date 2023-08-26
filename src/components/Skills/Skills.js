import React from 'react';
import { styled } from 'styled-components';

function Skills() {
  return (
    <Wrapper>
      <SkillBlock>
        <SkillName>HTML</SkillName>
        <Experience>4 Years Experience</Experience>
      </SkillBlock>

      <SkillBlock>
        <SkillName>CSS</SkillName>
        <Experience>4 Years Experience</Experience>
      </SkillBlock>

      <SkillBlock>
        <SkillName>Javascript</SkillName>
        <Experience>4 Years Experience</Experience>
      </SkillBlock>

      <SkillBlock>
        <SkillName>Accessibility</SkillName>
        <Experience>4 Years Experience</Experience>
      </SkillBlock>

      <SkillBlock>
        <SkillName>React</SkillName>
        <Experience>3 Years Experience</Experience>
      </SkillBlock>

      <SkillBlock>
        <SkillName>Sass</SkillName>
        <Experience>3 Years Experience</Experience>
      </SkillBlock>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border-top: 1.5px solid var(--color-white);
  border-bottom: 1.5px solid var(--color-white);
  margin-left: 16px;
  margin-right: 16px;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const SkillBlock = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillName = styled.strong`
  font: var(--font-h2-mobile);
  color: var(--color-white);
`;

const Experience = styled.p`
  font: var(--font-body-mobile);
  color: var(--color-gray);
`;


export default Skills;
