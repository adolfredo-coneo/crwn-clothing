import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, toggleCartVisible } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
    toggleCartVisible();
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((product) => (
            <CartItem key={product.id} item={product} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
