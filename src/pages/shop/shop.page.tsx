import { lazy, Suspense } from 'react';

import Spinner from '../../components/spinner/spinner.component';
const Products = lazy(() =>
  delayForDemo(import('../../components/products/products.component'))
);

const ShopPage = () => {
  return (
    <div>
      <h1>Shop</h1>
      <Suspense fallback={<Spinner />}>
        <Products />
      </Suspense>
    </div>
  );
};

// Add a fixed delay so you can see the loading state
function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default ShopPage;
