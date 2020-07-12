import { Parser } from 'html-to-react';

import markdownToHtml from '../../lib/markdown-to-html';
import Content from '../../components/Content';

const CookiePolicy = ({ pageContent }) => {
  const parser = new Parser();
  return (
    <Content>{parser.parse(pageContent)}</Content>
  );
};

export async function getStaticProps(context) {
  const pageContent = await markdownToHtml('./cookie-policy/cookie-policy.md');

  return {
    props: {
      pageTitle: 'Cookie policy',
      headline: 'Cookie policy',
      includeRegisterButton: false,
      pageContent,
    },
  };
}

export default CookiePolicy;