import React, { useState } from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../providers/auth';

export function Login() {
  const { setUser } = useAuth()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("digite os dados de usuario!");
    }

    setUser(prevUser => ({
      ...prevUser,
      name: name,
      email: email
    }))

    navigate("/painel");
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link to="/painel">
          <h1 className={styles.title}>Dev Login</h1>
        </Link>
        <form onSubmit={handleLogin}  className={styles.form}>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome...."
          />
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email..."
          />

          <button onClick={handleLogin} type="submit">
            Acessar
          </button>
        </form>
      </main>
    </div>
  );
}
