import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // 'ppr' a été remplacé par 'cacheComponents' dans Next.js 16
    cacheComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
      {
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
};

export default nextConfig;