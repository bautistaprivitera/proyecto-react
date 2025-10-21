import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsById, getProductsByCategory } from "../../data/Firebase"


export default function ItemDetailContainer() {

    const { idParam } = useParams();
    const [product, setProduct] = useState({ loading: true });

    useEffect(() => {
        getProductsById(idParam)
            .then(response => setProduct(response))
            .catch((error) => alert(`Error ${error}`))
    }, [])

    if (product.loading) {
        return <h1>Cargando...</h1>;
    }
    return (
        <section className="product-section">
            <h2>Supermercado - Productos</h2>
            <div className="product-grid">
                <div className="product-card" key={product.id}>
                    <img src={product.img} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>Precio: ${product.price}</p>
                    <p>Stock: {product.stock}</p>
                    <p>{product.description}</p>
                    <button>Agregar al carrito</button>
                </div>

            </div>
        </section>


    )
}