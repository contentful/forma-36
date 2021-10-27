import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'pages/_posts');
const forma36Dir = path.resolve('../../packages/components/button');

export function getPageBySlug(slug: string) {
  console.log('getPageBySlug >>>');

  const fileName = `${slug[0].toUpperCase()}${slug.slice(1)}.mdx`; // Button.mdx
  const fullPath = path.join(forma36Dir, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  console.log({ fullPath, data });

  return {
    slug, // button
    data,
    content,
  };
}

export function getAllPages() {
  console.log('getAllPages >>>');

  const mdxFiles = fs
    .readdirSync(forma36Dir)
    .filter((slug) => slug.match(/(.mdx)$/));

  console.log({ postsDirectory, forma36Dir, mdxFiles });

  return mdxFiles.map((fileName) =>
    getPageBySlug(fileName.replace('.mdx', '').toLowerCase()),
  );
}
