import React from 'react';
import Head from 'next/head';
import { useSiteSettingsQuery } from '@Generated';

export const MainHead = () => {
  const { data } = useSiteSettingsQuery();
  const title = data?.allSettings?.generalSettingsTitle ?? 'Sprijina.md';

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Sprijina.md – platformă de crowdfunding din Republica Moldova pentru proiecte comunitare, nevoi personale, urgențe medicale și caritate."
      />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keyword"
        content="newborn, screening, translational, research, network"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Sprijina.md – platformă de crowdfunding din Republica Moldova pentru proiecte comunitare, nevoi personale, urgențe medicale și caritate."
      />
      <meta property="og:image" content="/logo.svg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/images/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};
