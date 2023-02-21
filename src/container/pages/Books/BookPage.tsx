import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { H1, Image, Layout, P1, P2 } from '../../../components';
import { dataBooks } from '../../../datas/books';
import { COLORS } from '../../../themes';
import { Project } from '../../../types';
import { MediasSwiper } from '../../components';

interface BookPageProps {
  idPage: string;
  className?: string;
}

export function BookPage(props: BookPageProps): JSX.Element {
  const { idPage, className } = props;
  const [book, setBook] = useState<Project>();
  const [isMediaSwiperOpen, setIsMediaSwiperOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isNavClose, setIsNavClose] = useState(false);

  function fetchBook(id: string) {
    setBook(dataBooks.find((book) => book.id === id));
  }

  useEffect(() => {
    fetchBook(idPage);
  }, []);

  return (
    <Layout isNavClose={isNavClose} className={className}>
      <Main>
        <Title>{book?.name}</Title>
        <Description>{book?.description}</Description>
        <ImagesContainer>
          {book?.medias.map((image, i) => (
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
        medias={book?.medias.map((image) => image.url) || []}
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
`;

const Title = styled(H1)`
  text-align: center;
`;

const Description = styled(P1)`
  color: ${COLORS.DARK_GREY};
  text-align: center;
  margin-top: 15px;
  width: 70%;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    width: 100%;
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
