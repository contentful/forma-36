import dotenv from 'dotenv';
import { writeFileSync } from 'fs';
import prettier from 'prettier';
import { getMdxPaths } from '../utils/content';

dotenv.config();

async function generate() {
  // todo: replace with f36.contentful.com when we release v4
  const baseUrl = 'https://v4-forma-36.vercel.app';

  const staticSlugs = [''];
  const mdxSlugs = (await getMdxPaths())
    .map((item) => item.params.slug)
    .map((slugs) => slugs.join('/'));

  const fullUrls = [...staticSlugs, ...mdxSlugs].map((staticPagePath) => {
    return `${baseUrl}/${staticPagePath}`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${fullUrls
      .map((url) => {
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
      })
      .join('')}
  </urlset>
`;

  const formatted = prettier.format(sitemap, {
    parser: 'html',
  });

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted);
}

async function run() {
  await generate();
}

run();
