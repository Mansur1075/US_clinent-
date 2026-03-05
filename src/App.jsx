import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componntes/Home'
import Bennar from './componntes/Bennar'
import About from './componntes/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Home/>
   <Bennar/>
   <About/>
    </>
  )
}

export default App
