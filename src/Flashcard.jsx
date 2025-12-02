import React, { useState, useEffect } from "react";

const Flashcards = () => {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem("flashcards");
    return saved ? JSON.parse(saved) : [];
  });

  const [flipped, setFlipped] = useState({}); 

  
  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(cards));
  }, [cards]);

  const addCard = () => {
    if (!front.trim() || !back.trim()) {
      alert("Rellena ambos campos");
      return;
    }

    const newCard = {
      id: Date.now(),
      front,
      back,
    };

    setCards([...cards, newCard]);
    setFront("");
    setBack("");
  };

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const deleteCard = (id) => {
    setCards((prev) => prev.filter((c) => c.id !== id));


    setFlipped((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Flashcards</h1>
      <p>Tarjetas de pregunta y respuesta para memorizar rapidamente.</p>

      <h2>Crear nueva tarjeta</h2>
      <input
        placeholder="Pregunta"
        value={front}
        onChange={(e) => setFront(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      />

      <input
        placeholder="Respuesta"
        value={back}
        onChange={(e) => setBack(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      />

      <button
        onClick={addCard}
        style={{
          padding: "0.7rem 1.2rem",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Agregar tarjeta
      </button>

      <h2 style={{ marginTop: "2rem" }}>Tus tarjetas</h2>

      {cards.length === 0 && <p>No has creado ninguna tarjeta.</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => toggleFlip(card.id)}
            style={{
              position: "relative",
              padding: "1rem",
              height: "140px",
              backgroundColor: "#fff",
              border: "2px solid #333",
              borderRadius: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              textAlign: "center",
              transition: "0.3s",
            }}
          >
            <span>{flipped[card.id] ? card.back : card.front}</span>

            <button
              onClick={(e) => {
                e.stopPropagation(); 
                deleteCard(card.id);
              }}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: "#ff0000",
                color: "#ffffff",
                border: "none",
                borderRadius: "50%",
                width: "25px",
                height: "25px",
                cursor: "pointer",
                fontSize: "0.8rem",
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
