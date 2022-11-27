import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

const Layout = ({ props, children, disablePaddingBottom = false }) => {
  return (
    <>
      <Helmet>
        {/* Add any sitewide scripts here */}
        <link rel="apple-touch-icon" sizes="180x180" href="pwa-assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="pwa-assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="194x194" href="pwa-assets/favicon-194x194.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="pwa-assets/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="pwa-assets/favicon-16x16.png" />
        <link rel="manifest" href="pwa-assets/site.webmanifest" />
        <link rel="mask-icon" href="pwa-assets/safari-pinned-tab.svg" color="#ffffff" />
        <link rel="shortcut icon" href="pwa-assets/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="pwa-assets/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Helmet>

      <Header />
      <main
        className={`${styles.main} ${
          disablePaddingBottom === true ? styles.disablePaddingBottom : ''
        }`}
        suppressHydrationWarning
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
