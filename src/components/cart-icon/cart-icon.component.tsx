import React, { useContext } from 'react';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { cartItems, toggleCartVisible } = useContext(ShoppingCartContext);

  return (
    <CartIconContainer onClick={toggleCartVisible}>
      <ShoppingIcon />
      <ItemCount>{cartItems.length}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
