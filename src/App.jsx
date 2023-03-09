
import NuevoRegistro from './paginas/nuevoRegistro'
import Login from './paginas/Login'
import Generales from'./paginas/Generales'
import Apartado from './paginas/Apartado'
import Recibo from './paginas/Recibo'
import GenerarApartado from './paginas/GenerarApartado'
import MenuPrincipal from './paginas/MenuPrincipal'
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Agenda from './paginas/Agenda'
import  Contrato from './paginas/Contrato'
import Disponibilidad from './paginas/Disponibilidad'
import Reporte_50_50 from './paginas/Reporte_50_50'
import ReportePagos from './paginas/ReportePagos'
import EstatusLote from './paginas/EstatusLote'



//Actualizado

function App() {
  

  return (
    
    <BrowserRouter >
    <Routes>
    <Route index='/' element={<Login/>}/>
      <Route path='/nuevoRegistro' element={<NuevoRegistro/>}/>
       <Route path='/generales' element={<Generales/>}/>
      <Route path='/apartado/:idProspecto'element={<Apartado/>}/>
      <Route path='/recibo'element={<Recibo/>}/>
      <Route path='/generarApartado'element={<GenerarApartado/>}/>
      <Route path='/agenda'element={<Agenda/>}/>
      <Route path='/contrato'element={<Contrato/>}/>
      <Route path='/menu'element={<MenuPrincipal/>}/>
      <Route path='/disponibilidad'element={<Disponibilidad/>}/>
      <Route path='/reporte_50_50'element={<Reporte_50_50/>}/>
      <Route path='/reportePagos'element={<ReportePagos/>}/>
      <Route path='/estatusLote'element={<EstatusLote/>}/>


    </Routes>
    </BrowserRouter>

  )
}

export default App
