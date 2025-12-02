import React, { useState, useRef, useEffect } from "react";

const MentalMap = () => {
  const loadInitialNodes = () => {
    const saved = localStorage.getItem("mentalMapNodes");
    if (saved) return JSON.parse(saved);
    return [{ id: 1, x: 300, y: 150, text: "Concepto central", parent: null }];
  };

  const [nodes, setNodes] = useState(loadInitialNodes());
  const [selectedNode, setSelectedNode] = useState(null);
  const [draggingNode, setDraggingNode] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  useEffect(() => {
    localStorage.setItem("mentalMapNodes", JSON.stringify(nodes));
  }, [nodes]);
  
  const handleMouseMove = (e) => {
    if (draggingNode) {
      const rect = containerRef.current.getBoundingClientRect();
      const newX = e.clientX - rect.left - offset.x;
      const newY = e.clientY - rect.top - offset.y;

      setNodes((prev) =>
        prev.map((node) =>
          node.id === draggingNode ? { ...node, x: newX, y: newY } : node
        )
      );
    }
  };

  const handleMouseUp = () => {
    setDraggingNode(null);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });
  
  const addNode = () => {
    if (!selectedNode) return alert("Selecciona un nodo primero");

    const parent = nodes.find((n) => n.id === selectedNode);

    const newNode = {
      id: Date.now(),
      x: parent.x + 150,
      y: parent.y + 50,
      text: "Nueva idea",
      parent: parent.id,
    };

    setNodes([...nodes, newNode]);
  };

  const deleteNode = (id) => {
    setNodes((prev) => prev.filter((n) => n.id !== id && n.parent !== id));
    if (selectedNode === id) setSelectedNode(null);
  };
  
  const resetMap = () => {
    if (window.confirm("seguro que quieres borrar el mapa completo?")) {
      const initial = [
        { id: 1, x: 300, y: 150, text: "Concepto central", parent: null }
      ];
      setNodes(initial);
      localStorage.setItem("mentalMapNodes", JSON.stringify(initial));
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Mapas Mentales Interactivos</h1>
      <p>Crea, mueve y organiza ideas visualmente.</p>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={addNode} style={{backgroundColor: "#cccccc", border: "none", borderRadius: "10px", padding: "1rem"}}> Añadir nodo</button>
        <button onClick={resetMap} style={{ backgroundColor: "#e66", color: "white" , border: "none", borderRadius: "10px", padding: "1rem"}}>Reiniciar mapa</button>
      </div>

      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "70vh",
          border: "2px solid #ccc",
          position: "relative",
          overflow: "hidden",
          background: "#fafafa",
        }}
      >
      
        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
          {nodes.map((node) => {
            if (!node.parent) return null;
            const parent = nodes.find((n) => n.id === node.parent);
            if (!parent) return null;

            return (
              <line
                key={node.id}
                x1={parent.x + 75}
                y1={parent.y + 30}
                x2={node.x + 75}
                y2={node.y + 30}
                stroke="#666"
                strokeWidth="2"
              />
            );
          })}
        </svg>
        
        {nodes.map((node) => (
          <div
            key={node.id}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedNode(node.id);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              deleteNode(node.id);
            }}
            onMouseDown={(e) => {
              const rect = containerRef.current.getBoundingClientRect();
              setDraggingNode(node.id);
              setOffset({
                x: e.clientX - rect.left - node.x,
                y: e.clientY - rect.top - node.y,
              });
            }}
            style={{
              position: "absolute",
              left: node.x,
              top: node.y,
              padding: "0.6rem 1rem",
              background: selectedNode === node.id ? "#3b71dc" : "white",
              border: "2px solid #333",
              borderRadius: "12px",
              cursor: "grab",
              userSelect: "none",
              minWidth: "120px",
              textAlign: "center",
            }}
          >
            <input
              value={node.text}
              onChange={(e) =>
                setNodes((prev) =>
                  prev.map((n) =>
                    n.id === node.id ? { ...n, text: e.target.value } : n
                  )
                )
              }
              style={{
                border: "none",
                background: "transparent",
                width: "100%",
                outline: "none",
                textAlign: "center",
                fontSize: "1rem",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentalMap;
