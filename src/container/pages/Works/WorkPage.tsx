import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { H1, Image, Layout, P1, P2 } from '../../../components';
import { dataWorks } from '../../../datas/works';
import { COLORS } from '../../../themes';
import { Project } from '../../../types';

interface WorkPageProps {
  idPage: string;
  className?: string;
}

export function WorkPage(props: WorkPageProps): JSX.Element {
  const { idPage, className } = props;
  const [work, setWork] = useState<Project>();

  function fetchWork(id: string) {
    setWork(dataWorks.find((work) => work.id === id));
  }

  useEffect(() => {
    fetchWork(idPage);
  }, []);

  return (
    <LaoutStyled className={className}>
      <Main>
        <Title>{work?.name}</Title>
        <Description>{work?.description}</Description>
        <ImagesContainer>
          {work?.medias.map((image) => (
            <ImageContainer key={image.id}>
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
    </LaoutStyled>
  );
}

const LaoutStyled = styled(Layout)`
  background-color: ${COLORS.PRIMARY};
`;

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

const Title = styled(H1)``;

const Description = styled(P1)`
  color: ${COLORS.BLACK};
`;

const ImagesContainer = styled.div`
  margin-top: 30px;
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
`;

const ImageStyled = styled(Image)`
  width: 100%;
`;

const DescriptionImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  max-width: 40%;
`;

const DescriptionImage = styled(P2)``;

const ArrowUpIconSyled = styled(ArrowUpIcon)`
  width: 30px;
  color: ${COLORS.BLACK};
  margin-right: 10px;
`;
