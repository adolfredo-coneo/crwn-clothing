import { createContext, useEffect, useState } from 'react';
import { Product } from './products.context';

export type ShoppingCartProduct = Product & {
  quantity: number;
};

type shoppingCartContextType = {
  isCartOpen: boolean;
  cartItems: ShoppingCartProduct[];
  cartTotal: number;
  toggleCartVisible: () => void;
  addItem: (item: Product) => void;
  removeItem: (item: Product, removeAll?: boolean) => void;
};

const defaultShoppingCartContext: shoppingCartContextType = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  toggleCartVisible: () => {},
  addItem: (item: Product) => {},
  removeItem: (item: Product, removeAll?: boolean) => {},
};

export const ShoppingCartContext = createContext(defaultShoppingCartContext);

const calculateCartTotal = (cartItems: ShoppingCartProduct[]) => {
  return cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
};

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setProducts] = useState<ShoppingCartProduct[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(calculateCartTotal(cartItems));
  }, [cartItems]);

  const addItem = (item: Product) => {
    const existingItem = cartItems.find((product) => product.id === item.id);
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

  const removeItem = (item: Product, removeAll = false) => {
    const existingItem = cartItems.find((product) => product.id === item.id);
    if (existingItem && (existingItem.quantity === 1 || removeAll)) {
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
        cartItems,
        cartTotal,
        toggleCartVisible: () => setIsCartOpen((prev) => !prev),
        addItem,
        removeItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
