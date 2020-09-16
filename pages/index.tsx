import React from 'react';
import { GetStaticProps } from 'next';
import { useSiteSettingsQuery, SiteSettingsDocument } from '@Generated';
import { MainLayout } from '@Components/Layout';

import { initializeApollo } from '@lib/Apollo';

const Home = (): JSX.Element => {
  const { data } = useSiteSettingsQuery();
  return <MainLayout>{data?.allSettings?.generalSettingsTitle}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: SiteSettingsDocument
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  };
};

export default Home;
