import { useState } from 'react';
import TaskForm from './TaskForm.jsx';

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = () => {
    onUpdateTask({
      ...task,
      completed: !task.completed
    });
  };

  const handleUpdateTask = (updatedTask) => {
    onUpdateTask(updatedTask);
    setIsEditing(false);
  };

  const getPriorityClass = () => {
    switch (task.priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return '';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  if (isEditing) {
    return (
      <div className="task-item editing">
        <TaskForm 
          task={task} 
          onSubmit={handleUpdateTask} 
          onCancel={() => setIsEditing(false)} 
        />
      </div>
    );
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckboxChange}
          id={`task-${task.id}`}
        />
        <label htmlFor={`task-${task.id}`}></label>
      </div>
      
      <div className="task-content">
        <div className="task-header">
          <h3 className="task-title">{task.title}</h3>
          <div className={`task-priority ${getPriorityClass()}`}>
            {task.priority}
          </div>
        </div>
        
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        
        <div className="task-meta">
          {task.dueDate && (
            <span className="task-due-date">
              Due: {formatDate(task.dueDate)}
            </span>
          )}
        </div>
      </div>
      
      <div className="task-actions">
        <button 
          className="edit-button" 
          onClick={() => setIsEditing(true)}
          aria-label="Edit task"
        >
          Edit
        </button>
        <button 
          className="delete-button" 
          onClick={() => onDeleteTask(task.id)}
          aria-label="Delete task"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;