const withOptimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["127.0.0.1"],
    formats: ["image/avif", "image/webp"],
    disableStaticImages: true,
  },
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/products/1",
        permanent: true,
      },
    ];
  },
};

module.exports = withOptimizedImages(nextConfig);
