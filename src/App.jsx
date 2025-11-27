import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./Homepage"
import Page from "./Page"
import Form from "./Form"

function App(){
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route path="*" element={<Homepage />}></Route>
          <Route path="/page" element={<Page />}></Route>
	  <Route path="/form" element={<Form />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
