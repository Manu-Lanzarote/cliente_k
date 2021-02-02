import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const DetalleProducto = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch("/producto/" + id);
  }, []);

  return <div>hola que tal</div>;
};

export default DetalleProducto;
