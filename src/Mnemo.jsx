import React, { useState } from "react";

const Mnemonics = () => {
  const [concept, setConcept] = useState("");
  const [type, setType] = useState("phrase");
  const [content, setContent] = useState("");
  const [mnemonicsList, setMnemonicsList] = useState([]);

  const handleAddMnemonic = () => {
    if (!concept.trim() || !content.trim()) {
      return alert("Completa el texto y el tipo de asociacion");
    }

    const newMnemonic = {
      id: Date.now(),
      concept,
      type,
      content,
    };

    setMnemonicsList((prev) => [...prev, newMnemonic]);
    setConcept("");
    setContent("");
  };

  const handleDeleteMnemonic = (id) => {
    setMnemonicsList((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Mnemotecnica</h1>
      <p>
        Asocia conceptos con imagenes, frases o acronimos para recordarlos mejor
      </p>

      <h2>Crear </h2>
      <div
        style={{
          padding: "1rem",
          border: "2px solid #ccc",
          borderRadius: "10px",
          marginBottom: "2rem",
        }}
      >
        <div>
          <b>Concepto</b>
          <input
            type="text"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            placeholder="Concepto"
            style={{
              display: "block",
              width: "100%",
              margin: "0.5rem 0 1rem",
              padding: "0.5rem",
            }}
          />
        </div>

        <div>
          <b>Tipo de asociacion</b>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{
              display: "block",
              margin: "0.5rem 0 1rem",
              padding: "0.5rem",
            }}
          >
            <option value="phrase">Frase</option>
            <option value="acronym">Acronimo</option>
            <option value="image">Imagen (URL)</option>
          </select>
        </div>

        <div>
          <b>Contenido</b>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={
              type === "phrase"
                ? "frase"
                : type === "acronym"
                ? "Acronimo"
                : "Imagen"
            }
            style={{
              display: "block",
              width: "100%",
              margin: "0.5rem 0 1rem",
              padding: "0.5rem",
            }}
          />
        </div>

        <button
          onClick={handleAddMnemonic}
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#4caf50",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Agregar
        </button>
      </div>

      <h2>Mis asociaciones</h2>

      {mnemonicsList.length === 0 && <p>No has creado aun</p>}

      {mnemonicsList.map((m) => (
        <div
          key={m.id}
          style={{
            border: "2px solid #444",
            padding: "1rem",
            borderRadius: "10px",
            marginBottom: "1rem",
            background: "#fafafa",
          }}
        >
          <h3>{m.concept}</h3>
          <p>
            <b>Type:</b> {m.type}
          </p>

          {m.type === "image" ? (
            <img
              src={m.content}
              style={{
                width: "100%",
                maxHeight: "200px",
                objectFit: "contain",
              }}
            />
          ) : (
            <p>
              <b>Asociation:</b> {m.content}
            </p>
          )}

          <button
            onClick={() => handleDeleteMnemonic(m.id)}
            style={{
              marginTop: "0.5rem",
              backgroundColor: "#e53935",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Borrar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Mnemonics;
