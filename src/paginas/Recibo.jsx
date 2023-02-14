import FormularioRecibo from "../components/FormularioRecibo";
import { sweetAlertSesion } from "../../sweetalert2/Alerta";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OSFESA from "../IMG/OSFESA.png";

const Recibo = () => {
  const navigate=useNavigate()
  useEffect(() => {
    const sesion = () => {
      const usuario = localStorage.getItem("usuarioId");
      if (!usuario) {
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
     <div className="float-right mt-0 ">
        <button onClick={cerrarSesion}type="button" className="text-center text-gray-400     
            mt-0  cursor-pointer uppercase font-serif text-sm py-4 ">Cerrar Sesion</button>
      </div>
      <div className="object-left-top">
        <img src={OSFESA} className="w-25 h-14 " />
      </div>
      <div className="float-right mt-0 ">
        <button onClick={cerrarSesion}type="button" className="text-center text-gray-400     
            mt-0  cursor-pointer uppercase font-serif text-sm py-4 ">Cerrar Sesion</button>
      </div>

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0 uppercase">
        Recibo Pago:
      </h1>

      <div className="flex justify-center">
        <FormularioRecibo />
      </div>
    </>
  );
};
export default Recibo;
