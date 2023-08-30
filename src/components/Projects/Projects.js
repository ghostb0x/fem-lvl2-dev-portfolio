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
            <Image src="./assets/images/thumbnail-project-1-small.webp" />
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
            <Image src="./assets/images/thumbnail-project-2-small.webp" />
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
            <Image src="./assets/images/thumbnail-project-3-small.webp" />
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
            <Image src="./assets/images/thumbnail-project-4-small.webp" />
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
            <Image src="./assets/images/thumbnail-project-5-small.webp" />
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
            <Image src="./assets/images/thumbnail-project-6-small.webp" />
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
`;

const ContactLink = styled.a`
  font: var(--font-link);
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.14288rem;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--color-green);
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
`;

const ProjectBlock = styled.article``;

const PictureWrapper = styled.picture``;

const Image = styled.img`
  width: 100%;
  display: block;
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
`;

const Link = styled.a`
  font: var(--font-link);
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.14288rem;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--color-green);
`;

export default Projects;
