import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { NavigationOptions } from 'swiper/types/components/navigation';
import { Image, Modal } from '../../../components';
import { COLORS } from '../../../themes';

interface MediasSwiperProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: () => void;
  medias: string[];
  currentImage?: number;
}

export function MediasSwiper(props: MediasSwiperProps): JSX.Element {
  const { className, isOpen, setIsOpen, medias, currentImage = 0 } = props;
  const [hideArrows, setHideArrows] = useState(false);

  SwiperCore.use([Navigation]);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <Modal isOpen={isOpen} onRequestClose={setIsOpen} className={className}>
      <Main>
        <CloseIconContainer onClick={setIsOpen} $hide={hideArrows}>
          <CloseIcon />
        </CloseIconContainer>
        <ArrowLeftIconStyled
          ref={navigationPrevRef}
          className='prev'
          $hide={hideArrows}
        />
        <ArrowRightIconStyled
          ref={navigationNextRef}
          className='next'
          $hide={hideArrows}
        />
        <ReactSwiperStyled
          navigation={{
            prevEl: 'prev',
            nextEl: 'next',
          }}
          onBeforeInit={(swiper) => {
            if (swiper && swiper.params && swiper.params.navigation) {
              (swiper.params.navigation as NavigationOptions).prevEl =
                navigationPrevRef.current;
              (swiper.params.navigation as NavigationOptions).nextEl =
                navigationNextRef.current;
            }
          }}
          slidesPerView={1}
          spaceBetween={50}
          initialSlide={currentImage}
        >
          {medias.map((media) => (
            <SwiperSlide key={media} onClick={() => setHideArrows(!hideArrows)}>
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

const CloseIconContainer = styled.div<{ $hide: boolean }>`
  position: absolute;
  top: 50px;
  right: 70px;
  cursor: pointer;
  z-index: 100;
  border-radius: 50%;
  background-color: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ $hide }) => ($hide ? 0 : 1)};

  @media (max-width: 768px) {
    top: 100px;
  }
`;

const CloseIcon = styled(XMarkIcon)`
  color: black;
  width: 40px;
  height: 40px;
`;

const ArrowLeftIconStyled = styled(ChevronLeftIcon)<{ $hide: boolean }>`
  position: absolute;
  top: 50%;
  left: 50px;
  cursor: pointer;
  z-index: 100;
  width: 60px;
  transform: translateY(-50%);
  background-color: white;
  padding: 10px;
  border-radius: 50%;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ $hide }) => ($hide ? 0 : 1)};

  @media (max-width: 768px) {
    left: 30px;
    width: 30px;
    padding: 5px;
  }
`;

const ArrowRightIconStyled = styled(ChevronRightIcon)<{ $hide: boolean }>`
  position: absolute;
  top: 50%;
  right: 50px;
  cursor: pointer;
  z-index: 100;
  width: 60px;
  transform: translateY(-50%);
  background-color: white;
  padding: 10px;
  border-radius: 50%;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ $hide }) => ($hide ? 0 : 1)};

  @media (max-width: 768px) {
    right: 30px;
    width: 30px;
    padding: 5px;
  }
`;
