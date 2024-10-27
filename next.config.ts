import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'api.microlink.io' },
    ],
  },
  /* autres options de configuration ici */
};

export default nextConfig;