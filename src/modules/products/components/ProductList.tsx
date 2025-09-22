import React from 'react';
import { DATA } from '../mock/products';
import ProductItem from './ProductItem';

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
