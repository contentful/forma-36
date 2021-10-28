import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const componentsPath = path.resolve('../../packages/components');

function getPageBySlug(slug: string) {
  // read JSON file that maps each slug to a mdx file
  const rawdata = fs.readFileSync('utils/mdxFilepathBySlug.json');
  const mdxFilepathBySlug = JSON.parse((rawdata as unknown) as string);

  const fullPath = mdxFilepathBySlug[slug];
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const fileName = fullPath.split('/').pop();
  const examplePath = path.join(
    fullPath.replace(fileName as string, ''),
    'examples',
  );
  let examples: string[] = [];
  let previews: string[] = [];

  if (fs.existsSync(examplePath)) {
    examples = fs.readdirSync(examplePath);
    previews = examples.map((example) => {
      const exampleContents = fs.readFileSync(
        path.join(examplePath, example),
        'utf8',
      );

      return exampleContents;
    });
  }

  return {
    slug,
    data,
    examples,
    previews,
    content,
  };
}

function getSlugByFilepath(filepath: string) {
  const fileContents = fs.readFileSync(filepath, 'utf8');
  const { data } = matter(fileContents);

  const slugArray = data.slug.split('/');
  const slug = slugArray[slugArray.length - 2];

  return {
    slug,
    filepath,
  };
}

async function fetchFiles(targetPath: any) {
  const files = await fs.promises.readdir(targetPath);
  const fetchedFiles = [];

  for (let file of files) {
    // ignore these directories
    if (['dist', 'node_modules'].includes(file)) {
      continue;
    }

    try {
      const filepath = path.join(targetPath, file);
      const stats = await fs.promises.lstat(filepath);

      // only store in the array files that are MDX
      if (stats.isFile() && /(.mdx)$/.test(filepath)) {
        fetchedFiles.push(filepath);
      }

      if (stats.isDirectory()) {
        const childFiles = await fs.promises.readdir(filepath);
        files.push(...childFiles.map((f) => path.join(file, f)));
      }
    } catch (err) {
      console.error(err);
    }
  }

  return fetchedFiles;
}

async function geltAllMDX() {
  const allMDX = await fetchFiles(componentsPath);
  const mdxData = allMDX.map((filepath) => getSlugByFilepath(filepath));

  // Saving a map of slugs and the filepath to their mdx in a JSON file
  const mdxFilepathBySlug = mdxData.reduce((acc, mdx) => {
    return { ...acc, [mdx.slug]: mdx.filepath };
  }, {});
  const data = JSON.stringify(mdxFilepathBySlug, null, 2);
  fs.writeFileSync('utils/mdxFilepathBySlug.json', data);

  return mdxData;
}

export { geltAllMDX, getPageBySlug };
