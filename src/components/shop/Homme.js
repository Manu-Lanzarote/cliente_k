import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homme = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/productos_homme")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  const mostrarProductos = data.map((producto) => {
    return (
      // Link a /Boutique/:id para que se muestre el DetalleProducto.js (la vista de comprar producto)
      <Link to={"/Boutique/" + producto._id}>
        <div>
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
      </Link>
    );
  });

  return mostrarProductos;
};

export default Homme;
