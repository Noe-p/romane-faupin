import { SeoPage } from '@/components/Layout/SeoPage';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WorksPage } from '../../container/pages';
import { PageBaseProps } from '../../types';

export default function Index(): JSX.Element {
  const { t } = useTranslation();
  const title = t('metas:works.title');
  const description = t('metas:works.description');
  const keywords = t('metas:works.keywords');

  return (
    <SeoPage title={title} description={description} keywords={keywords}>
      <WorksPage />
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
