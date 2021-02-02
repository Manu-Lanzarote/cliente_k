import { BrowserRouter, Route } from "react-router-dom";
import DetalleProducto from "./DetalleProducto";

const PaginaDeProducto = () => {
  return (
    <BrowserRouter>
      <Route exact path="/Boutique/:id">
        <DetalleProducto />
      </Route>
    </BrowserRouter>
  );
};

export default PaginaDeProducto;
