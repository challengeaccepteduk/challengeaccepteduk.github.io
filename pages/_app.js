import Head from 'next/head';

import './app.global.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PageContentWrapper from '../components/PageContentWrapper';

const CustomApp = ({ Component, pageProps }) => {
  const { pageTitle } = pageProps;

  return (
    <>
      <Head>
        <title>Challenge Accepted {pageTitle && `| ${pageTitle}`}</title>
      </Head>
      <Header {...pageProps} />
      <PageContentWrapper>
        <Component {...pageProps} />
      </PageContentWrapper>
      <Footer />
    </>
  );
};

export default CustomApp;