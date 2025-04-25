import { useState } from 'react';
import TaskItem from './TaskItem.jsx';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');

  const getFilteredTasks = () => {
    let filteredTasks = [...tasks];

   
    switch (filter) {
      case 'active':
        filteredTasks = filteredTasks.filter(task => !task.completed);
        break;
      case 'completed':
        filteredTasks = filteredTasks.filter(task => task.completed);
        break;
      default:
        break;
    }

   
    switch (sortBy) {
      case 'title':
        filteredTasks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'dueDate':
        filteredTasks.sort((a, b) => {
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        });
        break;
      case 'priority':
        const priorityWeight = { high: 3, medium: 2, low: 1 };
        filteredTasks.sort((a, b) => 
          priorityWeight[b.priority] - priorityWeight[a.priority]
        );
        break;
      case 'createdAt':
      default:
        filteredTasks.sort((a, b) => 
          new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
    }

    return filteredTasks;
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <div className="task-filters">
          <button 
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-button ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button 
            className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        <div className="task-sort">
          <label htmlFor="sort-select">Sort by:</label>
          <select 
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="createdAt">Date Added</option>
            <option value="title">Title</option>
            <option value="dueDate">Due Date</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>

      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskItem 
              key={task.id}
              task={task}
              onUpdateTask={onUpdateTask}
              onDeleteTask={onDeleteTask}
            />
          ))
        ) : (
          <div className="no-tasks-message">
            {filter === 'all' 
              ? "No tasks yet. Add a new task to get started!" 
              : `No ${filter} tasks found.`}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;