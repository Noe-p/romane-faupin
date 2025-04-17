import { H1 } from '@/components/Texts/Texts';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Image } from '../../../components/Medias';
import { Project } from '../../../types';

interface CardProjectProps {
  className?: string;
  project: Project;
  onClick: () => void;
}

export function CardProject(props: CardProjectProps): JSX.Element {
  const { className, project } = props;
  const [projectHover, setProjectHover] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else setIsMobile(false);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <ProjectContainer
      className={`container ${className}`}
      onMouseEnter={() => setProjectHover(project.id)}
      onMouseLeave={() => setProjectHover('')}
      $hover={projectHover === project.id || isMobile}
      {...props}
    >
      <ProjectTitle>{project.name}</ProjectTitle>
      <ProjectImage
        src={project.backgroundImage.url}
        alt={project.backgroundImage.id}
      />
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div<{ $hover: boolean }>`
  width: 80%;
  height: auto;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  z-index: 1;

  img {
    transform: scale(1);
  }

  :hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 92%;
    height: auto;
    padding: 0;
    min-height: 300px;

    h1 {
      font-size: 2rem;
    }

    h1,
    .desc {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProjectTitle = styled(H1)`
  line-height: 1;
  padding: 20px;
  z-index: 1;
  color: black;
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
