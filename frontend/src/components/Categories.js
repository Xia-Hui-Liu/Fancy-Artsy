import React, { useState } from 'react';

const categories = [
  { name: 'Clothing', items: ['T-Shirts', 'Shirts', 'Pants'] },
  { name: 'Electronics', items: ['Smartphones', 'Laptops', 'Tablets'] },
  { name: 'Furniture', items: ['Chairs', 'Tables', 'Beds'] },
  { name: 'Toys', items: ['Action Figures', 'Dolls', 'Board Games'] },
  { name: 'Books', items: ['Fiction', 'Non-Fiction', 'Manga'] },
  { name: 'Movies', items: ['Action', 'Comedy', 'Horror'] },
  { name: 'Music', items: ['Rock', 'Pop', 'Hip-Hop'] },
  { name: 'Sports', items: ['Baseball', 'Basketball', 'Football'] },
  { name: 'Tools', items: ['Hand Tools', 'Power Tools', 'Gardening Tools'] },
];

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpen(!isOpen);
  };

  return (
    <div>
        {categories.map((category) => (
            <a href="#shop" key={category.name} onClick={() => handleCategoryClick(category)}>
            {category.name}
            </a>
        ))}
    </div>
  );
}

export default Categories;