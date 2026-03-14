import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/adamsilva.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
