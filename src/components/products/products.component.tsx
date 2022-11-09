import React, { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../product-card/product-card.component';
import './products.styles.scss';

interface Props {}

const Products: React.FC<Props> = ({}) => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products &&
        products.map(({ id, name, imageUrl, price }) => (
          <ProductCard key={id} name={name} price={price} imageUrl={imageUrl} />
        ))}
    </div>
  );
};

export default Products;
