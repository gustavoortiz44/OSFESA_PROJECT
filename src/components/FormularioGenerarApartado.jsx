import React, { useEffect, useState } from "react";

import {
  sweetAlerCLienteNoEncontrado,
  sweetAlerGenerarApartado,
  sweetAlertcatch,sweetAlert
} from "../../sweetalert2/Alerta";

const FormularioGenerarApartado = () => {
  const newDate = new Date()
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const fecha=year+'-'+'0'+month+'-'+date
 

  const [usuarioProspecto, setUsuarioProspecto] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
  });
  const [fechaApartado, setFechaApartado] = useState(fecha);
  const [idProyecto, setIdProyecto] = useState("");
  const [importe, setImporte] = useState("");
  const [estatus, setEstatus] = useState("APARTADO");
  const [idLoteSFernando, setIdLoteSFernando] = useState("");
  const [idLoteSanFernado, setIdLoteSanFernando] = useState([]);
  const [usuario, setUsuario] = useState({});
  
  useEffect(() => {
    const consultarApi = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/obtenerIdLote.php`;

      const respuesta = await fetch(url);
      const relustado = await respuesta.json();

      setIdLoteSanFernando(relustado);
    };
    consultarApi();
  }, []);

  const handleSubmitConsultar = (e) => {
    e.preventDefault();
    if (
      [usuarioProspecto.nombre, usuarioProspecto.apellidoPaterno].includes("")
    ) {
      return sweetAlerGenerarApartado();
    }
    fetch(`${import.meta.env.VITE_BACKEND_URL}/generarApartado.php`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: usuarioProspecto.nombre,
        apellidoPaterno: usuarioProspecto.apellidoPaterno,
        apellidoMaterno: usuarioProspecto.apellidoMaterno,
      }),
      //mode:"no-cors"
    })
      .then((responseJson) => responseJson.json())

      .then((response) => {
        setUsuario(response);

        
      })
      .catch(() => {
        sweetAlerCLienteNoEncontrado();
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([idProyecto, idLoteSFernando, importe].includes("")) {
      return sweetAlerApartado();
    }

    fetch(`${import.meta.env.VITE_BACKEND_URL}/crearApartado.php`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        idProspecto: usuario.id_prospecto,
        fecha: fechaApartado,
        idProyecto: idProyecto,
        idLote: idLoteSFernando,
        importe: importe,
        estatus: estatus,
      }),
      mode: "no-cors",
    })
      .then((response) => {
        if (response.status == true) {
          response.json();
        }
        sweetAlert();
        setTimeout(() => {
          const respuesta=confirm('Deseas Agregar Mas Apartados Este Mismo Usuario')
          if(!respuesta){
            setUsuarioProspecto({
              nombre: "",
              apellidoPaterno: "",
              apellidoMaterno: "",
            });
            setUsuario({
              id_prospecto:'',
              estatus:''
            })
            setFechaApartado("");
            setImporte("");
            setImporte("");
          
          }},2000);
        
      })
      .catch(() => {
        sweetAlertcatch();
      });
  };

  const handleChange = (e) => {
    setUsuarioProspecto({
      ...usuarioProspecto,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form
        className="bg-white py-6 px-5 md:w-2/2 rounded-lg shadow-lg mt-0  shadow-zinc-300"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 p-3">
          <label
            htmlFor="nombre"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Nombre Usuario Prospecto:
          </label>
          <input
            type="nombre"
            placeholder="Ingrese Nombre  Correcto"
            id="nombre"
            name="nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={usuarioProspecto.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3">
          <label
            htmlFor="apellidoPaterno"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Apellido Paterno:
          </label>
          <input
            type="text"
            placeholder="Ingrese Apellido Materno Correcto"
            id="apellidoPaterno"
            name="apellidoPaterno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={usuarioProspecto.apellidoPaterno}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3">
          <label
            htmlFor="apellidoPaterno"
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
            value={usuarioProspecto.apellidoMaterno}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 p-3">
          <label
            htmlFor="apellidoPaterno"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Id Cliente:
          </label>
          <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={usuario.id_prospecto}
          />
        </div>
        <div className="mb-3 p-3">
          <label
            htmlFor="apellidoPaterno"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Estatus Cliente:
          </label>
          <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={usuario.estatus}
          />
        </div>
        <div>
          {!usuario.id_prospecto ? (
            ""
          ) : (
            <>
              <div className="mb-3 p-3">
                <label
                  htmlFor="fechaFinal"
                  className="text-gray-700 uppercase font-bold text-center"
                >
                  Fecha Apartado:
                </label>
                <input
                  type="text"
                  placeholder="Ingrese Fecha Final de Recibo Correcta"
                  id="fechaFinal"
                  name="fechaFinal"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
                  value={fechaApartado}
                  //onChange={(e) => setFechaApartado(e.target.value)}
                />
              </div>

              <div className="mb-3 p-3">
                <label
                  htmlFor="idProyecto"
                  className="text-gray-700 uppercase font-bold text-center"
                >
                  PROYECTO:
                </label>
                <select
                  value={idProyecto}
                  onChange={(e) => setIdProyecto(e.target.value)}
                  className="uppercase font-bolt
         shadow-md rounded-md"
                >
                  <option value="">--Selecciona el Proyecto Deseado--</option>
                  <option>SAN FERNANDO</option>
                  <option>SAN FRANCISCO</option>
                  <option>SAN JOSE</option>
                </select>
              </div>
              <div className="mb-3 p-3">
                <label
                  htmlFor="idProyecto"
                  className="text-gray-700 uppercase font-bold text-center"
                >
                  LOTE San Fernando:
                </label>
                <select
                  value={idLoteSFernando}
                  onChange={(e) => setIdLoteSFernando(e.target.value)}
                  className="uppercase font-bolt
         shadow-md rounded-md"
                >
                  <option value="">--Seleccione Lote--</option>
                  {idLoteSanFernado.map((opcion) => (
                    <option key={opcion.id_lote} value={opcion.id_lote}>
                      {opcion.id_lote}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-2 p-2">
                <label
                  htmlFor="importw"
                  className="text-gray-700 uppercase font-bold text-center"
                >
                  Importe $:
                </label>
                <input
                  type="text"
                  placeholder="Ingrese Importe Correcto"
                  id="importe"
                  className="border-2 w-full p-2 mt-0 placeholder-gray-500 rounded-md"
                  value={importe}
                  onChange={(e) => setImporte(e.target.value)}
                />
              </div>

              <div className="mb-2 p-2">
                <label
                  htmlFor="importw"
                  className="text-gray-700 uppercase font-bold text-center"
                >
                  ESTATUS:
                </label>
                <input
                  type="text"
                  placeholder="Ingrese Importe Correcto"
                  id="importe"
                  className="border-2 w-full p-2 mt-0 placeholder-gray-500 rounded-md"
                  value={estatus}
                  onChange={(e) => setEstatus(e.target.value)}
                />
              </div>
            </>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmitConsultar}
            type="button"
            className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white 
             p-4 cursor-pointer hover:bg-blue-400 uppercase "
          >
            Buscar Datos Cliente
          </button>
          {!usuario.id_prospecto ? (
            ""
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white 
       p-4  ml-2 cursor-pointer hover:bg-blue-400 uppercase "
            >
              Generar Apartado
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default FormularioGenerarApartado;
