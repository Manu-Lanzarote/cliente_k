import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Boutique = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/productos/")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  const mostrarProductos = data.map((producto) => {
    return (
      // Link para entrar en la página de producto único al hacer click en el producto.
      // Para ello creo el componente DetalleProducto.js que es el que hará fetch al servidor. También tengo que crear un app.get en el servidor con la ruta.
      <Link to={"/Boutique/" + producto._id}>
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
      </Link>
    );
  });

  return mostrarProductos;
};

export default Boutique;
