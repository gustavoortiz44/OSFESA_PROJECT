import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  sweetAlertcatch,
  sweetAlertError,
  sweetAlert,
} from "../../sweetalert2/Alerta";

const FormularioGenerales = () => {
  const [idProspecto, setIdProspecto] = useState([]);
  useEffect(() => {
    const consultarApi = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/obtenerIdProspecto.php`;

      const respuesta = await fetch(url);
      const relustado = await respuesta.json();
      setIdProspecto(relustado);
    };
    consultarApi();

    localStorage.setItem("idProspecto", idProspecto);
  }, [idProspecto]);

  const [usuario, setUsuario] = useState({
    //idProspecto: "PR_" + localStorage.getItem("idProspecto"),
    idVendedor: localStorage.getItem("usuarioId"),
    nombre:"",
    apellidoPaterno: "",
    apellidoMaterno: "",
    nacionalidad: "",
    edad: "",
    estadoCivil: "",
    gradoEstudios: "",
    ocupacion: "",
    telefonoCel: "",

    calle: "",
    numeroInt: "",
    numeroExt: "",
    colonia: "",
    estado: "",
    municipio: "",
    beneficiario: "",
    estatus: "",
  });
  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  console.log();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
   if (Object.values(usuario).includes("")) {
      return sweetAlertError();
    } 
    
fetch(`${import.meta.env.VITE_BACKEND_URL}/crearGenerales.php`, {
  method: "POST",
  headers: {
    "Accept":"application/json",
    "Content-type":"application/json",
  },
  body: JSON.stringify({
    idProspecto:"PR_" + localStorage.getItem("idProspecto"),
    idVendedor: usuario.idVendedor,
    nombre: usuario.nombre,
    apellidoPaterno: usuario.apellidoPaterno,
    apellidoMaterno: usuario.apellidoMaterno,
    nacionalidad: usuario.nacionalidad,
    edad: usuario.edad,
    estadoCivil: usuario.estadoCivil,
    gradoEstudios: usuario.gradoEstudios,
    ocupacion: usuario.ocupacion,
    telefonoCel: usuario.telefonoCel,
    calle: usuario.calle,
    numeroInt: usuario.numeroInt,
    numeroExt: usuario.numeroExt,
    colonia: usuario.colonia,
    estado: usuario.estado,
    municipio: usuario.municipio,
    beneficiario: usuario.beneficiario,
    estatus: usuario.estatus,
  }),
  mode: "no-cors",
})
  .then((response) => {
    if (response.status == true) {
      response.json();
    } else if (usuario.estatus == "APARTADO") {
      localStorage.setItem("idProspecto", usuario.idProspecto);
      localStorage.setItem("nombre", usuario.nombre);
      localStorage.setItem("apellidoPaterno", usuario.apellidoPaterno);
      localStorage.setItem("apellidoMaterno", usuario.apellidoPaterno);
      setTimeout(() => {
        navigate(`/apartado/${usuario.idProspecto}`);
      }, 1000);
    }
    sweetAlert();
    setUsuario({
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      nacionalidad: "",
      edad: "",
      estadoCivil: "",
      gradoEstudios: "",
      ocupacion: "",
      telefonoCel: "",

      calle: "",
      numeroInt: "",
      numeroExt: "",
      colonia: "",
      estado: "",
      municipio: "",
      beneficiario: "",
      estatus: "",
    });
    setIdProspecto([])
  })
  .catch(() => {
    sweetAlertcatch();
  });
};

  return (
    <>
      <form
        className="bg-white py-6 px-5 md:w-2/2 rounded-lg shadow-lg mt-0 shadow-zinc-300"
        onSubmit={handleSubmit}
      >
        <div>
          <div className=" p-3 mb-3 ">
            <label
              htmlFor="idVendedor"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Id_Vendedor:
            </label>
            <input
              type="text"
              placeholder="Ingrese Id Vendedor Correcto"
              id="idVendedor"
              name="idVendedor"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.idVendedor}
            />
          </div>
          <div></div>
        </div>
        <div>
          <h3 className="text-center font-normal text-xl font-serif mt-0 p-3 uppercase">
            Ingrese los Datos del Cliente Prospecto:
          </h3>
          <div className=" p-3 mb-3 float-left">
            <label
              htmlFor="nombre"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Nombre:
            </label>
            <input
              type="text"
              placeholder="Ingrese Nombre Correcto"
              id="nombre"
              name="nombre"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.nombre.trimStart()}
              onChange={handleChange}
            />
          </div>
          <div className=" p-3 mb-3 float-left">
            <label
              htmlFor="apellidoPaterno"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Apellido Paterno:
            </label>
            <input
              type="text"
              placeholder="Ingrese Apellido Paterno Correcto"
              id="apellidoPaterno"
              name="apellidoPaterno"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.apellidoPaterno.trim()}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 p-3 float-left">
            <label
              htmlFor="apellidoMaterno"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Apellido Materno:
            </label>
            <input
              type="text"
              placeholder="Ingrese Apellido Materno Correcto"
              id="apellidoMaterno"
              name="apellidoMaterno"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.apellidoMaterno}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <div className="mb-3 p-3 float-left">
            <label
              htmlFor="nacionalidad"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Nacionalidad:
            </label>
            <input
              type="text"
              placeholder="Ingrese Nacionalidad Correctamente"
              id="nacionalidad"
              name="nacionalidad"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.nacionalidad}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 p-3 float-left">
            <label
              htmlFor="edad"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Edad:
            </label>
            <input
              type="number"
              placeholder="Ingrese la Edad Correcta"
              id="edad"
              name="edad"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.edad}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div className="mb-3 p-3 float-left">
            <label
              htmlFor="estadoCivil"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Estado Civil:
            </label>
            <input
              type="text"
              placeholder="Ingrese Estado Civil Correcto"
              id="estadoCivil"
              name="estadoCivil"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.estadoCivil}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="mb-3 p-3 float-left">
            <label
              htmlFor="gradoEstudios"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Grado de Estudios:
            </label>
            <input
              type="text"
              placeholder="Ingrese Grado de Estudios Correcto"
              id="gradoEstudios"
              name="gradoEstudios"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.gradoEstudios}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 p-3  float-left">
            <label
              htmlFor="ocupacion"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Ocupacion:
            </label>
            <input
              type="text"
              placeholder="Ingrese Ocupacion Correcta"
              id="ocupacion"
              name="ocupacion"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.ocupacion}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 p-3  float-left">
            <label
              htmlFor="telefonoCel"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Telefono:
            </label>
            <input
              type="text"
              placeholder="Ingrese Telefono Celular Correcto"
              id="telefonoCel"
              name="telefonoCel"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.telefonoCel}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 p-3  float-left">
          <label
            htmlFor="calle"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Calle:
          </label>
          <input
            type="text"
            placeholder="Ingrese Calle Correcta"
            id="calle"
            name="calle"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={usuario.calle}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-3 p-3 float-left">
            <label
              htmlFor="numeroInt"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Numero Interior:
            </label>
            <input
              type="text"
              placeholder="Ingrese Numero Interior Correcto"
              id="numeroInt"
              name="numeroInt"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.numeroInt}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 p-3 float-left">
            <label
              htmlFor="numeroExt"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Numero Exterior:
            </label>
            <input
              type="text"
              placeholder="Ingrese Numero Exterior Correcto"
              id="numeroExt"
              name="numeroExt"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.numeroExt}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 p-3 float-left">
            <label
              htmlFor="colonia"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Colonia:
            </label>
            <input
              type="text"
              placeholder="Ingrese Colonia Correcta"
              id="colonia"
              name="colonia"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.colonia}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="estado"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Estado:
          </label>
          <input
            type="text"
            placeholder="Ingrese Estado Correcto"
            id="estado"
            name="estado"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={usuario.estado}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3 float-left">
          <label
            htmlFor="municipio"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Municipio:
          </label>
          <input
            type="text"
            placeholder="Ingrese Municipio Correcto"
            id="municipio"
            name="municipio"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={usuario.municipio}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-3 p-3 float-left">
            <label
              htmlFor="beneficiario"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Beneficiario:
            </label>
            <input
              type="text"
              placeholder="Ingrese Beneficiario Correcto"
              id="beneficiario"
              name="beneficiario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.beneficiario}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 p-3 float-left">
            <label
              htmlFor="estatus"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Estatus:
            </label>
            <select
              onChange={handleChange}
              value={usuario.estatus}
              id="estatus"
              name="estatus"
              className="uppercase font-bolt
          shadow-md rounded-md"
            >
              <option value="">--Seleccione Estatus--</option>
              <option>APARTADO</option>
              <option>PROSPECTO</option>
            </select>
          </div>
        </div>

        <input
          type="submit"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle
            w-full p-3  cursor-pointer hover:bg-blue-400 uppercase "
          value="Guardar Generales"
        />
      </form>
    </>
  );
};
export default FormularioGenerales;
