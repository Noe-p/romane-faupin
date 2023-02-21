import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MicroEditionsPage } from '../../container/pages';
import { PageBaseProps } from '../../types';

export default function index(): JSX.Element {
  return <MicroEditionsPage />;
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
