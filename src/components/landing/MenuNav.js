import logo_kalypse from "./uploads_k/logo_kalypse.png";
import { Link } from "react-router-dom";

const MenuNav = () => {
  return (
    <div>
      <div className="contenedor_menu_imagen">
        <Link to="/" className="menu_link">
          <img src={logo_kalypse} width="200" className="logo" alt="Kalypse" />
        </Link>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="menu_link">
                KALYPSE
              </Link>
            </li>
            <hr />
            <li>
              <Link to="./LaMarque" className="menu_link">
                LA MARQUE
              </Link>
            </li>
            <hr />
            <li>
              <Link to="./LaCollection" className="menu_link">
                LA COLLECTION
              </Link>
            </li>
            <hr />
            <li>
              <Link to="./Histoire" className="menu_link">
                HISTOIRE
              </Link>
            </li>
            <hr />
            <li>
              <Link to="./Boutique" className="menu_link">
                BOUTIQUE EN LIGNE
              </Link>
            </li>
            <hr />
            <li>
              <Link to="./Contact" className="menu_link">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <i className="fas">info@kalypse.com</i>
        <div>
          <a href="tel:+34639056797">
            <i className="fas fa-phone-square-alt fab"></i>
          </a>
          <a
            href="https://www.facebook.com/kalypse.fr/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.pinterest.fr/bykalypse/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-pinterest-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/kalypse?trk=hp-feed-company-name"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <Link to="./Kalypse_admin_area" className="menu_link">
            <i className="fas fa-unlock fab"></i>
          </Link>
        </div>
        <div>
          <i className="copy">© Copyright 2021 - KALYPSE ®</i>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
