import './App.css'

function App() {

  const persona = {
    nombre: "Bauti",
    apellido: "Privitera",
    edad: "18",
    color: "#173d1dff"
  }
  function estadoDePago() {
    return "Estas impago de impuestos😡"
  }
  const sectionStyles = {
    backgroundColor: persona.color,
    padding: "40px",
    border: "solid 2px white",

  }
  return (
    <>
      <section style = {sectionStyles}>
        <h1>Holaa, este es tu proyecto de React</h1>
        <h2>Bienvenido {persona.nombre} {persona.apellido}</h2>
        <h3>Tu edad es {persona.edad}</h3>
        <h2>{estadoDePago()}</h2>
        <div className="card">
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </section>
    </>
  )
}

export default App
