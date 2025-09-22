import React from 'react';
import ProductItem from './ProductItem';
import { DATA } from '@/modules/mock/products';

function ProductList() {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {DATA.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
