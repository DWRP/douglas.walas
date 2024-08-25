import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const isGithubActions = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/",
  basePath: "/dwrp.github.io",
  images: {
    dangerouslyAllowSVG: true,
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
};

export default withNextIntl(nextConfig);
