import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState, useEffect } from "react";

import { addTodo, getData, removeTodo } from "./Redux/Slices";
function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  
  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placholder="Enter Todo"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button>Add</button>
        </form>
      </section>
      <section>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              {item.username}
              <button onClick={() => dispatch(removeTodo(item.username))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
