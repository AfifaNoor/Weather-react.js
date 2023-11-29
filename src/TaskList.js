import React, { useState } from "react";
// import './App.css'
const Task = ({ task, index, toggleTaskStatus, deleteTask, openEditForm }) => (
  <li
    style={{
      textDecoration: task.completed ? "line-through" : "none",
      margin: "10px 0",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <label style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskStatus(index)}
        style={{ marginRight: "8px" }}
      />
      {task.name}
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
    </label>
    <button
      style={{
        marginRight: "5px",
        padding: "5px 10px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer",
      }}
      onClick={() => openEditForm(index)}
    >
      Edit
    </button>
    <button
      style={{
        padding: "5px 10px",
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer",
      }}
      onClick={() => deleteTask(index)}
    >
      Delete
    </button>
  </li>
);

const AddTaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName.trim()) {
      alert("Task name is required!");
      return;
    }

    addTask({
      name: taskName,
      description: taskDescription,
      priority: priority,
      completed: false,
    });

    setTaskName("");
    setTaskDescription("");
    setPriority("low");
  };

  return (
    <form style={{ margin: "20px 0" }} onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{
            marginLeft: "45px",
            padding: "5px",
            borderRadius: "3px",
            border: "1px solid #ccc",
          }}
        />
      </label>
      <br></br>
      <label>
        Task Description:
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          style={{
            marginTop: "50px",
            marginLeft: "10px",
            width: "180px",
            height: "20px",
            borderRadius: "3px",
            border: "1px solid #ccc",
          }}
        />
      </label>
      <br></br>
      <label>
        Priority:
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ marginTop: "50px" }}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <button
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          marginLeft:'30px'
        }}
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

const EditTaskForm = ({ task, editTask, closeEditForm }) => {
  const [editedTaskName, setEditedTaskName] = useState(task.name);
  const [editedTaskDescription, setEditedTaskDescription] = useState(
    task.description
  );
  const [editedPriority, setEditedPriority] = useState(task.priority);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editedTaskName.trim()) {
      alert("Task name is required!");
      return;
    }

    editTask({
      ...task,
      name: editedTaskName,
      description: editedTaskDescription,
      priority: editedPriority,
    });

    closeEditForm();
  };

  return (
    <form style={{ margin: "20px 0" }} onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input
          type="text"
          value={editedTaskName}
          onChange={(e) => setEditedTaskName(e.target.value)}
        />
      </label>

      <label>
        Task Description:
        <textarea
          value={editedTaskDescription}
          onChange={(e) => setEditedTaskDescription(e.target.value)}
        />
      </label>

      <label>
        Priority:
        <select
          value={editedPriority}
          onChange={(e) => setEditedPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <button type="submit">Save Changes</button>
    </form>
  );
};

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedTaskIndex, setEditedTaskIndex] = useState(null);

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowAddTaskForm(false);
  };

  const openEditForm = (index) => {
    setShowEditForm(true);
    setEditedTaskIndex(index);
  };

  const editTask = (editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[editedTaskIndex] = editedTask;
    setTasks(updatedTasks);
  };

  const closeEditForm = () => {
    setShowEditForm(false);
    setEditedTaskIndex(null);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Todo List</h1>

      <AddTaskForm addTask={addTask} />

      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
            openEditForm={openEditForm}
          />
        ))}
      </ul>

      {showEditForm && (
        <EditTaskForm
          task={tasks[editedTaskIndex]}
          editTask={editTask}
          closeEditForm={closeEditForm}
        />
      )}
    </div>
  );
};

export default TaskList;
