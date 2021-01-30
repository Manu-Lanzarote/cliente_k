import logo_kalypse from "../uploads_k/logo_kalypse.png";
import { Link } from "react-router-dom";

const MenuAdmin = () => {
  return (
    <div>
      <div className="contenedor_menu_imagen">
        <a href="../">
          <img src={logo_kalypse} width="200" className="logo" alt="Kalypse" />
        </a>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/lista_productos/" className="menu_link">
                VOIR PRODUITS
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/nuevo_producto/" className="menu_link">
                CRÉER PRODUIT
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/editar_producto/" className="menu_link">
                MODIFIER PRODUIT
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/borrar_producto/" className="menu_link">
                SUPPRIMER PRODUIT
              </Link>
            </li>
            <hr />
            <li>
              <a href="../" className="noactivo">
                SORTIR
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuAdmin;
