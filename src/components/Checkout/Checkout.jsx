import './style.scss'
import { useContext, useState } from 'react'
import { cartContext } from '../../context/cartContext'
import InputComp from '../InputComp/InputComp'
import { exportOrderData } from '../../services/firebase'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const mySwal = withReactContent(Swal)

export default function Checkout() {

   const { cart, totalPriceInCart, clearCart } = useContext(cartContext)

   const [user, setUser] = useState({
      nombre: "",
      apellido: "",
      edad: ""
   })

   const navigate = useNavigate()

   function onInputChange(evt) {
      const value = evt.target.value
      const name = evt.target.name
      const newState = { ...user }
      newState[name] = value
      setUser(newState)
   }

   async function handleCheckout(evt) {
      evt.preventDefault()
      const orderItems = cart.map((item) => {
         return ({
            item: item.nombre,
            count: item.count
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
         clearCart()
         let timerInterval
         mySwal.fire({
            title: 'Orden enviada!',
            html: `Tu identificador de compra es ${orderId}`+
                  `</br>`+
                  'Serás redirigido a tu ticket de compra en <b></b> segundos.',
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
               const b = mySwal.getHtmlContainer().querySelector('b')
               timerInterval = setInterval(() => {
                  b.textContent = Math.ceil((mySwal.getTimerLeft())/1000)
               }, 100)
            },
            willClose: () => {
               clearInterval(timerInterval)
            }
         }).then(() => {
            navigate(`/orderTicket/${orderId}`)
         })
      } catch (error) {
         alert(`Error: ${error.message}`)
      }
   }

   return (

      <div className='checkoutComponent'>

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