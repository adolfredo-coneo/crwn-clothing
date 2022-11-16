import React from 'react';

import { ShoppingCartProduct } from '../../contexts/shopping-cart.context';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

interface Props {
  item: ShoppingCartProduct;
}

const CartItem: React.FC<Props> = ({ item }) => {
  return (
    <CartItemContainer>
      <img src={item.imageUrl} alt={item.name} />
      <ItemDetails>
        <span className="name">{item.name}</span>
        <span className="price">
          {item.quantity} x ${item.price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
