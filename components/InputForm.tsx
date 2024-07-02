import React, { useState } from 'react';
import { Category, Item } from '../types';

interface InputFormProps {
  onAddItem: (item: Item) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>(Object.values(Category));
  const [newCategory, setNewCategory] = useState('');

  const handleAddItem = () => {
    if (itemName.trim() !== '' && selectedCategory !== '') {
      onAddItem({ name: itemName, category: selectedCategory });
      setItemName('');
      setSelectedCategory('');
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your desires..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select category...</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={handleAddItem}>Add Item</button>
      <div>
        <input
          type="text"
          placeholder="Add new category..."
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
    </div>
  );
};

export default InputForm;
