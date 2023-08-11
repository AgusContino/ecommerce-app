import "./style.scss"
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartWidget() {

   const { totalItemsInCart } = useContext(cartContext)

   return (
      <div className="CartWidgetComp">
         <p><FaShoppingCart /></p>
         {
            totalItemsInCart() != 0
               ? <span>{totalItemsInCart()}</span>
               : ""
         }

      </div>
   )

}

export default CartWidget