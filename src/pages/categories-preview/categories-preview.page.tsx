import React from 'react';
import { lazy, Suspense } from 'react';

const Products = lazy(() =>
  delayForDemo(import('../../components/products/products.component'))
);
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreviewPage = () => {
  return (
    <>
      <h1>Shop</h1>
      <Suspense fallback={<Spinner />}>
        <Products />
      </Suspense>
    </>
  );
};

// Add a fixed delay so you can see the loading state
function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}

export default CategoriesPreviewPage;
