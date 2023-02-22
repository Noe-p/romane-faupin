/* eslint-disable indent */
import router from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../../components';
import { dataWorks } from '../../datas/works';
import { ROUTES } from '../../routing';
import { sortProjectsByDate } from '../../services/utils';
import { Project, ProjectType } from '../../types';
import { CardProject, Header } from '../components';

export function HomePage(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(sortProjectsByDate([...dataWorks]));
  }, []);

  function justThreeProjects(projects: Project[]): Project[] {
    return projects.slice(0, 3);
  }

  function goToProjectPage(project: Project): string {
    switch (project.type) {
      case ProjectType.BOOK:
        return ROUTES.books;
      case ProjectType.MICRO_EDITION:
        return ROUTES.microsEditions;
      default:
        return ROUTES.works;
    }
  }

  return (
    <Layout>
      <Header />
      <Main>
        {justThreeProjects(projects).map((project) => (
          <CardProject
            key={project.id}
            project={project}
            onClick={() => {
              return router.push(`${goToProjectPage(project)}/${project.id}`);
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
