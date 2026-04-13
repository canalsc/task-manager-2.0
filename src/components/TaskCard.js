export default function TaskCard({ title, done }) {
  return (
    <div className="flex items-center gap-2 p-3 border-b">
      <span
        className={done ? 'line-through text-gray-400' : 'text-gray-900'}
      >
        {title}                       {/* {} escapes into JS */}
      </span>
      {done && <span className="text-green-600 text-xs font-bold">Done</span>}
    </div>
  );
} 

'use client';

export default function TaskCard({ title, done, id, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-3 border-b">
      <span className={done ? 'line-through text-gray-400' : ''}>
        {title}
      </span>
      <div>
        <button
          className="text-sm text-green-700 hover:underline mr-2"
          onClick={() => onToggle(id)}
        >Toggle</button>
        <button
          className="text-sm text-red-700 hover:underline"
          onClick={() => onDelete(id)}
        >Delete</button>
      </div>
    </div>
  );
}