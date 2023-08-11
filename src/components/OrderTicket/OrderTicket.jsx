import "./style.scss";
import { Link, useParams } from "react-router-dom";
import { getOrderData } from "../../services/firebase";
import { useEffect, useState } from "react";
import { SuperBalls } from "@uiball/loaders";

export default function OrderTicket() {

   const [order, setOrder] = useState({
      id: "",
      user: {
         nombre: "",
         apellido: ""
      },
      totalPrice: ""
   })

   const { orderId } = useParams()

   async function requestOrderData() {
      const orderData = await getOrderData(orderId)
      setOrder(orderData)
   }

   useEffect(() => {
      requestOrderData()
   }, [])

   return (
      <div className="orderTicketComp">
         {
            order.id === ""
               ? <div className="superBalls">
                  <SuperBalls
                     size={100}
                     speed={1.5}
                     color="black"
                  />
               </div>
               : <>
                  <h2>Datos de tu compra:</h2>
                  <p>Identificador: {order.id}</p>
                  <p>Nombre: {order.user.nombre}</p>
                  <p>Apellido: {order.user.apellido}</p>
                  <p>Total de compra: {order.totalPrice}</p>
                  <Link to="/"><button>Volver al listado</button></Link>
               </>
         }
      </div>
   )
}