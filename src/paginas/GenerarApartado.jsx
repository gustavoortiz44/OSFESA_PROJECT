import FormularioGenerarApartado from "../components/FormularioGenerarApartado";
import { useEffect} from "react";
import { useNavigate,Link } from "react-router-dom";
import { sweetAlertSesion } from "../../sweetalert2/Alerta";
import OSFESA from "../IMG/OSFESA.png";


const GenerarApartado = () => {
  const navigate = useNavigate();


  useEffect(() => {
    const sesion = () => {
      const usuario = localStorage.getItem("usuarioId");
      if (!usuario) {
        navigate("/");
      } else {
        setTimeout(() => {
          sweetAlertSesion();
        },600000);

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


        <Link  to='/menu' className="text-center text-gray-400     
            mt-0 mr-5 cursor-pointer uppercase font-serif text-sm  ">Menu</Link>
      </div></header>
      
      <div className="object-left-top">
      <Link to='/menu'>
        <img   src={OSFESA} className="w-25 h-14 " />
        </Link>
      </div>
      

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0 uppercase">
        Generar Apartado:
      </h1>

      <div className="flex justify-center">
        <FormularioGenerarApartado/>
      </div>
    </>
  );
};
export default GenerarApartado;
