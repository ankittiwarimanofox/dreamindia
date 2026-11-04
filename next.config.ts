import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This ensures your custom "tours" and "expertises" routes 
  // work correctly as static HTML files
  trailingSlash: true,
  // Inline critical CSS in <head> to remove the render-blocking stylesheet request
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
