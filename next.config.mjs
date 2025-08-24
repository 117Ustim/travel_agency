/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Allow cross-origin requests from specific IP addresses during development
  allowedDevOrigins: [
    '192.168.0.101:3000',
    '192.168.0.101',
    'localhost:3000',
    'localhost',
  ],
};

export default nextConfig;