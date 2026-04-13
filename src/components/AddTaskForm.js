'use client';

import { useState } from 'react';

export default function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim());
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className="input-wrapper">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
        className="task-input"
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
}