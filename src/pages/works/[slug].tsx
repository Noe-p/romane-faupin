import { SeoPage } from '@/components/Layout/SeoPage';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FullPageLoader } from '../../components';
import { WorkPage } from '../../container/pages';
import { PageBaseProps } from '../../types';

type DynamicPageExempleProps = {
  idPage: string;
};

export default function DynamicPageExemple(
  props: DynamicPageExempleProps
): JSX.Element {
  const { idPage } = props;
  const { t } = useTranslation();
  const title = t(`metas:work.${idPage}.title`);
  const description = t(`metas:work.${idPage}.description`);
  const keywords = t(`metas:work.${idPage}.keywords`);

  if (!idPage) return <FullPageLoader />;
  return (
    <SeoPage title={title} description={description} keywords={keywords}>
      <WorkPage idPage={idPage} />
    </SeoPage>
  );
}

export async function getStaticProps({
  locale,
  params,
}: {
  locale: string;
  params: { slug: string };
}): Promise<PageBaseProps> {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      idPage: params.slug,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
