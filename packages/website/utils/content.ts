import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getDataByFilepath(filepath: string) {
  const fileContents = fs.readFileSync(filepath, 'utf8');
  const frontMatter = matter(fileContents);

  return {
    content: fileContents,
    frontMatter,
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

async function getAllMdx(path: string) {
  const allMDX = await fetchFiles(path);
  const mdxData = allMDX.map((filepath) => getDataByFilepath(filepath));
  return mdxData;
}

const componentsPath = path.resolve('../../packages/components');

async function getComponentSourceBySlug(slug: string) {
  const mdxFiles = await getAllMdx(componentsPath);
  return mdxFiles.find((item) =>
    item.frontMatter.data.slug.includes(`components/${slug}`),
  );
}

async function getComponentsPaths() {
  const pages = await getAllMdx(componentsPath);

  const paths = pages
    .map((page) => {
      return page.frontMatter.data.slug;
    })
    .filter((slug) => slug.startsWith('/components/'))
    .map((slug) => {
      const sanitizedSlug = slug
        .replace('/components/', '')
        .split('/')
        .filter((item) => item);

      return {
        params: {
          slug: sanitizedSlug,
        },
      };
    });

  return paths;
}

export { getComponentSourceBySlug, getComponentsPaths };
