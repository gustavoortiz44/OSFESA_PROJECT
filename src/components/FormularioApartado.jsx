
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  sweetAlertcatch,
   sweetAlert,
  sweetAlerApartado,

} from "../../sweetalert2/Alerta";




const FormularioApartado = () => {
  const newDate = new Date()
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const fecha=year+'-'+'0'+month+'-'+date
  
 
  const navigate=useNavigate()

  const  [idProspecto,setIdProspecto]=useState(localStorage.getItem("idProspecto"))
  const  [nombre,setNombre]=useState(localStorage.getItem('nombre'))
  const  [apellidoPaterno,setApellidoPaterno]=useState(localStorage.getItem('apellidoPaterno'))
  const  [apellidoMaterno,setApellidoMaterno]=useState(localStorage.getItem('apellidoMaterno'))
  const  [fechaApartado, setFechaApartado]=useState(fecha)
  const  [idProyecto, setIdProyecto]=useState('')
  const  [importe, setImporte]=useState('')
  const  [estatus, setEstatus]=useState('APARTADO')
  const [idLoteSFernando, setIdLoteSFernando] = useState('');
  const [idLoteSanFernado, setIdLoteSanFernando]=useState([])
  
  
 

  useEffect(() => {
    const consultarApi = async () => {

      const url = `${import.meta.env.VITE_BACKEND_URL}/obtenerIdLote.php`;

      const respuesta = await fetch(url);
      const relustado= await respuesta.json()
     

      setIdLoteSanFernando(relustado);
     


  
    };
    consultarApi();
  }, []);
 
    const handleSubmit = (e) => {
      e.preventDefault();
      if ([idProyecto,idLoteSFernando,importe].includes('')) {
       return  sweetAlerApartado();
      }
  
      fetch(`${import.meta.env.VITE_BACKEND_URL}/crearApartado.php`,{
        method:"POST",
        headers:{
          "Accept":"application/json",
          "Content-type":"application/json",
        },
        body:JSON.stringify({
          idProspecto:idProspecto,
          fecha:fechaApartado,
          idProyecto:idProyecto,
          idLote:idLoteSFernando,
          importe:importe,
          estatus:estatus
        }),
        mode:"no-cors"
       
        
  
      })
      .then((response) => {
      
          if (response.status == true) {
          
             response.json();
          
            
             
          
          }
          sweetAlert();
         setTimeout(() => {
          const respuesta=confirm('Deseas Agregar Mas Apartados Este Mismo Usuario')
          if(!respuesta){
           
              localStorage.removeItem("idProspecto")
              localStorage.removeItem("nombre")
              localStorage.removeItem("apellidoPaterno")
              localStorage.removeItem("apellidoMaterno")
               navigate('/generales')
          }}, 3000);
          }).catch(()=>{
          sweetAlertcatch()
        })};
  

  return (
    <>
    
      <form
       className="bg-white py-6 px-5 md:w-1/2 rounded-lg shadow-lg mt-0  shadow-zinc-300"
        onSubmit={handleSubmit}
      >    
       <div className=" mb-3 p-3">
          <label
            htmlFor="nombre"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Nombre:
          </label>
          <input
            type="text"
        
            id="nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={nombre}
           
    
     
          />
           <label
            htmlFor="apellidoPaterno"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Apellido Paterno:
          </label>
          <input
            type="text"
        
            id="apellidoPaterno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={apellidoPaterno}
           
    
     
          />
           <label
            htmlFor="apellidoMaterno"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Apellido Materno:
          </label>
          <input
            type="text"
        
            id="apellidoMaterno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={apellidoMaterno}
           
    
     
          />
          
          <label
            htmlFor="fechaFinal"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Fecha Apartado:
          </label>
          <input
            type="text"
            placeholder="Ingrese Fecha Final de Recibo Correcta"
            id="fechaFinal"
            name="fechaFinal"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={fechaApartado}
            //onChange={e=>setFechaApartado(e.target.value)}
          />
        </div>
         
     
        
        <div className="mb-3 p-3">
          <label
            htmlFor="idProyecto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            PROYECTO:
          </label>
          <select value={idProyecto} onChange={e=>setIdProyecto(e.target.value)} className='uppercase font-bolt
          shadow-md rounded-md'>
            <option value=''>--Selecciona el Proyecto Deseado--</option>
            <option>SAN FERNANDO</option>
            <option>SAN FRANCISCO</option>
            <option>SAN JOSE</option>
          </select>
          </div>
          <div className="mb-3 p-3">
          <label
            htmlFor="idProyecto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            LOTE San Fernando:
          </label>
          <select value={idLoteSFernando} onChange={e=>setIdLoteSFernando(e.target.value)} className='uppercase font-bolt
          shadow-md rounded-md'>
             <option value="">--Seleccione Lote--</option>
        {idLoteSanFernado.map(opcion=>(
            <option
             key={opcion.id_lote}
            value={opcion.id_lote}>
                
           {opcion.id_lote} </option>
        ))}
            </select>
     
          </div>
          <div className="mb-2 p-2">
          <label
            htmlFor="importw"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Importe $:
          </label>
          <input
            type="text"
            placeholder="Ingrese Importe Correcto"
            id="importe"
            className="border-2 w-full p-2 mt-0 placeholder-gray-500 rounded-md"
            value={importe}
            onChange={e=>setImporte(e.target.value)}
     
          />
          </div>
         
          <div className="mb-2 p-2">
          <label
            htmlFor="importw"
            className="text-gray-700 uppercase font-bold text-center"
          >
            ESTATUS:
          </label>
          <input
            type="text"
            placeholder="Ingrese Importe Correcto"
            id="importe"
            className="border-2 w-full p-2 mt-0 placeholder-gray-500 rounded-md"
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

     
    </>
  );
};
export default FormularioApartado;
