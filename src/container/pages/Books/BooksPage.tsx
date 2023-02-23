import router from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../../../components';
import { ROUTES } from '../../../routing';
import { sortProjectsByDate } from '../../../services/utils';
import { Project, ProjectType } from '../../../types';
import { CardProject } from '../../components';

export function BooksPage(): JSX.Element {
  const [books, setBooks] = useState<Project[]>([]);

  async function fetchBooks() {
    await fetch('/datas.json')
      .then((response) => response.json())
      .then((json) => {
        const books: Project[] = json.filter(
          (project: Project) => project.type === ProjectType.BOOK
        );
        setBooks(sortProjectsByDate(books));
      });
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Layout>
      <Main>
        {books.map((book) => (
          <CardProject
            key={book.id}
            onClick={() => router.push(`${ROUTES.books}/${book.id}`)}
            project={book}
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
