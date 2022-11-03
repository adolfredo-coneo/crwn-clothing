import React from 'react';

import { Category } from '../../types/category';
import CategoryItemComponent from '../category-item/category-item.component';
import './directory.styles.scss';

type Props = {
  categories: Category[];
};

const Directory: React.FC<Props> = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItemComponent key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
