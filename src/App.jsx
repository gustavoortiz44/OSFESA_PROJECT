
import NuevoRegistro from './paginas/nuevoRegistro'
import Login from './paginas/Login'
import Generales from'./paginas/Generales'
import Apartado from './paginas/Apartado'
import Recibo from './paginas/Recibo'
import GenerarApartado from './paginas/GenerarApartado'
import MenuPrincipal from './paginas/MenuPrincipal'
import{BrowserRouter,Routes,Route}from 'react-router-dom'



//Actualizado

function App() {
  

  return (
    
    <BrowserRouter >
    <Routes>
    <Route index='/' element={<Login/>}/>
      <Route path='/nuevoRegistro' element={<NuevoRegistro/>}/>
       <Route path='/generales' element={<Generales/>}/>
      <Route path='/apartado/:id_prospecto'element={<Apartado/>}/>
      <Route path='/recibo'element={<Recibo/>}/>
      <Route path='/generarApartado'element={<GenerarApartado/>}/>
     
 
      <Route path='/menu'element={<MenuPrincipal/>}/>

    </Routes>
    </BrowserRouter>

  )
}

export default App
