import OSFESA from "../IMG/OSFESA.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Apartado = () => {
  const [idUsuarioProspecto, setIdUsuarioProspecto] = useState({});
  
  const {id}=useParams()

  useEffect(() => {
    const consultarApi = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/obtenerIdProspecto.php`;

      const respuesta = await fetch(url);
      const relustado= await respuesta.json()
      console.log(relustado)

      setIdUsuarioProspecto(respuesta);

  
    };
    consultarApi();
  }, []);

  return (
    <>
      <div className="object-left-top">
        <img src={OSFESA} className="w-25 h-28 " />
      </div>

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0 uppercase">
        APARTADO
      </h1>

      <div className="flex justify-center ">
        <div className="mx-4 my-8  bg-white shadow-lg px-28  py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700 uppercase text-2xl">
            Id Vendedor: {""}
            <span className="font-normal normal-case ">{id}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase text-2xl">
            Id Prospecto: {""}
            <span className="font-normal normal-case ">{idUsuarioProspecto.id_prospecto}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase text-2xl">
            Fecha de Apartado: {""}
            <span className="font-normal normal-case ">21/01/2023</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase  text-2xl ">
            Id Proyecto{"(s)"}: {""}
            <span className="font-normal normal-case">SF-M1-L1</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase  text-2xl">
            Id Lote{"(s)"}: {""}
            <span className="font-normal normal-case">L1-M2</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase text-2xl">
            Importe: {""}
            <span className="font-normal normal-case ">$300</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Apartado;
