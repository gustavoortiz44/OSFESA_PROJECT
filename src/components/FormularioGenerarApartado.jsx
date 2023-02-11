
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormularioGenerarApartado = () => {
  const navigate=useNavigate()
 

    const [usuarioProspecto, setUsuarioProspecto] = useState({
      nombre:'',
      apellidoPaterno:'',
      apellidoMaterno:''

    });
    const [idUsuario, setIdUsuario]=useState()
  
   
    
    
  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch(`${import.meta.env.VITE_BACKEND_URL}/generarApartado.php`,{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json",
      },
      body:JSON.stringify({
        nombre:usuarioProspecto.nombre,
        apellidoPaterno:usuarioProspecto.apellidoPaterno,
        apellidoMaterno:usuarioProspecto.apellidoMaterno
      })
      
    }).then((response) => {
      if (response.status == true) {
        response.json();
       
        setIdUsuario(response.estatus)
      
      }
      navigate(`/apartado/${response.id_prospecto}`)
      
      
    
    
      
  
    
    })
       
     .catch((error) => {
        console.log(error);
      })
  }
  const handleChange=e=>{
    setUsuarioProspecto({
      ...usuarioProspecto,
      [e.target.name]:e.target.value

    })
  }
  return (
   <>
       <form
        className="bg-white py-6 px-5 md:w-1/2 rounded-lg shadow-lg mt-0  shadow-zinc-300"
      onSubmit={handleSubmit}
      >
        <div className="mb-3 p-3">
          <label
            htmlFor="nombre"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Nombre Usuario Prospecto:
          </label>
          <input
            type="nombre"
            placeholder="Ingrese Nombre  Correcto"
            id="nombre"
            name="nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={usuarioProspecto.nombre}
            onChange={handleChange}
            
          />
        </div>
        <div className="mb-3 p-3">
          <label
            htmlFor="apellidoPaterno"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Apellido Paterno:
          </label>
          <input
            type="text"
            placeholder="Ingrese Apellido Materno Correcto"
            id="apellidoPaterno"
            name="apellidoPaterno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={usuarioProspecto.apellidoPaterno}
            onChange={handleChange}
           
          />
        </div>
        <div className="mb-3 p-3">
          <label
            htmlFor="apellidoPaterno"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Apellido Materno:
          </label>
          <input
            type="text"
            placeholder="Ingrese Apellido Materno Correcto"
            id="apellidoMaterno"
            name="apellidoMaterno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={usuarioProspecto.apellidoMaterno}
            onChange={handleChange}
           
          />
        </div>
        <div className="mx-2 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Id: {''}
                <span className="font-normal normal-case">{idUsuario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Estatus: {''}
                <span className="font-normal normal-case">{idUsuario}</span>
            </p>
          </div>

        <input
          type="submit"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle
            w-full p-3  cursor-pointer hover:bg-blue-400 uppercase "
          value="Generar Apartado"
        />
      </form>
    </>
  )
}

export default FormularioGenerarApartado;
