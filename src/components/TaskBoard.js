'use client';

import { useState, useEffect } from 'react';
import TaskList from './TaskList';

export default function TaskBoard() {
  const [tasks, setTasks] = useState(() => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('all');
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const active = tasks.filter((t) => !t.done).length;
    document.title = `${active} tasks remaining`;
    return () => { document.title = 'Task Manager'; };
  }, [tasks]);

  const completed = tasks.filter((t) => t.done).length;
  const active = tasks.length - completed;
  const visible =
    filter === 'all'  ? tasks :
    filter === 'done' ? tasks.filter((t) => t.done) :
                        tasks.filter((t) => !t.done);

  function handleAdd(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: crypto.randomUUID(), title: input.trim(), done: false }]);
    setInput('');
  }

  function handleToggle(id) {
    setTasks(tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  }

  function handleDelete(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function handleClearDone() {
    setTasks(tasks.filter((t) => !t.done));
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '2rem', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '100%', maxWidth: '640px', background: 'white', borderRadius: '24px', boxShadow: '0 25px 60px rgba(0,0,0,0.2)', overflow: 'hidden' }}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem 0' }}>Task Manager</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[`${tasks.length} total`, `${completed} done`, `${active} active`].map((label) => (
                <span key={label} style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '0.8rem', fontWeight: 500, color: 'white' }}>{label}</span>
              ))}
            </div>
            <button onClick={handleClearDone} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 16px', fontSize: '0.8rem', fontWeight: 500, color: 'white', cursor: 'pointer' }}>
              Clear completed
            </button>
          </div>
        </div>

        {/* Input */}
        <div style={{ display: 'flex', gap: '10px', padding: '1.25rem 1.5rem', background: '#f8f9ff', borderBottom: '1px solid #e8eaf6' }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd(e)}
            placeholder="New task..."
            style={{ flex: 1, background: 'white', border: '2px solid #e0e3ff', borderRadius: '12px', padding: '10px 16px', fontSize: '0.95rem', fontFamily: 'Inter, sans-serif', color: '#2d2d4e', outline: 'none' }}
          />
          <button onClick={handleAdd} style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', border: 'none', borderRadius: '12px', padding: '10px 22px', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer' }}>
            Add
          </button>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '6px', padding: '0.75rem 1.5rem', background: '#f8f9ff', borderBottom: '1px solid #e8eaf6' }}>
          {['all', 'active', 'done'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                border: filter === f ? 'none' : '1.5px solid #e0e3ff',
                borderRadius: '20px',
                padding: '5px 18px',
                fontSize: '0.82rem',
                fontWeight: 500,
                cursor: 'pointer',
                background: filter === f ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'white',
                color: filter === f ? 'white' : '#667eea',
              }}
            >{f.charAt(0).toUpperCase() + f.slice(1)}</button>
          ))}
        </div>

        {/* Task list */}
        <TaskList tasks={visible} onToggle={handleToggle} onDelete={handleDelete} />
      </div>
    </div>
  );
}