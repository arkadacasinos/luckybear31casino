import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://luckybear31casino.vercel.app/', changeFrequency: 'monthly', priority: 1 }]
}
