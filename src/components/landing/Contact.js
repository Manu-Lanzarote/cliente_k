import MyMapComponent from "./contacto/MyMapComponent";
import Form from "./contacto/Form";
const Contact = () => {
  return (
    <div className="contact">
      <div className="mapa sub_contact">
        <MyMapComponent isMarkerShown />
      </div>
      <div className="sub_contact">
        <Form />
      </div>
    </div>
  );
};
export default Contact;
