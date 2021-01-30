import { useState, useEffect } from "react";

const Shorty = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/productos_shorty/")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  const mostrarProductos = data.map((producto) => {
    return (
      <div className="single_product">
        <div key={producto.nombre} className="productos">
          <img
            src={producto.imagenes[0]}
            alt={producto.nombre}
            height="250px"
            className="imagen"
          />
          <h2>{producto.nombre}</h2>
          <p>A partir de {producto.precio} €</p>
        </div>
      </div>
    );
  });

  return mostrarProductos;
};

export default Shorty;
