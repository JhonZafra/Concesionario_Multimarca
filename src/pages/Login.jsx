import React from "react";
import { Link } from "react-router-dom";
import "styles/styles.css";

const Login = () => {
  return (
    <div className="flex flex-col w-full justify-center">
      <h2 className="m-4 text-center text-3xl font-extrabold text-grey-900 ">
        Inicia sesión con tu cuenta
      </h2>
      <form className="mt-8 max-w-md">
        <div>
          <input
            className="appereance-none rounded-md relative block w-full px-3 py-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
            type="email"
            placeholder="dsl@c.com"
            required
          ></input>
          <input
            className="appereance-none rounded-md relative block w-full px-3 py-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
            type="password"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="recuerdame">
            <input type="checkbox" name="recuerdame" />
            Recuerdame
          </label>
        </div>
        <div>
          <Link to="/">¿Olvidaste tu contraseña?</Link>
        </div>
        <div>
          <Link to="/admin">
            <button type="submit">Iniciar sesion</button>
          </Link>
        </div>
        <div>o</div>
        <button>Continúa con google</button>
      </form>
    </div>
  );
};

export default Login;
