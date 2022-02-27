import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Dashbord from './Pages/Dashbord';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="*" element="error page"/>
      </Routes>
    </div>
  )
}

export default App
