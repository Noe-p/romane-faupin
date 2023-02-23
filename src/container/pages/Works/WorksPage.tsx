import router from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../../../components';
import { ROUTES } from '../../../routing';
import { sortProjectsByDate } from '../../../services/utils';
import { Project, ProjectType } from '../../../types';
import { CardProject } from '../../components';

export function WorksPage(): JSX.Element {
  const [works, setWorks] = useState<Project[]>([]);

  async function fetchWorks() {
    await fetch('/datas.json')
      .then((response) => response.json())
      .then((json) => {
        const works: Project[] = json.filter(
          (project: Project) => project.type === ProjectType.WORK
        );
        setWorks(sortProjectsByDate(works));
      });
  }

  useEffect(() => {
    fetchWorks();
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
`;
