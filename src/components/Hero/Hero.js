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

        <HeroImageDesktop
          src="./assets/images/image-profile-desktop.webp"
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
        <ContactLink href="#contact-form">Contact Me</ContactLink>
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
    padding-bottom: 60px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 39px 165px 219px 165px;
  }
`;

const RingsDecoration = styled.img`
  position: absolute;
  left: -95%;
  top: 17%;

  @media ${QUERIES.tabletAndUp} {
    left: -221%;
    top: 14%;
  }

  @media ${QUERIES.laptopAndUp} {
    /* left: -377%; */
    left: -208.5%;
    top: 17%;
  }
`;

const CircleDecoration = styled.img`
  position: absolute;
  right: -19%;
  top: 32%;

  @media ${QUERIES.tabletAndUp} {
    top: revert;
    bottom: 1%;
  }

  @media ${QUERIES.laptopAndUp} {
    bottom: 10%;
    right: 85%;
  }
`;


const HeaderPositioned = styled(Header)`
  padding-top: 20px;
  position: absolute;

  @media ${QUERIES.tabletAndUp} {
    padding: 30px;
    padding-bottom: 0px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 0;
    width: calc(100vw - (165px * 2));
    padding-right: 30px;
  }
`;

const PictureWrapper = styled.picture`
  @media ${QUERIES.tabletAndUp} {
    position: absolute;
    right: 0;
    top: 0;
  }

  @media ${QUERIES.laptopAndUp} {
    right: 165px;
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

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const HeroImageDesktop = styled.img`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    width: 445px;
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

  @media ${QUERIES.laptopAndUp} {
    padding-left: 0px;
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

  @media ${QUERIES.laptopAndUp} {
    font: var(--font-h1-desktop);
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

  @media ${QUERIES.laptopAndUp} {
    display: none;
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

  @media ${QUERIES.laptopAndUp} {
    margin-top: 43px;
    width: 60%;
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

  &:hover {
    color: var(--color-green);
  }

  @media ${QUERIES.tabletAndUp} {
    text-align: revert;
    margin-top: 34px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 66px;
  }
`;

export default Hero;
