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
        }, 2000);

        setTimeout(() => {
          localStorage.clear();
          navigate("/login");
        }, 3000);
      }
    };
    sesion();
  }, []);
  return (
    <>
      <div className="object-left-top">
        <img src={OSFESA} className="w-25 h-28 " />
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
