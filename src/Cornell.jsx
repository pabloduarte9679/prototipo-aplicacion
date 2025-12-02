import React, { useState, useEffect } from "react";

const Cornell = () => {
  const [keywords, setKeywords] = useState("");
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");
  useEffect(() => {
    const savedKeywords = localStorage.getItem("keywords");
    const savedNotes = localStorage.getItem("notes");
    const savedSummary = localStorage.getItem("summary");

    if (savedKeywords) setKeywords(savedKeywords);
    if (savedNotes) setNotes(savedNotes);
    if (savedSummary) setSummary(savedSummary);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("keywords", keywords);
  }, [keywords]);

  useEffect(() => {
    localStorage.setItem("notes", notes);
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("summary", summary);
  }, [summary]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Metodo Cornell</h1>
      <p>Organiza tus apuntes en secciones claras para mejorar la comprensión y el repaso.</p>

      <h2>Como usarlo</h2>
      <ul>
        <li><b>Columna izquierda:</b> Palabras clave, preguntas.</li>
        <li><b>Columna derecha:</b> Apuntes principales.</li>
        <li><b>Parte inferior:</b> Resumen del tema.</li>
      </ul>

      <h2>Plantilla</h2>
      <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
        <p><b>Palabras clave / Preguntas</b></p>

        <textarea
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Preguntas o palabras clave..."
          style={{ width: "30%", height: "200px", float: "left" }}
        />

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Apuntes principales..."
          style={{ width: "65%", height: "200px", float: "right" }}
        />

        <div style={{ marginTop: "1rem" }}>
          <p><b>Resumen:</b></p>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Resumen del tema..."
            style={{ width: "100%", height: "100px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cornell;
