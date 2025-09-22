import { DATA } from '@/modules/mock/products';
import ProductDetail from '@/modules/products/components/ProductDetail';
import ProductListView from '@/modules/products/views/ProductListView';
import React from 'react';

async function page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;
  const product = DATA[0];
  return <ProductDetail {...product} />;
}

export default page;
