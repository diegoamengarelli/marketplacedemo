import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";

export default function router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Contact />} />
            <Route path="producto" element={<ProductPage />} />
            <Route path="*" element={<Inicio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }