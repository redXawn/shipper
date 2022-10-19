/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['randomuser.me'],
  },
};

module.exports = nextConfig;
