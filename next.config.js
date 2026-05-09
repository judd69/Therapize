/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Therapize',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
