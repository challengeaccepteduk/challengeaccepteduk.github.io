import { Parser } from 'html-to-react';

import markdownToHtml from '../../lib/markdown-to-html';
import Content from '../../components/Content';

const AboutUs = ({ pageContent }) => {
  const parser = new Parser();
  return (
    <Content>{parser.parse(pageContent)}</Content>
  );
};

export async function getStaticProps(context) {
  const pageContent = await markdownToHtml('./about-us/about-us.md');

  return {
    props: {
      seoTitle: 'About us',
      seoDescription: 'About us',
      headline: 'About us',
      includeRegisterButton: false,
      pageContent,
    },
  };
}

export default AboutUs;