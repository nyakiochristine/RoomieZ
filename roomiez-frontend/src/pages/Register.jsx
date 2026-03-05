import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Register = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {

      await api.post("/auth/register", {
        email,
        password
      });

      alert("Account created successfully");

      navigate("/login");

    } catch (err) {

      setError(err.response?.data?.error || "Registration failed");

    }

  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            style={styles.input}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button style={styles.button}>
            Sign Up
          </button>

        </form>

        <p style={{ marginTop: "15px" }}>

          Already have an account?

          <span
            style={styles.link}
            onClick={() => navigate("/login")}
          >
            Login
          </span>

        </p>

      </div>

    </div>

  );

};

const styles = {

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#F6F6F6"
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px"
  },

  button: {
    width: "100%",
    marginTop: "20px",
    background: "#FF6F61",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer"
  },

  link: {
    color: "#FF6F61",
    marginLeft: "5px",
    cursor: "pointer"
  }

};

export default Register;