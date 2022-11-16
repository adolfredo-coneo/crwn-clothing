import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  CategoryContainer,
  Body,
} from './category-item.styles';

type Props = {
  category: any;
};

const CategoryItemComponent: React.FC<Props> = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <CategoryContainer onClick={goToCategory}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default CategoryItemComponent;
