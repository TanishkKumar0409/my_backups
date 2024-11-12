import React, { useState } from "react";

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div
          className="h-100 bg-sec-custom rounded p-4"
          style={{ maxHeight: "350px", overflow: "auto" }}
        >
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0 text-theme">To Do List</h6>
          </div>
          <div className="d-flex mb-2">
            <input
              type="text"
              placeholder="Enter Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={handleKeyDown}
              className="form-control custom-placeholder bg-dark border-0"
            />
            <button className="btn btn-red ms-2" onClick={handleAddTask}>
              Add
            </button>
          </div>

          {tasks.map((task, index) => (
            <div
              key={index}
              className="d-flex align-items-center border-bottom py-2"
            >
              <input
                type="checkbox"
                className="form-check-input m-0"
                onChange={() => handleToggleComplete(index)}
              />
              <div className="w-100 ms-3">
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <span
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  >
                    {task}
                  </span>
                  <button
                    className="btn btn-sm btn-red"
                    onClick={() => handleDeleteTask(index)}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
