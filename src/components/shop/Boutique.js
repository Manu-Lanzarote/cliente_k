import { useState, useEffect } from "react";

const Boutique = () => {
  const [data, setData] = useState([]);

  // useEffect(function () {
  //   fetch("http://localhost:3001/productos/")
  //     .then(function (results) {
  //       return results.json();
  //     })
  //     .then(function (data) {
  //       //console.log(data);
  //       setData(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3001/productos/")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  const mostrarProductos = data.map((producto) => {
    return (
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
    );
  });

  return mostrarProductos;
};

export default Boutique;
