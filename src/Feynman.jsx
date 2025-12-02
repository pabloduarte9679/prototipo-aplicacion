import React, { useState, useEffect } from "react";

const Feynman = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    const saved = localStorage.getItem("text");
    if (saved) setText(saved);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tecnica Feynman</h1>
      <p>Aprende explicando conceptos como si enseñaras a otra persona.</p>

      <h2>Pasos</h2>
      <ol>
        <li>Escribe lo que quieres aprender.</li>
        <li>Explícalo con palabras simples.</li>
        <li>Detecta huecos en la explicación.</li>
        <li>Reescribe hasta que sea claro.</li>
      </ol>

      <h2>Practica aquí</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Explica el tema con palabras simples..."
        style={{ width: "100%", height: "200px" }}
      />
    </div>
  );
};

export default Feynman;
