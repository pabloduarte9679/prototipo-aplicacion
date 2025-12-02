import React from "react";
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


const MainHeaderStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f2f6f3",
    height: "auto",
    padding: "1rem",
}

const spanStyle = {
  backgroundImage: "linear-gradient(to right, #2767d4, #3eb688, #ee8e28)",
  color: "transparent",
  backgroundClip: "text",
}

const Compare = (props) => {
  if(props.data == false){
    return (<div></div> );
  }else if(props.data == true){
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h3>Selecciona dos tecnicas de estudio</h3>

	<div style={{width: "50%", display: "flex", justifyContent: "space-between"}}>
	<select id="" name="" className="compare">
	<option value="pomodoro">Tecnica Pomodoro</option>
	<option value="cornell">Metodo Cornell</option>
	<option value="mental">Mapa mental</option>
	<option value="mnemotecnica">Mnemotecnica</option>
	<option value="flashcard">Flashcard</option>
	<option value="compare">Cuadros comparativos</option>
	</select>


	<select id="" name="" className="compare">
	<option value="pomodoro">Tecnica Pomodoro</option>
	<option value="cornell">Metodo Cornell</option>
	<option value="mental">Mapa mental</option>
	<option value="mnemotecnica">Mnemotecnica</option>
	<option value="flashcard">Flashcard</option>
	<option value="compare">Cuadros comparativos</option>
	</select>
        </div>
      </div>
    );
  }
}

const MainHeader = (props) => {
  let navigate = useNavigate();
    return(
        <header style={MainHeaderStyle}>
            <h1 style={{fontSize:"4.75rem", marginTop: "3rem"}}>
                Descubre tu forma ideal de&nbsp; <span style={spanStyle}>aprender</span>
            </h1>
            <p className="p1">Explora 15 metodos de estudio cientificamente probados y encuentra la combinacion perfecta para tu estilo de aprendizaje</p>

	    <div style={{display: "flex", justifyContent: "space-between", margin: "1rem"}}>
            <button style={{color:"#ffffff", backgroundColor:"#3b71dc", padding:"2% 4%", fontWeight:"bold", borderRadius:"10px", border:"solid", margin: "1rem"}} onClick={() => navigate("/form")}>Descubrir mi metodo ideal </button>
            <button style={{backgroundColor:"#ffffff", padding:"2% 4%", border:"solid 1px #ccc", borderRadius:"10px", margin: "1rem"}} onClick={() => props.setCompareCond(true)}>Comparar tecnicas de estudio</button>
	    </div>
	    <div style={{display: "flex", width: "60%", height: "25vh", alignItems: "center", justifyContent: "space-between", margin: "2%", textAlign: "center"}}>
		<div class="three-container">
                <h3>15 Metodos</h3>
		<p>tecnicas probadas</p>
		</div>
		<div class="three-container">
                  <h3>Personalizado</h3>
		  <p>Para tu estilo</p>
		</div>
		<div class="three-container">
                  <h3>Gratis</h3>
		  <p>Sin limites</p>
		</div>
	    </div>
        </header>
    );
}

const mainStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5%",

}

const MainContent = (props) => {
  let navigate = useNavigate();
    return(
        <main style={mainStyle}>
            <h2 style={{fontSize:"2.5rem"}}>Explora las tecnicas de estudio</h2>
            <p className="p1">Cada tecnica tiene un proposito distinto. Conoce los metodos de estudio mas efectivos y elige los que se adaptan mejor a tu forma de aprender</p>
            <div id="method-container">
              {
                props.data.map((method) => 
                  <div className="method" key={method.name}>
		    <div style={{display: "flex", justifyContent: "space-between"}}>
                      <span style={{fontSize: "30px", backgroundColor: "#ebf2fe", borderRadius: "10px", padding: "10px"}}>{method.icon}</span>
		      <span style={{fontSize: "12px", color: "#65758b", fontWeight: "bold"}}>{method.type}</span>
		    </div>
                    <h3>{method.name}</h3>
		    <p style={{color: "#65758b"}}>{method.info}</p>
		    <p style={{fontSize: "0.875rem", color: "#65758b"}}><b style={{color: "#000"}}>Benficios: </b>{method.benefits}</p>
		    <p style={{fontSize: "0.875rem", color: "#65758b"}}><b style={{color: "#000"}}>Ideal para: </b>{method.ideal}</p>
			<button className="method-btn" onClick={() => navigate(method.path)}>Ver mas</button>
		  </div>
		) 
              }
            </div>
        </main>
    );
}

