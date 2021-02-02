// EXPLICANDO ESTE CÓDIGO.

// La función principal del componente es renderizar las miniaturas de todos los productos por pantalla para que el usuario pueda elegir entre ver cada producto, modificarlo o eliminarlo.

//Los botones de modificar y eliminar son componentes hijo que importamos dentro de este componente padre

//Tengo dos variables de estado:
//data, setData para para sacar un array que renderize todos los productos y nombre, setNombre  para renderizar los datos del producto que clicka el usuario, (por defecto pinta en pantalla "COMBINAISON LADYSKAF")

// En la etiqueta imagen en el onClick tengo una función sin nombre que hace un setNombre del producto elegido para poder pasarlo por props a la función MostrarProducto.js que es la que se encarga de hacer el fetch al servidor que recibirá el nombre del producto elegido en un app.get por parámetros.

import { useState, useEffect } from "react";
import MostrarProducto from "./MostrarProducto";

const ReadProducts = () => {
  // Variable de estado para renderizar todos los productos
  const [data, setData] = useState([]);
  // Variable de estado que renderiza los datos del producto que clicka el usuario
  // Por defecto "COMBINAISON LADYBUST"
  const [nombre, setNombre] = useState("COMBINAISON LADYBUST");
  //Variable de estado que sirve para renderizar automáticamente el navegador cuando se elimina un producto o se modifica.
  //Pasamos boolean dentro de useEffect en la linea 30 y creo la función en la línea 32
  //Por últimno la paso por props en la línea 60 a MostrarProducto.js
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/productos/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [boolean]);

  function handleBoolean() {
    setBoolean(!boolean);
  }

  const mostrarProductos = data.map((producto) => {
    return (
      <div className="cont_pro_admin">
        <div key={producto.nombre} className="productos1">
          <img
            src={producto.imagenes[0]}
            alt={producto.nombre}
            className="imagen"
            //Función con el setNombre que actualiza nombre, por el que clicka el usuario
            onClick={() => {
              setNombre(producto.nombre);
            }}
          />
          <h2>{producto.nombre}</h2>
        </div>
      </div>
    );
  });

  return (
    <div>
      {/* {mostrarProductos} renderiza la primera parte de la página - Las miniaturas de los productos */}
      {mostrarProductos}
      {/* Y esta línea renderiza/refresca el producto que selecciona el usuario - (Por defecto "COMBINAISON LADYBUST") y pasa por props a MostrarProducto.js el que selecciona el usuario */}
      <MostrarProducto nombre={nombre} handleBoolean={handleBoolean} />
    </div>
  );
};

export default ReadProducts;
