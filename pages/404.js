import Link from 'next/link';

import Content from '../components/Content';

const Custom404 = () => {
  return (
    <Content>
      <p>Sorry, we can't find the page you are looking for 😦.</p>
      <p>Please <Link href="/">head back to the homepage</Link>.</p>
    </Content>
  );
};

export async function getStaticProps() {
  return {
    props: {
      seoTitle: '404',
      seoDescription: '404',
      headline: '404: Page not found',
      includeRegisterButton: false,
    },
  };
}

export default Custom404;