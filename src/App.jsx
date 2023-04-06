import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./views/Login";
import Register from "./views/Register";
import Inquiry from "./views/Inquiry";

function App() {
  //https://www.youtube.com/watch?v=brcHK3P6ChQ
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/inquire" element={<Inquiry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
