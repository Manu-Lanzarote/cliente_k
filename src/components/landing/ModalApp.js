import { Link } from "react-router-dom";
import Video from "./video/Video";

const ModalApp = () => {
  return (
    <div className="overlay">
      <div className="popup">
        <Link to="/">
          <i class="far fa-times-circle"></i>
        </Link>
        <Video />
      </div>
    </div>
  );
};
export default ModalApp;
