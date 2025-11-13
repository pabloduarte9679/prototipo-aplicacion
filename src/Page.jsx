import React from "react";
import {useState} from 'react';


const MainHeaderStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5%", 
    backgroundColor: "#f2f6f3",

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
    return(
        <header style={MainHeaderStyle}>
            <h1 style={{fontSize:"4.75rem"}}>
                Descubre tu forma ideal de <span style={spanStyle}>aprender</span>
            </h1>
            <p className="p1">Explora 15 metodos de estudio cientificamente probados y encuentra la combinacion perfecta para tu estilo de aprendizaje</p>

	    <div style={{display: "flex", justifyContent: "space-between"}}>
            <button style={{color:"#ffffff", backgroundColor:"#3b71dc", padding:"2% 4%", fontWeight:"bold", borderRadius:"10px", border:"solid"}}>Descubrir mi metodo ideal </button>
            <button style={{backgroundColor:"#ffffff", padding:"2% 4%", border:"solid 1px #ccc", borderRadius:"10px"}} onClick={() => props.setCompareCond(true)}>Comparar tecnicas de estudio</button>
	    </div>
	    <div style={{display: "flex", width: "60%", height: "25vh", alignItems: "center", justifyContent: "space-between", margin: "5%", textAlign: "center"}}>
		<div class="three-container">
		<span className="material-icons">
		</span>
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
    return(
        <main style={mainStyle}>
            <h2 style={{fontSize:"2.5rem"}}>Explora las tecnicas de estudio</h2>
            <p className="p1">Cada tecnica tiene un proposito distinto. Conoce los metodos de estudio mas efectivos y elige los que se adaptan mejor a tu forma de aprender</p>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", width: "75vw", flexWrap: "wrap", justifyContent: "center", gap: "20px"}}>
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
    path: "Pomodoro.jsx"
  },
  {
    icon: "🧠",
    name: "mapas mentales",
    info: "Transforma la informacion en esquemas, colores, y conexiones visuales",
    benefits: "Facilita la creatividad, la memoria y la comprension global del tema",
    ideal: "Quienes comprenden mejor al ver relaciones entre ideas",
    type: "visual",
    path: "MentalMap.jsx"
  },
  {
    icon: "🔎",
    name: "Tecnica Feynman",
    info: "Consiste en explicar un tema con tus propias palabras como si ensenaras a alguien mas",
    benefits: "Revela que tanto entiendes realmente y fortalece tu memoria activa",
    ideal: "Quienes aprender al hablar o practicar",
    type: "auditivo-kinestisico",
    path: "Feynman.jsx"
  },
  {
    icon: "⌛",
    name: "Estudio espaciado",
    info: "Reparte tus sesiones de estudio en diferentes dias para reforzar la memoria a largo plazo",
    benefits: "Evita el olvido rapido y mejora la retencion de conceptos clave",
    ideal: "Estudiantes organizados que buscan constancia sin saturarse",
    type: "mixto",
    path: "SpacedStudy.jsx"
  },
  {
    icon: "🧩",
    name: "autoevaluacion",
    info: "Implica ponerte a prueba constantemente, simulando examenes o preguntas tipo test",
    benefits: "El error se convierte en una oportunidad de aprendizaje y refuerza la memoria",
    ideal: "Quienes aprenden al recordar y repetir informacion",
    type: "auditivo - visual",
    path: "Auto.jsx"
  },
  {
    icon: "📓",
    name: "Metodo Cornell",
    info: "Divide tus apuntes en tres secciones: notas, ideas clave, y resumen final",
    benefits: "Organiza la informacion y facilita el repaso posterior",
    ideal: "Quienes prefieren tener estructura y claridad al estudiar",
    type: "visual-auditivo",
    path: "Cornell.jsx",
  },
  {
    icon: "💭",
    name: "Mnemotecnica",
    info: "Es posible asociar imagenes o palabras clave con el concepto que se estudia",
    benefits: "Sirve como tecnica complementaria para memorizar detalles especificos",
    ideal: "Mentes creativas que asocian conceptos con imagenes, palabras clave, etc..."
  }
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
