import { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type CategoriesMap = Record<string, Product[]>;

type CategoriesContextType = {
  categoriesMap: CategoriesMap | null;
  setCategoriesMap: (categoriesMap: CategoriesMap | null) => void;
};

const defaultCategoriesContext: CategoriesContextType = {
  categoriesMap: {},
  setCategoriesMap: (categoriesMap: CategoriesMap | null) => {},
};

export const CategoriesContext = createContext(defaultCategoriesContext);

interface CategoriesProviderProps {
  children: React.ReactNode;
}

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const [categoriesMap, setCategoriesMap] = useState<CategoriesMap | null>({});

  useEffect(() => {
    const fetchShopData = async () => {
      const shopData = await getCategoriesAndDocuments();
      setCategoriesMap(shopData);
    };
    fetchShopData();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap, setCategoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};
