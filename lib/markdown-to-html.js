import fs from 'fs';
import path from 'path';

import remark from 'remark';
import html from 'remark-html';
import slug from 'remark-slug';

export default async function markdownToHtml(file) {
  const directoryPath = path.join(process.cwd(), 'pages');
  const markdownFile = fs.readFileSync(`${directoryPath}/${file}`, 'utf8')
  const result = await remark()
    // This adds IDs to headings that we can then anchor to
    .use(slug)
    .use(html)
    .process(markdownFile)

  return result.toString();
}