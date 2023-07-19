import './style.css'
import Carrito from '../Carrito/Carrito.jsx'
import { Link } from 'react-router-dom'

function Navbar() {

   return (

      <nav>

         <Link to="/">
            <h1>Lunática</h1>
         </Link>

         <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Estrategia</a></li>
            <li><a href="">Rol</a></li>
            <li><a href="">Cartas</a></li>
         </ul>

         <Carrito />

      </nav>

   )
}

export default Navbar