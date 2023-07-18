import React, { useEffect, useState } from 'react'

const Vehiculos = () => {
  const [nombreVehiculo, setNombreVehiculo] = useState('')


useEffect(()=> {
  console.log('Hola, soy un useEffect que se ejecuta solo la primera vez cuando la página se renderiza porque tiene el array de dependencias vacíos')
}, []);

//useEffect(()=> {
//  console.log('Hola, soy un useEffect que se ejecuta infinitamente por no tener un array de dependencias')
//});

useEffect( ()=> {
  console.log('Esto es una función se ejecuta cada que cambie el nombre del vehículo')
  console.log('El valor de la variable es', nombreVehiculo)
},[nombreVehiculo])

const enviarDatosAlBackend = () => {
  console.log('El valor de la variable nombreVehiculo es:', nombreVehiculo)
}

  return (
    <form className='flex flex-col'>
      <h2>Formulario de creación de vehículo</h2>
      <input onChange={(e) => {setNombreVehiculo(e.target.value)}} type= 'text' placeholder='Nombre del vehículo'></input>
      <input onChange={(e) => {console.log(e.target.value)}} type= 'text' placeholder='Marca del vehículo'></input>
      <input type= 'text' placeholder='Modelo del vehículo'></input>
      <button onClick= {enviarDatosAlBackend} className='bg-indigo-500 text-white'>Enviar Datos</button>
    </form>
  )
}

export default Vehiculos