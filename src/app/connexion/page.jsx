"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./connexion.module.css";

const Connexion = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{success ? success : "Se connecter"}</h1>
      <h2 className={styles.subtitle}>S'il vous plaît connectez-vous pour la suite</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Se connecter</button>
        {error && error}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        className={styles.button + " " + styles.google}
      >
        Se connecter avec Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/inscription">
        Créer un compte
      </Link>
      <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Se connecter avec Github
      </button>
    </div>
  );
};

export default Connexion;
