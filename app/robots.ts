import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/',
      crawlDelay: 10,
    },
    sitemap: 'https://content.mandorakannu.xyz/sitemap.xml',
  }
}