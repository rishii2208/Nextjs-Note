import React, { useState } from 'react';
import { useRouter } from 'next/router';
import InputForm from '../components/InputForm';
import { Item } from '../types';
import '../styles/styles.css';

const AddItem: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const router = useRouter();

  const handleAddItem = (item: Item) => {
    const newItems = [...items, item];
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
    router.push('/view-items');
  };

  return (
    <div className="container">
      <h1>Add New Item</h1>
      <InputForm onAddItem={handleAddItem} />
    </div>
  );
};

export default AddItem;
