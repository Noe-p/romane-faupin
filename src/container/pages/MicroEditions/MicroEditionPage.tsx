import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { H1, Image, Layout, P1, P2 } from '../../../components';
import { COLORS } from '../../../themes';
import { Project, ProjectType } from '../../../types';
import { MediasSwiper } from '../../components';

interface MicroEditionPageProps {
  idPage: string;
  className?: string;
}

export function MicroEditionPage(props: MicroEditionPageProps): JSX.Element {
  const { idPage, className } = props;
  const [microEdition, setMicroEdition] = useState<Project>();
  const [isMediaSwiperOpen, setIsMediaSwiperOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isNavClose, setIsNavClose] = useState(false);

  async function fetchMicroEdition(id: string) {
    await fetch('/projects/projects.json')
      .then((response) => response.json())
      .then((json) => {
        const types: Project[] = json.filter(
          (project: Project) => project.type === ProjectType.MICRO_EDITION
        );
        const microEdition: Project | undefined = types.find(
          (project: Project) => project.id === id
        );
        setMicroEdition(microEdition);
      });
  }

  useEffect(() => {
    fetchMicroEdition(idPage);
  }, []);

  return (
    <Layout isNavClose={isNavClose} className={className}>
      <Main>
        <Title>{microEdition?.name}</Title>
        {microEdition?.description?.map((desc, index) => (
          <Description key={index}>{desc}</Description>
        ))}
        <ImagesContainer>
          {microEdition?.medias.map((image, i) => (
            <ImageContainer
              key={image.id}
              onClick={() => {
                setIsMediaSwiperOpen(true);
                setCurrentImage(i);
                setIsNavClose(true);
              }}
            >
              <ImageStyled src={image.url} alt={image.id} />
              {image.description && (
                <DescriptionImageContainer>
                  <ArrowUpIconSyled />
                  <DescriptionImage>{image?.description}</DescriptionImage>
                </DescriptionImageContainer>
              )}
            </ImageContainer>
          ))}
        </ImagesContainer>
      </Main>
      <MediasSwiper
        isOpen={isMediaSwiperOpen}
        setIsOpen={() => {
          setIsMediaSwiperOpen(false);
          setIsNavClose(false);
        }}
        medias={microEdition?.medias.map((image) => image.url) || []}
        currentImage={currentImage}
      />
    </Layout>
  );
}

const Main = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 100px;
  background-color: white;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled(H1)`
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled(P1)`
  color: ${COLORS.DARK_GREY};
  text-align: center;
  margin-top: 15px;
  width: 70%;
  margin: 0 !important;
  padding-bottom: 5px !important;
  padding-top: 5px !important;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const ImagesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  cursor: pointer;
`;

const ImageStyled = styled(Image)`
  width: 100%;
`;

const DescriptionImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  max-width: 40%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const DescriptionImage = styled(P2)``;

const ArrowUpIconSyled = styled(ArrowUpIcon)`
  width: 5%;
  color: ${COLORS.BLACK};
  margin-right: 10px;
`;
