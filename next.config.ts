import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  devIndicators: false,
  agentRules: false,
  // The dev server binds 0.0.0.0, but browsers open it as 127.0.0.1.
  // Without this, the HMR socket is blocked and client UI never hydrates.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
