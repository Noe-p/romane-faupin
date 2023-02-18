import { ToggleMenuButton } from '@noe-p/react-buttons-components';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ROUTES } from '../../routing';
import { COLORS } from '../../themes';
import { H1, P1 } from '../Texts';

interface NavBarProps {
  className?: string;
}

export function NavBar(props: NavBarProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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
    <Main className={className}>
      <Content>
        <Left>
          <LogoContainer onClick={() => router.push(ROUTES.home)}>
            <TextNavigation
              $selected={
                `/${router.pathname.split('/')[1].split('/')[0]}` ===
                ROUTES.home
              }
            >
              {'Romane FAUPIN'}
            </TextNavigation>
          </LogoContainer>
        </Left>
        {!isMobile ? (
          <Right>
            <RightLink onClick={() => router.push(ROUTES.works)}>
              <TextNavigation
                $selected={
                  `/${router.pathname.split('/')[1].split('/')[0]}` ===
                  ROUTES.works
                }
              >
                {t('works')}
              </TextNavigation>
            </RightLink>
            <RightLink onClick={() => router.push(ROUTES.books)}>
              <TextNavigation
                $selected={
                  `/${router.pathname.split('/')[1].split('/')[0]}` ===
                  ROUTES.books
                }
              >
                {t('books')}
              </TextNavigation>
            </RightLink>
            <RightLink onClick={() => router.push(ROUTES.about)}>
              <TextNavigation
                $selected={
                  `/${router.pathname.split('/')[1].split('/')[0]}` ===
                  ROUTES.about
                }
              >
                {t('about.name')}
              </TextNavigation>
            </RightLink>
          </Right>
        ) : (
          <Right>
            <ToggleMenuButton
              isMenuOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <Menu $isOpen={isMenuOpen}>
              <MenuLink
                $selected={
                  `/${router.pathname.split('/')[1].split('/')[0]}` ===
                  ROUTES.home
                }
                onClick={() => router.push(ROUTES.home)}
              >
                {t('home.name')}
              </MenuLink>
              <MenuLink
                $selected={
                  `/${router.pathname.split('/')[1].split('/')[0]}` ===
                  ROUTES.works
                }
                onClick={() => router.push(ROUTES.works)}
              >
                {t('works')}
              </MenuLink>
              <MenuLink
                $selected={
                  `/${router.pathname.split('/')[1].split('/')[0]}` ===
                  ROUTES.books
                }
                onClick={() => router.push(ROUTES.books)}
              >
                {t('books')}
              </MenuLink>
              <MenuLink
                $selected={
                  `/${router.pathname.split('/')[1].split('/')[0]}` ===
                  ROUTES.about
                }
                onClick={() => router.push(ROUTES.about)}
              >
                {t('about.name')}
              </MenuLink>
            </Menu>
          </Right>
        )}
      </Content>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  z-index: 0;
`;

const Content = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Left = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 15px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 15px;
`;

const RightLink = styled.div`
  margin-left: 20px;

  cursor: pointer;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TextNavigation = styled(P1)<{ $selected?: boolean }>`
  text-transform: uppercase;
  color: ${(props) => (props.$selected ? COLORS.BLACK : COLORS.DARK_GREY)};
  :hover {
    color: black;
  }
  transition: all 0.3s;

  ::after {
    content: '';
    display: block;
    height: 2px;
    width: ${(props) => (props.$selected ? '100%' : '0')};
    background: black;
    transition: width 0.3s;
  }

  :hover::after {
    width: 100%;
    transition: width 0.3s;
  }
`;

const Menu = styled.div<{ $isOpen: boolean }>`
  height: ${(props) => (props.$isOpen ? '92vh' : '0vh')};
  width: 100vw;
  position: absolute;
  top: 100%;
  bottom: 0;
  left: 0;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  overflow: hidden;
`;

const MenuLink = styled(H1)<{ $selected?: boolean }>`
  text-transform: uppercase;
  color: ${(props) => (props.$selected ? COLORS.BLACK : COLORS.GREY)};
  margin: 20px;
  transform: translateY(-50px);
  cursor: pointer;
  font-size: 3.5rem;
`;
