import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navbar } from './Component/Navbar'
import { Categories } from './Component/Categories'
import { Card } from './Component/Card'
import { Footer } from './Component/Footer'
import { UseContext } from './Component/Context'

function App() {
  
  
  
  const [count, setCount] = useState(0)

  return (
<>
<Navbar/>
<Categories/>

<Card/>


<Footer/>
</>
  )
}

export default App
