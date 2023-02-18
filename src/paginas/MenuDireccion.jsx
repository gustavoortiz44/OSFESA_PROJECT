import { sweetAlertSesion } from "../../sweetalert2/Alerta";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

import OSFESA from "../IMG/OSFESA.png";

const MenuDireccion = () => {
  const navigate = useNavigate();
  const usuarioNivel=localStorage.getItem("nivel")
  console.log(usuarioNivel)
  const [idProspecto, setIdProspecto]=useState([])
  useEffect(()=>{
   const consultarApi = async () => {
 
     const url = `${import.meta.env.VITE_BACKEND_URL}/obtenerIdProspecto.php`;
 
     const respuesta = await fetch(url);
     const relustado= await respuesta.json()
    setIdProspecto(relustado); 
   };
   consultarApi();
 
   localStorage.setItem("idProspecto",(idProspecto))
 
 },[idProspecto])
 
  useEffect(() => {
    const sesion = () => {
      const usuario = localStorage.getItem("usuarioId");
      if (!usuario) {
        navigate("/");
      } else {
        setTimeout(() => {
          sweetAlertSesion();
        }, 570000);

        setTimeout(() => {
          localStorage.clear();
          navigate("/");
        }, 600000);
      }
    };
    sesion();
  }, []);
  const cerrarSesion=()=>{
    localStorage.clear()
    navigate('/')
  }
  return (
    <>
    <header  >
        <div className="float-right ">  <button onClick={cerrarSesion}type="button" className="text-center text-gray-400     
            mt-0 mr-5 cursor-pointer uppercase font-serif text-sm  ">Cerrar Sesion</button>

      </div></header>
      
      <div className="object-left-top">
      <Link to='/menu'>
        <img   src={OSFESA} className="w-25 h-14 " />
        </Link>
      </div>

      <h1 className="text-center font-medium text-3xl font-serif mt-5 p-0 uppercase">
        MENU:
      </h1>
      {usuarioNivel==="direccion"?
      (<div className="flex justify-center mt-16 p-0">
      <div className="bg-white py-6 px-5 md:w-1/2 rounded-lg shadow-lg mt-0  shadow-zinc-300">
        <Link
          to="/generales"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle block 
          w-full p-3  cursor-pointer hover:bg-blue-400 uppercase "
        >
          Generales
        </Link>
        <Link
          to="/generarApartado"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle block 
          w-full p-3 mt-3  cursor-pointer hover:bg-blue-400 uppercase "
        >
          Generar Apartado
        </Link>
        <Link
          to="/recibo"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle block 
          w-full p-3 mt-3  cursor-pointer hover:bg-blue-400 uppercase "
        >
          Recibo
        </Link>
        <a
          href="https://grupoosfesa.com/index/REPORTE%20PAGOS%202023.xlsx"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle block 
          w-full p-3 mt-3  cursor-pointer hover:bg-blue-400 uppercase "
        >
          Reporte Admin
        </a>
        <a
          href="https://grupoosfesa.com/index/REPORTE%20PAGOS%202023.xlsx"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle block 
          w-full p-3 mt-3  cursor-pointer hover:bg-blue-400 uppercase "
        >
          Croquis
        </a>
        
        
       
       
      </div>
    </div>):
       (<div className="flex justify-center mt-16 p-0">
       <div className="bg-white py-6 px-5 md:w-1/2 rounded-lg shadow-lg mt-0  shadow-zinc-300">
         <Link
           to="/generales"
           className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle block 
           w-full p-3  cursor-pointer hover:bg-blue-400 uppercase "
         >
           Generales
         </Link>
         <Link
           to="/generarApartado"
           className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle block 
           w-full p-3 mt-3  cursor-pointer hover:bg-blue-400 uppercase "
         >
           Generar Apartado
         </Link>
         <Link
           to="/recibo"
           className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle block 
           w-full p-3 mt-3  cursor-pointer hover:bg-blue-400 uppercase "
         >
           Recibo
         </Link>
         <a
          href="https://grupoosfesa.com/index/REPORTE%20PAGOS%202023.xlsx"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle block 
          w-full p-3 mt-3  cursor-pointer hover:bg-blue-400 uppercase "
        >
          Croquis
        </a>

       
        
       </div>
     </div>)}
     

     
    </>
  );
};
export default MenuDireccion;
