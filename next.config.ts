import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Next.js 16: cacheComponents n'est plus dans experimental
  cacheComponents: true,
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