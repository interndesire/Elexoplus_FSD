import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Modules from './components/Modules'
import About from './components/About'
import Footer from './components/Footer'
import WhatEMSDoes from './components/WhatEMSDoes'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Modules/>
      <WhatEMSDoes/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
