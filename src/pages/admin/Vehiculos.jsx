import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const vehiculosBackend = [
  {
    nombre: "Corolla",
    marca: "Toyota",
    modelo: 2018,
  },
  {
    nombre: "Sandero",
    marca: "Renoult",
    modelo: 2020,
  },
  {
    nombre: "Rav4",
    marca: "Toyota",
    modelo: 2021,
  },
  {
    nombre: "Fiesta",
    marca: "Ford",
    modelo: 2019,
  },
  {
    nombre: "cx3",
    marca: "Mazda",
    modelo: 2021,
  },
];

const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [vehiculo, setVehiculo] = useState([]);
  const [textBoton, setTextoBoton] = useState("Crear nuevo Vehículo");

  useEffect(() => {
    // Obtener lista de vehículos desde el frontend
    setVehiculo(vehiculosBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear nuevo vehículo");
    } else {
      setTextoBoton("Mostrar todos los vehículos");
    }
  }, [mostrarTabla]);

  return (
    <div className="flex h-full w-full p-8 flex-col items-center justify-start">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-gray-900">
          Formulario de creación de vehículo
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className="text-white p-5 border rounded-full bg-indigo-500 m-6 self-end"
        >
          {textBoton}
        </button>
        {mostrarTabla ? (
          <TablaVehiculos listaVehiculos={vehiculo} />
        ) : (
          <FormularioCreacionVehiculos
            funcionParaMostrarTabla={setMostrarTabla}
            listaVehiculos={vehiculo}
            funcionParaAgregarVehiculo={setVehiculo}
          />
        )}
        <ToastContainer position="botton-center" autoClose={3000} />
      </div>
    </div>
  );
};

const TablaVehiculos = ({ listaVehiculos }) => {
  useEffect(() => {
    console.log(
      "Este es un listado de vehiculos en el componente table",
      listaVehiculos
    );
  }, [listaVehiculos]);
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900">Todos los vehículos</h2>
      <table>
        <thead>
          <th>Nombre del vehículo</th>
          <th>Marca del vehículo</th>
          <th>Modelo del vehículo</th>
        </thead>
        <tbody>
          {listaVehiculos.map((vehiculo) => {
            return (
              <tr>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormularioCreacionVehiculos = ({
  funcionParaMostrarTabla,
  listaVehiculos,
  funcionParaAgregarVehiculo,
}) => {
  const [nombre, setNombre] = useState();
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();

  const enviarBackend = () => {
    console.log("nombre", nombre, "marca", marca, "modelo", modelo);
    toast.success("Vehiculo Guardado con éxito");
    funcionParaMostrarTabla(true);
    funcionParaAgregarVehiculo([
      ...listaVehiculos,
      { nombre: nombre, marca: marca, modelo: modelo },
    ]);
  };

  return (
    <div className="flex flex-col  items-center justify-center">
      <h2 className="text-2xl font-bold">Crear nuevo Vehículo</h2>
      <form className="flex flex-col">
        <label className="flex flex-col" htmlFor="nombre">
          Nombre del vehículo
          <input
            type="Text"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            placeholder="Corolla"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            required
          ></input>
        </label>
        <label className="flex flex-col" htmlFor="marca">
          Marca del vehículo
          <select
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            name="marca"
            onChange={(e) => {
              setMarca(e.target.value);
            }}
            required
          >
            <option disabled>Selecciones una opción</option>
            <option>Renoult</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option>Chevrolet</option>
          </select>
        </label>
        <label className="flex flex-col" htmlFor="modelo">
          Nombre del vehículo
          <input
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="Number"
            placeholder="2018"
            min={2000}
            max={2024}
            value={modelo}
            onChange={(e) => {
              setModelo(e.target.value);
            }}
            required
          ></input>
        </label>
        <button
          type="submit"
          className="col-span-2 bg-green-500 p-2 rounded-full text-white shadow-md hover:bg-green-600"
          onClick={() => {
            enviarBackend();
          }}
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Vehiculos;
