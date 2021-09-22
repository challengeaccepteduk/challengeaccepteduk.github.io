import { Parser } from 'html-to-react';

import markdownToHtml from '../../lib/markdown-to-html';
import Content from '../../components/Content';

const PartnerWithUs = ({ pageContent }) => {
  const parser = new Parser();
  return (
    <Content>{parser.parse(pageContent)}</Content>
  );
};

export async function getStaticProps(context) {
  const pageContent = await markdownToHtml('./partner-with-us/partner-with-us.md');

  return {
    props: {
      seoTitle: 'Partner with us',
      seoDescription: 'Creating fun and interactive challenges',
      headline: 'Creating fun and interactive challenges',
      includeRegisterButton: false,
      pageContent,
    },
  };
}

export default PartnerWithUs;