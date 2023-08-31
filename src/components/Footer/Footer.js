import React from 'react';
import Header from '../Header/Header';
import { styled } from 'styled-components';
import { QUERIES } from '../../constants';

function Footer() {
    
  return (
    <Wrapper id="contact-form">
      <TopFooterWrapper>
        <TextWrapper>
          <H2>Contact</H2>
          <P>
            I would love to hear about your project and how I could
            help. Please fill in the form, and I'll get back to you as
            soon as possible.
          </P>
        </TextWrapper>

        <Form id="contact">
          <Decoration
            src="./assets/images/pattern-rings.svg"
            alt=""
          />
          <TextInput
            id="name"
            name="name"
            type="text"
            required
            placeholder="NAME"
          />
          <TextInput           
            id="email"
            name="email"
            type="email"
            required
            placeholder="EMAIL"
          />
          <TextArea
            id="message"
            form="contact"
            name="message"
            required
            placeholder="MESSAGE"
          />
          <Submit
            type="submit"
            value="SEND MESSAGE"
          />
        </Form>
      </TopFooterWrapper>
      <BottomFooterWrapper>
        <Header />
      </BottomFooterWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: var(--color-offblack);
  padding: 60px 16px 0 16px;

  @media ${QUERIES.tabletAndUp} {
    padding: 60px 0 0 0;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-top: 84px;
  }
`;

const TopFooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    padding: 0px 161px 0 161px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 0px 165px 0 165px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 220px;
    align-items: flex-start;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${QUERIES.laptopAndUp} {
    align-items: flex-start;
    text-align: start;
  }
`;

const H2 = styled.h2`
  font: var(--font-h1-mobile);
  color: var(--color-white);

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-h1-tablet);
  }

  @media ${QUERIES.laptopAndUp} {
    font: var(--font-h1-desktop);
  }
`;

const P = styled.p`
  margin-top: 20px;
  font: var(--font-body-mobile);
  color: var(--color-gray);

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-body-tablet);
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 36px;
  }
`;

const Form = styled.form`
  margin-top: 50px;
  position: relative;

  @media ${QUERIES.laptopAndUp} {
    margin-top: 0px;

  }
`;

const Decoration = styled.img`
  position: absolute;
  left: -100%;
  bottom: 5%;

  @media ${QUERIES.tabletAndUp} {
    left: -119%;
    bottom: -20%;
  }

  @media ${QUERIES.laptopAndUp} {
    left: -233%;
    bottom: -14%;
  }
`;

const TextInput = styled.input`
  margin-bottom: 32px;
  width: 100%;
  height: 43px;
  background-color: var(--color-offblack);
  border: none;
  border-bottom: 1.3px solid var(--color-white);
  padding-left: 24px;
  padding-bottom: 10px;
  font: var(--font-form-fields);
  color: var(--color-white);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 107px;
  background-color: var(--color-offblack);
  border: none;
  border-bottom: 1.2px solid var(--color-white);
  padding-left: 24px;
  padding-bottom: 80px;
  font: var(--font-form-fields);
  color: var(--color-white);
  resize: none;
  overflow: hidden;
`;

const Submit = styled.input`
  margin-top: 32px;
  float: right;
  background: none;
  border: none;
  font: var(--font-link);
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.14288rem;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--color-green);

  &:hover {
    color: var(--color-green);
  }
`;

const BottomFooterWrapper = styled.section`
  margin-top: 87px;
  padding: 40px 0 60px 0;
  border-top: 1.5px solid var(--color-white);

  @media ${QUERIES.tabletAndUp} {
    margin-top: 92px;
    margin-left: 30px;
    margin-right: 30px;
    padding-top: 30px;
    padding-bottom: 40px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-left: 165px;
    margin-right: 165px;
    padding-top: 47px;
    padding-bottom: 92px;

  }
`;

export default Footer;
