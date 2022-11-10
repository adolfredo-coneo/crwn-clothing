import React, { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(ShoppingCartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length > 0 &&
        cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
