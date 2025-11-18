/**
 * @type {import('next').NextConfig}
 */
const withTM = require('next-transpile-modules')(['@phosphor-icons/react']);

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = withTM(
  withMDX({
    experimental: {
      esmExternals: 'loose',
    },
    pageExtensions: ['ts', 'tsx', 'mdx'],
    async redirects() {
      return [
        {
          source: '/login',
          destination: '/api/auth/signin',
          permanent: true,
        },
      ];
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }),
);

module.exports = nextConfig;
