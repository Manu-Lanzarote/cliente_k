import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import colores_neoprenos from "../landing/uploads_k/colores_neoprenos.jpg";

const DetalleProducto = () => {
  const [data, setData] = useState([]);
  //Variable de estado para camiar la imagen principal cuando se pasa el ratón por encima de alguna de las miniaturas
  const [imagen, setImagen] = useState();

  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3001/Boutique/${id}`)
      .then((res) => res.json())
      // .then((data) => setData(data));

      // En este .then he añadido el setImagen para que la principal se vea por defecto
      .then((data) => {
        setData(data);
        setImagen(data[0].imagenes[0]);
      });
  }, []);

  const verProducto = data.map((producto) => {
    // console.log(producto.nombre);
    return (
      <div className="detalle">
        <div className="bloque_imagenes">
          <div className="miniaturas">
            <img
              src={producto.imagenes[0]}
              alt={producto.nombre}
              //Función para cambiar la imagen principal
              onMouseOver={() => {
                setImagen(producto.imagenes[0]);
              }}
            />
            <img
              src={producto.imagenes[1]}
              alt={producto.nombre}
              //Función para cambiar la imagen principal
              onMouseOver={() => {
                setImagen(producto.imagenes[1]);
              }}
            />
            <img
              src={producto.imagenes[2]}
              alt={producto.nombre}
              //Función para cambiar la imagen principal
              onMouseOver={() => {
                setImagen(producto.imagenes[2]);
              }}
            />
            <img
              src={producto.imagenes[3]}
              alt={producto.nombre}
              //Función para cambiar la imagen principal
              onMouseOver={() => {
                setImagen(producto.imagenes[3]);
              }}
            />
          </div>
          <div className="principal">
            {/* Variable de estado que cambiará la imagen principal */}
            <img src={imagen} alt={producto.nombre} height="500px" />
          </div>
        </div>
        <div className="lateral">
          <h1>{producto.nombre}</h1>
          <h2>{producto.precio}€</h2>
          <p>{producto.descripcion}</p>
          <img src={colores_neoprenos} alt="Carta de colores" width="400" />
          <button className="btn_admin video">
            <i className="fas fa-shopping-cart"> AJOUTER AU PANIER</i>
          </button>
        </div>
      </div>
    );
  });
  return verProducto;
};

export default DetalleProducto;
