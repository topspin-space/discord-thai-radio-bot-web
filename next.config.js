/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_HOST: process.env.API_HOST,
    API_SESSION: '/api/v1/auth/discord/sessions',
    API_PROFILE: '/api/v1/discord/profile'
  },
  images: {
    domains: ['cdn.discordapp.com'],
    unoptimized: true
  }
}

module.exports = nextConfig
