import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import colores_neoprenos from "../landing/uploads_k/colores_neoprenos.jpg";

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
      <div className="detalle">
        <div className="bloque_imagenes">
          <div className="miniaturas">
            <img src={producto.imagenes[1]} alt={producto.nombre} />
            <img src={producto.imagenes[2]} alt={producto.nombre} />
            <img src={producto.imagenes[3]} alt={producto.nombre} />
          </div>
          <div className="principal">
            <img
              src={producto.imagenes[0]}
              alt={producto.nombre}
              height="500px"
            />
          </div>
        </div>
        <div className="lateral">
          <h1>{producto.nombre}</h1>
          <h2>{producto.precio}€</h2>
          <p>{producto.descripcion}</p>
          <img src={colores_neoprenos} alt="Carta de colores" width="400" />
          <button className="btn_admin video">
            <i className="fas fa-cart-arrow-down"></i>AJOUTER AU PANIER
          </button>
        </div>
      </div>
    );
  });
  return verProducto;
};

export default DetalleProducto;
