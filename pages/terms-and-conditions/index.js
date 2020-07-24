import { Parser } from 'html-to-react';

import markdownToHtml from '../../lib/markdown-to-html';
import Content from '../../components/Content';

const TermsAndConditions = ({ pageContent }) => {
  const parser = new Parser();
  return (
    <Content>{parser.parse(pageContent)}</Content>
  );
};

export async function getStaticProps(context) {
  const pageContent = await markdownToHtml('./terms-and-conditions/terms-and-conditions.md');

  return {
    props: {
      seoTitle: 'Terms & Conditions',
      seoDescription: 'Terms & Conditions',
      headline: 'Terms & Conditions',
      includeRegisterButton: false,
      pageContent,
    },
  };
}

export default TermsAndConditions;