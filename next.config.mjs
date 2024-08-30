import analyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  assetPrefix: "/",
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "dwrp.github.io",
      },
    ],
  },
  trailingSlash: true,
  ...(isGithubActions && { output: "export" }),
  output: "export"
});

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
