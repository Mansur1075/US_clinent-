import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componntes/Home'
import Bennar from './componntes/Bennar'
import About from './componntes/About'
import Best from './componntes/Best'
import Testimonials from './componntes/Testimonials'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Home/>
   <Bennar/>
   <About/>
   <Best/>
   <Testimonials/>
    </>
  )
}

export default App
