"use client";

import { useState } from "react";

export default function AuthModal({ onClose, onLogin }) {

  const [username, setUsername] = useState("");

  const handleLogin = () => {

    if (!username) return;

    const userData = {
      username,
    };

    onLogin(userData);

    onClose();
  };

  return (
    <div className="overlay">

      <div className="modal">

        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <button onClick={onClose}>
          Close
        </button>

      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
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

        h2 {
          color: #ff0050;
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
          cursor: pointer;
          background: #ff0050;
          color: white;
        }
      `}</style>
    </div>
  );
}