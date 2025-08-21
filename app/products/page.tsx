// app/products/page.tsx
import ProductsClient from './products-client';
// @ts-ignore
import * as productsMod from '@/lib/products';

export const dynamic = 'force-static';
export const revalidate = false;

export default function ProductsPage() {
  const catalog: any[] =
    (productsMod as any)?.products ??
    (productsMod as any)?.default ??
    [];

  const initial = { q: '', heat: 'All', cat: 'All Categories' };
  return <ProductsClient initial={initial} catalog={catalog} />;
}
