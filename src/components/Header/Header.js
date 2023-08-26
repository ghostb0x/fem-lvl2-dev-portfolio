import React from 'react';
import { styled } from 'styled-components';

function Header({className}) {
  return (
    <Wrapper className={className} >
      <Logo>adamkeyes</Logo>
      <Icons>
        <Icon
          src="./assets/images/icon-github.svg"
          alt="Github Logo - see my github"
        />
        <Icon
          src="./assets/images/icon-frontend-mentor.svg"
          alt="Frontend Mentor Logo - see my Frontend Mentor profile"
        />
        <Icon
          src="./assets/images/icon-linkedin.svg"
          alt="Linkedin Logo - see my LinkedIn profile"
        />
        <Icon
          src="./assets/images/icon-twitter.svg"
          alt="Twitter Logo - see my Twitter profile"
        />
      </Icons>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.h3`
  font: var(--font-h3);
  color: var(--color-white);
`;

const Icons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 25.6px;
`;

const Icon = styled.img`
  width: 19.2px;
`;

export default Header;
