import FormularioGenerales from "../components/FormularioGenerales";

import OSFESA from "../IMG/OSFESA.png";

const Login = () => {
  return (
    <>
      <div className="object-left-top">
        <img src={OSFESA} className="w-25 h-14 " />
      </div>

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0 uppercase">
    Generales
      </h1>

      <div className="flex justify-center">
        <FormularioGenerales />
      </div>
    </>
  );
};
export default Login;
