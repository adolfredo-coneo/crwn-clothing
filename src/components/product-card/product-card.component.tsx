import React, { useContext } from 'react';

import { Product } from '../../contexts/categories.context';
import { ShoppingCartContext } from '../../contexts/shopping-cart.context';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

import './product-card.styles.scss';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItem } = useContext(ShoppingCartContext);

  const addToCardHandler = () => {
    addItem(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPES_CLASSES.base} onClick={addToCardHandler}>
        Add to Card
      </Button>
    </div>
  );
};

export default ProductCard;
