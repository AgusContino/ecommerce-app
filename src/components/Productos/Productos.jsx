import { useState, useEffect } from "react";
import getData from "../../datos/datos";
import TarjetaProducto from "../TarjetaProducto/TarjetaProducto";

function ContenedorProductos() {

   const [productos, setProductos] = useState([])

   async function traerProductos() {
      const respuesta = await getData()
      setProductos(respuesta)
   }
   useEffect(() => {
      traerProductos()
   })

   return (
      <div>
         <h2>Nuestro catálogo lunatico</h2>
         {productos.map((producto) => (
            <TarjetaProducto key={producto.id} {...producto}></TarjetaProducto>
         ))}
      </div>
   )
}

export default ContenedorProductos