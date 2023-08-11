import './style.scss'
import { Link } from 'react-router-dom'

function Item(props) {

   const {id,nombre,marca,genero,jugadores,edades,imagen,origen,precio} = props

   return(
      <div className='itemComp'>
         <h3>{nombre}</h3>
         <img src={imagen} alt={nombre} />
         <p>Fabricante: {marca}</p>
         <p>Genero: {genero}</p>
         <p>Jugadores: {jugadores}</p>
         <p>Edades: {edades}</p>
         <p>Origen: {origen}</p>
         <p>Valor: <span>${precio}</span></p>
         <Link className='Link' to={`/product/${id}`}>
            <button>Ver detalles</button>
         </Link>
      </div>
   )
}

export default Item