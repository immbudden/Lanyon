import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://consello.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
