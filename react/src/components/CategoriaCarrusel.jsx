import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategoriaCarousel = () => {
  const categorias = [
    { nombre: "Tecnología", icono: <i className="bi bi-laptop" style={{ fontSize: 50 }} /> },
    { nombre: "Ropa", icono: <i className="bi bi-person-workspace" style={{ fontSize: 50 }} /> },
    { nombre: "Hogar", icono: <i className="bi bi-house-door" style={{ fontSize: 50 }} /> },
    { nombre: "Deportes", icono: <i className="bi bi-balloon-fill" style={{ fontSize: 50 }} /> },
    { nombre: "Libros", icono: <i className="bi bi-book" style={{ fontSize: 50 }}/> },
    { nombre: "Tecnología", icono: <i className="bi bi-laptop" style={{ fontSize: 50 }} /> },
    { nombre: "Ropa", icono: <i className="bi bi-person-workspace" style={{ fontSize: 50 }} /> },
    { nombre: "Hogar", icono: <i className="bi bi-house-door" style={{ fontSize: 50 }} /> },
    { nombre: "Deportes", icono: <i className="bi bi-balloon-fill" style={{ fontSize: 50 }} /> },
    { nombre: "Libros", icono: <i className="bi bi-book" style={{ fontSize: 50 }}/> },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel responsive={responsive} infinite={true}>
      {categorias.map((categoria, idx) => (
        <div key={idx} className="categoria-card">
          <div className="icono" style={{ color: "green" }}>{categoria.icono}</div>
          <h3>{categoria.nombre}</h3>
        </div>
      ))}
    </Carousel>
  );
};

export default CategoriaCarousel;




