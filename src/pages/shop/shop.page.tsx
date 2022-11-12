import { Route, Routes } from 'react-router-dom';

import CategoriesPreviewPage from '../categories-preview/categories-preview.page';
import CategoryPage from '../category/category.page';

const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
};

export default ShopPage;
