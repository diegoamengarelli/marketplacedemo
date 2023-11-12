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
import ProductDetails from './components/ProductDetails';

function App() {
  const [count, setCount] = useState(0)

  const producto = {
    titulo: 'Producto de Ejemplo',
    categoria: 'Electrónica',
    descripcionBreve: 'Descripción corta del producto.',
    precio: '$99.99',
    descripcionCompleta: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    calificacionVendedor: 4.5,
    ubicacion: 'Ciudad Ejemplo',
    telefono: '123-456-7890',
  };

  const handleSendMessage = () => {
    // Lógica para enviar un mensaje
    console.log('Enviar mensaje');
  };

  const handleAddToFavorites = () => {
    // Lógica para agregar a favoritos
    console.log('Agregar a favoritos');
  };

  return (
    <div>
      <NavBar />
      <br />
      <Busqueda />
      <br />
      <CategoriaCarousel />
      <br />
      <PublicationForm />
      <br />
      <LoginForm />
      <br />
      <RegistroForm />
      <br />
      <ProductList />
      <br />
      <ProductDetails
        titulo={producto.titulo}
        categoria={producto.categoria}
        descripcionBreve={producto.descripcionBreve}
        precio={producto.precio}
        descripcionCompleta={producto.descripcionCompleta}
        calificacionVendedor={producto.calificacionVendedor}
        ubicacion={producto.ubicacion}
        telefono={producto.telefono}
        onSendMessage={handleSendMessage}
        onAddToFavorites={handleAddToFavorites}
      />
    </div>

  )
}

export default App
