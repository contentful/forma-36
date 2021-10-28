import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const componentsPath = path.resolve('../../packages/components');

const slugToFilepathMap: { [key: string]: string } = {
  button: `${componentsPath}/button/Button.mdx`,
  card: `${componentsPath}/card/src/card/README.mdx`,
  form: `${componentsPath}/forms/src/form/Form.mdx`,
  'form-control': `${componentsPath}/forms/src/form-control/FormControl.mdx`,
  'text-input': `${componentsPath}/forms/src/text-input/TextInput.mdx`,
  textarea: `${componentsPath}/forms/src/textarea/Textarea.mdx`,
  'skeleton-row': `${componentsPath}/skeleton/src/SkeletonRow/README.mdx`,
};

function getPageBySlug(slug: string) {
  const fullPath = slugToFilepathMap[slug];
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

async function geltAllSlugs() {
  const allMDX = await fetchFiles(componentsPath);

  return allMDX.map((filepath) => getSlugByFilepath(filepath));
}

export { geltAllSlugs, getPageBySlug };
