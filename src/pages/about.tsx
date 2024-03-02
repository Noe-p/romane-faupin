import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AboutPage } from '../container/pages';
import { PageBaseProps } from '../types';
import { LayoutPage } from '@/components';

export default function IndexPage(): JSX.Element {
  return (
    <LayoutPage>
      <AboutPage />
    </LayoutPage>
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
