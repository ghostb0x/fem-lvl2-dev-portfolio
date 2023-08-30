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
            placeholder="NAME"
          />
          <TextInput
            id="email"
            name="email"
            type="text"
            placeholder="EMAIL"
          />
          <TextArea
            id="message"
            form="contact"
            name="message"
            type="textarea"
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
`;

const TopFooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    padding: 0px 161px 0 161px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const H2 = styled.h2`
  font: var(--font-h1-mobile);
  color: var(--color-white);

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-h1-tablet);
  }
`;

const P = styled.p`
  margin-top: 20px;
  font: var(--font-body-mobile);
  color: var(--color-gray);

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-body-tablet);
  }
`;

const Form = styled.form`
  margin-top: 50px;
  position: relative;
`;

const Decoration = styled.img`
  position: absolute;
  left: -100%;
  bottom: 5%;

  @media ${QUERIES.tabletAndUp} {
    left: -119%;
    bottom: -20%;
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
`;

export default Footer;
