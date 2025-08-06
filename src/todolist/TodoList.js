import { useContext } from "react";
import { TodoContext } from "./TodoContext";

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, idx) => (
        <li key={idx}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => dispatch({ type: "TOGGLE_TODO", payload: idx })}
          >
            {todo.title}
          </span>
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", payload: idx })}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
