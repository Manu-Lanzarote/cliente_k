import { Link } from "react-router-dom";
import ComprobarUser from "./AdminArea/ComprobarUser";

const ModalAdmin = () => {
  return (
    <div className="overlay">
      <div className="popup">
        <Link to="/">
          <i className="far fa-times-circle"></i>
        </Link>
        <ComprobarUser />
      </div>
    </div>
  );
};
export default ModalAdmin;
