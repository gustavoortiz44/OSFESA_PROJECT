import FormularioLogin from "../components/FormularioLogin";
import OSFESA from "../IMG/OSFESA.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="object-left-top">
        <img src={OSFESA} className="w-35 h-28 " />
      </div>

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0">
        Iniciar Sesion2024-NoPRD
      </h1>

      <div className="flex justify-center">
        <FormularioLogin />
      </div>
      <Link
          to="/actualizarContraseña"
          className=" text-center  font-bold text-md text-black align-middle block
            mt-10 cursor-pointer uppercase  decoration-inherit"
        >
          Actualizar Contraseña
        </Link>
    </>
  );
};
export default Login;
