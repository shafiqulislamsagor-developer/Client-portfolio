/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: "http://localhost:3000/api",
  },
  images: {
    domains: ["fakeimg.pl"],
  },
};

module.exports = nextConfig;
