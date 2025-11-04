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
            <h1 style={{fontSize:"3rem"}}>
                Conoce las tecnicas de estudio <span style={spanStyle}>mas efectivas</span>
            </h1>
            <p className="p1">Cada mente aprende de forma diferente. Descubre que caracteriza a cada metodo y elige el que mejor se adapte a ti</p>

	    <div style={{display: "flex", justifyContent: "space-between"}}>
            <button style={{color:"#ffffff", backgroundColor:"#3b71dc", padding:"2% 4%", fontWeight:"bold", borderRadius:"10px", border:"solid"}}>Descubrir mi metodo ideal </button>
            <button style={{backgroundColor:"#ffffff", padding:"2% 4%", border:"solid 1px #ccc", borderRadius:"10px"}} onClick={() => props.setCompareCond(true)}>Comparar tecnicas de estudio</button>
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

const MainContent = () => {
    return(
        <main style={mainStyle}>
            <h2 style={{fontSize:"2.5rem"}}>Explora las tecnicas de estudio</h2>
            <p className="p1">Cada mente aprende de forma diferente. Descubre qué caracteriza a cada método y elige el que mejor se adapte a ti.</p>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div className="method">
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <span className="material-symbols-outlined">alarm</span>
                        <div style={{margin:"5%"}}><h3>Tecnica pomodoro</h3>
                        </div>
                    </div>
                    <p>La técnica pomodoro consiste en fraccionar el tiempo de estudio en intervalos de 25 minutos con un descanso de 5 minutos entre cada intervalo. Después de 4 intervalos, se hace un descanso más largo.
		    </p>

                    <div>
                        <span className="ideal">Ideal para</span>
                        <p style={{color:"#71717a"}}>Esta técnica te será de gran ayuda si sabes cómo priorizar tareas y concentrarte sin distraerte fácilmente.
			</p>
                    </div>
                </div>
                <div className="method">
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <span className="material-symbols-outlined">alarm</span>
                        <div style={{margin:"5%"}}><h3>Metodo Cornell</h3>
                        </div>
                    </div>
                    <p>Este método sirve para interpretar y memorizar los apuntes que tomas en las clases de manera eficiente.
		    Para llevarlo a cabo, es importante dividir la hoja en dos diferentes secciones: en una sección tomarás los apuntes convencionales y en la otra anotarás palabras claves o preguntas.

		    </p>

                    <div>
                        <span className="ideal">Ideal para</span>
                        <p style={{color:"#71717a"}}>retener la información al consultar tus apuntes y tratar de dar respuesta a las preguntas que planteaste.

			</p>
                    </div>
                </div>



                <div className="method">
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <span className="material-symbols-outlined">alarm</span>
                        <div style={{margin:"5%"}}><h3>Mapas mentales</h3>
                        </div>
                    </div>
                    <p>
	              Los mapas mentales representan ideas, palabras, dibujos, imágenes, entre otros elementos que se relacionan a una idea o concepto central.

		    </p>

                    <div>
                        <span className="ideal">Ideal para</span>
                        <p style={{color:"#71717a"}}>
 			  Es ideal para quienes aprenden mejor al visualizar los contenidos de una manera organizada
			</p>
                    </div>
                </div>

                <div className="method">
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <span className="material-symbols-outlined">alarm</span>
                        <div style={{margin:"5%"}}><h3>Mnemotecnica</h3>
                        </div>
                    </div>
                    <p>
		    La mnemotecnia es útil para recordar conocimientos complejos, sin embargo, requiere de práctica para poder dominarla debido a que se requiere la habilidad de asociar elementos fácilmente.

		    </p>

                    <div>
                        <span className="ideal">Ideal para</span>
                        <p style={{color:"#71717a"}}>
			  asociar imágenes o palabras clave con el concepto que se estudia.

			</p>
                    </div>
                </div>

                <div className="method">
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <span className="material-symbols-outlined">alarm</span>
                        <div style={{margin:"5%"}}><h3>Flashcard</h3>
                        </div>
                    </div>
                    <p>
Una flashcard es una tarjeta (física o virtual) con una pregunta, concepto o término en un lado y su respuesta o definición en el otro. Es una herramienta de estudio muy útil para memorizar información de manera eficiente, ya que permite practicar la recuperación activa de conocimientos a través de un sistema de preguntas y respuestas. 

		    </p>

                    <div>
                        <span className="ideal">Ideal para</span>
                        <p style={{color:"#71717a"}}>
			Tomar notas de conceptos especificos y organizar los apuntes
			</p>
                    </div>
                </div>

                <div className="method">
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <span className="material-symbols-outlined">alarm</span>
                        <div style={{margin:"5%"}}><h3>Cuadros comparativos</h3>
                        </div>
                    </div>
                    <p>
	            Si te interesa clasificar información compleja y comparar dos o más elementos de manera gráfica y organizada, entonces los cuadros comparativos serán de gran ayuda para ti.

		    </p>

                    <div>
                        <span className="ideal">Ideal para</span>
                        <p style={{color:"#71717a"}}>
			Comparar ideas o conceptos en una forma grafica
			</p>
                    </div>
                </div>

            </div>
        </main>
    );
}

function Page(){
    const [compareCond, setCompareCond]  = useState(false);
    return (
        <>
        <MainHeader setCompareCond= {setCompareCond}/>
	<Compare data={compareCond}/>
        <MainContent />    
        </>
    );
}

export default Page;
