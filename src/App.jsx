import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
  <div>
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la tienda"}/>} />
          <Route path="/detalle" element={"Detalle del producto"} />
          <Route path="*" element={"Error 404: Pagina no encontrada"} />
        </Routes>
      </BrowserRouter>
    </main>
    <footer>
      &copy; Todos los derechos reservados NEXO MARKET
    </footer>
  </div>
)

}

export default App
