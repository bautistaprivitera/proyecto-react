import { useState } from "react";
import "./Checkout.css"

export default function Checkout() {

    const [formData, setFormData] = useState({
        name: "",
        apellido: "",
        email: "",
        telefono: ""
    });

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        props.handleCheckout(formData)
    }

    function handleInputChange(event) {
        const value = event.target.value
        const inputName = event.target.name
        const newFormData = { ...formData }
        newFormData[inputName] = value
        setFormData(newFormData)
    }
    return (
        <div className="checkout-container">
            <form onSubmit={handleSubmit}>
                <label>Nombre:
                    <input name="name" onChange={handleInputChange} placeholder="nombre" />
                </label>
                <label>Apellido:
                    <input name="apellido" onChange={handleInputChange} placeholder="apellido" />
                </label>
                <label>Email:
                    <input name="email" onChange={handleInputChange} placeholder="@" />
                </label>
                <label>Telefono:
                    <input name="telefono" onChange={handleInputChange} placeholder="2611741872" />
                </label>
                <button type="submit">Confirmar</button>
                <button type="button" onClick={() => setFormData({ nombre: "", apellido: "", email: "", telefono: "" })}>Cancelar</button>
            </form>
        </div>
    );
}