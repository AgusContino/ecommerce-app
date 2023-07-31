import { createContext } from "react";
import { useState } from "react";

const cartContext = createContext({ cart: [] })

function CartContextProvider(props) {

   const [cart, setcart] = useState([])

   function addToCart(product,count) {
      setcart([...cart,{...product,count}])
      alert(`Añadiste ${count} unidades de "${product.nombre}" al carrito`)
   }

   //! Faltan acciones:
   // removeItem(id) remueve un item x su id
   // clearCart() remueve todos los items
   // totalItemsInCart() devuelve numero de total de items con un for each (pista: total += item.count)
   // totalPrice() precio total


   return (
      <cartContext.Provider
         value={{
            cart,
            addToCart
         }}
      >
         {props.children}
      </cartContext.Provider>

   )
}

export {CartContextProvider,cartContext}