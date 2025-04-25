import { useState, useEffect } from 'react';
import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';
import './App.css';

const defaultTasks = [
  {
    id: 1,
    title: "Buy essentials",
    description: "Go get a new phone case and silver jewelry",
    priority: "high",
    dueDate: "2025-05-02",
    completed: false,
    createdAt: "2025-04-20T10:30:00Z"
  },
  {
    id: 2,
    title: "Weekly Team Meeting",
    description: "Discuss project progress and how to go about assignments",
    priority: "medium",
    dueDate: "2025-04-26",
    completed: false,
    createdAt: "2025-04-21T08:15:00Z"
  },
  {
    id: 3,
    title: "Pay drivers license fee",
    description: "Old one expired, make sure it is renewed",
    priority: "low",
    dueDate: "2025-05-05",
    completed: false,
    createdAt: "2025-04-22T14:45:00Z"
  },
  {
    id: 4,
    title: "Selfcare Maintainace day",
    description: "Get my hair done plus pedicure and manicure",
    priority: "high",
    dueDate: "2025-04-27",
    completed: true,
    createdAt: "2025-04-19T11:20:00Z"
  },
  {
    id: 5,
    title: "Work on client Website",
    description: "Look into modern styles which will go in line with the aesthetics",
    priority: "medium",
    dueDate: "2025-05-10",
    completed: false,
    createdAt: "2025-04-23T09:00:00Z"
  }
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    
    return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  const deleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Tracker</h1>
        <p className="task-stats">
          {totalCount > 0 ? (
            <>Completed: {completedCount}/{totalCount} ({Math.round((completedCount / totalCount) * 100)}%)</>
          ) : (
            <>No tasks yet</>
          )}
        </p>
      </header>

      <main className="app-content">
        <AddTask onAddTask={addTask} />
        <TaskList 
          tasks={tasks} 
          onUpdateTask={updateTask} 
          onDeleteTask={deleteTask} 
        />
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Task Tracker App</p>
      </footer>
    </div>
  );
}

export default App;