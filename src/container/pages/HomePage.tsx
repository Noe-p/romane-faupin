import styled from 'styled-components';
import { Layout } from '../../components';
import { Header } from '../components';

export function HomePage(): JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Layout>
      <Header />
      <Main></Main>
    </Layout>
  );
}
const Main = styled.div`
  height: 100vh;
`;
