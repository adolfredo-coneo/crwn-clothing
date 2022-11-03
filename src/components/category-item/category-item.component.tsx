import './category-item.styles.scss';

type Props = {
  category: any;
};

const CategoryItemComponent: React.FC<Props> = ({ category }) => {
  const { title, imageUrl } = category;
  
  return (
    <div className="category-container">
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
