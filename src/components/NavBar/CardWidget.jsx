import { useContext } from 'react'
import './CardWidget.css'
import { cartContext } from '../../Context/CartContext'
export default function CardWidget(){

    const {countCartItems} = useContext(cartContext)

    return(
        <div>
            <h2 className="cardWidget">🛒 { countCartItems() }</h2>
        </div>
    )
}