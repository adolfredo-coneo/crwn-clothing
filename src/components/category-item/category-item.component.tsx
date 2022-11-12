import { useNavigate } from 'react-router-dom';

import './category-item.styles.scss';

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
    <div className="category-container" onClick={goToCategory}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItemComponent;
