import { SeoPage } from '@/components/Layout/SeoPage';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MicroEditionsPage } from '../../container/pages';
import { PageBaseProps } from '../../types';

export default function Index(): JSX.Element {
  const { t } = useTranslation();
  const title = t('metas:micro-editions.title');
  const description = t('metas:micro-editions.description');
  const keywords = t('metas:micro-editions.keywords');

  return (
    <SeoPage title={title} description={description} keywords={keywords}>
      <MicroEditionsPage />
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
