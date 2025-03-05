import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Landing from './Pages/Landing'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from './Pages/Collections'

function App() {


  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/collections" element={<Collections/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
