import { LayoutPage } from '@/components';
import { SeoPage } from '@/components/Layout/SeoPage';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { HomePage } from '../container/pages';
import { PageBaseProps } from '../types';

export default function IndexPage(): JSX.Element {
  const { t } = useTranslation();
  const title = t('metas:home.title');
  const description = t('metas:home.description');
  const keywords = t('metas:home.keywords');

  return (
    <SeoPage title={title} description={description} keywords={keywords}>
      <LayoutPage>
        <HomePage />
      </LayoutPage>
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
