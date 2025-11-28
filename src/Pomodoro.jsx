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
    <div style={styles.container}>
      <h1 style={styles.header}>Método Pomodoro</h1>

      <div style={styles.infoContainer}>
        <h3>¿Qué es la Técnica Pomodoro?</h3>
        <p>
          El Método Pomodoro es una técnica de gestión del tiempo que divide el trabajo en intervalos, generalmente de 25 minutos, seguidos por un corto descanso.
          Este proceso se repite varias veces y después de un ciclo completo, se toma un descanso más largo.
        </p>
        <p><b>Beneficios:</b> Aumenta la productividad, mejora el enfoque y reduce el estrés al equilibrar trabajo y descanso.</p>
      </div>

      <div style={styles.timerContainer}>
        <h2>{isWorkPhase ? 'Trabajo' : 'Descanso'}</h2>
        <div style={styles.timer}>
          <span style={styles.timeText}>{formatTime(timeLeft)}</span>
        </div>
        <div style={styles.buttons}>
          <button style={styles.button} onClick={toggleTimer}>
            {isRunning ? 'Pausar' : 'Iniciar'}
          </button>
          <button style={styles.button} onClick={resetTimer}>Reiniciar</button>
        </div>
      </div>

      <div style={styles.settings}>
        <div>
          <label>Tiempo de trabajo (minutos):</label>
          <input
            type="number"
            value={workTime}
            onChange={changeWorkTime}
            min="1"
            style={styles.input}
          />
        </div>
        <div>
          <label>Tiempo de descanso (minutos):</label>
          <input
            type="number"
            value={breakTime}
            onChange={changeBreakTime}
            min="1"
            style={styles.input}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  infoContainer: {
    maxWidth: '600px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  timerContainer: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  timer: {
    fontSize: '3rem',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f2f6f3',
    border: '2px solid #ccc',
    width: '200px',
  },
  timeText: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  buttons: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#3b71dc',
    color: 'white',
  },
  settings: {
    marginTop: '20px',
    textAlign: 'center',
  },
  input: {
    width: '60px',
    padding: '5px',
    fontSize: '1rem',
    textAlign: 'center',
    marginLeft: '10px',
  },
};

export default Pomodoro;
