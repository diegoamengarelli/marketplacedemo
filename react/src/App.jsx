import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from './components/Busqueda';
import CategoriaCarousel from './components/CategoriaCarrusel';
import PublicationForm from './components/PublicationForm';
import LoginForm from './components/LoginForm';
import RegistroForm from './components/RegistroForm';
import ProductList from './components/ProductList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <br/>
      <Busqueda/>
      <br/>
      <CategoriaCarousel/>
      <br/>
      <PublicationForm/>
      <br/>
      <LoginForm/>
      <br/>
      <RegistroForm/>
      <br/>
      <ProductList/>
    </div>

  )
}

export default App
