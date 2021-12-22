import { getMdxPaths } from '../utils/content';

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const baseUrl =
    process.env.VERCEL_URL ??
    {
      development: 'http://localhost:3000',
      production: 'https://v4.f36.contentful.com',
    }[process.env.NODE_ENV];

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

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
