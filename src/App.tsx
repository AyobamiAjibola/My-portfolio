import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import dotenv from 'dotenv';

dotenv.config();

import Home from "./components/pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
