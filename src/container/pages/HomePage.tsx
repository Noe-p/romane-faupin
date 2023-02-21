import router from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { H2, Layout } from '../../components';
import { dataBooks } from '../../datas/books';
import { dataWorks } from '../../datas/works';
import { ROUTES } from '../../routing';
import { Project, ProjectType } from '../../types';
import { CardProject, Header } from '../components';

export function HomePage(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(sortProjectsByDate([...dataWorks, ...dataBooks]));
  }, []);

  function sortProjectsByDate(projects: Project[]): Project[] {
    return projects.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }

  function justThreeProjects(projects: Project[]): Project[] {
    return projects.slice(0, 3);
  }

  return (
    <Layout>
      <Header />
      <Main>
        <H3Styled>{'Les derniers projets'}</H3Styled>
        {justThreeProjects(projects).map((project) => (
          <CardProject
            key={project.id}
            project={project}
            onClick={() => {
              return router.push(
                `${
                  project.type === ProjectType.BOOK
                    ? ROUTES.books
                    : ROUTES.works
                }/${project.id}`
              );
            }}
          />
        ))}
      </Main>
    </Layout>
  );
}
const Main = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const H3Styled = styled(H2)`
  margin-bottom: 50px;
  margin-top: 0;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
