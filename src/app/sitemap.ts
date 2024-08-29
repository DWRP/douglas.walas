import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dwrp.github.io",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
