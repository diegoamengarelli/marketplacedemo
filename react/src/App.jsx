import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from './components/Busqueda';
import CategoriaCarousel from './components/CategoriaCarrusel';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <br/>
      <Busqueda/>
      <br/>
      <CategoriaCarousel/>
    </div>

  )
}

export default App
