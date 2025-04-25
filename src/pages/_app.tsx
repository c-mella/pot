import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import '~shared/fonts/fonts.scss';
import '~shared/styles/global.scss';
import usePreferredColorScheme from '~hooks/usePreferredColorScheme';

function MyApp({ Component, pageProps }) {

  const faviconFolder = usePreferredColorScheme();

  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href={`${faviconFolder}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${faviconFolder}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${faviconFolder}/favicon-16x16.png`} />
        <link rel="icon" type="image/png" sizes="192x192" href={`${faviconFolder}/android-chrome-192x192.png`} />
        <link rel="icon" type="image/png" sizes="512x512" href={`${faviconFolder}/android-chrome-512x512.png`} />
      </Head>
        <Component {...pageProps} />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;