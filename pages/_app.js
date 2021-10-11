import Head from 'next/head';

import './app.global.css';
import Router from "next/router";
import withGA from "next-ga";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageContentWrapper from '../components/PageContentWrapper';
import Safe from "react-safe"

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
      <Safe.script src="https://assets.seedrs.com/campaign-scripts/challengeaccepted-v1.js" />
    </>
  );
};

export default withGA("UA-164273150-1", Router)(CustomApp);
