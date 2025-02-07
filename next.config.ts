import type { NextConfig } from "next";

const isProd = process.env.NEXT_PUBLIC_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? '/landing' : '',
  assetPrefix: isProd ? '/landing/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
