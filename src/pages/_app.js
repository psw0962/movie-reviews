import React from 'react';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieReviews = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>MovieReviews</title>
    </Head>
    <Component />
  </>
);

export default wrapper.withRedux(MovieReviews);
