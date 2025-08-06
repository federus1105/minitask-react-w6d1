import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Header() {
  const { isLoggedIn, username, logout } = useContext(AuthContext);

  return (
    <header>
      {isLoggedIn ? (
        <div>
          <p>Hi, {username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </header>
  );
}

export default Header;
