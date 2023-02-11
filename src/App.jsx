
import NuevoRegistro from './paginas/nuevoRegistro'
import Login from './paginas/Login'
import Generales from'./paginas/Generales'
import Apartado from './paginas/Apartado'
import Recibo from './paginas/Recibo'

import{BrowserRouter,Routes,Route}from 'react-router-dom'
import GenerarApartado from './paginas/GenerarApartado'

function App() {
  

  return (
    
    <BrowserRouter >
    <Routes>
      <Route index='/' element={<NuevoRegistro/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/generales' element={<Generales/>}/>
      <Route path='/apartado/:id_prospecto'element={<Apartado/>}/>
      <Route path='/recibo'element={<Recibo/>}/>
      <Route path='/generar_apartado'element={<GenerarApartado/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
