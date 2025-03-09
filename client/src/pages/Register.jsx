import React from "react";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${import.meta.env.API_URL}/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("registration successfull");
    } else {
      alert("registration failed");
    }
  };
  return (
    <div>
      <form className="register" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
