'use client';

export default function TaskStats({ total, completed, active, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between mt-3">
      <div className="stats-bar">
        <span className="stat-pill">{total} total</span>
        <span className="stat-pill">{completed} done</span>
        <span className="stat-pill">{active} active</span>
      </div>
      <button onClick={onClearCompleted} className="clear-btn">
        Clear completed
      </button>
    </div>
  );
}