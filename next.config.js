/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // `next export` doesn't support the default image optimizer
  images: {
    loader: "custom",
  },
}

module.exports = nextConfig
