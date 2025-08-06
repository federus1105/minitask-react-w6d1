import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

function TodoForm() {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: input });
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoForm;
