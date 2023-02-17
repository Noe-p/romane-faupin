import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BooksPage } from '../../container/pages/Books';
import { PageBaseProps } from '../../types';

export default function index(): JSX.Element {
  return <BooksPage />;
}

export async function getStaticProps({
  locale,
}: {
  locale: string;
}): Promise<PageBaseProps> {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
