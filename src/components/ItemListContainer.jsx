import './ItemListContainer.css';
import { useState, useEffect } from "react";

export default function ItemListContainer(props) {
const [products, setProducts] = useState([]);
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
        console.log("Datos de la API:", data); 
        setProducts(data); 
      })
  .catch(error => console.error("Error al obtener los productos:", error));
}, []);
  return (
    <section className="product-section">
  <h1>{props.greeting}</h1>
  <h2>Supermercado - Productos</h2>
  <div className="product-grid">
    {products.map((prod) => (
      <div className="product-card" key={prod.id}>
        <img src={prod.image} alt={prod.title} />
        <h3>{prod.title}</h3>
        <p>Precio: ${prod.price}</p>
        <button className="addToCart">Agregar al carrito</button>
      </div>
    ))}
  </div>
</section>

    
  );
}
