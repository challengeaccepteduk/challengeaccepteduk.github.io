import Head from 'next/head';

import './app.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

const CustomApp = ({ Component, pageProps }) => {
  const { pageTitle } = pageProps;

  return (
    <>
      <Head>
        <title>Challenge Accepted {pageTitle && `| ${pageTitle}`}</title>
      </Head>
      <Header {...pageProps} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default CustomApp;