const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath:
    process.env.NODE_ENV === "production" ? "/qaisermajeed.github.io" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/qaisermajeed.github.io/" : "",
  trailingSlash: true,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../"),
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

module.exports = nextConfig;
