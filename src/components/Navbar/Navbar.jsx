import "./style.scss";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
   return (
      <nav className="navbarComp">
         <Link to="/">
            <h1>Lunática</h1>
         </Link>

         <ul>
            <li>
               <NavLink to="/" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink to="/category/Estrategia" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>
                  Estrategia
               </NavLink>
            </li>
            <li>
               <NavLink to="/category/Rol" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>
                  Rol
               </NavLink>
            </li>
            <li>
               <NavLink to="/category/Cartas" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>
                  Cartas
               </NavLink>
            </li>
         </ul>

         <NavLink to="/carrito" className={({ isActive }) => isActive ? "cartWidgetLink active" : "cartWidgetLink"}>
            <CartWidget className="cartWidgetIcon" />
         </NavLink>
      </nav>
   );
}

export default Navbar;
