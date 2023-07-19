import "./style.scss"
import { useState, useEffect } from "react";
import getData from "../../datos/datos";
import TarjetaProducto from "../TarjetaProducto/TarjetaProducto";

function ItemListContainer(props) {

   const [productos, setProductos] = useState([])

   async function traerProductos() {
      const respuesta = await getData()
      setProductos(respuesta)
   }
   useEffect(() => {
      traerProductos()
   })

   return (
      <div className="itemListContainer">
         <p className="saludo">{props.saludo}</p>
         <h2 className='contenedorProductos__titulo'>Nuestro catálogo lunatico</h2>
         <div className="contenedorProductos__contenedor">
            {productos.map((producto) => (
               <TarjetaProducto key={producto.id} {...producto}></TarjetaProducto>
            ))}
         </div>
      </div>
   )

}

export default ItemListContainer