import React, { useState } from "react";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const userName = "admin";
  const pwd = "Uvindu37615#";

  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user == userName && password == pwd) {
      navigate("/home");
    } else {
      setError("User name or Password is incorrect");
    }
  };
  return (
    <div className="loginPage">
      <form className="form">
        <img src="profile.png" alt="" srcset="" />
        <div className="item">
          <img src="user.png" alt="" srcset="" />
          User name
          <input
            type="text"
            name="username"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>
        <div className="item">
          <img src="key.png" alt="" srcset="" /> Password
          <input
            type="password"
            name="username"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        {error && (
          <div className="error">
            <img src="warning.png" alt="" srcset="" />
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
