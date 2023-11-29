import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure that the task name is required
    if (!taskName.trim()) {
      alert('Task name is required!');
      return;
    }

    // Add the task
    addTask({
      name: taskName,
      description: taskDescription,
      priority: priority,
      completed: false,
    });

    // Reset the form fields
    setTaskName('');
    setTaskDescription('');
    setPriority('low');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>

      <label>
        Task Description:
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </label>

      <label>
        Priority:
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
