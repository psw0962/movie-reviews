import React from 'react';
import Head from 'next/head';

const MovieReviews = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>MovieReviews</title>
    </Head>
    <Component />
  </>
);

export default MovieReviews;
