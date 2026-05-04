import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://plastindustrial.com",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://plastindustrial.com/el-grupo",
      lastModified: new Date("2025-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://plastindustrial.com/empresas",
      lastModified: new Date("2025-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://plastindustrial.com/contacto",
      lastModified: new Date("2025-02-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://plastindustrial.com/privacidad",
      lastModified: new Date("2025-07-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://plastindustrial.com/aviso-legal",
      lastModified: new Date("2025-07-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://plastindustrial.com/cookies",
      lastModified: new Date("2025-07-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
