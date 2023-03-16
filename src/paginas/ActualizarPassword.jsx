import FormularioActualizarContraseña from "../components/FormularioActualizarPassword";
import OSFESA from "../IMG/OSFESA.png";

const ActualizarContraseña = () => {
  return (
    <>
      <div className="object-left-top">
        <img src={OSFESA} className="w-35 h-28 " />
      </div>

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0">
       Actualizar Contraseña
      </h1>

      <div className="flex justify-center">
        <FormularioActualizarContraseña />
      </div>
    </>
  );
};
export default ActualizarContraseña;
