import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import './Form.css'


const ChoosePage = (props) => {
  if(props.data == false){
    return (<MainHeader setFcn={props.setFcn}/>);
  }else if(props.data == true){
    return ( <FormPage data={props.qData} /> );
  }

  
}

const MainHeader = (props) => {
  return (
    <header style={{backgroundColor: "#f6fafc"}}>
      <h1>Cual es tu estilo de aprendizaje ? </h1>
      <p>Responde este breve cuestionario y descubre el método de estudio que mejor se adapta a ti.</p>
      <div className="container">
        <span>🎯</span>   
        <h2>Instrucciones</h2>
	<p>✓ Contesta de forma sincera. No hay respuestas correctas o incorrectas</p>
	<p>✓ Elige la respuesta que refleje mejor tu situacion</p>
	<p>✓ Al final recibiras un resultado con tu estilo predominante y recomendaciones de tecnicas de estudio basadas en tus respuestas</p>
	<button onClick={() => props.setFcn(true)}>Comenzar cuestionaro</button>
      </div>
    </header>
  );
}

const QuestionNumber = (props) => {
  return (
   <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
    <div id="span-container">
    <span>Pregunta {props.data + 1} de 8</span>
    <span>{props.data / 8 * 100} % completado</span>
    </div>
    <div className="bottom-bar">
    <div className="inner-bar" style={{width: (props.data / 8 * 100) + "%"}}></div>
     </div>
    </div>
  );
}

const QuestionContainer = (props) => {
  const currentQuestion = props.data[props.current]; 
  if(props.current > 7){
    return ( <div>Finished</div> )
  }
  const [selected, setSelected] = useState(-1);
  const currentAns = useRef(0);
  const updateRef = (ans) => {
    currentAns.current += ans;
    setSelected(-1);
    console.log(currentAns.current);
  }

  return (
    <div style={{ width: "60vw", display: "flex", flexDirection: "column" }} className="question-container">
      <h3> {props.current + 1} . {currentQuestion.question}</h3>
      {currentQuestion.answers.map((ans, index) => (
        <div className={`${selected == index  ? "ans-container-selected" : "ans-container"}`} onClick={() => {setSelected(index)}}>
          {ans.text}
        </div>
      ) )}

      <div style={{display: "flex", justifyContent: "space-between" }}>
        <button className="prev">Anterior</button>
        <button className="next" onClick={() => {props.next(); updateRef(selected)}}>Siguiente</button>
      </div>
    </div>
  );
}


const FormPage = (props) => {
  const [qNumber, setqNumber] = useState(0);
  const [total, setTotal] = useState(0);
  const handlePlus = () => {
    setqNumber(prev => prev + 1);
  }

const updateTotal = (current) => {
  setTotal(prev => prev + current);
  console.log(total)
}
  return(
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} className="form">
      <QuestionNumber data={qNumber}/>
      <QuestionContainer data={props.data} current={qNumber} next={handlePlus} totalFcn={updateTotal}/>
    </div>  
  );
}

function Form(){



const questions = [
    {
      question: 'Cuando estudias algo nuevo, ¿qué te ayuda más a entenderlo?',
      answers: [
        { text: 'Ver esquemas, mapas o diagramas', value: 1 },
        { text: 'Escuchar una explicación o debatirlo con alguien', value: 2 },
        { text: 'Hacer ejercicios prácticos o manipular objetos relacionados', value: 3 },
      ],
    },
    {
      question: 'Si te explican un tema complicado, ¿qué prefieres?',
      answers: [
        { text: 'Ver un video o presentación visual', value: 1 },
        { text: 'Que te lo expliquen en voz alta o con ejemplos hablados', value: 2 },
        { text: 'Intentar hacerlo por ti mismo', value: 3 },
      ],
    },
    {
      question: 'Cuando tomas apuntes, ¿sueles?',
      answers: [
        { text: 'Usar colores, subrayados, símbolos para organizar la información', value: 1 },
        { text: 'Grabar la clase o repetirla mentalmente para recordarla', value: 2 },
        { text: 'Escribir poco y enfocarte en hacer o practicar lo aprendido', value: 3 },
      ],
    },
    {
      question: '¿Cómo recuerdas mentalmente la información?',
      answers: [
        { text: 'Al ver imágenes o leer notas', value: 1 },
        { text: 'Al repetirla o escucharla varias veces', value: 2 },
        { text: 'Al realizar una actividad relacionada con el tema', value: 3 },
      ],
    },
    {
      question: 'En tu tiempo libre, ¿qué tipo de actividades disfrutas más?',
      answers: [
        { text: 'Dibujar, ver películas o leer', value: 1 },
        { text: 'Escuchar música o podcasts', value: 2 },
        { text: 'Hacer deporte, manualidades o juegos de movimiento', value: 3 },
      ],
    },
    {
      question: '¿Qué haces cuando estudias y te distraes?',
      answers: [
        { text: 'Busco organizar mis apuntes o hacer un esquema nuevo', value: 1 },
        { text: 'Repito en voz alta para concentrarme', value: 2 },
        { text: 'Me levanto, camino o hago algo físico antes de seguir', value: 3 },
      ],
    },
    {
      question: 'Si alguien te da indicaciones, ¿cómo las sigues mejor?',
      answers: [
        { text: 'Viendo un mapa o un ejemplo visual', value: 1 },
        { text: 'Escuchando las instrucciones', value: 2 },
        { text: 'Probando directamente cómo hacerlo', value: 3 },
      ],
    },
    {
      question: '¿Cómo prefieres estudiar antes de un examen?',
      answers: [
        { text: 'Con fichas o resúmenes', value: 1 },
        { text: 'Leyendo en voz alta o explicándole a alguien', value: 2 },
        { text: 'Haciendo ejercicios o simulando la práctica real', value: 3 },
      ],
    },
  ];


  const [showForm, setShowForm] = useState(false);
  return (
    <ChoosePage data={showForm} setFcn={setShowForm} qData={questions}/>
  );
}

export default Form;
