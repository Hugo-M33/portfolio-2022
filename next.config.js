/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MAINTENANCE : process.env.MAINTENANCE,
    MONGODB_URL : process.env.MONGODB_URL
  },
  async rewrites() {
    return {
      afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
    };
  },
}

module.exports = nextConfig
