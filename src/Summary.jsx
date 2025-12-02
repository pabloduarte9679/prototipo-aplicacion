import React, { useState, useEffect } from "react";

const Summaries = () => {
  
  const [summaries, setSummaries] = useState(() => {
    const saved = localStorage.getItem("summaries");
    return saved ? JSON.parse(saved) : [];
  });

  const [currentSummary, setCurrentSummary] = useState("");

  
  useEffect(() => {
    localStorage.setItem("summaries", JSON.stringify(summaries));
  }, [summaries]);

  const addSummary = () => {
    if (!currentSummary.trim()) return;

    setSummaries([...summaries, currentSummary.trim()]);
    setCurrentSummary("");
  };

  const deleteSummary = (index) => {
    setSummaries(summaries.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Resumenes</h1>
      <p>Sintetiza la información en frases claras y sintetizando las ideas principales del texto a resumir</p>

      <h2>Crear resumen</h2>

      <textarea
        placeholder="Escribe aqui tu resumen..."
        value={currentSummary}
        onChange={(e) => setCurrentSummary(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          marginBottom: "1rem",
          padding: "0.5rem",
        }}
      />

      <button
        onClick={addSummary}
        style={{
          padding: "0.5rem 1rem",
          marginBottom: "2rem",
          background: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "10px"
        }}
      >
        Guardar resumen
      </button>

      <h2>Mis resúmenes</h2>

      {summaries.length === 0 ? (
        <p>Aún no has creado resumenes.</p>
      ) : (
        <ul>
          {summaries.map((summary, index) => (
            <li
              key={index}
              style={{
                marginBottom: "1rem",
                background: "#f4f4f4",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <p>{summary}</p>

              <button
                onClick={() => deleteSummary(index)}
                style={{
                  marginTop: "0.5rem",
                  background: "#d9534f",
                  color: "white",
                  border: "none",
                  padding: "0.3rem 0.7rem",
                  cursor: "pointer",
                }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Summaries;
