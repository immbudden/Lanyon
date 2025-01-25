import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://consello.com/:path*", // Redirect all paths
        permanent: true, // Use 301 for permanent redirect
      },
    ];
  },
};

export default nextConfig;
