import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import ProductsList from '../../components/products/products-list.component';
import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';

const CategoryPage = (props: any) => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  if (!categoriesMap || !category) return null;

  return (
    <div>
      <h1 className="title">{category.toUpperCase()}</h1>
      <ProductsList products={categoriesMap[category]} />
    </div>
  );
};

export default CategoryPage;
