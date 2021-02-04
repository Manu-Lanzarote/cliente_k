import { Link } from "react-router-dom";

const ShopEnlaces = () => {
  return (
    <div className="menu_shop">
      <ul className="shop_enlaces">
        <li>
          <Link to="/Boutique">BOUTIQUE</Link>
        </li>
        <li>
          <Link to="/Femme">FEMME</Link>
        </li>
        <li>
          <Link to="/Homme">HOMME</Link>
        </li>
        <li>
          <Link to="/Wetsuits">WETSUITS</Link>
        </li>
        <li>
          <Link to="/Shortys">SHORTYS</Link>
        </li>
        <li>
          <Link to="/Tops">TOPS</Link>
        </li>
        <li>
          <Link to="/Boutique">
            <i className="fas fa-street-view"> MON COMPTE</i>
          </Link>
        </li>
        <li>
          <Link to="/Boutique">
            <i className="fas fa-shopping-cart"> (0)</i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ShopEnlaces;
