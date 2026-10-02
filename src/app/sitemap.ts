import { MetadataRoute } from 'next';
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants';
export default function sitemap(): MetadataRoute.Sitemap { return NAV_ITEMS.map(item => ({ url: `${SITE_CONFIG.url}${item.href === '/' ? '' : item.href}`, changeFrequency: 'monthly', priority: item.href === '/' ? 1 : 0.8 })); }
export const dynamic = 'force-static';
