'use client';

export default function TaskCard({ title, done, id, onToggle, onDelete }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 1.5rem', borderBottom: '1px solid #f0f2ff', background: 'white', fontFamily: 'Inter, sans-serif' }}>
      <span style={{ fontSize: '0.95rem', color: done ? '#a0a8c0' : '#2d2d4e', textDecoration: done ? 'line-through' : 'none', flex: 1 }}>
        {title}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {done && (
          <span style={{ background: '#d1fae5', color: '#065f46', fontSize: '0.7rem', fontWeight: 600, padding: '3px 10px', borderRadius: '20px' }}>Done</span>
        )}
        <button onClick={() => onToggle(id)} style={{ fontSize: '0.8rem', fontWeight: 500, color: '#667eea', background: '#f0f2ff', border: 'none', borderRadius: '8px', padding: '5px 12px', cursor: 'pointer' }}>
          Toggle
        </button>
        <button onClick={() => onDelete(id)} style={{ fontSize: '0.8rem', fontWeight: 500, color: '#ef4444', background: '#fee2e2', border: 'none', borderRadius: '8px', padding: '5px 12px', cursor: 'pointer' }}>
          Delete
        </button>
      </div>
    </div>
  );
}