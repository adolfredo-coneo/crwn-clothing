import React from 'react';

import { Product } from '../../contexts/categories.context';
import ProductCard from '../product-card/product-card.component';

import './products.styles.scss';

interface Props {
  products: Product[];
  show?: number;
}

const ProductsList: React.FC<Props> = ({ products, show }) => {
  const productsToShow = show ? products.slice(0, show) : products;
  return (
    <div className="products-container">
      {productsToShow &&
        productsToShow.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductsList;
