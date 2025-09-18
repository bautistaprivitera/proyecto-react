import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a la tienda"}/>
      &copy; Todos los derechos reservados NEXO MARKET
    </>
  )
}


export default App
