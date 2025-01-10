import React, { useState } from 'react';
import '../css/checklist.css';
import Header from '../components/header';
const Checklist = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();

    if (newItem.trim() !== '') {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
      <div className="container">
        <Header />
      <section className="packing-checklist">
        <h2>Create Your Packing List</h2>

        <form onSubmit={handleAddItem}>
          <label htmlFor="item">Add Item:</label>
          <input
            type="text"
            id="item"
            placeholder="e.g., Passport"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            required
          />
          <button type="submit">Add to List</button>
        </form>

        <ul className="packing-list">
          {items.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Checklist;
