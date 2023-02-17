import router from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../../../components';
import { dataBooks } from '../../../datas/books';
import { ROUTES } from '../../../routing';
import { Project } from '../../../types';
import { CardProject } from '../../components';

export function BooksPage(): JSX.Element {
  const [books, setBooks] = useState<Project[]>([]);

  useEffect(() => {
    setBooks(dataBooks);
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
  margin-bottom: 100px;
`;
