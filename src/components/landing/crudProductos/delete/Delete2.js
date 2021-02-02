import { useState } from "react";

const Delete2 = () => {
  //Todas las variables de estado
  const [nombre, setNombre] = useState("");

  //Función para introducir el nombre a borrar
  function introNombre(e) {
    setNombre(e.target.value);
    console.log(setNombre);
  }

  const borrarProducto = () => {
    //PROMPT para confirmar que el usuario quiere realmente eliminar el producto. Si no lo confirma no se realizará el borrqdo en la db
    const confirma = prompt(
      "Êtes-vous sûr de vouloir supprimer ce produit?\nOUI / NON"
    );
    if (confirma !== "OUI") {
      return alert("OPÉRATION ANNULÉE AVEC SUCCÈS");
    } else {
      fetch("/borrar_producto/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre }),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (datos) {
          console.log(datos);
          //RENDERIZAR automáticamente la web para que desaparezca el producto al hacer click.
          //La función handleBolean se encuentra en ReadProduct.js y la recibo por props en Delete.js y también la recibiré por props en Update.js
          // props.handleBoolean();
          alert("PRODUIT SUPPRIMÉ AVEC SUCCÈS");
        });
    }
  };
  return (
    <div className="suprimir">
      <h2>SUPPRIMER PRODUIT</h2>
      <p>
        ATTENTION! Veuillez garder à l'esprit que cette action est irréversible.
        Si vous confirmez la suppression du produit, il sera supprimé du serveur
        et ne pourra pas être récupéré.
      </p>
      <input
        className="form-control imput_c"
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={introNombre}
      />
      <button
        className="btn_admin video del"
        type="submit"
        onClick={() => borrarProducto()}
      >
        SUPPRIMIER
      </button>
    </div>
  );
};

export default Delete2;
