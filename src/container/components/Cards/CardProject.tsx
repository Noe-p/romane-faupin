import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { H1, Image, P1 } from '../../../components';
import { COLORS } from '../../../themes';
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
      onMouseEnter={() => setProjectHover(project.id)}
      onMouseLeave={() => setProjectHover('')}
      className={className}
      {...props}
    >
      <div>
        <ProjectTitle white>{project.name}</ProjectTitle>
        {project.description && isMobile ? (
          <ProjectDescription className='desc' white>
            {project.description?.join(' ').length > 90
              ? project.description?.join(' ').slice(0, 90) + ' « ... »'
              : project.description?.join(' ')}
          </ProjectDescription>
        ) : (
          project.description?.map((desc, index) => (
            <ProjectDescription key={index} className='desc' white>
              {desc}
            </ProjectDescription>
          ))
        )}
      </div>
      <ProjectImageBackground
        src={project.backgroundImage.url}
        alt={project.backgroundImage.id}
      />
      <SeeMoreContainer $hover={projectHover === project.id || isMobile}>
        <SeeMore white>{'Voir le projet'}</SeeMore>
        <ArrowSmallRightIconStyled />
      </SeeMoreContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  min-height: 500px;
  display: flex;
  border-radius: 10px;
  border: 1px solid ${COLORS.DARK_GREY};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 50px;
  z-index: 1;
  padding: 20px;
  padding-bottom: 60px !important;

  img {
    transform: scale(1);
    transition: all 0.3s ease-in-out;
  }

  h1,
  .desc {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.3s ease-in-out;
    padding: 20px;
  }

  :hover h1,
  :hover .desc {
    opacity: 1;
    transform: translateY(0);
  }

  :hover img {
    transform: scale(1.05);
  }

  :hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 92%;
    height: auto;
    padding: 0;
    min-height: 300px;

    h1 {
      font-size: 2rem;
    }

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
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
`;

const ProjectDescription = styled(P1)`
  line-height: 1;
  margin: 0 !important;
  padding-bottom: 5px !important;
  padding-top: 5px !important;
  width: 70%;
  line-height: 1.2;

  @media (max-width: 768px) {
    padding-top: 0;
    margin-bottom: 30px;
    width: 90%;
  }
`;

const SeeMoreContainer = styled.div<{ $hover: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  opacity: ${({ $hover }) => ($hover ? 1 : 0)};
  transition: all 0.3s ease-in-out;

  p {
    font-size: 1.3rem;
    transition: all 0.2s ease-in-out;
    margin-right: ${({ $hover }) => ($hover ? '14px' : '0')};

    @media (max-width: 768px) {
      margin-right: 5px;
    }
  }
`;

const SeeMore = styled(P1)`
  margin-right: 10px;
`;

const ProjectImageBackground = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const ArrowSmallRightIconStyled = styled(ArrowSmallRightIcon)`
  color: white;
  width: 30px;
`;
