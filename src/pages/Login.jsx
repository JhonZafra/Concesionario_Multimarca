import React from "react";
import { Link } from "react-router-dom";
import "styles/styles.css";

const Login = () => {
  return (
    <div className="felx flex-col w-full justify-center items-center">
      <h2 className="m-3 text-center text-3xl font-extrabold text-gray-900">
        Inicia sesión con tu cuenta
      </h2>
      <form className="text-center mt-8 max-w-md">
        <div>
          <input
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="email"
            placeholder="dsl@c.com"
            required
          ></input>
          <input
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="password"
            required
          ></input>
        </div>
        <div className="flex justify-between mt-4 mb-6">
          <div>
            <label htmlFor="recuerdame">
              <input type="checkbox" name="recuerdame" />
              Recuerdame
            </label>
          </div>
          <div className="justify-end">
            <Link to="/">¿Olvidaste tu contraseña?</Link>
          </div>
        </div>
        <div>
          <Link to="/admin">
            <button
              className="mb-1 w-full h-10 rounded-md border-2 border-gray-300  bg-white hover:border-indigo-600"
              type="submit"
            >
              Iniciar sesion
            </button>
          </Link>
        </div>
        <div>o</div>
        <button className="mt-1 w-full h-10 rounded-md border-2 border-gray-300 bg-white hover:border-indigo-600">
          Continúa con google
        </button>
      </form>
    </div>
  );
};

export default Login;
