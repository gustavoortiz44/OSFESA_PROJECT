import { sweetAlertSesion } from "../../sweetalert2/Alerta";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import OSFESA from "../IMG/OSFESA.png";

const EstatusLote= () => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const consultarApi = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/estatusLote.php`;

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
        Estatus Lotes:
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
                className="py-2 px-3  text-md bg-blue-400 text-center text-white "
              >
                Lote:
              </th>
              <th
                scope="col"
                className="py-2 px-3   text-md bg-blue-400 text-center text-white"
              >
                Id_Proyecto:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Proyecto:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Id_Zona:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Zona:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Id_Manzana:
              </th>
              <th
                scope="col"
                className="py-2 px-3  text-md bg-blue-400 text-center text-white"
              >
                Manzana:
              </th>
            
              <th
                scope="col"
                className=" py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Dimension:
              </th>

              <th
                scope="col"
                className=" py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Precio:
              </th>
              <th
                scope="col"
                className=" py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Precio_Venta:
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Estatus:
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Comentario:
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Colindancia_Norte:
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Colindancia_Sur:
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Colindancia_Oriente:
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-md bg-blue-400 text-center text-white"
              >
                Colindancia_Poniente:
              </th>
            </tr>
          </thead>

          <tbody>
            {datos.map((dato, index) => (
              <tr className="border-2 ">
                <td className="border-2 text-md text-center">{dato.ID_LOTE}</td>
                <td className="border-2 text-md text-center">{dato.LOTE}</td>
                <td className="border-2 text-md text-center">{dato.ID_PROYECTO}</td>
                <td className="border-2 text-md text-center">{dato.PROYECTO}</td>
                <td className="border-2 text-md text-center">{dato.ID_ZONA}</td>
                <td className="border-2 text-md text-center">{dato.ZONA}</td>
                <td className="border-2 text-md text-center">{dato.ID_MANZANA}</td>
                <td className="border-2 text-md text-center">{dato.MANZANA}</td>
                <td className="border-2 text-md text-center">{dato.DIMENSION}</td>
                <td className="border-2 text-md text-center">{dato.PRECIO}</td>
                <td className="border-2 text-md text-center">{dato.PRECIO_VENTA}</td>
                <td className="border-2 text-md text-center">{dato.ESTATUS}</td>
                <td className="border-2 text-md text-center">{dato.COMENTARIO}</td>
                <td className="border-2 text-md text-center">{dato.COLINDANCIA_NORTE}</td>
                <td className="border-2 text-md text-center">{dato.COLINDANCIA_SUR}</td>
                <td className="border-2 text-md text-center">{dato.COLINDANCIA_ORIENTE}</td>
                <td className="border-2 text-md text-center">{dato.COLINDANCIA_PONIENTE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default EstatusLote;
