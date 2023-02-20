import { ReactNode } from 'react';
import styled from 'styled-components';
import { Footer } from '..';
import { NavBar } from '../Navbar';

interface LayoutProps {
  children?: ReactNode;
  className?: string;
  isNavClose?: boolean;
}

export function Layout(props: LayoutProps): JSX.Element {
  const { children, className, isNavClose } = props;

  return (
    <Main className={className}>
      <NavBar isClose={isNavClose} />
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
  min-height: 70vh;
`;
