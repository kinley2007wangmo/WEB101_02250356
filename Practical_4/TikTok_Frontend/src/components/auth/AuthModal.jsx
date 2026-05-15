"use client";

import { useState } from "react";

export default function AuthModal({ onClose, onLogin }) {

  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {

    // fake login for testing
    const userData = {
      username,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    onLogin(userData);

    onClose();
  };

  return (
    <div className="overlay">

      <div className="modal">

        <h2>
          {isLogin ? "Login" : "Register"}
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Create new account"
            : "Already have account?"}
        </p>

      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal {
          background: #111;
          padding: 30px;
          border-radius: 20px;
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        input {
          padding: 10px;
          border-radius: 10px;
          border: none;
        }

        button {
          padding: 10px;
          border: none;
          border-radius: 10px;
          background: #ff0050;
          color: white;
          cursor: pointer;
        }

        p {
          cursor: pointer;
          color: gray;
        }
      `}</style>

    </div>
  );
}