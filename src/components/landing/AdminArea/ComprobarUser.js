import { useState } from "react";
// import { Redirect } from "react-router-dom";
import AdminPage from "../crudProductos/AdminPage";
const ComprobarUser = () => {
  const [boolean, setBoolean] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");

  const escribirNombre = (e) => {
    setUsuario(e.target.value);
  };
  console.log(usuario);
  const escribirContrasenya = (e) => {
    setPass(e.target.value);
  };
  console.log(pass);
  function comprobar() {
    if (usuario === "Manu" && pass === "12345") {
      setBoolean(true);
    } else {
      setBoolean(false);
      alert("LE NOM D'UTILISATEUR OU LE MOT DE PASSE N'EXISTE PAS");
    }
  }
  if (boolean) {
    // return <Redirect to="/Admin" />;
    return <AdminPage />;
  } else {
    return (
      <div className="form_admin">
        <h2>ZONE D'ADMINISTRATION</h2>
        <br />
        <label for="nombre">Votre nom</label>
        <input
          type="text"
          className="form-control input_size2"
          value={usuario}
          onChange={escribirNombre}
        />
        <label for="nombre">Votre signature</label>
        <input
          type="text"
          className="form-control input_size2"
          value={pass}
          onChange={escribirContrasenya}
        />
        <button className="btn_admin video" onClick={comprobar}>
          ENTRER
        </button>
      </div>
    );
  }
};
export default ComprobarUser;
