import React, { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ShoppingCartContext } from '../../contexts/shopping-cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { cartItems, toggleCartVisible } = useContext(ShoppingCartContext);

  return (
    <div className="cart-icon-container" onClick={toggleCartVisible}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
};

export default CartIcon;
