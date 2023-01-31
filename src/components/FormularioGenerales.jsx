import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  sweetAlertcatch,
  sweetAlertError,
  sweetAlertLogin,
  sweetAlert
} from "../../sweetalert2/Alerta";

const FormularioGenerales = () => {
  const [usuario, setUsuario] = useState({
    idProspecto:'',
    idVendedor:'',
    nombre:'',
    apellidoPaterno:'',
    apellidoMaterno:'',
    nacionalidad:'',
    edad:'',
    estadoCivil:'',
    gradoEstudios:'',
    ocupacion:'',

    telefonoCasa:'',
    calle:'',
    numeroInt:'',
    numeroExt:'',
    colonia:'',
    estado:'',
    municipio:'',
    beneficiario:'',
    estatus:''



  });
  const handleChange=e=>{
    setUsuario({
        ...usuario,
        [e.target.name]:e.target.value

    })
  }
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(usuario).includes("")) {
     return  sweetAlertError();
    }

    fetch(`${import.meta.env.VITE_BACKEND_URL}/crearGenerales.php`,{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json",
      },
      body:JSON.stringify({
        idProspecto:usuario.idProspecto,
        idVendedor:usuario.idVendedor,
        nombre:usuario.nombre,
        apellidoPaterno:usuario.apellidoPaterno,
        apellidoMaterno:usuario.apellidoMaterno,
        nacionalidad:usuario.nacionalidad,
        edad:usuario.edad,
        estadoCivil:usuario.estadoCivil,
        gradoEstudios:usuario.gradoEstudios,
        ocupacion:usuario.ocupacion,
      
        telefonoCasa:usuario.telefonoCasa,
        calle:usuario.calle,
        numeroInt:usuario.numeroInt,
        numeroExt:usuario.numeroExt,
        colonia:usuario.colonia,
        estado:usuario.estado,
        municipio:usuario.municipio,
        beneficiario:usuario.beneficiario,
        estatus:usuario.estatus
      }),
     
      

    }).then((response) => {
        if (response.status == true) {
           response.json();
         
           
        }
        sweetAlert();
      
      })
      .catch(()=>{
        sweetAlertcatch()
      })
    
     
  };

  return (
    <>
      <form
        className="bg-white py-6 px-5 md:w-2/2  rounded-lg shadow-lg mt-0 shadow-zinc-300"
        onSubmit={handleSubmit}
      >
        <div>
     
        <div className=" p-3 mb-3 float-left">
          <label
            htmlFor="idVendedor"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Id_Vendedor:
          </label>
          <input
            type="text"
            placeholder="Ingrese Id Vendedor Correctamente"
            id="idVendedor"
            name="idVendedor"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.idVendedor}
            onChange={handleChange}
          />
         
        </div>

        </div>
        <div>
        <div className=" p-3 mb-3 float-left">
          <label
            htmlFor="nombre"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Nombre:
          </label>
          <input
            type="text"
            placeholder="Ingrese Nombre Correctamente"
            id="nombre"
            name="nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.nombre}
            onChange={handleChange}
            
          />
         
        </div>
        <div className=" p-3 mb-3 float-left">
          <label
            htmlFor="apellidoPaterno"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Apellido Paterno:
          </label>
          <input
            type="text"
            placeholder="Ingrese Apellido Paterno Correctamente"
            id="apellidoPaterno"
            name="apellidoPaterno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.apellidoPaterno}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="apellidoMaterno"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Apellido Materno:
          </label>
          <input
            type="text"
            placeholder="Ingrese Apellido Materno Correctamente"
            id="apellidoMaterno"
            name="apellidoMaterno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.apellidoMaterno}
            onChange={handleChange}
          />
        </div>
        </div>
        
        <div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="nacionalidad"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Nacionalidad:
          </label>
          <input
            type="text"
            placeholder="Ingrese Nacionalidad Correctamente"
            id="nacionalidad"
            name="nacionalidad"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.nacionalidad}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="edad"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Edad:
          </label>
          <input
            type="number"
            placeholder="Ingrese la Edad Correctamente"
            id="edad"
            name="edad"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.edad}
            onChange={handleChange}
          
          />
        </div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="estadoCivil"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Estado Civil:
          </label>
          <input
            type="text"
            placeholder="Ingrese Estado Civil Correctamente"
            id="estadoCivil"
            name="estadoCivil"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.estadoCivil}
            onChange={handleChange}
          />
        </div>
        </div>
       <div>
       <div className="mb-3 p-3 float-left">
          <label
            htmlFor="gradoEstudios"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Grado de Estudios:
          </label>
          <input
            type="text"
            placeholder="Ingrese Grado de Estudios Correctamente"
            id="gradoEstudios"
            name="gradoEstudios"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.gradoEstudios}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3  float-left">
          <label
            htmlFor="ocupacion"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Ocupacion:
          </label>
          <input
            type="text"
            placeholder="Ingrese Ocupacion Correctamente"
            id="ocupacion"
            name="ocupacion"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.ocupacion}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3  float-left">
          <label
            htmlFor="telefonoCasa"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Telefono Casa:
          </label>
          <input
            type="number"
            placeholder="Ingrese Telefono Celular Correctamente"
            id="telefonoCasa"
            name="telefonoCasa"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.telefonoCasa}
            onChange={handleChange}
          />
        </div>

       </div>
         
        <div className="mb-3 p-3  float-left">
          <label
            htmlFor="calle"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Calle:
          </label>
          <input
            type="text"
            placeholder="Ingrese Calle Correctamente"
            id="calle"
            name="calle"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.calle}
            onChange={handleChange}
          />
        </div>
        <div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="numeroInt"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Numero Interior:
          </label>
          <input
            type="text"
            placeholder="Ingrese Numero Interior Correctamente"
            id="numeroInt"
            name="numeroInt"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.numeroInt}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="numeroExt"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Numero Exterior:
          </label>
          <input
            type="text"
            placeholder="Ingrese Numero Exterior  Correctamente"
            id="numeroExt"
            name="numeroExt"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.numeroExt}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="colonia"
            className="text-gray-700 uppercase font-bold text-center"
          >
                Colonia:
          </label>
          <input
            type="text"
            placeholder="Ingrese Colonia Correctamente"
            id="colonia"
            name="colonia"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.colonia}
            onChange={handleChange}
          />
        </div>


        </div>
       
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="estado"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Estado:
          </label>
          <input
            type="text"
            placeholder="Ingrese Estado Correctamente"
            id="estado"
            name="estado"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.estado}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="municipio"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Municipio:
          </label>
          <input
            type="text"
            placeholder="Ingrese Beneficiario Correctamente"
            id="municipio"
            name="municipio"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.municipio}
            onChange={handleChange}
          />
        </div>
        <div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="beneficiario"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Beneficiario:
          </label>
          <input
            type="text"
            placeholder="Ingrese Beneficiario Correctamente"
            id="beneficiario"
            name="beneficiario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.beneficiario}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="estatus"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Estatus:
          </label>
          <input
            type="estatus"
            placeholder="Ingrese Estatus Correctamente"
            id="estatus"
            name="estatus"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={usuario.estatus}
            onChange={handleChange}
          />
        </div>

        </div>
       
        <input
          type="submit"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle
            w-full p-3  cursor-pointer hover:bg-blue-400 uppercase "
          value="Guardar Generales"
        />
       
      </form>
    </>
  );
};
export default FormularioGenerales;
