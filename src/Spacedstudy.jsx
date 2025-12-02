import React, { useState, useEffect } from "react";

const SpacedStudy = () => {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [baseDate, setBaseDate] = useState(null);
  
  useEffect(() => {
    const savedMonth = localStorage.getItem("spaced_month");
    const savedYear = localStorage.getItem("spaced_year");
    const savedBase = localStorage.getItem("spaced_base_date");

    if (savedMonth) setCurrentMonth(parseInt(savedMonth));
    if (savedYear) setCurrentYear(parseInt(savedYear));

    if (savedBase) {
      const parsed = new Date(savedBase);
      if (!isNaN(parsed)) setBaseDate(parsed);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("spaced_month", currentMonth);
  }, [currentMonth]);

  useEffect(() => {
    localStorage.setItem("spaced_year", currentYear);
  }, [currentYear]);

  useEffect(() => {
    if (baseDate) {
      localStorage.setItem("spaced_base_date", baseDate.toISOString());
    }
  }, [baseDate]);


  const spacedDates = baseDate
    ? {
        day1: baseDate,
        day2: new Date(
          baseDate.getFullYear(),
          baseDate.getMonth(),
          baseDate.getDate() + 1
        ),
        day5: new Date(
          baseDate.getFullYear(),
          baseDate.getMonth(),
          baseDate.getDate() + 4
        ),
        day12: new Date(
          baseDate.getFullYear(),
          baseDate.getMonth(),
          baseDate.getDate() + 11
        ),
      }
    : {};

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };
  const handleDayClick = (day) => {
    const selected = new Date(currentYear, currentMonth, day);
    setBaseDate(selected);
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const isSameDate = (d1, d2) =>
    d1 &&
    d2 &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Estudio Espaciado</h1>
      <p>Selecciona un dia en el calendario para iniciar tu ciclo de estudio.</p>

      <h2>Como se aplica</h2>
      <ul>
        <li><b>Día 1:</b> Estudia 20–30 min por tema.</li>
        <li><b>Día 2:</b> Repaso rapido.</li>
        <li><b>Día 5:</b> Repaso general.</li>
        <li><b>Día 12:</b> Repaso final.</li>
      </ul>

      <h2>Calendario Interactivo de Estudio Espaciado</h2>

      <div style={{ maxWidth: "350px", marginTop: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
            alignItems: "center",
          }}
        >
          <button onClick={handlePrevMonth}>⟵</button>
          <h3 style={{ margin: 0 }}>
            {months[currentMonth]} {currentYear}
          </h3>
          <button onClick={handleNextMonth}>⟶</button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          {days.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "5px",
            textAlign: "center",
          }}
        >
          {[...Array(firstDayIndex)].map((_, i) => (
            <div key={i}></div>
          ))}

          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const thisDate = new Date(currentYear, currentMonth, day);

            let bg = "#fff";
            let border = "1px solid #ccc";
            let label = "";

            if (isSameDate(thisDate, spacedDates.day1)) {
              bg = "#90e0ef";
              border = "2px solid #0077b6";
              label = "Día 1";
            }
            if (isSameDate(thisDate, spacedDates.day2)) {
              bg = "#ffdd8f";
              border = "2px solid #d08900";
              label = "R1";
            }
            if (isSameDate(thisDate, spacedDates.day5)) {
              bg = "#ffd6e0";
              border = "2px solid #d6336c";
              label = "R2";
            }
            if (isSameDate(thisDate, spacedDates.day12)) {
              bg = "#caffbf";
              border = "2px solid #2d6a4f";
              label = "Final";
            }

            return (
              <div
                key={day}
                onClick={() => handleDayClick(day)}
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  backgroundColor: bg,
                  border: border,
                  position: "relative",
                }}
              >
                {day}
                {label && (
                  <span
                    style={{
                      fontSize: "0.7rem",
                      position: "absolute",
                      bottom: "3px",
                      right: "3px",
                      backgroundColor: "rgba(0,0,0,0.2)",
                      padding: "2px 4px",
                      borderRadius: "4px",
                      color: "black",
                    }}
                  >
                    {label}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {baseDate && (
          <div style={{ marginTop: "1.5rem" }}>
            <h3>Tu plan generado:</h3>
            <ul>
              <li>
                <b>Día 1:</b> {spacedDates.day1.toDateString()}
              </li>
              <li>
                <b>Día 2:</b> {spacedDates.day2.toDateString()}
              </li>
              <li>
                <b>Día 5:</b> {spacedDates.day5.toDateString()}
              </li>
              <li>
                <b>Día 12:</b> {spacedDates.day12.toDateString()}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpacedStudy;
