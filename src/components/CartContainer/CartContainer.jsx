import { useContext, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { createOrder } from "../../data/Firebase";
import "./CartContainer.css";

export default function CartContainer() {

    const [orderCreatedId, setOrderCreated] = useState(false);
    const {cartItems, removeItems} = useContext(cartContext);

    async function handlecheckout(buyer) {
        
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const newOrderConfiremed = await createOrder({buyer, cartItems, total, date: new Date()});
        console.log(newOrderConfiremed.toJSON);

        alert("Compra realizada con exito su id de compra es:" + newOrderConfiremed.id);
    }

    if(orderCreatedId) {
        return (
            <div>
                <h2>Compra realizada con exito!!! </h2>
                <p>Su id de compra es:{orderCreatedId}</p>
                <Link to="/"><button>Volver a la tienda</button></Link>
            </div>
        );
    }

   if (cartItems.length === 0) {
    return (
    <div>
      <h1>El carrito está vacío</h1>
      <Link to="/"><button>Volver a la tienda</button></Link>
    </div>
    );
    }

    return (
  <section className="cartContainer">
    <h2>Tu carrito de compras:</h2>

    <div className="cartItems">
      {cartItems.map((item) => (
        <div key={item.id} className="cartItem">
          <img src={item.img} alt={item.title}/>
          <p>{item.title}</p>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Total a pagar: ${item.price * item.quantity}</p>
          <button onClick={() => removeItems(item.id)}>Eliminar 🗑️</button>
        </div>
      ))}
    </div>

    <div className="cartButtons">
      <button onClick={handlecheckout}>Confirmar compra</button>
      <Link to="/checkout"><button>Ir a pagar</button></Link>
      <Link to="/"><button>Volver a la tienda</button></Link>
    </div>
  </section>
);

}