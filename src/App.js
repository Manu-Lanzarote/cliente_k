import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import MenuNav from "./components/landing/MenuNav";
import Main from "./components/landing/Main";
import LaMarque from "./components/landing/LaMarque";
import LaCollection from "./components/landing/LaCollection";
import Histoire from "./components/landing/Histoire";
import ModalApp from "./components/landing/ModalApp";
import Contact from "./components/landing/Contact";
import Tienda from "./components/landing/Tienda";
import ModalAdmin from "./components/landing/ModalAdmin";
import DetalleProducto from "./components/single_product/DetalleProducto";

function App() {
  return (
    <BrowserRouter>
      <div className="contenedor_principal">
        <div className="contenedor_menu_vertical">
          <MenuNav />
        </div>
        <div className="contenedor_contenidos">
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/LaMarque">
            <LaMarque />
          </Route>
          <Route exact path="/LaCollection">
            <LaCollection />
          </Route>
          <Route exact path="/Histoire">
            <Histoire />
          </Route>
          <Route exact path="/ModalApp">
            <ModalApp />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Boutique">
            <Tienda />
          </Route>
          <Route exact path="/Kalypse_admin_area">
            <ModalAdmin />
          </Route>
          {/* Ruta producto único */}
          {/* <Route exact path="/Boutique/:id">
            <DetalleProducto />
          </Route> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
