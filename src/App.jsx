import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListConteiners/ItemListContainer'
import ItemDetailConteiner from './components/ItemListConteiners/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
  <div>
    <main>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la tienda"}/>} />
          <Route path="/detalle/:idParam" element={<ItemDetailConteiner/>} />
          <Route path="/category/:categParam" element={<ItemListContainer greeting={"Productos por categoria"}/>} />
          <Route path="/cart" element={<div><h1>Carrito de compras</h1></div>} />
          <Route path="*" element={<div><h2>Error 404: Pagina no encontrada</h2></div>} />
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
