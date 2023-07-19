import './style.scss'

function Item(props) {

   const {nombre,marca,genero,jugadores,edades,imagen,origen,precio} = props

   return(
      <div className='productCard'>
         <h3>{nombre}</h3>
         <p>Fabricante: {marca}</p>
         <img src={imagen} alt={nombre} />
         <p>Genero: {genero}</p>
         <p>JugadoreS: {jugadores}</p>
         <p>Edades: {edades}</p>
         <p>Origen: {origen}</p>
         <p>Valor: <span>${precio}</span></p>
      </div>
   )
}

export default Item