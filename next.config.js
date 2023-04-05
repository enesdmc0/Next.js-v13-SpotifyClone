/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "i.scdn.co"
      },
      {
        protocol: "https",
        hostname: "concerts.spotifycdn.com"
      },
      {
        protocol: "https",
        hostname: "t.scdn.co"
      },
      {
        protocol: "https",
        hostname: "charts-images.scdn.co"
      },
    
    ],
  },
}

module.exports = nextConfig
