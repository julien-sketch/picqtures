import type { MetadataRoute } from "next";
import { topics } from "./_lib/topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://picqtures.fr";
  return ["/", "/offres", "/a-propos", "/mentions-legales", "/cgv", "/immobilier", ...topics.map(topic => `/accompagnement/${topic.slug}`)].map(path => ({ url: `${origin}${path}` }));
}
