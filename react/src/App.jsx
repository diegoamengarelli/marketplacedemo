import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";
import Publicacion from './pages/Publicacion';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="publicar" element={<Publicacion />} />
          <Route path="producto" element={<ProductPage />} />
          <Route path="*" element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
