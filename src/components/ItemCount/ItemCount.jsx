import { Link } from "react-router-dom";
import "./style.scss";
import { useState } from "react";

function ItemCount(props) {
   const { stock, onAddToCart, producto } = props

   const [contador, setContador] = useState(1)
   const [mostrarContador, setmostrarContador] = useState(true)

   function sumar() {
      contador < 9 && contador < stock
         ? setContador(contador + 1)
         : setContador(contador)
   }
   function restar() {
      contador > 1
         ? setContador(contador - 1)
         : setContador(contador)
   }

   if (mostrarContador) {
      return (

         <div className="itemCountComp">

            <p>Cantidad:</p>

            <div className="controles">
               <button onClick={restar}>-</button>
               <span className="numeroContador">{contador}</span>
               <button onClick={sumar}>+</button>
            </div>

            <button onClick={() => { onAddToCart(contador); setmostrarContador(false) }}>Añadir al Carrito</button>

         </div>
      );
   } else {
      return (
         <div className="itemCountComp--productoAgregado">

            <p>Sumaste {contador} unidades de "{producto}" al carrito</p>

            <div className="controles--productoAgregado">
               <Link to="/carrito"><button>Finalizar compra</button></Link>

               <Link to="/"><button>Volver al listado</button></Link>

               <button onClick={() => setmostrarContador(true)}>Agregar más</button>
            </div>

         </div>
      )
   }



}

export default ItemCount;
