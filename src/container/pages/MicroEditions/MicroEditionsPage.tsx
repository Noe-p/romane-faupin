import router from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../../../components';
import { dataMicroEditions } from '../../../datas/microEditions';
import { ROUTES } from '../../../routing';
import { sortProjectsByDate } from '../../../services/utils';
import { Project } from '../../../types';
import { CardProject } from '../../components';

export function MicroEditionsPage(): JSX.Element {
  const [microsEdition, setMicrosEdition] = useState<Project[]>([]);

  useEffect(() => {
    setMicrosEdition(sortProjectsByDate(dataMicroEditions));
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
