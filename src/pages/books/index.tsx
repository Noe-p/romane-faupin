import { SeoPage } from '@/components/Layout/SeoPage';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BooksPage } from '../../container/pages/Books';
import { PageBaseProps } from '../../types';

export default function Index(): JSX.Element {
  const { t } = useTranslation();
  const title = t('metas:books.title');
  const description = t('metas:books.description');
  const keywords = t('metas:books.keywords');

  return (
    <SeoPage title={title} description={description} keywords={keywords}>
      <BooksPage />
    </SeoPage>
  );
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
