import React, { useContext } from 'react';
import {
  ShoppingCartContext,
  ShoppingCartProduct,
} from '../../contexts/shopping-cart.context';

import './checkout-item.styles.scss';

interface Props {
  item: ShoppingCartProduct;
}

const CheckoutItem: React.FC<Props> = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { removeItem, addItem } = useContext(ShoppingCartContext);

  const removeItemHandler = () => {
    removeItem(item, true);
  };

  const addItemQuantityHandler = () => {
    addItem(item);
  };

  const removeItemQuantityHandler = () => {
    removeItem(item);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <button className="arrow" onClick={removeItemQuantityHandler}>
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={addItemQuantityHandler}>
          &#10095;
        </button>
      </div>
      <div className="price">${price * quantity}</div>
      <button className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
