import { useState } from "react";
import { sweetAlert, sweetAlertError,sweetAlertcatch } from "../../sweetalert2/Alerta";

const FormularioRecibo = () => {
  const [recibo, setRecibo] = useState({
    idAsesor:'',
    fechaRecibo:'',
    fechaFinal:'',
    monto:'',
    observaciones:'',
    idContrato:'',
    idUsuario:''
  });
  
  const handleSubmit =  (e) => {
    e.preventDefault();
    if (
    object.keys(recibo).includes("")
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
          estatus:estatusUser,
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
      setRecibo("");
      
    
  };
  const handleChange=e=>{
    setRecibo({
        ...recibo,
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
            htmlFor="fechaRecibo"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Fecha Recibo:
          </label>
          <input
            type="text"
            placeholder="Ingrese Fecha de Recibo Correcta"
            id="fechaRecibo"
            name="fechaRecibo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={recibo.fechaRecibo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3">
          <label
            htmlFor="fechaFinal"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Fecha Final:
          </label>
          <input
            type="text"
            placeholder="Ingrese Fecha Final de Recibo Correcta"
            id="fechaFinal"
            name="fechaFinal"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={recibo.fechaFinal}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3">
          <label
            htmlFor="monto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Monto $:
          </label>
          <input
            type="text"
            placeholder="Ingrese Monto Correcto"
            id="monto"
            name="monto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={recibo.monto}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3">
          <label
            htmlFor="observaciones"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Observaciones:
          </label>
          <textarea
            type="text"
            placeholder="Escriba Observaciones"
            id="observaciones"
            name="observaciones"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={recibo.observaciones}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-1">
          <label
            htmlFor="idContrato"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Id_Contrato:
          </label>
          <input
            type="text"
         
            id="idContrato"
            name="idContrado"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={recibo.idContrato}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-1">
          <label
            htmlFor="idUsuario"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Id_Usuario:
          </label>
          <input
            type="text"
          
            id="idUsuario"
            name="idUsuario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={recibo.idUsuario}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle
            w-full p-3  cursor-pointer hover:bg-blue-400 uppercase "
          value="Generar Recibo"
        />
      </form>
    </>
  );
};
export default FormularioRecibo;
