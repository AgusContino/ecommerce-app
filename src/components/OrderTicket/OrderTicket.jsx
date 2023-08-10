import "./style.scss";
import { Link, useParams } from "react-router-dom";
import { getOrderData } from "../../services/firebase";
import { useEffect, useState } from "react";

export default function OrderTicket() {

   const [order, setOrder] = useState({
      user: {
         nombre:"",
         apellido:""
      },
      totalPrice:""
   })

   const {orderId} = useParams()

   async function requestOrderData() {
      const orderData = await getOrderData(orderId)
      setOrder(orderData)
   }

   useEffect(() => {
      requestOrderData()
   }, [])
   
   return(
      <div>
         <h2>Detalle de tu compra:</h2>
         <p>Datos:</p>
         <p>Nombre: {order.user.nombre}</p>
         <p>Apellido: {order.user.apellido}</p>
         <p>Total de compra: {order.totalPrice}</p>

      </div>
   )
}