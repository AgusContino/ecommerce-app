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
               <Link to="/category/estrategia">
                  <h2>Estrategia</h2>
               </Link>
            </li>
            <li>
            <Link to="/category/rol">
                  <h2>Rol</h2>
               </Link>
            </li>
            <li>
            <Link to="/category/cartas">
                  <h2>Cartas</h2>
               </Link>
            </li>
         </ul>

         <Carrito />
      </nav>
   );
}

export default Navbar;
