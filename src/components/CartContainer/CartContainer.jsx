import './style.scss'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

function CartContainer() {

   const { cart } = useContext(cartContext)

   if (cart.length === 0) {
      return(
         <h2 className='carritoVacio'>¿Se te perdió algo?</h2>
      )
   }
   return (
      <div className='cartList'>
         {
            cart.map((item) => {
               const { nombre, precio, imagen, count } = item
               return (
                  <div className='cartItem'>
                     <h2>{nombre}</h2>
                     <p>cantidad: {count}</p>
                     <img src={imagen} alt={nombre} />
                     <p>precio unitario: {precio}</p>
                     <p>subtotal: {precio * count}</p>
                  </div>
               )
            })
         }
      </div>
   )
}

export default CartContainer