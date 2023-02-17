import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WorksPage } from '../../container/pages';
import { PageBaseProps } from '../../types';

export default function index(): JSX.Element {
  return <WorksPage />;
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
