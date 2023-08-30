import React from 'react';
import { styled } from 'styled-components';
import { QUERIES } from '../../constants';

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

      <Decoration
        src="./assets/images/pattern-rings.svg"
        alt=""
      />
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
  position: relative;

  @media ${QUERIES.tabletAndUp} {
    margin-left: 30px;
    margin-right: 30px;
    padding-top: 52px;
    padding-bottom: revert;
    border-bottom: revert;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: start;
    align-items: start;
    row-gap: 52px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-left: 165px;
    margin-right: 165px;
    padding-top: 72px;
    grid-template-columns: 2fr 1.5fr 2fr;
    row-gap: 58px;
    column-gap: 90px;
  }
`;

const SkillBlock = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    align-items: flex-start;
    gap: 14px;
  }
`;

const SkillName = styled.strong`
  font: var(--font-h2-mobile);
  color: var(--color-white);

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-h2-tablet);
  }
`;

const Experience = styled.p`
  font: var(--font-body-mobile);
  color: var(--color-gray);

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-body-tablet);
  }
`;

const Decoration = styled.img`
  position: absolute;
  right: -53%;
  bottom: -14%;

  @media ${QUERIES.laptopAndUp} {
    right: -38%;
    bottom: -16%;
  }
`;

export default Skills;
