import { createContext, useState } from 'react';
import { Product } from './products.context';

type ShoppingCartProduct = Product & {
  quantity: number;
};

type shoppingCartContextType = {
  isCartOpen: boolean;
  products: ShoppingCartProduct[];
  toggleCartVisible: () => void;
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
};

const defaultShoppingCartContext: shoppingCartContextType = {
  isCartOpen: false,
  products: [],
  toggleCartVisible: () => {},
  addItem: (item: Product) => {},
  removeItem: (item: Product) => {},
};

export const ShoppingCartContext = createContext(defaultShoppingCartContext);

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState<ShoppingCartProduct[]>([]);

  const addItem = (item: Product) => {
    const existingItem = products.find((product) => product.id === item.id);
    if (existingItem) {
      setProducts((prevProds) =>
        prevProds.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setProducts((prevProds) => [...prevProds, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (item: Product) => {
    const existingItem = products.find((product) => product.id === item.id);
    if (existingItem && existingItem.quantity === 1) {
      setProducts((prevProds) =>
        prevProds.filter((product) => product.id !== item.id)
      );
    } else if (existingItem) {
      setProducts((prevProds) =>
        prevProds.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    } else return;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        isCartOpen,
        products,
        toggleCartVisible: () => setIsCartOpen((prev) => !prev),
        addItem,
        removeItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
