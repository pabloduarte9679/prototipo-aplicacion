import { useState } from 'react'
import headerImg from "./assets/header-img.jpg"
import './App.css'
import Page from "./Page.jsx"

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
const rootContainer = {
  backgroundColor: "#ffffff",
  boxSizing: "border-box"

};

const headerStyle = {
  width: "fit-content",
  backgroundColor: "#fdf8f5",
  padding: "10%",
  display: "flex",
  flexDirection: "row",
  fontFamily: "Arial"

}

const spanStyle = {
  backgroundImage: "linear-gradient(to right, #4d44d2, #e97352)",
  color: "transparent",
  backgroundClip: "text",
}


const mainStyle = {
  width: "75%",
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: "#fdfdfd",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial",
  padding: "5%",
}

const mainBoxStyle = {
  width: "320px",
  height: "256px",
  borderRadius: "10px",
  border: "2px solid #d9d8e7",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "3%"
  
}

const mainParagraph = {
  color: "#71717a" 
}

const asideStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: "5%",


}
const MainHeader = () => {
  let navigate = useNavigate();
  return (
    <header className="headerMain" style={headerStyle}>
      <div style={{ flex:"3", display: "flex", flexDirection: "column"}}>
        <span style={{color: "#f0754c", backgroundColor: "#f7e9e8", padding: "10px", borderRadius: "20px" }}>Consultoria academica personalizada</span>
	<h1 style={{color: "#000000", fontSize: "3.75rem", fontWeight: "700"}}>Descubre tu forma ideal de <span style={spanStyle}>estudiar</span></h1>
	<p style={{color:"#999999", fontSize: "1.25rem", width:"80%"}}>Transforma tu manera de aprender con una consultoria personalizada que te ayudara a encontrar con el metodo de estudio que mejor se adapte a ti</p>
	<div>
          <button style={{backgroundColor: "#f0754c", border: "solid 1px transparent", padding: "20px 40px", borderRadius: "10px", margin: "10px", color: "#ffffff"}} onClick={() => navigate("/page")}>Haz el test ahora</button>
	</div>
      </div>
      <div style={{flex: "1"}}>
        <img src={headerImg} style={{width:"660px", height: "380px", borderRadius: "20px", boxShadow: "10px 10px 5px linear-gradient(#888, #aaa) "}}/>
      </div>
    </header>
  );
}

const MainContent = () => {
  return (
   <main style={mainStyle}>
     <h2 style={{fontSize: "3rem"}}>Aprender nunca habia sido tan <span style={{color: "#f0754c"}}>tuyo</span> </h2>
     <p style={{color: "#71717a", fontSize: "1.125rem"}}>Cada estudiante tiene una forma unica de comprender, retener y aplicar el conocimiento. Mi servicio de consultoria academica personalizada esta disenado para ayudarte a identificar tu estilo de aprendizaje, optimizar tus habitos de estudio y mejorar tu rendimiento academico.</p>

     <p style={{fontSize: "1.125rem"}}>Ya seas estudiante de secundaria, preparatoria o universidad, te acompano paso a paso para que estudiar deje de ser una carga y se convierta en un experencia efectiva, clara y motivadora.</p>
     <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
       <div style={mainBoxStyle}><h3>Personalizado</h3>
       <p style={mainParagraph}>Metodos adaptados a tu estilo unico de aprendizaje y objetivos especificos.</p>
       </div>
       <div style={mainBoxStyle}><h3>Resultados Reales</h3>
       <p style={mainParagraph}>Estrategias comprobadas que mejoran tu rendimiento y confianza académica.</p>
       </div>
       <div style={mainBoxStyle}><h3>Acompanamiento</h3>
       <p style={mainParagraph}>Seguimiento continuo para asegurar que mantengas el rumbo hacia tus metas.</p>
       </div>
     </div>
     <p style={{color: "#4742d7", fontSize: "1.25rem"}}>Conoce como puedes aprender mejor y estudiar de forma mas inteligente, no mas dificil</p>
   </main>
  );
}

