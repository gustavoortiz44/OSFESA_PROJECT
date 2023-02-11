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
        Recibo Pago:
      </h1>

      <div className="flex justify-center">
        <FormularioRecibo />
      </div>
    </>
  );
};
export default Recibo;
