'use client';

export default function TaskStats({ total, completed, active, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded">
      <div className="flex gap-4 text-sm text-gray-600">
        <span><span className="font-bold text-gray-900">{total}</span> total</span>
        <span><span className="font-bold text-green-700">{completed}</span> done</span>
        <span><span className="font-bold text-blue-700">{active}</span> active</span>
      </div>
      <button
        onClick={onClearCompleted}
        className="text-sm text-red-600 hover:underline"
      >
        Clear completed
      </button>
    </div>
  );
}