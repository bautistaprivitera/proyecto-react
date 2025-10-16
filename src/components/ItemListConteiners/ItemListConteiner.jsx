import './ItemListConteiner.css';
import { useState, useEffect } from "react";
import getProducts, { getProductsByCategory } from "../../data/Firebase";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getProducts } from '../../data/Firebase';

export default function ItemListConteiner(props) {

  const [products, setProducts] = useState([]);
  const { categParam } = useParams();

  useEffect(() => {
    if (categParam === undefined) {
      console.log("Pidiendo los datos")
      const promiseData = getProducts();
      promiseData.then((respuesta) => {
        console.log("Datos recibidos", respuesta)
        setProducts(respuesta)

      }).catch((error) => alert(`Error ${error}`))
    }
    else {
      getProductsByCategory(categParam).then(response => setProducts(response))
    }
  }, [categParam])


  return (
    <section className="product-section">
      <h2>Supermercado - Productos</h2>
      <div className="product-grid">
        {products.map((prod) => (
          <div className="product-card" key={prod.id}>
            <img src={prod.img} alt={prod.title} />
            <h3>{prod.title}</h3>
            <p>Precio: ${prod.price}</p>
            <p>Stock: {prod.stock}</p>
            <Link to={`/detalle/${prod.id}`}>
              <button className="detail">Ver Detalle</button>
            </Link>

          </div>
        ))}
      </div>
    </section>


  );
}
