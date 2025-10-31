import { useState } from "react";
import "./Checkout.css"

export default function Checkout(props) {

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
                    <input name="name" onChange={handleInputChange} value={formData.username} placeholder="nombre" />
                </label>
                <label>Apellido:
                    <input name="apellido" onChange={handleInputChange} value={formData.apellido} placeholder="apellido" />
                </label>
                <label>Email:
                    <input name="email" onChange={handleInputChange} value={formData.email} placeholder="@" />
                </label>
                <label>Telefono:
                    <input name="telefono" onChange={handleInputChange} value={formData.telefono} placeholder="2611741872" />
                </label>
                <button type="submit" onChange={handleCheckout}>Confirmar</button>
                <button type="button" onClick={() => setFormData({ name: "", apellido: "", email: "", telefono: "" })}>Cancelar</button>
            </form>
        </div>
    );
}