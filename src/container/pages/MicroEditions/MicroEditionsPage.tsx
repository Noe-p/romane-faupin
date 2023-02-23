import router from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../../../components';
import { ROUTES } from '../../../routing';
import { sortProjectsByDate } from '../../../services/utils';
import { Project, ProjectType } from '../../../types';
import { CardProject } from '../../components';

export function MicroEditionsPage(): JSX.Element {
  const [microsEdition, setMicrosEdition] = useState<Project[]>([]);

  async function fetchMicroEditions() {
    await fetch('/datas.json')
      .then((response) => response.json())
      .then((json) => {
        const microEditions: Project[] = json.filter(
          (project: Project) => project.type === ProjectType.MICRO_EDITION
        );
        setMicrosEdition(sortProjectsByDate(microEditions));
      });
  }

  useEffect(() => {
    fetchMicroEditions();
  }, []);

  return (
    <Layout>
      <Main>
        {microsEdition.map((microEdition) => (
          <CardProject
            key={microEdition.id}
            onClick={() =>
              router.push(`${ROUTES.microsEditions}/${microEdition.id}`)
            }
            project={microEdition}
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
