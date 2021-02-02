// IMPORTANTE. Añadir el proxi en el archivo package.json para que funcione el CRUD. (Ver package.json con el proxi incluído.)
// "proxy": "http://localhost:3000"

import { useState } from "react";

const Create = () => {
  //Todas las variables de estado
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [tipo, setTipo] = useState("");
  const [genero, setGenero] = useState("");
  const [grosores, setGrosores] = useState("");
  const [tallas, setTallas] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [design, setDesign] = useState("");
  const [conception, setConception] = useState("");
  const [confort, setConfort] = useState("");
  const [imagenes, setImagenes] = useState([]);
  //SUBIR IMAGEN
  const [imagen, setImagen] = useState("");

  //Todas las funciones de los input
  function introNombre(e) {
    setNombre(e.target.value);
    console.log(setNombre);
  }
  function introPrecio(e) {
    setPrecio(e.target.value);
    console.log(setPrecio);
  }
  function introTipo(e) {
    setTipo(e.target.value);
    console.log(setTipo);
  }
  function introGenero(e) {
    setGenero(e.target.value);
    console.log(setGenero);
  }
  function introGrosores(e) {
    setGrosores(e.target.value);
    console.log(setGrosores);
  }
  function introTallas(e) {
    setTallas(e.target.value);
    console.log(setTallas);
  }
  function introDescripcion(e) {
    setDescripcion(e.target.value);
    console.log(setDescripcion);
  }
  function introDesign(e) {
    setDesign(e.target.value);
    console.log(setDesign);
  }
  function introConception(e) {
    setConception(e.target.value);
    console.log(setConception);
  }
  function introConfort(e) {
    setConfort(e.target.value);
    console.log(setConfort);
  }
  function introImagenes(e) {
    setImagen(e.target.value);
    console.log(setImagen);
  }
  //Función subir imagen
  function subirImagen() {
    setImagenes([...imagenes, imagen]);
    alert("IMAGE AJOUTÉE AVEC SUCCÈS");
  }

  //Función anyadir para hacer fetch al servidor al clickar el botón
  const anyadir = () => {
    fetch("/nuevo_producto/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        precio: precio,
        tipo: tipo,
        genero: genero,
        grosores: grosores,
        tallas: tallas,
        descripcion: descripcion,
        design: design,
        conception: conception,
        confort: confort,
        imagenes: imagenes,
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        console.log(datos);
        alert("PRODUIT CRÉÉ AVEC SUCCÈS");
      });

    //Vaciar los imputs para borrar las entradas una vez que he hecho click
    setNombre("");
    setPrecio("");
    setTipo("");
    setGenero("");
    setGrosores("");
    setTallas("");
    setDescripcion("");
    setDesign("");
    setConception("");
    setConfort("");
    setImagenes("");
    console.log(
      nombre,
      precio,
      tipo,
      genero,
      grosores,
      tallas,
      descripcion,
      design,
      conception,
      confort,
      imagenes
    );
  };

  //Imputs y button ----------      ---  -- ----Faltan las imagenes --- ----- - ----
  return (
    <div>
      <h2>CRÉER PRODUIT</h2>
      <input
        className="form-control imput_c"
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={introNombre}
      />
      <input
        className="form-control imput_c"
        type="text"
        placeholder="Precio"
        value={precio}
        onChange={introPrecio}
      />
      <input
        className="form-control imput_c"
        type="text"
        placeholder="Wetsuit / Shorty / Top"
        value={tipo}
        onChange={introTipo}
      />
      <input
        className="form-control imput_c"
        type="text"
        placeholder="Homme / Femme"
        value={genero}
        onChange={introGenero}
      />
      <input
        className="form-control imput_c"
        type="text"
        placeholder="3mm / 5mm / 7mm"
        value={grosores}
        onChange={introGrosores}
      />
      <input
        className="form-control imput_c"
        type="text"
        placeholder="XS / S / M / L / XL"
        value={tallas}
        onChange={introTallas}
      />
      <textarea
        className="form-control imput_c"
        placeholder="Descripción"
        value={descripcion}
        onChange={introDescripcion}
      ></textarea>
      <textarea
        className="form-control imput_c"
        placeholder="Design"
        value={design}
        onChange={introDesign}
      ></textarea>
      <textarea
        className="form-control imput_c"
        placeholder="Conception"
        value={conception}
        onChange={introConception}
      ></textarea>
      <textarea
        className="form-control imput_c"
        placeholder="Confort"
        value={confort}
        onChange={introConfort}
      ></textarea>
      <textarea
        className="form-control imput_c"
        placeholder="Imágenes"
        value={imagen}
        onChange={introImagenes}
      ></textarea>
      <button onClick={subirImagen} className="btn_admin video">
        AJOUTER UNE IMAGE
      </button>
      <button onClick={anyadir} className="btn_admin video">
        AJOUTER PRODUIT
      </button>
    </div>
  );
};

export default Create;
