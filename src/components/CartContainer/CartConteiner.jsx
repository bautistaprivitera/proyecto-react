import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { createOrder } from "../../data/Firebase";

export default function CartConteiner() {
    const [cartItems, removeItems] = useContext(cartContext);

    async function handlecheckout(buyer) {

        const newOrderConfiremed = await createOrder({buyer, cartItems, total, date: new Date()});
        console.log(newOrderConfiremed.toJSON);

        alert("Compra realizada con exito su id de compra es:" + newOrderConfiremed.id);
    }

    if (cartItems.length === 0) {
        return <h1>El carrito esta vacio</h1>,
        <button>Volver a la tienda</button>

    }
    return (
        <section>
            <div>
                <h2>Tu carrito de compras:</h2>
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>Precio:{item.price}</p>
                            <p>Cantidad:{item.quantity}</p>
                            <p>Total a pagar:${item.price * item.quantity}</p>
                            <button onClick={() => removeItems(item.id)}>Eliminar🗑️</button>
                        </div>
                    ))}
                    <button onClick={handlecheckout}>Confirmar compra</button>
                    <Link to="/checkout"><button>Ir a pagar</button></Link>
                    <Link to="/"><button>Volver a la tienda</button></Link>
                </div>
            </div>
        </section>
    );
}