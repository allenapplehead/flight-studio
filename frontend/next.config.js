/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  source: "/app/:path*",
  destination: "http://localhost:5000/app/:path*",
};

module.exports = nextConfig;
