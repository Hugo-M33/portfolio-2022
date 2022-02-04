/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MAINTENANCE : process.env.MAINTENANCE,
  }
}

module.exports = nextConfig
