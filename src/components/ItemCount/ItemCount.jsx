import "./style.scss";
import { useState } from "react";

function ItemCount() {

   const [contador, setContador] = useState(0)

   function sumar() {
      contador < 9
      ? setContador(contador+1)
      : setContador(contador)
   }
   function restar() {
      contador > 0
      ? setContador(contador-1)
      : setContador(contador)
   }
   function meterAlCarrito() {
      contador > 0 && contador < 10
      ? alert("sumar al carrito")
      : alert("cantidad invalida")
   }

   return (
      <div className="countContainer">

         <label htmlFor="cantidad">Cantidad:</label>

         <div className="controles">
            <button onClick={restar}>-</button>
            <input type="number" id="cantidad" name="cantidad" min="0" max="9" value={contador} />
            <button onClick={sumar}>+</button>
         </div>

         <button onClick={meterAlCarrito}>Añadir al Carrito</button>

      </div>
   );
}

export default ItemCount;
