import TaskCard from './TaskCard';

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p className="text-gray-400 p-4">No tasks yet!</p>;
  }
  return (
    <ul className="divide-y">
      {tasks.map((task) => (          // key on the outermost element
        <li key={task.id}>
          <TaskCard title={task.title} done={task.done} />
        </li>
      ))}
    </ul>
  );
} 

'use client';

import TaskCard from '@/components/TaskCard';

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          done={task.done}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}