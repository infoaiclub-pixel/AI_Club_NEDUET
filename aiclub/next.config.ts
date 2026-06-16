import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ai-club-neduet-bcvi.vercel.app',
      },
    ],
  },
};

export default nextConfig;
