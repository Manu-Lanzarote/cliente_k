import { BrowserRouter, Route } from "react-router-dom";
import MenuAdmin from "./MenuAdmin";
import Create from "./create/Create";
import Delete from "./delete/Delete";
import Read from "./read/Read";
import Update from "./update/Update";
import Fondo from "./Fondo";

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
              <Create />
            </Route>
            <Route exact path="/editar_producto/">
              <Update />
            </Route>
            <Route exact path="/borrar_producto/">
              <Delete />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AdminPage;