const afterStyle = {
  background: "linear-gradient(to right, #4f44d0, #ec7450)",
  width: "200px",
  height: "15px",
  borderRadius: "10px",
}

const asideParagraph = {
  background: "linear-gradient(to right, #edecfb, #fcf1ee)",
  borderRadius: "10px",
  borderLeft: "#f0754c solid 2px",
  padding: "3%",
  fontSize: "1.125rem"
}
const AsideContent = () => {
  return (
    <aside style={asideStyle}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h3 style={{fontSize:"3rem",}}>Encuentra tu tecnica de  <span style={{color: "#f0754c"}}>estudio</span> </h3>
      <div style={afterStyle}></div>
      </div>
      <div style={{maxWidth: "768px", border: "solid 2px #e4e4e7", borderRadius: "10px", padding: "3rem", margin: "5%"}}>
        <p style={{fontSize: "1.125rem"}}>Nuestro proyecto busca ayudar a los estudiantes a descubrir su maximo potencial. Queremeos acompanar a jovenes en el desarrollo de tecnicas personalizadas de estudio, impulsando su confianza, organizacion
	y resultados escolares</p>
        <p style={{fontSize: "1.125rem"}}>Nuestro enfoque enfoque combina autoconocimiento estrategias pedagogicas y herramientas praticas todo adaptado a tus metas y ritmo de aprendizaje</p>

	<p style={asideParagraph}>Nuestra mision es sencilla: que encuentres tu propio metodo para aprender mejor y sentirte seguro con tus capacidades.</p>
      </div>
    </aside>
  );
}

const listSectionStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5%",
}

const bottomTextStyle = {
  background: "linear-gradient(to right, #ecebfa, #fcf0ec)",
  padding: "2%",
  borderRadius: "10px",
}
const ListSection = () => {
  return (
    <section style={listSectionStyle}>
      <h3 style={{fontSize: "3rem"}}>Tu proceso, <span style={{color: "#4742d7"}}>paso a paso</span> </h3>
      <p style={{color: "#71717a", fontSize: "1.125rem"}}>Un camino estructurado al exito academico</p>
      <div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", padding: "2%", border: "2px solid #dcdbeb", borderRadius: "10px", margin: "3%"}}>
          <span style={{padding: "3%", backgroundColor: "#ececfb",borderRadius: "25%", color: "#4742d7", fontWeight: "bold", fontSize: "30px" }}>1</span>
	  <div style={{margin: "3%"}}>
            <h4 style={{fontSize: "1.25rem"}}>Diagnostico inicial</h4>
	    <p style={{color: "#71717a"}}>Mediante una breve evaluacion conoceremos tu forma natural de asimiliar la informacion</p>
	  </div>
	  <span className="material-icons">
	  check
	  </span>
	</div>

        <div style={{display: "flex", flexDirection: "row", alignItems: "center", padding: "2%", border: "2px solid #dcdbeb", borderRadius: "10px", margin: "3%"}}>
          <span style={{padding: "3%", backgroundColor: "#fdf1ed",borderRadius: "25%", color: "#f0754c", fontWeight: "bold", fontSize: "30px" }}>2</span>
	  <div style={{margin: "3%"}}>
            <h4 style={{fontSize: "1.25rem"}}>Cuestionario sobre aprendizaje</h4>
	    <p style={{color: "#71717a"}}>Comenzamos con una seccion donde identificamos tus habitos, retos y metas academicas</p>
	  </div>
	  <span className="material-icons">
	  check
	  </span>
	</div>


        <div style={{display: "flex", flexDirection: "row", alignItems: "center", padding: "2%", border: "2px solid #dcdbeb", borderRadius: "10px", margin: "3%"}}>
          <span style={{padding: "3%", backgroundColor: "#fdfdfd",borderRadius: "25%", color: "#000000", fontWeight: "bold", fontSize: "30px" }}>3</span>
	  <div style={{margin: "3%"}}>
            <h4 style={{fontSize: "1.25rem"}}>Plan personalizado</h4>
	    <p style={{color: "#71717a"}}>Elaboro contigo una guia practica de esutdio con tecnicas, horarios recursos ajustados para ti</p>
	  </div>
	  <span className="material-icons">
	  check
	  </span>
	</div>

        <div style={{display: "flex", flexDirection: "row", alignItems: "center", padding: "2%", border: "2px solid #dcdbeb", borderRadius: "10px", margin: "3%"}}>
          <span style={{padding: "3%", backgroundColor: "#ececfb",borderRadius: "25%", color: "#4742d7", fontWeight: "bold", fontSize: "30px" }}>4</span>
	  <div style={{margin: "3%"}}>
            <h4 style={{fontSize: "1.25rem"}}>Seguimiento y mejora</h4>
	    <p style={{color: "#71717a"}}>Acompanamiento para revisar tus avances y ajustar estrategias si es necesario.</p>
	  </div>
	  <span className="material-icons">
	  check
	  </span>
	</div>

      </div>

      <div style={bottomTextStyle}>El objetivo: que aprendas a estudiar de forma mas consciente, eficiente y motivada.</div>
    </section>
  );
}