function Page(){
    const [compareCond, setCompareCond]  = useState(false);

    const methods = [
  {
    icon: "🍎",
    name: "Metodo pomodoro",
    info: "Divide tu tiempo de estudio en bloques de concentracion de 25 minutos con descansos breves.",
    benefits: "Mantiene el enfoque, evita distracciones y aprovecha mejor la energia mental.",
    ideal: "cualquier estilo de aprendizaje que busque organizacion y equilibrio.",
    type: "mixto",
    path: "/pomodoro"
  },
  {
    icon: "🧠",
    name: "mapas mentales",
    info: "Transforma la informacion en esquemas, colores, y conexiones visuales",
    benefits: "Facilita la creatividad, la memoria y la comprension global del tema",
    ideal: "Quienes comprenden mejor al ver relaciones entre ideas",
    type: "visual",
    path: "/mentalmap"
  },
  {
    icon: "🔎",
    name: "Tecnica Feynman",
    info: "Consiste en explicar un tema con tus propias palabras como si ensenaras a alguien mas",
    benefits: "Revela que tanto entiendes realmente y fortalece tu memoria activa",
    ideal: "Quienes aprender al hablar o practicar",
    type: "auditivo-kinestisico",
    path: "/feynman"
  },
  {
    icon: "⌛",
    name: "Estudio espaciado",
    info: "Reparte tus sesiones de estudio en diferentes dias para reforzar la memoria a largo plazo",
    benefits: "Evita el olvido rapido y mejora la retencion de conceptos clave",
    ideal: "Estudiantes organizados que buscan constancia sin saturarse",
    type: "mixto",
    path: "/spacedstudy"
  },
  {
    icon: "📓",
    name: "Metodo Cornell",
    info: "Divide tus apuntes en tres secciones: notas, ideas clave, y resumen final",
    benefits: "Organiza la informacion y facilita el repaso posterior",
    ideal: "Quienes prefieren tener estructura y claridad al estudiar",
    type: "visual-auditivo",
    path: "/cornell",
  },
  {
    icon: "💭",
    name: "Mnemotecnica",
    info: "Es posible asociar imagenes o palabras clave con el concepto que se estudia",
    benefits: "Sirve como tecnica complementaria para memorizar detalles especificos",
    ideal: "Mentes creativas que asocian conceptos con imagenes, palabras clave, etc...",
    type: "Mixto",
    path: "/mnemo"
  },
  {
    icon: "📚",
    name: "Método SQ3R",
    info: "Técnica completa para comprender textos a profundidad: observar, preguntar, leer, recitar y repasar.",
    benefits: "Favorece la comprensión, la memoria y la autoconfianza.",
    ideal: "Materias teóricas o con mucha lectura.",
    type: "Mixto",
    path: "/sq3r"
  },
  {
    icon: "🃏",
    name: "Flashcards",
    info: "Tarjetas con preguntas y respuestas breves.",
    benefits: "Refuerzan la memoria activa y permiten repasar en cualquier momento.",
    ideal: "Aprender vocabulario, fórmulas o fechas.",
    type: "Visual",
    path: "/flashcard"
  },
  {
    icon: "✍️",
    name: "Resúmenes",
    info: "Simplifica los temas en frases cortas y organizadas con un enfasis en las ideas principales del texto a resumir.",
    benefits: "Ayuda a identificar lo esencial y repasar con rapidez.",
    ideal: "Estudiantes visuales que disfrutan sintetizar información.",
    type: "Visual",
    path: "/summary"
  },
  {
    icon: "📖",
    name: "Lectura Activa",
    info: "No es solo leer, sino subrayar, anotar y resumir mientras lees.",
    benefits: "Aumenta la concentración y la comprensión del texto..",
    ideal: "Quienes retienen mejor la información escrita.",
    type: "Visual",
    path: "/active"
  },
  {
    icon: "🔄",
    name: "Práctica Intercalada",
    info: "Alterna diferentes temas o tipos de ejercicios en una misma sesión.",
    benefits: "Evita la monotonía y fortalece la habilidad de aplicar lo aprendido en distintos contextos.",
    ideal: "Materias prácticas o técnica",
    type: "Mixto",
    path: "/distributed"
  },
  
] 


    return (
        <>
        <MainHeader setCompareCond= {setCompareCond}/>
	<Compare data={compareCond}/>
        <MainContent data={methods}/>    
        </>
    );
}

export default Page;
