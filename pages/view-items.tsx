import React, { useEffect, useState } from 'react';
import CategoryDisplay from '../components/CategoryDisplay';
import { Item } from '../types';
import '../styles/styles.css';

const ViewItems: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items') || '[]');
    setItems(storedItems);
  }, []);

  const handleDeleteItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  const handleEditItem = (index: number, newItem: Item) => {
    const newItems = items.map((item, i) => (i === index ? newItem : item));
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  return (
    <div className="container">
      <h1>View Items</h1>
      <CategoryDisplay items={items} onDeleteItem={handleDeleteItem} onEditItem={handleEditItem} />
    </div>
  );
};

export default ViewItems;
