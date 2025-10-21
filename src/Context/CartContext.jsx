import { createContext, useState } from "react"

    const cartContext = createContext("default value");
export function CartProvider({children}){
    
   const [cartItems, setCartItems] = useState([]);

    function addItems(newItem){
        const quantityCount = 1
        const newCart = structuredClone(cartItems)
        const isInCart = cartItems.some(item => item.id === newItem.id)

        if(isInCart){
            const index = newCart.findIndex(item => item.id === newItem.id)
            newCart[index].quantity += quantityCount
            alert("Se agrego una unidad mas al carrito")
        }else{
            newItem.quantity = quantityCount
            newCart.push(newItem)
            alert("Se agrego el producto al carrito")
        }
        setCartItems(newCart);
    }
    function countCartItems(){
        let count = 0;
        cartItems.forEach(item => count += item.quantity)
        return count;
    }

    function removeItems(idToDelete){
        const newCart = cartItems.filter(itemInCart => itemInCart.id !== idToDelete)
        setCartItems(newCart)
    }

    return(
    <cartContext.Provider value={{cartItems, removeItems, addItems, countCartItems}}>
        {children}
    </cartContext.Provider>
)

}

export {cartContext};