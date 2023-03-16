import GenerarContrato from "../components/GenerarContrato"
import { useEffect,useState} from "react";
import { useNavigate,Link } from "react-router-dom";
import { sweetAlertSesion } from "../../sweetalert2/Alerta";
import OSFESA from "../IMG/OSFESA.png";
import GeneralesTabla from "./GeneralesTabla";


const Contrato = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellidoPaterno: "",
  });
  const [dato, setDato] = useState({});

  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [cantidadTotal, setCantidadTotal] = useState("");
  const [cantidadPago, setCantidadPago] = useState("");
  const [numeroSemanas, setNumeroSemanas] = useState("");
  const [fecha, setFecha] = useState("");

  const [cantidadLotes, setCantidadLotes] = useState([]);
  const [zona, setZona] = useState([]);
  const [manzana, setManzana] = useState([]);
  const [superficie, setSuperficie] = useState([]);
  const [boton, setBoton] = useState(true);
  const [botonCrear, setBotonCrear] = useState(false);
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const fechaActual = year + "-" + "0" + month + "-" + date;
  const navigate = useNavigate();


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
  const cerrarSesion=()=>{
    localStorage.clear()
    navigate('/')
  }
   /*const handleConsultar = () => {
    if (Object.values(usuario).includes("")) {
      return sweetAlerGenerarApartado();
    }
    fetch(`${import.meta.env.VITE_BACKEND_URL}/buscarDatosContrato.php`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: usuario.nombre,
        apellidoPaterno: usuario.apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
      }),
      //mode:"no-cors"
    })
      .then((responseJson) => responseJson.json())

      .then((response) => {
        setDatos(response);
        console.log(datos);
      })
      .catch(() => {
        sweetAlerCLienteNoEncontrado();
        setBoton(true)
        setBotonCrear(false)
        setUsuario({
          nombre: "",
          apellidoPaterno: "",

        })
        setApellidoMaterno('')
      });
    fetch(`${import.meta.env.VITE_BACKEND_URL}/generarLotes.php`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: usuario.nombre,
        apellidoPaterno: usuario.apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
      }),
      //mode:"no-cors"
    })
      .then((responseJson) => responseJson.json())

      .then((response) => {
        setCantidadLotes(response);
      });
    fetch(`${import.meta.env.VITE_BACKEND_URL}/obtenerZonaContrato.php`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-type":"application/json",
      },
      body: JSON.stringify({
        nombre: usuario.nombre,
        apellidoPaterno: usuario.apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
      }),
      //mode:"no-cors"
    })
      .then((responseJson) => responseJson.json())

      .then((response) => {
        setZona(response);
       
      });
      
      
      fetch(`${import.meta.env.VITE_BACKEND_URL}/obtenerSuperficie.php`, {
        method: "POST",
        headers: {
          "Accept":"application/json",
          "Content-type":"application/json",
        },
        body: JSON.stringify({
          nombre: usuario.nombre,
          apellidoPaterno: usuario.apellidoPaterno,
          apellidoMaterno: apellidoMaterno,
        }),
        //mode:"no-cors"
      })
        .then((responseJson) => responseJson.json())
  
        .then((response) => {
          setSuperficie(response);
         
        });
        
        
        fetch(`${import.meta.env.VITE_BACKEND_URL}/obtenerManzanaContrato.php`, {
          method: "POST",
          headers: {
            "Accept":"application/json",
            "Content-type":"application/json",
          },
          body: JSON.stringify({
            nombre: usuario.nombre,
            apellidoPaterno: usuario.apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
          }),
          //mode:"no-cors"
        })
          .then((responseJson) => responseJson.json())
    
          .then((response) => {
            setManzana(response);
           
          });
          
          setBoton(false)
          setBotonCrear(true)
        
  };*/
  
 /* const handleCrearContrato=()=>{
    setBotonCrear(false)
   setTimeout(()=>{
    window.print()


   },1000)
  }*/
  const handleChangeUsuario = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value.trim().toUpperCase(),
    });
  };
  return (
    <>
      <header >
        <div className="float-right ">
          <button
            onClick={cerrarSesion}
            type="button"
            className="text-center text-gray-400     
            mt-0 mr-5  cursor-pointer uppercase font-serif text-sm  "
          >
            Cerrar Sesion
          </button>

          <Link
            to="/menu"
            className="text-center text-gray-400     
            mt-0 mr-5 cursor-pointer uppercase font- text-sm  "
          >
            Menu
          </Link>
        </div>
      </header>
       
      
      <div className="object-left-top">
      <Link to='/menu'>
        <img   src={OSFESA} className="w-25 h-14 " />
        </Link>
      </div>
      

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0 uppercase">
        Contrato:
      </h1>  
      <form  className=" md:w-2/2"
   // onSubmit={handleSubmit}
  > 
    <div className="ml-4 mr-4 mb-3 p-3 float-left">
      <label
        htmlFor="nombre"
        className="text-gray-700 uppercase font-bold text-center"
      >
        Nombre:
      </label>
      <input
        type="text"
        placeholder="Nombre"
        id="nombre"
        name="nombre"
        className="border-2 w-80 p-2 mt-2 placeholder-gray-500 rounded-md uppercase  "
        value={usuario.nombre}
        onChange={handleChangeUsuario}
        
      />
    </div>
   
          <div className="ml-4 mr-4 mb-2 p-2 float-left ">
            <label
              htmlFor="apellidoPaterno"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Apellido Paterno:
            </label>
            <input
              type="text"
              placeholder="Apellido Paterno"
              id="apellidoPaterno"
              name="apellidoPaterno"
              className="border-2 w-80 p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
              value={usuario.apellidoPaterno}
              onChange={handleChangeUsuario}
            />
          </div>
          <div className="ml-4 mb-2 p-2 float-left">
            <label
              htmlFor="apellidoMaterno"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Apellido Materno:
            </label>
            <input
              type="text"
              placeholder="Apellido Materno"
              id="apellidoMaterno"
              name="apellidoMaterno"
              className="border-2 w-80 p-2 mt-2 placeholder-gray-500 rounded-md uppercase "
              value={apellidoMaterno}
              onChange={e=>setApellidoMaterno(e.target.value.trim().toUpperCase())}
            />
          </div>
          <div>
          <div className=" mb-2 p-2 float-left">
            <label
              htmlFor="cantidadTotal"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Cantidad Total:
            </label>
            <input
              type="text"
              placeholder="Apellido Materno"
              id="cantidadTotal"
              name="cantidadTotal"
              className="border-2 w-80 p-2 mt-2 placeholder-gray-500 rounded-md uppercase "
              value={cantidadTotal}
              onChange={e=>setCantidadTotal(e.target.value.trim().toUpperCase())}
            />
          </div>
         
          </div>
          <div className="mb-2 p-2 float-left">
            <label
              htmlFor="cantidadPagos"
              className="text-gray-700 uppercase font-bold text-center"
            >
              Cantidad Pagos:
            </label>
            <input
              type="text"
              placeholder="Apellido Materno"
              id="cantidadPagos"
              name="cantidadPagos"
              className="border-2 w-80 p-2 mt-2 placeholder-gray-500 rounded-md uppercase "
              value={cantidadPago}
              onChange={e=>setCantidadPago(e.target.value.trim())}
            />
          </div>
          
          <div className="float-left">
        {boton &&
         <button
         //onClick={handleConsultar}
         type="button"
         className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white 
          p-2 mt-3 cursor-pointer hover:bg-blue-400 uppercase"
       >
         Buscar Datos Cliente
       </button>
        }
       
       {botonCrear &&  
       <button
            type="button"
            className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white 
            p-2 mt-3  ml-2 cursor-pointer hover:bg-blue-400 uppercase "
            //onClick={handleCrearContrato} 
          >
            Generar Contrato
          </button>}
      </div>
      </form> 
   

      <div className="mr-10 ml-10">
      <table className="bg-white px-10 py-10 rounded-lg shadow-lg ">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr >
        <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Id_Prospecto:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Id_Vendedor:
          </th>
        <th scope="col" className=" py-2 px-3 text-md bg-blue-400 text-center text-white">
           Nombre:
          </th>
        <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Apellido Paterno:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Apellido Materno:
          </th>
         
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Nacionalidad:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Edad:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Estado Civil:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Grado De Estudios:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Ocupacion:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Telefono:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Calle:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Numero Interior:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Numero Exterior:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Colonia:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Estado:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Municipio:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Beneficiario:
          </th>
          <th scope="col" className="py-2 px-3 text-md bg-blue-400 text-center text-white">
           Estatus:
          </th>
           </tr>
      </thead>

      <tbody>
        
          <tr className="border-2 ">
             <td  className="border-2 text-center">{dato.ID_PROSPECTO}</td>
             <td  className="border-2 text-center">{dato.ID_VENDEDOR}</td>
             <td  className="border-2 text-center">{dato.NOMBRE}</td>
             <td  className="border-2 text-center">{dato.APELLIDO_PATERNO}</td>
             <td  className="border-2 text-center">{dato.APELLIDO_MATERNO}</td>
             <td  className="border-2 text-center">{dato.NACIONALIDAD}</td>
             <td  className="border-2 text-center">{dato.EDAD}</td>
             <td  className="border-2 text-center">{dato.ESTADO_CIVIL}</td>
             <td  className="border-2 text-center">{dato.GRADO_ESTUDIOS}</td>
             <td  className="border-2 text-center">{dato.OCUPACION}</td>
            <td  className="border-2 text-center">{dato.TELEFONO}</td>
            <td  className="border-2 text-center">{dato.CALLE}</td>
            <td  className="border-2 text-center">{dato.NUMERO_INT}</td>
            <td  className="border-2 text-center">{dato.NUMERO_EXT}</td>
            <td  className="border-2 text-center">{dato.COLONIA}</td>
            <td  className="border-2 text-center">{dato.MUNICIPIO}</td>
            <td  className="border-2 text-center">{dato.ESTADO}</td>
            <td  className="border-2 text-center">{dato.BENEFICIARIO}</td>
            <td  className="border-2 text-center">{dato.ESTATUS}</td>
       
          </tr>

      </tbody>
    </table>
    </div>
    </>
  );
};
export default Contrato;