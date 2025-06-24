import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false, // Remove X-Powered-By header for security
  images: {
    domains: ['prowebzimbabwe.org'], // Add your domain for image optimization
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compress: true, // Enable compression for better performance
  reactStrictMode: true,
  // Note: swcMinify is now enabled by default in Next.js 13+
  // i18n configuration is moved to app/[locale] directory structure in App Router
  
  // Disable symlinks to fix EPERM error during build
  output: 'standalone'
};

export default nextConfig;