const inviteStyle = {
  width: "60%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5%",
  background : "linear-gradient(to bottom right, #f6f5fd, #fef8f6)",
  borderRadius: "10px",
  border: "3px solid #d7d2f1", 
  textAlign: "center",
}

const InviteSection = () => {
  let navigate = useNavigate();
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
    <section style={inviteStyle}>
      <h3 style={{fontSize: "60px"}}>Quieres descubrir cual es tu <span style={{color: "#f0754c"}}>estilo de aprendizaje</span> ? </h3>
      <p style={{color: "#71717a"}}>Responde estre breve cuestionario y obten un resultado inmediato que te mostrara el metodo de estudio mas compatible contigo. Con base en tus respuestas sabras si aprendes de mejor de forma visual junto con recomendaciones practicas para aplicarlo desde hoy</p>
      <button style={{color: "#ffffff", backgroundColor: "#f0754c", borderRadius: "10px", padding: "3%", border: "solid", fontSize: "20px", marginTop: "2%"}} onClick={() => navigate("/page")}>Haz el test y descubre tu metodo</button>
    </section>
    </div>
  );
}

const endSectionStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "3%",

}

const EndSection = () => {
  return (
	<section style={endSectionStyle}>
          <h3 style={{fontSize: "50px"}}>Empieza a estudiar de forma mas <span style={spanStyle}>efectiva hoy mismo</span> </h3>
	  <p style={{color: "#71717a"}}>El primer paso para mejorar tus resultados esta en conocerte a ti mismo como estudiante. Contactanos para obtener mas informacion para un aprendizaje mas facil, claro y hecho a tu medida</p>
	  <button style={{backgroundColor: "#ffffff", border: "3px solid #4742d7", padding: "20px 40px", borderRadius:"10px", color: "#4742d7", fontWeight: "bold", margin: "1%"}}>Contactanos</button>
	  <div style={{padding: " 2% 5%", borderTop: "solid 1px #cccccc"}}>
          <span style={{color: "#71717a"}}>Tienes dudas ? Escribenos y resolveremos tus dudas</span>
	  </div>
	</section>
  );
}

const Footer = () => {
  return (
    <footer style={{borderTop: "1px solid #cccccc", padding: "2%", textAlign: "center"}}>
    <p style={{color: "#71717a"}}>2025 estudio como habito</p>
    </footer>
  );
}

function App() {

  return (
    <>
      <div style={rootContainer}>
        <MainHeader /> 
	<MainContent />
	<AsideContent />
	<ListSection />
	<InviteSection />
	<EndSection />
	<Footer />

      </div>
    </>
  )
}

export default App
