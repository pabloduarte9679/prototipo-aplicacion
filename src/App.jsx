import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./Homepage"
import Page from "./Page"

function App(){
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route path="*" element={<Homepage />}></Route>
          <Route path="/page" element={<Page />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
