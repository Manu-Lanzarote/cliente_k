import { BrowserRouter, Route } from "react-router-dom";
import ShopEnlaces from "../shop/ShopEnlaces";
import Boutique from "../shop/Boutique";
import Femme from "../shop/Femme";
import Homme from "../shop/Homme";
import Wetsuits from "../shop/Wetsuit";
import Shorty from "../shop/Shorty";
import Top from "../shop/Top";
import BoutiquePage from "../shop/BoutiquePage";
import DetalleProducto from "../single_product/DetalleProducto";
import Detalle2 from "../single_product/Detalle2";

const Tienda = () => {
  return (
    <div className="main_tienda">
      <BrowserRouter>
        <div className="header_shop">
          <ShopEnlaces />
        </div>
        <div className="boutique">
          <Route exact path="/Boutique">
            <Boutique />
          </Route>
          <Route exact path="/Femme">
            <Femme />
          </Route>
          <Route exact path="/Homme">
            <Homme />
          </Route>
          <Route exact path="/Wetsuits">
            <Wetsuits />
          </Route>
          <Route exact path="/Shortys">
            <Shorty />
          </Route>
          <Route exact path="/Tops">
            <Top />
          </Route>
          {/* Ruta que muestra el detalle de cada producto */}
          <Route exact path="/Boutique/:id">
            <DetalleProducto />
          </Route>
        </div>
        <Route exact path="/Boutique/:id">
          <Detalle2 />
        </Route>
      </BrowserRouter>
      <BoutiquePage />
    </div>
  );
};

export default Tienda;
