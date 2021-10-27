import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// const postsDirectory = path.join(process.cwd(), 'pages/_posts');
const forma36Dir = path.resolve('../../packages/components/button');

export function getPageBySlug(slug: string) {
  console.log('getPageBySlug >>>');

  const fileName = `${slug[0].toUpperCase()}${slug.slice(1)}.mdx`; // Button.mdx
  const fullPath = path.join(forma36Dir, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // console.log({ fullPath, data });

  // const demos = content
  //   .split('\n')
  //   .filter((line) => /^{{"(demo)": "(.*)"}}$/.test(line));

  // const examples = demos.map((demo) => {
  //   const matches = demo.match(/^{{"(demo)": "(?<filepath>.*)"}}$/);

  //   if (matches?.groups) {
  //     const { filepath } = matches.groups;

  //     console.log(filepath);

  //     const exampleFile = fs.readdirSync(`${forma36Dir}/examples/Basic.js`);

  //     console.log(exampleFile);
  //   }
  // });
  const examples = fs.readdirSync(path.join(forma36Dir, 'examples'));

  const previews = examples.map((example) => {
    const exampleContents = fs.readFileSync(
      path.join(forma36Dir, 'examples', example),
      'utf8',
    );

    return exampleContents;
  });

  return {
    slug, // button
    data,
    // demos,
    examples,
    previews,
    content,
  };
}

export function getAllPages() {
  // console.log('getAllPages >>>');

  const mdxFiles = fs
    .readdirSync(forma36Dir)
    .filter((slug) => slug.match(/(.mdx)$/));

  // console.log({ postsDirectory, forma36Dir, mdxFiles });
  // const demos = content
  //   .split('\n')
  //   .filter((line) => /^{{"(demo)": "(.*)"}}$/.test(line));

  // const examples = fs.readdirSync(path.join(forma36Dir, 'examples'));

  return mdxFiles.map((fileName) =>
    getPageBySlug(fileName.replace('.mdx', '').toLowerCase()),
  );
}
