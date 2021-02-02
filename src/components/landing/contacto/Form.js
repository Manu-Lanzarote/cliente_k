import { useState } from "react";

const Form = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre + " " + datos.apellido);
  };
  return (
    <div className="container p-5 div_formulario">
      <h1 className="h1_form">FORMULAIRE DE CONTACT</h1>
      <form className="row form" onSubmit={enviarDatos}>
        <div className="col-lg-12 div_2">
          <label for="nombre">Votre nom</label>
          <input
            type="text"
            className="form-control input_size"
            name="nombre"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-lg-12 div_2">
          <label for="nombre">Votre apell</label>
          <input
            type="text"
            className="form-control input_size"
            name="apellido"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-lg-12 div_2">
          <label for="nombre">Email</label>
          <br />
          <input
            type="email"
            name="email"
            className="col-lg-12 input_size"
          ></input>
        </div>
        {/* Prueba checkbox */}
        <div className="col-lg-12 div_2 div_3">
          <label for="nombre">Intéressé par</label>
          <br />
          <input className="check" name="wet" type="checkbox" /> {" Wetsuits "}
          <input className="check" name="dry" type="checkbox" /> {" Shortys "}
          <input className="check" name="accesories" type="checkbox" />{" "}
          {" Tops "}
          <br />
          <br />
        </div>
        {/* Caja de texto */}
        <div className="col-lg-12 div_text">
          <label for="message">Votre message</label>
          <textarea className="text_area"></textarea>
        </div>
        {/* Button */}
        <div className="col-lg-3 div_2">
          <button
            className="video btn_form"
            type="submit"
            onClick={() => {
              alert("VOTRE MESSAGE A ÉTÉ ENVOYÉ AVEC SUCCÈS");
            }}
          >
            Enviar
          </button>
        </div>
      </form>
      {/* <p>
        {datos.nombre} {datos.apellido}
      </p> */}
    </div>
  );
};

export default Form;
