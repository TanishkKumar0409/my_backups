import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const statusOptions = ["Started", "Processing", "Completed"];

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          text: inputValue,
          status: "Started",
          addedAt: new Date().toLocaleString(),
          completedAt: null,
        },
      ]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const cycleStatus = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          const currentStatusIndex = statusOptions.indexOf(todo.status);
          const nextStatusIndex =
            (currentStatusIndex + 1) % statusOptions.length;

          return {
            ...todo,
            status: statusOptions[nextStatusIndex],
            completedAt:
              statusOptions[nextStatusIndex] === "Completed"
                ? new Date().toLocaleString()
                : todo.completedAt,
          };
        }
        return todo;
      })
    );
  };

  return (
    <section className="view-container">
      <div className="view-card ">
        <h2 className="view-card-title">Todo List</h2>
        <div className="input-container">
          <div class="input-group  mb-3">
            <input
              type="text"
              class="form-control"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new task..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button className="view-button add-button" onClick={addTodo}>
              Add Task
            </button>
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Status</th>
              <th>Added At</th>
              <th>Completed At</th>
              <th>Change Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{todo.text}</td>
                <td>
                  <span
                    className={`status-badge ${
                      todo.status === "Started"
                        ? "badge-started"
                        : todo.status === "Processing"
                        ? "badge-processing"
                        : "badge-completed"
                    }`}
                  >
                    {todo.status}
                  </span>
                </td>
                <td>{todo.addedAt}</td>
                <td>{todo.completedAt ? todo.completedAt : "-"}</td>
                <td>
                  <button
                    className="view-button status-button"
                    onClick={() => cycleStatus(index)}
                    disabled={todo.status === "Completed"}
                  >
                    Change Status
                  </button>
                </td>
                <td>
                  <button
                    className="view-button delete-button"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
