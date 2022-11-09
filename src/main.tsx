import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ProductsProvider } from './contexts/products.context';
import { ShoppingCartProvider } from './contexts/shopping-cart.context';
import { UserProvider } from './contexts/user.context';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <ShoppingCartProvider>
            <App />
          </ShoppingCartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
