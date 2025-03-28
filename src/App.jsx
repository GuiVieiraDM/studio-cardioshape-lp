// import { useState } from 'react'

import { CTASection } from "./components/CTASection"
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
      <Diferentials />
      <Services />
      <Musculation />
      <Pilates />
      <StructureLocation />
      <CTASection />
    </div>
  )
}

export default App
