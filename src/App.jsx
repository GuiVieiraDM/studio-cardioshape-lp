// import { useState } from 'react'

import { Diferentials } from "./components/Diferentials"
import { Hero } from "./components/Hero"
import { Musculation } from "./components/Musculation"
import { Pilates } from "./components/Pilates"
import { Services } from "./components/Services"
import { StructureLocation } from "./components/StructureLocation"

function App() {
 
  return (
    <div>
      <Hero />
      <Services />
      <Diferentials />
      <Musculation />
      <Pilates />
      <StructureLocation />
    </div>
  )
}

export default App
