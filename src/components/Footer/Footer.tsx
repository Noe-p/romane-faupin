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
        <LinkStyled href='mailto:noephilippe29@gmail.com'>
          {t('noephilippe29@gmail.com')}
        </LinkStyled>
        <LinkStyled href='tel:0781533181'>{t('07 81 53 31 81')}</LinkStyled>
        <LinkStyled href='https://maps.google.com/maps?q=172+avenue+winston+churchill+rennes'>
          {t('16 avenue des Lilas - 35000 Rennes')}
        </LinkStyled>
      </InfosContainer>
      <SocialMediasContainer>
        <a href=''>
          <SocialLogo
            src='/social-icons/Black/Facebook_black.svg'
            alt='facebook'
          />
        </a>
        <a href=''>
          <SocialLogo
            src='/social-icons/Black/Instagram_black.svg'
            alt='instagram'
          />
        </a>
        <a href=''>
          <SocialLogo
            src='/social-icons/Black/Twitter_black.svg'
            alt='twitter'
          />
        </a>
        <a href=''>
          <SocialLogo
            src='/social-icons/Black/Linkedin_black.svg'
            alt='linkedin'
          />
        </a>
      </SocialMediasContainer>
      <CopyRight>
        {t('generics.designed')}
        <LinkStyled href='https://noe-philippe.com'>
          {'Noé PHILIPPE'}
        </LinkStyled>
      </CopyRight>
      <CopyRight>{t('generics.copyright')} </CopyRight>
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
`;
