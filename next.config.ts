import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'api.microlink.io' },
      { protocol: 'https', hostname: 'assets.aceternity.com' },
    ],
  },
  /* autres options de configuration ici */
};

export default nextConfig;