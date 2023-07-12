function TarjetaProducto(props) {

   const {nombre,marca,genero,jugadores,edades,imagen,pais,precio} = props

   return(
      <div>
         <h3>{nombre}</h3>
         <p>Fabricante: {marca}</p>
         <img src={imagen} alt={nombre} />
         <p>Genero: {genero}</p>
         <p>JugadoreS: {jugadores}</p>
         <p>Edades: {edades}</p>
         <p>Origen: {pais}</p>
         <p>Valor: <span>${precio}</span></p>
      </div>
   )
}

export default TarjetaProducto