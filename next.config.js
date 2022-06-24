/** @type {import('next').NextConfig} */
module.exports = {
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
