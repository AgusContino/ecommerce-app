import './style.css'
import Carrito from '../Carrito/Carrito.jsx'

function Navbar() {

   return (

      <nav>

         <a href="./index.html">
            <h1>Lunática</h1>
         </a>

         <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Tienda</a></li>
            <li><a href="">Contacto</a></li>
         </ul>

         <Carrito />

      </nav>

   )
}

export default Navbar