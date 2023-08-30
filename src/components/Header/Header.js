import React from 'react';
import { styled } from 'styled-components';
import { QUERIES } from '../../constants';

function Header({ className }) {
  return (
    <Wrapper className={className}>
      <Logo>adamkeyes</Logo>
      <Icons>
        <a href="github.com">
          <Icon
            src="./assets/images/icon-github.svg"
            alt="Github Logo - see my github"
          />
        </a>

        <a href="frontendmentor.io">
          <Icon
            src="./assets/images/icon-frontend-mentor.svg"
            alt="Frontend Mentor Logo - see my Frontend Mentor profile"
          />
        </a>

        <a href="linkedin.com">
          <Icon
            src="./assets/images/icon-linkedin.svg"
            alt="Linkedin Logo - see my LinkedIn profile"
          />
        </a>

        <a href="twitter.com">
          <Icon
            src="./assets/images/icon-twitter.svg"
            alt="Twitter Logo - see my Twitter profile"
          />
        </a>
      </Icons>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Logo = styled.h3`
  font: var(--font-h3);
  color: var(--color-white);

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-h3-tablet-up);
  }
`;

const Icons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 25.6px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 0;
    gap: 32px;
  }
`;

const Icon = styled.img`
  width: 19.2px;
  &:hover {
    filter: invert(0.4) sepia(1) saturate(7.1) hue-rotate(93.6deg) brightness(1);
  }
  @media ${QUERIES.tabletAndUp} {
    width: 24px;
  }
`;

export default Header;
