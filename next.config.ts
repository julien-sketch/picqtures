import type { NextConfig } from "next";
import serviceRedirects from "./app/_lib/service-redirects.json";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: process.env.PICQTURES_NEXT_DIR || ".next",
  async redirects() {
    return serviceRedirects;
  },
};

export default nextConfig;
