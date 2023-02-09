import OSFESA from "../IMG/OSFESA.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  sweetAlertcatch,
  sweetAlertError,

  sweetAlert
} from "../../sweetalert2/Alerta";


const Apartado = () => {
  const {id_prospecto}=useParams()

  const  [idProspecto,setIdProspecto]=useState(id_prospecto)
  const  [idProyecto, setIdProyecto]=useState('')
  const  [importe, setImporte]=useState('')
  const  [estatus,setEstatus]=useState('APARTADO')
  const [idLote, setIdLote] = useState('');
  const [opciones, setOpciones]=useState([])
  

  useEffect(() => {
    const consultarApi = async () => {

      const url = `${import.meta.env.VITE_BACKEND_URL}/obtenerIdLote.php`;

      const respuesta = await fetch(url);
      const relustado= await respuesta.json()
      console.log(relustado)

      setOpciones(respuesta);

  
    };
    consultarApi();
  }, []);


    const handleSubmit = (e) => {
      e.preventDefault();
      if ([idProyecto,importe,estatus].includes('')) {
       return  sweetAlertError();
      }
  
      fetch(`${import.meta.env.VITE_BACKEND_URL}/crearApartado.php`,{
        method:"POST",
        headers:{
          "Accept":"application/json",
          "Content-type":"application/json",
        },
        body:JSON.stringify({
         idProspecto:idProspecto,
         idProyecto:idProyecto,
         importe:importe,
         estatus:estatus
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
      <div className="object-left-top">
        <img src={OSFESA} className="w-25 h-28 " />
      </div>

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0 uppercase">
        APARTADO
      </h1>

      <div className="flex justify-center ">
      <form
        className="bg-white py-6 px-5 md:w-1/2 rounded-lg shadow-lg mt-0  shadow-zinc-300"
        onSubmit={handleSubmit}
      >    
       <div className=" mb-3 p-3">
          <label
            htmlFor="idProspecto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Id_Prospecto:
          </label>
          <input
            type="text"
            placeholder="Ingrese Id Vendedor Correctamente"
            id="idProspecto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={idProspecto}
            onChange={e=>setIdProspecto(e.target.value)}
     
          />
         
        </div>
        
        <div className="mb-3 p-3">
          <label
            htmlFor="idProyecto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            ID_PROYECTO:
          </label>
          <select value={idProyecto} onChange={e=>setIdProyecto(e.target.value)} className='uppercase font-bolt
          shadow-md rounded-md'>
            <option value=''>--Selecciona el Proyecto Deseado--</option>
            <option>SAN FERNANDO</option>
            <option>SAN FRANCISCO DE LOS VIVEROS</option>
          </select>
          </div>
          <div className="mb-3 p-3">
          <label
            htmlFor="idProyecto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            ID_LOTE:
          </label>
          <select value={idLote} onChange={e=>setIdLote(e.target.value)} className='uppercase font-bolt
          shadow-md rounded-md'>
             <option value="">--Seleccione Lote--</option>
        {opciones.map(opcion=>(
            <option
             key={opcion.idlote}
            value={opcion.id_lote}>
                
           {opcion.id_lote} </option>
        ))}
            
          </select>
          </div>
          <div className="mb-3 p-3">
          <label
            htmlFor="importw"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Importe:
          </label>
          <input
            type="text"
            placeholder="Ingrese Id Vendedor Correctamente"
            id="importe"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={importe}
            onChange={e=>setImporte(e.target.value)}
     
          />
          </div>
          <div className="mb-3 p-3">
          <label
            htmlFor="importw"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Status:
          </label>
          <input
            type="text"
            placeholder="Ingrese Id Vendedor Correctamente"
            id="importe"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={estatus}
            onChange={e=>setEstatus(e.target.value)}
     
          />
          </div>
          <input
          type="submit"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle
            w-full p-3  cursor-pointer hover:bg-blue-400 uppercase "
          value="Generar Apartado"
        />
           
        </form>
      </div>
     
    </>
  );
};
export default Apartado;
