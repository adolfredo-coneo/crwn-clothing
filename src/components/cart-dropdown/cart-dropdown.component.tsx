import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, toggleCartVisible } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
    toggleCartVisible();
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((product) => (
            <CartItem key={product.id} item={product} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
