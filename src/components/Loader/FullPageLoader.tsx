import { useTranslation } from 'next-i18next';
import React from 'react';
import styled from 'styled-components';

export function FullPageLoader(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Main>
      <p>{t('common.loading')}</p>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;
