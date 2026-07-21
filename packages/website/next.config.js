/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  env: {
    OSANO_CUSTOMER_ID: process.env.OSANO_CUSTOMER_ID || '',
    OSANO_CONFIGURATION_ID: process.env.OSANO_CONFIGURATION_ID || '',
  },
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
});
