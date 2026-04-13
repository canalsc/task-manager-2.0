'use client';

import TaskCard from '@/components/TaskCard';

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1.5rem', color: '#a0a8c0' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📋</div>
        <p style={{ margin: 0, fontSize: '0.95rem' }}>No tasks yet! Add one above.</p>
      </div>
    );
  }
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard id={task.id} title={task.title} done={task.done} onToggle={onToggle} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}