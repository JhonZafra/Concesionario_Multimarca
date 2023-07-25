
import React from "react";
import { Link } from "react-router-dom";
import TriggerDarkMode from "./TriggerDarkMode";

const Navbar = () => {

  return (
    <nav className="bg-red-400">
      <ul className="flex w-full justify-between my-3">
        <li> Logo </li>
        <li> Navegación1 </li>
        <li> Navegación2 </li>
        <li>
  <TriggerDarkMode />
        </li>
        <li className="px-3">
          <Link to="/login">
            <button className="bg-indigo-500 p-2 rounded-lg shadow-md hover:bg-gray-200">
              Iniciar sesion
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
