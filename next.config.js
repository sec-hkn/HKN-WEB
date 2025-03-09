/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ["localhost", "happy-sky-02a622900.4.azurestaticapps.net"],
    formats:["image/avif","image/webp"],
  },
};

module.exports = nextConfig;
