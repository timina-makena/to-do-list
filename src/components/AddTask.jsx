import { useState } from 'react';
import TaskForm from './TaskForm.jsx';

const AddTask = ({ onAddTask }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleAddTask = (task) => {
    onAddTask(task);
    closeForm();
  };

  return (
    <div className="add-task-container">
      {!isFormOpen ? (
        <button 
          className="add-task-button" 
          onClick={openForm}
        >
          + Add New Task
        </button>
      ) : (
        <TaskForm 
          onSubmit={handleAddTask} 
          onCancel={closeForm} 
        />
      )}
    </div>
  );
};

export default AddTask;