import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./Homepage"
import Page from "./Page"
import Form from "./Form"
import Pomodoro from "./Pomodoro"
import Cornell from "./Cornell"
import Mentalmap from "./Mentalmap"
import Feynman from "./Feynman"
import Spacedstudy from "./Spacedstudy"
import Mnemo from "./Mnemo"
import Sq3r from "./Sq3r"
import Flashcard from "./Flashcard"
import Summary from "./Summary"
import Active from "./Active"
import Distributed from "./Distributed"

function App(){
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route path="*" element={<Homepage />}></Route>
          <Route path="/page" element={<Page />}></Route>
	  <Route path="/form" element={<Form />}></Route>
	  <Route path="/pomodoro" element={<Pomodoro />}></Route>
	  <Route path="/cornell" element={<Cornell />}></Route>
	  <Route path="/mentalmap" element={<Mentalmap />}></Route>
	  <Route path="/feynman" element={<Feynman />}></Route>
	  <Route path="/spacedstudy" element={<Spacedstudy />}></Route>
          <Route path="/mnemo" element={<Mnemo />}></Route>
          <Route path="/sq3r" element={<Sq3r />}></Route>
          <Route path="/flashcard" element={<Flashcard />}></Route>
          <Route path="/summary" element={<Summary />}></Route>
          <Route path="/active" element={<Active />}></Route>
          <Route path="/distributed" element={<Distributed />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
