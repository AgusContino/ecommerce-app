import "./style.css";
import Carrito from "../Carrito/Carrito.jsx";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <nav>
         <Link to="/">
            <h1>Lunática</h1>
         </Link>

         <ul>
            <li>
               <Link to="/">
                  <h2>Home</h2>
               </Link>
            </li>
            <li>
               <Link to="/category/Estrategia">
                  <h2>Estrategia</h2>
               </Link>
            </li>
            <li>
               <Link to="/category/Rol">
                  <h2>Rol</h2>
               </Link>
            </li>
            <li>
               <Link to="/category/Cartas">
                  <h2>Cartas</h2>
               </Link>
            </li>
         </ul>

         <Link to="/carrito">
            <Carrito />
         </Link>
      </nav>
   );
}

export default Navbar;
