import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';
import ProductsList from './products-list.component';

interface Props {}

const Products: React.FC<Props> = ({}) => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {categoriesMap &&
        Object.keys(categoriesMap).map((category) => (
          <Fragment key={category}>
            <Link to={`/shop/${category}`}>
              <h2 className="category-title">{category.toUpperCase()}</h2>
            </Link>
            <ProductsList products={categoriesMap[category]} show={4} />
          </Fragment>
        ))}
    </>
  );
};

export default Products;
