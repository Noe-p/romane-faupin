import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { Image, Layout, P1 } from '../../components';

export function AboutPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Layout>
      <Main>
        <ImagesStyled src='/romane.png' />
        <P1Styled>{t('about.description.part1')}</P1Styled>
        <P1Styled>{t('about.description.part2')}</P1Styled>
        <P1Styled>{t('about.description.part3')}</P1Styled>
        <P1Styled>{t('about.description.part4')}</P1Styled>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  margin-top: 100px;
  width: 70%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
`;

const P1Styled = styled(P1)`
  margin-top: 20px;
`;

const ImagesStyled = styled(Image)`
  width: 150px;
`;
