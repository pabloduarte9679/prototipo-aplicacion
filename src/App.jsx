import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./Homepage"
import Page from "./Page"
import Form from "./Form"
import Pomodoro from "./Pomodoro"

function App(){
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route path="*" element={<Homepage />}></Route>
          <Route path="/page" element={<Page />}></Route>
	  <Route path="/form" element={<Form />}></Route>
	  <Route path="/pomodoro" element={<Pomodoro />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
