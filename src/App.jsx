
import NuevoRegistro from './paginas/nuevoRegistro'
import Login from './paginas/Login'
import Generales from'./paginas/Generales'
import{BrowserRouter,Routes,Route}from 'react-router-dom'

function App() {
  

  return (
    
    <BrowserRouter >
    <Routes>
      <Route index='/' element={<NuevoRegistro/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Generales' element={<Generales/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
