import { useState } from 'react'
import './App.css'
import Hero from './sections/Hero'
import Info from './sections/Info'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

    <Hero/>
    <Info/>
    </main>
  )
}

export default App
