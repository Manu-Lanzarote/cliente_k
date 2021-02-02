import LOGO_FINAL_KALYPSE_H from "./uploads_k/LOGO-FINAL-KALYPSE-H.png";
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
const Tienda = () => {
  return (
    <>
      <BrowserRouter>
        <div className="div_logo ">
          <img src={LOGO_FINAL_KALYPSE_H} alt="Kalypse" className="img_hero" />
        </div>
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
          {/* RUTA PROVISIONAL - NO QUIERO QUE SE RENDERIZE AQUÍ SINO EN LA PÁGINA SingleMain.js
          Ruta para entrar en la página de producto único cuando hago click en alguno de los productos de la página "Boutique en Ligne"*/}
          <Route exact path="/Boutique/:id">
            <DetalleProducto />
          </Route>
        </div>
      </BrowserRouter>
      <div>
        <BoutiquePage />
      </div>
    </>
  );
};

export default Tienda;
