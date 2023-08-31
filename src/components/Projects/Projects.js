import React from 'react';
import { styled } from 'styled-components';
import { QUERIES } from '../../constants';

function Projects() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Projects</Title>
        <ContactLink href="#contact-form">Contact Me</ContactLink>
      </TitleWrapper>

      <ProjectsGallery>
        <ProjectBlock>
          <PictureWrapper>
            <Image src="./assets/images/thumbnail-project-1-small.webp" alt="Project 1 screenshot - Design Portfolio" />
            <DesktopOverlays>
              <Link href="">View Project</Link>
              <Link href="">View Code</Link>
            </DesktopOverlays>
          </PictureWrapper>
          <ProjectName>Design Portfolio</ProjectName>
          <Technologies>
            <TechName>HTML</TechName>
            <TechName>CSS</TechName>
          </Technologies>
          <Links>
            <Link href="">View Project</Link>
            <Link href="">View Code</Link>
          </Links>
        </ProjectBlock>

        <ProjectBlock>
          <PictureWrapper>
            <Image src="./assets/images/thumbnail-project-2-small.webp" alt="Project 2 screenshot - E-Learning Landing Page"/>
            <DesktopOverlays>
              <Link href="">View Project</Link>
              <Link href="">View Code</Link>
            </DesktopOverlays>
          </PictureWrapper>
          <ProjectName>E-Learning Landing Page</ProjectName>
          <Technologies>
            <TechName>HTML</TechName>
            <TechName>CSS</TechName>
          </Technologies>
          <Links>
            <Link href="">View Project</Link>
            <Link href="">View Code</Link>
          </Links>
        </ProjectBlock>

        <ProjectBlock>
          <PictureWrapper>
            <Image src="./assets/images/thumbnail-project-3-small.webp" alt="Project 3 screenshot - Todo Web App" />
            <DesktopOverlays>
              <Link href="">View Project</Link>
              <Link href="">View Code</Link>
            </DesktopOverlays>
          </PictureWrapper>
          <ProjectName>Todo Web App</ProjectName>
          <Technologies>
            <TechName>HTML</TechName>
            <TechName>CSS</TechName>
            <TechName>Javascript</TechName>
          </Technologies>
          <Links>
            <Link href="">View Project</Link>
            <Link href="">View Code</Link>
          </Links>
        </ProjectBlock>

        <ProjectBlock>
          <PictureWrapper>
            <Image src="./assets/images/thumbnail-project-4-small.webp" alt="Project 4 screenshot - Entertainment Web App"/>
            <DesktopOverlays>
              <Link href="">View Project</Link>
              <Link href="">View Code</Link>
            </DesktopOverlays>
          </PictureWrapper>
          <ProjectName>Entertainment Web App</ProjectName>
          <Technologies>
            <TechName>HTML</TechName>
            <TechName>CSS</TechName>
            <TechName>Javascript</TechName>
          </Technologies>
          <Links>
            <Link href="">View Project</Link>
            <Link href="">View Code</Link>
          </Links>
        </ProjectBlock>

        <ProjectBlock>
          <PictureWrapper>
            <Image src="./assets/images/thumbnail-project-5-small.webp" alt="Project 5 screenshot - Memory Game"/>
            <DesktopOverlays>
              <Link href="">View Project</Link>
              <Link href="">View Code</Link>
            </DesktopOverlays>
          </PictureWrapper>
          <ProjectName>Memory Game</ProjectName>
          <Technologies>
            <TechName>HTML</TechName>
            <TechName>CSS</TechName>
            <TechName>Javascript</TechName>
          </Technologies>
          <Links>
            <Link href="">View Project</Link>
            <Link href="">View Code</Link>
          </Links>
        </ProjectBlock>

        <ProjectBlock>
          <PictureWrapper>
            <Image src="./assets/images/thumbnail-project-6-small.webp" alt="Project 6 screenshot - Art Gallery Showcase"/>
            <DesktopOverlays>
              <Link href="">View Project</Link>
              <Link href="">View Code</Link>
            </DesktopOverlays>
          </PictureWrapper>
          <ProjectName>Art Gallery Showcase</ProjectName>
          <Technologies>
            <TechName>HTML</TechName>
            <TechName>CSS</TechName>
            <TechName>Javascript</TechName>
          </Technologies>
          <Links>
            <Link href="">View Project</Link>
            <Link href="">View Code</Link>
          </Links>
        </ProjectBlock>
      </ProjectsGallery>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 80px 16px;

  @media ${QUERIES.tabletAndUp} {
    padding: 100px 30px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 140px 165px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font: var(--font-h1-mobile);
  color: var(--color-white);

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-h1-tablet);
  }

  @media ${QUERIES.laptopAndUp} {
    font: var(--font-h1-desktop);
  }
`;

const ContactLink = styled.a`
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

const ProjectsGallery = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 24px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 80px;
    gap: 70px 30px;
  }
`;

const ProjectBlock = styled.article``;

const DesktopOverlays = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    position: absolute;
    background-color: var(--color-offblack);
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;

    &:hover {
      opacity: 0.8;
      transition: opacity .2s ease-in; 
    }
  }
`;

const PictureWrapper = styled.div`
  @media ${QUERIES.laptopAndUp} {
    position: relative;

  }
`;

const Image = styled.img`
  width: 100%;
  display: block;

  @media ${QUERIES.laptopAndUp} {
  }
`;



const ProjectName = styled.h3`
  margin-top: 20px;
  font: var(--font-h3);
  color: var(--color-white);
  text-transform: uppercase;
`;

const Technologies = styled.div`
  margin-top: 11px;
  display: flex;
  gap: 18px;
`;

const TechName = styled.p`
  font: var(--font-project-tech);
  color: var(--color-gray);
  text-transform: uppercase;
`;

const Links = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 30px;

  @media ${QUERIES.laptopAndUp} {
    display: none;
`;

const Link = styled.a`
  font: var(--font-link);
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.14288rem;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--color-green);
  opacity: 1;
  &:hover {
    filter: invert(0.4) sepia(1) saturate(7.1) hue-rotate(93.6deg) brightness(1);
    color: var(--color-green);
  }
`;

export default Projects;
