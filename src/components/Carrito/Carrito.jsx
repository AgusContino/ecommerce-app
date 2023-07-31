import "./style.scss"
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function Carrito() {

   const {cart} = useContext(cartContext)

   return(
      <div className="carrito">
         <p><FaShoppingCart /></p><span>{cart.length}</span>
      </div>
   )

}
export default Carrito