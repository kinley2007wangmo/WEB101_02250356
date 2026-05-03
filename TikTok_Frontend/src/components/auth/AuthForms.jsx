"use client";
import { useState } from "react";
import API from "../../lib/api-config";
import { useAuth } from "../../contexts/authContext";

export default function AuthForms() {
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const url = isLogin ? "/auth/login" : "/auth/register";
      const res = await API.post(url, form);

      login(res.data); // save user + token
      alert("Success!");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      {!isLogin && (
        <input
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
      )}

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={handleSubmit}>
        {isLogin ? "Login" : "Register"}
      </button>

      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
        {isLogin ? "Create account" : "Already have account?"}
      </p>
    </div>
  );
}