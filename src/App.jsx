import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing'
import Auth from './components/Auth'
import Login from './components/Login'
import Inquiry from './components/Inquiry'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/inquire" element={<Inquiry />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
