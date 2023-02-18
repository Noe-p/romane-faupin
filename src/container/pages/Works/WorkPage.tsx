import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { H1, Image, Layout, P1, P2 } from '../../../components';
import { dataWorks } from '../../../datas/works';
import { COLORS } from '../../../themes';
import { Project } from '../../../types';
import { MediasSwiper } from '../../components';

interface WorkPageProps {
  idPage: string;
  className?: string;
}

export function WorkPage(props: WorkPageProps): JSX.Element {
  const { idPage, className } = props;
  const [work, setWork] = useState<Project>();
  const [isMediaSwiperOpen, setIsMediaSwiperOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isNavClose, setIsNavClose] = useState(false);

  function fetchWork(id: string) {
    setWork(dataWorks.find((work) => work.id === id));
  }

  useEffect(() => {
    fetchWork(idPage);
  }, []);

  return (
    <Layout isNavClose={isNavClose} className={className}>
      <Main>
        <Title>{work?.name}</Title>
        <Description>{work?.description}</Description>
        <ImagesContainer>
          {work?.medias.map((image, i) => (
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
        medias={work?.medias.map((image) => image.url) || []}
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
  background-color: ${COLORS.PRIMARY};
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 100px;
  background-color: ${COLORS.WHITE};
`;

const Title = styled(H1)`
  text-align: center;
`;

const Description = styled(P1)`
  color: ${COLORS.DARK_GREY};
  text-align: center;
  margin-top: 15px;
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
