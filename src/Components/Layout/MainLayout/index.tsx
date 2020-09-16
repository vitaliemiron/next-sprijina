import React from 'react';
import { MainHead, TopLine, Footer, Navbar } from '@Components';

import { Global } from '@Components/Basic';

export const MainLayout: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <MainHead />
      <TopLine />
      <Navbar />
      <div>est</div>t
      <Global />
      <Footer />
    </>
  );
};
