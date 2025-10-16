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
        const value= event.target.value
        const inputName = event.target.name
        const newFormData = {...formData}
        newFormData[inputName] = value
        setFormData(newFormData)
    }
    return (
        <form onSubmit={ handleSubmit }>
            <label>Nombre:
                <input onChange={handleInputChange} placeholder="nombre" />
            </label>
            <label>Apellido:
                <input onChange={handleInputChange} placeholder="apellido" />
            </label>
            <label>Email:
                <input onChange={handleInputChange} placeholder="@" />
            </label>
            <label>Telefono:
                <input onChange={handleInputChange} placeholder="2611741872" />
            </label>
            <button>Confirmar</button>
            <button onClick={ () => setFormData({nombre:"", apellido: "", email: "", telefono: "" })} type="button">Cancelar</button>
        </form>
    );
}