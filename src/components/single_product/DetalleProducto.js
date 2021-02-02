import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3001/Boutique/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const verProducto = data.map((producto) => {
    // console.log(producto.nombre);
    return (
      <div>
        <h1>{producto.nombre}</h1>
      </div>
    );
  });
  return "hola";
};

export default DetalleProducto;
