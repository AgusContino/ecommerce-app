import './style.scss'
import { useContext, useState } from 'react'
import { cartContext } from '../../context/cartContext'
import InputComp from '../InputComp/InputComp'
import { exportOrderData } from '../../services/firebase'
import { Link, useNavigate } from 'react-router-dom'

export default function Checkout() {

   const { cart, totalPriceInCart } = useContext(cartContext)

   const [user,setUser] = useState({
      nombre:"",
      apellido:"",
      edad:""
   })

   const navigate = useNavigate()
   
   function onInputChange(evt) {
      const value = evt.target.value
      const name = evt.target.name
      const newState = {...user}
      newState[name] = value
      setUser(newState)
   }

   async function handleCheckout(evt) {
      evt.preventDefault()
      const orderItems = cart.map((item)=>{
         return({
            item:item.nombre,
            count:item.count
         })
      })
      const orderData = {
         orderItems: orderItems,
         user: user,
         date: new Date(),
         totalPrice: totalPriceInCart()
      }
      try {
         const orderId = await exportOrderData(orderData)
         alert(`Tu ticket: ${orderId}, redireccionando a ticket`)
         navigate(`/orderTicket/${orderId}`)
      } catch (error) {
         alert(`Error: ${error.message}`)
      }
   }

   return (

      <div>

         <h2>Checkout</h2>

         <form>
            <p>Complete sus datos</p>

            <InputComp name="nombre" label="Nombre:" value={user.nombre} onChange={onInputChange} />
            <InputComp name="apellido" label="Apellido:" value={user.apellido} onChange={onInputChange} />
            <InputComp name="edad" label="Edad:" value={user.edad} onChange={onInputChange} />

            <p>Total a pagar: {totalPriceInCart()}</p>

            <button onClick={handleCheckout}>Enviar orden</button>

         </form>

         <Link to="/carrito"><button>Volver al carrito</button></Link>         

      </div>

   )
}