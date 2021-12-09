import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getCacheFileName(cache: string) {
  return `utils/temp/${cache}.json`;
}

function getMDXBySlug(cache: string, slug: string) {
  // read JSON file that maps each slug to a mdx file
  const rawdata = fs.readFileSync(getCacheFileName(cache));
  const mdxFilepathBySlug = JSON.parse((rawdata as unknown) as string);

  const fullPath = mdxFilepathBySlug[slug];
  const source = fs.readFileSync(fullPath, 'utf8');

  return {
    source,
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

async function fetchFiles(targetPath: string) {
  const files = await fs.promises.readdir(targetPath);
  const fetchedFiles: string[] = [];

  for (const file of files) {
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

async function getAllMdx(cache: string, path: string) {
  const allMDX = await fetchFiles(path);
  const mdxData = allMDX.map((filepath) => getSlugByFilepath(filepath));

  // Saving a map of slugs and the filepath to their mdx in a JSON file
  const mdxFilepathBySlug = mdxData.reduce((acc, mdx) => {
    return { ...acc, [mdx.slug]: mdx.filepath };
  }, {});

  const data = JSON.stringify(mdxFilepathBySlug, null, 2);
  fs.writeFileSync(getCacheFileName(cache), data);

  return mdxData;
}

const componentsPath = path.resolve('../../packages/components');

function getComponentSourceBySlug(slug: string) {
  return getMDXBySlug('components', slug);
}
function getComponentsMDX() {
  return getAllMdx('components', componentsPath);
}

export { getComponentSourceBySlug, getComponentsMDX };
