import { BrowserRouter, Route } from "react-router-dom";
import MenuAdmin from "./MenuAdmin";
import Read from "./read/Read";
import Fondo from "./Fondo";
import PaginaCreate from "./create/PaginaCreate";
import PaginaUpdate from "./update/PaginaUpdate";
import PaginaDelete from "./delete/PaginaDelete";

const AdminPage = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="contenedor_principal panel_de_control">
          <div className="contenedor_menu_vertical menu_admin">
            <MenuAdmin />
          </div>
          <div className="contenedor_contenidos ">
            <Route exact path="/Kalypse_admin_area">
              <Fondo />
            </Route>
            <Route exact path="/lista_productos/">
              <Read />
            </Route>
            <Route exact path="/nuevo_producto/">
              <PaginaCreate />
            </Route>
            <Route exact path="/editar_producto/">
              <PaginaUpdate />
            </Route>
            <Route exact path="/borrar_producto/">
              <PaginaDelete />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AdminPage;
