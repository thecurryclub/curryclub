import type { MetadataRoute } from 'next';
import { posts as newsPosts } from '@/lib/news';
import { cases as caseList } from '@/lib/cases';
// @ts-ignore
import * as productsMod from '@/lib/products';

const BASE_URL = 'https://thecurry.club';

const productList: any[] =
  (productsMod as any)?.products ??
  (productsMod as any)?.default ??
  [];

const safeDate = (v: any) => {
  const d = (v && (v.date || v.updatedAt || v.publishedAt || v.published || v.createdAt)) || new Date().toISOString();
  const t = Date.parse(d);
  return Number.isFinite(t) ? new Date(t) : new Date();
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/how-it-works`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/faqs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/case-studies`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/news`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
  ];

  const productPages: MetadataRoute.Sitemap = Array.isArray(productList)
    ? productList.filter((p) => p?.slug).map((p) => ({
        url: `${BASE_URL}/products/${p.slug}`,
        lastModified: safeDate(p),
        changeFrequency: 'weekly',
        priority: 0.6,
      }))
    : [];

  const casePages: MetadataRoute.Sitemap = Array.isArray(caseList)
    ? caseList.filter((c) => c?.slug).map((c) => ({
        url: `${BASE_URL}/case-studies/${c.slug}`,
        lastModified: safeDate(c),
        changeFrequency: 'weekly',
        priority: 0.6,
      }))
    : [];

  const newsPages: MetadataRoute.Sitemap = Array.isArray(newsPosts)
    ? newsPosts.filter((n) => n?.slug).map((n) => ({
        url: `${BASE_URL}/news/${n.slug}`,
        lastModified: safeDate(n),
        changeFrequency: 'weekly',
        priority: 0.5,
      }))
    : [];

  return [...staticPages, ...productPages, ...casePages, ...newsPages];
}
