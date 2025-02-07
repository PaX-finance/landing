import type { NextConfig } from "next";

const isProd = process.env.NEXT_PUBLIC_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? '/nextjs-github-pages' : '',
  assetPrefix: isProd ? '/nextjs-github-pages/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
