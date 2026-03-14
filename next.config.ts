import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/adamsilva.github.io",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/adamsilva.github.io",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
