import { useState } from "react";
import "./Checkout.css"
import { Link } from "react-router-dom";

export default function Checkout({handleCheckout}) {

    const [formData, setFormData] = useState({
        name: "",
        apellido: "",
        email: "",
        phone: ""
    });

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        handleCheckout(formData)
    }

    function handleInputChange(event) {
        const value = event.target.value
        const inputName = event.target.name
        const newFormData = { ...formData }
        newFormData[inputName] = value
        setFormData(newFormData)
    }

    function handleCancel() {
        setFormData({ name: "", apellido: "", email: "", phone: "" });
    }
    return (
        <div className="checkout-container">
            <form onSubmit={handleSubmit}>
                <label>Nombre:
                    <input required name="name" onChange={handleInputChange} value={formData.name} placeholder="nombre" />
                </label>
                <label>Apellido:
                    <input required name="apellido" onChange={handleInputChange} value={formData.apellido} placeholder="apellido" />
                </label>
                <label>Email:
                    <input required name="email" onChange={handleInputChange} value={formData.email} placeholder="@" />
                </label>
                <label>Telefono:
                    <input required  name="phone" onChange={handleInputChange}  type="tel" value={formData.phone} placeholder="2616177429" />
                </label>
                <button type="submit">Confirmar compra</button>
                <button type="button" onClick={handleCancel}>Cancelar</button>
            </form>
            <div className="checkout-buttons">
                <Link to="/"><button>Volver a la tienda</button></Link>
            </div>
        </div>
    );
}