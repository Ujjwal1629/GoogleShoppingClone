/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["assets.stickpng.com", "heroicons.com", "www.instagram.com"],
  },
};

module.exports = nextConfig;
