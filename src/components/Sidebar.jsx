import React from "react";
import ImagenLogo from "./ImagenLogo";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
  
  return (
    <nav className="hidden md:flex md:w-72 flex-col p-4 border border-gray-300  bg-gray-100">
      <Link to="/admin">
        <ImagenLogo />
      </Link>
      <div className="my-4">
        <Ruta
          icono="fa-solid fa-user"
          ruta="/admin/profile"
          nombre="Perfil"
        />
        <Ruta
          icono="fa-solid fa-car"
          ruta="/admin/vehiculos"
          nombre="Vehículos"
        />
        <Ruta icono="fa-solid fa-shop" ruta="/admin/ventas" nombre="Ventas" />
        <Ruta
          icono="fa-solid fa-users"
          ruta="/admin/clientes"
          nombre="Clientes"
        />
      </div>
      <button>
          Cerrar Sesión</button>
    </nav>
  );
};

const Ruta = ({ icono, ruta, nombre }) => {
  return (
    <Link to={ruta}>
      <button className="p-3 my-3 w-full hover:bg-indigo-900 bg-indigo-700 text-white flex flex-initial border rounded-md">
        <FontAwesomeIcon icon={`${icono}`} className="mr-3"/>
        {nombre}
      </button>
    </Link>
  );
};

export default Sidebar;
