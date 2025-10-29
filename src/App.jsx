import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainers/ItemListContainer'
import ItemDetailContainer from './components/ItemListContainers/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import CartContainer from './components/CartContainer/CartContainer'
import { subirProducto } from './data/Firebase'

function App() {

  subirProducto();

  return (
  <div>
    <CartProvider>
      <BrowserRouter>
      <header>
        <NavBar/>
      </header>

        <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la tienda"}/>} />
          <Route path="/detalle/:idParam" element={<ItemDetailContainer/>} />
          <Route path="/category/:categParam" element={<ItemListContainer greeting={"Productos por categoria"}/>} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path="*" element={<div><h2>Error 404: Pagina no encontrada</h2></div>} />
        </Routes>
        </main>
        <footer>
          &copy; Todos los derechos reservados NEXO MARKET
        </footer>
      </BrowserRouter>
    </CartProvider>
      
    
  </div>
)

}

export default App
