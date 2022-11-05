/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  source: "/app/:path*",
  destination: "http://localhost:5000/app/:path*",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
       // for webpack 5 use
       // { and: [/\.(js|ts)x?$/] }
      },
      use: ['@svgr/webpack'],
    });
  },

};

module.exports = nextConfig;
