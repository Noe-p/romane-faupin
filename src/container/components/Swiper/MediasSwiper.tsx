import { XMarkIcon } from '@heroicons/react/24/solid';
import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Image, Modal } from '../../../components';
import { COLORS } from '../../../themes';

interface MediasSwiperProps {
  children?: ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: () => void;
  medias: string[];
  currentImage?: number;
}

export function MediasSwiper(props: MediasSwiperProps): JSX.Element {
  const {
    children,
    className,
    isOpen,
    setIsOpen,
    medias,
    currentImage = 0,
  } = props;

  SwiperCore.use([Navigation]);

  useEffect(() => {
    console.log('MediasSwiper useEffect', medias);
  }, [medias]);

  return (
    <Modal isOpen={isOpen} onRequestClose={setIsOpen}>
      <Main>
        <CloseIconContainer onClick={setIsOpen}>
          <CloseIcon />
        </CloseIconContainer>
        <ReactSwiperStyled
          navigation
          slidesPerView={1}
          spaceBetween={50}
          initialSlide={currentImage}
        >
          {medias.map((media) => (
            <SwiperSlide key={media}>
              <ImageContainer>
                <ImageStyled src={media} alt={media} />
              </ImageContainer>
            </SwiperSlide>
          ))}
        </ReactSwiperStyled>
      </Main>
    </Modal>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.LIGHT_GREY};
  z-index: 100;
`;

const ReactSwiperStyled = styled(ReactSwiper)`
  width: 100%;
  height: 100%;
  position: relative;
`;
const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageStyled = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CloseIconContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
  z-index: 100;
  border-radius: 50%;
  background-color: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseIcon = styled(XMarkIcon)`
  color: black;
  width: 40px;
  height: 40px;
`;
