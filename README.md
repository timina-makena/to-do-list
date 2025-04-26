 Task Tracker App

A modern, responsive task management application built with React that helps you organize and track your daily tasks effectively.

   Features

- Task Management: Add, edit, and delete tasks with ease
- Task Details: Set titles, descriptions, priority levels, and due dates
- Task Filtering: Filter tasks by status (All, Active, Completed)
- Task Sorting: Sort tasks by date added, title, due date, or priority
- Responsive Design: Works seamlessly on desktop and mobile devices
- Local Storage: Tasks are saved to browser local storage for persistence

 App Structure

The application is built with the following components:

- App.jsx: Main application component managing state and data flow
- AddTask.jsx: Component for adding new tasks to the list
- TaskList.jsx: Component for displaying and filtering task items
- TaskItem.jsx: Component for individual task rendering and interactions
- TaskForm.jsx: Shared form component for adding and editing tasks

 Installation

1. Clone the repository

git clone https://github.com/timina-makena/task-tracker-app.git


2. Navigate to the project directory

cd task-tracker-app


3. Install dependencies

npm install


4. Start the development server



 Usage

1. Adding a Task: Click the "+ Add New Task" button and fill out the form
2. Completing a Task: Click the checkbox next to any task to mark it as complete
3. Editing a Task: Click the "Edit" button on any task to modify its details
4. Deleting a Task: Click the "Delete" button on any task to remove it
5. Filtering Tasks: Use the filter buttons (All, Active, Completed) to view specific tasks
6. Sorting Tasks: Use the sort dropdown to organize tasks by different criteria

 Customization

The app uses a CSS variables system that makes it easy to customize the look and feel:

To customize the app's appearance, you can modify these variables in the `App.css` file.

 Future Enhancements

- Task categories/tags
- Recurring tasks
- Advanced search functionality
- Dark theme option
- Task reminders/notifications

 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

 License

This project is licensed under the MIT License - see the LICENSE file for details.
