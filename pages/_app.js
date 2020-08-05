import Head from 'next/head';

import './app.global.css';
import Router from "next/router";
import withGA from "next-ga";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageContentWrapper from '../components/PageContentWrapper';

const CustomApp = ({ Component, pageProps }) => {
  const { seoTitle, seoDescription } = pageProps;

  return (
    <>
      <Head>
        <title>Challenge Accepted {seoTitle && `| ${seoTitle}`}</title>
        {seoDescription && <meta name="description" content={seoDescription} />}
      </Head>
      <Header {...pageProps} />
      <PageContentWrapper>
        <Component {...pageProps} />
      </PageContentWrapper>
      <Footer />
    </>
  );
};

export default withGA("UA-164273150-1", Router)(CustomApp);
