import FormularioGenerales from "../components/FormularioGenerales";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { sweetAlertSesion } from "../../sweetalert2/Alerta";
import OSFESA from "../IMG/OSFESA.png";


const Generales = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sesion = () => {
      const usuarioId = localStorage.getItem("usuarioId");
      if (!usuarioId) {
        navigate("/");
      } else {
        setTimeout(() => {
          sweetAlertSesion();
        }, 57000000);

        setTimeout(() => {
          localStorage.clear();
          navigate("/");
        }, 60000000);
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
    <div className="float-right ">
        <button onClick={cerrarSesion}type="button" className="text-center text-gray-400     
            mt-0 p- cursor-pointer uppercase font-serif text-sm py-4 ">Cerrar Sesion</button>
      </div>

      <div className="object-left-top">
        <img src={OSFESA} className="w-25 h-14 " />
      </div>
      
      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0 uppercase">
        Generales
      </h1>

      <div className="flex justify-center">
        <FormularioGenerales 
        
         />
      </div>
    </>
  );
};
export default Generales;
