import {  sweetAlertSesion } from "../../sweetalert2/Alerta";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import OSFESA from "../IMG/OSFESA.png";

const Reporte_50_50 = () => {
  const navigate = useNavigate([]);
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const consultarApi = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/reporte5050.php`;

      const respuesta = await fetch(url);
      const relustado = await respuesta.json();

      setDatos(relustado);
    };
    consultarApi();
  }, []);

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
  const cerrarSesion = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <header>
        <div className="float-right ">
          <button
            onClick={cerrarSesion}
            type="button"
            className="text-center text-gray-400     
            mt-0 mr-5 cursor-pointer uppercase font-serif text-sm  "
          >
            Cerrar Sesion
          </button>

          <Link
            to="/menu"
            className="text-center text-gray-400     
            mt-0 mr-5 cursor-pointer uppercase font-serif text-sm  "
          >
            Menu
          </Link>
        </div>
      </header>

      <div className="object-left-top ">
        <Link to="/menu">
          <img src={OSFESA} className="w-25 h-14 " />
        </Link>
      </div>

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0 uppercase">
        Reporte 50/50:
      </h1>

      <div className="flex justify-center">
        <table className="bg-white    rounded-lg shadow-lg mt-0  shadow-zinc-300">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white "
              >
                Id_Lote:
              </th>
              <th
                scope="col"
                className="py-2 px-3   text-md bg-blue-400 text-center text-white"
              >
                Tipo_Pago:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Estatus:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Comentario:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Fecha_Contrato:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Fecha_Termino:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Monto_Total:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Nombre:
              </th>
              <th
                scope="col"
                className=" py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Telefono:
              </th>

              <th
                scope="col"
                className=" py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Lote:
              </th>
              <th
                scope="col"
                className=" py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Manzana:
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Zona:
              </th>
            </tr>
          </thead>

          <tbody>
            {datos.map((dato, index) => (
              <tr className="border-2 ">
                <td className="border-2 text-md text-center">{dato.ID_LOTE}</td>
                <td className="border-2 text-md text-center">{dato.TIPO_PAGO}</td>
                <td className="border-2 text-md text-center">{dato.ESTATUS}</td>
                <td className="border-2 text-md text-center">{dato.COMENTARIO}</td>
                <td className="border-2 text-md text-center">{dato.FECHA_CONTRATO}</td>
                <td className="border-2 text-md text-center">{dato.FECHA_TERMINO}</td>
                <td className="border-2 text-md text-center">{dato.MONTO_TOTAL}</td>
                <td className="border-2 text-md text-center">{dato.NOMBRE}</td>
                <td className="border-2 text-md text-center">{dato.TELEFONO}</td>
                <td className="border-2 text-md text-center ">{dato.LOTE}</td>
                <td className="border-2 text-md text-center">{dato.MANZANA}</td>
                <td className="border-2 text-md text-center">{dato.ZONA}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Reporte_50_50;
