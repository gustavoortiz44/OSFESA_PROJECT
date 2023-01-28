import FormularioLogin from "../components/FormularioLogin";
import OSFESA from '../IMG/OSFESA.png'



const Login = () => {
    return (
        <>

            
            <div className="object-left-top">
            <img src={OSFESA} className="w-35 h-28 " />
          

            </div>

            <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0">Iniciar Sesion</h1>
            
            
            <div className="flex justify-center">
                 <FormularioLogin />
            </div>

        </>

    )
}
export default Login