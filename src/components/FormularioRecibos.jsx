import { useState,useEffect } from "react";
import { sweetAlert, sweetAlertError,sweetAlertcatch, sweetAlerId } from "../../sweetalert2/Alerta";

const FormularioRecibo = () => {
  const newDate = new Date()
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const fecha=year+'-'+month+'-'+date
  
  const [idRecibos, setIdRecibos]=useState([])
  useEffect(()=>{
    const consultarApi = async () => {
  
      const url = `${import.meta.env.VITE_BACKEND_URL}/obtenerIdRecibo.php`;
  
      const respuesta = await fetch(url);
      const relustado= await respuesta.json()
     setIdRecibos(relustado); 
    };
    consultarApi();
  
    localStorage.setItem("idRecibo",(idRecibos))
  
  },[idRecibos])
  const [recibo, setRecibo] = useState({
    idRecibo:'RE_'+localStorage.getItem("idRecibo"),
    fechaRecibo:fecha,
    fechaInicial:'',
    fechaFinal:'',
    cantidadPagos:'',
    monto:'',
    observaciones:'',
    usuarioAutenticado:localStorage.getItem("usuarioId"),
    usuarioCaptura:localStorage.getItem("usuarioId")

  })
  const [idContrato, setIdContrato] = useState('')
  const [usuario, setIdUsuario] = useState({})
 
 
 

 
  
 
  
  
  const handleSubmitId =  (e) => {
    e.preventDefault();
    if (
        [idContrato].includes("")
    ) {
      return sweetAlerId();
    }

    
       fetch(`${import.meta.env.VITE_BACKEND_URL}/crearRecibo.php`, {
        method: "POST",
        headers: {
          "Accept":"application/json",
          "Content-type":"application/json",
        },
        body:JSON.stringify({
          idContrato:idContrato
          


        
        }),
        //mode:"no-cors"
 
      })
      .then(responseJson=>responseJson.json())
      .then((response) => {
        setIdUsuario(response)

      
      })

    };
    const handleChange=e=>{
        setRecibo({
            ...recibo,
            [e.target.name]:e.target.value

        })

    }
     const handleSubmit =  (e) => {
    e.preventDefault();
    if (
        [idContrato].includes("")
    ) {
      return sweetAlerId();
    }

    
       fetch(`${import.meta.env.VITE_BACKEND_URL}/generarRecibo.php`, {
        method: "POST",
        headers: {
          "Accept":"application/json",
          "Content-type":"application/json",
        },
        body:JSON.stringify({
         idRecibo:recibo.idRecibo,
          idContrato:idContrato,
          idProspecto:usuario.ID_PROSPECTO,
          idCliente:usuario.ID_CLIENTE,
          nombre:usuario.NOMBRE,
          apellidoPaterno:usuario.APELLIDO_PATERNO,
          apellidoMaterno:usuario.APELLIDO_MATERNO,
          fechaRecibo:recibo.fechaRecibo,
          fechaInicial:usuario.fechaInicial,
          fechaFinal:recibo.fechaFinal,
          cantidadPagos:recibo.cantidadPagos,
          monto:recibo.monto,
          observaciones:recibo.observaciones,
          usuarioAutenticado:recibo.usuarioAutenticado,
          usuarioCaptura:recibo.usuarioCaptura

          


        
        }),
        mode:"no-cors"
 
      })
      
      .then((response) => {
       if(response.status==true){
        response.json()
       }
       sweetAlert()
       setIdContrato('')
       setRecibo({
        fechaRecibo:'',
        fechaInicial:'',
        fechaFinal:'',
        cantidadPagos:'',
        monto:'',
        observaciones:''
       })
       setIdUsuario({
        NOMBRE:'',
        APELLIDO_PATERNO:'',
        APELLIDO_MATERNO:'',
        LOTE:'',
        MANZANA:'',
        ZONA:'',
        
       })
      
      })
          
    }



  return (
    <>
      <form
          className="bg-white py-6 px-5 md:w-2/2 rounded-lg shadow-lg mt-0  shadow-zinc-300"
       onSubmit={handleSubmit}
      >

        <div className="mb-3 p-3 ">
      <label
        htmlFor="idContrato"
        className="text-gray-700 uppercase font-bold text-center"
      >
        Contrato:
      </label>
      <input
        type="idContrato"
        placeholder="Ingrese Numero de Contrato"
        id="idContrato"
        
        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
       value={idContrato}
        onChange={e=>setIdContrato(e.target.value)}
      />
    </div>
    <div>
    <div className="mb-3 p-3 float-left">
      <label
        htmlFor="nombre"
        className="text-gray-700 uppercase font-bold text-center"
      >
        Nombre:
      </label>
      <input
        type="nombre"
        id="nombre"
        placeholder="Nombre"
        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
       value={usuario.NOMBRE}
       
      />
    </div>
    <div className="mb-3 p-3 float-left">
      <label
        htmlFor="apellidoPaterno"
        className="text-gray-700 uppercase font-bold text-center"
      >
        Apellido Paterno:
      </label>
      <input
        type="text"
        placeholder="Apellido Paterno"
        id="apellidoPaterno"
        name="apellidoPaterno"
        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
        value={usuario.APELLIDO_PATERNO}
       
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
        placeholder=" Apellido Materno"
        id="apellidoMaterno"
        name="apellidoMaterno"
        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
        value={usuario.APELLIDO_MATERNO}
      />
    </div>
    </div>
       <div>
       <div className="mb-3 p-3 float-left">
      <label
        htmlFor="lote"
        className="text-gray-700 uppercase font-bold text-center"
      >
        Lote:
      </label>
      <input
        type="text"
        placeholder="Lote"
        id="lote"
        
        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
        value={usuario.LOTE}
      />
    </div>
    <div className="mb-3 p-3 float-left">
      <label
        htmlFor="manzana"
        className="text-gray-700 uppercase font-bold text-center"
      >
        MAZANA:
      </label>
      <input
        type="text"
        placeholder="Manzana Lote"
        id="manzana"
        
        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
        value={usuario.MANZANA}
      />
    </div>
    <div className="mb-3 p-3 float-left">
      <label
        htmlFor="zona"
        className="text-gray-700 uppercase font-bold text-center"
      >
        Zona:
      </label>
      <input
        type="text"
        placeholder="Zona Lote"
        id="zona"
        
        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
        value={usuario.ZONA}
      />
    </div>
    <div>
    <div className="mb-3 p-3 float-left">
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
            //onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="fechaInicial"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Fecha Inicial:
          </label>
          <input
            type="date"
            placeholder="Ingrese Fecha Final de Recibo Correcta"
            id="fechaInicial"
            name="fechaInicial"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
           value={recibo.fechaInicial}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="fechaFinal"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Fecha Final:
          </label>
          <input
            type="date"
            placeholder="Ingrese Fecha Final de Recibo Correcta"
            id="fechaFinal"
            name="fechaFinal"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
           value={recibo.fechaFinal}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="cantidadPagos"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Cantidad Pagos:
          </label>
          <input
            type="text"
            placeholder="Ingrese Monto Correcto"
            id="cantidadPagos"
            name="cantidadPagos"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
           value={recibo.cantidadPagos}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3 float-left">
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
    </div>
    <div>
   
    
        <div className="mb-3 p-3 float-none">
         
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
    </div>
     </div>
     <div className="flex justify-center">
     <button
      onClick={handleSubmitId}
          type="button"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white 
             p-4 cursor-pointer hover:bg-blue-400 uppercase "
       
        >Buscar Datos Cliente</button>
            {!usuario.ID_CLIENTE ?(''):(<button
      
      type="submit"
      className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white 
       p-4  ml-2 cursor-pointer hover:bg-blue-400 uppercase ">Generar Recibo</button>)}
      
     </div>
   
       
      </form>
    </>
  );
};
export default FormularioRecibo;
