import { useState } from "react";

const Update = (props) => {
  console.log(props);
  //Todas las variables de estado / Copiadas tal cual desde el archivo Create.js que tengo para hacer el post.
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
  function editNombre(e) {
    setNombre(e.target.value);
    console.log(setNombre);
  }
  function editPrecio(e) {
    setPrecio(e.target.value);
    console.log(setPrecio);
  }
  function editTipo(e) {
    setTipo(e.target.value);
    console.log(setTipo);
  }
  function editGenero(e) {
    setGenero(e.target.value);
    console.log(setGenero);
  }
  function editGrosores(e) {
    setGrosores(e.target.value);
    console.log(setGrosores);
  }
  function editTallas(e) {
    setTallas(e.target.value);
    console.log(setTallas);
  }
  function editDescripcion(e) {
    setDescripcion(e.target.value);
    console.log(setDescripcion);
  }
  function editDesign(e) {
    setDesign(e.target.value);
    console.log(setDesign);
  }
  function editConception(e) {
    setConception(e.target.value);
    console.log(setConception);
  }
  function editConfort(e) {
    setConfort(e.target.value);
    console.log(setConfort);
  }
  function editImagenes(e) {
    setImagen(e.target.value);
    console.log(setImagen);
  }
  //Función subir imagen
  function subirImagen() {
    setImagenes([...imagenes, imagen]);
    alert("IMAGE AJOUTÉE AVEC SUCCÈS");
  }

  //Función editar para hacer fetch al servidor al clickar el botón
  const editar = () => {
    fetch("/editar_producto/", {
      method: "PUT",
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
        alert("PRODUIT MODIFIÉ AVEC SUCCÈS");
        //RENDERIZAR automáticamente la web para que desaparezca el producto al hacer click.
        //La función handleBolean se encuentra en ReadProduct.js y la recibo por props en Delete.js y también la recibiré por props en Update.js
        // props.handleBoolean();
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

  // Inputs y button / Copio el return completo desde el archivo Create.js que tengo para hacer el post. Solo voy a cambiar el nombre de las funciones, por ejemplo introNmbre por editNombre
  return (
    <div>
      <h2>MODIFIER PRODUIT</h2>
      <input
        className="form-control imput_c"
        type="text"
        placeholder={"Nombre"}
        value={nombre}
        onChange={editNombre}
      />
      <input
        className="form-control imput_c"
        type="text"
        placeholder="Precio"
        value={precio}
        onChange={editPrecio}
      />
      <input
        className="form-control imput_c"
        type="text"
        placeholder="Wetsuit / Shorty / Top"
        value={tipo}
        onChange={editTipo}
      />
      <input
        className="form-control imput_c"
        type="text"
        placeholder="Homme / Femme"
        value={genero}
        onChange={editGenero}
      />
      <input
        className="form-control imput_c"
        type="text"
        placeholder="3mm / 5mm / 7mm"
        value={grosores}
        onChange={editGrosores}
      />
      <input
        className="form-control imput_c"
        type="text"
        placeholder="XS / S / M / L / XL"
        value={tallas}
        onChange={editTallas}
      />
      <textarea
        className="form-control imput_c"
        placeholder="Descripción"
        value={descripcion}
        onChange={editDescripcion}
      ></textarea>
      <textarea
        className="form-control imput_c"
        placeholder="Design"
        value={design}
        onChange={editDesign}
      ></textarea>
      <textarea
        className="form-control imput_c"
        placeholder="Conception"
        value={conception}
        onChange={editConception}
      ></textarea>
      <textarea
        className="form-control imput_c"
        placeholder="Confort"
        value={confort}
        onChange={editConfort}
      ></textarea>
      <textarea
        className="form-control imput_c"
        placeholder="Imágenes"
        value={imagen}
        onChange={editImagenes}
      ></textarea>
      <button onClick={subirImagen} className="btn_admin video">
        AJOUTER UNE IMAGE
      </button>
      <button onClick={editar} className="btn_admin video">
        MODIFIER PRODUIT
      </button>
    </div>
  );
};
export default Update;
