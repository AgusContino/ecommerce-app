import "./style.scss";
import { useState } from "react";

function ItemCount(props) {
   const {stock, onAddToCart} = props

   const [contador, setContador] = useState(1)

   function sumar() {
      contador < 9 && contador < stock
      ? setContador(contador+1)
      : setContador(contador)
   }
   function restar() {
      contador > 1
      ? setContador(contador-1)
      : setContador(contador)
   }
  
   return (
      <div className="countContainer">

         <label htmlFor="cantidad">Cantidad:</label>

         <div className="controles">
            <button onClick={restar}>-</button>
            <span className="numeroContador">{contador}</span>
            <button onClick={sumar}>+</button>
         </div>

         <button onClick={() => onAddToCart(contador)}>Añadir al Carrito</button>

      </div>
   );
}

export default ItemCount;
