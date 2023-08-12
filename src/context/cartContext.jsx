import { createContext } from "react";
import { useState } from "react";

const cartContext = createContext({ cart: [] })

function CartContextProvider(props) {

   const [cart, setCart] = useState([])

   function addToCart(product, count) {
      const isInCart = (cart.findIndex((item) => item.id === product.id))

      if (isInCart < 0) {
         setCart([...cart, { ...product, count }])
      } else {
         const newCart = [...cart]
         newCart[isInCart].count = newCart[isInCart].count + count
         setCart(newCart)
      }

   }

   function removeItem(id) {
      const newCart = cart.filter(producto => producto.id != id)
      setCart(newCart)
   }

   function clearCart() {
      setCart([])
   }

   function totalItemsInCart() {
      let totalItems = 0
      cart.forEach(item => {
         totalItems = totalItems + item.count
      });
      return totalItems
   }

   function totalPriceInCart() {
      let totalPrice = 0
      cart.forEach(item => {
         totalPrice = totalPrice + item.precio * item.count
      });
      return (totalPrice)
   }

   return (
      <cartContext.Provider
         value={{
            cart,
            addToCart,
            removeItem,
            clearCart,
            totalItemsInCart,
            totalPriceInCart
         }}
      >
         {props.children}
      </cartContext.Provider>

   )
}

export { CartContextProvider, cartContext }