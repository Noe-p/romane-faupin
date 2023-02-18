import { ReactNode } from 'react';
import styled from 'styled-components';
import { Footer } from '..';
import { COLORS } from '../../themes';
import { NavBar } from '../Navbar';

interface LayoutProps {
  children?: ReactNode;
  className?: string;
}

export function Layout(props: LayoutProps): JSX.Element {
  const { children, className } = props;

  return (
    <Main className={className}>
      <NavBar />
      <Page>{children}</Page>
      <Footer />
    </Main>
  );
}

const Main = styled.div``;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -5;
  background-color: ${COLORS.PRIMARY};
`;
