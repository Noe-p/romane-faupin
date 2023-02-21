import Lottie from 'lottie-react';
import styled from 'styled-components';
import LoaderAnimation from '../../../public//animations/loader.json';

export function FullPageLoader(): JSX.Element {
  return (
    <Main>
      <Loader>
        <Lottie animationData={LoaderAnimation} />
      </Loader>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const Loader = styled.div`
  width: 200px;
  height: 200px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
