import './style.scss'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

function CartContainer() {

   const { cart, removeItem, clearCart, totalPriceInCart } = useContext(cartContext)

   if (cart.length === 0) {
      return (
         <div className='carritoVacio'>
            <h2>¿Se te perdió algo?</h2>
            <Link to="/"><button>Volver al listado</button></Link>
         </div>
      )
   }
   return (
      <div className='cart'>
         <div>
            <p className='precioTotal'>Precio total de la compra: ${totalPriceInCart()}</p>
         </div>
         <div className='cartList'>
            {
               cart.map((item) => {
                  const { nombre, precio, imagen, count, id } = item
                  return (
                     <div className='cartItem'>
                        <h2>{nombre}</h2>
                        <p>cantidad: {count}</p>
                        <img src={imagen} alt={nombre} />
                        <p>precio unitario: {precio}</p>
                        <p>subtotal: {precio * count}</p>

                        <button onClick={() => removeItem(id)}>Remover</button>

                     </div>
                  )
               })
            }
         </div>
         <div>
         <Link to="/checkout"><button>Terminar compra</button></Link>
            <button onClick={clearCart}>Vaciar Carrito</button>
         </div>
      </div>
   )
}

export default CartContainer