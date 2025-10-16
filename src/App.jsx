import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListConteiners/ItemListConteiner'
import ItemDetailConteiner from './components/ItemListConteiners/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import CartConteiner from './components/CartContainer/CartConteiner'
import { useEffect } from 'react'
import { subirProducto } from './data/Firebase'

function App() {

  subirProducto();

  return (
  <div>
    <main>
      <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la tienda"}/>} />
          <Route path="/detalle/:idParam" element={<ItemDetailConteiner/>} />
          <Route path="/category/:categParam" element={<ItemListContainer greeting={"Productos por categoria"}/>} />
          <Route path="/cart" element={<CartConteiner/>} />
          <Route path="*" element={<div><h2>Error 404: Pagina no encontrada</h2></div>} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </main>
    <footer>
      &copy; Todos los derechos reservados NEXO MARKET
    </footer>
  </div>
)

}

export default App
