import { useState, useEffect } from "react";
import {
  sweetAlert,
  sweetAlertError,
  sweetAlertcatch,
  sweetAlerId,
} from "../../sweetalert2/Alerta";

const FormularioRecibo = () => {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const fecha = year + "-" + "0" + month + "-" + date;
  const [idRecibos, setIdRecibos] = useState([]);
  const [idContrato, setIdContrato] = useState("");
  const [usuario, setIdUsuario] = useState({});
  const [idLote, setIdLote] = useState([]);
  const [boton1, setBoton1] = useState(true);
 
  useEffect(() => {
    const consultarApi = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/obtenerIdRecibo.php`;

      const respuesta = await fetch(url);
      const relustado = await respuesta.json();
      setIdRecibos(relustado);
    };
    consultarApi();

    localStorage.setItem("idRecibo", idRecibos);
  }, [idRecibos]);
  const [recibo, setRecibo] = useState({
   // idRecibo:
   fechaRecibo:fecha,
    //fechaInicial:'',
    //fechaFinal:'',
    cantidadPagos: "",
    //monto:'',
    observaciones: "",
    //usuarioAutenticado:
    //usuarioCaptura:,
  });

  const handleSubmitId = (e) => {
    e.preventDefault();
    if ([idContrato, recibo.cantidadPagos].includes("")) {
      return sweetAlerId();
    }

    fetch(`${import.meta.env.VITE_BACKEND_URL}/crearReciboCHmod.php`, {
      method: "POST",
      headers: {
       "Accept":"application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        idContrato: idContrato,
        cantidadPagos: recibo.cantidadPagos,
      }),
      //mode:"no-cors"
    })
      .then((responseJson) => responseJson.json())
      .then((response) => {
        setIdUsuario(response);
      });
      fetch(`${import.meta.env.VITE_BACKEND_URL}/consultarLoteManzanaZonaCHmod.php`, {
        method: "POST",
        headers: {
          "Accept":"application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          idContrato: idContrato,
          
        }),
        //mode:"no-cors"
      })
        .then((responseJson) => responseJson.json())
        .then((response) => {
          setIdLote(response);

        
        })
        setBoton1(false)
       
        
      
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([idContrato, recibo.cantidadPagos].includes("")) {
      return sweetAlerId();
    }

    fetch(`${import.meta.env.VITE_BACKEND_URL}/generarRecibo.php`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        idRecibo:"RE_" + localStorage.getItem("idRecibo"),
        idContrato: idContrato,
        idProspecto: usuario.ID_PROSPECTO,
        idCliente: usuario.ID_CLIENTE,
        nombre: usuario.NOMBRE,
        apellidoPaterno: usuario.APELLIDO_PATERNO,
        apellidoMaterno: usuario.APELLIDO_MATERNO,
       fechaRecibo: recibo.fechaRecibo,
        fechaInicial: usuario.FECHA_INICIAL,
        fechaFinal: usuario.FECHA_PAGO,
        cantidadPagos: recibo.cantidadPagos,
        monto: usuario.TOTAL_A_PAGAR,
        observaciones: recibo.observaciones,
        usuarioAutenticado:  localStorage.getItem("usuarioId"),
        usuarioCaptura: localStorage.getItem("usuarioId"),
      }),
      mode: "no-cors",
    }).then((response) => {
      if (response.status == true) {
        response.json();
      }
      sweetAlert();
      setIdContrato("");
      setRecibo({
        fechaRecibo:fecha,
        fechaInicial: "",
        fechaFinal: "",
        cantidadPagos: "",
        monto: "",
        observaciones: "",
      });
      setIdUsuario({
        NOMBRE: "",
        APELLIDO_PATERNO: "",
        APELLIDO_MATERNO: "",
        LOTE: "",
        MANZANA: "",
        ZONA: "",
        FECHA_INICIAL: "",
        MONTO_PAGO_SEM: "",
        FECHA_PAGO: "",
        TOTAL_A_PAGAR: "",
      });
      setIdRecibos([]);
      setIdLote([])
      setBoton1(true)
    });
  };
  const handleChange = (e) => {
    setRecibo({
      ...recibo,
      [e.target.name]: e.target.value.trim().toUpperCase(),
    });
  };
 

  return (
    <>
      <form
        className="bg-white py-6 px-5 md:w-2/2 rounded-lg shadow-lg mt-0  shadow-zinc-300"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 p-2 float-left">
            <label
              htmlFor="idContrato"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Contrato:
            </label>
            <input
              type="text"
              placeholder="Ingrese Numero de Contrato"
              id="idContrato"
              className="border-2 w-80 p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={idContrato}
              onChange={(e) => setIdContrato(e.target.value)}
            />
          </div>
          <div className=" mb-2 p-2 float-left">
            <label
              htmlFor="cantidadPagos"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Cantidad Pagos:
            </label>
            <input
              type="number"
              placeholder="Ingrese Cantidad De Pagos Correcto"
              id="cantidadPagos"
              name="cantidadPagos"
              className="border-2 w-80 p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={recibo.cantidadPagos}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div div className="mb-2 p-2 float-left">
            <label
              htmlFor="nombre"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.NOMBRE}
              disabled
            />
          </div>
          <div className="mb-2 p-2 float-left">
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
              disabled
            />
          </div>
          <div className="mb-2 p-2 float-left">
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
              disabled
            />
          </div>
        </div>

        
        <div>
          <div className="mb-2 p-2 float-left">
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
              disabled
            />
          </div>
          <div className="mb-2 p-2 float-left">
            <label
              htmlFor="fechaInicial"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Fecha Inicial:
            </label>
            <input
              type="text"
              placeholder="Ingrese Fecha Final de Recibo Correcta"
              id="fechaInicial"
              name="fechaInicial"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.FECHA_INICIAL}
              disabled

            />
          </div>
          
          <div className="mb-2 p-2 float-left">
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
              value={usuario.FECHA_PAGO}
              disabled
            />
          </div>
        </div>
        <div>
          <div className="mb-2 p-2 float-left">
            <label
              htmlFor="monto"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Monto $:
            </label>
            <input
              type="number"
              placeholder="Ingrese Monto Correcto"
              id="monto"
              name="monto"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.TOTAL_A_PAGAR}
              disabled
            />
          </div>
          </div>
          
        <div>
          <div className="mb-2 p-2 mr-12 float-left">
          <label
            htmlFor="idProyecto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Lotes:
          </label>
          
             <option  value=""></option>
        {idLote.map(opcion=>(
            <option className="text-lef"
             key={opcion.LOTE}
            value={opcion.LOTE}>
                
           {opcion.LOTE } </option>
        ))}
          </div>
          <div className="mb-2 p-2 mr-12 float-left">
          <label
            htmlFor="idProyecto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Manzana:
          </label>
          
             <option  value=""></option>
        {idLote.map((opcion,index)=>(
            <option className="text-lef"
             key={index}
            value={opcion.MANZANA}>
                
           {opcion.MANZANA} </option>
        ))}
          </div>
          <div className="mb-2 p-2  float-left">
          <label
            htmlFor="idProyecto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Zona:
          </label>
          
             <option  value=""></option>
        {idLote.map((opcion,index)=>(
            <option className="text-lef"
             key={index}
            value={opcion.ZONA}>
                
           {opcion.ZONA} </option>
        ))}
          </div>
          
        </div>

          <div className="mb-2 p-2 float-none">
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
   
     
     

        <div className="flex justify-center">
          {
            boton1 && <button
            onClick={handleSubmitId}
            type="button"
            className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white 
             p-4 cursor-pointer hover:bg-blue-400 uppercase "
          >
            Buscar Datos Cliente2
          </button>
          }
          {!usuario.ID_CLIENTE ? (
            ""
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white 
              p-4  ml-2 cursor-pointer hover:bg-blue-400 uppercase "
            >
              Generar Recibo
            </button>
          )}
        </div>
      </form>
    </>
  );
};
export default FormularioRecibo;
