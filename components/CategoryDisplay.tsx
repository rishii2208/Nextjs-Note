import React, { useState } from 'react';
import { Item } from '../types';

interface CategoryDisplayProps {
  items: Item[];
  onDeleteItem: (index: number) => void;
  onEditItem: (index: number, newItem: Item) => void;
}

const CategoryDisplay: React.FC<CategoryDisplayProps> = ({ items, onDeleteItem, onEditItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingName, setEditingName] = useState('');
  const [editingCategory, setEditingCategory] = useState('');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setEditingIndex(null);
  };

  const handleEditClick = (index: number, item: Item) => {
    setEditingIndex(index);
    setEditingName(item.name);
    setEditingCategory(item.category);
  };

  const handleEditSave = (index: number) => {
    onEditItem(index, { name: editingName, category: editingCategory });
    setEditingIndex(null);
  };

  const categories = Array.from(new Set(items.map(item => item.category)));

  return (
    <div>
      <h2>Categories</h2>
      <table>
        <thead>
          <tr>
            {categories.map((category, index) => (
              <th key={index} onClick={() => handleCategoryClick(category)}>
                {category}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items
            .filter(item => item.category === selectedCategory)
            .map((item, index) => (
              <tr key={index}>
                {editingIndex === index ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editingCategory}
                        onChange={(e) => setEditingCategory(e.target.value)}
                      />
                    </td>
                    <td>
                      <button onClick={() => handleEditSave(index)}>Save</button>
                      <button onClick={() => setEditingIndex(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => handleEditClick(index, item)}>Edit</button>
                      <button onClick={() => onDeleteItem(index)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryDisplay;
