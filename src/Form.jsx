import React, { useState, useRef } from 'react';
import './Form.css';
const ResultPage = ({ total }) => {
  let style = "";
  let recommendations = [];

  if (total <= 12) {
    style = "Visual";
    recommendations = [
      "Mapas mentales",
      "Metodo Cornell",
      "Flashcards",
      "Resumenes",
      "Lectura activa"
    ];
  } else if (total <= 20) {
    style = "Auditivo";
    recommendations = [
      "Explicar en voz alta",
      "Grabar y escuchar contenido",
      "Aprendizaje mediante podcasts",
      "Estudiar con otra persona",
      "Técnica Feynman hablada"
    ];
  } else {
    style = "Kinestésico";
    recommendations = [
      "Aprendizaje mediante práctica",
      "Modelos físicos o simuladores",
      "Ejercicios interactivos",
      "Estudiar caminando o moviéndose",
      "Roleplay o dramatización"
    ];
  }

  return (
    <div className="result-page">
      <h1>🎉 ¡Has completado el cuestionario!</h1>
      <h2>Tu estilo de aprendizaje predominante es:</h2>
      <h1 style={{ fontSize: "2.5rem", color: "#4a7" }}>{style}</h1>

      <h2>Técnicas de estudio recomendadas:</h2>
      <ul>
        {recommendations.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
        Estas técnicas te ayudarán a estudiar de manera más efectiva según cómo procesa tu mente la información.
      </p>
    </div>
  );
};
const ChoosePage = (props) => {
  if (props.data === false) {
    return (<MainHeader setFcn={props.setFcn} />);
  } else if (props.data === true) {
    return (<FormPage data={props.qData} />);
  }
};

const MainHeader = (props) => {
  return (
    <header style={{ backgroundColor: "#f6fafc" }}>
      <h1>¿Cuál es tu estilo de aprendizaje?</h1>
      <p>Responde este breve cuestionario y descubre el método de estudio que mejor se adapta a ti.</p>
      <div className="container">
        <span>🎯</span>
        <h2>Instrucciones</h2>
        <p>✓ Contesta de forma sincera. No hay respuestas correctas o incorrectas</p>
        <p>✓ Elige la respuesta que refleje mejor tu situación</p>
        <p>✓ Al final recibirás recomendaciones adaptadas a ti</p>
        <button onClick={() => props.setFcn(true)}>Comenzar cuestionario</button>
      </div>
    </header>
  );
};

const QuestionNumber = (props) => {
  const progress = (props.data / 8) * 100;

  return (
    <div style={{ textAlign: "center" }}>
      <span>Pregunta {props.data + 1} de 8</span>
      <div className="bottom-bar">
        <div className="inner-bar" style={{ width: progress + "%" }}></div>
      </div>
    </div>
  );
};

// ---------------------- EACH QUESTION ----------------------
const QuestionContainer = (props) => {
  const currentQuestion = props.data[props.current];
  const [selected, setSelected] = useState(-1);

  if (props.current > 7) {
    return <ResultPage total={props.total} />;
  }

  return (
    <div className="question-container">
      <h3>{props.current + 1}. {currentQuestion.question}</h3>

      {currentQuestion.answers.map((ans, index) => (
        <div
          key={index}
          className={`${selected === index ? "ans-container-selected" : "ans-container"}`}
          onClick={() => setSelected(index)}
        >
          {ans.text}
        </div>
      ))}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="prev" disabled={props.current === 0}>Anterior</button>
        <button className="next" onClick={() => {
          if (selected !== -1) {
            props.totalFcn(currentQuestion.answers[selected].value);
            props.next();
            setSelected(-1);
          }
        }}>Siguiente</button>
      </div>
    </div>
  );
};
const FormPage = (props) => {
  const [qNumber, setqNumber] = useState(0);
  const [total, setTotal] = useState(0);

  const handlePlus = () => {
    setqNumber(prev => prev + 1);
  };

  const updateTotal = (value) => {
    setTotal(prev => prev + value);
  };

  return (
    <div className="form">
      <QuestionNumber data={qNumber} />
      <QuestionContainer
        data={props.data}
        current={qNumber}
        next={handlePlus}
        total={total}
        totalFcn={updateTotal}
      />
    </div>
  );
};
function Form() {
  const questions = [
    {
      question: 'Cuando estudias un tema complicado, ¿qué te ayuda más a entenderlo rápidamente?',
      answers: [
        { text: 'Ver imágenes, diagramas o mapas conceptuales', value: 1 },
        { text: 'Escuchar una explicación clara o debatirlo', value: 2 },
        { text: 'Hacer ejercicios, moverme o manipular algo relacionado', value: 3 },
      ],
    },
    {
      question: '¿Cómo te concentras mejor al estudiar?',
      answers: [
        { text: 'Con gráficos, colores o presentaciones visuales', value: 1 },
        { text: 'Leyendo en voz alta o escuchando audio', value: 2 },
        { text: 'Haciendo pausas activas o actividades prácticas', value: 3 },
      ],
    },
    {
      question: '¿Cómo recuerdas mejor la información?',
      answers: [
        { text: 'Recordando una imagen o esquema mental', value: 1 },
        { text: 'Recordando lo que escuché o expliqué', value: 2 },
        { text: 'Recordando la sensación o acción que hice', value: 3 },
      ],
    },
    {
      question: 'Cuando te enseñan algo nuevo, ¿qué prefieres?',
      answers: [
        { text: 'Un ejemplo visual o un video', value: 1 },
        { text: 'Una explicación detallada hablada', value: 2 },
        { text: 'Probarlo por mi cuenta', value: 3 },
      ],
    },
    {
      question: '¿Qué tipo de actividades disfrutas más al aprender?',
      answers: [
        { text: 'Dibujar, ver imágenes o leer diagramas', value: 1 },
        { text: 'Conversar, escuchar o explicar a otros', value: 2 },
        { text: 'Moverme, construir o experimentar', value: 3 },
      ],
    },
    {
      question: '¿Qué haces cuando algo no te queda claro?',
      answers: [
        { text: 'Busco un esquema, imagen o ejemplo visual', value: 1 },
        { text: 'Pido que me lo expliquen otra vez en voz alta', value: 2 },
        { text: 'Intento practicar o repetir la acción', value: 3 },
      ],
    },
    {
      question: '¿Cómo estudias mejor antes de un examen?',
      answers: [
        { text: 'Resúmenes visuales, mapas mentales o flashcards visuales', value: 1 },
        { text: 'Leyendo en voz alta, escuchando o explicando', value: 2 },
        { text: 'Haciendo simulaciones, ejercicios o práctica física', value: 3 },
      ],
    },
    {
      question: 'Si alguien te da instrucciones, ¿cómo las entiendes mejor?',
      answers: [
        { text: 'Viendo un ejemplo o imagen', value: 1 },
        { text: 'Escuchando las indicaciones', value: 2 },
        { text: 'Probando directamente cómo hacerlo', value: 3 },
      ],
    },
  ];

  const [showForm, setShowForm] = useState(false);
  return (
    <ChoosePage data={showForm} setFcn={setShowForm} qData={questions} />
  );
}

export default Form;

