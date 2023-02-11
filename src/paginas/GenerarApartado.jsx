import FormularioGenerarApartado from "../components/FormularioGenerarApartado";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { sweetAlertSesion } from "../../sweetalert2/Alerta";
import OSFESA from "../IMG/OSFESA.png";


const GenerarApartado = () => {
  const navigate = useNavigate();
  useEffect(()=>{

  },[])

  useEffect(() => {
    const sesion = () => {
      const usuario = localStorage.getItem("usuarioId");
      if (!usuario) {
        navigate("/login");
      } else {
        setTimeout(() => {
          sweetAlertSesion();
        }, 1400000);

        setTimeout(() => {
          localStorage.clear();
          navigate("/login");
        }, 1500000);
      }
    };
    sesion();
  }, []);

  return (
    <>
      <div className="object-left-top">
        <img src={OSFESA} className="w-25 h-14 " />
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
