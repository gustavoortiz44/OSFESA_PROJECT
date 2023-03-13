import GenerarContrato from "../components/GenerarContrato"
import { useEffect} from "react";
import { useNavigate,Link } from "react-router-dom";
import { sweetAlertSesion } from "../../sweetalert2/Alerta";
import OSFESA from "../IMG/OSFESA.png";


const Contrato = () => {
  const navigate = useNavigate();


  useEffect(() => {
    const sesion = () => {
      const usuario = localStorage.getItem("usuarioId");
      if (!usuario) {
        navigate("/");
      } else {
       
        setTimeout(() => {
         
          sweetAlertSesion();
          localStorage.clear();
          navigate("/");
        }, 3000000);
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
       
      
      <div className="object-left-top">
      <Link to='/menu'>
        <img   src={OSFESA} className="w-25 h-14 " />
        </Link>
      </div>
      

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0 uppercase">
        Contrato:
      </h1>

      <div className="flex justify-center">
        <GenerarContrato/>
      </div>
    </>
  );
};
export default Contrato;