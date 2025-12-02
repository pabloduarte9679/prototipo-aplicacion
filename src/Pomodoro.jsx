import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
  const [workTime, setWorkTime] = useState(25); 
  const [breakTime, setBreakTime] = useState(5); 
  const [timeLeft, setTimeLeft] = useState(workTime * 60); 
  const [isRunning, setIsRunning] = useState(false); 
  const [isWorkPhase, setIsWorkPhase] = useState(true); 
  
  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime === 0) {
            if (isWorkPhase) {
              setIsWorkPhase(false); 
              return breakTime * 60; 
            } else {
              setIsWorkPhase(true); 
              return workTime * 60; 
            }
          }
          return prevTime - 1; 
        });
      }, 1000);
    }

    return () => clearInterval(timer); 
  }, [isRunning, timeLeft, isWorkPhase, workTime, breakTime]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsWorkPhase(true); 
    setTimeLeft(workTime * 60);
  };

  const changeWorkTime = (event) => {
    setWorkTime(event.target.value);
    setTimeLeft(event.target.value * 60); 
  };

  const changeBreakTime = (event) => {
    setBreakTime(event.target.value);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100vw"}}>
      <h1 style={{fontSize: "2.5rem"}}>Método Pomodoro</h1>

      <div style={{textAlign: "center", width: "60vw"}}>
        <h2 style={{margin: "1rem", fontSize: "2rem", color: "#3b71dc"}}>¿Qué es la Técnica Pomodoro?</h2>
        <p style={{textAlign: "justify", textJustify: "inter-word", margin: "0.5rem", color: "#777777"}}>
          El metodo Pomodoro es una tecnica de gestion del tiempo que divide el trabajo en intervalos, generalmente de 25 minutos, seguidos por un corto descanso.
          Este proceso se repite varias veces y despues de un ciclo completo, se toma un descanso más largo.
        </p>
      </div>

      <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "2rem"}}>
        <h3 style={{color: "#3155dc"}}>{isWorkPhase ? 'Trabajo' : 'Descanso'}</h3>
        <div style={{fontSize: "3rem", padding: "3rem", border: "2px solid #3b71dc", borderRadius: "10px", margin: "1rem"}}>
          <span style={{fontSize: "2.5rem", fontWeight: "bold", color: "#10aaaa"}}>{formatTime(timeLeft)}</span>
        </div>
        <div style={{display: "flex", gap: "2rem"}}>
          <button style={{padding: "10px 20px", fontSize: "1rem", cursor:"pointer", borderRadius: "10px", backgroundColor:"#3b71dc", color: "#ffffff", border: "none"}} onClick={toggleTimer}>
            {isRunning ? 'Pausar' : 'Iniciar'}
          </button>
          <button style={{padding: "10px 20px", fontSize: "1rem", cursor:"pointer", borderRadius: "10px", backgroundColor:"#3b71dc", color: "#ffffff", border: "none"}} onClick={resetTimer}>Reiniciar</button>
        </div>
      </div>

      <div style={{margin: "2rem", textAlign: "center"}}>
        <div>
          <label>Tiempo de trabajo (minutos):</label>
          <input
            type="number"
            value={workTime}
            onChange={changeWorkTime}
            min="1"
            style={{width: "60px", padding: "5px", fontSize: "1rem", textAlign: "center", margin: "1rem"}}
          />
        </div>
        <div>
          <label>Tiempo de descanso (minutos):</label>
          <input
            type="number"
            value={breakTime}
            onChange={changeBreakTime}
            min="1"
            style={{width: "60px", padding: "5px", fontSize: "1rem", textAlign: "center", margin: "1rem"}}
          />
        </div>
      </div>
    </div>
  );
};


export default Pomodoro;
