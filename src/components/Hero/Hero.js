import React from 'react';
import Header from '../Header/Header';
import { styled } from 'styled-components';
import { QUERIES } from '../../constants';

function Hero() {
  return (
    <HeroWrapper>
      <PictureWrapper>
        <RingsDecoration
          src="./assets/images/pattern-rings.svg"
          alt=""
        />
        <CircleDecoration
          src="./assets/images/pattern-circle.svg"
          alt=""
        />
        <HeroImageMobile
          src="./assets/images/image-profile-mobile.webp"
          alt="Adam's face"
        />

        <HeroImageTablet
          src="./assets/images/image-profile-tablet.webp"
          alt="Adam's face"
        />
      </PictureWrapper>
      <HeaderPositioned />

      <TextWrapper>
        <H1>
          Nice to <BreakTablet /> meet you! <BreakMobile /> I'm{' '}
          <Underlined>Adam Keyes</Underlined>.
        </H1>
        <P>
          Based in the UK, I'm a front-end developer passionate about
          building accessible web apps that users love.
        </P>
        <ContactLink href="">Contact Me</ContactLink>
      </TextWrapper>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;

  @media ${QUERIES.tabletAndUp} {
    align-items: flex-start;
  }
`;

const RingsDecoration = styled.img`
  position: absolute;
  left: -95%;
  top: 17%;

  @media ${QUERIES.tabletAndUp} {
    left: -221%;
    top: 14%
  }
`;

const CircleDecoration = styled.img`
  position: absolute;
  right: -16%;
  top: 32%;

  @media ${QUERIES.tabletAndUp} {
    top: revert;
    bottom: 1%;
  }
`;

const HeaderPositioned = styled(Header)`
  padding-top: 20px;
  position: absolute;

  @media ${QUERIES.tabletAndUp} {
    padding: 30px;
    padding-bottom: 0px;
  }
`;

const PictureWrapper = styled.picture`
  @media ${QUERIES.tabletAndUp} {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const HeroImageMobile = styled.img`
  width: 174px;
  height: auto;
  opacity: 0.99;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const HeroImageTablet = styled.img`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
    width: 322px;
  }
`;

const TextWrapper = styled.div`
  margin-top: 40px;
  padding: 0 16px 10px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 150px;
    padding: revert;
    padding-left: 32px;
    width: 65%;
    align-items: flex-start;
    z-index: 1;
  }
`;

const H1 = styled.h1`
  font: var(--font-h1-mobile);
  color: var(--color-white);
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-h1-tablet);
    text-align: revert;
    letter-spacing: -0.12781rem;
  }
`;

const BreakMobile = styled.br`
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const BreakTablet = styled.br`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }
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

  @media ${QUERIES.tabletAndUp} {
    text-align: revert;
    font: var(--font-body-tablet);
    margin-top: 60px;
    width: 90%;
  }
`;

const ContactLink = styled.a`
  margin-top: 24px;
  font: var(--font-link);
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.14288rem;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--color-green);
  
  @media ${QUERIES.tabletAndUp} {
    text-align: revert;
    margin-top: 34px;
  }
`;

export default Hero;
