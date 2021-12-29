import dotenv from 'dotenv';
import { writeFileSync } from 'fs';
import prettier from 'prettier';
import { getMdxPaths } from '../utils/content';

dotenv.config();

// todo: replace with f36.contentful.com when we release v4
const deploymentUrl = process.env.VERCEL_URL || 'v4-forma-36.vercel.app';
const deploymentUrlWithProtocol = `https://${deploymentUrl}`;

async function generateSitemap() {
  // a list of static pages
  // for now we only have `index.tsx`, so the url is an empty string
  const staticSlugs = ['', 'playground'];
  const mdxSlugs = (await getMdxPaths())
    .map((item) => item.params.slug)
    .map((slugs) => slugs.join('/'));

  const fullUrls = [...staticSlugs, ...mdxSlugs].map((staticPagePath) => {
    return `${deploymentUrlWithProtocol}/${staticPagePath}`;
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

async function generateRobots() {
  // eslint-disable-next-line no-sync
  writeFileSync(
    'public/robots.txt',
    `# *
User-agent: *
Allow: /

# Host
Host: ${deploymentUrlWithProtocol}

# Sitemaps
Sitemap: ${deploymentUrlWithProtocol}/sitemap.xml
`,
  );
}

async function run() {
  await generateSitemap();
  await generateRobots();
}

run();
