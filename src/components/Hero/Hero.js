import React from 'react';
import Header from '../Header/Header';
import { styled } from 'styled-components';

function Hero() {
  return (
    <HeroWrapper>
      <HeaderPositioned />
      <PictureWrapper>
        <HeroImage
          src="./assets/images/image-profile-mobile.webp"
          alt="Adam's face"
        />
      </PictureWrapper>
      <TextWrapper>
        <H1>
          Nice to meet you! <br /> I'm{' '}
          <Underlined>Adam Keyes</Underlined>.
        </H1>
        <P>
          Based in the UK, I'm a front-end developer passionate about
          building accessible web apps that users love.
        </P>
        <ContactLink>Contact Me</ContactLink>
      </TextWrapper>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.main`
  background: var(--color-black);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
`;

const HeaderPositioned = styled(Header)`
  position: absolute;
`;

const PictureWrapper = styled.picture``;

const HeroImage = styled.img`
  width: 174px;
  height: auto;
`;

const TextWrapper = styled.div`
  margin-top: 40px;
  padding: 0 16px 10px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  font: var(--font-h1-mobile);
  color: var(--color-white);
  text-align: center;
`;

const Underlined = styled.span`
  border-bottom: 4px solid var(--color-green);
  display: inline-block;
  line-height: 0.98;
`;

const P = styled.p`
  margin-top: 24px;
  font: var(--font-body-mobile);
  color: var(--color-gray);
  text-align: center;
`;

const ContactLink = styled.a`
  margin-top: 24px;
  font: var(--font-link);
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.14288rem;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--color-green);

  
`;

export default Hero;
