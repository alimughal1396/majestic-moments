import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Index'
import About from '../About/About'
import Events from '../Events/Events'
import Food from '../Food/Food'
import Contact from '../Contact/Contact'


export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/food" element={<Food />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
