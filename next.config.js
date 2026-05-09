/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Therapize',
  assetPrefix: '/Therapize/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
