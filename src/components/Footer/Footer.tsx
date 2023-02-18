import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { COLORS } from '../../themes';
import { Image } from '../Medias';
import { Link, P2 } from '../Texts';

interface FooterProps {
  className?: string;
}

export function Footer(props: FooterProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Main className={className}>
      <InfosContainer>
        <LinkStyled href='mailto:faupin.romane@gmail.com' target='_blank'>
          {t('faupin.romane@gmail.com')}
        </LinkStyled>
        <LinkStyled href='tel:0624745676' target='_blank'>
          {t('06 24 74 56 76')}
        </LinkStyled>
      </InfosContainer>
      <SocialMediasContainer>
        <a
          rel='noreferrer'
          href='https://www.facebook.com/romane.faupin'
          target='_blank'
        >
          <SocialLogo
            src='/social-icons/Black/Facebook_black.svg'
            alt='facebook'
          />
        </a>
        <a
          href='https://www.instagram.com/romane_fpn/?igshid=YmMyMTA2M2Y%3D'
          target='_blank'
          rel='noreferrer'
        >
          <SocialLogo
            src='/social-icons/Black/Instagram_black.svg'
            alt='instagram'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/romane-faupin-8ab717256/'
          target='_blank'
          rel='noreferrer'
        >
          <SocialLogo
            src='/social-icons/Black/LinkedIN_black.svg'
            alt='linkedin'
          />
        </a>
      </SocialMediasContainer>
      <CopyRight>
        {t('generics.designed')}
        <LinkStyled href='https://noe-philippe.com' target='_blank'>
          {'Noé PHILIPPE'}
        </LinkStyled>
      </CopyRight>
      <CopyRight>{t('generics.copyright')}</CopyRight>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${COLORS.LIGHT_GREY};
  width: 100%;
  bottom: 0;
  flex-direction: column;
  z-index: 100;
`;

const SocialMediasContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const SocialLogo = styled(Image)`
  width: 40px;
  height: 40px;
  margin: 0 15px;
`;

const CopyRight = styled(P2)`
  margin: 10px;
  color: ${COLORS.DARK_GREY};
  width: 80%;
  text-align: center;
`;

const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const LinkStyled = styled(Link)`
  color: ${COLORS.DARK_GREY};
  margin: 2px;
`;
