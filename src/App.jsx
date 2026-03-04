import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componntes/Home'
import Bennar from './componntes/Bennar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Home/>
   <Bennar/>
    </>
  )
}

export default App
