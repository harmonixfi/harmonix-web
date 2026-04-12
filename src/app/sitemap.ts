import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://harmonix.fi/',
      lastModified: new Date(),
    },
  ];
}
