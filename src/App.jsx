
import NuevoRegistro from './paginas/nuevoRegistro'
import Login from './paginas/Login'
import{BrowserRouter,Routes,Route}from 'react-router-dom'

function App() {
  

  return (
    
    <BrowserRouter >
    <Routes>
      <Route index='/' element={<NuevoRegistro/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
