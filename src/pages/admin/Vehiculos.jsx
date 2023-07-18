import React from 'react'

const Vehiculos = () => {
  return (
    <form className='flex flex-col'>
      <h2>Formulario de creación de vehículo</h2>
      <input type= 'text' placeholder='Nombre del vehículo'></input>
      <input type= 'text' placeholder='Marca del vehículo'></input>
      <input type= 'text' placeholder='Modelo del vehículo'></input>
      <button className='bg-indigo-500 text-white'>Enviar Datos</button>
    </form>
  )
}

export default Vehiculos