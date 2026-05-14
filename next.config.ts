import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
  },
  // This ensures your custom "tours" and "expertises" routes 
  // work correctly as static HTML files
  trailingSlash: true, 
};

export default nextConfig;