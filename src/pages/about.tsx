import { LayoutPage } from '@/components';
import { SeoPage } from '@/components/Layout/SeoPage';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AboutPage } from '../container/pages';
import { PageBaseProps } from '../types';

export default function IndexPage(): JSX.Element {
  const { t } = useTranslation();
  const title = t('metas:about.title');
  const description = t('metas:about.description');
  const keywords = t('metas:about.keywords');

  return (
    <SeoPage title={title} description={description} keywords={keywords}>
      <LayoutPage>
        <AboutPage />
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
