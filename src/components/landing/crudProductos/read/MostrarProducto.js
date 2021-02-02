import { useState, useEffect } from "react";

const MostrarProducto = (props) => {
  const [data, setData] = useState([]);
  //   console.log(props);

  useEffect(() => {
    fetch("http://localhost:3001/single_product/" + props.nombre)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [props.nombre]);
  //   console.log(data);

  const mostrar = data.map((producto) => {
    return (
      <div>
        <div>
          <img src={producto.imagenes[0]} alt={producto.nombre} width="90px" />
          <h3 className="h3">{producto.nombre}</h3>
          <span>
            <span className="titulos">PRECIO:</span> {producto.precio}€
          </span>
          <br />
          <span>
            <span className="titulos">TIPO:</span> {producto.tipo}
          </span>
          <br />
          <span>
            <span className="titulos">GENERO:</span> {producto.genero}
          </span>
          <br />
          <span>
            <span className="titulos">GROSORES:</span> {producto.grosores}
          </span>
          <br />
          <span>
            <span className="titulos">TALLAS:</span> {producto.tallas}
          </span>
          <br />
          <span>
            <span className="titulos">DESCRIPCION:</span> {producto.descripcion}
          </span>
          <br />
          <span>
            <span className="titulos">DISEÑO:</span> {producto.design}
          </span>
          <br />
          <span>
            <span className="titulos">CONCEPCION 3D:</span>{" "}
            {producto.conception}
          </span>
          <br />
          <span>
            <span className="titulos">CONFORT:</span> {producto.confort}
          </span>
          <br />
          <span>
            <span className="titulos">IMAGEN 1:</span> {producto.imagenes[0]}
          </span>
          <br />
          <span>
            <span className="titulos">IMAGEN 2:</span> {producto.imagenes[1]}
          </span>
          <br />
          <span>
            <span className="titulos">IMAGEN 3:</span> {producto.imagenes[2]}
          </span>
          <br />
          <span>
            <span className="titulos">IMAGEN 4:</span> {producto.imagenes[3]}
          </span>
        </div>
        <div className="botones_admin"></div>
      </div>
    );
  });
  return <div className="mostrar_producto">{mostrar}</div>;
};

export default MostrarProducto;
