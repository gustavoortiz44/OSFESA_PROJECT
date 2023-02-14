import { sweetAlertSesion } from "../../sweetalert2/Alerta";
import FormularioApartado from "../components/FormularioApartado";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import OSFESA from "../IMG/OSFESA.png";

const Apartado = () => {
  const navigate=useNavigate()
  useEffect(() => {
    const sesion = () => {
      const usuario = localStorage.getItem("usuarioId");
      if (!usuario) {
        navigate("/login");
      } else {
        setTimeout(() => {
          sweetAlertSesion();
        },570000);

        setTimeout(() => {
          localStorage.clear();
          navigate("/login");
        },  600000);
      }
    };
    sesion();
  }, []);
  const cerrarSesion=()=>{
    localStorage.clear()
    navigate('/login')
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
     
      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0 uppercase">
        Apartado
      </h1>

      <div className="flex justify-center">
        <FormularioApartado />
      </div>
    </>
  );
};
export default Apartado;
