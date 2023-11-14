import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CategoriaCarousel.css"

const CategoriaCarousel = () => {
  const categorias = [
    { nombre: "Tecnología", icono: <i className="bi bi-laptop" /> },
    { nombre: "Ropa", icono: <i className="bi bi-person-workspace" /> },
    { nombre: "Hogar", icono: <i className="bi bi-house-door" /> },
    { nombre: "Deportes", icono: <i className="bi bi-balloon-fill" /> },
    { nombre: "Libros", icono: <i className="bi bi-book" /> },
    { nombre: "Tecnología", icono: <i className="bi bi-laptop" /> },
    { nombre: "Ropa", icono: <i className="bi bi-person-workspace" /> },
    { nombre: "Hogar", icono: <i className="bi bi-house-door" /> },
    { nombre: "Deportes", icono: <i className="bi bi-balloon-fill" /> },
    { nombre: "Libros", icono: <i className="bi bi-book" /> },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="mx-5 carousel-nav">
      <Carousel responsive={responsive} infinite={true}>
        {categorias.map((categoria, idx) => (
          <div key={idx} className="categoria-card px-5">
            <div className="icono" style={{ color: "green" }}>{categoria.icono}</div>
            <h3>{categoria.nombre}</h3>
          </div>
        ))}
      </Carousel>
    </div>

  );
};

export default CategoriaCarousel;




