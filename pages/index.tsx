import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import InputForm from '../components/InputForm';
import { Item } from '../types';
import '../styles/styles.css';

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items') || '[]');
    setItems(storedItems);
  }, []);

  const handleAddItem = (item: Item) => {
    const newItems = [...items, item];
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  const handleViewItems = () => {
    router.push('/view-items');
  };

  return (
    <div className="container">
      <h1>Organized List</h1>
      <InputForm onAddItem={handleAddItem} />
      <button onClick={handleViewItems}>View Items</button>
    </div>
  );
};

export default Home;
