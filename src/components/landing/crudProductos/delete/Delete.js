const Delete = (props) => {
  const nombre = props.nombre;
  const borrarProducto = () => {
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
        props.handleBoolean();
        alert("PRODUIT SUPPRIMÉ AVEC SUCCÈS");
      });
  };
  return (
    <div>
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

export default Delete;
