import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') ?? 'https://javieralonso.netlify.app'

  // Páginas estáticas
  const staticPages: Array<{ path: string; priority: string; changefreq: string }> = [
    { path: '/',                priority: '1.0', changefreq: 'weekly'  },
    { path: '/posts',           priority: '0.8', changefreq: 'weekly'  },
    { path: '/projects',        priority: '0.8', changefreq: 'monthly' },
    { path: '/experiences',     priority: '0.7', changefreq: 'monthly' },
    { path: '/design-patterns', priority: '0.6', changefreq: 'monthly' },
  ]

  // Páginas dinámicas de colecciones
  const posts       = await getCollection('posts',       (p) => !p.data.draft)
  const projects    = await getCollection('projects')
  const experiences = await getCollection('experiences')

  const dynamicPages = [
    ...posts.map((p) => ({
      path:        `/posts/${p.slug}`,
      priority:    '0.8',
      changefreq:  'monthly',
      lastmod:     p.data.startDate
        ? new Date(p.data.startDate).toISOString().split('T')[0]
        : undefined,
    })),
    ...projects.map((p) => ({
      path:        `/projects/${p.slug}`,
      priority:    '0.7',
      changefreq:  'monthly',
      lastmod:     p.data.startDate
        ? new Date(p.data.startDate).toISOString().split('T')[0]
        : undefined,
    })),
    ...experiences.map((e) => ({
      path:        `/experiences/${e.slug}`,
      priority:    '0.6',
      changefreq:  'yearly',
      lastmod:     e.data.startDate
        ? new Date(e.data.startDate).toISOString().split('T')[0]
        : undefined,
    })),
  ]

  const allPages = [...staticPages, ...dynamicPages]

  const urlEntries = allPages
    .map(({ path, priority, changefreq, lastmod }: any) => {
      const loc = `${baseUrl}${path}`
      return [
        `  <url>`,
        `    <loc>${loc}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : '',
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        `  </url>`,
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n')

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
