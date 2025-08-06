import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (input) login(input);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
