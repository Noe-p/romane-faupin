import router from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../../../components';
import { dataWorks } from '../../../datas/works';
import { ROUTES } from '../../../routing';
import { Project } from '../../../types';
import { CardProject } from '../../components';

export function WorksPage(): JSX.Element {
  const [works, setWorks] = useState<Project[]>([]);

  useEffect(() => {
    setWorks(dataWorks);
  }, []);

  return (
    <Layout>
      <Main>
        {works.map((work) => (
          <CardProject
            onClick={() => router.push(`${ROUTES.works}/${work.id}`)}
            key={work.id}
            project={work}
          />
        ))}
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;
