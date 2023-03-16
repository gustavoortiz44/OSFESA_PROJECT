import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  sweetAlerCLienteAutenticacion,
 sweetAlertError,

} from "../../sweetalert2/Alerta";

const FormularioActualizarContraseña = () => {
  const [usuarioId, setUserId] = useState("");
  const [passwordUser, setPassword] = useState("");
  const navigate = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([usuarioId, passwordUser].includes("")) {
      return sweetAlertError();
    }

    fetch(`${import.meta.env.VITE_BACKEND_URL}/actualizarContraseña.php`,{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json",
      },
      body:JSON.stringify({
        userId:usuarioId,
        password:passwordUser,
      }),
     //mode:"no-cors"
  
      
    })
      
    .then(responseJson=>responseJson.json())
   
      .then((response) => {
        if (response.status==true) {
            navigate('/login')
         
     
          
        }
           
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form
        className="bg-white py-6 px-5 md:w-1/2 rounded-lg shadow-lg mt-0  shadow-zinc-300"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 p-3">
          <label
            htmlFor="userId"
            className="text-gray-700 uppercase font-bold text-center"
          >
           Nomvre Usuario:
          </label>
          <input
            type="text"
            placeholder="Ingrese Usuario Correcto"
            id="userId"
            name="usuarioId"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={usuarioId}
            onChange={(e) => setUserId(e.target.value.trim().toUpperCase())}
            
          />
        </div>
        <div className="mb-3 p-3">
          <label
            htmlFor="password"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Nuevo Password:
          </label>
          <input
            type="password"
            placeholder="Ingrese Su Nuevo Password"
            id="password"
            name="password"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={passwordUser}
            onChange={(e) => setPassword(e.target.value.trim().toUpperCase())}
           
          />
        </div>

        <input
          type="submit"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle
            w-full p-3  cursor-pointer hover:bg-blue-400 uppercase "
          value="Actualizar Contraseña"
        />
      </form>
    </>
  );
};
export default FormularioActualizarContraseña;
