import { useState } from "react";
import { sweetAlert, sweetAlertError,sweetAlertcatch } from "../../sweetalert2/Alerta";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const [usuarioId, setUserId] = useState("");
  const [nombreUsuario, setNombre] = useState("");
  const [passwordUser, setPassword] = useState("");
  const [levelUser, setLeveL] = useState("");
  const navigate=useNavigate()
  
  const handleSubmit =  (e) => {
    e.preventDefault();
    if (
      [usuarioId, nombreUsuario, passwordUser, levelUser].includes("")
    ) {
      return sweetAlertError();
    }

    
       fetch(`${import.meta.env.VITE_BACKEND_URL}/crearUsuario.php`, {
        method: "POST",
        headers: {
          "Accept":"application/json",
          "Content-type":"application/json",
        },
        body:JSON.stringify({
          userId:usuarioId,
          password:passwordUser,
          nombre:nombreUsuario,
          level:levelUser,
          
        }),
 
      }).then((response) => {
        if (response.status == true) {
           response.json();
         
           
        }
        sweetAlert();
        navigate('/')
      
      })
      .catch(()=>{
        sweetAlertcatch()
      })
      setUserId("");
      setNombre("");
      setLeveL("");
      setPassword("");
    
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
            Id_Usuario:
          </label>
          <input
            type="text"
            placeholder="Ingrese Usuario_Id Correcto"
            id="userId"
            name="usuarioId"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={usuarioId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>

        <div className="mb-3 p-3">
          <label
            htmlFor="nombre"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Nombre de Usuario:
          </label>
          <input
            type="text"
            placeholder="Ingrese Nombre  de Usuario Correcto"
            id="nombre"
            name="nombreUsuario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={nombreUsuario}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3 p-3">
          <label
            htmlFor="level"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Nivel:
          </label>
          <select value={levelUser} onChange={e=>setLeveL(e.target.value)} className='uppercase font-bolt
          shadow-md rounded-md'>
            <option value=''>--Selecciona el Nivel Correcto--</option>
            <option>DIRECCION</option>
            <option>ADMINISTRADOR</option>
            <option>VENTAS</option>
            <option>CAPTURA</option>
          </select>
         
        </div>
       
        
        <div className="mb-3 p-3">
          <label
            htmlFor="password"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Password:
          </label>
          <input
            type="password"
            placeholder="Ingrese Password Correcto"
            id="password"
            name="passwordUser"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={passwordUser}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle
            w-full p-3  cursor-pointer hover:bg-blue-400 uppercase "
          value="Guardar Registro"
        />
      </form>
    </>
  );
};
export default Formulario;
