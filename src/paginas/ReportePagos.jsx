import { sweetAlertSesion } from "../../sweetalert2/Alerta";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import OSFESA from "../IMG/OSFESA.png";

const ReportePagos= () => {
  const navigate = useNavigate([]);
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const consultarApi = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/reportePagos.php`;

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
        Reporte Pagos:
      </h1>

      <div className="flex justify-center">
        <table className="bg-white rounded-lg shadow-lg mt-0  shadow-zinc-300">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white "
              >
                Porcentaje:
              </th>
              <th
                scope="col"
                className="py-2 px-3   text-md bg-blue-400 text-center text-white"
              >
                Pagos:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Lleva:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Ultimo_Pago:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Fecha_Pagada:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Primer_Lunes:
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
                Zona:
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
                Lote:
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Id_Lote:
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Id_Contrato:
              </th>
            </tr>
          </thead>

          <tbody>
            {datos.map((dato, index) => (
              <tr className="border-2 ">
                <td className="border-2 text-md text-center">{dato.PORCENTAJE}</td>
                <td className="border-2 text-md text-center">{dato.PAGOS}</td>
                <td className="border-2 text-md text-center">{dato.LLEVA}</td>
                <td className="border-2 text-md text-center">{dato.ULTIMO_PAGO}</td>
                <td className="border-2 text-md text-center">{dato.FECHA_PAGADA}</td>
                <td className="border-2 text-md text-center">{dato.PRIMER_LUNES}</td>
                <td className="border-2 text-md text-center">{dato.NOMBRE}</td>
                <td className="border-2 text-md text-center">{dato.TELEFONO}</td>
                <td className="border-2 text-md text-center">{dato.ZONA}</td>
                <td className="border-2 text-md text-center">{dato.MANZANA}</td>
                <td className="border-2 text-md text-center">{dato.LOTE}</td>
                <td className="border-2 text-md text-center">{dato.ID_LOTE}</td>
                <td className="border-2 text-md text-center">{dato.ID_CONTRATO}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ReportePagos;
