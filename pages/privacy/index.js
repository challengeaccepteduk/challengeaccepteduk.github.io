import { Parser } from 'html-to-react';

import markdownToHtml from '../../lib/markdown-to-html';
import Content from '../../components/Content';

const PrivacyPolicy = ({ pageContent }) => {
  const parser = new Parser();
  return (
    <Content>{parser.parse(pageContent)}</Content>
  );
};

export async function getStaticProps(context) {
  const pageContent = await markdownToHtml('./privacy-policy/privacy-policy.md');

  return {
    props: {
      seoTitle: 'Privacy policy',
      seoDescription: 'Privacy policy',
      headline: 'Privacy policy',
      includeRegisterButton: false,
      pageContent,
    },
  };
}

export default PrivacyPolicy;