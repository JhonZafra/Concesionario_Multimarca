import React from "react";
import ImagenLogo from "./ImagenLogo";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="flex flex-col p-4 w-72 border border-gray-300  bg-gray-100">
      <Link to="/admin">
        <ImagenLogo />
      </Link>
      <div className="my-4">
        <Ruta
          icono="fa-regular fa-user"
          ruta="/admin/profile"
          nombre="Perfil"
        />
        <Ruta
          icono="fa-regular fa-car"
          ruta="/admin/vehiculos"
          nombre="Vehículos"
        />
        <Ruta icono="fa-solid fa-shop" ruta="/admin/ventas" nombre="Ventas" />
        <Ruta
          icono="fa-regular fa-users"
          ruta="/admin/usuarios"
          nombre="Usuarios"
        />
      </div>
      <button className="mt-2">Cerrar Sesión</button>
    </nav>
  );
};

const Ruta = ({ icono, ruta, nombre }) => {
  console.log(icono, ruta)
  return (
    <Link to={ruta}>
      <button className="p-3 my-3 w-full hover:bg-indigo-900 bg-indigo-700 text-white flex flex-items-start border rounded-md">
        <i className={`${icono} w-7`} />
        {nombre}
      </button>
    </Link>
  );
};

export default Sidebar;
