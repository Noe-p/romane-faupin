import Lottie from 'lottie-react';
import styled from 'styled-components';
import LittleLoader from '../../../public//animations/loader.json';

interface LitteLoaderProps {
  className?: string;
}

export function LitteLoader(props: LitteLoaderProps): JSX.Element {
  const { className } = props;

  return (
    <Main className={className}>
      <Lottie animationData={LittleLoader} />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;
