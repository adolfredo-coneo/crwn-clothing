import { createContext, useEffect, useState } from 'react';

import SHOP_DATA from '../shop-data.json';

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

type ProductsContextType = {
  products: Product[] | null;
  setProducts: (products: Product[] | null) => void;
};

const defaultProductsContext: ProductsContextType = {
  products: [],
  setProducts: (products: Product[] | null) => {},
};

export const ProductsContext = createContext(defaultProductsContext);

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[] | null>([]);

  useEffect(() => {
    setProducts(SHOP_DATA);
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
