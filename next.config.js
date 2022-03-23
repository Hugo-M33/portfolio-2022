/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MAINTENANCE : process.env.MAINTENANCE,
    MONGODB_URL : process.env.MONGODB_URL
  }
}

module.exports = nextConfig
