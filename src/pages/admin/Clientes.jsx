import React, { useEffect, useState } from "react";

const Clientes = () => {
  const [edad, setEdad] = useState(0);
  const [esMenorEdad, setEsMenorEdad] = useState(false);

  useEffect(() => {
    if (edad >= 18) {
      setEsMenorEdad(false);
    } else {
      setEsMenorEdad(true);
    }
  }, [edad]);

  return (
    <form className="flex flex-col">
      <h2>Administración de clientes</h2>
      <label htmlFor="edad">
        Por favor ingrese su edad
        <input
          value={edad}
          onChange={(e) => {
            setEdad(e.target.value);
          }}
          className="border border-gray-600"
          type="number"
        ></input>
      </label>
      {esMenorEdad ? (
        <span className="text-3xl text-red-500">
          Usted es menor de edad, no puede hacer pagos!
        </span>
      ) : (
        <span className="text-3xl text-green-500">
          Usted no es menor de edad, puede hacer pagos!
        </span>
      )}
    </form>
  );
};

export default Clientes;
