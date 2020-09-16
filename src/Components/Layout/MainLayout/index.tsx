import React from 'react';
import { MainHead, TopLine, Footer } from '@Components';

import { Global } from '@Components/Basic';

export const MainLayout: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <MainHead />
      <TopLine />
      <div>est</div>t
      <Global />
      <Footer />
    </>
  );
};
